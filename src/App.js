import './App.css';
import Axios from 'axios'

function App() {
   const url = `https://api.edamam.com/search?q=chicken&app_id=acd0ba84&app_key=e1ad733c08b6c44284572637b40e3167`;

  async function getRecipies(){
      var result = await Axios.get(url)
      console.log(result.data)
   }

  return (
    <div className="App">
      <h1 onClick={getRecipies} >Hellow</h1>
      
    </div>
  );
}

export default App;
