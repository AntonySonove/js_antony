const apiDiv=document.querySelector(".apiDiv");
console.log(apiDiv);

//lien api
const contactApi= async()=>{
    //recup données api
    const response=await fetch("https://tyradex.vercel.app/api/v1/gen/9");

    console.log(response);
    console.log(response.ok);
    console.log(response.status);
    //transformation en objet js
    const dataTransformed=await response.json();
    console.log(dataTransformed);
    
    //recuperation du premier élément du tableau
    const poussacha= dataTransformed[0];
    console.log(poussacha);

    //affichage du premier élément sur la page
    const fichePoussacha=document.body.appendChild(document.createElement("p"));
    fichePoussacha.innerText=poussacha.name.fr;
};
contactApi();