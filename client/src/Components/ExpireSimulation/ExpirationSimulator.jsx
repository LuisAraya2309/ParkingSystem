import React, { Fragment} from 'react'
import { useState } from 'react';
import axios from 'axios'
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars'

export function ExpirationSimulator({props}) {
    const minDate = new Date();
    let date = new Date();
    const handleDateChange = (datetime) => {
        date = datetime.value
    }
    const [ExpiredList, setExpiredList] = useState([]);
    const simulate = () => {
        axios.post("http://localhost:3001/bookings/simulation")
        .then((expiredBookings) => {
            setExpiredList(expiredBookings)
        })
    }
    return (
        <Fragment>

            <header className="App-header">
                    
                <div style={{ backgroundImage: 'url(require("./images/background.png"))' }}>
                    <div className="col m-5" >
                        <div className="card border-danger text-center h-150">
                            <div className="card-body mt-5">
                                <h2 className="card-title">Simulador de Expiracion</h2>
                                <p className="card-text">
                                    Por favor ingresar una fecha y hora para 
                                    chequear que reservaciones van a expirar en ese momento
                                </p>
                                <DateTimePickerComponent 
                                    id="datetimepicker" 
                                    placeholder="Select a date and time"
                                    min={minDate}
                                    onChange={handleDateChange}
                                />
                                <b onClick={simulate} className="btn btn-danger m-5">Simular</b>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>Parqueo</th>
                                            <th>SlotID</th>
                                            <th>Fecha</th>
                                            <th>Expirado</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {ExpiredList.map((book)=> 
                                        <tr>
                                            <td>{book.parkingName}</td>
                                            <td>{book.slotId}</td>
                                            <td>{book.date}</td>
                                            <td>{book.expired}</td>
                                        </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                                                            
                        </div>
                    </div>
                </div>
            </header>
        </Fragment>
    )
}

