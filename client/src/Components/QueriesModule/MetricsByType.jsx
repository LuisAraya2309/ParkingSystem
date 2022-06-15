import Chart from 'chart.js/auto';
import React,{Fragment, useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
const lodash = require('lodash')



export function MetricsByType() {

    const {state} = useLocation()
    const parkingName = state.userLogged
    const [bookingPerType, setBookingPerType] = useState({})
    
    useEffect(() => {
        axios.post('http://localhost:3001/bookings/bookingBySlotType',{parkingName:parkingName}).then((response) => {
            setBookingPerType(response.data.perSlotType)
        })
      },[]);

    const drawByTypeGraphic = () =>{
        const labels = Object.keys(bookingPerType)
        const translation = {userSlot:'Usuario',chiefSlot:'Jefatura',preferentialSlot:'Preferencial',tecVehicleSlot:'Oficial',visitorSlot:'Visitante'}
        const translatedLabels = labels.map((label) =>{
            return translation[label]
        })

        const values = labels.map((amount)=>{
            return bookingPerType[amount]
        })
        const total = lodash.sum(values)
        
        let percentageValues = []

        for(const value of values){
            value === 0 ? percentageValues.push(0) : percentageValues.push((value/total) * 100)
        }
         
        const graphicData = {
            labels: translatedLabels,
            datasets: [{
              label: 'Porcentaje de Ocupación por Tipo de Espacio',
              backgroundColor: [
                'red',
                'yellow',
                'blue',
                'green',
                'black'
              ],
              borderColor: 'white',
              data: percentageValues,
            }]
          };

        const config = {
            type: 'doughnut',
            data: graphicData,
            options: {}
          };

        const byTypeChart = new Chart(
            document.getElementById('chartBookingsByType'),
            config
          ); 
    }


  return (
    <Fragment>
        <header className="App-header">
                
            <div style={{ backgroundImage: 'url(require("./images/background.png"))' }}>
                <div className='container mx-auto'>
                    <h1 className='text-center'>Porcentaje de Ocupación</h1>
                    <br/>
                    <h2 className='text-center'>Por tipo de Espacio</h2>
                    <br/>
                    <div>
                        <canvas id="chartBookingsByType"></canvas>
                        {
                            drawByTypeGraphic()
                        }
                    </div>
                    <br/>
                                    
                </div>
            </div>
                       
        </header>
    </Fragment>
  )
}
