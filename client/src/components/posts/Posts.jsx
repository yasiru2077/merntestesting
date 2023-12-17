import React from 'react'
import IndiePost from '../indiePost/IndiePost'

export default function Posts({posts}) {
  return (
    <div className='posts'>
        {posts.map(p=>
            <IndiePost post={p}/>
     )}
    </div>
  )
}
