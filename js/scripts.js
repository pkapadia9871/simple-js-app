let pokemonRepository = (function () {

    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    function add(item) {
      pokemonList.push(item);
    }
    function getAll() {
      return pokemonList;
    }
    function showDetails(pokemon) {
      loadDetails(pokemon).then(function () {
        console.log(pokemon);
      });
    }
    function addListItem(pokemon) {
      let element = document.querySelector('ul')
      let listItem = document.createElement('li')
      let button = document.createElement('button')
      button.innerText = pokemon.name
      button.classList.add('my-class')
      listItem.appendChild(button)
      element.appendChild(listItem)
      button.addEventListener('click', function (event) {
        pokemonRepository.showDetails(pokemon);
        console.log(event);
      });
    }
    function loadList() {
      return fetch(apiUrl).then(function (response) {
        return response.json();
      }).then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
        });
      }).catch(function (e) {
        console.error(e);
      })
    }
    function loadDetails(item) {
      let url = item.detailsUrl;
      return fetch(url).then(function (response) {
        return response.json();
      }).then(function (details) {
        // Now we add the details to the item
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      }).catch(function (e) {
        console.error(e);
      });
    }
    return {
      add: add,
      getAll: getAll,
      showDetails: showDetails,
      addListItem: addListItem,
      loadList: loadList,
      loadDetails: loadDetails
    };
  })();

/* pokemonRepository.add({ name: 'Bulbasaur', height: 0.7, types: ['grass', 'poison']});
pokemonRepository.add({ name: 'Ivysaur', height: 1, types: ['grass', 'poison']});
pokemonRepository.add({ name: 'Venusaur', height: 0.4, types: ['grass', 'poison']}); */
console.log(pokemonRepository.getAll())

pokemonRepository.loadList().then(function() {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});