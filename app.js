

function parsePositiveNumber(value) {
  const n = Number(value);
  if (!Number.isFinite(n) || n <= 0) return null;
  return n;
}

function bmiCategory(bmi) {
  if (bmi < 16.0) return "Severely Underweight";
  if (bmi <= 18.4) return "Underweight";
  if (bmi <= 24.9) return "Normal";
  if (bmi <= 29.9) return "Overweight";
  if (bmi <= 34.9) return "Moderately Obese";
  if (bmi <= 39.9) return "Severely Obese";
  return "Morbidly Obese";
}

const heightInput = prompt("enter your height in inches:");
const heightIn = parsePositiveNumber(heightInput);

if (heightIn === null) {
  alert("Invalid height. Please enter a positive number (in inches).");
} else {
  const weightInput = prompt("enter your weight in lbs:");
  const weightLb = parsePositiveNumber(weightInput);

  if (weightLb === null) {
    alert("Invalid weight. Please enter a positive number (in pounds).");
  } else {
    const bmi = (weightLb * 703) / (heightIn * heightIn);
    const category = bmiCategory(bmi);

    alert(`Your BMI of ${bmi} makes you ${category}`);
    console.log(`Your BMI of ${bmi} makes you ${category}`);
  }
}
