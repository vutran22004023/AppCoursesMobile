
import axios from 'axios';
import {API_URL} from '@env'
import { ILogin, IRegister } from '~/types';

const LoginService = async(data : ILogin)=> {
    try {
        const res = await axios.post(`${API_URL}/api/login-in`, data)
        return res?.data
    }catch (e) {
        console.log(e);
    }
}

const RegisterService = async(data: IRegister) => {
    try {
        const res= await axios.post(`${API_URL}/api/register`, data)
        return res?.data
    }catch (err) {
        console.log(err);
    }
}

export  {
    LoginService,
    RegisterService
}