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
    
    
    const item = document.createElement("li");
    const image = document.createElement("img");
    const name = document.createElement("p");
   console.log(name);


    name.innerHTML = pokemon.name;

         
    fetch(pokemon.url).then(transformToJson).then((data) => {
            
        //console.log(name);
        item.appendChild(image);
        
        image.setAttribute("src", data.sprites.front_default);
        image.url= pokemon.url;
        item.insertAdjacentElement('beforeend', name);
        list.appendChild(item);        

       
        item.url= pokemon.url;
        item.onclick = showDescription;
        
        
    
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
//list.onclick = 

function showDescription (data) {
    
    description.classList.add("show");
    console.log(data);
    //console.log(data.target.url);
    const adresse = data.target.url
    
    description.firstElementChild.onclick = hideDescription;

    const fields = description.querySelectorAll("dd");
    fields.forEach((dd) => {
        const info = dd.className

        fetch(adresse).then(transformToJson).then((pokemon) => {
        if (info == "types"){
            for (const property in pokemon.types) {
            dd.innerText = "Cool";
            }
        } else {
             dd.innerText = pokemon[info];
        }
        });
    
})
}

/**
 * Hide the description
 */


function hideDescription () {
    description.classList.remove("show");
    const fields = description.querySelectorAll("dd");
    fields.forEach((dd) => {
        dd.innerText = "";
 })
}


//  Fetch the API end-point and fill the list
fetch(api).then(transformToJson).then(fillList);
