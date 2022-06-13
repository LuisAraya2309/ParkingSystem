import React, { Fragment} from 'react'
import { ParkingList } from '../GeneralResources/ParkingList';

export function MangParkingForm({props}) {

    return (
        <Fragment>
            <div className="col">
                <div className="card border-danger text-center h-100">
                    <div className="card-body">
                        <h2 className="card-title">{props.title}</h2>
                        <p className="card-text">{props.body ? props.text : ""}</p>
                        <ParkingList props={{action:props.action, buttonTitle:props.buttonTitle, userLogged: props.userLogged}} />
                    </div>                                                       
                </div>
            </div>
        </Fragment>
    )
}

