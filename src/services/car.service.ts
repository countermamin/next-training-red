import axios from 'axios';

const url = 'https://car-api2.p.rapidapi.com/api/vin/KNDJ23AU4N7154467';

const options = {
    headers: {
        'X-RapidAPI-Key': '35a098294emsh47e7785cf06fea5p1c2e52jsn738ee4e24091',
        'X-RapidAPI-Host': 'car-api2.p.rapidapi.com',
    },
};

export const CarService = {
    async getAll() {
        try {
            const response = await axios.get(url, options);
            const data = response.data; // Now typescript infers the correct type for "response"
            return data;
        } catch (error) {
            console.error(error);
            return [];
        }
    },
};
