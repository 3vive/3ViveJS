/*****
Copyright 3Vive Company
*****/

(function(window) {
  // You can enable the strict mode commenting the following line
  'use strict';

  // This function will contain all our code
  function threeVive() {
    var _threeViveObject = {};


    //Generate the iframe in parent window
    var iframe = document.createElement('iframe');
    var html = '<body><div id="testerFrame"> Test </div></body>';
    iframe.src = 'http://app.3vive.com:8080';
    document.body.appendChild(iframe);
    console.log('iframe.contentWindow =', iframe.contentWindow);



    //read that cookie and pass it back
    var threeViveCookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)threeViveCookie\s*\=\s*([^;]*).*$)|^.*$/, "$1");


    //Communicate through iframe using postmessage
    var myObj = {
      test: "test",
      parentCookieInfo: threeViveCookieValue
    };
    Window.parent.postmessage(myObj, document.getElementById("testerFrame"));


    _threeViveObject.checkCookieState() {
      //Check if cookie has value if it does pass it to the registerServiceWorker

      //read that cookie and pass it back
      var threeViveCookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)test2\s*\=\s*([^;]*).*$)|^.*$/, "$1");


      if (threeViveCookieValue == true) {

        _threeViveObject.loadAllAdRevenue();
        _threeViveObject.load3ViveModule();
        _threeViveObject.hideArticleContent();



      } else if (threeViveCookieValue == false) {
        //generate cookie info from parent
        //contentDocument.cookie = "threeViveCookie=Test_CookieRandomStringOfChars";  //this one once it's in the iframe
        document.cookie = "threeViveCookie=Test_CookiandomStringOfChars"; // this is we push it from the parent to the iframe

      }



    }
    _threeViveObject.scrollTrigger() {








      if (window.scrollY > 200) {


        // create the elements
        var div = document.createElement('div'),
          log = document.createElement('div'),
          reg = document.createElement('div'),
          loginForm = document.createElement('form'),
          registerForm = document.createElement('form');

        // set body styles
        document.body.style.color = '#fff';
        document.body.style.textTransform = 'capitalize';
        //document.body.style.background = "url('https://cdn.lennar.net/images/com/images/new-homes/3/63/mhi/El%20Dorado%20Hills%20Sunset-1200x540.jpg?w=1200&h=540&as=1 no-repeat";
        document.body.style.backgroundSize = "cover";

        // set main-div styles
        div.style.background = "rgba(0,0,0,0.5)";
        div.style.width = '300px';
        div.style.margin = '30px auto';
        div.style.padding = '10px';
        div.style.borderRadius = '10px';
        div.style.paddingTop = '100px';
        div.style.position = 'fixed';
        div.style.left = 0;
        div.style.top = 0;
        div.style.width = '400px';
        div.style.height = '570px';
        div.style.overflow = 'auto';


        log.style.display = 'inline-block';
        log.style.color = '#fff';
        log.style.margin = '5px';
        log.style.cursor = 'pointer';
        log.id = 'login';
        log.innerHTML = 'login';
        reg.style.display = 'inline-block';
        reg.style.color = '#888';
        reg.style.margin = '5px';
        reg.style.cursor = 'pointer';
        reg.id = 'register';
        reg.innerHTML = 'register';

        // hide register form and show login form
        reg.onclick = function() {
          this.style.color = '#fff';
          log.style.color = '#888';
          loginForm.style.display = 'none';
          registerForm.style.display = 'block';
        };

        // hide login form and show register form
        log.onclick = function() {
          this.style.color = '#fff';
          reg.style.color = '#888';
          loginForm.style.display = 'block';
          registerForm.style.display = 'none';

        //  debugger;

        };

        // create some variables for styling
        var inputStyles = "background:none;border-color:#888;border-width:0 0 1px 0;width:100%;color:#fff;padding:5px;margin:5px;",
          btnStyles = "background:#32CD32;border:none;width:100%;color:#fff;padding:5px;margin:5px;border-radius: 15px",
          forgetStyles = "color:#fff;",
          startYears = 10,
          endYears = 70,
          i;

        // set loginForm styles
        loginForm.style.margin = '50px 20px 20px 20px';
        loginForm.id = 'loginForm';
        loginForm.action = "http://app.3vive.com:8080/api/v1/partners";
        // set the elements and styles on the form
        loginForm.innerHTML = "<label>username</label><br/>" +
          "<input type='text' placeholder='type username' style='" + inputStyles + "' /><br/>" +
          "<label>password</label><br/>" +
          "<input type='password' placeholder='*************' style='" + inputStyles + "' /><br/>" +
          "<input type='submit' value='Login' onsubmit='debugger;'  style='" + btnStyles + "' />" +
          "<p><a style='" + forgetStyles + "' href='#'>forget password ?</a></p><br/>";

        // set registerForm styles
        registerForm.style.margin = '50px 20px 20px 20px';
        registerForm.style.display = 'none';
        registerForm.id = 'registerForm';

        // set the elements and styles on the form
        registerForm.innerHTML = "<label>first name</label><br/>" +
          "<input type='text' placeholder='first name' style='" + inputStyles + "' /><br/>" +
          "<label>last name</label><br/>" +
          "<input type='text' placeholder='last name' style='" + inputStyles + "' /><br/>" +
          "<label>e-mail</label><br/>" +
          "<input type='email' placeholder='your email' style='" + inputStyles + "' /><br/>" +
          "<label>password</label><br/>" +
          "<input type='password' placeholder='*************' style='" + inputStyles + "' /><br/>" +
          "<label>confirm password</label><br/>" +
          "<input type='password' placeholder='*************' style='" + inputStyles + "' /><br/>" +
          "<input type='submit' value='Register' style='" + btnStyles + "' />";

        // append the bottons and form on main-div
        div.appendChild(log);
        div.appendChild(reg);
        div.appendChild(loginForm);
        div.appendChild(registerForm);

        // append main-div on the body
        document.body.appendChild(div);
        window.removeEventListener("scroll", _threeViveObject.scrollTrigger);
      }






    }

    _threeViveObject.scrollUntilPopup() {
      window.addEventListener('scroll', _threeViveObject.scrollTrigger)
    }


    _threeViveObject.loadAllAdRevenue() {

    };
    _threeViveObject.load3ViveModule() {

    };
    _threeViveObject.hideArticleContent() {

    };

    _threeViveObject.loginUser() {
      //A stylized dedicated login window later on but this is a test
      var jsonResponse;
      var username = prompt("Please enter your usernmae:", "");

      if (username != null || username == "") {
        jsonResponse = _threeViveObject.getUserInfo(username); //i.e Al
      }


      //grab cookie setter from jsonRepsonse and set it below
      document.cookie = "threeViveCookie=Test_CookieRandomStringOfChars";
      window.reload();
    }
    //http://18.219.104.16:8081/article-reg
    //Make fetch requests for all users

    _threeViveObject.getUsers() {
      fetch('http://app.3vive.com:8080/api/v1/users').then(function(response) {
        return response.json();
      }).then(function(users) {
        console.log(users);
        _threeViveObject.users = users;
      })
    }

    //Check Partners
    _threeViveObject.createNewUser() {
      fetch('http://app.3vive.com:8080/api/v1/partners').then(function(response) {
        return response.json();
      }).then(function(newUser) {
        console.log(newUser);
        _threeViveObject.newUser = newUser;
      })
    }
    //create a new user
    var thisPartnerName = "NYDN";
    _threeViveObject.getPartnerNames(thisPartnerName) {
      fetch('http://app.3vive.com:8080/api/v1/users/register?partnerName=' + thisPartnerName).then(function(response) {
        return response.json();
      }).then(function(partners) {
        console.log(partners);
        _threeViveObject.partners = partners;
      })
    }

    //Find a user passing username in as the argument
    //  var userName = "al";
    _threeViveObject.getUserInfo(userName) {
      fetch('http://app.3vive.com:8080/api/v1/users/' + username).then(function(response) {
        return response.json();
      }).then(function(thisUser) {
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
_threeViveObject.checkCookieState();

// Then we can call our custom function using
//threeVive.log(["test1","test2"]);
