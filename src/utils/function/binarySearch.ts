// fungsi untuk mencari data pada array
// sort array terlebih dahulu

export function binarySearch(arr: any[], target: any) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return arr[mid]; // Elemen ditemukan, mengembalikan indeksnya
    } else if (arr[mid] < target) {
      left = mid + 1; // Cari di bagian kanan array
    } else {
      right = mid - 1; // Cari di bagian kiri array
    }
  }

  return 'data tidak ditemukan'; // Elemen tidak ditemukan
}
