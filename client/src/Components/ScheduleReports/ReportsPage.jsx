import React, { Fragment } from 'react'

export function ReportsPage() {

    return (
        <Fragment>
            <header className="App-header">
                    
                    <div style={{ backgroundImage: 'url(require("./images/background.png"))' }}>
                        <div className='container mx-auto'>
                            <h1 className='text-center'>Reportes de Franjas Horarias</h1>
                            <br/>

                            
                            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <center>
                                        <iframe title='Usage per day' styles="background: #F1F5F4;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);" width="400" height="480"  src="https://charts.mongodb.com/charts-parkingsystem-fuknp/embed/dashboards?id=8d6253f7-007a-45eb-b782-51dcffdb3f0b&theme=light&attribution=false&autoRefresh=true&maxDataAge=10&showTitleAndDesc=false&scalingWidth=fixed&scalingHeight=fixed"></iframe>    
                                    </center>
                                    
                                </div>
                                <div class="carousel-item">
                                    <center>
                                        <iframe title='Usage per day' styles="background: #F1F5F4;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);" width="400" height="480"  src="https://charts.mongodb.com/charts-parkingsystem-fuknp/embed/dashboards?id=8d6253f7-007a-45eb-b782-51dcffdb3f0b&theme=light&attribution=false&autoRefresh=true&maxDataAge=10&showTitleAndDesc=false&scalingWidth=fixed&scalingHeight=fixed"></iframe>    
                                    </center>
                                </div>
                                <div class="carousel-item">
                                    <center>
                                        <iframe title='Usage per day' styles="background: #F1F5F4;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);" width="400" height="480"  src="https://charts.mongodb.com/charts-parkingsystem-fuknp/embed/dashboards?id=8d6253f7-007a-45eb-b782-51dcffdb3f0b&theme=light&attribution=false&autoRefresh=true&maxDataAge=10&showTitleAndDesc=false&scalingWidth=fixed&scalingHeight=fixed"></iframe>    
                                    </center>
                                
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                            </div>
                            
                        </div>
                    </div>
                            
                </header>
        </Fragment>
    )
}


//<iframe styles="background: #F1F5F4;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);" width="400" height="480"  src="https://charts.mongodb.com/charts-parkingsystem-fuknp/embed/dashboards?id=8d6253f7-007a-45eb-b782-51dcffdb3f0b&theme=light&autoRefresh=true&maxDataAge=10&showTitleAndDesc=false&scalingWidth=fixed&scalingHeight=fixed"></iframe>