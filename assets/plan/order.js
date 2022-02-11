// const orders = document.querySelectorAll('order');
// const sidebar = document.querySelectorAll('side-bar ul li');

// window.addEventListener('hover', ()=>{
//     let current = '';

//     orders.forEach(order =>{
//         const orderTop = order.offsetTop;
//         const orderHeight = order.clientHeight;
//         if(pageXOffset >= (orderTop - orderHeight / 0.5)){
//             current = order.getAttribute(id);
//         }
//     })
//     sidebar.forEach(li => {
//         li.classList.remove('active');
//         if(li.classList.contains(current)){
//             li.classList.add('active')
//         }
//     })
// })


document.getElementById("open-popup").addEventListener("click", function(){
    document.getElementsByClassName("popup")[0].classList.add("active");
});
document.getElementById("dismiss-popup").addEventListener("click", function(){
    document.getElementsByClassName("popup")[0].classList.remove("active");
})