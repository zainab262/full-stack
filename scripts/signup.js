let form=document.getElementById("form")
form.addEventListener("submit",function(){
    event.preventDefault();
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let userobj={name,email,password}
    fetch("http://localhost:3000/user")
    .then((res)=>res.json())
    .then((data)=>{
        let user=data.filter((el)=>el.email==email)
        if (user.length!==0){
            alert("user already registerd login please")
            window.location.href="login.html"

        }else{
            fetch("http://localhost:3000/user",{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(userobj)
            })
            .then(()=>{
                alert("Signup Successfully")
                window.location.href = "login.html"
            })
            
        }
    }).catch((err)=>{
        console.log(err)
    })
})