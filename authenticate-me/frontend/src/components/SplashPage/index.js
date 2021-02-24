import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './SplashPage.css';

const SplashPage = () => {
    return (
        <div className= "splashPage-main-div">
            <div className="splashPage-image-div"></div>
            <div className="splashPage-text-bottom"><span>(SplashPage) Made possible by Hosts</span></div>
            <span id="to-do-list">[] make splash page blank [] component for landing image [] component underneath that for explore nearby</span>
        </div>
    )
}

export default SplashPage;