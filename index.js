// 1.setup our http Request 
let xhr=new XMLHttpRequest();//created an object xhr 

//2.Open The request

xhr.open('GET',"https://restcountries.com/v3.1/all")




//3.Setup our listener to process the complete request

xhr.onload=function(){
    //get the data 
    if(xhr.status>=200&& xhr.status<300){
        //only if request is ok and received the data 
        let data=JSON.parse(this.response);
        console.log(data);
        // console.log(this.response);
       //get india data 
      
        console.log(data[186].population);
    }else{
        //RUn if the request is not ok
        console.log("Error");
    }
}


//4.Send the request
xhr.send();


