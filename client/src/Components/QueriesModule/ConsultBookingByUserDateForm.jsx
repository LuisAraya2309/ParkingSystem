import React from 'react'
import { Fragment } from 'react'


export function ConsultBookingByUserDateForm({BookingList}) {
  return (
    <Fragment>
        <table class="table">
            <thead>
                <tr>
                    <th>Nombre del parqueo</th>
                    <th>Nombre del campo asignado</th>
                    <th>Vehiculo</th>
                    <th>Horario</th>
                    <th>Dia</th>
                </tr>
            </thead>
            <tbody>
                {BookingList.map((Booking)=> 
                <tr>
                    <td>{Booking.parkingName}</td>
                    <td>{Booking.slotId}</td>
                    <td>{Booking.vehicle}</td>
                    <td>{Booking.schedule}</td>
                    <td>{Booking.date}</td>
                </tr>
                )}
            </tbody>
        </table>
    </Fragment>  
    )
}
