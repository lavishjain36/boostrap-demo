//create and built a header layout 

document.body.innerHTML=`
<div class="heading-container">
<h1>Brewery List</h1>
<img class="icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGneJNdlDUGwFug86BcXicBqv341dcGfFnVw&usqp=CAU">
</div>
<div id="mainContainer" class="main-container"></div>
`


const getData=async ()=>{
  try {
    const data=await fetch("https://api.openbrewerydb.org/breweries/");
    const breweries=await data.json();
    // console.log(breweries);
    mainContainer.innerHTML="";
    breweries.forEach(brewery=>{
      displayData(brewery);
    })

  } catch (error) {
    console.log(error);
  }
}

getData();



const displayData=(obj)=>{
  mainContainer.innerHTML+=`
  <div class="container">
  <h3 class="Breid">Breweries ID:<span>${obj.id}</span></h3>
  <h3 class="common">Breweries Name:<span>${obj.city}</span></h3>  
  <h3 class="common">Breweries Country:<span>${obj.country}</span></h3>  
  <h3 class="common">Breweries State:<span>${obj.state}</span></h3>  
  <h3 class="common">Postal Code::<span>${obj.postal_code}</span></h3> 
  <h3 class="common">Breweries Website:<span>${obj.website_url}</span></h3>

  </div>`;
}