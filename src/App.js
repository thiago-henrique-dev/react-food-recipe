import './App.css';
import Axios from 'axios'
import { useState } from 'react'

function App() {
   const [query, setQuery] = useState("")
  
  
   const YOUR_APP_ID = 'acd0ba84'
   const YOUR_APP_KEY = 'e1ad733c08b6c44284572637b40e3167'
   const url =  `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=alcohol-free`;

  async function getRecipies(){
      var result = await Axios.get(url)
      console.log(result.data)
   }

  return (
    <div className="app">
      <h1 onClick={getRecipies}>Food Recipe Plaza</h1>
        <form className="app__searchForm">
            <input type="text" 
                   className='app__input'
                   placeholder='enter ingridient' 
                   value={query}
                   onChange={(e) => setQuery(e.target.value)}
                    />
            <input className="app__submit" type="submit" value="Search"></input>
        </form>
    </div>
  );
}

export default App;
