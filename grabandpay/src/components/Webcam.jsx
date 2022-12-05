import React, {useRef} from "react";
import Webcam from 'react-webcam';

export default function Cam(){
    const ref = useRef();
    const showImage = () => {
        let img = ref.current.getScreenshot();
        console.log(img);
    }
    return(
        <div>
            <Webcam ref={ref}/>
            <button className="screenshot" onClick={showImage}>ADD ITEM</button>
        </div>
    );
}