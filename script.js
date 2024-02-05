// Throttling Function
const throttleFunction = (func, delay) => {

    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}
document.querySelector("#center").addEventListener("mousemove",
    throttleFunction((details) => {
        //your less repeatition code
        var div=document.createElement("div");
        div.classList.add('imagediv');
        div.style.left=details.clientX+'px';
        div.style.top=details.clientY+'px';

        var img=document.createElement("img");
        img.setAttribute("src","https://images.unsplash.com/photo-1434873740857-1bc5653afda8?q=80&w=2189&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
        
        div.appendChild(img);

       // Initial state (image starts at y: 0)
gsap.to('img', {
    y: "0",
    duration: 0.6,
    ease: Power2.easeOut 
});

// Transition state (image goes to y: 100%)
gsap.to('img', {
    y: '100%',
    duration: 0.6,
    ease: Power2.easeIn, 
    delay: 0.6, 
    stagger: 0.1 
});


        //adding div
        document.body.appendChild(div);

        //removing div
        setTimeout(() => {
            div.remove();
        }, 2000);
    }, 500));