import React,{Fragment,useEffect,useState} from 'react'
import axios from 'axios';
import { FunctionaryTable } from '../FunctionaryReport/FunctionaryTable';
export function FunctionaryReport() {
    
    const [FunctionaryList,setFunctionaryList] = useState([]);
  
    useEffect(() => {
        axios.get('http://localhost:3001/Users/getUsers').then((response) => {
            setFunctionaryList(response.data)
        })
    },[]);

  return (
    <Fragment>
    <header className="App-header">
        <div style={{ backgroundImage: 'url(require("./images/genericBackground.png"))' }}>
            <div className='container mx-auto'>
                <FunctionaryTable functionarys={FunctionaryList}/>

            </div>
        </div>
    </header>
  </Fragment>
  )
}