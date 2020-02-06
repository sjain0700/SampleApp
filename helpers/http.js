import axios from 'axios';
//import AsyncStorage from '@react-native-community/async-storage';
//import { LoginHelper } from '../components/login/service';
//import { Utils } from './utils'
import {AsyncStorage} from 'react-native';

export class HTTPHelper {

    static setToken = async (tokenRequired) => {
        let token = 'Basic eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkZW1vdXNlcjEiLCJuYW1lIjoiUkFLQkFOSyBEZW1vIiwiaWF0IjoxNTE2MjM5MDIyfQ.hD2So1Jms00c7XB_bxNIrTgvSqMesmrlc0FkBAdY6rM' //await AsyncStorage.getItem('accessToken')
        let config = {}
        if (tokenRequired) {
            Object.assign(config, {
                'headers': {
                    'Authorization': token //'Bearer ' + token
                }
            })
        }

        return config;
    }

    // static get = async (url, tokenRequired = true) => {
    //     await LoginHelper._validateToken(tokenRequired);
    //     config = await HTTPHelper.setToken(tokenRequired)
    //     return axios.get(url, config)
    // }

    static post = async (url, body, tokenRequired = true, headers = {}) => {
       // await LoginHelper._validateToken(tokenRequired);
        config = await HTTPHelper.setToken(tokenRequired)

        return axios.post(url, body, config)
    }

}