import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Posts from '../../components/posts/Posts';
import { Context } from '../../context/Context';

export default function Home() {
  const { user, dispatch } = useContext(Context);
  const [posts,setPosts] = useState([]);
  const {search} = useLocation();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts"+search);
      setPosts(res.data);
    }
    fetchPosts()
  }, [search]);
  return (
    <div>
      <h1>Home</h1>
      <button><Link to="/login">login</Link></button>
      <button><Link to="/register">signup</Link></button>
      <button className="logout" onClick={handleLogout}>{user && "LOGOUT"}</button>
      <button><Link to="/write">Write</Link></button>
      <div>
        <Posts posts={posts}/>
      </div>
    </div>
  )
}
