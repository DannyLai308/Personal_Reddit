/*
* FILE: FavouritesPage.js
* PROJECT: SENG3080 - FrontEnd Assignment
* PROGRAMMERS: TRAN PHUOC NGUYEN LAI
* FIRST VERSION: 03/03/2021
* DESCRIPTION: This file includes the functionalities that involve in creating
*              the favourite page of the app that gets the posts saved by the 
*              user and retrieve their corresponding posts to be displayed onto screen. 
*/

import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';
import Fpost from './components/Fpost';

class FavouritesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favList: [] // Used to store a list of favourite posts.
        }
    }

    componentDidMount() {
        if (localStorage.getItem('favouritePosts') != null) {
            // Loop through localstorage to get all posts' IDs
            let postIds = JSON.parse(localStorage.getItem('favouritePosts') || []);
            postIds.forEach(element => {
                //For each ID, fetch the corresponding api
                fetch("https://www.reddit.com/comments/" + element + ".json").then(res => {
                    if (res.status != 200) {
                        console.log("ERROR! CANNOT LOAD THE SPECIFIED SUBREDDIT");
                        return;
                    }

                    res.json().then(data => {
                        if (data != null) {
                            // Get the array of favourite posts.
                            this.setState({favList: this.state.favList.concat(data[0].data.children)}); 
                            
                        }
                    });
                })
            });
        }
    }
   
    render() {
        return (
            <div>
                <header className="fav-header" >
                    My Favourite Posts
                </header>

                <Link className="returnBtn" to="/">Return To Home Page</Link>

                <div className="fav-posts">
                {
                    // Loop through the array of favourite posts and render them onto the screne.
                    (this.state.favList != null) ? this.state.favList.map((post, index) => <Fpost key={index} fpost={post.data}/>) : ''
                }
            </div>
            </div>
        )
    }
}

export default FavouritesPage;
