import React,{Fragment, useState, useEffect} from 'react';
import image from '../../images/tecSanJose.jpg';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import { useLocation } from 'react-router-dom';
import {AvailableList, notAvailableChiefList} from './AuxiliarFunctions'

export function ChiefBookingPage() {

    const typesDicc = {'User':'userSlot','Chief':'chiefSlot','Preferential':'preferentialSlot','TecDriver':'tecVehicleSlot', 'Visitor':'visitorSlot'}
    const {register,handleSubmit} = useForm();
    const {state} = useLocation();
    const parkingInfo = state.parkingInfo;
    const [userInfo,setUser] = useState([]);
    const [vehicleList,setVehicleList] = useState([]);
    const [bookingList,setbookingList] = useState([]);
    const [slotsInfo,setSlots] = useState([]);

    const timePassed = Date.now();
    const date = new Date(timePassed);
    const userType = state.userType;
    const email = state.userLogged;
    const slotsSelect = document.getElementById('slotsSelect');

    let navigate = useNavigate();
    const moveTo = () =>{
      let path = '/ChiefPage';
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
            const bookingObject = {'parkingName': data.parkingName, 'slotId': slotId ,'userId': userInfo.ID, 'vehicle': data.vehicle, 'date': date , 'expired':false}
            axios.post('http://localhost:3001/bookings/createBooking',bookingObject).then((response) => {})
            moveTo();

        }catch(err){
            alert(err)
        }
    }

    useEffect(() => {

        axios.post('http://localhost:3001/users/getUserByEmail',{'email':email}).then((response) => {
            setUser(response.data)
            setVehicleList(response.data.vehicles)
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
                                                <label htmlFor="text" className="form-label">Nombre</label>
                                                <input type="text" className="form-control" value=  {userInfo.name+" "+userInfo.lastname1+" "+userInfo.lastname2} readOnly/>
                                            </div>
                                            <div className="col">
                                                <label htmlFor="text" className="form-label">Placa del veh??culo</label>  
                                                <select className="form-select" defaultValue={'DEFAULT'} aria-label="PlacaVehiculo" {...register('vehicle',{required:true})}>
                                                <option value="DEFAULT" disabled>Placa del veh??culo</option>
                                                {vehicleList.map((vehicle) =>{
                                                    return (
                                                        <option key={vehicle} value={vehicle} > {vehicle}</option>
                                                        
                                                        );
                                                })}
                                                </select>                                                                                                               
                                            </div>
                                            <div className="col">
                                                <label htmlFor="text" className="form-label">Parqueo</label>
                                                <input type="text" className="form-control" defaultValue = {parkingInfo.name} {...register('parkingName',{required:false})} readOnly/>
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