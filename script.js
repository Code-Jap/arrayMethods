
//Functie voor het toevoegen van het woord 'Cool'

const addTheWordCool = (array) => {

    array.push('Cool');
    return array;
};

console.log(addTheWordCool(['Nice', 'Awesome', 'Tof']));





//Functie die het aantal elementen uit een array retourneert

const amountOfElementsInArray = (array) => {

return array.length;

};

console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen']));





// Functie die het eerste element uit de array retourneert

const selectBelgiumFromBenelux = (array) => {

    return array.shift();

};

console.log(selectBelgiumFromBenelux(['België', 'Nederland', 'Luxemburg']));







//Functie die het laatste element uit de array retourneert

const lastElementInArray = (array) => {

    return array.pop();

};

console.log(lastElementInArray(['Haas', 'Cavia', 'Kip', 'Schildpad']));







//Functie die het eerste element uit een array haalt en het restant retourneert

const presidents = ['Trump', 'Obama', 'Bush', 'Clinton'];



const impeachTrumpSlice = (array) => {

    return array.slice(1, 4);
   
};

console.log(impeachTrumpSlice(presidents));




const impeachTrumpSplice = (array) => {

   array.splice(0, 1);
   return array;
};

console.log(impeachTrumpSplice(presidents));







//Functie die alle losse elementen uit een array samenvoegd tot een één string

const stringsTogether = (array) => {

    return array.join(' ');
    
};

console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}'])) 







//Functie die 2 arrays combineert tot 1 array

const combineArrays = (array) => {

    return array.concat();
    
};

console.log(combineArrays([1,2,3], [4,5,6]));

