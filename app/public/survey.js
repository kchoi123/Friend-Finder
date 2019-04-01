// Get the modal
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

$("#submit").on("click", function (event) {
    // When the user clicks the submit button, open the modal 
    modal.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

// on click function for submit button
$("#submit").on("click", function (event) {
    event.preventDefault();

    // form validation
    function validEntry() {
        var valid = true;
        $(".form-control").each(function () {
            if ($(this).val() === "") {
                valid = false;
            }
        });

        $(".chosen-select").each(function () {
            if ($(this).val() === "") {
                valid = false;
            }
        });
        console.log(valid);
        return valid;
    }

    if (validEntry()) {
        // Here we grab the form elements
        var newSubject = {
            name: $("#name").val(),
            photo: $("#photo").val(),
            scores: [
                $("#q1").val(),
                $("#q2").val(),
                $("#q3").val(),
                $("#q4").val(),
                $("#q5").val(),
                $("#q6").val(),
                $("#q7").val(),
                $("#q8").val(),
                $("#q9").val(),
                $("#q10").val(),
            ]
        };

        // Test
        console.log(newSubject);

        $.post("/api/friends", newSubject, function (data) {

            console.log(data + "it worked!");

            // Clear the form when submitting
            $("#name").val("");
            $("#photo").val("");
            $("#q1").val("");
            $("#q2").val("");
            $("#q3").val("");
            $("#q4").val("");
            $("#q5").val("");
            $("#q6").val("");
            $("#q7").val("");
            $("#q8").val("");
            $("#q9").val("");
            $("#q10").val("");

            // Set the name and image values of friend match
            $('#modal-name').html(data.name);
            console.log(data.photo);
            $("#modal-image").attr("src", data.photo);

        });
    } else {
        alert("Entry is not valid. Please answer all fiels correctly!");
    }
});