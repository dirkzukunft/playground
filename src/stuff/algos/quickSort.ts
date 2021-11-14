export default function quickSort(list: number[], start = 0, end = list.length - 1): void {
  if (start >= end) return;
  const index = partition(list, start, end);

  quickSort(list, start, index - 1);
  quickSort(list, index, end);
}

function partition(list: number[], low: number, high: number) {
  const pivot = Math.floor((low + high) / 2);

  while (low <= high) {
    while (list[low] < list[pivot]) low++;
    while (list[high] > list[pivot]) high--;

    if (low <= high) {
      [list[low], list[high]] = [list[high], list[low]];
      low++;
      high--;
    }
  }
  return low;
}
