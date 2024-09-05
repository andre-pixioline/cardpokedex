const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        const idPokemonSelecionado = pokemon.attributes.id.value
        
        const idCartaoParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idCartaoParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        const PokemonAtivo = document.querySelector('.ativo')
        PokemonAtivo.classList.remove('ativo')

        const PokemonAtivoNav = document.getElementById(idPokemonSelecionado)
        PokemonAtivoNav.classList.add('ativo')
    })
})