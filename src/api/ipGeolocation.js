import axios from "axios";

export const ipGeolocation = (ip)=>{
    const api_key= 'at_5iQwGYLtvzwd3XXuM4KTwdYLi7XA4';
    const ipAddress = ip;

   axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=${api_key}&ipAddress=${ipAddress}`)
        .then( res => { 
                const obj = res.data
                return obj;
            });   
}