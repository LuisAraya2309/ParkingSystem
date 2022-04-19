import React,{Fragment} from 'react'
import {Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
export function AdminPage() {
  return (
    <Fragment>
        <header className="App-header">
                
            <div style={{ backgroundImage: 'url(require("./images/background.png"))' }}>
                <div className='container mx-auto'>
                    <h1 className='text-center'>Administración</h1>
                    <br/>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card border-danger text-center h-100">

                            <div className="card-body">
                                <h2 className="card-title">Administración del Parqueo</h2>
                            </div>                                
                            <Link to="/" className="btn btn-danger">Administrar Parqueo</Link>                                
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-danger text-center h-100">
                            
                            <div className="card-body">
                                <h2 className="card-title">Administración de Usuarios</h2>
                                
                            </div>
                            <Link to="/" className="btn btn-danger">Administrar Usuarios</Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-danger text-center h-100">
                            
                            <div className="card-body">
                                <h2 className="card-title">Módulo de Consultas del Parqueo</h2>
                                
                            </div>
                            <Link to="/" className="btn btn-danger">Realizar Consultas</Link>
                            </div>
                        </div>
                       
                       
                    </div>
                    
                    
                </div>
            </div>
                       
        </header>
    </Fragment>
  )
}
