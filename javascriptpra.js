

let button = document.querySelector('button');
let box = document.getElementById('changeMe');


button.onclick = (changeMe) => {
    if (box.style.background === 'red')  {
        box.style.background = 'blue';
    }else {
        box.style.background = 'red';
    } 
}
console.log('This Software has been developed by IxAM Const');