const list = document.getElementById("list");
const description = document.getElementById("description");

const api = "https://pokeapi.co/api/v2/pokemon?limit=150";

/**
 * Try to parse a response as JSON data
 */
function transformToJson (response) {
    //console.log(response);
    if (response.ok) {
        return response.json();
        
    }

    throw Error("Pas possible de se connecter à l'API Pokémon");
}


/**
 * Clear the list of all its items
 */
function emptyList () {
    list.innerHTML = "";
 
}

/**
 * Create an item, fetch its data and setup event listener
 */
function createItem (pokemon) {
    // Create a li tag
    console.log(pokemon);

    
    const item = document.createElement("li");
    const image = document.createElement("img");
    
      
    fetch(pokemon.url).then(transformToJson).then((data) => {
            
        item.innerText= pokemon.name
        list.appendChild(item);        

        image.setAttribute("src", data.sprites.front_default);
               
        list.appendChild(image);
    
    });
}

/**
 * fill the item list with values
 */
function fillList (json) {
    emptyList();
    json.results.forEach(createItem);
    
}

/**
 * Fill and display the description
 */
function showDescription (data) {
    description.classList.add("show");
    var name = Element.getElementById(name);
    name.InnerHtml= data.name;


    const fields = description.querySelectorAll("dd");
    fields.forEach((dd) => {
        // ...
    });
}

/**
 * Hide the description
 */
function hideDescription () {
    description.classList.remove("show");
}

// Fetch the API end-point and fill the list
fetch(api).then(transformToJson).then(fillList);
