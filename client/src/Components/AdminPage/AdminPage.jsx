import React,{Fragment} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { PrincipalCard } from '../GeneralResources/PrincipalCard'
import { useLocation } from 'react-router-dom';
export function AdminPage() {
    const {state} = useLocation();
    const userLogged = state.user

  return (
    <Fragment>
        <header className="App-header">
                
            <div style={{ backgroundImage: 'url(require("./images/background.png"))' }}>
                <div className='container mx-auto'>
                    <h1 className='text-center'>Administración</h1>
                    <br/>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        
                        <PrincipalCard props={{title:"Administracion del Parqueo",buttonTitle:"Administrar Parqueo",redirectLink:"/ManageParking"}} />

                        <PrincipalCard props={{title:"Administracion de Usuarios",buttonTitle:"Administrar Usuarios",redirectLink:"/ManageUsers"}} />

                        <PrincipalCard props={{title:"Módulo de Consultas",buttonTitle:"Realizar Consultas",redirectLink:"/QueriesPage"}} />

                        <PrincipalCard props={{title:"Simulador de Expiracion",buttonTitle:"Iniciar Simulacion",redirectLink:"/Simulate"}} />


                    </div>
                    
                    
                </div>
            </div>
                       
        </header>
    </Fragment>
  )
}