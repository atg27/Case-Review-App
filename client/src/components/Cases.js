import React from 'react'
import {useState, useEffect} from 'react'
import Case from './Case'
import CaseForm from './CaseForm'
import Avatar from "@material-ui/core/Avatar"
import './cases.css'
import CaseLink from './CaseLink'


const Cases = (props) => {
        const [cases, setCases] = useState([])
        const [error, setError] = useState("")
        const [casesErrors, setCasesErrors] = useState([])
        const [formFlag, setFormFlag] = useState(false)
    
        useEffect(() => {
            fetch('/cases')
            .then(r => r.json())
            .then(data => {
                console.log('use effect', data)
                if(data.error){
                    setError(data.error)
                } else {
                    setCases(data) 
                }
            })
        }, [])
    
        const addCase = (c) => {
            fetch('/cases', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(c)
        })
            .then(r => r.json())
            .then(data => {
    
                if(data.errors) {
                    setCasesErrors(data.errors)
                } else {
                    console.log(data)
                setCases([...cases, data])
                setFormFlag(false)
                setCasesErrors([])
                }
            })
        }
    
        const deleteCase = (id) => {
            fetch(`/cases/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(() => {
                const filteredCases = cases.filter(c => c.id !== c)
                
                setCases(filteredCases)
            })
        }
    
        const editCase = (editedCase) => {
            fetch(`/cases/${editedCase.id}`, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(editedCase)
            })
            .then(r => r.json())
            .then((data)=>{
                console.log(data)
                const editedCases = cases.map(c => c.id === editedCase.id? editedCase : c)
                setCases(editedCase)
            })
        }
    

        const errorsList = casesErrors.map(e => <div key={e.id} style={{ textTransform: 'uppercase', marginBottom: '20px', marginTop: '20px', color: 'red'}}><ul key={e.id}>{e}</ul></div>)
    
        const casesListLink = cases.map(c => <CaseLink key={c.id} cases={c} editCase={editCase} deleteCase={deleteCase} ></CaseLink>)
                
        if (error === '') {
             return (
                    <div className=''>
                        Saved Case List Below:
                        <br></br>
                        <br></br>
    
                        
                    <div className="case_form">
                         {formFlag ? 
                            <CaseForm addCase={addCase}/> 
                            : 
                            <button style={{border: '2px solid green', color: 'Green', display: 'flex', }} 
                                onClick={() => setFormFlag(true)}>Add A Custom Case
                            </button>
                        }
                            &nbsp;
                            &nbsp;
                            &nbsp;
                    </div>
                       
                         
                        <div className="post_container">
                            {/* {props.saved.map((c, idx) =>(
                                <div className="post_card" key={idx}> 
                                <div className="post_header">
                                    <Avatar
                                    className="post_avatar"
                                    alt={`${props.user}`}
                                    src="" 
                                    />
                                    <h3 className="post_title">{c.title} </h3>   
                                </div>
                                    <button onClick={() => props.removePost(c)}>remove post</button>
                                    <img className="post_image" src={'https://openi.nlm.nih.gov'+ c.imgLarge}/>
                                    <h4 className="post_caption"><b>Impression</b>: {c.image.caption}</h4>
                                </div>
                                ))} */}
                            
                            {/* {cases.map((c, idx) =>(
                                <div className="post_card" key={idx}> 
                                <div className="post_header">
                                    <Avatar
                                    className="post_avatar"
                                    alt={`${props.user}`}
                                    src="" 
                                    />
                                    <h3 className="post_title">{c.title} </h3>   
                                </div>
                                    <button onClick={() => props.removePost(c)}>remove post</button>
                                    <img className="post_image" src={c.image}/>
                                    <h4 className="post_caption"><b>Impression</b>: {c.caption}</h4>
                                </div>
                                ))} */}
                        </div>
                        {errorsList}
                        {/* {casesList} */}
                        {casesListLink}
                    </div>
            )
        } else {
            return (
                <h3>Not Authorized! Please Sign Up or Login</h3>
            )
        }
}
export default Cases