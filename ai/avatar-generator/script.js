const avatar = document.getElementById('avatar');
const inputField = document.getElementById('input-text');
// Global Variables   
 const avatarTypes = ['micah','personas', 'adventurer', 'big-ears', 'big-smile', 'miniavs','avataaars', 'bottts' , 'adventurer-neutral','open-peeps'];

let counter = 0;

// Initialize the app
init();

//Event Listeners

inputField.addEventListener('keyup', generateAvatar);

// Functions
function init(){
    counter = 0;
    inputField.value = "";
    avatar.src = `https://avatars.dicebear.com/api/micah/34059345.svg`;
}
var source;
function generateAvatar(){ 


    if(inputField && inputField.value){
         source = `https://avatars.dicebear.com/api/${avatarTypes[counter]}/${inputField.value}.svg`;
    }else{
        source = `https://avatars.dicebear.com/api/${avatarTypes[counter]}/:seed.svg`;

    }
    avatar.src = source;
}


function change(c){
    counter = c;

    document.getElementById('style-type').innerHTML = avatarTypes[counter] ;
    document.getElementById('style-img').src = `assets/styles/${avatarTypes[counter]}.svg` ;
    generateAvatar();
}



// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 