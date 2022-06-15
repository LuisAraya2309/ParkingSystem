import React,{Fragment,useEffect,useState} from 'react'
import {useForm} from 'react-hook-form';
import {useNavigate} from "react-router-dom"
import axios from 'axios'


export function DepartmentList({props}) {

    const {register,handleSubmit} = useForm();
    const [departmentList,setDepartmentList] = useState([]);

    let navigate = useNavigate()
    const moveTo = (departmentName) =>{
        let path
         
        if(props.action === 'ParkingMetricByDepartment'){
            path = "/ByDepartment"
            navigate(path, {state:{departmentName:departmentName}})
        }
    }
    
    useEffect(() => {
        axios.get('http://localhost:3001/departments/getDepartments').then((response) => {
            setDepartmentList(response.data)
        })
      },[]);


    const onSubmit = async(data) =>{
        try{
            if(props.action === 'ParkingMetricByDepartment'){
                moveTo(data)
            }
        } catch(err){
            alert('Se produjo un error')
        }
    }

  return (
    <Fragment>
        <form onSubmit={handleSubmit(onSubmit)}>
            <select className="form-select" defaultValue={'DEFAULT'} aria-label="Departamentos" {...register('department',{required:true})}>
            <option value="DEFAULT" disabled>Departamentos</option>
            {departmentList.map((department) =>{
                return (
                        <option key={department.name} value={department.name}> {department.name} </option>
                    );
            })}
            </select>
            <input type="submit" className="btn btn-danger btn-block" value = {props.buttonTitle} />        
        </form>
    </Fragment>
  )
}
