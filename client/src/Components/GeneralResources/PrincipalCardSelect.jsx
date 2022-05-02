import React, { Fragment,useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export function PrincipalCardSelect({props}) {

    const [userList,setUsersList] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:3001/users/getUsers').then((response) => {
            setUsersList(response.data)
        })
      },[]);

    return (
        <Fragment>
            <div className="col">
                <div className="card border-danger text-center h-100">
                    <div className="card-body">
                        <h2 className="card-title">{props.title}</h2>
                        <p className="card-text">{props.body ? props.text : ""}</p>
                        <select className="form-select" defaultValue={'DEFAULT'} aria-label="Usuarios" >
                        <option value="DEFAULT" disabled>Usuarios</option>
                        {userList.map((user) =>{
                            return (
                            <option key={user.ID} value={user.id}> {user.ID/*name + ' '+ user.lastname1 + ' '+ user.lastname2*/}</option>
                            
                            );
                        })}
                        </select>
                    </div>                                
                    <Link to={props.redirectLink} className="btn btn-danger">{props.buttonTitle}</Link>                                
                </div>
            </div>
        </Fragment>
    )
}

