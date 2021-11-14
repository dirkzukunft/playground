export default function arrayMove(array: unknown[], posFrom: number, posTo: number): void {
  const originalValue = array[posFrom];

  if (posFrom < posTo) {
    for (let i = posFrom; i < posTo; i++) {
      array[i] = array[i + 1];
    }
  } else if (posFrom > posTo) {
    for (let i = posFrom; i > posTo; i--) {
      array[i] = array[i - 1];
    }
  }
  array[posTo] = originalValue;
}
