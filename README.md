# PokeSearch
A simple pokemon search app. It's one of my first Javscript applications built using an API.

https://pokesearcher.netlify.app/

![Pokesearch image](https://i.ibb.co/zS0ZCDJ/pokesearch.png)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript

It's a simple static HTML, CSS , and Bootstrap website, with a little bit of JS templating built in for the data (using string literals). I didn't use any official templating languages, engines, etc, just wanted to play around with Javascript on this project.

## Lessons Learned:

It's one of my first projects using an API with Javascript, and I learned a lot. The code is not pretty, and I might go back and clean it up later, but I like to look back at it and remind me of what a pain it was to fix when things went wrong, and it acts as a reminder of what I've learned since starting that project, and all the things that have made the process easier for me.

## Edge cases:

There are a handful of edge cases that I plan to fix, but if anybody wants to contribute to fixing these known issues, feel free to submit a pull request!

Nidoran - Does not work in current implementation due to the way female and male are differentiated in the pokeapi database\
Mega Charizard - Does not work in current implementation due to the way pokemon X and pokemon Y are differentiated in the pokeapi database\
Mega Mewtwo - Does not work in current implementation due to the way pokemon X and pokemon Y are differentiated in the pokeapi database\
Mr. Mime, Mime Jr.  - Does not work in current implementation due to the way Mr. Mime and Mime Jr. (with the periods) are differentiated in the pokeapi database\
Porygonz, Porygon2 - Does not work in current implementation due to the way the hyphenated names are listed in the pokeapi database\
Hooh Ho-Oh - Does not work in current implementation due to the way the hyphenated name is listed in the pokeapi database\
Tapu koko, Tapu lele, Tapu bulu, Tapu fini - The different variations of this pokemon on the database need to written as a special edge case, which I've not completed\
Farfetch'd, Sirfetch'd - Does not work in current implementation due to the way the apostrophes are implemented in the pokeapi database\

