//set initial value and then change
let count=0;

const value = document.querySelector('#value');  //# because it is id
//array of 3 buttons
const btns = document.querySelectorAll('.btn');  // . because it is class

btns.forEach( function( btn ){
    btn.addEventListener('click', function(e){
        let btnType = e.currentTarget.classList ;

        if ( btnType.contains('decrease') ){
            count--;
        }
        else if ( btnType.contains('increase') ){
            count++;
        }
        else {
            count = 0;
        }
        
        // changing color according to the value of the count variable
        if (count > 0){
            value.style.color = "green";
        }
        if (count < 0){
            value.style.color = "red";
        }
        if (count == 0){
            value.style.color = "#222";
        }

        //use to print value back to the web page
        value.textContent= count;
    })
})