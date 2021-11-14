// const a = [12, 8, 3, 9, 7, 4, 87, 0, -17, 33, 5];
// bubbleSort(a);
// console.log(a);

export default function bubbleSort(list: number[]): void {
  for (let fixed = 1; fixed < list.length; fixed++) {
    for (let i = 0; i < list.length - fixed; i++) {
      if (list[i] > list[i + 1]) [list[i], list[i + 1]] = [list[i + 1], list[i]];
    }
  }
}
