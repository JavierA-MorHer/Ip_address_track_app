import React, { useEffect, useState } from 'react'
import axios from "axios";
import Swal from 'sweetalert2';


export const Header = ({obj,setObj}) => {

    const [ip, setIp] = useState('');
    const api_key= 'at_5iQwGYLtvzwd3XXuM4KTwdYLi7XA4';    

    const handleSubmit =async(e)=>{
        e.preventDefault();

        if(ip===''){
            Swal.fire('Error','The value can not be empty', 'error')
            return;
        }

        try {
            await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=${api_key}&ipAddress=${ip}`)
            .then( res => { const location = res.data 
                            setObj(location)})
        } catch (error) {
            Swal.fire('Error','Incorrect IPv4 or IPv6 address.','error');
        }
     }

  return (
    <div className='header'>
        <p className='titulo'>IP Address Tracker</p>

        <form onSubmit={handleSubmit} className='formSearch'>
                <input 
                    className='inputBusqueda' 
                    type="text" 
                    placeholder='Search for any IP address' 
                    value={ip}
                    onChange={ ({target})=>setIp(target.value) }
                />
                <input className='btn' type="submit" value='>' />
        </form>
        
        <div className='results'>
            <div className='campo'>
                <span className='tituloCampo'>Ip address</span>
                <span className='descripcionCampo'>{obj.ip}</span>
            </div>
            <div className="vl"></div>
            <div className='campo'>
            <span className='tituloCampo'>Location</span>
                <span className='descripcionCampo'>{obj.location?.city + ', ' + obj.location?.country}</span>
            </div>
            <div className="vl"></div>

            <div className='campo'>
            <span className='tituloCampo'>Timezone</span>
                <span className='descripcionCampo'>UTC {obj.location?.timezone}</span>
            </div>
            <div className="vl"></div>

            <div className='campo'>
            <span className='tituloCampo'>ISP</span>
                <span className='descripcionCampo'>{obj.isp}</span>
            </div>
        </div>
    </div>
  )
}
