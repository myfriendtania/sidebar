const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function () {
console.log(sidebar.classList);

// long way

// if(sidebar.classList.contains("show-sidebar")) {
//    sidebar.classList.remove("show-sidebar")
// }
// else {
//    sidebar.classList.add("show-sidebar")
// }

// short way; faster way to do the same functionality as above (commented out)
sidebar.classList.toggle("show-sidebar");
});
closeBtn.addEventListener("click", function () {
sidebar.classList.remove("show-sidebar");
});