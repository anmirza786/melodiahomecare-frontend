const collapsable = document.querySelectorAll(".collapsible");
collapsable.forEach((item) =>
item.addEventListener("click", function (){
    this.classList.toggle("collapsible--expanded");
})
);