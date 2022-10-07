let arrayOfElementId = [];
let everyElement;
//Appel de la method addEventListener sur le conteneur window a chaque event 'scroll'
window.addEventListener("scroll", (event) => {
  //Creation de l'array of object contenant tout les elements ayant data-gtmproduct en attribut
  everyElement = document.querySelectorAll("[data-gtmproduct]");
  everyElement.forEach((e) => {
    //utilisation de la method getBoundingClientRect sur chaque element e afin d'obtenir des informations sur la position de celui-ci
    let position = e.getBoundingClientRect();
    // check si la chaussure est bien visible a l'écran de l'utilisateur
    if (position.top >= 0 && position.bottom <= window.innerHeight) {
      //parse de l'attribut data-gtmproduct afin d'en tirer le name et le discountPrice
      let obj = JSON.parse(e.getAttribute("data-gtmproduct"));
      //Afin d'éviter de console log les meme element on push chaque nouvel element dans un array puis on check si il existe déja dedans. Si oui aucun console log , si non on console log les infos de la chassure puis on y push l'ID de celle ci
      if (!arrayOfElementId.includes(obj.id)) {
        console.log(`${obj.name}: ${obj.discountPrice}`);
        arrayOfElementId.push(obj.id);
      }
    }
  });
});
