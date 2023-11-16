 // CKEDITOR
 CKEDITOR.replace('textarea');
 let blog = document.getElementById("blog")
 let btn = document.getElementById("btn")
 
 
 btn.addEventListener("click", () => {
 
     // let text = document.createElement("p")
     let texterea = CKEDITOR.instances.textarea.getData();
     console.log("texterea");
     btn.insertAdjacentHTML("beforebegin", texterea)
 
 })


 let username = localStorage.getItem("User")
 let text = document.getElementById("UserName");
 text.innerText = username;

    let isLoggedIn = localStorage.getItem('isLoggedIn');

    if (!isLoggedIn) {
        window.location.href = 'Login.html';
    }

// let out = document.getElementById("out")
// out.addEventListener("click", {
//     localStorage.clear();
// })