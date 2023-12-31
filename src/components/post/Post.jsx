import React from 'react'
import "./post.scss"
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import Comments from '../comments/Comments';
import { useState } from 'react';
import { Link } from 'react-router-dom'

const Post = ({post}) => {

  const [commentOpen,setCommentOpen] = useState(false)

  //Temporary
  const liked = false; 

  return (
    <div className="post">
      <div className="container">
        <div className="user">
            <div className="userInfo">
                <img src={post.profilePic} alt="" />
                    <div className="details">
                      <Link to={`/Profile/${post.userId}`} style={{textDecoration:"none", color:"inherit"}} >
                        <span className='name'>{post.name}</span>
                        </Link> 
                        <span className='date'> {post.date}</span>   
                     </div> 
                    </div>
                <MoreHorizOutlinedIcon/>
            </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
          {/*<video controls>
            <source src={post.video} type="video/mp4" />
            </video>*/}
        </div>
        <div className="info">
          
          <div className="item">
            {liked ? <FavoriteOutlinedIcon/> : <FavoriteBorderOutlinedIcon/>}
            12 Likes
          </div>

          <div className="item" onClick={()=>setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon/>
            12 Comments
          </div>

          <div className="item">
            <ShareOutlinedIcon/>
            Share
          </div>
        </div>
        {commentOpen && <Comments/>} {/** if true commentopen*/}
     </div>
   </div>
  );
};

export default Post
