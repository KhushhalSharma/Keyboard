let keys = document.querySelectorAll("#container>div");
let bag = "";
keys.forEach(function (el) {
    el.addEventListener("click", myCal)
})
function myCal(event) {
    let target = event.target.innerText;
    if (target=== "delete") {
        bag="";
        document.getElementById("res").value = "";
    } else {
        bag += target
        document.getElementById("res").value = bag;
    }
}