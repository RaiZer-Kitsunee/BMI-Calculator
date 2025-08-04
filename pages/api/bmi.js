export default function handler(req, res) {
  if (req.method === "POST") {
    const { weight, height, unit } = req.body;

    // Basic validation
    if (!weight || !height || !unit || weight <= 0 || height <= 0) {
      return res.status(400).json({
        error: "Invalid input. Please provide weight, height, and unit.",
      });
    }

    let bmi;

    // Calculate based on unit system
    if (unit === "metric") {
      // Metric: kg / (m^2)
      const heightInMeters = height / 100;
      bmi = weight / (heightInMeters * heightInMeters);
    } else if (unit === "imperial") {
      // Imperial: (lbs / in^2) * 703
      const heightInInches = height / 2.54;
      const weightLbs = weight * 2.20462;
      // Imperial formula
      bmi = (weightLbs / (heightInInches * heightInInches)) * 703;
    } else {
      return res
        .status(400)
        .json({ error: 'Invalid unit. Must be "metric" or "imperial".' });
    }

    // Determine BMI category
    let category = "";
    category = getBMICategory(bmi);

    // Return the result
    return res.status(200).json({
      bmi: bmi.toFixed(1),
      category,
    });
  } else {
    // Reject non-POST requests
    return res.status(405).json({ error: "Only POST method is allowed" });
  }
}

function getBMICategory(bmi) {
  if (bmi < 16) {
    return "Severe Underweight";
  } else if (bmi >= 16 && bmi < 17) {
    return "Moderate Underweight";
  } else if (bmi >= 17 && bmi < 18.5) {
    return "Mild Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    return "Normal Weight";
  } else if (bmi >= 25 && bmi < 30) {
    return "Overweight";
  } else if (bmi >= 30 && bmi < 35) {
    return "Obese Class I";
  } else if (bmi >= 35 && bmi < 40) {
    return "Obese Class II";
  } else {
    return "Obese Class III";
  }
}
