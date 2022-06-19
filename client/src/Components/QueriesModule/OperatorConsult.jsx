import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import {useNavigate} from "react-router-dom"
import axios from 'axios'
import {useForm} from 'react-hook-form';

export function OperatorConsult({props}) {

    const {register,handleSubmit} = useForm();

    let navigate = useNavigate()
    const moveTo = (parkingInfo) =>{
        navigate('/OperatorConsultForm', {state:{parkingInfo:parkingInfo}})
    }

    const onSubmit = async(data) =>{
        try{
            console.log(data)
            axios.post('http://localhost:3001/parkings/getParkingByName',{"name":props.parkingName}).then((response) => {
            console.log(response.data)
            moveTo(response.data)
            })    
        } catch(err){
            alert('Se produjo un error')
        }
    }
    return (
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="col">
                <div className="card border-danger text-center h-100">
                    <div className="card-body">
                        <h2 className="card-title">{props.title}</h2>
                        <p className="card-text">{props.body ? props.text : ""}</p>
                        <p className="card-text" value ={props.parkingName}>{props.parkingName}</p>
                    </div>  
                <input type="submit" className="btn btn-danger btn-block" value = {props.buttonTitle} />        
                </div>
            </div>
            </form>
        </Fragment>
      )  
}
