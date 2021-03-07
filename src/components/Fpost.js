/*
* FILE: Fpost.js
* PROJECT: SENG3080 - FrontEnd Assignment
* PROGRAMMERS: TRAN PHUOC NGUYEN LAI
* FIRST VERSION: 03/03/2021
* DESCRIPTION: This file includes the functionalities that involve in removing
*              favourite lists from local storage and display the latest list of 
*              favourite posts onto the screen. 
*/
import React from 'react';

class Fpost extends React.Component {

    deletePost(){
        var newArr = []; // Create a new array buffer.
        // Check for existing posts from local storage.
        var currentArr = JSON.parse(localStorage.getItem('favouritePosts')) || [];
        currentArr.forEach(post =>{
            if(post != this.props.fpost.id)
            {
                newArr.push(post); // Push all posts to the new array except for the ones to be deleted.
            }
        })
        // Update local storage without the deleted posts
        localStorage.setItem('favouritePosts', JSON.stringify(newArr)); 
        window.location.reload();
    }

    render(){
        return (
            <fpost>
                <h3>{this.props.fpost.title}</h3>
                <h4>Post Score: {this.props.fpost.score} </h4>
                <a href={"https://reddit.com" + this.props.fpost.permalink} target="_blank">
                    <h4>Post Link</h4>
                </a>
                <button onClick={() => this.deletePost()}>Remove Post</button>
                <hr/>
            </fpost>
        );
    }
   
}

export default Fpost;
