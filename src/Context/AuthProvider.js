 
import React, { createContext, useState } from 'react';
 
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [user, setUserSearch] = useState("");
    const authInfo = {
        setUserSearch,
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider