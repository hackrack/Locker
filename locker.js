var text = document.querySelector("textarea");
document.addEventListener("keydown", function() {
  window.localStorage.setItem("all", text.value);
})
window.addEventListener("load", function() {
  var storage = window.localStorage.getItem("all")
  text.innerHTML = storage;
})
