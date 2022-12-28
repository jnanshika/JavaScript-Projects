const colors = ["green", "maroon", "rgba(133,122,200)", "#f15025","pink"];
const btn= document.getElementById('btn');
const color= document.getElementById(".color")

btn.addEventListener('click', function(){
    //get random number between 0-3
    const randomNumber =getRandomNumber();
    const changedColor = colors[randomNumber];
    document.body.style.backgroundColor = changedColor ;
    color.textContent = changedColor;
})

function getRandomNumber(){
    return Math.floor( Math.random()*colors.length);
}