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
            <div className="exploreNearby-descriptive-text"></div>
        </div>
    )
}

export default ExploreNearby;