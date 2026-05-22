const slider = document.querySelector(".slider");

const sketch = document.querySelector(".sketch");

const createGrid = () => {
    sketch.replaceChildren();

    const num = Number(slider.value);

    for (let i = 0; i < num*num; i++){
        const cube = document.createElement("div");
        cube.style.border = "1px solid black";
        cube.style.width = `${100/num}%`;
        cube.style.height = `${100/num}%`;

        sketch.appendChild(cube);
    }

};