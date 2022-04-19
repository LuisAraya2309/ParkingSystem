import React,{Fragment} from 'react'
import {useForm} from 'react-hook-form';
import { DepartmentsList } from '../GeneralResources/DepartmentsList';

//import axios from 'axios';

export function SignUpForm() {
    const {register,handleSubmit} = useForm();


    const onSubmit = async(data) =>{
        try{
            console.log(data)
        }catch(err){
                alert('Usuario invalido')
        }
        
        /*
        try{
            const response = await axios.post('http://localhost:3001/createUser', data);
            const userLogged = response.data.email
            console.log('Bienvenido ' + userLogged)
            
        } catch(err){
            alert('Usuario invalido')
        }
        */
        
    
    }


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
                    <input type="password" className="form-control" placeholder="Contraseña" aria-label="Contraseña" {...register('password',{required:true})}/>
                </div>
                
                <div className="col">
                    <input type="email" className="form-control" placeholder="Correo institucional" aria-label="Correo institucional" {...register('email',{required:true})}/>
                </div>

            </div>

            <br></br>
            <div className="row">
                <div className="col">
                    <input type="email" className="form-control" placeholder="Correo alterno" aria-label="Correo alterno" {...register('altEmail',{required:true})}/>
                </div>
                <div className="col">
                <DepartmentsList />
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
