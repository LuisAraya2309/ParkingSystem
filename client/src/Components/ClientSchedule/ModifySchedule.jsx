import React, { Fragment } from 'react'
import { ScheduleForm } from './ScheduleForm'
import { useLocation } from 'react-router-dom';

export function ModifySchedule() {
    const {state} = useLocation();
    const userLogged = state.userLogged
  return (
    <Fragment>
        <header className="App-header">
                
            <div style={{ backgroundImage: 'url(require("./images/background.png"))' }}>
                <div className='container mx-auto'>
                    <center>
                        <h1>Seleccione su horario</h1>
                    </center>
                    <br/>
                    <br/>
                    <ScheduleForm userLogged={userLogged}/>
                </div>
            </div>
                           
        </header>
    </Fragment>
    
  )
}
