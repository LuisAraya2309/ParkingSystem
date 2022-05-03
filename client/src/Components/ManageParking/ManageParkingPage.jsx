import React,{Fragment} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { PrincipalCardSelect } from '../GeneralResources/PrincipalCardSelect'
import { PrincipalCard } from '../GeneralResources/PrincipalCard'
import { MangParkingForm } from './MangParkingForm'

export function ManageParkingPage() {

  return (
    <Fragment>
        <header className="App-header">
                
            <div style={{ backgroundImage: 'url(require("./images/background.png"))' }}>
                <div className='container mx-auto'>
                    <h1 className='text-center'>Gestión de Parqueos</h1>
                    <br/>
                    <div className="row row-cols-2 row-cols-md-2 g-4">
                        
                        <PrincipalCard props={{title:"Agregar un parqueo",buttonTitle:"Agregar",redirectLink:"/CreateParking"}} />

                        <PrincipalCardSelect props={{title:"Consultar un parqueo",buttonTitle:"Consultar",redirectLink:"/", requiredItem:"DepartmentList"}} />

                        <PrincipalCard props={{title:"Modificar información de un parqueo",buttonTitle:"Actualizar",redirectLink:"/"}} />

                        <MangParkingForm props={{title:"Eliminar un parqueo",buttonTitle:"Eliminar"}} />

                    </div>
                    
                </div>
            </div>
                       
        </header>
    </Fragment>
  )
}