import axios from 'axios';

const instance = axios.create({baseURL:"https://linkedinextension.herokuapp.com"})

export default instance;