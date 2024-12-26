export const COLORS: string[] = [
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

  const firstTwoColors = colorBands.slice(0, 2);
  let resistorValue = firstTwoColors.map(valueOfColor.toString).join('');

  const thirdColor = colorBands[2];
  resistorValue += '0'.repeat(valueOfColor(thirdColor));

  console.log(`resistorValue: ${resistorValue}`);

  return "hi";
}

/* orange -> 3, black -> 0 */
function valueOfColor(color: string): number {
  return COLORS.indexOf(color);
}