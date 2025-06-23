document.getElementById("child").addEventListener("click", function () {
  document.getElementById("output").innerText = "child - child";
});

document.getElementById("parent").addEventListener("click", function () {
  document.getElementById("output").innerText = "parent - parent";
});

document.getElementById("grandparent").addEventListener("click", function () {
  document.getElementById("output").innerText = "grandparent - grandparent";
});