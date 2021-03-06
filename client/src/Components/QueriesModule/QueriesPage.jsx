import React, { Fragment } from 'react'
import { DepartmentForm } from '../GeneralResources/DepartmentForm'
import { PrincipalCard } from '../GeneralResources/PrincipalCard'
import { MangParkingForm } from '../ManageParking/MangParkingForm'

export function QueriesPage() {
  return (
    <Fragment>
        <header className="App-header">
                
            <div style={{ backgroundImage: 'url(require("./images/background.png"))' }}>
                <div className='container mx-auto'>
                    <h1 className='text-center'>Módulo de Consultas</h1>
                    <br/>
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        
                        <PrincipalCard props={{title:"Parqueos Registrados",buttonTitle:"Realizar Consulta",redirectLink:"/RegisteredParkings"}} />

                        <PrincipalCard props={{title:"Informe de funcionarios",buttonTitle:"Realizar Consulta",redirectLink:"/FunctionaryReport"}} />

                        <PrincipalCard props={{title:"Franja Horaria",buttonTitle:"Realizar Consulta",redirectLink:"/ScheduleReports"}} />
                       
                        <PrincipalCard props={{title:"Consultar información de un usuario",buttonTitle:"Realizar Consulta",redirectLink:"/UserInformation"}} />

                        <MangParkingForm props={{title:"Estadísticas de un Parqueo",buttonTitle:"Ver", action:"EstadisticasParqueo"}} />

                        <DepartmentForm props={{title:"Estadísticas por un Departamento",buttonTitle:"Ver", action:"ParkingMetricByDepartment"}} />


                    </div>
                    
                    
                </div>
            </div>
                       
        </header>
    </Fragment>
  )
}
