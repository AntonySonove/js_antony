
export const contactApi=async()=>{
    const apiDiv=document.getElementById("apiDiv");
    // console.log(apiDiv);
    const response=await fetch("https://api.chucknorris.io/jokes/random");
    console.log(response);
    console.log(response.ok);
    console.log(response.status);

    const dataTransformed=await response.json();
    // console.log(dataTransformed);

    const blague=document.body.appendChild(document.createElement("h4"));
    blague.innerText=dataTransformed.value;
}