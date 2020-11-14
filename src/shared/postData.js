import { baseUrl } from './config';

export const postData = (endpoint, inputdata) => {

    console.log('posting ' + baseUrl + endpoint );

    return fetch(baseUrl + endpoint, {
        method: 'POST',
        body: JSON.stringify(inputdata),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
    .then(response => {
        if (response.ok) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .catch(error => { console.log('POST ', error.message);
        alert('Your item could not be posted\nError: '+ error.message); })
}