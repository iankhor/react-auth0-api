import AuthService from './AuthService'
import axios from 'axios'

export const auth = new AuthService(
                    process.env.REACT_APP_AUTH0_CLIENT_ID, 
                    process.env.REACT_APP_AUTH0_DOMAIN)

export const api = axios.create({
                  baseURL: process.env.REACT_APP_API_URL
                  })
