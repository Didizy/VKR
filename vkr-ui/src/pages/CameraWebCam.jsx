import React from "react";
import Webcam from "react-webcam";

function CameraWebCam() {
  const [sendImg, setSendImg] = useState("");

  const check_img = async () => {
    await axios({
      method: "post",
      url: "http://127.0.0.1:8000/api/images/",
      data: {
        img: sendImg,
      },
    }).then((response) => {
      alert(response.data);
    });
  };

  const HEIGHT = 500;
  const WIDTH = 500;

  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    // console.log(imageSrc);
    setSendImg(imageSrc);
  }, [webcamRef]);

  return (
    <div>
      <Webcam
        audio={false}
        width={WIDTH}
        height={HEIGHT}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
      <button onClick={capture}>Capture photo</button>
      <div>{sendImg}</div>
    </div>
  );
}

export default CameraWebCam;
