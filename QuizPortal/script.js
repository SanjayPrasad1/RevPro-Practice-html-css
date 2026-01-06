let isLogin = true;
let currentQuestion = 0;
let scoreCount = 0;
let timeLeft = 30;
let intervalId;

const questions = [
  { q: "HTML stands for?", options: ["Hyper Text Markup Language","High Text Machine Language","Hyperlinks Text Mark"], answer: 0 },
  { q: "Which tag is used for CSS?", options: ["<css>","<style>","<script>"], answer: 1 },
  { q: "Which property sets text color?", options: ["color","font-color","text-style"], answer: 0 },
  { q: "Which tag creates a link?", options: ["<a>","<link>","<href>"], answer: 0 },
  { q: "Which is a semantic tag?", options: ["<div>","<span>","<article>"], answer: 2 },
  { q: "CSS stands for?", options: ["Color Style Sheet","Cascading Style Sheets","Creative Style System"], answer: 1 },
  { q: "Which unit is responsive?", options: ["px","em","cm"], answer: 1 },
  { q: "Which tag is for images?", options: ["<img>","<image>","<pic>"], answer: 0 },
  { q: "Which attribute is for CSS class?", options: ["class","id","style"], answer: 0 },
  { q: "Which tag makes text bold?", options: ["<b>","<strong>","Both"], answer: 2 }
];

function toggleAuth() {
  isLogin = !isLogin;
  authTitle.innerText = isLogin ? "Login" : "Register";
  toggle.innerText = isLogin
    ? "Don't have an account? Register"
    : "Already have an account? Login";
}

function login() {
  if (!username.value || !password.value) return alert("Fill all fields");

  if (!isLogin) {
    localStorage.setItem(username.value, password.value);
    alert("Registered Successfully");
    toggleAuth();
    return;
  }

  if (localStorage.getItem(username.value) === password.value) {
    auth.classList.add("hidden");
    quiz.classList.remove("hidden");
    loadQuestion();
  } else {
    alert("Invalid Login");
  }
}

function loadQuestion() {
  clearInterval(intervalId);
  timeLeft = 30;
  updateTimer();

  intervalId = setInterval(startTimer, 1000);

  nextBtn.disabled = true;
  let q = questions[currentQuestion];
  question.innerText = q.q;
  options.innerHTML = "";

  updateProgress();

  q.options.forEach((opt, i) => {
    let btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(btn, i);
    options.appendChild(btn);
  });
}

function startTimer() {
  timeLeft--;
  updateTimer();

  if (timeLeft <= 0) {
    clearInterval(intervalId);
    nextQuestion();
  }
}

function updateTimer() {
  document.getElementById("timer").innerText = `⏱ ${timeLeft}`;
}

function checkAnswer(btn, index) {
  clearInterval(intervalId);
  nextBtn.disabled = false;

  let correctIndex = questions[currentQuestion].answer;
  let buttons = document.querySelectorAll(".options button");

  buttons.forEach(b => b.disabled = true);

  if (index === correctIndex) {
    btn.classList.add("correct");
    scoreCount++;
  } else {
    btn.classList.add("wrong");
    buttons[correctIndex].classList.add("correct");
  }
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    endQuiz();
  }
}

function updateProgress() {
  let percent = Math.round((currentQuestion / questions.length) * 100);
  progress.style.width = percent + "%";
  progressText.innerText = percent + "% Completed";
}

function endQuiz() {
  clearInterval(intervalId);
  quiz.classList.add("hidden");
  result.classList.remove("hidden");

  document.getElementById("score").innerText =
    `You scored ${scoreCount} out of ${questions.length}`;
}

function restart() {
  currentQuestion = 0;
  scoreCount = 0;
  result.classList.add("hidden");
  quiz.classList.remove("hidden");
  loadQuestion();
}
