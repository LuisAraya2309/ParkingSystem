import React, { Fragment } from 'react'
import {useForm} from 'react-hook-form';
import axios from 'axios';
export function ScheduleForm({userLogged}) {

    let daysOfWeek = ['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo']
    const {register,handleSubmit} = useForm();

    const onSubmit = async(data) =>{
        try{
            const response = await axios.post('http://localhost:3001/users/modifySchedule', [data,userLogged]);
            console.log(response)
        }catch(err){
                alert('Usuario invalido')
        }
    }
    


  return (
    <Fragment>
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Ejemplo: 7:00am-1:00pm</h2>
            <input type="text" className="form-control"  placeholder='Horario' id="schedule" {...register('schedule',{required:true})}/>

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