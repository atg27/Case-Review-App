import React from 'react'
import './Post.css'

function Post(props) {


    return (
       
        <div className="post_container">
                {props.caseData.map(c =>(
                    <div className="post_card" key={c.uid}> 
                        
                        <h3 className="post_title">{c.title} </h3>
                    
                    
                            
                            <img className="post_image" src={'https://openi.nlm.nih.gov'+ c.imgLarge}/>
                        
                        
                    
                        <h4 className="post_caption">{c.image.caption}</h4>
                    
                    </div>
                ))}
        </div>
      
    )
}

export default Post
