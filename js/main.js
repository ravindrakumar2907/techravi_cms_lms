/** This is main.js file having all code for Techravi */

/* */
function loginFormValidation(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    let errorDom = document.getElementById("loginMsg");

    if(username === "" || username === " " || username === undefined){
        //errorDom.innerHTML = "Please enter the username";
        alert("Please enter the username");
        return false;
    }

    if(password === "" || password === " " || password === undefined){
        //errorDom.innerHTML = "Please enter the Password";
        alert("Please enter the Password");
        return false;
    }

    //write ajax code for checking this from server.
    $.ajax({
        url: "/api/getWeather",
        data: {
          zipcode: 97201
        },
        success: function( result ) {
          $( "#weather-temp" ).html( "<strong>" + result + "</strong> degrees" );
        },
        failed: function( result ) {
            $( "#weather-temp" ).html( "<strong>" + result + "</strong> degrees" );
          }
      });

      /**
       * $.ajax({
    url: 'https://example.com/api/data',
    type: 'GET',
    dataType: 'json',
    data: {
        param1: 'value1',
        param2: 'value2',
        param3: 'value3'
    },
    success: function(response) {
        // handle successful response
        console.log(response);
    },
    error: function(jqXHR, textStatus, errorThrown) {
        // handle error response
        console.log('Error:', textStatus, errorThrown);
    }
});
In this example, we are making an AJAX GET request to the URL https://example.com/api/data with three parameters: param1, param2, and param3. The values for these parameters are set to value1, value2, and value3, respectively.

The dataType parameter is set to json, indicating that we expect the response from the server to be in JSON format. The success callback function is called if the request is successful, and the error callback function is called if there is an error.

This example uses the jQuery library to make the AJAX request, but you can use other libraries or plain JavaScript to make AJAX requests as well.


       */

    return true;
}

/* */
function contactFormValidation(){

}

/* */
function regisatrtionFormValidation(){

}