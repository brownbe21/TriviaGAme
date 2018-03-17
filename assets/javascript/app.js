function check(){
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var correct = 0;

        if (question1 == "Blue Whale"){
        correct++;
    }
        if (question2 == "George Washington"){
        correct++;
    }
        if (question3 == "U2"){
            correct++;
        }

    var messages = ["Great job!", "That's just okay", "You really need to do better"];

    var range;

        if (correct < 1) {
            range = 2;
        }

        if (correct > 0 && corect < 3) {
            score = 1;
        }

        if (correct > 2) {
            score = 0;
        }






document.getElementById("after_submit").style.visibility = "visible";

        document.getElementById("message").innerHTML = message[range];



document.getElementById("number_correct").innerHTML = "You got " + correct + "correct.";
}