function finalScore(omr) {
  if (typeof omr !== "object") {
    return "Invalid";
  }
  if (Array.isArray(omr) == true) {
    return "Invalid";
  }
  if (
    !omr.hasOwnProperty("right") ||
    !omr.hasOwnProperty("wrong") ||
    !omr.hasOwnProperty("skip")
  ) {
    return "Invalid";
  }
  const sum = omr.right + omr.wrong + omr.skip;
  if (sum == 100) {
    const totalScore = omr.right * 1 + omr.wrong * -0.5 + omr.skip * 0;

    return Math.round(totalScore);
  }

  return "Invalid";
}

const output = finalScore({ right: 50, wrong: 10, skip: 40 });

console.log(output);
