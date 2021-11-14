// const a = [12, 8, 3, 9, 7, 4, 87, 0, -17, 33, 5];
// console.log(mergeSort(a));

export default function mergeSort(list: number[]): number[] {
  if (list.length < 2) return list;

  const left = list.splice(0, list.length / 2);
  return merge(mergeSort(left), mergeSort(list));
}

function merge(l: number[], r: number[]): number[] {
  const newList: number[] = [];

  while (l.length && r.length) {
    if (l[0] < r[0]) {
      newList.push(l[0]);
      l.shift();
    } else {
      newList.push(r[0]);
      r.shift();
    }
  }
  return [...newList, ...l, ...r];
}
