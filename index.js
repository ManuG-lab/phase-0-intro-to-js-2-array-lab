// Write your solution here!

let cats = ["Milo","Otis","Garfield"];

const destructivelyAppendCat = function(name){
    cats.push("Ralph");
}

const destructivelyPrependCat = function(name){
    cats.unshift("Bob");
}

const destructivelyRemoveLastCat = function(name){
    cats.pop("Garfield");
}

const destructivelyRemoveFirstCat = function(name){
    cats.shift("Milo");
}

const appendCat = function(name){
    return[...cats , "Broom"]
}

const prependCat = function(name){
    return["Arnold", ...cats];
}

const removeLastCat = function(name){
    return cats.slice(0,-1);
}

const removeFirstCat = function(name){
    return cats.slice(1)
}



