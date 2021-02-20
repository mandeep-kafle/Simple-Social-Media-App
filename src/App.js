
import './App.css';
import instagramimage from './instagramimage.png';
import Post from './Post';
function App() {
  return (
    <div className="App">
      
      {/* header */}
      <div className="app__header">
        <img className="app__headerImage" src={instagramimage}/>
      </div>
      {/* posts */}

      <h1>hello world</h1>
      <Post/>
    </div>
  );
}


export default App;
