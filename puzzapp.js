const puzzleData = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      correctAnswer: "Paris",
    },
    // Add more puzzles as needed
  ];
  
  let currentPuzzleIndex = 0;
  let points = 0;
  
  function loadPuzzle() {
    const puzzleContainer = document.getElementById("puzzleContainer");
    const puzzleQuestion = document.getElementById("puzzleQuestion");
    const optionsContainer = document.getElementById("optionsContainer");
  
    const currentPuzzle = puzzleData[currentPuzzleIndex];
    puzzleQuestion.textContent = currentPuzzle.question;
  
    optionsContainer.innerHTML = "";
    currentPuzzle.options.forEach((option, index) => {
      const optionElement = document.createElement("div");
      optionElement.classList.add("option");
      optionElement.textContent = option;
      optionElement.onclick = () => selectOption(index);
      optionsContainer.appendChild(optionElement);
    });
  }
  
  function selectOption(selectedIndex) {
    const options = document.querySelectorAll(".option");
    options.forEach((option, index) => {
      option.classList.remove("selected");
      if (index === selectedIndex) {
        option.classList.add("selected");
      }
    }
    );
  }
  
  function checkAnswer() {
    const selectedOption = document.querySelector(".option.selected");
    if (!selectedOption) {
      alert("Please select an option.");
      return;
    }
  
    const selectedOptionIndex = Array.from(selectedOption.parentNode.children).indexOf(selectedOption);
    const currentPuzzle = puzzleData[currentPuzzleIndex];
  
    if (currentPuzzle.correctAnswer === currentPuzzle.options[selectedOptionIndex]) {
      points += 10;
      document.getElementById("result").textContent = "Correct! You earned 10 points.";
    } else {
      document.getElementById("result").textContent = "Wrong! No points earned.";
    }
  
    document.getElementById("points").textContent = points;
  
    // Move to the next puzzle or end if there are no more puzzles
    currentPuzzleIndex++;
    if (currentPuzzleIndex < puzzleData.length) {
      loadPuzzle();
      document.getElementById("result").textContent = "";
    } else {
      puzzleContainer.innerHTML = "<h3>No more puzzles for today. Come back tomorrow!</h3>";
    }
  }
  
  // Load the first puzzle on page load
  loadPuzzle();