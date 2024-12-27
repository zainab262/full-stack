 let login=document.getElementById("login-form")
 login.addEventListener("submit",function(){
    event.preventDefault()
    let email=login.email.value;
    let password=login.password.value;
    let userobj={email,password}
    fetch("http://localhost:3000/user")
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data)
        let user=data.filter((ele)=>ele.email==email)
        console.log(user)
        if (user.length!=0){
            if (user[0].password==password){
                alert(" Login Scuccessfully")
                localStorage.setItem("loginData", JSON.stringify(user[0]))
                window.location.href="todos.html"
            }else{
                alert("please enter the correct password")
            }
        }
        else{
            alert("Please Signup to proceed Further")
            window.location.href="signup.html"
        }
    })
    .catch((err) => {
        console.log(err);
        alert("Something wenr wrong, Please try again later");
      });
 })