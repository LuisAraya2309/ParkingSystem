import React,{Fragment,useEffect,useState} from 'react'
import userLogo from '../../images/userLogo.png'
import { useLocation } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import axios from 'axios';

export function ModifyPage() {

    const {state} = useLocation();
    const userInfo = state.userInfo;
    const {register,handleSubmit} = useForm();
    const [departmentsList,setDepartmentsList] = useState([]);


    const onSubmit = async(data) =>{
        try{
            console.log(data)
        }catch(err){
                alert('Usuario invalido')
        }
    }

    useEffect(() => {
        axios.get('http://localhost:3001/departments/getDepartments').then((response) => {
          setDepartmentsList(response.data)
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
                                    <h1 className="card-title text-center">Modificar información de un Usuario</h1>
                                    <br></br>
                                    
                                    <form onSubmit={handleSubmit(onSubmit)} >
                                        <div className="row">
                                            <div className="col">
                                                <label htmlFor="text" className="form-label">Nombre</label>
                                                <input type="text" className="form-control" placeholder="Nombre" aria-label="Nombre" value = {userInfo.name} {...register('name',{required:true})}/>
                                            </div>
                                            <div className="col">
                                                <label htmlFor="text" className="form-label">Apellido 1</label>
                                                <input type="text" className="form-control" placeholder="Apellido 1" aria-label="Apellido 1" value = {userInfo.lastname1} {...register('lastname1',{required:true})}/>
                                            </div>
                                            <div className="col">
                                                <label htmlFor="text" className="form-label">Apellido 2</label>
                                                <input type="text" className="form-control" placeholder="Apellido 2" aria-label="Apellido 2" value = {userInfo.lastname2} {...register('lastname2',{required:true})}/>
                                            </div>
                                            <div className="col">
                                                <label htmlFor="text" className="form-label">Contraseña</label>
                                                <input type="text" className="form-control" placeholder="Contraseña" aria-label="Contraseña" value = {userInfo.password} {...register('password',{required:true})}/>
                                            </div>

                                        </div>
                                        <br></br>

                                        <br></br>
                                        <div className="row">
                                            <div className="col">
                                                <label htmlFor="text" className="form-label">Correo alterno</label>
                                                <input type="email" className="form-control" placeholder="Correo alterno" aria-label="Correo alterno" value = {userInfo.altEmail} {...register('altEmail',{required:true})}/>
                                            </div>
                                            <div className="col">
                                                <label htmlFor="text" className="form-label">Departamentos</label>
                                                
                                                <select className="form-select" defaultValue={'DEFAULT'} aria-label="Departamento" {...register('department',{required:true})}>
                                                    <option value="DEFAULT" disabled>Departamento</option>
                                                    {departmentsList.map((department) =>{
                                                    return (
                                                        <option key={department.code} value={department.code}>{department.code + '-'+ department.name}</option>
                                                    );
                                                    })}
                                                </select>

                                            </div>
                                            <div className="col">
                                                <label htmlFor="text" className="form-label">Teléfono</label>
                                                <input type="text" className="form-control" placeholder="Teléfono" aria-label="Teléfono" value = {userInfo.phone} {...register('phone',{required:true})}/>
                                            </div>
                                            <div className="col">
                                                <label htmlFor="text" className="form-label">Placas</label>
                                                <input type="text" className="form-control" placeholder="Placas" aria-label="Placas" value = {userInfo.vehicles} {...register('vehicules',{required:true})}/>
                                            </div>
                                            
                                        </div>
                                        <center>
                                            <button type="submit" className="btn btn-dark text-center">Modificar información</button>    
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
