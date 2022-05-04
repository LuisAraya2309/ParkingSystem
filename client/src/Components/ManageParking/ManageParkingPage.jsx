import React,{Fragment} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
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

                        <MangParkingForm props={{title:"Consultar un parqueo",buttonTitle:"Consultar", action:"Consultar"}} />

                        <MangParkingForm props={{title:"Modificar información",buttonTitle:"Actualizar", action:"Actualizar"}} />

                        <MangParkingForm props={{title:"Eliminar un parqueo",buttonTitle:"Eliminar", action:"Eliminar"}} />

                    </div>
                    
                </div>
            </div>
                       
        </header>
    </Fragment>
  )
}