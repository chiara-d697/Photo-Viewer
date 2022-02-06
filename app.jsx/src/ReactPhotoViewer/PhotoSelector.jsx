import React from "react";
import "./PhotoViewer.css";

const brokenImages = [
    1, 24, 32, 36, 44, 47
];

function getImageUrls() {
    const urls = [];

    for (let i = 0; i < 50; i++) {
        if (!brokenImages.includes(i)) {
            const imageNumberString = i.toString().padStart(2, '0');
            urls.push(`https://picsum.photos/id/6${imageNumberString}/100.jpg`)
        }
    }

    return urls;
}

export const imageUrls = getImageUrls();


export function PhotoSelector({ imageUrls, currentUrl, setCurrentUrl })  { 
    return (
        <div className="image-thumbnail-container">
            <h3>Select your photo</h3>
            <div className="image-selector">
                { imageUrls.map((imageUrl, index) => (
                    <div className={`image-thumbnail ${currentUrl === imageUrl ? "selected" : ""}`} key={index}>
                        <img
                            src = {imageUrl}
                            alt = "Thumbnail"
                            onClick= {function() {
                                setCurrentUrl(imageUrl);
                                }}/>
                    </div>
                ))}
            </div>              
        </div>
    )
}

