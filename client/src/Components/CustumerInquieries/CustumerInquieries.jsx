import React, { Fragment } from 'react'
import { PrincipalCard } from '../GeneralResources/PrincipalCard'
  
export function CustumerInquieries() {
  return (
      <Fragment>
          <header className="App-header">
                  
              <div style={{ backgroundImage: 'url(require("./images/background.png"))' }}>
                  <div className='container mx-auto'>
                      <h1 className='text-center'>Consultas de parqueo</h1>
                      <br/>
                      <div className="row row-cols-1 row-cols-md-3 g-3">

                          <PrincipalCard props={{title:"Consultar por reserva",buttonTitle:"Realizar Consulta",redirectLink:"/"}} />
                          
                          <PrincipalCard props={{title:"Consultar por direccion",buttonTitle:"Realizar Consulta",redirectLink:"/LocationParking"}} />
  
                          <PrincipalCard props={{title:"Consultar por horario",buttonTitle:"Realizar Consulta",redirectLink:"/ScheduleParking"}} />
   
                      </div>
                  </div>
              </div>
                         
          </header>
      </Fragment>
    )
  }