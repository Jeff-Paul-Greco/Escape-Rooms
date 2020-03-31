
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

$(".windQ3").on("click", function (event) {
    event.preventDefault()
    if ($("#num1").val() === "7") {
        if ($("#num2").val() === "4") {
            if ($("#num3").val() === "9") {
                if ($("#num4").val() === "3") {

                    window.location = "wind-mill.html"

                } else { alert("Try Again!") }
            } else { alert("Try Again!") }
        } else { alert("Try Again!") }
    } else { alert("Try Again!") }

})

let q1 = 1;
let q2 = 1;
let q3 = 1;
let q4 = 1;
let q5 = 1;

$(".q1-control").on("click", function (event) {
    event.preventDefault()
    if (q1 === 1) {
        q1 = 2;
        $("#q1").text("But, between 2001 and 2006, drought and famine hit Malawi. Even maize withered and blew away.Limited to one tiny meal a day, the Kamkwambas starved...His family was desolate.If only he could help.")
    } else if (q1 === 2) {
        q1 = 3;
        $("#q1").text("During the rainy season, young William hunted for birds, using traps he fashioned from a hoe, a scarf, bicycle tires, bricks, his mother’s clothesline, and ropes made of blue gum tree bark. With his ingenuity and steady hand, William brought home meat.")
    } else if (q1 === 3) {
        q1 = 1;
        $("#q1").text("When William Kamkwamba was growing up in Masitala, a farming village of about 60 families in Malawi, the best day of the year was Christmas. Then, he, his parents, and his six sisters ate meat with their usual maize porridge and greens.")
    }
});

$(".q2-control").on("click", function (event) {
    event.preventDefault()
    if (q2 === 1) {
        q2 = 2;
        $("#q2").text("William headed to the library, a small room with three walls of books from America and electric lights. Although he knew little English, he figured out from diagrams how water wheels and electromagnets produce electricity; how batteries yield direct current; how magnets concocted from everyday objects make alternating current.")
    } else if (q2 === 2) {
        q2 = 3;
        $("#q2").text("A natural mechanic, William powered a radio by connecting one to the dynamo on a bicycle. While he pedaled, his cousin Geoffrey danced to African reggae music.")
    } else if (q2 === 3) {
        q2 = 1;
        $("#q2").text("“Of course, he thought. This is how spinning motion generates power!” William wrote in his book The Boy Who Harnessed the Wind. And power could provide lighting and move water from the stream to fields. Studying a book on energy, William realized wind could power pumps better than bicycling! All he needed to do was build a windmill.")
    }
});

$(".q3-control").on("click", function (event) {
    event.preventDefault()
    if (q3 === 1) {
        q3 = 2;
        $("#q3").text("William Kamkwamba identified a critical problem in his community, lack of public schooling, and used his resourcefulness to successfully lobby to get his government to designate more money for tuition scholarships, facility upgrades and maintenance, and staff raises.")
    } else if (q3 === 2) {
        q3 = 3;
        $("#q3").text("William Kamkwamba identified a critical problem in his community, the famine, and used his resourcefulness to successfully build a windmill that generated electricity for lighting homes, irrigating fields, and pumping water.")
    } else if (q3 === 3) {
        q3 = 1;
        $("#q3").text("William Kamkwamba identified a critical problem in his community, unfair price gouging during drought times, and used his resourcefulness to successfully campaign to start a community committee that helps to regulate the price of food resources during drought times.")
    }
});

$(".q4-control").on("click", function (event) {
    event.preventDefault()
    if (q4 === 1) {
        q4 = 2;
        $("#q4").text("This one required heavier materials—a tractor fan, shock absorber, vats of grease—which William scrounged from a scrap yard. Months later, he had finally collected all the pieces—except the dynamo he needed for a generator. Then, a friend, Gilbert Wimbe, son of Masitala’s chief, gave him 200 kwacha to buy one. The next day, he started connecting the parts.")
    } else if (q4 === 2) {
        q4 = 1;
        $("#q4").text("Students at his old school nearby called him a madman for digging in garbage")
    } 
});

$(".q5-control").on("click", function (event) {
    event.preventDefault()
    if (q5 === 1) {
        q5 = 2;
        $("#q5").text("With more hard work and help from donors, he finished high school and now gives speeches around the world and studies engineering at Dartmouth College.")
    } else if (q5 === 2) {
        q5 = 3;
        $("#q5").text("Through his organization, the Moving Windmills Project, William continues to work toward providing villages throughout Malawi with access to clean water and school and building supplies. Bryan Mealer, the co-author of The Boy Who Harnessed the Wind, says William’s message “really resonated with a lot of people.” Thanks to William’s windmill, change is in the air for the people of Malawi.")
    } else if (q5 === 3) {
        q5 = 1;
        $("#q5").text("TED is a non-profit organization devoted to “ideas worth spreading.”")
    }
});

$(".windQ1").on("click", function (event) {
    event.preventDefault()

    if ((q1 === 2) && (q2 === 1) && (q3 === 2) && (q4 === 2) && (q5 === 3)) {
        window.location = "wind-supplies.html"
    } else { alert("Try Again!") }

})

$(".windQ4").on("click", function (event) {
    event.preventDefault()

    if (($("#drop1").val() === "2") && ($("#drop2").val() === "1") && ($("#drop3").val() === "3") && ($("#drop4").val() === "3") && ($("#drop5").val() === "3") && ($("#drop6").val() === "1") && ($("#drop7").val() === "3") && ($("#drop8").val() === "2")) {
        window.location = "wind-pictures.html"
    } else { alert("Try Again!") }

})

$(".windQ5").on("click", function (event) {
    event.preventDefault()

    if ($("#puzzle").val() === "2715436") {
        window.location = "wind-test.html"
    } else { alert("Try Again!") }

})

$(".windQ6").on("click", function (event) {
    event.preventDefault()

    if (($("#red").val() === "6") && ($("#orange").val() === "3") && ($("#yellow").val() === "2") && ($("#green").val() === "7") && ($("#blue").val() === "1") && ($("#blue2").val() === "5") && ($("#purple").val() === "4")) {
        window.location = "wind-essays.html"
    } else { alert("Try Again!") }

})

let part1 = 0;
let part2 = 0;
let part3 = 0;
let part4 = 0;
let part5 = 0;
let part6 = 0;
let part7 = 0;

$("#part1").on("click", function (event) {
    event.preventDefault()
    if (part1 === 0) {
        part1 = 1;
        $("#part1").css("background-color", "rgb(249, 161, 32)") 
    } else if (part1 === 1) {
        part1 = 2;
        $("#part1").css("background-color", "rgb(83, 190, 151)")  
    } else if (part1 === 2) {
        part1 = 3;
        $("#part1").css("background-color", "rgb(82, 191, 237)")  
    } else if (part1 === 3) {
        part1 = 4;
        $("#part1").css("background-color", "rgb(237, 218, 32)")  
    } else if (part1 === 4) {
        part1 = 0;
        $("#part1").css("background-color", "inherit")  
    } 
})

$("#part2").on("click", function (event) {
    event.preventDefault()
    if (part2 === 0) {
        part2 = 1;
        $("#part2").css("background-color", "rgb(249, 161, 32)") 
    } else if (part2 === 1) {
        part2 = 2;
        $("#part2").css("background-color", "rgb(83, 190, 151)")  
    } else if (part2 === 2) {
        part2 = 3;
        $("#part2").css("background-color", "rgb(82, 191, 237)")  
    } else if (part2 === 3) {
        part2 = 4;
        $("#part2").css("background-color", "rgb(237, 218, 32)")  
    } else if (part2 === 4) {
        part2 = 0;
        $("#part2").css("background-color", "inherit")  
    } 
})

$("#part3").on("click", function (event) {
    event.preventDefault()
    if (part3 === 0) {
        part3 = 1;
        $("#part3").css("background-color", "rgb(249, 161, 32)") 
    } else if (part3 === 1) {
        part3 = 2;
        $("#part3").css("background-color", "rgb(83, 190, 151)")  
    } else if (part3 === 2) {
        part3 = 3;
        $("#part3").css("background-color", "rgb(82, 191, 237)")  
    } else if (part3 === 3) {
        part3 = 4;
        $("#part3").css("background-color", "rgb(237, 218, 32)")  
    } else if (part3 === 4) {
        part3 = 0;
        $("#part3").css("background-color", "inherit")  
    } 
})

$("#part4").on("click", function (event) {
    event.preventDefault()
    if (part4 === 0) {
        part4 = 1;
        $("#part4").css("background-color", "rgb(249, 161, 32)") 
    } else if (part4 === 1) {
        part4 = 2;
        $("#part4").css("background-color", "rgb(83, 190, 151)")  
    } else if (part4 === 2) {
        part4 = 3;
        $("#part4").css("background-color", "rgb(82, 191, 237)")  
    } else if (part4 === 3) {
        part4 = 4;
        $("#part4").css("background-color", "rgb(237, 218, 32)")  
    } else if (part4 === 4) {
        part4 = 0;
        $("#part4").css("background-color", "inherit")  
    } 
})

$("#part5").on("click", function (event) {
    event.preventDefault()
    if (part5 === 0) {
        part5 = 1;
        $("#part5").css("background-color", "rgb(249, 161, 32)") 
    } else if (part5 === 1) {
        part5 = 2;
        $("#part5").css("background-color", "rgb(83, 190, 151)")  
    } else if (part5 === 2) {
        part5 = 3;
        $("#part5").css("background-color", "rgb(82, 191, 237)")  
    } else if (part5 === 3) {
        part5 = 4;
        $("#part5").css("background-color", "rgb(237, 218, 32)")  
    } else if (part5 === 4) {
        part5 = 0;
        $("#part5").css("background-color", "inherit")  
    } 
})

$("#part6").on("click", function (event) {
    event.preventDefault()
    if (part6 === 0) {
        part6 = 1;
        $("#part6").css("background-color", "rgb(249, 161, 32)") 
    } else if (part6 === 1) {
        part6 = 2;
        $("#part6").css("background-color", "rgb(83, 190, 151)")  
    } else if (part6 === 2) {
        part6 = 3;
        $("#part6").css("background-color", "rgb(82, 191, 237)")  
    } else if (part6 === 3) {
        part6 = 4;
        $("#part6").css("background-color", "rgb(237, 218, 32)")  
    } else if (part6 === 4) {
        part6 = 0;
        $("#part6").css("background-color", "inherit")  
    } 
})

$("#part7").on("click", function (event) {
    event.preventDefault()
    if (part7 === 0) {
        part7 = 1;
        $("#part7").css("background-color", "rgb(249, 161, 32)") 
    } else if (part7 === 1) {
        part7 = 2;
        $("#part7").css("background-color", "rgb(83, 190, 151)")  
    } else if (part7 === 2) {
        part7 = 3;
        $("#part7").css("background-color", "rgb(82, 191, 237)")  
    } else if (part7 === 3) {
        part7 = 4;
        $("#part7").css("background-color", "rgb(237, 218, 32)")  
    } else if (part7 === 4) {
        part7 = 0;
        $("#part7").css("background-color", "inherit")  
    } 
})

$(".windQ7").on("click", function (event) {
    event.preventDefault()

    if ((part1 === 1) && (part2 === 2) && (part3 === 4) && (part4 === 3) && (part5 === 4) && (part6 === 3) && (part7 === 2)) {
        window.location = "wind-final-success.html"
    } else { alert("Try Again!") }

})

$(".finished").on("click", function (event) {
    event.preventDefault()
    let dataToSubmit = {
        name: $("#complete").val()
    }
    console.log(dataToSubmit)
    axios.post("/api/sendMail", dataToSubmit)
    alert("A message has been sent to Ms. Cowan!")
})