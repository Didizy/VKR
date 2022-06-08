import React, { useState } from "react";

function Camera() {
  const [playing, setPlaying] = useState(false);

  const HEIGHT = 500;
  const WIDTH = 500;

  const startVideo = () => {
    setPlaying(true);
    navigator.getUserMedia(
      {
        video: true,
      },
      (stream) => {
        let video = document.getElementsByClassName("app__videoFeed")[0];
        if (video) {
          video.srcObject = stream;
        }
      },
      (err) => console.error(err)
    );
  };

  const stopVideo = () => {
    setPlaying(false);
    let video = document.getElementsByClassName("app__videoFeed")[0];
    video.srcObject.getTracks()[0].stop();
  };

  const processDevices = (devices) => {
    devices.forEach((device) => {
      console.log(device.label);
      this.setDevice(device);
    });
  };

  const setDevice = (device) => {
    const { deviceId } = device;
    const stream = navigator.mediaDevices.getUserMedia({
      audio: false,
      video: { deviceId },
    });
    this.videoPlayer.srcObject = stream;
    this.videoPlayer.play();
  };

  const componentDidMount = () => {
    const cameras = navigator.mediaDevices.enumerateDevices();
    this.processDevices(cameras);
  };

  const takePhoto = () => {
    // const { sendFile } = this.props;
    // const sendFile = uploadImage;
    // const context = this.canvas.getContext("2d");
    // context.drawImage(this.videoPlayer, 0, 0, 680, 360);
    // this.canvas.toBlob(sendFile);
  };

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
  };

  return (
    <div className="app">
      <div className="app__container">
        <video
          height={HEIGHT}
          width={WIDTH}
          muted
          autoPlay
          className="app__videoFeed"
        ></video>
      </div>
      <div className="app__input">
        {playing ? (
          <button onClick={stopVideo}>Stop</button>
        ) : (
          <button onClick={startVideo}>Start</button>
        )}
      </div>
      {/* <div className="app__input">
        <button onClick={takePhoto}>Make photo</button>
      </div>
      <div className="c-camera-feed__stage">
        <canvas width="680" height="360" ref={(ref) => (this.canvas = ref)} />
      </div> */}

      <button onClick={takePhoto}>Take photo!</button>
      <div className="c-camera-feed__stage">
        <canvas
          width="680"
          height="360"
          // ref={(ref) => (this.canvas = ref)}
        />
      </div>
    </div>
  );
}

export default Camera;
