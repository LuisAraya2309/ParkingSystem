import React,{Fragment, useState, useEffect} from 'react';
import image from '../../images/tecSanJose.jpg';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import { useLocation } from 'react-router-dom';
import {AvailableList, notAvailableChiefList} from './AuxiliarFunctions'

export function TecDriverBookingPage() {

    const typesDicc = {'User':'userSlot','Chief':'chiefSlot','Preferential':'preferentialSlot','TecDriver':'tecVehicleSlot', 'Visitor':'visitorSlot'}
    const {register,handleSubmit} = useForm();
    const {state} = useLocation();
    const parkingInfo = state.userLogged.parkingName;
    const [userInfo,setUser] = useState([]);
    const [bookingList,setbookingList] = useState([]);
    const [slotsInfo,setSlots] = useState([]);

    const timePassed = Date.now();
    const date = new Date(timePassed);
    const userType = state.userLogged.userType;
    const email = state.userLogged.userLogged;
    const slotsSelect = document.getElementById('slotsSelect');

    let navigate = useNavigate();
    const moveTo = () =>{
      let path = '/OperatorPage';
      navigate(path, {state:{user:userInfo.email, userType:userType, parkingName: parkingInfo}});
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
            const userSlots = userInfo.discapacity === true ? slotsInfo['preferentialSlot'] : slotsInfo[typesDicc[userType]];
            const notAvailableList = notAvailableChiefList(bookingList)
            const slotsAvailableMapList = AvailableList(notAvailableList, userSlots.totalAmount, userInfo.discapacity === true ? 'Preferential': userType)
            agregar(slotsAvailableMapList);
            alert("Busqueda realizada con exito")
            
        }catch(err){
            alert(err)
        }
    }

    const onSubmitSelect = async(data) =>{

        try{
            const newSlot = document.getElementById('slotsSelect'); const slotId = newSlot.value;
            const bookingObject = {
                'parkingName': data.parkingName ,
                'slotId': slotId ,
                'userId': userInfo.ID , 
                'vehicle': data.vehicle ,
                'date': date , 
                'expired': false , 
                'vehicleModel': data.vehicleModel ,
                'vehicleColor': data.vehicleColor ,
                'vehicleDriver': data.vehicleDriver}

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

        axios.post('http://localhost:3001/bookings/getBookingsByParking',{'parkingName':parkingInfo}).then((response) => {
            setbookingList(response.data)
        })

        axios.post('http://localhost:3001/slots/getSlotsByParking',{'parkingName':parkingInfo}).then((response) => {
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
                                                <label htmlFor="text" className="form-label">Operador</label>
                                                <input type="text" className="form-control" value=  {userInfo.name+" "+userInfo.lastname1+" "+userInfo.lastname2} readOnly/>
                                            </div>
                                            
                                            <div className="col">
                                                <label htmlFor="text" className="form-label">Parqueo</label>
                                                <input type="text" className="form-control" defaultValue = {parkingInfo} {...register('parkingName',{required:false})} readOnly/>
                                            </div>

                                            <div className="col">
                                                <label htmlFor="text" className="form-label">Placa del vehículo</label>  
                                                <input type="text" className="form-control" {...register('vehicle',{required:false})} />                                                                                                             
                                            </div>
                                        </div>                                     
                                        <br></br>

                                        <div className="row">

                                            <div className="col">
                                                <label htmlFor="text" className="form-label">Modelo del vehículo</label>  
                                                <input type="text" className="form-control" {...register('vehicleModel',{required:false})} />                                                                                                             
                                            </div>

                                            <div className="col">
                                                <label htmlFor="text" className="form-label">Color del Vehículo</label>  
                                                <input type="text" className="form-control" {...register('vehicleColor',{required:false})} />                                                                                                             
                                            </div>

                                            <div className="col">
                                                <label htmlFor="text" className="form-label">Chofer del vehículo</label>  
                                                <input type="text" className="form-control" {...register('vehicleDriver',{required:false})} />                                                                                                             
                                            </div>

                                        </div>  
                                        <br></br>
                                        <center>
                                            <button type="submit" className="btn btn-dark text-center" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Consultar espacios disponibles</button>  
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