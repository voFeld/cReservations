var reservations = {
  'Bob': { claimed: false },
  'Ted': { claimed: true }
};




$('#input').on('click', function(e){
  e.preventDefault();

  var name = $("input[name=reservation]").val();

  var claimReservation = function () {
    // write your code here!
    if(reservations.hasOwnProperty(name) === false) {
      console.log("there's nothing under your name, but now you're added!");
      reservations[name] = {claimed: true};
      $('ul').append("<li>" + name + "</li>");

    } else if (reservations[name].claimed === true) {
      console.log("You are already claimed " + name + "!");

    } else if (reservations[name].claimed === false) {
      console.log("Welcome " + name + "!");

    }

  };

  claimReservation();

});






// Until now we've been using prompt and alert. Instead, add an input field and button in HTML.

