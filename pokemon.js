const colours = {
	normal: '#A8A77A',
	fire: '#EE8130',
	water: '#6390F0',
	electric: '#F7D02C',
	grass: '#7AC74C',
	ice: '#96D9D6',
	fighting: '#C22E28',
	poison: '#A33EA1',
	ground: '#E2BF65',
	flying: '#A98FF3',
	psychic: '#F95587',
	bug: '#A6B91A',
	rock: '#B6A136',
	ghost: '#735797',
	dragon: '#6F35FC',
	dark: '#705746',
	steel: '#B7B7CE',
	fairy: '#D685AD',
};

document.querySelector('button').addEventListener('click', () => {
    let i = document.querySelector('input').value
    if (i != ''){
        getPokemon()
    }
});
document.querySelector('input').addEventListener('keypress', (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        document.querySelector('button').click();
    }
});

async function getPokemon() {
    try {
    let input = document.querySelector('input').value.toLowerCase()
    document.querySelector('input').value = ''
    // Filter input for special cases
    //     Alolan
    if (input.startsWith('alolan ')){
        input = input.split(' ')
        input.shift()
        input.push('-alola')
        input = input.join('')
    }
        // Mega
    if (input.startsWith('mega ')){
        input = input.split(' ')
        input.shift()
        input.push('-mega')
        input = input.join('')
    }
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
    const data = await res.json()
    let pokeName = data.name
    pokeName = `${pokeName[0].toUpperCase()}${pokeName.slice(1)}`
    // Filter output for special cases
    if (pokeName.includes('alola')) {
        pokeName = pokeName.split('-')
        pokeName.pop()
        pokeName.unshift('Alolan')
        pokeName = pokeName.join(' ')
    }
    if (pokeName.includes('-mega')) {
        pokeName = pokeName.split('-')
        pokeName.pop()
        pokeName.unshift('Mega')
        pokeName = pokeName.join(' ')
    }
    // Output data to the environment
    let display = document.querySelector('.display');
    if (data.types[1]){
        display.innerHTML = `
        <li class="bold">${pokeName}</li>
        <li class="bold"><img class="sprite" src="${data.sprites.front_default}" alt="Sprite of ${data.name}" width="76" height="76"></li>
        <span class="flex">
        <span class="flex">
        <i class="fa fa-hand-pointer-o" aria-hidden="true"></i>
        <li class="center-bubble ${data.types[0].type.name}">${data.types[0].type.name}</li>
        <li class="center-bubble ${data.types[1].type.name}">${data.types[1].type.name}</li>
        </span>
        <span class="flex">
        <li class="bubble default">HP: ${data.stats[0].base_stat}</li>
        <li class="bubble default">Attack: ${data.stats[1].base_stat}</li>
        </span>
        <span class="flex">
        <li class="bubble default">Defense: ${data.stats[2].base_stat}</li>
        <li class="bubble default">Sp. Atk: ${data.stats[3].base_stat}</li>
        </span>
        <span class="flex">
        <li class="bubble default">Sp. Def: ${data.stats[4].base_stat}</li>
        <li class="bubble default">Speed: ${data.stats[5].base_stat}</li>
        </span>
        `
        addULli(`${data.types[1].type.name}`, `text-center ${data.types[1].type.name}`);
    } else {
        display.innerHTML = `
        <li class="bold">${pokeName}</li>
        <li class="bold"><img class="sprite" src="${data.sprites.front_default}" alt="Sprite of ${data.name}" width="76" height="76"></li>
        <span class="flex">
        <i class="fa fa-hand-pointer-o" aria-hidden="true"></i>
        </span>
        <span class="flex"><li class="center-bubble ${data.types[0].type.name}">${data.types[0].type.name}</li></span>
        <span class="flex">
        <li class="bubble default">HP: ${data.stats[0].base_stat}</li>
        <li class="bubble default">Attack: ${data.stats[1].base_stat}</li>
        </span>
        <span class="flex">
        <li class="bubble default">Defense: ${data.stats[2].base_stat}</li>
        <li class="bubble default">Sp. Atk: ${data.stats[3].base_stat}</li>
        </span>
        <span class="flex">
        <li class="bubble default">Sp. Def: ${data.stats[4].base_stat}</li>
        <li class="bubble default">Speed: ${data.stats[5].base_stat}</li>
        </span>
        `
    }

    document.querySelector('.sprite').addEventListener('click', () => {
        flipSprite()
    });

    function flipSprite() {
        if (document.querySelector('.sprite').src == data.sprites.front_default){
            document.querySelector('.sprite').src = `${data.sprites.front_shiny}`
        } else {
            document.querySelector('.sprite').src = `${data.sprites.front_default}`
        }
    }
    
    } catch (error){
        console.log(error)
        display.innerHTML = `Please check the pokemon name and try again.`
    }
}

// Special cases to fix:
// Nidoran f, m
// Mega Charizard x, y
// Mega Mewtwo x, y
// Mr. Mime
// Porygonz, -z, z, 2
// Hooh Ho-Oh
// Mime Jr.
// tapu koko, lele, bulu, fini
// farfetch'd, sirfetch'd