import React, { useState } from "react";
import { imageUrls } from "./PhotoSelector";
import { PhotoSelector } from "./PhotoSelector";
import { PhotoDisplayer } from "./PhotoDisplayer";
import "./PhotoViewer.css";



export function PhotoViewer() {

    const [currentUrl, setCurrentUrl] = useState(imageUrls[0]) 

    return <div>
    <PhotoDisplayer currentUrl={currentUrl} />
    <PhotoSelector
        imageUrls={imageUrls}
        currentUrl={currentUrl}
        setCurrentUrl={setCurrentUrl}
    />
    </div>
}