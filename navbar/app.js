// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener('click', function(){
    /* if (links.classList.contains('show-links')){
        links.classList= "links";
    }
    else {
        links.classList= "show-links";
    } 
    above code also works but below is the optimized approch*/
    links.classList.toggle("show-links");
});