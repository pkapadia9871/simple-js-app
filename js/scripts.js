let pokemonList = [
    { name: 'Bulbasaur', height: 0.7, types: ['grass', 'poison']},
    { name: 'Ivysaur', height: 1, types: ['grass', 'poison']},
    { name: 'Venusaur', height: 0.4, types: ['grass', 'poison']},
  ];

  for (let i = 0; i <= pokemonList.length; i++) {
    document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')');
    if (pokemonList[i].height >= 1.0)
    {
      document.write(' - Wow, thats big!')  
    }
    document.write('<br>');
  }