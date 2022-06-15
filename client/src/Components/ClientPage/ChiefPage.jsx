import React, { Fragment } from 'react'
import { MangParkingForm } from '../ManageParking/MangParkingForm'
import { useLocation } from 'react-router-dom';

export function ChiefPage() {
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
    
                            <MangParkingForm props={{title:"Reservar Parqueo",buttonTitle:"Realizar reserva", action:"ReservarJefatura", userLogged:userLogged, userType:userType}} />
    
                            <MangParkingForm props={{title:"Reservar Parqueo a visitante",buttonTitle:"Realizar reserva", action:"ReservarVisitante", userLogged:userLogged, userType:userType}} />

                        </div>
                                                
                    </div>
                </div>
                           
            </header>
    </Fragment>
  )
}
