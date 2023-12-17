function runCode() {
    const code = document.getElementById('code').value;
    const outputDiv = document.getElementById('output');
    
    try {
      // Assuming you're using eval for simplicity (not recommended in a real environment)
      const result = eval(code);
      outputDiv.innerHTML = `<p>Output:</p><pre>${result}</pre>`;
    } catch (error) {
      outputDiv.innerHTML = `<p>Error:</p><pre>${error}</pre>`;
    }
  }
  
  function submitAnswer() {
    const submittedCode = document.getElementById('code').value;
  
    // Replace this with your server-side logic to check the submitted code against expected output
    const expectedOutput = "Hello, World!";
    const isCorrect = evaluateCode(submittedCode) === expectedOutput;
  
    if (isCorrect) {
      alert("Congratulations! Your answer is correct.");
    } else {
      alert("Sorry, your answer is incorrect. Please try again.");
    }
  }
  
  function evaluateCode(code) {
    // Replace this with your own code evaluation logic
    try {
      return eval(code);
    } catch (error) {
      return 'Error: ${error.message}';
    }
  }