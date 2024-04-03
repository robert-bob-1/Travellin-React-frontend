import { create } from 'zustand';

export type UserType = 'none' | 'client' | 'agent';

interface UserState {
    isLoggedIn: boolean;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
    userType: UserType;
    setUserType: (userType: UserType) => void;

}

export const useUserState = create<UserState>()((set) => ({
    isLoggedIn: false,
    setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
    userType: 'none',
    setUserType: (userType) => set({ userType }),
}));
