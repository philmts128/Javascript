
/*--------------------------*/
function criarPokemon(nome, tipo, nivel, hp)
{
    const poke = {'nome': nome, 'tipo': tipo, 'nivel': nivel, 'hp': hp};
    return poke;
}

/*--------------------------*/
function exibePokemon(pokemon)
{
    const stats = `Nome: ${pokemon.nome}<br>
                   Tipo: ${pokemon.tipo}<br>
                   Nível: ${pokemon.nivel}<br>
                   HP: ${pokemon.hp}<br><br>`;

    document.getElementById("pokemon-data").innerHTML += stats;
}

snorlax = criarPokemon('Snorlax', 'Normal', 99, 9000);
bulba = criarPokemon('Bulbasaur', 'Planta', 40, 5000);
squirt = criarPokemon('Squirtle', 'Água', 34, 2300);

exibePokemon(snorlax);
exibePokemon(bulba);
exibePokemon(squirt);