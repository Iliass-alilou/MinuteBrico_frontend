import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProfileBricoleur.css";
import {Link } from "react-router-dom"

const ProfileBricoleur = () => {
  const [profileName, setProfileName] = useState("");
  const [profileCell, setProfileCell] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [profileEmail, setProfileEmail] = useState("");

  const profileData = async () => {
    try {
      {/*const res = await axios.get("https://localhost:8080/bricoleur");*/}
      const res = await axios.get("https://randomuser.me/api/");
      setProfileCell(res.data.results[0].cell);
      setProfileEmail(res.data.results[0].email);
      setProfileImage(res.data.results[0].picture.large);
      setProfileName(
        `${res.data.results[0].name.first} ${res.data.results[0].name.last}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    profileData();
  }, []);

  return (
    <div>
       {/*  <button onClick={() => profileData()}>Nouveau</button>*/} 
       <div className="card">
        <img src={profileImage} style={{ width: "100%" }} />
        <h1>{profileName}</h1>
        <p className="title">{profileEmail}</p>
        <p>{profileCell}</p>
        <p>
          <button className= "btn btn-primary"> <Link color= "white" to="/profile_brico_details" >Visiter Mon profile</Link></button>
        </p>
      </div>
    </div>
  )
}

export default ProfileBricoleur;