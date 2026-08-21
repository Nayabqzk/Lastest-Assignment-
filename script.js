const questions = [
                                        // HTML QUESTIONS
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Tool Multi Language",
            "Home Text Markup Language"
        ],
        answer: 0
    },
    {
        question: "Which tag is used to create a paragraph?",
        options: [
            "<p>",
            "<h1>",
            "<br>",
            "<para>"
        ],
        answer: 0
    },
    {
        question: "Which tag is used to create a hyperlink?",
        options: [
            "<link>",
            "<a>",
            "<href>",
            "<url>"
        ],
        answer: 1
    },
    {
        question: "Which attribute specifies an image source?",
        options: [
            "href",
            "src",
            "link",
            "source"
        ],
        answer: 1
    },
    {
        question: "Which HTML element is used to create a form?",
        options: [
            "<form>",
            "<input>",
            "<fieldset>",
            "<submit>"
        ],
        answer: 0
    },
    {
        question: "Which input type is used for email?",
        options: [
            "text",
            "mail",
            "email",
            "message"
        ],
        answer: 2
    },
    {
        question: "Which tag represents the largest heading?",
        options: [
            "<h6>",
            "<heading>",
            "<h1>",
            "<head>"
        ],
        answer: 2
    },
    {
        question: "Which tag is used to add an image in HTML?",
    options: [
        "<image>",
        "<img>",
        "<picture>",
        "<src>"
       ],
       answer: 1
    },
    // CSS QUESTIONS
    {
        question: "What does CSS stand for?",
        options: [
            "Computer Style Sheets",
            "Cascading Style Sheets",
            "Creative Style System",
            "Colorful Style Sheets"
        ],
        answer: 1
    },
    {
        question: "Which property changes text color?",
        options: [
            "font-color",
            "text-color",
            "color",
            "text-style"
        ],
        answer: 2
    },
    {
        question: "Which property changes the background color?",
        options: [
            "bgcolor",
            "background-color",
            "color-background",
            "background"
        ],
        answer: 1
    },
    {
        question: "Which CSS property makes an element a flex container?",
        options: [
            "position: flex",
            "display: flex",
            "flex: display",
            "display: box"
        ],
        answer: 1
    },
    {
        question: "Which property controls the space inside an element?",
        options: [
            "margin",
            "padding",
            "border",
            "spacing"
        ],
        answer: 1
    },
    {
        question: "Which property controls the space outside an element?",
        options: [
            "padding",
            "margin",
            "border",
            "outside"
        ],
        answer: 1
    },
    {
        question: "Which symbol is used for an ID selector?",
        options: [
            ".",
            "#",
            "*",
            "@"
        ],
        answer: 1
    },
    {
        question: "Which symbol is used for a class selector?",
        options: [
            "#",
            ".",
            "*",
            "$"
        ],
        answer: 1
    },
    // JAVASCRIPT QUESTIONS
    {
        question: "Which keyword can declare a variable in JavaScript?",
        options: [
            "variable",
            "var",
            "integer",
            "string"
        ],
        answer: 1
    },
    {
        question: "Which keyword creates a block-scoped variable?",
        options: [
            "let",
            "varonly",
            "variable",
            "define"
        ],
        answer: 0
    },
    {
        question: "Which data type represents true or false?",
        options: [
            "String",
            "Number",
            "Boolean",
            "Array"
        ],
        answer: 2
    },
    {
        question: "Which symbol is used for a single-line comment?",
        options: [
            "/* */",
            "//",
            "<!-- -->",
            "#"
        ],
        answer: 1
    },
    {
        question: "Which method adds an item to the end of an array?",
        options: [
            "push()",
            "add()",
            "insert()",
            "append()"
        ],
        answer: 0
    },
    {
        question: "Which loop is commonly used to iterate through an array?",
        options: [
            "for",
            "repeat",
            "looping",
            "iterate"
        ],
        answer: 0
    },
    {
        question: "Which method selects an HTML element by its ID?",
        options: [
            "getElementById()",
            "selectId()",
            "getId()",
            "findId()"
        ],
        answer: 0
    },
    {
        question: "Which event occurs when a button is clicked?",
        options: [
            "onpress",
            "onclick",
            "onbutton",
            "clicking"
        ],
        answer: 1
    },
    {
        question: "Which browser storage method stores data as key-value pairs?",
        options: [
            "session",
            "localStorage",
            "browserData",
            "webMemory"
        ],
        answer: 1
    }
];
//signup
function signup() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    if (name === "" || email === "" || password === "") {
        Swal.fire({
            icon: "warning",
            title: "Missing Information",
            text: "Please fill all fields."
        });
        return;
    }
    let user = {
        name: name,
        email: email,
        password: password
    };
    localStorage.setItem("user", JSON.stringify(user));
    Swal.fire({
        icon: "success",
        title: "Signup Successful!",
        text: "Your account has been created successfully."
    }).then(() => {
        window.location.href = "index.html";
    });
}
//login
function login() {
    let email = document.getElementById("loginEmail").value.trim();
    let password = document.getElementById("loginPassword").value;
    let user = JSON.parse(localStorage.getItem("user"));
    if (
        user &&
        email === user.email &&
        password === user.password
    ) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        Swal.fire({
            icon: "success",
            title: "Login Successful!",
            text: "Welcome back!",
            timer: 1500,
            showConfirmButton: false
        }).then(() => {
            window.location.href = "home.html";
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Login Failed!",
            text: "Invalid email or password!"
        });
    }
}
// START QUIZ
function startQuiz() {
    localStorage.setItem("score", "0");
    window.location.href = "quiz.html";
}
//quizstarting
let currentQuestion = 0;
let score = 0;
let time = 30;
let timer;
//questionloading
function loadQuestion() {
    if (!document.getElementById("question")) {
        return;
    }

    clearInterval(timer);
    time = 30;

    document.getElementById("timer").innerText = time;

    document.getElementById("questionNumber").innerText =
        `Question ${currentQuestion + 1} / ${questions.length}`;

    document.getElementById("question").innerText =
        questions[currentQuestion].question;

    let optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    document.getElementById("nextBtn").disabled = true;

    questions[currentQuestion].options.forEach((option, index) => {
        let button = document.createElement("button");

        button.className = "option";
        button.innerText = option;

        button.onclick = function () {
            selectAnswer(index, button);
        };

        optionsDiv.appendChild(button);
    });

    startTimer();
}
//answerselection
function selectAnswer(index, selectedButton) {
    let options = document.querySelectorAll(".option");
    options.forEach(button => {
        button.disabled = true;
    });
    selectedButton.classList.add("selected");
    if (index === questions[currentQuestion].answer) {
        score++;
    }
    document.getElementById("nextBtn").disabled = false;
    clearInterval(timer);
}
//timersetting
function startTimer() {
    timer = setInterval(function () {
        time--;
        document.getElementById("timer").innerText = time;
        if (time <= 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}
//nextquestion
function nextQuestion() {
    clearInterval(timer);
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        localStorage.setItem("score", score);
        let percentage =
            Math.round((score / questions.length) * 100);
        localStorage.setItem("percentage", percentage);
        window.location.href = "result.html";
    }
}
//resultpage
function loadResult() {
    if (!document.getElementById("score")) {
        return;
    }
    let finalScore = localStorage.getItem("score") || 0;

    let percentage =
        localStorage.getItem("percentage") || 0;

    document.getElementById("score").innerText =
        `${finalScore} / ${questions.length}`;

    document.getElementById("percentage").innerText =
        `${percentage}%`;
}
//result
if (document.getElementById("question")) {
    loadQuestion();
}
if (document.getElementById("score")) {
    loadResult();
}
function togglePassword() {
    let passwordInput = document.getElementById("password");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}
function toggleLoginPassword() {
    let passwordInput = document.getElementById("loginPassword");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}