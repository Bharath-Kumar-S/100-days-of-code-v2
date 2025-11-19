class Player {
  name: string;
  phone: bigint;

  constructor(name: string, phone: bigint) {
    this.name = name;
    this.phone = phone;
  }

  getDetails(): string {
    return `Name: ${this.name}, Phone: ${this.phone.toString()}`;
  }

  updatePhone(newPhone: bigint): void {
    this.phone = newPhone;
  }

  getPhone(): string {
    return this.phone.toString();
  }

  static fromString(name: string, phone: string): Player {
    return new Player(name, BigInt(phone));
  }
}

const john = Player.fromString("John", "9003045843");
const kenny = new Player("Kenny", 9003045843n);

console.log(john.getDetails());
console.log(john.getPhone());

john.updatePhone(BigInt(45452345345));
console.log(john.getPhone());

console.log(kenny.getDetails());
console.log(kenny.getPhone());

kenny.updatePhone(BigInt(9003045843));
console.log(kenny.getPhone());
