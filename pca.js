let count = 0
function increment() {
    count = count + 1
    document.getElementById("count-value").textContent = count
}
function save(){
    countdata = count + " - "
    document.getElementById("previous-data").textContent += countdata
    document.getElementById("count-value").textContent = 0
    count = 0

}
function decrement(){
    if(count>0){
        count = count-1
        document.getElementById("count-value").textContent = count
    }
}