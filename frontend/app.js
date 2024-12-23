import axios from 'axios';

// Instance Axios configurée
const api = axios.create({
    baseURL: "https://local-storage-qirv.onrender.com/api/users", // Remplacez par l'URL de votre API déployée si nécessaire
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;