class Player {
  private name: string;
  protected score: number;

  constructor(name: string) {
    this.name = name;
    this.score = 0;
  }

  public getName(): string {
    return this.name;
  }

  public getScore(): number {
    return this.score;
  }

  public increaseScore(points: number): void {
    this.score += points;
  }
}

class AdvancedPlayer extends Player {
  private level: number;

  constructor(name: string, level: number) {
    super(name);
    this.level = level;
  }

  public getLevel(): number {
    return this.level;
  }

  public levelUp(): void {
    this.level += 1;
    this.increaseScore(100); // Increase score when leveling up
  }
}

const player1 = new Player("Alice");
player1.increaseScore(50);
console.log(`${player1.getName()} has a score of ${player1.getScore()}.`);

const advancedPlayer1 = new AdvancedPlayer("Bob", 1);
advancedPlayer1.levelUp();
console.log(
  `${advancedPlayer1.getName()} is at level ${advancedPlayer1.getLevel()} with a score of ${advancedPlayer1.getScore()}.`
);
