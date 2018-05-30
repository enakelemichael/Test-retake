function create_tabs(container_id) 
{

var coll = document.getElementsByClassName("container");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var page = this.nextElementSibling;
        if (page.style.display === "block") {
            page.style.display = "none";
        } else {
            page.style.display = "block";
        }
    });
}

}