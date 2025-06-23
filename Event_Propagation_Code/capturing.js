document.getElementById("child").addEventListener("click", function () {
  document.getElementById("output").innerText = "child - child";
}, true);

document.getElementById("parent").addEventListener("click", function () {
  document.getElementById("output").innerText = "parent - parent";
}, true);

document.getElementById("grandparent").addEventListener("click", function () {
  document.getElementById("output").innerText = "grandparent - grandparent";
}, true);