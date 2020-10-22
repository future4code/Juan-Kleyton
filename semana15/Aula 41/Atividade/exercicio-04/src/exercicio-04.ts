// a) tsc exercicio-04.ts
// b) sim, primeiro teria que indicar a pasta src, onde contem o arquivo src/exercicio-04.ts
// c) é possivel transpilar todos atráves de um espaço após a chamada, por exemplo tsc exercicio-01.ts tsc exercicio-02.ts
// d)
    // target: utiliza  es5 ao invés de es6
//sourceMap vem comentado por padrão
//outDir e rootDir  já vêm comentados e sem caminho de destino
//remmoveComments  já vem comentado
//noImplicitAny  já vem comentado

type pokemon  = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}