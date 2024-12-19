let m =document.getElementById('bulb');
let b=document.getElementById('b1');
let b2 =document.getElementById('b2')

function bulbon(){
    if(m.src==='https://www.w3schools.com/js/pic_bulboff.gif'){
        m.src="https://www.w3schools.com/js/pic_bulbon.gif";
    }
    b.style.backgroundColor='green';
    b2.style.backgroundColor='gray';

    
}



function bulboff(){
    if(m.src==="https://www.w3schools.com/js/pic_bulbon.gif"){
        m.src="https://www.w3schools.com/js/pic_bulboff.gif";
    }
    b.style.backgroundColor='gray';
    b2.style.backgroundColor='red';
}