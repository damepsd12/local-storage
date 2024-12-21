import axios from "axios";
import { baseURL } from "./constant";
import { useRouter } from "next/navigation";

export const setLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
};

export const removeLocalStorage = (key) => {
    localStorage.removeItem(key);
};

export const getLocalStorage = (key) => {
    return localStorage.getItem(key);
};

export const setAuthentication = (token) => {
    setLocalStorage("token", token);
};

export const logOut = () => {
    removeLocalStorage("token");
    console.log("Déconnecté")
};

export const isLogin = async () => {
    const token = getLocalStorage("token");

    if (token) {
        try {
            const res = await axios.post(`${baseURL}/auth`, { token });
            return res.data;
        } catch (error) {
            console.error("Authentication error:", error);
            return false;
        }
    }
    return false;
};
