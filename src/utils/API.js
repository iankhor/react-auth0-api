import { api } from './init'

export function pingApiServer(){
    return api.get('/')
        .then(function (response) {
            // console.log(response.data)
            return response.data
        })
        .catch(function (error) {
            console.log(error)
            return error.response.data
        })
}

export function fetchProfilesNoAuth(){
    return api.get('/profiles')
        .then(function (response) {
            // console.log(response.data)
            return response.data
        })
        .catch(function (error) {
            console.log(error.response.data)
            return error.response.data
        })
}

export function fetchProfilesWithAuth(token){
    return api.get('/profiles', { headers: { 'Authorization': 'Bearer ' + token } })
        .then(function (response) {
            // console.log(response.data)
            return response.data
        })
        .catch(function (error) {
            console.log(error.response.data)
            return error.response.data
        })
}