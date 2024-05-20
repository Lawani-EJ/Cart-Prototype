// Add to cart closure
function addToCart() {
    let counter = 0;
    return{
        increment: function(){
            counter++;
            console.log(counter);
        },
        decrement: function(){
            counter--;
            console.log(counter);
        },
        getCounter: function (){
            return counter;
        }
    }
}

document.addEventListener("DOMContentLoaded", (event)=>{
    const Begincounting = addToCart();
    const addBtn = document.getElementById("addCart");
    const removeBtn = document.getElementById("removeCart");
    const displayCount = document.getElementById("count_number"); 

    function updateDisplay(){
        displayCount.innerHTML = Begincounting.getCounter();
    }

    addBtn.addEventListener("click", ()=>{
        Begincounting.increment();
        updateDisplay();
        alert("Added to Cart");
    })

    removeBtn.addEventListener("click", ()=>{
        Begincounting.decrement();
        updateDisplay();
        alert("Removed From Cart");
    })
})