import React from 'react'
import { Fragment } from 'react'
export function PersonalInformation({user}) {
  return (
    <Fragment>

            <div className="row">
                <div className="col">
                    <input type="text" className="form-control" value={user.name} aria-label="Nombre" readOnly/>
                </div>
                <div className="col">
                    <input type="text" className="form-control" value={user.lastname1} aria-label="Apellido 1" readOnly/>
                </div>
                <div className="col">
                    <input type="text" className="form-control" value={user.lastname2} aria-label="Apellido 2" readOnly/>
                </div>

            </div>
            <br></br>
            <div className="row">
                <div className="col">
                    <input type="text" className="form-control" value={user.ID} aria-label="Identidad" readOnly/>
                </div>
                <div className="col">
                    <input type="password" className="form-control" value={user.password} aria-label="Contraseña" readOnly/>
                </div>
                
                <div className="col">
                    <input type="email" className="form-control" value={user.email} aria-label="Correo institucional" readOnly/>
                </div>

            </div>

            <br></br>
            <div className="row">
                <div className="col">
                    <input type="email" className="form-control" value={user.altEmail} aria-label="Correo alterno" readOnly/>
                </div>
                <div className="col">
                <input type="text" className="form-control" value={user.phone} aria-label="Teléfono" readOnly/>
                </div>
                <div className="col">
                    <input type="text" className="form-control" value={user.department} aria-label="Departamento" readOnly/>
                </div>
                <div className="col">
                    <input type="text" className="form-control" value={user.vehicules} aria-label="Placas" readOnly/>
                </div>
                
            </div>

            
            <br></br>
            <center>
                <button type="submit" className="btn btn-dark text-center">Editar Información</button>    
            </center>
            
      </Fragment>
  )
}
