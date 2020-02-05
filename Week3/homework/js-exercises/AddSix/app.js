'use strict'
const createBase = (base) => {
    let count = 0;
    return () => {
        count++;
        return base * count;
    }
}

const addSix = createBase(6);
console.log(addSix());
console.log(addSix());
console.log(addSix());
console.log(addSix());

// Δεν είμαι σίγουρος ότι καταλαβαίνω σωστά την εκφώνηση
// από το να μην κάνω τίποτα λόγω αμφιβολίας έκανα αυτό
// Νομίζω θα ήταν καλύτερα αν ζήταγε το παρακάτω...

const createBase2 = (base) => {
    return (num) => {
        return num + base
    }
}

const addSeven = createBase2(7);
console.log(addSeven(5));
console.log(addSeven(10));
const addNine = createBase2(9);
console.log(addNine(5));
console.log(addNine(10));