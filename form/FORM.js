function save(){
    console.log("redirect triggerd");
    var name = document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var tel=document.getElementById('tel').value
    var age=document.getElementById("age").value;
    var dob=document.getElementById("dob").value;

    localStorage.setItem('Username',name);
    localStorage.setItem('UserEmail',email);
    localStorage.setItem('UserTel',tel);
    localStorage.setItem('UserAge',age);
    localStorage.setItem('UserDob',dob);

    alert("Data added Succesfully");
    window.location.href = " index.html";
    
}