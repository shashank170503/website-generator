function generate() {
    const name = document.getElementById("name").value;
    const desc = document.getElementById("desc").value;
    const email = document.getElementById("email").value;
  
    document.getElementById("pname").innerText = name;
    document.getElementById("pdesc").innerText = desc;
    document.getElementById("pemail").innerText = email;
  
    document.getElementById("preview").style.display = "block";
  }
