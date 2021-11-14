// console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 7));

export default function binarySearch(list: number[], search: number): number | string {
  let start = 0;
  let end = list.length;

  while (end - start > 1) {
    const mid = start + Math.floor((end - start) / 2);

    if (search < list[mid]) {
      end = mid;
    } else {
      start = mid;
    }
    console.log(start, end);
  }

  return search === list[start] ? start : 'Not found';
}
