import React, { Fragment} from 'react'
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars'

export function ExpirationSimulator({props}) {
    const minDate = new Date();
    let date = new Date();
    const handleDateChange = (datetime) => {
        date = datetime.value
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
                                <b className="btn btn-danger m-5">Simular</b>
                            </div>
                                                            
                        </div>
                    </div>
                </div>
            </header>
        </Fragment>
    )
}

