// USER REGISTRATION FORM

function openForm() {
  document.getElementById("myForm").style.display = "block";
}
function back() {
  document.getElementById("myForm").style.display = "none";
  console.log("back")
}


function saveData() {

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var username = document.getElementById("username").value;

  localStorage.setItem("Name", name)
  localStorage.setItem("Email", email)
  localStorage.setItem("User Name", username)



  localStorage.getItem("Name", name)

  localStorage.getItem("User Name", username)

}

// LOGIN FORM JS

function loginForm() {
  document.getElementById("myLoginForm").style.display = "block";
}

function login() {
  var name = document.getElementById("name").value;
  var username = document.getElementById("username").value;

  localStorage.getItem("Name", name)
  localStorage.getItem("User Name", username)
}

// Box Three
//Hide One and Second box


function roll() {

  let images = ['images/one.png',
    'images/two.png',
    'images/three.png',
    'images/four.png',
    'images/five.png',
    'images/six.png']

  let dies = document.querySelectorAll("img");

  dies.forEach(function (die) {
    die.classList.add("shake");
  });

  setTimeout(() => {
    dies.forEach(function (die) {
      die.classList.remove("shake");
    });
    let dieOneValue = Math.floor(Math.random() * 6);
    let dieTwoValue = Math.floor(Math.random() * 6);

    console.log((dieOneValue + 1) + (dieTwoValue + 1))

    document.querySelector("#dieOne").setAttribute("src", images[dieOneValue]);
    document.querySelector("#dieTwo").setAttribute("src", images[dieTwoValue]);

    let diesSum = ((dieOneValue + 1) + (dieTwoValue + 1));
    document.querySelector("#total").innerHTML = "Total is " + (diesSum);

    if (diesSum >= 10) {
      document.getElementById("boxFour").style.display = "block";
      alert("You Got A coupon ")
    }
    else {
      document.getElementById("boxFour").style.display = "none";
    }
  }, 1000);
}


function getCoupenCode() {
  let el = document.createElement("h1");
  el.innerText = Math.floor(Math.random() * 100000000);
  document.body.appendChild(el);
  el.style.color = "white";
  el.style.display = "flex";
  el.style.justifyContent = "center";
}





