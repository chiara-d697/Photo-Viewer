import React from "react"; 
import "./PhotoViewer.css";

export function PhotoViewer({ src }) {   
    return (                
        <div className="main-image">            
            <img className="image" src= {src}></img>
        </div>
    );
}

const brokenImages = [
    1, 24, 32, 36, 44, 47
];

function getImageUrls() {
    const urls = [];

    for (let i = 0; i < 50; i++) {
        if (!brokenImages.includes(i)) {
            const imageNumberString = i.toString().padStart(2, '0');
            urls.push(`https://picsum.photos/id/6${imageNumberString}/1600/900.jpg`)
        }
    }

    return urls;
}

export const imageUrls = getImageUrls();

