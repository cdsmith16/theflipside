var execute = function() {
    subscribeform = document.getElementById("subscribeForm");
    subscribeform.addEventListener("submit", submitsubscribe);
    // Handler when the DOM is fully loaded

    //hoisting variables
    var user;
    var signupform;

    if(localStorage.hasOwnProperty("useremail") && localStorage.hasOwnProperty("userpoliticalleaning")){
    	console.log(`On refresh, your name is still ${localStorage.useremail} and you lean ${localStorage.userpoliticalleaning}!`);
    }
};

function submitsubscribe(event) {
    event.preventDefault();
    console.log("Yay");
    var useremail = this.emailaddress.value;
    var userpoliticalleaning = this.politicalleaning.value;
    localStorage.setItem("useremail", useremail);
    localStorage.setItem("userpoliticalleaning",userpoliticalleaning);
    alert(`It looks like your name is ${useremail} and you lean ${userpoliticalleaning}!`);
    return false;
}

if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
    execute();
} else {
    document.addEventListener("DOMContentLoaded", execute);
}
