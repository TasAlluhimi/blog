 // CKEDITOR
 CKEDITOR.replace('textarea');
 let blog = document.getElementById("blog")
 let btn = document.getElementById("btn")
 
 
 btn.addEventListener("click", () => {
 
 
     let texterea = CKEDITOR.instances.textarea.getData();
  
    //  creating pre 
    let pre = document.createElement("pre");
    blog.appendChild(pre)
    pre.innerHTML= `<pre>${texterea}</pre>`;

    // creating del bttn 
    let bttn = document.createElement("button");
    bttn.innerText = "Delete!";
    bttn.addEventListener("click", () =>{
        pre.innerHTML ='';
        bttn.remove();
    })
    blog.appendChild(bttn)
        
 })

//  check the user aothority 
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