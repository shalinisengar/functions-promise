//callback hell

// function step1(fn){
//     setTimeout(()=>{
//         console.log('photo select ho gai');
//         fn('select');
//     },4000)
// }
// function step2(fn){
//     setTimeout(()=>{
//         console.log('filtered');
//         fn('filter')
//     },3000)
// }
// function step3(fn){
//     setTimeout(()=>{
//         console.log('captioned');
//         fn('caption')
//     },2000)
// }
// function step4(fn){
//     setTimeout(()=>{
//         console.log('post');
//         fn('posted')
//     },1000)
// }

// step1((data)=>{
//     console.log(data);
//     step2((data)=>{
//         console.log(data);
//         step3((caption)=>{
//             console.log(caption);
//             step4((post)=>{
//                 console.log(post);
//             })
//         })
//     })
// })

 //callback hell
//promise 
// let promise = new promise()

function step1(){
    return  new Promise((resolve,reject)=>{
           setTimeout(()=>{
            console.log('select');
            resolve('select')
           },1000)
    })
}
function step2(){
    return  new Promise((resolve,reject)=>{
           setTimeout(()=>{
            console.log('filter');
            resolve('filter')
           },3000)
    })
}
function step3(){
    return  new Promise((resolve,reject)=>{
           setTimeout(()=>{
            console.log('caption');
            resolve('caption')
           },2000)
    })
}
function step4(){
    return  new Promise((resolve,reject)=>{
           setTimeout(()=>{
            console.log('post');
            resolve('post')
           },1000)
    })
}



async function callback (){
 await step1()
 await step2()
 await step3()
 await step4()

}
callback()
// step1().then((data)=>{
//     console.log(data);
//     return step2()
// }).then((data)=>{
//     console.log(data);
//     return step3()
// }).then((data)=>{
   
//     console.log(data);
//      return step4()
// }).then((data)=>{
// console.log(data);
// })