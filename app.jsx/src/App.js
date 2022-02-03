// import './App.css';
import { imageUrls, PhotoViewer } from './ReactPhotoViewer/PhotoViewer';
 
function App() {
  return (
    <body>
      <div>
          <h1 className="title">React Photo Viewer</h1>
          <PhotoViewer src = {"https://picsum.photos/id/2/200/300"}/>       
      </div>

      <div className="image-selector">
        { imageUrls.map(imageUrl => (
          <div className="image-thumbnail">
            <PhotoViewer src = { imageUrl } />
          </div>
        ))};
      </div>

    </body>



);
}

export default App;
