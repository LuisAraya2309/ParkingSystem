import React,{Fragment,useEffect,useState} from 'react'
import {useForm} from 'react-hook-form';
import {useNavigate} from "react-router-dom"
import axios from 'axios'

export function BookingList({props}) {

    const diccType = {'LiberarVisitantes':'V', 'LiberarVehiculoOficial':'T'}
    const {register,handleSubmit} = useForm();
    const [bookingList,setBookingList] = useState([]);

    let navigate = useNavigate()
    const moveTo = () =>{
        let path = "/OperatorPage"
        navigate(path, {state:{parkingInfo:props.parkingName, userLogged:props.userLogged, userType: props.userType}})
    }
    
    useEffect(() => {
        axios.post('http://localhost:3001/bookings/getBookingsByParking', {'parkingName':props.parkingName}).then((response) => {
            setBookingList(response.data)
        })
    // eslint-disable-next-line  
    },[]);


    const onSubmit = async(data) =>{
        try{
            const slotId = (data.booking).split(' : ')[0];
            axios.post('http://localhost:3001/bookings/updateByParking', {'parkingName':props.parkingName, 'slotId':slotId}).then((response) => {})
            moveTo()
            
        } catch(err){
            alert('Se produjo un error')
        }
    }

    return (
        <Fragment>
            <div className="col">
                <div className="card border-danger text-center h-100">
                    <div className="card-body">
                        <h2 className="card-title">{props.title}</h2>
                        <p className="card-text">{props.body ? props.text : ""}</p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <select className="form-select" defaultValue={'DEFAULT'} aria-label="ReservasAgendadas" {...register('booking',{required:true})}>
                            <option value="DEFAULT" disabled>Reservas agendadas</option>
                            {// eslint-disable-next-line
                            bookingList.map((booking) =>{
                                const slotId = booking.slotId
                                if(slotId[0] === diccType[props.action]){
                                    return (
                                        <option key={booking.slotId} value={booking.slotId}> {booking.slotId} : {booking.vehicleDriver} </option>
                                    );
                                }           
                            })}
                            </select>
                            <input type="submit" className="btn btn-danger btn-block" value = {props.buttonTitle} />        
                        </form>
                    </div>                                                       
                </div>
            </div>
        </Fragment>
    )
}

