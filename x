document.querySelector("#center").addEventListener("mousemove",
    throttleFunction((details) => {
        //your less repeatition code
        var div=document.createElement("div");
        div.classList.add('imagediv');
        div.style.left=details.clientX+'px';
        div.style.top=details.clientY+'px';

        var img=document.createElement("img");
        img.setAttribute("src",images[index]); //change the src value to the next image URL
        index++; //increment the index by one
        if (index == images.length) { //if the index reaches the end of the array
          index = 0; //reset it to zero
        }
        
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

https://our-revolution.com/
        //adding div
        document.body.appendChild(div);

        //removing div
        setTimeout(() => {
            div.remove();
        }, 2000);
    }, 500));
