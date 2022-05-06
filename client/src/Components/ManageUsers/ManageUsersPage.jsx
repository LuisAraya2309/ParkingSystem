import React,{Fragment} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { ManageUsersForm } from './ManageUsersForm'
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
                        
                        <PrincipalCard props={{title:"Registrar un usuario",buttonTitle:"Registrar un usuario",redirectLink:"/SignUpPage"}} />

                        <ManageUsersForm props={{title:"Eliminar un usuario del sistema",buttonTitle:"Eliminar usuario", action:2}} />
                    
                        <ManageUsersForm props={{title:"Modificar información de un usuario",buttonTitle:"Modificar información", action:1}} />

                    </div>
                    
                </div>
            </div>
                       
        </header>
    </Fragment>
  )
}