import React, { Fragment} from 'react'
import { UsersList } from '../GeneralResources/UsersList';

export function ManageUsersForm({props}) {

    return (
        <Fragment>
            <div className="col">
                <div className="card border-danger text-center h-150">
                    <div className="card-body">
                        <h2 className="card-title">{props.title}</h2>
                        <p className="card-text">{props.body ? props.text : ""}</p>
                        <UsersList props={{action:props.action, buttonTitle:props.buttonTitle}}/>
                    </div>                                     
                </div>
            </div>
        </Fragment>
    )
}

