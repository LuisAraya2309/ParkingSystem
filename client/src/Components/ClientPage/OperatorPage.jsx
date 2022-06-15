import React, { Fragment } from 'react'
import { PrincipalCard } from '../GeneralResources/PrincipalCard'
import { BookingList } from '../GeneralResources/BookingList'
import { useLocation } from 'react-router-dom';

export function OperatorPage() {

  const {state} = useLocation();
  const userLogged = state.user;
  const userType  = state.userType;
  const parkingName = state.parkingName;
  
  return (
    <Fragment>
        <header className="App-header">
                
                <div style={{ backgroundImage: 'url(require("./images/background.png"))' }}>
                    <div className='container mx-auto'>
                        <h1 className='text-center'>¡Bienvenido!</h1>
                        <br/>
                        <div className="row row-cols-1 row-cols-md-3 g-3">
    
                          <PrincipalCard props={{title:"Reportar vehículo oficial",buttonTitle:"Reportar reserva", redirectLink:"/TecDriverBookingPage", params:{userLogged:userLogged, userType:userType, parkingName: parkingName}}} />

                          <BookingList props={{title:"Liberar espacio de visitante",buttonTitle:"Liberar", action:"LiberarVisitantes", userLogged:userLogged, userType:userType, parkingName: parkingName}} />

                          <BookingList props={{title:"Liberar espacio de vehículo oficial",buttonTitle:"Liberar", action:"LiberarVehiculoOficial", userLogged:userLogged, userType:userType, parkingName: parkingName}} />
                           
                        </div>
                                                
                    </div>
                </div>
                           
            </header>
    </Fragment>
  )
}
