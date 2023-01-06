 
import React, { createContext, useState } from 'react';
 
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [searchText, setSearchText] = useState("");
    const authInfo = {
        setSearchText,
        searchText
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider