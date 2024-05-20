// for loop
// let i ;
// for(i=0;i<=5;i++){
//     console.log(i);
// }

// while loop
// let j = 0;
// while(j<5){
//     console.log(j);
//     j++;
// }

// do while loop
// let y = 1;
// do{
//     console.log(y);
//     y++
// }while(y<5)


    // for in loop
    // const person = {name: "john", age: 30, city: "New-city"}
    // for(let key in person){
    //     console.log(key + ":" + person[key]);
    // }

    // for of loop
    // const arr = ['a','b','c','g']
    // for (let data of arr){
    //     switch (data) {
    //         case 'g':
    //             console.log('Correct Answer');

    //             break;

    //             default:
    //                 console.log('Game Over');
    //     }
    // }
    
// closure
    // function createCountFn(){
    //     let count = 0;
    //     return{
    //         increment: function(){
    //             count++;
    //             console.log(count);
    //         },
    //         decrement: function(){
    //             count--;
    //             console.log(count);
    //         },
    //         getCount: function(){
    //             return count;
    //         }
    //     }
    // }

    // // Counter Closure Function
    // document.addEventListener('DOMContentLoaded', (event)=>{
    //     const counter = createCountFn();

    //     const incBtn = document.getElementById('incBtn');
    //     const decBtn = document.getElementById('decBtn');
    //     const displayCount = document.getElementById('count')

    //     function updateDisplay(){
    //         displayCount.textContent = counter.getCount()
    //     };

    //     incBtn.addEventListener("click", ()=> {
    //         counter.increment();
    //         updateDisplay();
    //     })

    //     decBtn.addEventListener("click", ()=> {
    //         counter.decrement();
    //         updateDisplay();
    //     })

    //     // updateDisplay((1,2))
    // })

    // Add closure
    function addFn(){
        let a = 2;
        let b = 2;

        return{
            add: function(){
                sum = a+b;
                console.log(sum);
            },
            multiply: function(){
                multi = a*b;
                console.log(multi);
            }
        }
    }

    const fnc = addFn()
    fnc.add()
    fnc.multiply()