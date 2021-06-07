import React,{useEffect, useState} from 'react'; 
import { ChakraProvider, Box, Button, Input , useColorMode, useColorModeValue } from "@chakra-ui/react";
import './App.css';
import Recipe from './Recipe';


function App() {

  let [recipes, setRecipes] = useState([]);

  const[search, setSearch] = useState('chicken');

  const[query, setQuery] = useState(search);


  const { colorMode, toggleColorMode } = useColorMode()
  const formBackGround = useColorModeValue("linear(to-r, green.200, pink.500)", "gray.700");

  const APP_KEY = "YOUR_APP_KEY"; 
  const APP_ID = "YOUR_API_ID";

  useEffect (()=>{
    document.title = "Recipe app"
    getRecipes();
  },[query])

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  const updateSearch = e =>{
    setSearch(e.target.value);
  };

  const getRecipes = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();

    console.log(data.hits)
    setRecipes(data.hits)

  }
 
  return (
      <Box   bgGradient={formBackGround}  >
        <div className="App">
          <header className="App-header">
            <form className="search-form" onSubmit={getSearch}>
              <Input className="search-bar"  w="30%" m="5" mr="0" mb="100px" value={search} onChange={updateSearch}></Input>
              <Button colorScheme="teal" mb="2"  type="submit">Search</Button>
              <Button mb="2" onClick={toggleColorMode}> Toggle {colorMode === "light" ? "Dark" : "Light"} </Button>
            </form>
          </header>
          <div className="recipes">
            {recipes.map(recipe => (
              <Recipe 
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              ingredients={recipe.recipe.ingredients}
              image={recipe.recipe.image}/>
              ))}
          </div>
        </div>
      </Box>
  );
}

export default App;
