function validateData(){
    var element;
    element = document.getElementById("txt-section");
    if (element) {
        element.innerHTML = "";
    }
    var fnameValue = document.getElementById("fname").value;
    if(fnameValue == ""){
        alert("You didn't input a first name.");
        return;
    }
    var lnameValue = document.getElementById("lname").value;
    if(lnameValue == ""){
        alert("You didn't input a last name.");
        return;
    }
    var emailValue = document.getElementById("email").value;
    if(emailValue == ""){
        alert("You didn't input an email.");
        return;
    }
    var ageValue = document.getElementById("age").value;
    
    if(ageValue == ""){
        alert("You didn't input an age.");
        return;
    }
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(String(emailValue).toLowerCase())){
        addToForm(fnameValue, lnameValue, emailValue, ageValue);
        document.getElementById("myForm").reset();
        return false;
    }
    else{
        alert("Email input is incorrect.")
    }
}
function addToForm(a, b, c, d){
    var items = [];
    items.push("<h1>Your Data: </h1>")
    items.push("<div>" +"First Name: "+a+"</div>");
    items.push("<div>" +"Last Name: "+b+"</div>");
    items.push("<div>" +"Email: "+c+"</div>");
    items.push("<div>" +"Age: "+d+"</div>");
    $( "<div/>", {
        "class": "name-section",
        html: items.join( "" )
      }).appendTo( ".text-section" );
      
}