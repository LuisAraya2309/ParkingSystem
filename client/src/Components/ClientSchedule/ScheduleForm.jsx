import React, { Fragment } from 'react'
import {useForm} from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function ScheduleForm({userLogged}) {

    let daysOfWeek = ['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo']
    const {register,handleSubmit} = useForm();

    let navigate = useNavigate()
    const moveTo = () =>{
        let path = "/ClientPage"
        navigate(path,{state:{user:userLogged}})
    }

    const onSubmit = async(data) =>{
        try{
            console.log(data)
            const response = await axios.post('http://localhost:3001/users/modifySchedule', [data,userLogged]);
            console.log(response)
            alert('Horario modificado con éxito')
            moveTo()
            

        }catch(err){
                alert('Usuario invalido')
        }
    }
    


  return (
    <Fragment>
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Hora de Inicio</h2>
            <input type="time" className="form-control"  placeholder='Horario' id="schedule" {...register('scheduleB',{required:true})}/>
            <br></br>
            <h2>Hora de Fin</h2>
            <input type="time" className="form-control"  placeholder='Horario' id="schedule" {...register('scheduleE',{required:true})}/>

            <br/>
            <h2>Día</h2>

            {
                daysOfWeek.map((day)=>{
                    return (
                        <div className="form-check">
                            <input key = {day} className="form-check-input" type="checkbox" value={day}  {...register('days',{required:true})}/>
                            <label className="form-check-label" htmlFor={day}>
                                {day}
                            </label>
                
                        </div>
                    );
                    
                })
            }

            <br/>
            <center>
                <input type='submit' className='btn btn-danger btn-block' value='Asignar Horario'/>
            </center>

            
        </form>
    </Fragment>
  )
}