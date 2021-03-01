import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './SplashPage.css';
import ExploreNearby from '../ExploreNearby';
import LiveAnywhere from '../LiveAnywhere';

const titleAndPicArray = [{title: 'Entire homes', url: 'https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=480'},
                            {title: 'Unique stays', url: 'https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=480'},
                            {title: 'Cabins and cottages', url: 'https://a0.muscache.com/im/pictures/a596c528-a2e9-4417-9bbe-ceb68b2f6b9c.jpg?im_w=480'},
                            {title: 'Pets allowed', url: 'https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=480'}]

const SplashPage = () => {
    return (
        <>
        <div className= "splashPage-main-div">
            <div className="splashPage-image-div"></div>
            <div className="splashPage-text-bottom"><span>(SplashPage) Made possible by Hosts</span></div>
            <span id="to-do-list">[] make splash page blank [] component for landing image [] component underneath that for explore nearby</span>
        </div>
        <ExploreNearby />
        <LiveAnywhere titleAndPicArray={titleAndPicArray}/>
        </>
        
    )
}

export default SplashPage;