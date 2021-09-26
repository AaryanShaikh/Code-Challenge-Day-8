// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

// You need to consider the following ratings:

// Terrible: tip 0%
// Poor: tip 5%
// Good: tip 10%
// Great: tip 15%
// Excellent: tip 20%
// The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:


// Write the function to find the calculateTip obtained.
function calculateTip(amount, rating) {
  return (rating.toLowerCase() == "terrible") ? Math.round(amount / 100 * 0) : (rating.toLowerCase() == "poor") ? Math.round(amount / 100 * 5) : (rating.toLowerCase() == "good") ? Math.round(amount / 100 * 10) : (rating.toLowerCase() == "great") ? Math.round(amount / 100 * 15) : (rating.toLowerCase() == "excellent") ? Math.round(amount / 100 * 20) : "Rating not recognised";
}

//Use SpecRunner to check the Test Cases.