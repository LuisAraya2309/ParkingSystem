import React from 'react'
import { Fragment } from 'react'
//import "./Table.css"

export function FunctionaryTable({functionarys}) {
  return (
    <Fragment>
        <table>
            
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Primer Apellido</th>
                    <th>Segundo Apellido</th>
                    <th>Departamento</th>
                    <th>Email</th>
                    <th>Tipo</th>
                    <th>Vehiculos</th>
                </tr>
            </thead>
            <tbody>
                {functionarys.map((functionary)=> 
                <tr>
                    <td>{functionary.name}</td>
                    <td>{functionary.lastname1}</td>
                    <td>{functionary.lastname2}</td>
                    <td>{functionary.department}</td>
                    <td>{functionary.type}</td>
                    <td>{functionary.email}</td>
                    <td>{functionary.vehicles}</td>
                </tr>
                )}
            </tbody>
        </table>
    </Fragment>  
    )
}
