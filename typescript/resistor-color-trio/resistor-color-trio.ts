const COLORS: string[] = [
"black",
"brown",
"red",
"orange",
"yellow",
"green",
"blue",
"violet",
"grey",
"white"
]

const PREFIXES: string[] = [
  "",
  "kilo",
  "mega",
  "giga"
]

export function decodedResistorValue(colorBands: string[]): string {

  // Calculate the numeric value of the resistor
  // ['red', 'black', 'red'] is [2, 0, 2]
  // (10 * 2) + (1 * 0) * (10 ^ 2) -> (200 + 0) * 100 -> 2000
  const firstColorDigit  = 10 *  valueOf(colorBands[0]);
  const secondColorDigit =  1 *  valueOf(colorBands[1]);
  const colorMagnitude   = 10 ** valueOf(colorBands[2]);
  let resistorValue = (firstColorDigit + secondColorDigit) * colorMagnitude;
  
  // Remove zeros three at a time and pick the appropriate prefix
  // (2000 / 1000) happens once. PREFIXES[1] is 'kilo'
  let colorPrefix = "";
  for (let i = 1; i <= 3 && resistorValue >= 1000; i++) {
    resistorValue /= 1000;
    colorPrefix = PREFIXES[i];
  }

  // Return the de-zero-ed resistor value and appropriate prefix
  return (`${resistorValue} ${colorPrefix}ohms`);
}

function valueOf(color: string): number {
  return COLORS.indexOf(color);
}