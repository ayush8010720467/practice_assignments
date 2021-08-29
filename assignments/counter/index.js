let counter = 0;
function incrimentCounter(){
    counter++;
}
function decrementCounter(){
    counter--;
}
function resetCounter(){
    counter = 0;
}
function displayCounter(score){
    score.innerHTML =`${counter}`;
}
let score = document.getElementById('score');
document.getElementById('dec').addEventListener('click',function(){
    decrementCounter();
    displayCounter(score);
});
document.getElementById('inc').addEventListener('click',function(){
    incrimentCounter();
    displayCounter(score);
});
document.getElementById('reset').addEventListener('click',function(){
    resetCounter();
    displayCounter(score);
});