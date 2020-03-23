$(".percyQ1").on("click", function(event) {
    event.preventDefault()
    if ($("#father").val() == "Hermes" && $("#mother").val() == "Aphrodite") {
        window.location = "percy-question-puzz.html"
    } else {
        alert("Try Again!")
    }
})

$(".percyQ2").on("click", function(event) {
    event.preventDefault()
    if ($("#father").val() == "Chronos") {
        alert("Good Job!")
    } else {
        alert("Try Again!")
    }
})