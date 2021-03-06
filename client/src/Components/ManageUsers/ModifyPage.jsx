import React,{Fragment,useEffect,useState} from 'react'
import userLogo from '../../images/userLogo.png'
import { useLocation } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {useNavigate} from "react-router-dom";
import axios from 'axios';

export function ModifyPage() {

    const {state} = useLocation();
    const userInfo = state.userInfo;
    const {register,handleSubmit} = useForm();
    const [departmentsList,setDepartmentsList] = useState([]);
    var checkboxState = false;

    let navigate = useNavigate()
    const moveTo = () =>{
        let path = "/ManageUsers"
        navigate(path)
    }

    function changeBoxValue(e){
        checkboxState = checkboxState === false ? true: false;
    }

    const onSubmit = async(data) =>{
        try{
            data['discapacity'] = checkboxState;
            axios.post('http://localhost:3001/users/updateUsers',data).then((response) => {})
            moveTo()
        }catch(err){
                alert('Usuario invalido')
        }
    }


    useEffect(() => {
        axios.get('http://localhost:3001/departments/getDepartments').then((response) => {
          setDepartmentsList(response.data)
        })
      },[]);

  return (
      <Fragment>
        <header className="App-header">
            <div style={{ backgroundImage: 'url(require("./images/genericBackground.png"))' }}>
                <div className='container mx-auto'>
                    <div className="card bg-light w-100 mb-3" >                    
                        <div className="row g-0">
                            <div className="col-md-4">
                            <img src={userLogo} className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h1 className="card-title text-center">Modificar información de un Usuario</h1>
                                    <br></br>
                                    
                                    <form onSubmit={handleSubmit(onSubmit)} >
                                        <div className="row">

                                            <div className="col">
                                                <label htmlFor="text" className="form-label">Usuario</label>
                                                <input type="text" className="form-control" value= {userInfo.email} {...register('email',{required:true})}/>
                                            </div>

                                            <div className="col">
                                                <label htmlFor="text" className="form-label">Nombre</label>
                                                <input type="text" className="form-control" defaultValue={userInfo.name} {...register('name',{required:true})}/>
                                            </div>
                                            <div className="col">
                                                <label htmlFor="text" className="form-label">Apellido 1</label>
                                                <input type="text" className="form-control" defaultValue={userInfo.lastname1} {...register('lastname1',{required:true})}/>
                                            </div>
                                            <div className="col">
                                                <label htmlFor="text" className="form-label">Apellido 2</label>
                                                <input type="text" className="form-control"  defaultValue={userInfo.lastname2} {...register('lastname2',{required:true})}/>
                                            </div>
                                            

                                        </div>
                                        <br></br>
                                        <div className="row">
                                            <div className="col">
                                                <label htmlFor="text" className="form-label">Contraseña</label>
                                                <input type="text" className="form-control"  defaultValue={userInfo.password} {...register('password',{required:true})}/>
                                            </div>

                                            <div className="col">
                                                <label htmlFor="text" className="form-label">Placas</label>
                                                <input type="text" className="form-control"  defaultValue={userInfo.vehicles} {...register('vehicles',{required:true})}/>
                                            </div>

                                        </div>    

                                        <br></br>
                                        <div className="row">

                                            <div className="col">
                                                <label htmlFor="text" className="form-label">Correo alterno</label>
                                                <input type="email" className="form-control"  defaultValue={userInfo.altEmail} {...register('altEmail',{required:true})}/>
                                            </div>
                                            <div className="col">
                                                <label htmlFor="text" className="form-label">Departamentos</label>
                                                
                                                <select className="form-select" defaultValue={'DEFAULT'} aria-label="Departamento" {...register('department',{required:true})}>
                                                    <option value="DEFAULT" disabled>Departamento</option>
                                                    {departmentsList.map((department) =>{
                                                    return (
                                                        <option key={department.code} value={department.code}>{department.code + '-'+ department.name}</option>
                                                    );
                                                    })}
                                                </select>

                                            </div>
                                            <div className="col">
                                                <label htmlFor="text" className="form-label">Teléfono</label>
                                                <input type="text" className="form-control" defaultValue={userInfo.phone} {...register('phone',{required:true})}/>
                                            </div>                                           
                                            
                                        </div>

                                        <br></br>
                                        <div className="col">
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox" id="prueba" onChange={(e) => changeBoxValue(e)} />
                                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Discapacidad</label>
                                            </div>
                                        </div>
                                        <center>
                                            <button type="submit" className="btn btn-dark text-center">Modificar información</button>    
                                        </center>
                                        
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
      </Fragment>
    
  )
}
