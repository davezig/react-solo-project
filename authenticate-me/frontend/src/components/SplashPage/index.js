import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './SplashPage.css';

const SplashPage = () => {
    return (
        <div className= "splashPage-main-div">
            <div className="splashPage-image-div"> </div>
        </div>
    )
}

export default SplashPage;