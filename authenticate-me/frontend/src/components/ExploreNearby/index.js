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
            <img src={"../img/explore/3d541658-fb05-4316-af26-b8c1337fbe8c.webp"}></img>
            <div className="exploreNearby-descriptive-text"></div>
        </div>
    )
}

export default ExploreNearby;