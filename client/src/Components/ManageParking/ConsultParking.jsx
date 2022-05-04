import React,{Fragment} from 'react'
import image from '../../images/tecSanJose.jpg'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'

export function ConsultParking() {

    const {state} = useLocation();
    const parkingInfo = state.parkingInfo;

  return (
    <Fragment>
        <header className="App-header">
            <div style={{ backgroundImage: 'url(require("./images/genericBackground.png"))' }}>
                <div className='container mx-auto'>
                    <div className="card bg-light w-100 mb-3" >                    
                        <div className="row g-0">
                            <div className="col-md-4">
                            <img src={image} className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h1 className="card-title text-center">{parkingInfo.name}</h1>
                                    <br></br>
                                    
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="text" className="form-label">Tipo de parqueo</label>
                                            <input type="text" className="form-control" placeholder="TipoParqueo" aria-label="TipoParqueo" value = {parkingInfo.type} readOnly/>
                                        </div>
                                        
                                        <div className="col">
                                            <label htmlFor="text" className="form-label">Ubicación</label>
                                            <textarea type="text" style={{resize:'none'}} className="form-control" placeholder="Ubicación" aria-label="Ubicación" value = {parkingInfo.location} readOnly/>
                                        </div>

                                    </div>
                                    <br></br>

                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="text" className="form-label">Hora de apertura</label>
                                            <input type="text" className="form-control" placeholder="Hora de apertura" aria-label="Hora de apertura" value = {parkingInfo.schedule.opening_hour} readOnly/>
                                        </div>
                                        <div className="col">
                                            <label htmlFor="text" className="form-label">Hora de cierre</label>
                                            <input type="text" className="form-control" placeholder="Hora de cierre" aria-label="Hora de cierre" value = {parkingInfo.schedule.closing_time} readOnly/>
                                        </div>

                                        <div className="col">
                                            <label htmlFor="text" className="form-label">Fines de semana</label>
                                            <input type="text" className="form-control" placeholder="FinesSemana" aria-label="FinesSemana" value = {parkingInfo.schedule.weekends_enabled} readOnly/>
                                        </div>
                                        
                                    </div>

                                    <br></br>
                                    <div className="row">
                                        
                                        <div className="col">
                                            <label htmlFor="text" className="form-label">Espacios disponibles</label>
                                            <input type="text" className="form-control" placeholder="Espacios disponibles" aria-label="Espacios disponibles" value = {parkingInfo.slotsAvailable} readOnly/>
                                        </div>

                                        <div className="col">
                                            <label htmlFor="text" className="form-label">Estado</label>
                                            <input type="text" className="form-control" placeholder="estadoParqueo" aria-label="estadoParqueo" value = {parkingInfo.nonAvailability} readOnly/>
                                        </div>
                                        
                                    </div>

                                    <br></br>

                                    <center>
                                        <Link to= '/ManageParking' className="btn btn-danger">Regresar</Link>    
                                    </center>
                                    
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
