import { defineStore } from 'pinia';

export const useAuthStore= defineStore('AuthUserStore', {
    state: () => {
        return {
            username: 'ingridgape',
        }
    },
})