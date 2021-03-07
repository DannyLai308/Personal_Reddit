/*
* FILE: Post.js
* PROJECT: SENG3080 - FrontEnd Assignment
* PROGRAMMERS: TRAN PHUOC NGUYEN LAI
* FIRST VERSION: 03/03/2021
* DESCRIPTION: This file includes the functionalities that involve in saving
*              posts to the local storage and display the list of posts onto the screen. 
*/

import React from 'react';

class Post extends React.Component {
    
    savePost(){
        var arr = [];
        // Check for existing posts from local storage.
        arr = JSON.parse(localStorage.getItem('favouritePosts')) || []; 
        // If local storage is completely empty.
        if (!arr.length){
            arr.push(this.props.post.id); // Save the current post to local storage.
        }
        // If local storage already existed some posts, check if current post
        // has already been saved in local storage.
        else{
            arr.forEach(() =>{
                if(arr.indexOf(this.props.post.id) == -1)
                {
                    arr.push(this.props.post.id); //Save the current post to local storage.
                }
            })
        }
        localStorage.setItem('favouritePosts', JSON.stringify(arr)); // Create local storage.
    }

    render(){
        return (
            <post>
                <h3>{ this.props.post.title }</h3>
                <h4>Post Score: {this.props.post.score} </h4>
                <a href={"https://reddit.com" + this.props.post.permalink} target="_blank">
                    <h4>Post Link</h4>
                </a>
                <button onClick={() => this.savePost()}>Save Post</button>
            </post>
        );
    }
}

export default Post;
