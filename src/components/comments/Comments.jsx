import React from 'react';
import "./comments.scss";
import {AuthContext} from "../../context/authContext";
import { useContext } from 'react';

const Comments = () => {

    const {currentUser} = useContext(AuthContext)
    //Temporary
    const comments =[ //array
  {
      id:1,
      name:"Richerd smith",
      userId:1,
      profilePicture:"/assets/user5.jpg", 
      desc:"Vespa and #vansoriginal 👍🏻🕶️",
      date:"1 min ago"


  },
  {
      id:2,
      name:"Amelia Ethan",
      userId:2,
      profilePicture:"/assets/user4.jpg",
      desc:"😍❤️❤️❤️❤️😍",
      date:"1 min ago"


  },
  {
    id:3,
    name:"Peter Kane",
    userId:3,
    profilePicture:"/assets/user10.jpg", 
    desc:"I feel this 👏",
    date:"30 sec ago"
  },
   
];

  return (
    <div className="comments">
      <div className='write'>
      <img src={currentUser.profilePic} alt=''/>
      <input type="text" placeholder='write a comment' />
      <button>Send</button>
      </div>

        {comments.map((comment) =>(
        <div className="comment">
         <img src={comment.profilePicture} alt=''/>
         <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
         </div>
         <span className='date'>{comment.date}</span>
        </div>
      )) 
      } </div>
  );
};

export default Comments
