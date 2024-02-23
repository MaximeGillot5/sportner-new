// authService.js

import axios from "axios";

const authService = {
    getToken: () => {
        return localStorage.getItem("token");
    },

    setAuthHeaders: () => {
        const token = authService.getToken();
        if (token) {
            axios.defaults.headers.common["Authorization"] = `"Bearer ${token}"`;
        }
    },
};

export default authService;
