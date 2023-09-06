export class Robot {
  private _name: string
  public static reservedNames: Set<string>

  constructor() {
    Robot.reservedNames = new Set()
    this._name = this.generateName()
  }

  generateName(): string {
    let randomName: string;
    randomName = this.randomName()
    return randomName;
  }

  randomName(): string {
    let name = '';
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let numbers = '0123456789';
    for (let i = 0; i < 2; i++) {
      name += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    for (let i = 0; i < 3; i++) {
      name += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
    if (Robot.reservedNames.has(name)) {
      return this.randomName();
    }
    Robot.reservedNames.add(name);
    return name;      
  }

  public get name(): string {
    return this._name
  }

  public resetName(): void {
    this._name = this.generateName()
  }

  public static releaseNames(): void {
    // TODO
  }
}
