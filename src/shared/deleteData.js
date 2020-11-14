import { baseUrl } from './config';

export const deleteData = (endpoint, inputdata) => {

    console.log('deleting ' + baseUrl + endpoint );

    return fetch(baseUrl + endpoint, {
        method: 'DELETE',
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
    .catch(error => { console.log('Delete ', error.message);
        alert('Your item could not be deleted\nError: '+ error.message); })
}
