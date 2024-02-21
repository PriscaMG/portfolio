document.getElementById('myForm').addEventListener('submit', function(event){
    event.preventDefault(); // Empêche la soumission par défaut du formulaire
    
    // Récupère la valeur du champ prénom
    var username = document.getElementById('prenom').value;
  
    // Affiche la boîte modale
    document.getElementById('myModal').style.display = 'block';
    
    // Affiche le prénom dans la boîte modale
    document.getElementById('thankYouName').textContent = username;
  
    // Vide les champs du formulaire
    document.getElementById('prenom').value = "";
    document.getElementById('NomdeFamille').value = "";
    document.getElementById('email').value = "";
    document.getElementById('message').value = "";
  });
  
  // Ferme la boîte modale lorsqu'on clique sur le bouton "Fermer"
  document.getElementsByClassName('close')[0].addEventListener('click', function(){
    document.getElementById('myModal').style.display = 'none';
  });
  
  // Ferme la boîte modale lorsqu'on clique en dehors de celle-ci
  window.addEventListener('click', function(event){
    if (event.target == document.getElementById('myModal')) {
      document.getElementById('myModal').style.display = 'none';
    }
  });
  
  