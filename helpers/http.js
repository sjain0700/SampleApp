import axios from 'axios';

export class HTTPHelper {

    static setToken = async (tokenRequired) => {
        let token = 'Basic eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkZW1vdXNlcjEiLCJuYW1lIjoiUkFLQkFOSyBEZW1vIiwiaWF0IjoxNTE2MjM5MDIyfQ.hD2So1Jms00c7XB_bxNIrTgvSqMesmrlc0FkBAdY6rM'
        let config = {}
        if (tokenRequired) {
            Object.assign(config, {
                'headers': {
                    'Authorization': token
                }
            })
        }

        return config;
    }

    static post = async (url, body, tokenRequired = true, headers = {}) => {
        config = await HTTPHelper.setToken(tokenRequired)
        return axios.post(url, body, config)
    }

}