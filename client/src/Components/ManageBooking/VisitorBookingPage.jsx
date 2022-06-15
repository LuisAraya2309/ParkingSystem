import React,{Fragment, useState, useEffect} from 'react';
import image from '../../images/tecSanJose.jpg';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import { useLocation } from 'react-router-dom';
import {notAvailableSlots, AvailableList} from './AuxiliarFunctions'

export function VisitorBookingPage() {

    const {register,handleSubmit} = useForm();
    const {state} = useLocation();
    const parkingInfo = state.parkingInfo;
    const [userInfo,setUser] = useState([]);
    const [bookingList,setbookingList] = useState([]);
    const [slotsInfo,setSlots] = useState([]);

    const timePassed = Date.now();
    const date = new Date(timePassed);
    const userType = state.userType;
    const email = state.userLogged;
    const slotsSelect = document.getElementById('slotsSelect');

    let navigate = useNavigate();
    const moveTo = () =>{
      let path = userType === 'Chief' ? '/ChiefPage': '/AdminPage';
      navigate(path, {state:{user:userInfo.email, userType:userType}});
    }

    const agregar = (slotsAvailableMapList) => {
        for(const slot in slotsAvailableMapList){

            const option = document.createElement('option');
            option.value = slotsAvailableMapList[slot];
            option.text = slotsAvailableMapList[slot];
            slotsSelect.appendChild(option);
        }
      };

    const onSubmit = async(data) =>{

        try{
            const userSlots = slotsInfo['visitorSlot'];
            const notAvailable = notAvailableSlots(bookingList,data.start_hour,data.finish_hour)
            const slotsAvailableMapList = AvailableList(notAvailable, userSlots.totalAmount, 'Visitor')
            agregar(slotsAvailableMapList);
            alert("Busqueda realizada con exito")
            
        }catch(err){
            alert(err)
        }
    }

    const onSubmitSelect = async(data) =>{

        try{
            const newSlot = document.getElementById('slotsSelect'); const slotId = newSlot.value;
            const schedule = data.start_hour + " - " + data.finish_hour;
            
            const bookingObject = {
                'parkingName': data.parkingName, 
                'slotId': slotId ,
                'userId': userInfo.ID , 
                'vehicle': data.vehicle , 
                'schedule': schedule ,
                'date': date ,
                'expired': false , 
                'VehicleDriver': data.visitorName ,
                'visitorId': data.visitorId ,
                'visitorMatter': data.matter,
                'visitLocation': data.visitLocation}
            
            axios.post('http://localhost:3001/bookings/createBooking',bookingObject).then((response) => {})
            moveTo();

        }catch(err){
            alert(err)
        }
    }

    useEffect(() => {

        axios.post('http://localhost:3001/users/getUserByEmail',{'email':email}).then((response) => {
            setUser(response.data)
        })

        axios.post('http://localhost:3001/bookings/getBookingsByParking',{'parkingName':parkingInfo.name}).then((response) => {
            setbookingList(response.data)
        })

        axios.post('http://localhost:3001/slots/getSlotsByParking',{'parkingName':parkingInfo.name}).then((response) => {
            setSlots(response.data)
        })

        // eslint-disable-next-line
      },[]);

  return (
      <Fragment>
        <header className="App-header">
            <div style={{ backgroundImage: 'url(require("./images/genericBackground.png"))' }}>
                <div className='container mx-auto'>
                    <div className="card bg-light w-100 mb-3" >                    
                        <div className="row g-0">
                            <div className="col-md-4">
                            <img src={image} className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h1 className="card-title text-center">Reservar espacio</h1>
                                    <br></br>
                                    
                                    <form onSubmit={handleSubmit(onSubmit)} >
                                        <div className="row">
                                            <div className="col">
                                                <label htmlFor="text" className="form-label">Encargado</label>
                                                <input type="text" className="form-control" value=  {userInfo.name+" "+userInfo.lastname1+" "+userInfo.lastname2} readOnly/>
                                            </div>
                                            <div className="col">
                                                <label htmlFor="text" className="form-label">Placa del vehículo</label>  
                                                <input type="text" className="form-control" {...register('vehicle',{required:true})}/>                                                                                                            
                                            </div>
                                            <div className="col">
                                                <label htmlFor="text" className="form-label">Parqueo</label>
                                                <input type="text" className="form-control" defaultValue = {parkingInfo.name} {...register('parkingName',{required:false})} readOnly/>
                                            </div>
                                        </div>                                     
                                        <br></br>

                                        <div className="row">
                                            <div className="col">
                                                <label htmlFor="text" className="form-label">Nombre del visitante</label>
                                                <input type="text" className="form-control" {...register('visitorName',{required:true})}/>
                                            </div>
                                            <div className="col">
                                                <label htmlFor="text" className="form-label">Identificación del visitante</label>  
                                                <input type="text" className="form-control" {...register('visitorId',{required:true})}/>                                                                                                            
                                            </div>
                                            <div className="col">
                                                <label htmlFor="text" className="form-label">Motivo de la visita</label>  
                                                <textarea type="text" style={{resize:'none'}} className="form-control" {...register('matter',{required:true})}/>                                                                                                            
                                            </div>

                                        </div>                                     
                                        <br></br>

                                        <div className="row">

                                            <div className="col">
                                                <label htmlFor="text" className="form-label">Lugar a visitar</label>  
                                                <textarea type="text" style={{resize:'none'}} className="form-control" {...register('visitLocation',{required:true})}/>                                                                                                            
                                            </div>
                                        
                                            <div className="col">
                                                <label htmlFor="text" className="form-label">Hora inicio</label>
                                                <input type="time" className="form-control" min = {parkingInfo.schedule.opening_hour} max = {parkingInfo.schedule.closing_time} {...register('start_hour',{required:true})}/>
                                            </div>

                                            <div className="col">
                                                <label htmlFor="text" className="form-label">Hora fin</label>
                                                <input type="time" className="form-control" min = {parkingInfo.schedule.opening_hour} max = {parkingInfo.schedule.closing_time} {...register('finish_hour',{required:true})}/>
                                            </div>

                                            <div className="col">
                                                <br></br>
                                                <button type="submit" className="btn btn-dark text-center">Buscar espacios</button>  
                                            </div>
   
                                        </div>
                                        <br></br>
                                        
                                        <center>
                                            <button type="button" className="btn btn-dark text-center" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Consultar espacios disponibles</button>  
                                        </center>

                                    </form>
                                    <form onSubmit={handleSubmit(onSubmitSelect)} >
                                        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="staticBackdropLabel">Espacios disponibles</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <select className="form-select" id= 'slotsSelect' defaultValue={'DEFAULT'} aria-label="EspaciosDisponibles" >
                                                        <option value="DEFAULT" disabled>Espacios disponibles</option>
                                                    </select> 
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                                    <button type = "submit" className="btn btn-dark text-center" data-bs-dismiss="modal" >Seleccionar</button>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
      </Fragment>
  )
}