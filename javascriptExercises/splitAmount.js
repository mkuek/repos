let tipCalc = (billAmount, LOS, numPeople) => {
  if (LOS == "good") {
    return console.log(
      `Tip amount:` +
        billAmount * 0.2 +
        ` Total amount:` +
        billAmount * 1.2 +
        ` Per person amount:` +
        (billAmount * 1.2) / numPeople
    );
  } else if (LOS == "fair") {
    return console.log(
      `Tip amount:` +
        billAmount * 0.15 +
        ` Total amount:` +
        billAmount * 1.15 +
        ` Per person amount:` +
        (billAmount * 1.15) / numPeople
    );
  } else {
    return console.log(
      `Tip amount:` +
        billAmount * 0.1 +
        ` Total amount:` +
        billAmount * 1.1 +
        ` Per person amount:` +
        (billAmount * 1.1) / numPeople
    );
  }
};
tipCalc(100, "good", 5);
tipCalc(40, "fair", 2);
