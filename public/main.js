
let diaryCounter = 0;
let selection1Flag = false;
let selection2Flag = false;

$(".percyQ1").on("click", function (event) {
    event.preventDefault()
    if ($("#father").val() === "Hermes" && $("#mother").val() == "Aphrodite") {
        window.location = "percy-question-puzz.html"
    } else if ($("#father").val() === "hermes" && $("#mother").val() == "aphrodite") {
        window.location = "percy-question-puzz.html"
    } else if ($("#father").val() === "HERMES" && $("#mother").val() == "APHRODITE") {
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
    } else if ($("#puzzle-answer").val() === "KRONOS") {
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
    } else if ($("#cross-answer").val() === "STONE") {
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
    } else {
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

$(".windQ1").on("click", function (event) {
    event.preventDefault()

})

$(".windQ2").on("click", function (event) {
    event.preventDefault()
    let item1 = $("#item1").val();
    console.log(item1)
    if (($("#item1").val() === "Plastic") || ($("#item1").val() === "plastic") || ($("#item1").val() === "Bamboo") || ($("#item1").val() === "bamboo") || ($("#item1").val() === "Grease") || ($("#item1").val() === "grease") || ($("#item1").val() === "Dynamo") || ($("#item1").val() === "dynamo") || ($("#item1").val() === "Bottle Caps") || ($("#item1").val() === "bottle caps") || ($("#item1").val() === "Tractor Fan") || ($("#item1").val() === "tractor fan") || ($("#item1").val() === "Shock Absorber") || ($("#item1").val() === "shock absorber")) {

        if (($("#item2").val() === "Plastic") || ($("#item2").val() === "plastic") || ($("#item2").val() === "Bamboo") || ($("#item2").val() === "bamboo") || ($("#item2").val() === "Grease") || ($("#item2").val() === "grease") || ($("#item2").val() === "Dynamo") || ($("#item2").val() === "dynamo") || ($("#item2").val() === "Bottle Caps") || ($("#item2").val() === "bottle caps") || ($("#item2").val() === "Tractor Fan") || ($("#item2").val() === "tractor fan") || ($("#item2").val() === "Shock Absorber") || ($("#item2").val() === "shock absorber")) {

            if (($("#item3").val() === "Plastic") || ($("#item3").val() === "plastic") || ($("#item3").val() === "Bamboo") || ($("#item3").val() === "bamboo") || ($("#item3").val() === "Grease") || ($("#item3").val() === "grease") || ($("#item3").val() === "Dynamo") || ($("#item3").val() === "dynamo") || ($("#item3").val() === "Bottle Caps") || ($("#item3").val() === "bottle caps") || ($("#item3").val() === "Tractor Fan") || ($("#item3").val() === "tractor fan") || ($("#item3").val() === "Shock Absorber") || ($("#item3").val() === "shock absorber")) {

                if (($("#item4").val() === "Plastic") || ($("#item4").val() === "plastic") || ($("#item4").val() === "Bamboo") || ($("#item4").val() === "bamboo") || ($("#item4").val() === "Grease") || ($("#item4").val() === "grease") || ($("#item4").val() === "Dynamo") || ($("#item4").val() === "dynamo") || ($("#item4").val() === "Bottle Caps") || ($("#item4").val() === "bottle caps") || ($("#item4").val() === "Tractor Fan") || ($("#item4").val() === "tractor fan") || ($("#item4").val() === "Shock Absorber") || ($("#item4").val() === "shock absorber")) {

                    if (($("#item5").val() === "Plastic") || ($("#item5").val() === "plastic") || ($("#item5").val() === "Bamboo") || ($("#item5").val() === "bamboo") || ($("#item5").val() === "Grease") || ($("#item5").val() === "grease") || ($("#item5").val() === "Dynamo") || ($("#item5").val() === "dynamo") || ($("#item5").val() === "Bottle Caps") || ($("#item5").val() === "bottle caps") || ($("#item5").val() === "Tractor Fan") || ($("#item5").val() === "tractor fan") || ($("#item5").val() === "Shock Absorber") || ($("#item5").val() === "shock absorber")) {

                        if (($("#item6").val() === "Plastic") || ($("#item6").val() === "plastic") || ($("#item6").val() === "Bamboo") || ($("#item6").val() === "bamboo") || ($("#item6").val() === "Grease") || ($("#item6").val() === "grease") || ($("#item6").val() === "Dynamo") || ($("#item6").val() === "dynamo") || ($("#item6").val() === "Bottle Caps") || ($("#item6").val() === "bottle caps") || ($("#item6").val() === "Tractor Fan") || ($("#item6").val() === "tractor fan") || ($("#item6").val() === "Shock Absorber") || ($("#item6").val() === "shock absorber")) {

                            if (($("#item7").val() === "Plastic") || ($("#item7").val() === "plastic") || ($("#item7").val() === "Bamboo") || ($("#item7").val() === "bamboo") || ($("#item7").val() === "Grease") || ($("#item7").val() === "grease") || ($("#item7").val() === "Dynamo") || ($("#item7").val() === "dynamo") || ($("#item7").val() === "Bottle Caps") || ($("#item7").val() === "bottle caps") || ($("#item7").val() === "Tractor Fan") || ($("#item7").val() === "tractor fan") || ($("#item7").val() === "Shock Absorber") || ($("#item7").val() === "shock absorber")) {

                                window.location = "wind-dump.html"

                            } else { alert("Try Again!") }

                        } else { alert("Try Again!") }

                    } else { alert("Try Again!") }

                } else { alert("Try Again!") }

            } else { alert("Try Again!") }

        } else { alert("Try Again!") }

    } else { alert("Try Again!") }
})


