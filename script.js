//Write a logic to get the data 
async function  getUsers(){
    let users;
    try {
        const data =await fetch("https://62a180cfcc8c0118ef4cebd8.mockapi.io/users",
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });
        users=await data.json();
        console.log(users);
        
    } catch (error) {
        console.log(error);
    }
    return users;

}

// getUsers();

//Write a functionality to display the data of the users
async function displayUsers(){

    let users=await getUsers();
    console.log(users);
    const userList=document.querySelector(".user-list");
    userList.innerHTML="";

    users.forEach(user=>{
        // console.log(user.name)
        userList.innerHTML+=`
        <div class="user-container">
        <img class="user-avatar" src="${user.avatar}" alt="${user.name}">
        <h3>${user.name}</h3>
        <button onClick="deleteUser(${user.id})">Delete</button>
        <button onClick="editUser(${user.id})">Edit</button>
        </div>


        `
    });

}


displayUsers();



//Write a functionality to delete the user data 
async function deleteUser(id){
    try {
        const data=await fetch(`https://62a180cfcc8c0118ef4cebd8.mockapi.io/users/${id}`,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        });
        const users=await data.json();
        console.log(users);
        displayUsers();
        
    } catch (error) {
        console.log(error);
        
    }
}


async function addUser(){
    const userName=document.querySelector(".add-user-name").value;
    const userAvatar=document.querySelector(".add-user-avatar").value;

    console.log(userName,userAvatar);

    const data=await fetch(
        "https://62a180cfcc8c0118ef4cebd8.mockapi.io/users",
        {
            method: "POST",
            body:JSON.stringify({
                name:userName,
                avatar:userAvatar
            }),
            headers: {
                "Content-Type": "application/json"
            },
        }
    );
    displayUsers();


}

// addUser();

//TO update the data of the user
async function editUser(id){
    const userName=document.querySelector(".edit-user-name").value;
    const userAvatar=document.querySelector(".edit-user-avatar").value;
    console.log(userName,userAvatar);

    const data=await fetch(
        `https://62a180cfcc8c0118ef4cebd8.mockapi.io/users/${id}`,
        {
            method: "PUT",
            body:JSON.stringify({
                name:userName,
                avatar:userAvatar
            }),
            headers: {
                "Content-Type": "application/json"
            },
        }
    );
    displayUsers();
    

}