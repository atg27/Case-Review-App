import React from 'react'
import './Post.css'
import Avatar from "@material-ui/core/Avatar"


function Post(props) {
    if(props.loggedIn){
    return (
            <div className="post_container">
                {props.caseData.map((c, idx) =>(
                    <div className="post_card" key={idx}> 
                        <div className="post_header">
                            <Avatar
                            className="post_avatar"
                            alt='MedPix'
                            src="" 
                            />
                            <h3 className="post_title">{c.title} </h3>   
                        </div>
                        <button onClick={() => props.savePost(c)}>save post</button>
                        <img className="post_image" src={'https://openi.nlm.nih.gov'+ c.imgLarge}/>
                        <h4 className="post_caption"><b>Impression</b>: {c.image.caption}</h4>
                    </div>
                ))}
        </div>
    )} else {
            return(
                 <div className="post_container">
                {props.caseData.map((c, idx) =>(
                    <div className="post_card" key={idx}> 
                        <div className="post_header">
                            <Avatar
                            className="post_avatar"
                            alt='MedPix'
                            src="" 
                            />
                            <h3 className="post_title">{c.title} </h3>   
                        </div>
                        <img className="post_image" src={'https://openi.nlm.nih.gov'+ c.imgLarge}/>
                        <h4 className="post_caption"><b>Impression</b>: {c.image.caption}</h4>
                    </div>
                ))}
        </div>
            )
           
        }
}

export default Post
