import React,{Fragment} from 'react'
import {DepartmentList} from './DepartmentList'

export function DepartmentForm({props}) {
  
    return (
        <Fragment>
            <div className="col">
                <div className="card border-danger text-center h-100">
                    <div className="card-body">
                        <h2 className="card-title">{props.title}</h2>
                        <p className="card-text">{props.body ? props.text : ""}</p>
                        <DepartmentList props={{action:props.action, buttonTitle:props.buttonTitle}} />
                    </div>                                                       
                </div>
            </div>
        </Fragment>
    )
  
}
