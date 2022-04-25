import React,{Fragment,useEffect,useState} from 'react'
import axios from 'axios'


export function DepartmentsList() {

  const [departmentsList,setDepartmentsList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/departments/getDepartments').then((response) => {
      setDepartmentsList(response.data)
    })
  },[]);

  return (
    <Fragment>
      <select className="form-select" defaultValue={'DEFAULT'} aria-label="Departamento" >
        <option value="DEFAULT" disabled>Departamento</option>
        {departmentsList.map((department) =>{
          return (
            <option key={department.code} value={department.code}>{department.code + '-'+ department.name}</option>
          );
        })}
      </select>
    </Fragment>
    
  )
}
