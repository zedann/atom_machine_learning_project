console.log("Hello my team!");

document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".sidebar-body").style.display = "none";
});

document.querySelector(".open").addEventListener("click", function () {
    document.querySelector(".sidebar-body").style.display = "block";
  });
