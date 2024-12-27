export function isLeap(year: number): boolean {

  // a year that is divisible by 100 and also by 400 is a leap year
  if(year % 100 === 0 && year % 400 === 0) { return true };

  // but if it's not divisible by 400, it's not a leap year
  if(year % 100 === 0) { return  false }

  // a year that is divisible by 4 is a leap year
  if(year % 4 === 0) { return true };

  // if it didn't pass either of those conditions, it's not a leap year
  return false;
}
