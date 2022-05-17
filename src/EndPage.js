import React from 'react';
import formpic from './endpage-pic.png';
import './EndPage.css';

let website_url='https://crossborder.se/';
let fb_url='https://www.facebook.com/CrossborderC'
let twitter_url='https://twitter.com/crossbordercom'
let linkedin_url='http://se.linkedin.com/pub/amjad-aloul/6/420/404/en'

export default class EndPage extends React.Component {
    state = {
        open: false
    }
    render() {
        return (
        <div className="main-div" >
        <img src={formpic} className="formpic"/>
        <h1>Tack! Jag ser till att hålla kontakten.</h1>
        <h1>Kolla gärna in våra övriga tjänster på <a style={{ color: "hotpink"}} href={website_url} target="_blank" title="Opens in a new window">crossborder.se</a>, och följ oss på social medier:</h1>
        <div className="some-icons">
            <span>
                <a  href={fb_url} target="_blank" title="Opens in a new window"><i class="fa fa-facebook-square" ></i></a>
            </span>
            <span>
                <a  href={twitter_url} target="_blank" title="Opens in a new window"><i class="fa fa-twitter-square" ></i></a>
            </span>
            <span>
                <a  href={linkedin_url} target="_blank" title="Opens in a new window"><i class="fa fa-linkedin-square" ></i></a>
            </span>

        </div>
      </div>
    );
  }
}