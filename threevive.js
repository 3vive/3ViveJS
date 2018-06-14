/*****
Copyright 3Vive Company
*****/
var hostUrl; // = 'http://app.3vive.com:8080' ;
if (location.hostname === "localhost") {
  hostUrl = "http://localhost:8080"
} else {
  hostUrl = "http://app.3vive.com:8080";
}

(function(window) {
  // You can enable the strict mode commenting the following line
  'use strict';

  // This function will contain all our code
  function threeVive() {
    var _threeViveObject = {};

    //Generate the iframe in parent window
    // var iframe = document.createElement('iframe');
    // var html = '<body><div id="testerFrame"> Test </div></body>';
    // iframe.src = 'http://app.3vive.com:8080';
    // document.body.appendChild(iframe);
    // console.log('iframe.contentWindow =', iframe.contentWindow);



    //read that cookie and pass it back
    var threeViveCookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)threeViveCookie\s*\=\s*([^;]*).*$)|^.*$/, "$1");


    //Communicate through iframe using postmessage
    // var myObj = {
    //   test: "test",
    //   parentCookieInfo: threeViveCookieValue
    // };
    // Window.parent.postmessage(myObj, document.getElementById("testerFrame"));


    _threeViveObject.checkCookieState = function() {
      //Check if cookie has value if it does pass it to the registerServiceWorker

      //read that cookie and pass it back
      var threeViveCookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)3ViveCookie\s*\=\s*([^;]*).*$)|^.*$/, "$1");


      if (threeViveCookieValue == true) {

        _threeViveObject.loadAllAdRevenue();
        _threeViveObject.load3ViveModule();
        _threeViveObject.hideArticleContent();



      } else if (threeViveCookieValue == false) {
        //generate cookie info from parent
        //contentDocument.cookie = "threeViveCookie=Test_CookieRandomStringOfChars";  //this one once it's in the iframe
        document.cookie = "3ViveCookie=true"; // this is we push it from the parent to the iframe
        _threeViveObject.generateButtons();
      }



    }


    _threeViveObject.generateButtons = function() {
      var inputStyles = "background:none;border-color:#888;border-width:0 0 1px 0;width:100%;color:#fff;padding:5px;margin:5px;",
        btnStyles = "background:#32CD32;border:none;width:100%;color:#fff;padding:5px;margin:5px;border-radius: 15px",
        forgetStyles = "color:#fff;",
        startYears = 10,
        endYears = 70,
        i;
      var buttonDiv = document.createElement('div');
      buttonDiv.innerHTML = "<input type='button' onclick='threeVive.loadAllAdRevenue();' value='Continue With Ads' style='" + btnStyles + "' />" +
        "<input type='button' onclick='threeVive.scrollTrigger();' value='Register with Adpass' style='" + btnStyles + "' />";

      var whereToAppendButtons = document.getElementsByClassName("entry-content")[0];
      whereToAppendButtons.appendChild(buttonDiv);
    }

    _threeViveObject.scrollTrigger = function() {


      if (window.scrollY > 200) {


        // create the elements
        var div = document.createElement('div'),
          centeredDiv = document.createElement('div'),
          leftLoginDiv = document.createElement('div'),
          rightLoginDiv = document.createElement('div'),
          loginForm = document.createElement('form'),
          registrationForm = document.createElement('form');

        //  registerForm
        // set body styles
        document.body.style.color = '#fff';
        document.body.style.textTransform = 'capitalize';
        //document.body.style.background = "url('https://cdn.lennar.net/images/com/images/new-homes/3/63/mhi/El%20Dorado%20Hills%20Sunset-1200x540.jpg?w=1200&h=540&as=1 no-repeat";
        document.body.style.backgroundSize = "cover";





        centeredDiv.style.padding = '10px';
        centeredDiv.style.position = 'fixed';
        centeredDiv.style.zIndex = 999;
        centeredDiv.style.left = 0;
        centeredDiv.style.top = 0;
        centeredDiv.style.width = '100%';
        centeredDiv.style.height = '100%';
        centeredDiv.style.overflow = 'auto';


        div.id = "popUpAdPassDiv";
        // set main-div styles
        div.style.background = "rgba(255, 255, 255, 0.95)";
        div.style.width = '300px';
        div.style.margin = '30px auto';
        div.style.padding = '10px';
        div.style.borderRadius = '10px';
        div.style.borderTop = "20px green solid";
        div.style.borderBottom = "20px green solid";
        div.style.paddingTop = '20px';
        div.style.textAlign = 'center';
        //  div.style.position = 'fixed';
        div.style.left = 0;
        div.style.top = 0;
        div.style.width = '600px';
        div.style.height = '600px';
        div.style.overflow = 'auto';

        div.innerHTML = '<button type="button" id="closeButton" onclick="threeVive.closePopup()"> Close</button> <h1 style="text-align: center;color: green;font-family: "Helvetica Neue", sans-serif;font-weight: bold;letter-spacing: -1px;">Sign Up for AdPASS</h1> <h3 style="color:green">No Ads. No Ad Tracking</h3>';




        // hide login form and show register form


        // create some variables for styling
        var inputStyles = "background:none;border-color:#888;border-width:0 0 1px 0;width:100%;color:#000;padding:5px;margin:5px;",
          btnStyles = "background:#32CD32;border:none;width:100%;color:#fff;padding:5px;margin:5px;border-radius: 15px",
          forgetStyles = "color:#fff;",
          labelStyles = "color: black; width: 100%",
          startYears = 10,
          endYears = 70,
          i;

        // set loginForm styles
        loginForm.style.margin = '50px 20px 20px 20px';
        loginForm.id = 'loginForm';
        //  loginForm.action = "http://app.3vive.com:8080/api/v1/partners";
        // set the elements and styles on the form
        loginForm.innerHTML = "<label style='" + labelStyles + "'>username</label><br/>" +
          "<input id='adPassUserNameLog' type='text' placeholder='type username' style='" + inputStyles + "' /><br/>" +
          "<label style='" + labelStyles + "'>password</label><br/>" +
          "<input id='adPassUsernamePassword' type='password' placeholder='*************' style='" + inputStyles + "' /><br/>" +
          "<input type='button' value='Login'onclick='threeVive.loginUser()'   style='" + btnStyles + "' />" +
          "<p><a style='" + forgetStyles + "' href='#'>forget password ?</a></p><br/>";




        registrationForm.innerHTML = "<a style='width: 100%;' onclick='threeVive.showReg()' href='javascript:void(0);' >Create a new Account </a> </br> <div id='hiddenRegTab' style='display:none'> <label style='" + labelStyles + "' >username</label><br/>" +
          "<input id='adPassUserNameReg' type='text' required placeholder='type username' style='" + inputStyles + "' /><br/>" + "<label style='" + labelStyles + "'>e-mail</label><br/>" +
          "<input id='adPassEmailName' type='email'required placeholder='your email' style='" + inputStyles + "' /><br/>" +
          "<label style='" + labelStyles + "'>password</label><br/>" +
          "<input id='adPassRegPassword' type='password' required placeholder='*************' style='" + inputStyles + "' /><br/>" +
          "<label style='" + labelStyles + "'>confirm password</label><br/>" +
          "<input id='adPassRegPasswor2d' type='password'required placeholder='*************' style='" + inputStyles + "' /><br/>" +
          "<input type='button' onclick='threeVive.validateForm();' value='Register' style='" + btnStyles + "' /> </div>";



        rightLoginDiv.innerHTML = '<div class="fb-login-button" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="false"></div>';
        // set registerForm styles
        // registerForm.style.margin = '50px 20px 20px 20px';
        // registerForm.style.display = 'none';
        // registerForm.id = 'registerForm';

        // set the elements and styles on the form
        //  registerForm.innerHTML =

        // append the bottons and form on main-div
        leftLoginDiv.style.float = "left";
        leftLoginDiv.style.borderRight = "2px green solid";
        rightLoginDiv.style.float = 'right';





        leftLoginDiv.appendChild(loginForm);
        div.appendChild(leftLoginDiv);
        div.appendChild(rightLoginDiv);
        div.appendChild(registrationForm);
        centeredDiv.appendChild(div);
        // append main-div on the body
        document.body.appendChild(centeredDiv);
        window.removeEventListener("scroll", _threeViveObject.scrollTrigger);
      }






    }

    _threeViveObject.scrollUntilPopup = function() {
      window.addEventListener('scroll', _threeViveObject.scrollTrigger)
    }


    _threeViveObject.loadAllAdRevenue = function() {

    };
    _threeViveObject.load3ViveModule = function() {

    };
    _threeViveObject.hideArticleContent = function() {

    };

    _threeViveObject.showReg = function() {

      document.getElementById('hiddenRegTab').style.display = "";
    }

    _threeViveObject.closePopup = function() {
       var element = document.getElementById('popUpAdPassDiv');

       element.parentNode.removeChild(element);
    }
    _threeViveObject.validateForm = function() {

      var usr = document.getElementById('adPassUserNameReg');
      var pwd1 = document.getElementById('adPassRegPassword');
      var pwd2 = document.getElementById('adPassRegPassword2');

      if (usr.value == "") {
        alert("Error: Username cannot be blank!");
        usr.focus();
        return false;
      }
      re = /^\w+$/;
      if (!re.test(usr.value)) {
        alert("Error: Username must contain only letters, numbers and underscores!");
        usr.focus();
        return false;
      }

      if (pwd1.value != "" && pwd1.value == pwd2.value) {
        if (pwd1.value.length < 6) {
          alert("Error: Password must contain at least six characters!");
          pwd1.focus();
          return false;
        }
        if (pwd1.value == usr.value) {
          alert("Error: Password must be different from Username!");
          pwd1.focus();
          return false;
        }
        re = /[0-9]/;
        if (!re.test(pwd1.value)) {
          alert("Error: password must contain at least one number (0-9)!");
          pwd1.focus();
          return false;
        }
        re = /[a-z]/;
        if (!re.test(pwd1.value)) {
          alert("Error: password must contain at least one lowercase letter (a-z)!");
          pwd1.focus();
          return false;
        }
        re = /[A-Z]/;
        if (!re.test(pwd1.value)) {
          alert("Error: password must contain at least one uppercase letter (A-Z)!");
          pwd1.focus();
          return false;
        }
      }


      _threeViveObject.createNewUser();

      //  alert("You entered a valid password: " + pwd1.value);
      return true;



    }
    //http://18.219.104.16:8081/article-reg
    //Make fetch requests for all users

    _threeViveObject.getUsers = function() {
      fetch(hostUrl + '/api/v1/users').then(function(response) {
        return response.json();
      }).then(function(users) {
        console.log(users);
        _threeViveObject.users = users;
      })
    }

    //Check Partners
    _threeViveObject.createNewUser = function(userName, password, email) {
      //debugger;

      var payload = {};
      payload.username = document.getElementById("adPassUserNameReg").value;
      payload.password = document.getElementById("adPassRegPassword").value;
      payload.email = document.getElementById("adPassEmailName").value;

      //JSON.stringify(payload);
      console.log(payload);
      //  var data = new FormData();
      //data.append("json",JSON.stringify(payload); )

      console.log(payload);
      fetch(hostUrl + '/api/v1/users/register', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
          "Access-Control-Allow-Credentials": "true"
        },
        method: 'POST',
        body: JSON.stringify(payload)
      }).then(function(response) {
        return response.json();
      }).then(function(newUser) {
        console.log(newUser);
        debugger;
        _threeViveObject.newUser = newUser;
      })
    }
    //create a new user
    var thisPartnerName = "NYDN";
    _threeViveObject.getPartnerNames = function(thisPartnerName) {
      fetch(hostUrl + '/api/v1/users/register?partnerName=' + thisPartnerName).then(function(response) {
        return response.json();
      }).then(function(partners) {
        console.log(partners);
        _threeViveObject.partners = partners;
      })
    }

    //Find a user passing username in as the argument
    //  var userName = "al";



    _threeViveObject.loginUser = function() {



      var payload = {};
      payload.username = document.getElementById("adPassUserNameLog").value;
      payload.password = document.getElementById("adPassUsernamePassword").value;



      if ((username != null || username == "") && (password != null || password == "")) {
        fetch(hostUrl + '/api/v1/users/user/' + payload.username, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            "Access-Control-Allow-Credentials": "true",
            'Authorization': 'Basic ' + btoa(payload.username + ":" + payload.password)
          },
          method: 'POST',
          body: JSON.stringify(payload)
        }).then(function(response) {
          return response.json();
        }).then(function(loginUser) {
          console.log(loginUser);
          debugger;
          _threeViveObject.newUser = loginUser;
        })
      }




    }

    _threeViveObject.getUserInfo = function(username, password) {
      fetch(hostUrl + '/api/v1/users/' + username).then(function(thisUser) {
        console.log(thisUser);
      })
    }

    // Just create a property to our library object.
    _threeViveObject.Log = function(thingToLog) {
      console.log("Log > Type of variable : " + typeof(thingToLog));
      console.log("Log > Is number : " + !isNaN(thingToLog));
      console.log("Log > Length : " + (thingToLog).length);

      return console.log(thingToLog);
    };

    return _threeViveObject;
  }

  // We need that our library is globally accesible, then we save in the window
  if (typeof(window.threeVive) === 'undefined') {
    window.threeVive = threeVive();
  }


})(window); // We send the window variable withing our function
//threeVive.checkCookieState();
document.addEventListener("DOMContentLoaded", function(event) {
  threeVive.generateButtons();
});

// Then we can call our custom function using
//threeVive.log(["test1","test2"]);
