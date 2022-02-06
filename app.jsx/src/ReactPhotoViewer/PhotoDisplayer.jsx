import React from "react";
import "./PhotoViewer.css";



export function PhotoDisplayer({ currentUrl }) {   
    return (                
        <div className="main-image">            
            <img className="image" src= {currentUrl} />
        </div>
    );
}



