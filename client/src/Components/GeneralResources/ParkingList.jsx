import React,{Fragment,useEffect,useState} from 'react'
import {useForm} from 'react-hook-form';
import {useNavigate} from "react-router-dom"
import axios from 'axios'


export function ParkingList({props}) {

    const {register,handleSubmit} = useForm();
    const [parkingList,setParkingList] = useState([]);

    let navigate = useNavigate()
    const moveTo = (parkingInfo) =>{
        let path;
        if(props.action === 'Eliminar'){
            path = "/AdminPage"
        }else if(props.action === 'Consultar'){
            path = "/ConsultParking"
        }else if(props.action === 'Actualizar'){
            path = "/ModifyParking"
        }else if(props.action === 'ReservarVisitante'){
            path = "/VisitorBookingPage"
        }else if(props.action === 'ReservarJefatura'){
            path = "/ChiefBookingPage"
        }else if(props.action === 'ReservarVehiculoTec'){
            path = "/TecDriverBookingPage"
        }else{
            path = "/BookingPage"
        }

        navigate(path, {state:{parkingInfo:parkingInfo, userLogged:props.userLogged, userType: props.userType}})
    }
    
    useEffect(() => {
        axios.get('http://localhost:3001/parkings/getParking').then((response) => {
            setParkingList(response.data)
        })
      },[]);


    const onSubmit = async(data) =>{
        try{
            if(props.action === 'Eliminar'){
                axios.post('http://localhost:3001/slots/deleteSlotsByParking',data).then((response) => {})
                axios.post('http://localhost:3001/parkings/deleteParkingByName',data).then((response) => {
                moveTo(response.data)
                })
            }else{
                axios.post('http://localhost:3001/parkings/getParkingByName',data).then((response) => {
                moveTo(response.data)
                })
              } 
            
        } catch(err){
            alert('Se produjo un error')
        }
    }

  return (
    <Fragment>
        <form onSubmit={handleSubmit(onSubmit)}>
            <select className="form-select" defaultValue={'DEFAULT'} aria-label="ParqueosDisponibles" {...register('name',{required:true})}>
            <option value="DEFAULT" disabled>Parqueos disponibles</option>
            {parkingList.map((parking) =>{
                return (
                        <option key={parking.name} value={parking.name}> {parking.name} </option>
                    );
            })}
            </select>
            <input type="submit" className="btn btn-danger btn-block" value = {props.buttonTitle} />        
        </form>
    </Fragment>
  )
}
