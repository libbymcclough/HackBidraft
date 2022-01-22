import React, { Component } from "react";
import video1 from "./video1.mp4";


class Video extends Component {
  render() {
    return (
      <div>
          <h1>80s workout</h1> 
        <video src={video1} width="300" height="300"  style={{
        position: 'absolute', left: '30%', top: '50%',
        transform: 'translate(-50%, -50%)'
    }} controls="controls" autoplay="true" />
      </div>
    );
  }
}

export default Video;

