function doSomething() {
    console.log(3333);
}
// console.log(2222);
// setTimeout(doSomething);     // serial wise joto kaj ase oi gula ses hole then setTimeout kaj korbe;
// console.log(4444);
// console.log(4444);
// console.log('-----------');

console.log(2222);
setTimeout(doSomething, 1000); // koto khon pore hbe hobe deya jai(mili Secound value deya lage) 1000ms = as
console.log(4444);
console.log(4444);


// function hole
// setTimeout(function(){
// console.log('lazy and waiting');
// },1000);     // minimum 1s or tar o pore ..onno kaj ses hoibar pore.. mne hater kaj ses hoibar pore


// setTimeout(() =>{
// console.log('lazy and waiting');
// },1000);     // minimum 1s or tar o pore ..onno kaj ses hoibar pore.. mne hater kaj ses hoibar pore



// function hole
setInterval(function() { // setInterval -> thambo nah set kora time por por colte thakbo..setTimeout same but eta sudu 1 bar hoitw
    console.log('doing it again');
}, 3000);