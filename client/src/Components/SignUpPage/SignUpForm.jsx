import React,{Fragment} from 'react'
import {useForm} from 'react-hook-form';
import { useState } from 'react';
import { useEffect } from 'react';
//import { DepartmentsList } from '../GeneralResources/DepartmentsList';

import axios from 'axios';

export function SignUpForm() {
    const {register,handleSubmit} = useForm();
    const [departmentsList,setDepartmentsList] = useState([]);
    var checkboxState = false

    function changeBoxValue(e){
        checkboxState = checkboxState === false ? true: false
    }


    const onSubmit = async(data) =>{
        try{
            data['type'] = "User";
            data['discapacity'] = checkboxState;
            const response = await axios.post('http://localhost:3001/users/createUser', data);
            console.log(response)
        }catch(err){
                alert(err)
        }
    }

    useEffect(() => {
        axios.get('http://localhost:3001/departments/getDepartments').then((response) => {
          setDepartmentsList(response.data)
        })
      },[]);


  return (
      <Fragment>
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
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" id="prueba" onChange={(e) => changeBoxValue(e)} />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Discapacidad</label>
                    </div>
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
            <center>
                <button type="submit" className="btn btn-dark text-center">Registrar Usuario</button>    
            </center>
            
            

        </form>
      </Fragment>
    
  )
}
