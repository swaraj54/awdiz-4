function submitData() {
    // alert("Hello students")
    var name = document.getElementById("xyz").value;
    console.log(name, "- name")
    var password  = document.getElementById("xyz").value ;
    if(password.length < 9){
        return res.send("Password shgould be 8 digit ")
    }
    console.log(password,"- password")

}