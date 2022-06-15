import React,{Fragment} from 'react'
import {useForm} from 'react-hook-form';
import { useState } from 'react';
import { useEffect } from 'react';
import userLogo from '../../images/userLogo.png'
import {useNavigate} from "react-router-dom";

import axios from 'axios';

export function CreateUserPage() {
    const {register,handleSubmit} = useForm();
    const [departmentsList,setDepartmentsList] = useState([]);
    let navigate = useNavigate();
    var checkboxState = false;
    const [parkingList,setParkingList] = useState([]);

    const moveTo = () =>{
      let path = '/ManageUsers';
      navigate(path);
    }

    function changeBoxValue(e){
        checkboxState = checkboxState === false ? true: false;
    }

    const onSubmit = async(data) =>{
        try{
            
            data['discapacity'] = checkboxState;
            axios.post('http://localhost:3001/users/createUser', data).then((response) =>{});
            moveTo();
        }catch(err){
                alert(err)
        }
    }

    useEffect(() => {
        axios.get('http://localhost:3001/departments/getDepartments').then((response) => {
          setDepartmentsList(response.data)
        })

        axios.get('http://localhost:3001/parkings/getParking').then((response) => {
            setParkingList(response.data)
        })
      },[]);


  return (
      <Fragment>
        <header className="App-header">
            <div style={{ backgroundImage: 'url(require("./images/genericBackground.png"))' }}>
                <div className='container mx-auto'>
                    <div className="card bg-light w-100 mb-3" >                    
                        <div className="row g-0">
                            <div className="col-md-4">
                            <img src={userLogo} className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h1 className="card-title text-center">Registrar Usuario</h1>
                                    <br></br>
                                    
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="row">
                                            <div className="col">
                                                <input type="text" className="form-control" placeholder="Nombre" aria-label="Nombre" {...register('name',{required:true})}/>
                                            </div>
                                            <div className="col">
                                                <input type="text" className="form-control" placeholder="Apellido 1" aria-label="Apellido 1" {...register('lastname1',{required:true})}/>
                                            </div>
                                            <div className="col">
                                                <input type="text" className="form-control" placeholder="Apellido 2" aria-label="Apellido 2" {...register('lastname2',{required:true})}/>
                                            </div>

                                        </div>
                                        <br></br>

                                        <div className="row">
                                            <div className="col">
                                                <input type="text" className="form-control" placeholder="Identidad" aria-label="Identidad" {...register('ID',{required:true})}/>
                                            </div>

                                            <div className="col">
                                                <select className="form-select" defaultValue={'DEFAULT'} aria-label="TipoUsuario" {...register('type',{required:true})} >
                                                    <option value="DEFAULT" disabled>Tipo de usuario</option>
                                                    <option key= "1" value="User" >Funcionario</option>
                                                    <option key= "2" value="Chief" >Jefatura</option>
                                                    <option key= "4" value="TecDriver" >Operador del estacionamiento</option>
                                                    <option key= "5" value="Admin" >Administrador</option>
                                                </select>
                                            </div>

                                            <div className="col">
                                                <select className="form-select" defaultValue={'DEFAULT'} aria-label="Parqueo" {...register('parkingName',{required:true})}>
                                                    <option value="DEFAULT" disabled>Parqueo</option>
                                                    <option value="DEFAULT" >No aplica</option>
                                                    {parkingList.map((parking) =>{
                                                        return (
                                                                <option key={parking.name} value={parking.name}> {parking.name} </option>
                                                            );
                                                    })}
                                                </select>
                                            </div>

                                        </div>

                                        <br></br>
                                        <div className="row">

                                            <div className="col">
                                                <input type="password" className="form-control" placeholder="Contraseña" aria-label="Contraseña" {...register('password',{required:true})}/>
                                            </div>
                                            
                                            <div className="col">
                                                <input type="email" className="form-control" placeholder="Correo institucional" aria-label="Correo institucional" {...register('email',{required:true})}/>
                                            </div>

                                            <div className="col">
                                                <input type="email" className="form-control" placeholder="Correo alterno" aria-label="Correo alterno" {...register('altEmail',{required:true})}/>
                                            </div>
                                            
                                            
                                        </div>
                                        <br></br>
                                        <div className="row">
                                            <div className="col">
                                                <select className="form-select" defaultValue={'DEFAULT'} aria-label="Departamento" {...register('department',{required:true})}>
                                                    <option value="DEFAULT" disabled>Departamento</option>
                                                    <option value="DEFAULT" >No aplica</option>
                                                    {departmentsList.map((department) =>{
                                                    return (
                                                        <option key={department.code} value={department.code+ '-'+ department.name}>{department.code + '-'+ department.name}</option>
                                                    );
                                                    })}
                                                </select>
                                            </div>
                                                <div className="col">
                                                    <input type="text" className="form-control" placeholder="Teléfono" aria-label="Teléfono" {...register('phone',{required:true})}/>
                                                </div>
                                            <div className="col">
                                                <input type="text" className="form-control" placeholder="Placas" aria-label="Placas" {...register('vehicules',{required:true})}/>
                                            </div>
                                        </div>
                                        <br></br>
                                        <div className="row">
                                            <div className="col">
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" type="checkbox" id="prueba" onChange={(e) => changeBoxValue(e)} />
                                                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Discapacidad</label>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <center>
                                            <button type="submit" className="btn btn-dark text-center">Ingresar usuario</button>    
                                        </center>
                                        
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
    