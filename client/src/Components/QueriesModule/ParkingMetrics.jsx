
import React,{Fragment, useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { PrincipalCard } from '../GeneralResources/PrincipalCard';



export function ParkingMetrics() {

    const {state} = useLocation()
    const parkingName = state.parkingInfo.name
    
  return (
    <Fragment>
        <header className="App-header">
                
            <div style={{ backgroundImage: 'url(require("./images/background.png"))' }}>
                <div className='container mx-auto'>
                    <h1 className='text-center'>Porcentaje de Ocupación</h1>
                    <br/>
                    <div className="row row-cols-1 row-cols-md-2 g-2">
                        <PrincipalCard props={{title:"Por Tipo de Espacio",params:parkingName,buttonTitle:"Realizar Consulta",redirectLink:"/MetricsByType"}} />
                        <PrincipalCard props={{title:"Por Departamento",params:parkingName,buttonTitle:"Realizar Consulta",redirectLink:"/MetricsByDepartment"}} />
                    </div>
                </div>
            </div>
                       
        </header>
    </Fragment>
  )
}
