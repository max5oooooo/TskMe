import axios from "axios";
import { formatApiUrl, formatAuthUrl } from "../config";

export const SDK = {
    auth: {
        /**
         * Login with an exsiting user
         * @param {object} payload
         * @param {string} payload.email
         * @param {string} payload.password
         * @returns {Promise<{ token: string, user: object }>}
         */
        login: async (payload) => {
            const response = await axios({
                url: formatAuthUrl("/token"),
                method: "POST",
                data: payload
            });

            return response.data;
        },
        /**
         * Register a new user
         * @param {object} payload
         * @param {string} payload.first_name
         * @param {string} payload.last_name
         * @param {string} payload.email
         * @param {string} payload.password
         */
        register: async (payload) => {
            const response = await axios({
                url: formatApiUrl("/users"),
                method: "POST",
                data: payload
            });

            return response.data;
        },
    },
    users: {
        /**
         * Update user profile info
         * @param {object} payload
         * @param {string} [payload.first_name]
         * @param {string} [payload.last_name]
         * @param {string} [payload.email]
         * @param {string} [payload.password]
         */
        updateProfile: async (payload, token) => {
            const response = await axios({
                url: formatApiUrl("/users"),
                method: "PUT",
                headers: {
                    "Authorization": `Bearer ${token}`
                },
                data: payload
            });

            return response.data;
        }
    }
}