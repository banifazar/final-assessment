function fibonacci(n) {
  if (n === 0) {
    return [0];
  } else if (n === 1) {
    return [0, 1];
  }

  const arr = fibonacci(n - 1);
  arr.push(arr[arr.length - 2] + arr[arr.length - 1]);

  return arr;
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
