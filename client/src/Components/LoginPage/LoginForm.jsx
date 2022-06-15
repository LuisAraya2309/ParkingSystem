import React, { Fragment} from 'react';
import {useForm} from 'react-hook-form';
import {useNavigate} from "react-router-dom"
import axios from 'axios';

export  function LoginForm() {
    const {register,handleSubmit} = useForm();
    
    let navigate = useNavigate()
    const loggedIn = (userLogged,userType, parkingName) =>{
        let adminPath
        if(userType==='Admin'){
            adminPath='/AdminPage'
        }else if(userType==='User'){
            adminPath='/ClientPage'
        }else if(userType==='Chief'){
            adminPath='/ChiefPage'
        }else if(userType==='TecDriver'){
            adminPath='/OperatorPage'
        }
        navigate(adminPath,{state:{user:userLogged, userType: userType, parkingName: parkingName}})
    }


    const onSubmit = async(data) =>{
        try{
            const response = await axios.post('http://localhost:3001/users/login', data);
            const userLogged = response.data.email;
            const userType = response.data.type;
            const parkingName = response.data.parkingName;
            loggedIn(userLogged,userType, parkingName)
        } catch(err){
            alert('Usuario invalido')
        }
        
    }

  return (
      <Fragment>
          <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo Electrónico</label>
                    <input type="email" className="form-control" id="email" placeholder="Su correo electrónico"
                    {...register('email',{required:true})}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="password" placeholder="Su contraseña"
                    {...register('password',{required:true})}
                    />
                </div>
                    <center>
                        <input type='submit' className='btn btn-danger btn-block' value='Inicio de Sesión'/>
                    </center>
                    
            </form>
      </Fragment>
    
  )
}
