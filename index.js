// selection des commandes 
const commandes = document.querySelectorAll('.commandes');
console.log(commandes);

commandes.forEach((item)=>{
    item.addEventListener('click', function(){
        console.log('item cliqué')
        //je sélectionne et stocke la div suivante de même niveau
        const next = item.nextElementSibling;
        console.log(next)
        // on rend visible ou invisble la réponse avec une class "visible"
        next.classList.toggle('visible');
        // je cible et stocke l'icone de l'item
        const icone = item.querySelector('i');
        console.log(icone);
        // je bascule la classe pour changer l'icône du chevron
        icone.classList.toggle('fa-chevron-up');
        icone.classList.toggle('fa-chevron-down');
    })
})
