import Chart from 'chart.js/auto';
import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'

export function ByDepartmentsMetrics() {
    const {state} = useLocation()
    const departmentName = state.departmentName.department
    const [parkingPercentage,setParkingPercentage] = useState({})
    console.log(departmentName)


    useEffect(() => {
      axios.post('http://localhost:3001/bookings/parkingsByDeparment',{departmentName: departmentName}).then((response) => {
        console.log(response.data)
        if(response.data==={}){
          alert('No hay gente de este departamento que haya reservado')
        }
        setParkingPercentage(response.data)
    })
    },[]);


    const drawPercentagesGraphic = () => {
      const labels = Object.keys(parkingPercentage)
      const values = labels.map((label)=>{
        return parkingPercentage[label]
      })

      const graphicData = {
        labels: labels,
        datasets: [{
          label: 'Porcentaje de Ocupación por Parqueo',
          backgroundColor: 'blue',
          borderColor: 'white',
          data: values,
        }]
      };

    const config = {
        type: 'bar',
        data: graphicData,
        options: {}
      };
    
    const byParkingtChart = new Chart(
        document.getElementById('chartParkingsByDepartment'),
        config
      ); 

    }

  return (
    <header className="App-header">
                
            <div style={{ backgroundImage: 'url(require("./images/background.png"))' }}>
                <div className='container mx-auto'>
                <br/>
                    <h1 className='text-center'>Porcentaje de ocupación de {departmentName}</h1>
                    <br/>
                    <canvas id="chartParkingsByDepartment"></canvas>
                        {
                            drawPercentagesGraphic()
                        }
                </div>
            </div>
                       
    </header>
  )
}
