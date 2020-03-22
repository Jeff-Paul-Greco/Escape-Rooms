$(".percyQ1").on("click", function(event) {
    event.preventDefault()
    if ($("#father").val() == "Hermes" && $("#mother").val() == "Aphrodite") {
        alert("Good Job!")
    } else {
        alert("Try Again!")
    }
})