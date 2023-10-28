import React from 'react'
import "./posts.scss"
import Post from '../post/Post'; 

const Posts = () => {

  //Temporary
  const posts =[ //array
  {
      id:1,
      name:"Ketharina jimmy",
      userId:1,
      profilePic:"/assets/user9.jpg", 
      desc:"When you just can't leave your #Vespa alone. 📷 @livefreewithmyscooter",
      img:"/assets/post/bike.jpg",
      date:"1 min ago"

  },
  {
      id:2,
      name:"Joe Root",
      userId:2,
      profilePic:"/assets/user8.jpg",
      desc:"Did someone call for a small pumpkin spice panda? 😍 Pavitra, whose name means sacred in Nepali, keeping mom Adira's paws full with her adventuring. Follow her on the Red Panda Cam on our website!#sandiegozoo #redpanda #babyanimals.",
      img:"/assets/post/animal.jpg",
      date:"55 min ago"

  },
  {
    id:3,
    name:"Clara Lea",
    userId:3,
    profilePic:"/assets/user6.jpg", 
    desc:"Free live with nature",
    img:"/assets/post/life.jpg",
    date:"3 hr ago"
  },
   
];

  return <div className='posts'>
    {
      posts.map(post=>(
       <Post post={post} key={post.id} /> /*call Post.jsx file , & using map shold give unique key*/ 
      ))}
    </div>;
};

export default Posts;
