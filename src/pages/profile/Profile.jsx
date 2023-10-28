import React from 'react'
import './profile.scss'
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import {AuthContext} from "../../context/authContext";
import { useContext } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Post from "../../components/posts/Posts"

const Profile = () => {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className='profile'>
      <div className='images'>
          <img src="https://i.pinimg.com/736x/4a/88/7e/4a887e68509737452a38ba244079b8a0.jpg" alt="" className='cover'/>
          <img src={currentUser.profilePic} alt="" className='profilePic'/>
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize='medium'/>
              </a>
              <a href="http://instagram.com">
              <InstagramIcon fontSize='medium'/>
              </a>
              <a href="http://twitter.com">
              <TwitterIcon fontSize='medium'/>
              </a>
              <a href="http://linkedin.com">
              <LinkedInIcon fontSize='mediume'/>
              </a>
              <a href="http://printerest.com">
              <PinterestIcon fontSize='medium'/>
              </a>
          </div>
          <div className="center">
            <span> Mitchel Smith </span>
            <div className="info">
              <div className="item">
                <PlaceIcon/>
                <span>USA</span>
              </div>

              <div className="item">
                <LanguageIcon/>
                <span>lama.dev</span>
              </div>
            </div>
              <button>Follow</button>
            </div>
            
          <div className="right">
            <EmailOutlinedIcon/>
            <MoreVertIcon/>
          </div>  
        </div>

        <Post/>

      </div>

    </div>
  )
}

export default Profile
