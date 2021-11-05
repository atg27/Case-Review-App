import React, {useState, useEffect} from 'react'
import Avatar from "@material-ui/core/Avatar"
import './cases.css'
import CaseEditForm from './CaseEditForm'



 const Case = (props) => {
    const [caseCard, setCaseCard] = useState({})
    const [errors, setErrors ] = useState('')

    const [formFlag, setFormFlag] = useState(false) 

    const switchFormFlag = () => {
        formFlag ? setFormFlag(false) : setFormFlag(true)
    }

    useEffect(() => {
        fetch(`/cases/${props.match.params.id}`)
        .then(r => r.json())
        .then(data =>{
                if (data.error) {
                    setErrors(data.error)
                } else {
                    setCaseCard(data)
                }
        })
    }, [])


        if (errors==="") { 
            return (
                <div className="post_card">
                
                <h2 className="post_title">{caseCard.title}</h2>
                <img className="post_image" src={caseCard.image}/>
                <h4 className="post_caption"><b>Impression</b>: {caseCard.caption}
                </h4>
            </div>
            )
        } else {
            return (
                <h3>{errors}</h3>
            )
        }
 }
        
export default Case 