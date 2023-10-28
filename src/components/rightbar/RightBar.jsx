import React from 'react'
import "./rightBar.scss"

const RightBar = () => {
  return (
    <div className='rightBar'>
      <div className="container">
        <div className="item">
          <span>Sugeestions For You</span>

          <div className="user">
            <div className="userInfo">
              <img src="/assets/user1.jpg" alt="user1" />
              <span>Christina Joshap</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src="/assets/user2.jpg" alt="user2" />
              <span>Kane wiliamson</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>

        {/* Latest activity part */ }
      <div className="item">
        <span>Latest Activities</span>

        <div className="user">
            <div className="userInfo">
              <img src="/assets/user3.jpg" alt="user3" />
              <p>
                <span>Harry</span>   changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src="/assets/user4.jpg" alt="user4" />
              <p>
                <span>Amelia Ethan</span>   Liked a post
              </p>
            </div>
            <span>5 min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src="/assets/user5.jpg" alt="user5" />
              <p>
                <span>Richerd smith</span>  Comment a post
              </p>
            </div>
            <span>8 min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src="/assets/user6.jpg" alt="user6" />
              <p>
                <span>clara lea </span>  Posted
              </p>
            </div>
            <span>50 min ago</span>
          </div>
      </div>

       {/* Online friends part */ }
       <div className="item">
        <span>Online Friends</span>
        <div className="user">
            <div className="userInfo">
              <img src="/assets/user7.jpg" alt="user7" />
              <div className="online"/>
              <span>Mitchel Stark</span>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src="/assets/user9.jpg" alt="user8" />
              <div className="online"/>
              <span>Ketharina jimmy</span>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src="/assets/user5.jpg" alt="user5" />
              <div className="online"/>
              <span>Richerd smith</span>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src="/assets/user8.jpg" alt="user8" />
              <div className="online"/>
              <span>Joe Root</span>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src="/assets/user10.jpg" alt="user10" />
              <div className="online"/>
              <span>Peter Kane</span>
            </div>
          </div>

      </div>


      </div>  
    </div>
  )
}

export default RightBar
