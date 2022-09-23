

/*  What is needed? 16X16 grid
    16 subdivs where 16 divs will exist
    then, for maindiv display:flex and direction column as we want 16 subdivs in column
    and for subdivs display:flex so that its container of 16 div are in row
    Nested loop will be required- first loop for controlling height and second loop for length
    height loop is equivalent to subdiv and length loop is equivalent to each div itself
    so, in height loop use, creatediv and give each div the same class, as they are symmetrical
    and in length loop as well, create div and give each div same class,......
*/


function grid(n){                 //n is for number of grids

    const select_structure16X16 = document.querySelector(".structure16X16");
    let widthPercentage = (((550-n-1)/n)*100);

    for(let height = 1; height <= n;height++){
        let heightElement = document.createElement("div");
        heightElement.style.height = `${550/n}px`;
        heightElement.style.width = `${550}px`;
        heightElement.classList.add("height");
        select_structure16X16.appendChild(heightElement);
        for(let width = 1; width <= n; width++){
            let gridElement = document.createElement("div");
            gridElement.style.width =`${widthPercentage}%`; 
            gridElement.style.height = `${100}%`;
            gridElement.classList.add("grid");                     //Is there a way to add a property in one line to all 'same css class'
            heightElement.appendChild(gridElement);
        }
    }
}

function userSelectionfornumberofGrids(){
    let slider = document.querySelector(".slider");
    slider.addEventListener("click",function(e){grid(e.target.value);});
}

function trail(){

    gridSelector = document.querySelectorAll(".grid");
    gridSelector.forEach(grid => {
        grid.addEventListener("mouseover",changeColor);
    });
}

function changeColor(e){
    const r = Math.floor(Math.random()*256); //Should use loop, OK OK
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    e.target.style.backgroundColor =`rgb(${r},${g},${b})`;
}

// grid();
// trail();
userSelectionfornumberofGrids();