import React,{Fragment} from 'react'
import axios from 'axios'

export function DepartmentsList() {

  return (
    <Fragment>
      <select className="form-select" defaultValue={'DEFAULT'} aria-label="Departamento" >
        <option value="DEFAULT" disabled>Departamento</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
                    
      </select>
    </Fragment>
    
  )
}
