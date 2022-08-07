import './App.css';
import Axios from 'axios'
import { useState } from 'react'
import RecipeTile from './components/RecipeTile';

function App() {
   const [query, setQuery] = useState("")
   const [recipes, setRecipes] = useState([])
  
  
   const YOUR_APP_ID = 'acd0ba84'
   const YOUR_APP_KEY = 'e1ad733c08b6c44284572637b40e3167'
   const url =  `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=alcohol-free`;

  async function getRecipies(){
      var result = await Axios.get(url)
      setRecipes(result.data.hits)
      console.log(result.data)
   }

   const submit = (e) => {
    e.preventDefault();
    getRecipies()
   }

  return (
    <div className="app">
      <h1 >Food Recipe Plaza</h1>
        <form className="app__searchForm" onSubmit={submit}>
            <input type="text" 
                   className='app__input'
                   placeholder='enter ingridient' 
                   value={query}
                   onChange={(e) => setQuery(e.target.value)}
                    />
            <input className="app__submit" type="submit" value="Search"></input>
        </form>
    
      <div>
        {recipes.map(recipe => {
            return <RecipeTile recipe={recipe}  />
})}
      </div>


    </div>
  );
}

export default App;
