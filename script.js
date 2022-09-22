

/*  What is needed? 16X16 grid
    16 subdivs where 16 divs will exist
    then, for maindiv display:flex and direction column as we want 16 subdivs in column
    and for subdivs display:flex so that its container of 16 div are in row
    Nested loop will be required- first loop for controlling height and second loop for length
    height loop is equivalent to subdiv and length loop is equivalent to each div itself
    so, in height loop use, creatediv and give each div the same class, as they are symmetrical
    and in length loop as well, create div and give each div same class,......
*/




const select_structure16X16 = document.querySelector(".structure16X16");

for(let height=1; height<=16;height++){
    let heightElement = document.createElement("div");
    heightElement.classList.add("height");
    select_structure16X16.appendChild(heightElement);
    for(let width=1;width<=16;width++){
        let gridElement = document.createElement("div");
        gridElement.classList.add("grid");
        heightElement.appendChild(gridElement);
    }
}

