import React, { useContext } from 'react';
import "./leftBar.scss";
import Friends from '../../assets/friends1.png'
import Groups from '../../assets/group-discussion2.png'
import Market from '../../assets/marketplace3.png'
import Watch from '../../assets/watchs4.png'
import Memories from '../../assets/memories5.png'
import Events from '../../assets/events6.png'
import Gaming from '../../assets/gaming7.png'
import Gallery from '../../assets/gallery8.png'
import Videos from '../../assets/video9.png'
import Messages from '../../assets/messages10.png'
import Fund from '../../assets/Fundraiser11.png'
import Books from '../../assets/Books12.png'
import Courses from '../../assets/courses13.png'
import { AuthContext } from '../../context/authContext';



const LeftBar = () => {

    const {currentUser} = useContext(AuthContext);

  return (
    <div className='leftBar'>
        <div className="container">
            <div className="menu">
            <div className="user">
               {/*<img src="/assets/Profile.jpg" alt=""/> 
               <span>Mitchel Smith</span>*/}
               <img src={currentUser.profilePic} alt="" />
               <span>{currentUser.name}</span>
            </div>
            <div className="item">
                <img src={Friends} alt="" />
                <span>Friends</span>
            </div>
            <div className="item">
                <img src={Groups} alt="" />
                <span>Groups</span>
            </div>
            <div className="item">
                <img src={Market} alt="" />
                <span>Marketplace</span>
            </div>
            <div className="item">
                <img src={Watch} alt="" />
                <span>Watch</span>
            </div>
            <div className="item">
                <img src={Memories} alt="" />
                <span>Memories</span>
            </div>
          </div>
         

          <hr/>
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
                <img src={Events} alt="" />
                <span>Events</span>
            </div>
            <div className="item">
                <img src={Gaming} alt="" />
                <span>Gaming</span>
            </div>
            <div className="item">
                <img src={Gallery} alt="" />
                <span>Gallery</span>
            </div>
            <div className="item">
                <img src={Videos} alt="" />
                <span>Videos</span>
            </div>
            <div className="item">
                <img src={Messages} alt="" />
                <span>Messages</span>
            </div>
         </div>

            <hr/>
            <div className="menu">
            <span>Others</span>
              <div className="item">
                    <img src={Fund} alt="" />
                    <span>Fundraiser</span>
                </div>
                <div className="item">
                    <img src={Books} alt="" />
                    <span>Book</span>
                </div>
                <div className="item">
                    <img src={Courses} alt="" />
                    <span>Courses</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LeftBar
