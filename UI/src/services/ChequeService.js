import axios from 'axios';
const apiUrl = 'http://localhost:3005';
const headers = {
    'content-type': 'application/json'
};

export const addNewCheque = (chequeDetails) => {
    let url = `${apiUrl}/addChequeDetail`;
    return axios.post(url, chequeDetails, headers);
}
