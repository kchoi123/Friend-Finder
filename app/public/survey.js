// on click function for submit button
$("#submit").on("click", function (event) {
    event.preventDefault();

    // Here we grab the form elements
    var newSubject = {
        name: $("#name").val(),
        photo: $("#photo").val().trim(),
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

    $.post("/api/subjects", newSubject,
        function (data) {

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

        });

});