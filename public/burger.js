$(document).ready(function(){

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