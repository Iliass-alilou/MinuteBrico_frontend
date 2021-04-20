import Cookies from 'js-cookie';
import React , {useState,createContext} from 'react';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const authToken = Cookies.get('token');
    const setAuthToken = useState(null);
    return(
        <AuthContext.Provider value={{authToken, setAuthToken}}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthContext;
