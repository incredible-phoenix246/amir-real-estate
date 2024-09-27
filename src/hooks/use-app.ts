import { create } from 'zustand';

interface AppState {
    isActive: string;
    setIsActive: (link: string) => void;
    landingMobileMenu: boolean;
    setLandingMobileMenu: (value: boolean) => void;
}

const useApp = create<AppState>((set) => ({
    isActive: '',
    setIsActive: (link) => set({ isActive: link }),
    landingMobileMenu: false,
    setLandingMobileMenu: (value) => set({ landingMobileMenu: value }),
}));

export default useApp;
