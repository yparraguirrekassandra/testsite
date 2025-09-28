function showBrowserInfo() {
    alert("Browser: " + navigator.userAgent +
          "\nScreen: " + screen.width + "x" + screen.height +
          "\nURL: " + location.href);
}

function showDateTime() {
    document.getElementById("dateTime").innerText = new Date().toLocaleString();
}

function showSurprise() {
  const btn = document.getElementById('surpriseBtn');
  const cat = document.getElementById('luckyCat');
  const text = document.getElementById('surpriseText');

  if (cat.style.display === "block") {
    cat.style.display = "none";
    btn.textContent = "Click for a Surprise";
    text.textContent = "";
  } else {
    cat.style.display = "block";
    btn.textContent = "Congrats! You've found the lucky cat, may you be blessed with good luck.";
    text.textContent = "";
  }
}

function toggleBrushes() {
  let brushes = document.getElementById("brushes");
  if (brushes.style.display === "none") {
    brushes.style.display = "block";
  } else {
    brushes.style.display = "none";
  }
}

function changeSidebarColor() {
  let colors = ["#F4C7D0", "#C6E2FF", "#9FAA74", "#FDE2E4", "#FFF3B0"];
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.querySelector(".sidebar").style.backgroundColor = randomColor;
}
