/* Exercise 1 
1. In index.html, link to this file using the script tag.
2. Log the document in the console.
*/

console.log(document);

/* Exercise 2
1. Create a variable pageTitle
Set its value to the method getElementById. Pass the method the id of the h1 tag. 
2. Log pageTitle in the console
3. Create a variable pageTitle2
Set its value to the method querySelector. Pass the method the id of the h1 tag. Don't forget id syntax!
4. Log pageTitle2 in the console
*/
var pageTitle = document.getElementById('page-title');
console.log(pageTitle):

let pageTitle2 = Document.querySelector('#page-title')
console.log(pageTitle2);
pageTitle.textContent = "Moon Facts";
let fact1 = "The Moon is drifting away from the Earth. It is moving approximately 3.8 cm away from our planet every year.
let pin1 = document.querySelector('#moon-fact1');
pin1.textContent = fact1;




/* Exercise 3
1. Log the textContent of the pageTitle in the console
2. Change text content of the h1 tag to "Moon Facts"
3. Create a variable fact1
Give it a value of a string, pick one of the facts from moon-facts.txt
4. Use the DOM to select the p tag inside the first div
5. Set its textContent to fact1
*/

let pin2 = Document.querySelector
var moonFact3 = document.getElementById("moon-fact-3");

var fact3 = '<p class="fact">A different fact for moon-fact-3</p>';

moonFact3.innerHTML = fact3;


var moonFact4 = document.getElementById("moon-fact-4");

var fact4 = '<p class="fact">A different fact for moon-fact-4</p>';


moonFact4.innerHTML = fact4;


var moonFact5 = document.getElementById("moon-fact-5");


var fact5 = '<p class="fact">A different fact for moon-fact-5</p>';

moonFact5.innerHTML = fact5;



/* Exercise 4
1. Use the DOM to select the div with id moon-fact-2
2. Set its innerHTML to a p tag with class fact and containing the text of another fact from moon-facts.txt
Hint - remember to escape the quote marks inside the p tag.
3. Use an assignment operator you learned in the last lesson so the flag doesn't disappear.
4. Do the same thing for moon-fact-3, moon-fact-4, moon-fact-5
*/




/* Exercise 5
1. Use the DOM to select the image tag with id "secret"
2. Use the src property to change the pin image to alien-ship.png
3. Select the div tag and add a p tag to its innerHTML 
Add some text inside the p tag about a secret alien moon base.
*/