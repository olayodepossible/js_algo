const quickSelect = (arr, num) => {
   if (k < 1 || k > arr.length) {
    return null;
  }

  const pivot = arr[randomInt(0, arr.length - 1)];
  const lower = new Array<number> [];
  const higher  = new Array<number> [];

  arr.forEach((num) => {
    if (num < pivot) {
      lower.push(num);
    } else if (num > pivot) {
      higher.push(num);
    }
  });

  if (k <= lower.length) {
    return quickSelect(lower, k);
  }

  if (k > arr.length - higher.length) {
    return quickSelect(higher, k - (arr.length - higher.length));
  }

  return pivot;
}