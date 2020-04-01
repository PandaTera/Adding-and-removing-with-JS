const btn = document.getElementById('btn');
const clear = document.getElementById('clear');
let number = 1;
const addElement = function (){
  
  const div = document.createElement('div')
  
 div.textContent = number;
  document.body.appendChild(div);
  number++;
  if(number % 5 == 1){
      div.className = "box"
  } else{
    div.className ="circle"
  }
  const clearElement = function (){
  number = 1;
   document.body.removeChild(div);
}

clear.addEventListener('click', clearElement)
}

btn.addEventListener('click', addElement);
