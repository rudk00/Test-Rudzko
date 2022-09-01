const clickBtnOff = document.querySelector(".collapsible__action.collapsible__action--visible");
const clickBtnOn = document.querySelector(".collapsible__action.collapsible__action--hidden");
const collapsible__content = document.querySelector(".collapsible__content");

clickBtnOff.addEventListener("click", function (){
    collapsible__content.animate([{opacity: 0},{opacity: 0},], {duration: 1000,iterations: Infinity,direction: "alternate",});
    clickBtnOff.click();
});
clickBtnOn.addEventListener("click", function(){
    collapsible__content.animate([{opacity: 1},{opacity: 1},], {duration: 1000,iterations: Infinity,direction: "alternate",});
});