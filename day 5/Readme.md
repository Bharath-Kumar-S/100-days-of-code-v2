### 🔓 1. public

Default in TypeScript.

✔ Accessible everywhere:

inside the class\
outside the class

in subclasses

```
class Player {
  public name: string = "Bharath";
}

const p = new Player();
console.log(p.name); // ✅ allowed
```

If you don’t specify anything, it’s public.

### 🔒 2. private

Only accessible inside the same class.

❌ Not accessible outside\
❌ Not accessible in subclasses

```
class Player {
  private phone: bigint;

  constructor(phone: bigint) {
    this.phone = phone;
  }

  showPhone() {
    return this.phone; // ✅ allowed
  }
}

const p = new Player(123n);
p.phone;      // ❌ Error: private
p.showPhone() // ✅ OK
```


Used for internal data you don’t want to expose.

### 🟡 3. protected

Accessible:\
✔ inside the class\
✔ inside subclasses\
❌ NOT accessible outside

```
class Person {
  protected age = 30;
}

class Player extends Person {
  getAge() {
    return this.age; // ✅ allowed
  }
}

const p = new Player();
p.age; // ❌ Error: protected
```

Used when child classes need access but not the outside world.