import { useContext } from 'react';
import "./stories.scss";
import { AuthContext } from '../../context/authContext';


const Stories = () => {

    const {currentUser} = useContext(AuthContext)

    //Temporary
    const stories =[ //array
        {
            id:1,
            name:"Ketharina jimmy",
            img:"/assets/0.png"

        },
        {
            id:1,
            name:"Joe Root",
            img:"/assets/4.jpeg"
        },
        {
            id:2,
            name:"Richerd smith",
            img:"/assets/2.jpg"
        },
        {
            id:3,
            name:"Clara lea",
            img:"/assets/1.jpg"
        },
          /*
        {
            id:4,
            name:"Peter Kane",
            img:"/assets/3.png"
        }, 
        {
            id:6,
            name:"Mitchel Stark",
            img:"/assets/5.jpg"
        },*/
        
    ];

  return (
    <div className='stories'> 
        <div className="story">
        <img src={currentUser.profilePic} alt="" />
                <span>Add to Story</span>
                <button>+</button>
            </div>

        {stories.map(story=>(
            <div className="story" key={story.id}>
                <img src={story.img} alt="" />
                <span>{story.name}</span>
            </div>
        ))}
     </div>
  )
}

export default Stories
