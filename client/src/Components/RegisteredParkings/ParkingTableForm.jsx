import React from 'react'
import { Fragment } from 'react'
import "./TableParking.css"

export function ParkingTableForm({parkings}) {
  return (
    <Fragment>
        <table>
            
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Tipo</th>
                    <th>Locacion</th>
                    <th>Horario apertura</th>
                    <th>Horario cierre</th>
                    <th>Habilitado fines de semana</th>
                    <th>Campos disponibles</th>
                    <th>Habilitado</th>
                </tr>
            </thead>
            <tbody>
                {parkings.map((parking)=> 
                <tr>
                    <td>{parking.name}</td>
                    <td>{parking.type}</td>
                    <td>{parking.location}</td>
                    <td>{parking.schedule.opening_hour}</td>
                    <td>{parking.schedule.closing_time}</td>
                    <td>{parking.schedule.closing_time}</td>
                    <td>{parking.slotsAvailable}</td>
                    <td>{parking.nonAvailability}</td>
                </tr>
                )}
            </tbody>
        </table>
    </Fragment>  
    )
}
