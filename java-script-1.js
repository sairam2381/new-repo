
//sync example
// console.log("Start");
// for(let i=0;i<1000000000;i++)
// {
//     console.log("Looping");
// }
// console.log("Exit");



// console.log("Start");
// setTimeout(()=>{
//     console.log("Set timeout");
// },5000);
// console.log("End");



async function fetchData(){
    let response=await fetch("https://jsonplaceholder.typicode.com/users");
    let res=await response.json();
    console.log("User:",res);
}

fetchData();


async function fetchData(){
    let response=await axios.get("https://jsonplaceholder.typicode.com/users");
    // let res=await response.json();
    console.log("User:",response.data);
}

fetchData();