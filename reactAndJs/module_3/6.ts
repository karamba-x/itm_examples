class Store<T extends { id: string }> {
  private objects: Map<string, T> = new Map();

  addObject(object: T): void {
    this.objects.set(object.id, object);
  }

  removeObject(id: string): void {
    this.objects.delete(id);
  }

  getObject(id: string): T | undefined {
    return this.objects.get(id);
  }
}

interface User {
  id: string;
  name: string;
}

const userStore = new Store<User>();

const a: User = { id: "1", name: "Vasya" };
userStore.addObject(a);

const x = userStore.getObject("1");