
/*---------------------------*/
function criarPokemon(nome, tipo, nivel, hp)
{
  let poke = {}
  poke.nome = nome;
  poke.tipo = tipo;
  poke.nivel = nivel;
  poke.hp = hp;
  return poke;
}

/*---------------------------*/
let pokemonLista = []

/*---------------------------*/
function atualizaPagina()
{
  let pdiv = document.getElementById("pokemons");
  let phtml = "";
  
  for (const poke of pokemonLista)
  {
    console.log(poke);
    phtml += `<br><strong>Nome:</strong> ${poke.nome}<br>
              <strong>Tipo:</strong> ${poke.tipo}<br>
              <strong>Nível:</strong> ${poke.nivel}<br>
              <strong>HP:</strong> ${poke.hp}<br><hr>`;
  }
  
  pdiv.innerHTML = phtml;
}

/*---------------------------*/
function armazenaPokemon()
{
  const nome  = document.getElementById("input-nome").value;
  const tipo  = document.getElementById("input-tipo").value;
  const nivel = document.getElementById("input-nivel").value;
  const hp    = document.getElementById("input-hp").value;
  
  let numHP = Number(hp);
  let numNivel = Number(nivel);
  
  pokemonLista.push(criarPokemon(nome, tipo, numNivel, numHP));
  
  alert(`Pokemon ${nome} adicionado!`);
}

/*---------------------------*/
document.getElementById("btn-submit").onclick = function()
{
  armazenaPokemon();
  atualizaPagina();
}