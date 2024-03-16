import React, { createContext, useState, useEffect } from 'react';
// import { apiGet } from './api/fetch';

interface UserContextValue {
    user: any;
    getUser: () => Promise<void>;
    logout: () => void;
    globalLoading: boolean;
}

const UserContext = createContext<UserContextValue | undefined>(undefined);

export const UserContextProvider: React.FC = ({ }) => {
    const [user, setUser] = useState<any>();
    const [globalLoading, setGlobalLoading] = useState(false);

    useEffect(() => {
        (async () => {
            await getUser();
        })();
    }, []);

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    const getUser = async () => {
        setGlobalLoading(true);
        const token = localStorage.getItem('token');
        try {
            // const decodedToken = jwt.decode(token);
            // if (!decodedToken) {
            //     throw new Error('Invalid token');
            // }
            // const data = await apiGet('/auth/user');
            // setUser(data);
        } catch (error: any) {
            console.error('JWT validation error:', error.message);
        } finally {
            setGlobalLoading(false);
        }
    };

    const value: UserContextValue = {
        user,
        getUser,
        logout,
        globalLoading,
    };

    return (
        <UserContext.Provider value={value}>
            {/* {globalLoading ? <div>Loading...</div> : children} */}
        </UserContext.Provider>
    );
};

export const useUserContext = (): UserContextValue => {
    const context = React.useContext(UserContext);
    if (!context) {
        throw new Error('useUserContext must be used within a UserContextProvider');
    }
    return context;
};