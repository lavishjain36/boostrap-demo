async function fun(){
         
  try {

   //Getting input from thw user
    var n = 0
    let code = document.getElementById('num').value
    if(code.length>6 || code.length<6){
      alert('Enter only 6 Digit Pincode')
       n = n + 1
    }
     
    //Clearing output screen
    document.getElementById('district').value=null
    document.getElementById('state').value =null
    document.getElementById('area').value = null
    //Getting data from API
    let pc = await fetch(`https://api.postalpincode.in/pincode/${code}`)
    let pc1 = await pc.json()
    console.log(pc1[0].PostOffice)
    if(pc1[0].PostOffice===null && n<1){
      alert('Wrong pincode or Data currently unavaliable')
    }
    //Displaying corresponding values in the output screen
    document.getElementById('state').value= pc1[0].PostOffice[0].State
    document.getElementById('district').value = pc1[0].PostOffice[0].District
    document.getElementById('area').value = pc1[0].PostOffice[0].Name
    console.log(pc1[0])
    n = 0
  } catch (error) {
    console.log(error)
  }
  
  
}