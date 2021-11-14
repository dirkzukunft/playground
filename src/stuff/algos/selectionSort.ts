import arrayMove from './arrayMove';

// const a = [12, 8, 3, 9, 7, 4, 87, 0, -17, 33, 5];
// selectionSort(a);
// console.log(a);

export default function selectionSort(unsortedList: number[]): void {
  unsortedList.forEach((_value, index, list) => {
    let min = list[index];
    let minPos = index;

    for (let i = index + 1; i < list.length; i++) {
      if (list[i] < min) {
        min = list[i];
        minPos = i;
      }
    }

    arrayMove(list, minPos, index);
  });
}
