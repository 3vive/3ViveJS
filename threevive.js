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
    iframe.src = 'http://18.219.104.16:8080';
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
      fetch('http://18.219.104.16:8080/api/v1/users').then(function(response) {
        return response.json();
      }).then(function(users) {
        console.log(users);
        _threeViveObject.users = users;
      })
    }

    //Check Partners
    _threeViveObject.createNewUser() {
      fetch('http://18.219.104.16:8080/api/v1/partners').then(function(response) {
        return response.json();
      }).then(function(newUser) {
        console.log(newUser);
        _threeViveObject.newUser = newUser;
      })
    }
    //create a new user
    var thisPartnerName = "NYDN";
    _threeViveObject.getPartnerNames(thisPartnerName) {
      fetch('http://18.219.104.16:8080/api/v1/users/register?partnerName=' + thisPartnerName).then(function(response) {
        return response.json();
      }).then(function(partners) {
        console.log(partners);
        _threeViveObject.partners = partners;
      })
    }

    //Find a user passing username in as the argument
    //  var userName = "al";
    _threeViveObject.getUserInfo(userName) {
      fetch('http://18.219.104.16:8080/api/v1/users/' + username).then(function(response) {
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
