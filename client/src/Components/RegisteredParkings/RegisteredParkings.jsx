import React,{Fragment,useEffect,useState} from 'react'
import axios from 'axios'
import { ParkingTableForm } from './ParkingTableForm';
export function RegisteredParkings() {
    
    const [ParkingList,setParkingList] = useState([]);
  
    useEffect(() => {
        axios.get('http://localhost:3001/Parkings/getParking').then((response) => {
            setParkingList(response.data)
        })
    },[]);

  return (
    <Fragment>
    <header className="App-header">
        <div style={{ backgroundImage: 'url(require("./images/genericBackground.png"))' }}>
            <div className='container mx-auto'>
                <ParkingTableForm parkings={ParkingList}/>

            </div>
        </div>
    </header>
  </Fragment>
  )
}