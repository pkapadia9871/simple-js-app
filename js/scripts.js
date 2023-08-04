
/* let pokemonList = [
  { name: 'Bulbasaur', height: 0.7, types: ['grass', 'poison']},
  { name: 'Ivysaur', height: 1, types: ['grass', 'poison']},
  { name: 'Venusaur', height: 0.4, types: ['grass', 'poison']},
];
 */

let pokemonRepository = (function () {
  let pokemonList = []; // empty array

  return {
    add: function(item) {
      pokemonList.push(item);
    },
    getAll: function() {
      return pokemonList;
    }
  };
})();

pokemonRepository.add({ name: 'Bulbasaur', height: 0.7, types: ['grass', 'poison']});
pokemonRepository.add({ name: 'Ivysaur', height: 1, types: ['grass', 'poison']});
pokemonRepository.add({ name: 'Venusaur', height: 0.4, types: ['grass', 'poison']});
console.log(pokemonRepository.getAll())

/* for (let i = 0; i <= pokemonList.length; i++) {
  document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')');
  if (pokemonList[i].height >= 1.0)
  {
    document.write(' - Wow, thats big!')  
  }
  document.write('<br>');
} */

pokemonRepository.getAll().forEach(function(name_item) {
  document.write(name_item.name + ' (height: ' + name_item.height + ')');
  if (name_item.height >= 1.0)
  {
    document.write(' - Wow, thats big!')  
  }
  document.write('<br>');
}); 
