import React,{Fragment} from 'react'
import image from '../../images/tecSanJose.jpg'
import {useForm} from 'react-hook-form';
import axios from 'axios';
import {useNavigate} from "react-router-dom"
import parking from './Parking.js'

const parkingFactory = new parking.ParkingFactory()
var contractInfo 

export  function CreateParking() {

    function guardarArchivo(e) {
        var file = e.target.files[0] //the file
        var reader = new FileReader() //this for convert to Base64 
        reader.readAsDataURL(e.target.files[0]) //start conversion...
        reader.onload = function (e) { //.. once finished..
          var rawLog = reader.result.split(',')[1]; //extract only thee file data part
          console.log("Prueba")
          console.log(file.name)
          var dataSend = { dataReq: { data: rawLog, name: file.name, type: file.type }, fname: "uploadFilesToGoogleDrive" }; //prepare info to send to API
          fetch('https://script.google.com/macros/s/AKfycbxpJthcQU0MinllxonsFDGw87shLcXGvM4I9rehsLeQd2Ti1oQ/exec', //your AppsScript URL
            { method: "POST", body: JSON.stringify(dataSend) }) //send to Api
            .then(res => res.json()).then((a) => {
                alert('Documento almacenado con éxito')
                contractInfo = a
            }).catch(e => console.log(e)) // Or Error in console
        }
      }

    const {register,handleSubmit} = useForm();

    let navigate = useNavigate()
    const moveTo = () =>{
      let path = '/ManageParking'
      navigate(path)
    }

    const onSubmit = async(data) =>{

        data['slotsAvailable'] = {'users':data.users, 'chief':data.chief, 'preferential':data.preferential, 'visitor':data.visitor ,'tecVehicle':data.tecVehicles}
        const parkingInfo = parkingFactory.create(data,contractInfo)

        const slotsInfo = {'userSlot':{'totalAmount':data.users},'chiefSlot':{'totalAmount':data.chief},'preferentialSlot':{'totalAmount':data.preferential},
        'tecVehicleSlot':{'totalAmount':data.tecVehicles},'parkingName':data.name,'visitorSlot':{'totalAmount':data.visitor}};

        try{
            axios.post('http://localhost:3001/parkings/createParking',parkingInfo).then((response) => {})
            axios.post('http://localhost:3001/slots/createSlots',slotsInfo).then((response) => {})
            moveTo()
        }catch(err){
            alert(err)
        }
    }

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
                                    <h1 className="card-title text-center">Ingresar un parqueo</h1>
                                    <br></br>
                                    
                                    <form onSubmit={handleSubmit(onSubmit)} >
                                        <div className="row">
                                            <div className="col">
                                                <label htmlFor="text" className="form-label">Nombre</label>
                                                <input type="text" className="form-control" placeholder="Nombre" aria-label="Nombre" {...register('name',{required:true})}/>
                                            </div>
                                            <div className="col">
                                                <label htmlFor="text" className="form-label">Tipo de parqueo</label>
                                                
                                                <select className="form-select" defaultValue={'DEFAULT'} aria-label="TipoParqueo" {...register('type',{required:true})} >
                                                    <option value="DEFAULT" disabled>Tipo de parqueo</option>
                                                    <option key= "1" value="Oficial" >Oficial</option>
                                                    <option key= "2" value="Aledaño" >Aledaño</option>
                                                </select>
                                                
                                            </div>
                                            <div className="col">
                                                <label htmlFor="text" className="form-label">Ubicación</label>
                                                <input type="text" className="form-control" placeholder="Ubicación" aria-label="Ubicación" {...register('location',{required:false})}/>
                                            </div>

                                        </div>
                                      

                                        <div className="row">
                                            <div className="col">
                                                <label htmlFor="text" className="form-label">Hora de apertura</label>
                                                <input type="time" className="form-control" placeholder="Hora de apertura" aria-label="Hora de apertura" {...register('opening_hour',{required:true})}/>
                                            </div>
                                            <div className="col">
                                                <label htmlFor="text" className="form-label">Hora de cierre</label>
                                                <input type="time" className="form-control" placeholder="Hora de cierre" aria-label="Hora de cierre"  {...register('closing_time',{required:true})}/>
                                            </div>
                                            <div className="col">
                                                <label htmlFor="text" className="form-label">Fines de semana</label>
                                                <select className="form-select" defaultValue={'DEFAULT'} aria-label="Fines de semana" {...register('weekends_enabled',{required:true})} >
                                                    <option value="DEFAULT" disabled>Estado del parqueo</option>
                                                    <option key= "1" value="true" >Activo</option>
                                                    <option key= "2" value="false" >Fuera de funcionamiento</option>
                                                </select>
                                            </div>
                                            
                                        </div>

                                        <br></br>

                                        <div className="row">
                                            
                                            <div className="col">
                                                <label htmlFor="text" className="form-label">Usuarios</label>
                                                <input type="Number" className="form-control" placeholder="Espacios disponibles" aria-label="Espacios disponibles"  {...register('users',{required:true})}/>
                                            </div>

                                            <div className="col">
                                                <label htmlFor="text" className="form-label">Jefatura</label>
                                                <input type="Number" className="form-control" placeholder="Espacios disponibles" aria-label="Espacios disponibles"  {...register('chief',{required:true})}/>
                                            </div>

                                            <div className="col">
                                                <label htmlFor="text" className="form-label">Preferencial</label>
                                                <input type="Number" className="form-control" placeholder="Espacios disponibles" aria-label="Espacios disponibles"  {...register('preferential',{required:true})}/>
                                            </div>

                                            <div className="col">
                                                <label htmlFor="text" className="form-label">Visitantes</label>
                                                <input type="Number" className="form-control" placeholder="Espacios disponibles" aria-label="Espacios disponibles"  {...register('visitor',{required:true})}/>
                                            </div>

                                            <div className="col">
                                                <label htmlFor="text" className="form-label">Vehic. TEC</label>
                                                <input type="Number" className="form-control" placeholder="Espacios disponibles" aria-label="Espacios disponibles"  {...register('tecVehicles',{required:true})}/>
                                            </div>
                                        </div>

                                        <div className="row">                           

                                            <div className="col">
                                                <label htmlFor="text" className="form-label">Estado</label>
                                                <select className="form-select" defaultValue={'DEFAULT'} aria-label="estadoParqueo" {...register('nonAvailability',{required:true})} >
                                                    <option value="DEFAULT" disabled>Estado del parqueo</option>
                                                    <option key= "1" value="true" >Activo</option>
                                                    <option key= "2" value="false" >Fuera de funcionamiento</option>
                                                </select>
                                            </div>
                                            
                                            <div className="col">
                                                <label className="form-label" htmlFor="customFile">Contrato</label>
                                                <input type="file" accept="application/pdf" className="form-control" id="customFile" onChange={(e) => guardarArchivo(e)} />
                                        
                                            </div>
                                        </div>

                                        <br></br>
                                        
                                        <center>
                                            <button type="submit" className="btn btn-dark text-center">Ingresar información</button>  
                                        </center>
                                        
                                    </form>
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
