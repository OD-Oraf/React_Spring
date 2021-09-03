import fetch from 'unfetch';


const checkStatus = response => {
    //return response if ok
    if (response.ok) {
        return response;
    }
    // convert non-2xx HTTP responses into errors:
    const error = new Error(response.statusText);
    error.response = response;
    return Promise.reject(error);
}


export const getAllStudents = () =>
    fetch("api/v1/students")
        .then(checkStatus);
