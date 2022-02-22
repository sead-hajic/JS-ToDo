let inputField = document.getElementById('inputField');
let button = document.getElementById('btn');
let toDoes = document.getElementById('output');

button.addEventListener('click',function(){
    var paragraph= document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoes.appendChild(paragraph);
    inputField.value = "";
   paragraph.addEventListener('click', function(){
       paragraph.style.textDecoration = 'line-through';
   })
   paragraph.addEventListener('dblclick', function(){
    toDoes.removeChild(paragraph);
})
})