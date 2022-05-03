import React,{Fragment} from 'react'
import image from '../../images/tecSanJose.jpg'
import {useForm} from 'react-hook-form';

export  function CreateParking() {

    const {register,handleSubmit} = useForm();

    const onSubmit = async() =>{
        /*try{
            console.log(data)
        }catch(err){
                alert('Usuario invalido')
        }
        
        
        try{
            const response = await axios.post('http://localhost:3001/createUser', data);
            const userLogged = response.data.email
            console.log('Bienvenido ' + userLogged)
            
        } catch(err){
            alert('Usuario invalido')
        }
        */
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
                                                
                                                <select className="form-select" defaultValue={'DEFAULT'} aria-label="TipoParqueo" {...register('parkingType',{required:true})} >
                                                    <option value="DEFAULT" disabled>Tipo de parqueo</option>
                                                    <option key= "1" value="Oficial" >Oficial</option>
                                                    <option key= "2" value="Aledaño" >Aledaño</option>
                                                </select>
                                                
                                            </div>
                                            <div className="col">
                                                <label htmlFor="text" className="form-label">Ubicación</label>
                                                <input type="text" className="form-control" placeholder="Ubicación" aria-label="Ubicación" {...register('location',{required:true})}/>
                                            </div>

                                        </div>
                                        <br></br>

                                        <div className="row">
                                            <div className="col">
                                                <label htmlFor="text" className="form-label">Hora de apertura</label>
                                                <input type="time" className="form-control" placeholder="Hora de apertura" aria-label="Hora de apertura" {...register('begin',{required:true})}/>
                                            </div>
                                            <div className="col">
                                                <label htmlFor="text" className="form-label">Hora de cierre</label>
                                                <input type="time" className="form-control" placeholder="Hora de cierre" aria-label="Hora de cierre"  {...register('end',{required:true})}/>
                                            </div>
                                            <div className="col">
                                                <label htmlFor="text" className="form-label">Fines de semana</label>
                                                <select className="form-select" defaultValue={'DEFAULT'} aria-label="Fines de semana" {...register('weekend',{required:true})} >
                                                    <option value="DEFAULT" disabled>Estado del parqueo</option>
                                                    <option key= "1" value="Acvito" >Acvito</option>
                                                    <option key= "2" value="Fuerafuncionamiento" >Fuera de funcionamiento</option>
                                                </select>
                                            </div>
                                            
                                        </div>

                                        <br></br>
                                        <div className="row">
                                            
                                            <div className="col">
                                                <label htmlFor="text" className="form-label">Espacios disponibles</label>
                                                <input type="text" className="form-control" placeholder="Espacios disponibles" aria-label="Espacios disponibles"  {...register('slots',{required:true})}/>
                                            </div>


                                            <div className="col">
                                                <label htmlFor="text" className="form-label">Estado</label>
                                                <select className="form-select" defaultValue={'DEFAULT'} aria-label="estadoParqueo" {...register('Available',{required:true})} >
                                                    <option value="DEFAULT" disabled>Estado del parqueo</option>
                                                    <option key= "1" value="Acvito" >Acvito</option>
                                                    <option key= "2" value="Fuerafuncionamiento" >Fuera de funcionamiento</option>
                                                </select>
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
