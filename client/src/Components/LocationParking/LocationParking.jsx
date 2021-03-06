import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { ParkingInformation } from '../CustumerInquieries/ParkingInformation';
export function LocationParking() {
  
  const layoutInfo = {name:'',type:'',schedule:'',location:'',slotsAvaible:''}
  const [parkingName,setparkingName] = useState('Parqueo')
  const {register,handleSubmit} = useForm()
  const [ParkingInfo,setParkingInfo] = useState(layoutInfo)
  

  const onSubmit = async(data) =>{
    try{
      console.log(data)
      setparkingName(data.parkingName)
      axios.post('http://localhost:3001/parkings/getParkingByLocation',data).then((response) => {
        setParkingInfo(response.data)
    })
        
    } catch(err){
        alert('Por favor ingrese la locación')
    }
}

  return (
    <Fragment>
    <header className="App-header">
        <div style={{ backgroundImage: 'url(require("./images/genericBackground.png"))' }}>
            <div className='container mx-auto'>
                <div className="card bg-light w-100 mb-3" >                    
                    <div className="row g-0">
                        <div className="col-md-12">
                            <div className="card-body">
                            <center>
                              <form onSubmit={handleSubmit(onSubmit)}>
                                <h1>{parkingName}</h1>
                                <input  type="text" id="location" required {...register('location',{required:true})}/>
                                <br/>
                                <input className="btn btn-dark text-center" type='submit' value='Consultar'/>
                              </form>
                            </center>
                          
                            <br/>
                                <h1 className="card-title text-center">Información del parqueo</h1>
                                <br></br>
                                <ParkingInformation parking={ParkingInfo}/>

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