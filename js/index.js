let UserName=document.getElementById("UserName");
let SignEmail=document.getElementById("SignEmail");
let LoginPasswerd=document.getElementById("UserPasswerd");
let SignPasswerd=document.getElementById("SignPasswerd");
let LoginEmail=document.getElementById("LoginEmail");
let SignBtnInput=document.getElementById("SignBtn");
let LoginBtnInput=document.getElementById("LoginBtn");
let erorElm=document.getElementById("Error");
let welcomeName=document.getElementById("text")
let logoutBt=document.getElementById("logoutBtn")

let RegisterList=[];
if (localStorage.getItem('data') != null) {
    RegisterList = JSON.parse(localStorage.getItem('data'))
} 

//addusers
function adduser(){
    //opject
    if (UserName.value =="" || SignEmail.value=="" || SignPasswerd==""){
                let error="All inputs is required"
                 erorElm.innerHTML = error
    }else{
   
    let user={

        Name:UserName.value,
        Email:SignEmail.value,
        Passwerd:SignPasswerd.value
    }
    if (RegisterList.length==0){
        RegisterList.push(user)
        localStorage.setItem('data', JSON.stringify(RegisterList))
        let error=" Success"
        erorElm.classList.replace("text-danger","text-info")
        erorElm.innerHTML = error
    }
    if (searchEmail() == false) {
        let error="this email is exist"
        erorElm.innerHTML = error
    } else {
       RegisterList.push(user)
        localStorage.setItem('data', JSON.stringify(RegisterList))

        let error=" Success"

        erorElm.classList.replace("text-danger","text-info")
        erorElm.innerHTML = error
    }
   
}

}
//clear function
function clearinput(){
    UserName.value ="";
    SignEmail.value ="";
    SignPasswerd.value =""
}
function searchEmail(){
 for (let i=0; i<RegisterList.length;i++){
    if(RegisterList[i].Email.toLowerCase()==SignEmail.value.toLowerCase()){
        return false
    }
 }
}

  if(SignBtnInput){
    SignBtnInput.addEventListener("click",function(){
        adduser();
        clearinput();
    })
 }

 if(LoginBtnInput){
    LoginBtnInput.addEventListener("click",function(){
        if (LoginEmail.value =="" || LoginPasswerd.value==""){
            let error="All inputs is required"
             erorElm.innerHTML = error
            
        }else{
           let EmailIn=LoginEmail.value
           let PasswerdIn=LoginPasswerd.value
           for(let i=0 ;i<RegisterList.length;i++){
            localStorage.setItem('Name', RegisterList[i].Name)
            if (RegisterList[i].Email.toLowerCase()==EmailIn &&RegisterList[i].Passwerd.toLowerCase()==PasswerdIn ){
               location.href="home.html"
               document.getElementById("text").innerHTML="welcome"+RegisterList.Name
            }
            else{
                let error="incorrect email or password"
                erorElm.innerHTML = error
                
            }
           }
        }

    })
 }


var inputName=localStorage.getItem("Name")
if(welcomeName){
    welcomeName.innerHTML="welcome "+inputName
}

function logout(){
    localStorage.removeItem("Name")

}