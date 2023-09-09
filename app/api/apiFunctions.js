import axios from "axios";

export const translateTextToCommand = async (text) => {
    try {
        const response = await axios.post(
            `http://localhost:3000/api/translate/text`,
            { text }
        );
        return response.data.body;
    } catch (error) {
        console.error("Error calling API:", error);
        throw error;
    }
};

export const translateCommandToText = async (command) => {
    try {
        const response = await axios.post(`/translate/command`, { command });
        return response.data.body;
    } catch (error) {
        console.error("Error calling API:", error);
        throw error;
    }
};
