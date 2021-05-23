import React from 'react'

function Formation({datas}) {
    return (
        <div className="cursus mb3">
        <h3>Formations</h3>
        {datas.map(item => (
          <div className="grid__row" key={item.id}>
            <div className="grid__item">
              <p className="grid__date">{item.date}</p>
            </div>
            <div className="grid__item">
              <h4 className="grid__title">{item.title}</h4>
              <p className="grid__location">{item.location}</p>
            </div>
          </div>
        ))}
      </div>
    )
}


export default Formation