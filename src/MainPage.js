/*
* FILE: MainPage.js
* PROJECT: SENG3080 - FrontEnd Assignment
* PROGRAMMERS: TRAN PHUOC NGUYEN LAI
* FIRST VERSION: 03/03/2021
* DESCRIPTION: This file includes the functionalities that involve in creating
*              the main page of the app that gets a subreddit provided by the 
*              user and retrieve their corresponding posts to be displayed onto screen. 
*/

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Post from './components/Post';
import './index.css';

function MainPage() {
    const [Posts, setPosts] = useState([]); // Store the retrieved posts in an array.
    const [Subreddit, setSubreddit] = useState('web'); // Store 'web' as a default subreddit.
  
    // Refresh the page's content every time a new subreddit is entered.
    useEffect(() => {
      fetch("https://www.reddit.com/r/" + Subreddit + "/hot.json?limit=10").then(res => {
        // Error handling.
        if (res.status != 200) {
          console.log("ERROR! CANNOT LOAD THE SPECIFIED SUBREDDIT");
          return;
        }
  
        res.json().then(data => {
          if (data != null) {
            setPosts(data.data.children); // Get the array of posts.
          }
        });
      })
    }, [Subreddit]);

    return (
        <div>
            <header className="mainpage-header">
              <input type="text" className="sub-input" value={Subreddit} onChange={e => setSubreddit(e.target.value)} />
              <Link to="/favourites" className="favourite-link">My Favourite Posts</Link>
            </header>

            <div className="reddit-posts">
              {
                // Loop through the array of posts and render them onto the screne.
                (Posts != null) ? Posts.map((post, index) => <Post key={index} post={post.data} />) : ''
              }
            </div>
        </div>
    )
}

export default MainPage;
