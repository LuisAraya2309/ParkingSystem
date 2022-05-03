import React, { Fragment,useEffect,useState} from 'react'
import {useForm} from 'react-hook-form';
import {useNavigate} from "react-router-dom"
import axios from 'axios'

export function MangParkingForm({props}) {

    const {register,handleSubmit} = useForm();
    const [parkingList,setParkingList] = useState([]);

    let navigate = useNavigate()
    const moveTo = () =>{
        let path = '/ManageParking'
        navigate(path)
    }
    
    useEffect(() => {
        axios.get('http://localhost:3001/parkings/getParking').then((response) => {
            setParkingList(response.data)
        })
      },[]);


    const onSubmit = async(data) =>{
        try{
            await axios.post('http://localhost:3001/parkings/deleteParkingByName', data);
            moveTo()
            
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
                            <select className="form-select" defaultValue={'DEFAULT'} aria-label="Usuarios" >
                            <option value="DEFAULT" disabled>Parqueos</option>
                            {parkingList.map((parking) =>{
                                return (
                                <option key={parking.name} value={parking.name} {...register('name',{required:true})} > {parking.name} </option>
                                );
                            })}
                            </select>
                        </div>                                
                        <input type="submit" className="btn btn-danger btn-block" value = {props.buttonTitle} />                                
                    </div>
                </div>
            </form>
        </Fragment>
    )
}

