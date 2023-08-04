let pokemonRepository = (function () {
  let pokemonList = []; // empty array

  return {
    add: function(item) {
      pokemonList.push(item);
    },
    getAll: function() {
      return pokemonList;
    },
    showDetails: function(pokemon) {
      console.log(pokemon);
    },
    addListItem: function(pokemon) {
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
  };
})();

pokemonRepository.add({ name: 'Bulbasaur', height: 0.7, types: ['grass', 'poison']});
pokemonRepository.add({ name: 'Ivysaur', height: 1, types: ['grass', 'poison']});
pokemonRepository.add({ name: 'Venusaur', height: 0.4, types: ['grass', 'poison']});
console.log(pokemonRepository.getAll())

pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon)
}); 

