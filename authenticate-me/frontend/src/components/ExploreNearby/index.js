import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './ExploreNearby.css';

const ExploreNearby = () => {
    return (
        <div className="exploreNearby">
            <p className="exploreNearby__header">Explore Nearby</p>
            <div className="exploreNearby__small-images">
                <img src={"https://a0.muscache.com/im/pictures/676c0a60-2a5a-4598-aeeb-10a81aa5232f.jpg?im_q=medq&im_w=240"}></img>
            </div>
            <div className="exploreNearby__small-images--descriptive-text">
                <p id="exploreNearby__small-images--descriptive-text--city">Kissimmee</p>
                <p id="exploreNearby__small-images--descriptive-text--time">3.5 hour drive</p>
            </div>
        </div>
    )
}

export default ExploreNearby;