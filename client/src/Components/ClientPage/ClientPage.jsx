import React, { Fragment } from 'react'
import { PrincipalCard } from '../GeneralResources/PrincipalCard'
import { MangParkingForm } from '../ManageParking/MangParkingForm'
import { useLocation } from 'react-router-dom';

export function ClientPage() {
  const {state} = useLocation();
  const userLogged = state.user
  const userType  = state.userType

  return (
    <Fragment>
        <header className="App-header">
                
                <div style={{ backgroundImage: 'url(require("./images/background.png"))' }}>
                    <div className='container mx-auto'>
                        <h1 className='text-center'>¡Bienvenido!</h1>
                        <br/>
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            
                            <PrincipalCard props={{title:"Consultas",buttonTitle:"Realizar Consulta",redirectLink:"/CustumerInquieries"}} />
    
                            <MangParkingForm props={{title:"Reservar Parqueo",buttonTitle:"Realizar reserva", action:"BookingPage", userLogged:userLogged, userType:userType}} />
    
                            <PrincipalCard props={{title:"Modificar Horario",buttonTitle:"Modificar",redirectLink:"/ClientSchedule",params:userLogged}} />
                           
                        </div>
                                                
                    </div>
                </div>
                           
            </header>
    </Fragment>
  )
}
