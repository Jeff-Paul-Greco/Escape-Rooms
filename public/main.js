let diaryCounter = 0;

$(".percyQ1").on("click", function (event) {
    event.preventDefault()
    if ($("#father").val() === "Hermes" && $("#mother").val() == "Aphrodite") {
        window.location = "percy-question-puzz.html"
    } else if ($("#father").val() === "hermes" && $("#mother").val() == "aphrodite") {
        window.location = "percy-question-puzz.html"
    } else {
        alert("Try Again!")
    }
})

$(".percyQ2").on("click", function (event) {
    event.preventDefault()
    if ($("#puzzle-answer").val() === "Kronos") {
        window.location = "percy-question-diary.html"
    } else if ($("#puzzle-answer").val() === "kronos") {
        window.location = "percy-question-diary.html"
    } else {
        alert("Try Again!")
    }
})

$(".percyQ4").on("click", function (event) {
    event.preventDefault()
    if ($("#cross-answer").val() === "Stone") {
        window.location = "percy-question-stone.html"
    } else if ($("#cross-answer").val() === "stone") {
        window.location = "percy-question-stone.html"
    } else {
        alert("Try Again!")
    }
})

$(".percyQ5").on("click", function (event) {
    event.preventDefault()
    let stoneAnswer = $("#stone-answer").val();

    if (stoneAnswer.length <= 500) {
        alert("Write Some More!");
        return
    } else if (stoneAnswer.includes("compare" || "comparison" || "comparing" || "contrast" || "contrasting")) {
        window.location = "percy-question-find.html"
    } else if (stoneAnswer.includes("different" || "similar" || "moral" || "theme" || "same")) {
        window.location = "percy-question-find.html"
    } else if (stoneAnswer.includes("god" || "gods" || "Aphrodite" || "like" || "Venus")) {
        window.location = "percy-question-find.html"
    }else {
        alert("Try discussing how the themes compare. How are they different, how are they similar?")
    }

})

$(".correct1").on("click", function (event) {
    event.preventDefault()
    $(".correct1").css("background-color", "yellow");
    $(".correct1").css("color", "black");
})

$(".correct2").on("click", function (event) {
    event.preventDefault()
    $(".correct2").css("background-color", "yellow");
    $(".correct2").css("color", "black");
})

$(".correct3").on("click", function (event) {
    event.preventDefault()
    $(".correct3").css("background-color", "yellow");
    $(".correct3").css("color", "black");
})

$(".correct4").on("click", function (event) {
    event.preventDefault()
    $(".correct4").css("background-color", "yellow");
    $(".correct4").css("color", "black");
})

$(".correct5").on("click", function (event) {
    event.preventDefault()
    $(".correct5").css("background-color", "yellow");
    $(".correct5").css("color", "black");
})

$(".correct6").on("click", function (event) {
    event.preventDefault()
    $(".correct6").css("background-color", "yellow");
    $(".correct6").css("color", "black");
})

$(".correct7").on("click", function (event) {
    event.preventDefault()
    $(".correct7").css("background-color", "yellow");
    $(".correct7").css("color", "black");
})

$(".correct8").on("click", function (event) {
    event.preventDefault()
    $(".correct8").css("background-color", "yellow");
    $(".correct8").css("color", "black");
})

$(".correct9").on("click", function (event) {
    event.preventDefault()
    $(".correct9").css("background-color", "yellow");
    $(".correct9").css("color", "black");
})

$(".correct10").on("click", function (event) {
    event.preventDefault()
    $(".correct10").css("background-color", "yellow");
    $(".correct10").css("color", "black");
})

$(".correct11").on("click", function (event) {
    event.preventDefault()
    $(".correct11").css("background-color", "yellow");
    $(".correct11").css("color", "black");
})

$(".correct12").on("click", function (event) {
    event.preventDefault()
    $(".correct12").css("background-color", "yellow");
    $(".correct12").css("color", "black");
})

$(".correct13").on("click", function (event) {
    event.preventDefault()
    $(".correct13").css("background-color", "yellow");
    $(".correct13").css("color", "black");
})

$(".correct14").on("click", function (event) {
    event.preventDefault()
    $(".correct14").css("background-color", "yellow");
    $(".correct14").css("color", "black");
})

$(".correct15").on("click", function (event) {
    event.preventDefault()
    $(".correct15").css("background-color", "yellow");
    $(".correct15").css("color", "black");
})

$(".correct16").on("click", function (event) {
    event.preventDefault()
    $(".correct16").css("background-color", "yellow");
    $(".correct16").css("color", "black");
})

$(".correct17").on("click", function (event) {
    event.preventDefault()
    $(".correct17").css("background-color", "yellow");
    $(".correct17").css("color", "black");
})

$(".correct18").on("click", function (event) {
    event.preventDefault()
    $(".correct18").css("background-color", "yellow");
    $(".correct18").css("color", "black");
})

$(".correct19").on("click", function (event) {
    event.preventDefault()
    $(".correct19").css("background-color", "yellow");
    $(".correct19").css("color", "black");
})

$(".correct").on("click", function (event) {
    event.preventDefault()
    diaryCounter++

    if (diaryCounter >= 10) {
        window.location = "percy-question-cross.html"
    }
})
let selection1Flag = false;
let selection2Flag = false;

$(".selection1").on("click", function (event) {
    event.preventDefault()

    $(".selection1").css("border-width", "5px")
    $(".selection1").css("border-style", "solid")
    $(".selection1").css("border-color", "green")
    $(".selection1").css("border-radius", "40px")
    selection1Flag = true;

    if (selection2Flag === true) {
        window.location = "percy-last.html"
    }
})

$(".selection2").on("click", function (event) {
    event.preventDefault()

    $(".selection2").css("border-width", "5px")
    $(".selection2").css("border-style", "solid")
    $(".selection2").css("border-color", "green")
    $(".selection2").css("border-radius", "40px")
    selection2Flag = true;

    if (selection1Flag === true) {
        window.location = "percy-last.html"
    }
})