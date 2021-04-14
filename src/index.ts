class Sorter {
  constructor(public collection: number[]) {}

  sorter(): void {
    // const length = this.collection.length;
    const { length } = this.collection;
  }
}

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sorter();
console.log(sorter.collection);
