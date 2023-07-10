//clearScreen method
function clearScreen() {
    document.getElementById("display-box").value = "";
  }
  
  //display method
  function display(numberOrOperator) {
    document.getElementById("display-box").value += numberOrOperator;
  }
  
  //calculate method
  function calculate() {
    var valueDisplayed = document.getElementById("display-box").value;
    var expressionEvaluate = eval(valueDisplayed);
  
    document.getElementById("display-box").value = expressionEvaluate;
  }
  
  function calculatePercentage() {
    var valueDisplayed = document.getElementById("display-box").value;
    var expressionEvaluate = eval(valueDisplayed);
    expressionEvaluate /= 100;
  
    document.getElementById("display-box").value = expressionEvaluate;
  }