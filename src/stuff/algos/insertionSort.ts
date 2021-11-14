// console.log(insertionSort([12, 8, 3, 9, 7, 4, 87, 0, -17, 33, 5]));

export default function insertionSort(unsortedList: number[]): number[] {
  const newList: number[] = [];

  while (unsortedList.length > 0) {
    let min = unsortedList[0];
    let minPos = 0;

    unsortedList.forEach((value, index) => {
      if (value < min) {
        min = value;
        minPos = index;
      }
    });

    newList.push(min);
    unsortedList.splice(minPos, 1);
  }
  return newList;
}

// export default function insertionSort(unsortedList: number[]): number[] {
//   const newList: number[] = [];

//   unsortedList.forEach((value) => {
//     newList.unshift(value);
//     for (let i = 1; i < newList.length; i++) {
//       if (value < newList[i]) {
//         arrayMove(newList, 0, i - 1);
//         break;
//       }
//     }
//   });

//   return newList;
// }
