import React, { createContext, useState, useEffect } from 'react';

interface UserContextValue {
    user: any;
    getUser: () => Promise<void>;
    logout: () => void;
}

const UserContext = createContext<UserContextValue | undefined>(undefined);

export const UserContextProvider: React.FC = ({ }) => {
    const [user, setUser] = useState<any>();

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
        }
    };

    const value: UserContextValue = {
        user,
        getUser,
        logout,
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