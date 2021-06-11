// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
const copyOfCats = [...cats];

function destructivelyAppendCat(name)
    {
        return cats.push(name);
    }

function destructivelyPrependCat(name) 
    {
        return cats.unshift(name);
    }

function destructivelyRemoveLastCat(name)
    {
        return cats.pop(name);
    }

function destructivelyRemoveFirstCat(name)
    {
        return cats.shift(name);
    }

function appendCat(name)
    {
        return [...copyOfCats, name];
    }

function prependCat(name)
    {
        return [name, ...copyOfCats];
    }

function removeLastCat(name)
    {
        return copyOfCats.slice(0,copyOfCats.length-1);
    }    

function removeFirstCat(name)
    {
        return copyOfCats.slice(1);
    }