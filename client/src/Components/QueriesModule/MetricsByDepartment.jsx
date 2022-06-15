import Chart from 'chart.js/auto';
import React,{Fragment, useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
const lodash = require('lodash')



export function MetricsByDepartment() {

    const {state} = useLocation()
    const parkingName = state.userLogged
    const [bookingPerDepartment, setBookingPerDepartment] = useState({})
    
    useEffect(() => {
        axios.post('http://localhost:3001/bookings/bookingBySlotType',{parkingName:parkingName}).then((response) => {
            setBookingPerDepartment(response.data.perDepartment)
        })
      },[]);

    const drawByDepartmentGraphic = () =>{
        console.log(bookingPerDepartment)

        const departmentLabels = Object.keys(bookingPerDepartment)

        const amountValues = departmentLabels.map((label)=>{
            return bookingPerDepartment[label]
        })

        const total = lodash.sum(amountValues)
        let percentageValues = []

        for(const value of amountValues){
            value === 0 ? percentageValues.push(0) : percentageValues.push((value/total) * 100)
        }
         
        const graphicData = {
            labels: departmentLabels,
            datasets: [{
              label: 'Porcentaje de Ocupación por Departamento',
              backgroundColor: 'green',
              borderColor: 'white',
              data: percentageValues,
            }]
          };

        const config = {
            type: 'bar',
            data: graphicData,
            options: {}
          };
        
        const byDepartmentChart = new Chart(
            document.getElementById('chartBookingsByDepartment'),
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
                    <h2 className='text-center'>Por Departamento</h2>
                    <br/>
                    <div>
                        <canvas id="chartBookingsByDepartment"></canvas>
                        {
                            drawByDepartmentGraphic()
                        }
                    </div>
                    
                </div>
            </div>
                       
        </header>
    </Fragment>
  )
}
