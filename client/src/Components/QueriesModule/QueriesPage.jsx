import React, { Fragment } from 'react'
import { PrincipalCard } from '../GeneralResources/PrincipalCard'

export function QueriesPage() {
  return (
    <Fragment>
        <header className="App-header">
                
            <div style={{ backgroundImage: 'url(require("./images/background.png"))' }}>
                <div className='container mx-auto'>
                    <h1 className='text-center'>Módulo de Consultas</h1>
                    <br/>
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        
                        <PrincipalCard props={{title:"Parqueos Registrados",buttonTitle:"Realizar Consulta",redirectLink:"/"}} />

                        <PrincipalCard props={{title:"Informe de funcionarios",buttonTitle:"Realizar Consulta",redirectLink:"/FunctionaryReport"}} />

                        <PrincipalCard props={{title:"Franja Horaria",buttonTitle:"Realizar Consulta",redirectLink:"/QueriesPage"}} />
                       
                        <PrincipalCard props={{title:"Consultar información de un usuario",buttonTitle:"Realizar Consulta",redirectLink:"/UserInformation"}} />
 
                    </div>
                    
                    
                </div>
            </div>
                       
        </header>
    </Fragment>
  )
}
