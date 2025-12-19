//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class LinkedList {
  List = [];
  push() {
    return this.List.push(...arguments);
  }

  pop() {
    return this.List.pop(...arguments);
  }

  shift() {
    return this.List.shift(...arguments);
  }

  unshift() {
    return this.List.unshift(...arguments);
  }

  delete() {
    if (this.List.includes(...arguments)) {
      this.List.splice(this.List.indexOf(...arguments), 1);
    }
    return this.List;
  }

  count() {
    return this.List.length;
  }
}
