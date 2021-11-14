let tipCalc = (billAmount, LOS) => {
  if (LOS == "good") {
    return console.log(
      `Tip amount:` + billAmount * 0.2 + ` Total amount:` + billAmount * 1.2
    );
  } else if (LOS == "fair") {
    return console.log(
      `Tip amount:` + billAmount * 0.15 + ` Total amount:` + billAmount * 1.15
    );
  } else {
    return console.log(
      `Tip amount:` + billAmount * 0.1 + ` Total amount:` + billAmount * 1.1
    );
  }
};

tipCalc(100, "good");
tipCalc(40, "fair");
