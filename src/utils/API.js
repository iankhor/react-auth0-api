import { api } from './init'

export function pingApiServer(){
    return api.get('/')
        .then(function (response) {
            return response.data
        })
        .catch(function (error) {
            return error.response.data
        })
}

export function fetchProfilesNoAuth(){
    return api.get('/profiles')
        .then(function (response) {
            return response.data
        })
        .catch(function (error) {
            return error.response.data
        })
}

export function fetchProfilesWithAuth(token){
    return api.get('/profiles', { headers: { 'Authorization': 'Bearer ' + token } })
        .then(function (response) {
            return response.data
        })
        .catch(function (error) {
            return error.response.data
        })
}