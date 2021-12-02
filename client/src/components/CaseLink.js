import { Link } from 'react-router-dom'
import './CaseLink.css'
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


 const CaseLink = (props) => {
    return (
        <div className="link_container"> 
            <div className='link_card'>
                <Link to={`/cases/${props.cases.id}`}>
                    <h3 className="link_title">{props.cases.title} </h3>   
                    <img className="link_image" alt='' src={props.cases.image}/>                                
                </Link>
                <Button style={{float: "right"}} variant="contained" color="success" size="small" startIcon={<DeleteIcon />}  onClick={() => props.deleteCase(props.cases.id)}>Remove From Saved</Button> 
            </div> 
        </div>
             
      
        

       
    )
}
export default CaseLink
