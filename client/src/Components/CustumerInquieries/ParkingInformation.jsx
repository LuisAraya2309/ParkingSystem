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
                    <input type="text" className="form-control" value={parking.type} aria-label="Tipo" readOnly/>
                </div>
                <div className="col">
                    <input type="text" className="form-control" value={parking.location} aria-label="Locación" readOnly/>
                </div>

            </div>
            <br></br>
            <div className="row">
                <div className="col">
                    <input type="text" className="form-control" value={parking.schedule} aria-label="Horario" readOnly/>
                </div>
                <div className="col">
                    <input type="text" className="form-control" value={parking.slotsAvailable} aria-label="Campos disponibles" readOnly/>
                </div>
            </div>
            <br></br>
            
      </Fragment>
  )
}
