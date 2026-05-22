const slider = document.querySelector(".slider");

const sketch = document.querySelector(".sketch");

const value = document.querySelector(".value");

const createGrid = () => {
    sketch.replaceChildren();

    const num = Number(slider.value);

    for (let i = 0; i < num*num; i++){
        const cube = document.createElement("div");
        cube.style.border = "1px solid rgb(62, 61, 61, 0.5)";
        cube.style.width = `${100/num}%`;
        cube.style.height = `${100/num}%`;

        cube.addEventListener("mouseenter", () => {
            cube.style.backgroundColor = "black";
        });

        sketch.appendChild(cube);
    }

    value.textContent = `${slider.value} x ${slider.value}`;
};
createGrid();

slider.addEventListener("input", createGrid);


