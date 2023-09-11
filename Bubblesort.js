
let count = 0;

const timer = ms => new Promise(res => setTimeout(res, ms));



const bubbleSort = async arr => {
    let swapping = true;
    
    while (swapping){
        swapping = false;
        for (let i = 0; i < arr.length -1; i++){
            if(arr[i] > arr[i+1]){
                count++;
                swap(arr, i, i+1);
                swapping = true
                print(arr)
                await timer(75);
                
            }
        }
        
    }

    
    
}

const swap = (arr, indexOne, indexTwo) => {
    let temp = arr[indexOne];
    arr[indexOne] = arr[indexTwo];
    arr[indexTwo] = temp;

}

const createGrid = () => {
    let grid = [];

    for (let i = 0; i < 20; i++){
        grid.push(new Array(40).fill(" "));
    }
    
    return grid;

}

const randArray = () => {
    let array = [];
    for (let i = 0; i < 40; i++){
        array.push(Math.floor(Math.random() * 20));
    }
    return array;
}

const print = (arr) => {
    let grid = createGrid();
    let counter = 0;

    arr.forEach((v,index) => {
  
        for(let i = 19; i >= 0; i-- ){
            if(v !== counter){
                grid[i][index] = "O";
                counter++;
            } else {
                counter = 0;
                break;
                
            }
           
        }
    })

    console.clear();
    console.log(`${count} swaps so far...`)

    grid.forEach((row) => {
        console.log(row.join(" "))
    })
    
}


bubbleSort(randArray());

