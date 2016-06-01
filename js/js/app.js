$(document).ready(function() {

	var quiz = [
	{
		number: 1, 
		image: "http://www.tajmahal.org.uk/gifs/taj-mahal.jpeg",
		title: "Where is the Taj Mahal located?", 
		choices: ["Istanbul, Turkey", "Marrakesh, Morocco", "Agra, India", "Cairo, Egypt"
		],
		answer: 3,
		answertext: "The correct answer is Agra, India", 
		userAnswer: null
	},
	{
		number: 2, 
		image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Dean_Franklin_-_06.04.03_Mount_Rushmore_Monument_(by-sa)-3_new.jpg",
		title: "Where is Mount Rushmore located?", 
		choices: ["Bismark, North Dakota", "Keystone, South Dakota", "Billings, Montana", "Rapid City, South Dakota"
		],
		answer: 2,
		answertext: "The correct answer is Keystone, South Dakota", 
		userAnswer: null
	},
	{
		number: 3,
		image: "http://www.chinatourguide.com/china_photos/beijing/attractions/Beijing_Forbidden_City_taihe_palace.jpg", 
		title: "Where is the Forbidden City located?", 
		choices: ["Beijing, China", "Shanghai, China", "Hong Kong, China", "Guangzhou, China"
		],
		answer: 1,
		answertext: "The correct answer is Beijing, China", 
		userAnswer: null
	},
	{
		number: 4, 
		image: "http://static.thousandwonders.net/Christ.the.Redeemer.original.2544.jpg",
		title: "Where is Christ the Redeemer located?", 
		choices: ["Buenos Aires, Argentina", "La Paz, Bolivia", "Lima, Peru", "Rio de Janeiro, Brazil",
		],
		answer: 4, 
		answertext: "The correct answer is Rio de Janeiro, Brazil", 
		userAnswer: null
	},
	{
		number: 5,
		image: "http://www.funcage.com/blog/wp-content/uploads/2014/03/The-Acropolis.jpg", 
		title: "Where is Acropolis located?", 
		choices: ["Naples, Italy", "Barcelona, Spain", "Athens, Greece", "Budapest, Hungary"
		],
		answer: 3,
		answertext: "The correct answer is Athens, Greece", 
		userAnswer: null
	}
	];

	var currentQuestion = 1;
	var correctAnswers = 0;
	var totalQuestions = quiz.length;
	var questionIndex = 0;
	var correctText = "Correct!";
	var wrongText = "That's incorrect";
	
	$("#start").click(function() {
		$(".begintext").hide();
		$("#quiz").show();
		$("#Next").hide();
		$("#Submit").show();
		getQuestion();
	});

	function startGame() {
		currentQuestion = 1;
		correctAnswers = 0;
		questionIndex = 0;
		$("#quiz").show();
		$("#Next").hide();
		$("#Submit").show();
		$("#playagain").hide();
		$("#finalscore").hide();
		$('input:radio[name=value]').attr('checked',false);
		getQuestion();
	};
	function getQuestion() {
		$(".landmark").html('<img src="' + quiz[questionIndex].image + '"/>');	
		$("#question1").text(quiz[questionIndex].title);
		$("#option1").text(quiz[questionIndex].choices[0]);
		$("#option2").text(quiz[questionIndex].choices[1]);
		$("#option3").text(quiz[questionIndex].choices[2]);
		$("#option4").text(quiz[questionIndex].choices[3]);
	};

	$("#Submit").click(function() {	
		checkAnswer();
	});

	function checkAnswer() {
		var radioValue = false;
		var userChoice = document.getElementsByName('value');
		for (var i = 0; i < userChoice.length; i++) {
			if(userChoice[i].checked) {
				radioValue = userChoice[i].value;
			};
		};

		if (radioValue === false) {
			alert("Please pick an answer");

		}

		else if (radioValue == quiz[questionIndex].answer) {
			$("#correctlocation").html('<h2>' + correctText + '</h2>');
			$("#correctlocation").show();
			$("#Submit").hide()
			correctAnswers++;

		} else {
			$("#correctlocation").show()
			$("#correctlocation").text(quiz[questionIndex].answertext);
			$("#Submit").hide();

		};
		if (quiz[questionIndex].number == 5) {

			if (radioValue == quiz[questionIndex].answer) {
				$("#correctlocation").html('<h2>' + correctText + '</h2>');
				$("#correctlocation").show();

			} else {
				$("#correctlocation").show()
				$("#correctlocation").text(quiz[questionIndex].answertext);
			}

			$("#finalscore").text("Congrats! You got " + correctAnswers + " out of 5 correct!");
			
			$("#playagain").show();
			
			$("#Submit").hide();

		} else {
			$("#Next").show();
		};
	}; 

	$("#Next").click(function() {
		nextQuestion();
		$('input:radio[name=value]').attr('checked',false);
	});

	function nextQuestion() {
		$("#Next").hide();
		$("#Submit").show();
		$("#correctlocation").hide();
		currentQuestion++;
		questionIndex++;
		getQuestion();

	}; 

	$("#playagain").click(function() {
		$("#Submit").show();
		$("#Next").hide();
		$("#correctlocation").hide();
		startGame();	
	});
});




