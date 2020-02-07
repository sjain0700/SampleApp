
import { HTTPHelper } from './http';
import { AppString } from './strings'
import {  Alert } from 'react-native';

export class ServiceHelper {

    static _requestAsync = async (data) => {
        try {
            response = await HTTPHelper.post( AppString.baseUrl, data, false)
            console.log('response is->>', response)
            if (response) {

                return Promise.resolve(true)
            }
            else {
                return Promise.resolve(false);
            }
        }
        catch (e) {
            console.log('server error')
            alert(AppString.serverError);
        }


    }
}
