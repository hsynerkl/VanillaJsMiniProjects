const text = 'lorem ipsum dolor sit amet.';     
const container = document.getElementById('container'); 
let index =0;



 function writeText(){
    document.body.innerText=text.slice(0,index);
    index++
    if(index >text.length -1 ){
        index =0;
    }
}
setInterval(writeText,250);

