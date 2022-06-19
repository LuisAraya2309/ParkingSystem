import React,{Fragment,useEffect,useState} from 'react'
import axios from 'axios'
import {useForm} from 'react-hook-form';
import {useNavigate} from "react-router-dom"
import { ConsultBookingByUserDateForm } from './ConsultBookingByUserDateForm';
import { useLocation } from 'react-router-dom';
export function ConsultBookingByUserDate({props}) {
    
    const [BookingList,setBookingList] = useState([]);
    const [userLogged,setuserLogged] = useState();
    
    const {state} = useLocation();



    useEffect(() => {

        axios.post('http://localhost:3001/users/getUserByEmail',{"email":state.userLogged}).then((response) => {
            const user = response.data.ID
            setuserLogged(response.data.ID)
        
            axios.post('http://localhost:3001/bookings/getBookingsByUserDate',{"userId":user}).then((response) => {
                setBookingList(response.data)
            })
        })
    },[]);

  return (
    <Fragment>
    <header className="App-header">
        <div style={{ backgroundImage: 'url(require("./images/genericBackground.png"))' }}>
            <div className='container mx-auto'>
                <ConsultBookingByUserDateForm BookingList={BookingList}/>
            </div>
        </div>
    </header>
  </Fragment>
  )
}