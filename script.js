const slider = document.querySelector(".slider");

const sketch = document.querySelector(".sketch");

const value = document.querySelector(".value");

let color = "black";
let mode = "black";
let fade = 0.1;

const createGrid = () => {
    sketch.replaceChildren();
    
    const num = Number(slider.value);
    
    for (let i = 0; i < num*num; i++){
        const cube = document.createElement("div");
        cube.style.border = "1px solid rgb(62, 61, 61, 0.5)";
        cube.style.width = `${100/num}%`;
        cube.style.height = `${100/num}%`;
        
        let temp = 0;
        
        cube.addEventListener("mouseenter", () => {
            if(mode == "rainbow") cube.style.backgroundColor = randomColor();
            else if(mode == "fade") {temp += fade; cube.style.backgroundColor = `rgb(0,0,0, ${temp + fade})`;}
            else cube.style.backgroundColor = color;
        });

        sketch.appendChild(cube);
    }

    value.textContent = `${slider.value} x ${slider.value}`;
};
createGrid();

const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        let custom = e.target.className;
    
        if(custom == "clear") createGrid(); //clear
        else if(custom == "black") {color = "black"; mode = "black";} //set color to black
        else if(custom == "rainbow") mode = "rainbow"; //set mode to rainbow
        else if(custom == "fade") {color = `rgb(0,0,0, ${fade})`; mode = "fade";}
    })
});

slider.addEventListener("input", createGrid);