import React from 'react';
import moment from 'moment-timezone';
//import AsyncStorage from '@react-native-community/async-storage'; hello
import {AsyncStorage} from 'react-native';

export class Utils extends React.Component {

    static fetchUserAccessToken = async () => {

        let expiryTimeSecs = await AsyncStorage.getItem('expiryTimeSecs')
        if (!expiryTimeSecs) {
            expiryTimeSecs = 7200
        }
        //console.log("expiryTimeSecs", expiryTimeSecs)
        let d = new Date()
        d.setSeconds(d.getSeconds() + parseInt(expiryTimeSecs))

       // AsyncStorage.clear()
        //await AsyncStorage.setItem('accessToken', "5d871576093283d7df26f329")
        //await AsyncStorage.setItem('userId', "5d871576093283d7df26f329")
        //await AsyncStorage.setItem('tokenExpiryTimestamp',d.getTime())
        await AsyncStorage.setItem('clientId', "00000000")
        //await AsyncStorage.setItem('refreshToken', "qfdertwedfv")

        // await AsyncStorage.setItem('accessToken', "5d5d4869134b68cf989e3bc1")
        // await AsyncStorage.setItem('userId', "5d5d4869134b68cf989e3bc1")
        // await AsyncStorage.setItem('tokenExpiryTimestamp',d.getTime() + "")
        // await AsyncStorage.setItem('clientId', "00000000")
        // await AsyncStorage.setItem('refreshToken', "qfdertwedfv")

        const accessToken =  await AsyncStorage.getItem('accessToken');
        return accessToken;
      }

    static fetchClientId = async () => {
        const clientId =  await AsyncStorage.getItem('clientId');
        return clientId ? clientId : "00000000" ;
      }

    static fetchUserId = async () => {
        const userId =  await AsyncStorage.getItem('userId');
        return userId;
      }

    static fetchUserEmail = async () => {
        return await AsyncStorage.getItem('userEmail');
      }

    static fetchUserPassword = async () => {
        return await AsyncStorage.getItem('userPassword');
      }

    static fetchExpiryTimeSeconds = async () => {
        return await AsyncStorage.getItem('expiryTimeSecs');
      }

    static fetchRefreshToken = async () => {
        return await AsyncStorage.getItem('refreshToken');
      }

    static fetchTokenExpiryTimestamp = async () => {
        return await AsyncStorage.getItem('tokenExpiryTimestamp');
      }

    static getDateString = (dateStr, format = 'YYYY-MM-DD hh:mm:ss') => {
        let m = moment().tz(moment.tz.guess()); //moment.tz.guess()
        if (dateStr) {
            m = moment(dateStr).tz(moment.tz.guess());
        }
        return m.format(format);
    }

    static getDateObject = (dateStr, format = 'YYYY-MM-DD hh:mm:ss') => {
        return moment(dateStr, format).toDate();
    }

    static getMidNightDateObject = (dateStr, format = 'YYYY-MM-DD hh:mm:ss') => {
        return moment(dateStr, format).toDate().setHours(0,0,0,0);
    }

    static getCurrentDate() {
        return moment().tz(moment.tz.guess()).toDate();
    }

    // This method is required because 'new Date(dateStr)' gives NaN on actual device.
    static  getDateFromString = (dateStr) => {
        let dateParam = dateStr.split(/[\s-:]/)  
        dateParam[1] = (parseInt(dateParam[1], 10) - 1).toString()
        return new Date(...dateParam);
    }

    static convertJSONToQueryString = (data) => {
        let queryString = "";
        for (let param in data) {
            if(queryString) {
                queryString += "&"
            }
            queryString += param + "="+ data[param]
        }
        return encodeURI(queryString)
    }

    static convertDateToMonthFormat = (current_datetime) =>{
        const months = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
          ];
        let dateString = new Date(current_datetime)
        console.log('DATESTASDFAS',dateString);

        var day = dateString.getDate();
        var monthIndex = dateString.getMonth();
        var year = dateString.getFullYear();

        let tempDate = day + ' ' + months[monthIndex] + ' ' + year  + ', ' + dateString.getHours() + ":" + dateString.getMinutes() + ":" + dateString.getSeconds() 
        
        return tempDate
    }
}

