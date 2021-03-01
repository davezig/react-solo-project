import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './ExploreNearby.css';

const ExploreNearby = () => {
    return (
        <div className="exploreNearby-main-div">
            <div className="exploreNearby-title-text"><span>Explore Nearby</span></div>
            <div className="exploreNearby-small-images"></div>
            <img src={"https://a0.muscache.com/im/pictures/676c0a60-2a5a-4598-aeeb-10a81aa5232f.jpg?im_q=medq&im_w=240"}></img>
            <div className="exploreNearby-descriptive-text"></div>
        </div>
    )
}

export default ExploreNearby;