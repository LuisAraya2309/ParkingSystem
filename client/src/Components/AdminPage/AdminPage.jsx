import React,{Fragment} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { PrincipalCard } from '../GeneralResources/PrincipalCard'
import { useLocation } from 'react-router-dom';
import { MangParkingForm } from '../ManageParking/MangParkingForm'

export function AdminPage() {
    const {state} = useLocation();
    const userLogged = state.user
    const userType  = state.userType

  return (
    <Fragment>
        <header className="App-header">
                
            <div style={{ backgroundImage: 'url(require("./images/background.png"))' }}>
                <div className='container mx-auto'>
                    <h1 className='text-center'>Administración</h1>
                    <br/>
                    <div className="row row-cols-2 row-cols-md-2 g-2">
                        
                        <PrincipalCard props={{title:"Administracion del Parqueo",buttonTitle:"Administrar Parqueo",redirectLink:"/ManageParking"}} />

                        <PrincipalCard props={{title:"Administracion de Usuarios",buttonTitle:"Administrar Usuarios",redirectLink:"/ManageUsers"}} />

                        <PrincipalCard props={{title:"Módulo de Consultas",buttonTitle:"Realizar Consultas",redirectLink:"/QueriesPage"}} />

                        <MangParkingForm props={{title:"Reservar Parqueo a visitante",buttonTitle:"Realizar reserva", action:"ReservarVisitante", userLogged:userLogged, userType:userType}} />
                        <PrincipalCard props={{title:"Simulador de Expiracion",buttonTitle:"Iniciar Simulacion",redirectLink:"/Simulate"}} />


                    </div>
                    
                    
                </div>
            </div>
                       
        </header>
    </Fragment>
  )
}