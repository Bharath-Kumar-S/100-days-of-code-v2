class Developer {
  private name: string;
  protected experience: number;
  public language: string;

  constructor(name: string, experience: number, language: string) {
    this.name = name;
    this.experience = experience;
    this.language = language;
  }

  public getDetails(): string {
    return `Name: ${this.name}, Experience: ${this.experience} years, Language: ${this.language}`;
  }
}

class FrontendDeveloper extends Developer {
  constructor(name: string, experience: number, language: string) {
    super(name, experience, language);
  }

  public getExperience(): number {
    return this.experience; // Accessing protected member
  }
}

const dev = new Developer("Alice", 5, "TypeScript");
console.log(dev.getDetails());

const frontEndDev = new FrontendDeveloper("Bob", 3, "JavaScript");
console.log(frontEndDev.getDetails());
console.log(
  `Frontend Developer Experience: ${frontEndDev.getExperience()} years`
);
