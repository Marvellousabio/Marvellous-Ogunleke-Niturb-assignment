function insertionSort(arr:number[]):number[]{
    const n= arr.length;
    for (let i=0; i<n; i++){
        let current= arr[i];
        let j=i-1;

        while (j>0 && arr[j]>current){
            arr[j+1]= arr[j];
            j--;
        }
        arr[j+1]=current;
    }
    return arr;
}

const arr=[12, 11, 13, 5, 6];
console.log("Sorted array:", insertionSort(arr));