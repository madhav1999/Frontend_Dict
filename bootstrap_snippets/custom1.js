// Get the code snippet from the input field and execute it
function executeCode() {
  const code = document.getElementById('codeInput').value;
  try {
    const result = eval(code);
    alert('Output:\n' + result);
  } catch (error) {
    alert('Error:\n' + error);
  }
}

// Add a click event listener to the execute button
document.getElementById('executeCode').addEventListener('click', executeCode);
