import React, { Fragment, useState } from 'react';
import { PersonalInformation } from './PersonalInformation';
import userLogo from '../../images/userLogo.png'
import { useForm } from 'react-hook-form';
import axios from 'axios';
export function UserInformation() {
  
  const layoutInfo = {name:'',lastname1:'',lastname2:'',ID:'',password:'',email:'',altEmail:'',phone:'',department:'',vehicules:''}
  const [username,setUsername] = useState('Usuario')
  const {register,handleSubmit} = useForm()
  const [userInfo,setUserInfo] = useState(layoutInfo)
  

  const onSubmit = async(data) =>{
    try{
      console.log(data)
      setUsername(data.username)
      axios.post('http://localhost:3001/users/getUserByEmail',data).then((response) => {
      setUserInfo(response.data)
    })
        
    } catch(err){
        alert('Por favor ingrese su usuario')
    }
}


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
                            <center>
                              <form onSubmit={handleSubmit(onSubmit)}>
                                <h1>{username}</h1>
                                <input  type="text" id="username" required {...register('email',{required:true})}/>
                                <br/>
                                <input className="btn btn-dark text-center" type='submit' value='Consultar'/>
                              </form>
                            </center>
                                                    
                            <br/>
                                <h1 className="card-title text-center">Información Personal</h1>
                                <br></br>
                                <PersonalInformation user={userInfo}/>

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
