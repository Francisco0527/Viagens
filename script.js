function openCity(evt, cityName) {
  var i, tabcontent, tablinks;

  // Pega os elementos com class="tabcontent" e esconde
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    tabcontent[i].classList.remove("active"); // Remove a classe active
  }

  // Pega os elementos com class="tablinks" e remove o "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Mostra a aba atual, e adiciona "active" na classe
  document.getElementById(cityName).style.display = "block"; // Mostra a aba
  document.getElementById(cityName).classList.add("active"); // Adiciona a classe active
  evt.currentTarget.className += " active"; // Adiciona "active" ao botão
}

// Default tab (Paraty)
document.getElementById("defaultOpen").click();
