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
        showModal(pokemon)
      });
    }
    function showModal(pokemon) {
      let modalContainer = document.querySelector('#modal-container');
    
      modalContainer.innerHTML = '';
      let modal = document.createElement('div');
      modal.classList.add('modal');
    
      let closeButtonElement = document.createElement('button');
      closeButtonElement.classList.add('modal-close');
      closeButtonElement.innerText = 'Close';
      closeButtonElement.addEventListener('click', function () {
        let modalContainer = document.querySelector('#modal-container');
        modalContainer.classList.remove('is-visible');
      })
      let titleElement = document.createElement('h1');
      titleElement.innerText = 'name: ' + pokemon.name;
      let contentElement = document.createElement('p');
      contentElement.innerText = 'height: ' + pokemon.height;
    
      let myImage = document.createElement('img');
    
      myImage.src = pokemon.imageUrl;
    
      modal.appendChild(closeButtonElement);
      modal.appendChild(titleElement);
      modal.appendChild(contentElement);
      modal.appendChild(myImage);
      modalContainer.appendChild(modal);
      modalContainer.classList.add('is-visible');
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


console.log(pokemonRepository.getAll())

pokemonRepository.loadList().then(function() {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});