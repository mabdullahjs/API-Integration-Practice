// fetch('https://jsonplaceholder.typicode.com/todos')
// .then(response => response.json())
// .then((todoList)=>{
//     console.log(todoList);
// })




// fetch("https://jsonplaceholder.typicode.com/photos/")
//     .then(response => response.json())
//     .then((todos) => {
//         console.log(todos);
//         // makeUIElements(todos);
//         makeUIElementsWithReduce(todos);
//     })
let div = document.getElementById("div");

// function makeUIElementsWithReduce(todos) {
//     let element = todos.reduce((result, { url, title, thumbnailUrl }) => {
//         return result + `
//         <a href="${url}" target="_blank">
//             <figure>
//                 <img src="${thumbnailUrl}" alt="${title}" />
//                 <figcaption>${title}</figcaption>
//             </figure>
//         </a> <br />`;
//     }, "");

//     div.innerHTML = element;
// }






// function makeUIElementsWithReduce(todos) {
//     let element = todos.map((result)=>{
//         return  `
//         <a href="${result.url}" target="_blank">
//         <figure>
//             <img src="${result.thumbnailUrl}" alt="${result.title}">
//             <figcaption>${result.title}</figcaption>
//         </figure>
//     </a>
//         `
//     } , "")
//     div.innerHTML = element;
// }





fetch("https://api.publicapis.org/entries")
.then(resolve => resolve.json())
.then((response)=>{
    // console.log(response.entries);
    showEl(response.entries)
})
function showEl(animal){
    let element = animal.map(({Category , Description })=>{
        return `
        <h1>${Category}</h1>
        <p>${Description}</p>
        `
    })
    div.innerHTML = element;
}


// Category  Description


