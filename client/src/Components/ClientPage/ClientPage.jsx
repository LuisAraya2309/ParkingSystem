import React, { Fragment } from 'react'
import { PrincipalCard } from '../GeneralResources/PrincipalCard'

export function ClientPage() {
  return (
    <Fragment>
        <header className="App-header">
                
                <div style={{ backgroundImage: 'url(require("./images/background.png"))' }}>
                    <div className='container mx-auto'>
                        <h1 className='text-center'>¡Bienvenido!</h1>
                        <br/>
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            
                            <PrincipalCard props={{title:"Consultas",buttonTitle:"Realizar Consulta",redirectLink:"/CustumerMenu"}} />
    
                            <PrincipalCard props={{title:"Reservar Parqueo",buttonTitle:"Realizar reserva",redirectLink:"/"}} />
    
                            <PrincipalCard props={{title:"Modificar Horario",buttonTitle:"Modificar",redirectLink:"/ClientSchedule"}} />
                           
                        </div>
                                                
                    </div>
                </div>
                           
            </header>
    </Fragment>
  )
}
