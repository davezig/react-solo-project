import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LandingImage.css';

const LandingImage = () => {
    return (
        <div className= "landingImage-main-div">
            <div className="landingImage-image-div"></div>
            <div className="landingImage-text-bottom"><span>(LandingImage) Made possible by Hosts</span></div>
        </div>
    )
}

export default LandingImage;