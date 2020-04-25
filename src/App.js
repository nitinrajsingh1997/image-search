import React, {useState} from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState("");  
  const [results, setResults] = useState([]);
  const fetchImages = () => {
    fetch(`https://api.unsplash.com/search/photos/?client_id=9_WjWqn9QlKk8Wm1hLKYIYks5c01Wb2vp0ORQLVqLyQ&query=${value}&orientation=squarish&per_page=50` )
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      setResults(data.results)
    })
  }
  return (
    <div className="App">
      <div className="heading">
        <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} placeholder="Enter text to search images..." />
        <button onClick={()=>fetchImages()}>Search</button>
      </div>
      <div className="gallery">
        {
          results.map((item)=>{
            return (  
              <>
                    <img id="myimg" key={item.id} src={item.urls.regular} />
              </>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
