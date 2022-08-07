import './App.css';
import Axios from 'axios'
import { useState } from 'react'
import RecipeTile from './components/RecipeTile';

function App() {
   const [query, setQuery] = useState("")
   const [recipes, setRecipes] = useState([])
   const [healthLabel, setHealthLabel ] = useState("vegan")
  
  
   const YOUR_APP_ID = `82e453da`;
   const YOUR_APP_KEY = "3bb5d1a3b992f408b9003effd74c9c22";
   const url =  `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}`;

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

            <select className="app__healthLabels">
              <option  onClick={() => {setHealthLabel("vegan")}}>vegan</option>
              <option  onClick={() => {setHealthLabel("vegetarian")}}>vegetarian</option>
              <option  onClick={() => {setHealthLabel("paleo")}}>galeo</option>
              <option  onClick={() => {setHealthLabel("dairy-free")}}>gairy-free</option>
              <option  onClick={() => {setHealthLabel("gluten-free")}}>gluten-free</option>
              <option  onClick={() => {setHealthLabel("wheat-free")}}>wheat-free</option>
              <option  onClick={() => {setHealthLabel("wheat-free")}}>wheat-free</option>
              <option  onClick={() => {setHealthLabel("wheat-free")}}>wheat-free</option>
              <option  onClick={() => {setHealthLabel("low-sugar")}}>low-sugar</option>
              <option  onClick={() => {setHealthLabel("egg-free")}}>egg-free</option>
              <option  onClick={() => {setHealthLabel("peanut-free")}}>peanut-free</option>
              <option  onClick={() => {setHealthLabel("tree-nut-free")}}>peanut-free</option>
              <option  onClick={() => {setHealthLabel("soy-free")}}>soy-free</option>
              <option  onClick={() => {setHealthLabel("fish-free")}}>fish-free</option>
              <option  onClick={() => {setHealthLabel("shellfish-free")}}>shellfish-free</option>
            </select>

        </form>
    
      <div className="app__recipes">
        {recipes.map(recipe => {
            return <RecipeTile recipe={recipe}  />
})}
      </div>
    </div>
  );
}

export default App;
