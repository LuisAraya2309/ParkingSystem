import React, { Fragment } from 'react'

export function ReportsPage() {

    return (
        <Fragment>
            <header className="App-header">
                    
                    <div style={{ backgroundImage: 'url(require("./images/background.png"))' }}>
                        <div className='container mx-auto'>
                            <br/>
                            <h1 className='text-center'>Reportes de Franjas Horarias</h1>
                            <br/>

                            
                            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <center>
                                        <iframe title = 'Parking Usage per day' styles="background: #FFFFFF;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);" width="800" height="480" src="https://charts.mongodb.com/charts-parkingsystem-fuknp/embed/charts?id=62732c02-94a3-4a02-8e3e-071509f90c54&maxDataAge=10&theme=light&attribution=false&autoRefresh=true"></iframe>
                                    </center>
                                    
                                </div>
                                <div className="carousel-item">
                                    <center>
                                        <iframe title = 'Parking Usage per Functionaries' styles="background: #FFFFFF;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);" width="800" height="480" src="https://charts.mongodb.com/charts-parkingsystem-fuknp/embed/charts?id=6274394c-8d58-4e81-8bcb-0a94cc158416&maxDataAge=10&theme=light&attribution=false&autoRefresh=true"></iframe>
                                    </center>
                                </div>
                                <div className="carousel-item">
                                    <center>
                                    <iframe title = 'Parking Usage per Admins' styles="background: #FFFFFF;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);" width="800" height="480" src="https://charts.mongodb.com/charts-parkingsystem-fuknp/embed/charts?id=62748272-9b0b-4648-83bc-f4e1ba5c2384&maxDataAge=10&theme=light&attribution=false&autoRefresh=true"></iframe>
                                    </center>
                                
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                            </div>
                            
                        </div>
                    </div>
                            
                </header>
        </Fragment>
    )
}


//<iframe title = 'Parking Usage per day' styles="background: #FFFFFF;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);" width="800" height="480" src="https://charts.mongodb.com/charts-parkingsystem-fuknp/embed/charts?id=62732c02-94a3-4a02-8e3e-071509f90c54&maxDataAge=10&theme=light&attribution=false&autoRefresh=true"></iframe>


//<iframe title = 'Parking Usage per Functionaries' styles="background: #FFFFFF;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);" width="800" height="480" src="https://charts.mongodb.com/charts-parkingsystem-fuknp/embed/charts?id=6274394c-8d58-4e81-8bcb-0a94cc158416&maxDataAge=10&theme=light&attribution=false&autoRefresh=true"></iframe>