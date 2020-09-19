import React from 'react';

const Banner = (props) => {
    if (props.text){
        console.log('we have banner text');
        return (
            <div className='banner'>
                <img src='https://pbs.twimg.com/profile_images/761241077735186432/1aWq4FFr_200x200.jpg' id='logo' alt='the dough shack logo'></img>
                <img src={props.img} className='bannerImg' alt={props.alt}></img>
                <div className='bannerBox'>
                    <p>{props.text}</p>
                </div>
            </div>
        );
    } else if (props.logo === false) {
        return (
            <div className='banner'>
                <img src={props.img} className='bannerImg' alt={props.alt}></img>
            </div>
        );
    } else {
        return (
            <div className='banner'>
                <img src='https://pbs.twimg.com/profile_images/761241077735186432/1aWq4FFr_200x200.jpg' id='logo' alt='the dough shack logo'></img>
                <img src={props.img} className='bannerImg' alt={props.alt}></img>
            </div>
        );
    }  
};

export default Banner;