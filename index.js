// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

funtion destructivelyAppendCat(name)
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
        return [...cats, name];
    }

function prependCat(name)
    {
        return [name, ...cat];
    }

function removeLastCat(name)
    {
        return cats.slice(0,cats.length-1);
    }    

function removeFirstKitten(name)
    {
        return cats.slice(0);
    }