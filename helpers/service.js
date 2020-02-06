
import { HTTPHelper } from './http';

export class LoginHelper {

    static _signInAsync = async (data) => {
        console.log('data is', data)
        try {
            //response = await HTTPHelper.post(IRP_CONFIG.baseURL + IRP_CONFIG.login, data, false)
            response = await HTTPHelper.post('http://rakbank-test.mocklab.io/activation', data, false)
             console.log('response is->>', response)
            if(response) {
               
                return Promise.resolve({
                    // userEmail: data.userName,
                    // userId: response.data.user.id,
                    response
                })
            }
            else {
                return Promise.resolve(false);
            }
        }
        catch(e) {

           // alert(errors("unableToLogin"));
           // console.log(errors("unableToLogin"), e)
        }
        
        
    }
}
