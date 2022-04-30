import React,{Fragment} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { PrincipalCard } from '../GeneralResources/PrincipalCard'
export function ManageUsersPage() {
  return (
    <Fragment>
        <header className="App-header">
                
            <div style={{ backgroundImage: 'url(require("./images/background.png"))' }}>
                <div className='container mx-auto'>
                    <h1 className='text-center'>Gestión de Usuarios</h1>
                    <br/>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        
                        <PrincipalCard props={{title:"Administracion del Parqueo",buttonTitle:"Administrar Parqueo",redirectLink:"/ManageUsers"}} />

                        <PrincipalCard props={{title:"Administracion de Usuarios",buttonTitle:"Administrar Usuarios",redirectLink:"/ManageUsers"}} />

                        <PrincipalCard props={{title:"Módulo de Consultas",buttonTitle:"Realizar Consultas",redirectLink:"/ManageUsers"}} />

                    </div>
                    
                    
                </div>
            </div>
                       
        </header>
    </Fragment>
  )
}