function responsiveButton(){
    const from = document.querySelector(".from");
    const title = document.querySelector(".title");
    const mescontent = document.querySelector(".mescontent");
    const sendbtn = document.querySelector("#send");

    mescontent.addEventListener("input", e =>{
        if(!from.value || !title.value || !mescontent.value){
            sendbtn.setAttribute("disabled", "disabled");
            sendbtn.classList.remove("abled");
            
        }else{
            sendbtn.removeAttribute("disabled");
            sendbtn.classList.add("abled")
        }
    })
    from.addEventListener("input", e =>{
        if(!from.value || !title.value || !mescontent.value){
            sendbtn.setAttribute("disabled", "disabled");
            sendbtn.classList.remove("abled");
            
        }else{
            sendbtn.removeAttribute("disabled");
            sendbtn.classList.add("abled")
        }
    })
    title.addEventListener("input", e =>{
        if(!from.value || !title.value || !mescontent.value){
            sendbtn.setAttribute("disabled", "disabled");
            sendbtn.classList.remove("abled");
            
        }else{
            sendbtn.removeAttribute("disabled");
            sendbtn.classList.add("abled")
        }
    })
}

function sendEmail(event){
    event.preventDefault();
    const from = document.querySelector(".from").value;
    const title = document.querySelector(".title").value;
    const mescontent = document.querySelector(".mescontent").value;
    let notify = document.querySelector(".notify");
    
    notify.textContent = "";
    notify.style.color = "";
    if(from != "" && title != "" && mescontent != ""){
        if(!validateEmail(from)){
            notify.style.color = "red";
            notify.textContent = "Invalid email.";
            return;
        }
        if (title.length > 20) {
            notify.style.color = "red";
            notify.textContent = "Title must be shorter than 20 characters.";
            return;
        }   
        notify.style.color = "green";
        notify.textContent = "Email sent successfully!";
        document.querySelector(".from").value = "";
        document.querySelector(".title").value = "";
        document.querySelector(".mescontent").value = "";
        return;
    } else{
        notify.style.color = "red";
        notify.textContent = "Please fill in all required fields.";
    }
    document.querySelector(".CV").reset();
}

function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}