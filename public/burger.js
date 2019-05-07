// make sure all event listeners are ready on load
$(document).ready(function() {

  // listen for burger form submit and use the name value in search bar it add a new burger
  $("#submit").on("click", function (e) {
    e.preventDefault()

    const burgerData = {
      burger_name : $("#name").val().trim()
    }

    $.ajax({
      url: "/api/burgers",
      method: "POST",
      data: burgerData
    }).then(function () {
      location.reload();
    }).catch(
      err => console.log(err)
    );
  });

  // when any button with the eat burger class is click use its id and devoure boolean to update the boolean to the opposite value in the db
  $(".eat-burger").on("click", function () {

    const burgerId = $(this).attr("data-id")
    const devoured = $(this).attr("data-devoured")

    $.ajax({
        url: `/api/burgers/${burgerId}`,
        method: "PUT",
        data: {
          devoured: devoured
        }
      })
      .then(() => location.reload())
      .catch(err => console.log(err));
  });
});