console.log("Page loaded...")

var request = document.querySelector(".connections")
var count = 2
var req1 = document.querySelector("#req1")
var req2 = document.querySelector("#req2")
var uname = document.querySelector(".bottomcard h1")

//  Sign out
function signOut(element) {
    if(element.innerText == "Sign Out") {
        element.innerText = "Sign In";
    } else {
        element.innerText = "Sign Out";
    }
}

// Edit Profile
function edit(element) {
    uname.innerText = "John Wick";
}

// Accept or Decline
function accept(element) {
    req1.remove();
    count--;
    request.innerText = count;
    console.log(request);
}

function accept2(element) {
    req2.remove();
    count--;
    request.innerText = count;
    console.log(request);
}

function decline(element) {
    count--;
    req1.remove();
    request.innerText = count;
    alert("Request canceled");
    console.log(request);
}

function decline2(element) {
    count--;
    req2.remove();
    request.innerText = count;
    alert("Request canceled");
    console.log(request);
}