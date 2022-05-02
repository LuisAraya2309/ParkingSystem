import React from 'react'
import { Fragment } from 'react'
export function ParkingInformation({parking}) {
  return (
    <Fragment>

            <div className="row">
                <div className="col">
                    <input type="text" className="form-control" value={parking.name} aria-label="Nombre" readOnly/>
                </div>
                <div className="col">
                    <input type="text" className="form-control" value={parking.type} aria-label="Apellido 1" readOnly/>
                </div>
                <div className="col">
                    <input type="text" className="form-control" value={parking.slotsAvaible} aria-label="Apellido 2" readOnly/>
                </div>

            </div>
            <br></br>
            <div className="row">
                <div className="col">
                    <input type="text" className="form-control" value={parking.schedule} aria-label="Identidad" readOnly/>
                </div>
                <div className="col">
                    <input type="password" className="form-control" value={parking.location} aria-label="Contraseña" readOnly/>
                </div>
                
                <div className="col">
                    <input type="email" className="form-control" value={parking.email} aria-label="Correo institucional" readOnly/>
                </div>

            </div>
            <br></br>
            <center>
                <button type="submit" className="btn btn-dark text-center">Editar Información</button>    
            </center>
            
      </Fragment>
  )
}
