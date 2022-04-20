// fpor local storage
// let lightmode = localStorage.getItem('lightmode');
let toggleButton = document.querySelector('.check');
let light = false;

const enableLightMode = ()=>{
    document.body.classList.add('lightmode');
   light = true
    // localStorage.setItem('lightmode','enabled');
}

const disableLightMode = ()=>{
     document.body.classList.remove('lightmode');
     light = false;
    // localStorage.setItem('lightmode','disabled');
}
// if(lightmode === 'enabled') {
//     enableLightMode();
// } else {
//     disableLightMode();
// }

toggleButton.addEventListener('click',()=>{
   lightmode = localStorage.getItem('lightmode')
    if(light === false) {
        enableLightMode()
    } else{
        disableLightMode();
    }
} )
