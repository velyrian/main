const avatar = document.getElementById('avatar');
const inputField = document.getElementById('input-text');
// Global Variables
const avatarTypes = ['personas', 'adventurer', 'big-ears', 'big-smile','micah', 'miniavs'];
let counter = 0;

// Initialize the app
init();

//Event Listeners

inputField.addEventListener('keyup', generateAvatar);
switchBtns.forEach(btn => btn.addEventListener('click', switchAvatarType.bind(this) ));

// Functions
function init(){
    counter = 0;
    inputField.value = "";
    avatar.src = `https://avatars.dicebear.com/api/micah/1432.svg`;
}

function generateAvatar(){    
    const source = `https://avatars.dicebear.com/api/${avatarTypes[counter]}/${inputField.value}.svg`;
    avatar.src = source;
}

function switchAvatarType(){
    if(this.id === "next"){
        counter = ++counter === avatarTypes.length ?  0 : counter++;
    }else{
        counter = --counter < 0 ?  avatarTypes.length -1 : counter--;        
    }
    switchType.textContent = avatarTypes[counter];
    avatar.src = `https://avatars.dicebear.com/api/${avatarTypes[counter]}/${inputField.value}.svg`;
}