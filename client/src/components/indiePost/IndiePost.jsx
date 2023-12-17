import React from 'react'
import { Link } from 'react-router-dom'

export default function IndiePost({post}) {
    const PF = "http://localhost:5000/images/";
  return (
    <div className='IndiePost'>
         {post.photo && (
           <img className='postImg' src={PF+post.photo} alt="" />
      )}
       
        <div className="postInfo">
            <Link to={`/post/${post._id}`} className='link'>
                {post.title}
            </Link>
        <div className="postCats">
         <span className="postDate">
           {new Date(post.createdAt).toDateString()}
           </span>
        </div>
        <p className='postDesc'>
          {post.desc}
        </p>
        </div>
    </div>
  )
}
