import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import CaseEditForm from './CaseEditForm'
import './cases.css'

 const CaseLink = (props) => {

    return (
        <div className='post_card'>
            <Link to={`/cases/${props.cases.id}`}>
                <h3 className="post_title">{props.cases.title} </h3>   
                <img className="post_image" src={props.cases.image}/>                                
            </Link>
            <button onClick={() => props.deleteCase(props.cases.id)}>Delete From Saved</button> 
                <br></br> 
        </div>
       
    )
}
export default CaseLink
