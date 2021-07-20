

document.getElementById("form").addEventListener("submit",function(event){
    event.preventDefault()
    if(inp1.value &&inp2.value&&inp3.value&&inp4.value&&inp5.value ){
        alert(`Our team will get back to you shortly-
               Name-${inp1.value}
               Contact-${inp2.value}
        `);
    }
    else {
        alert("Please fill all details");
    }
})
// const btn=document.getElementById("book");
// btn.addEventListener("click",function(){
//     if(inp1.value &&inp2.value&&inp3.value&&inp4.value&&inp5.value ){
//         alert("Our team will get back to you shortly");
//     }
//     else {
//         alert("Please fill all details");
//     }
// })
const inp1=document.getElementById("inp1");
const inp2=document.getElementById("inp2");
const inp3=document.getElementById("inp3");
const inp4=document.getElementById("inp4");
const inp5=document.getElementById("inp5");
