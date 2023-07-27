const notify=document.querySelector(".notify");
const btn=document.querySelector(".btn");
btn.addEventListener("click", active);

function active() {
const addNum=Number(notify.getAttribute('data-count')) || 0;
notify.setAttribute('data-count', addNum + 1);

if(addNum===0){
    notify.classList.add('add-numb');
}
}