class PrivateExample {
  private privateAttribute: string;

  constructor() {
    this.publicAttribute = "Public";
    this.privateAttribute = "Private";
  }

  publicAttribute: string;

  getPrivateAttribute(): string {
    return this.privateAttribute;
  }
}

const example = new PrivateExample();
console.log(example.publicAttribute); // Works: logs "Public"
console.log(example.getPrivateAttribute()); // Works: logs "Private"
// console.log(example.privateAttribute);  // Error: can't access private attribute from outside
