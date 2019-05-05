// make sure all event listeners are ready on load
$(document).ready(function(){

  // listen for burger form submit and use the name value in search bar it add a new burger
  $("#burger-form").on("submit", function(event){
    event.preventDefault();

    const burgerData = {
      name: $("#name").val().trim()
    }

    $.ajax({
      url: "/api/burgers",
      method: "POST",
      data: burgerData
    }).then(function(){
      location.reload();
    }).catch(
      err => console.log(err)
    );
  });

  // when any button with the eat burger class is click use its id and devoure boolean to update the boolean to the opposite value in the db
  $(".eat-burger").on("click", function(){

    const burgerId = $(this).attr("data-id");
    const devoure = $(this).attr("data-devoure")
  
    $.ajax({
      url: `/api/burgers/${burgerId}`,
      method: "PUT",
      data: { devoure: devoure}
    })
      .then(() => location.reload())
      .catch(err => console.log(err));
  });


});