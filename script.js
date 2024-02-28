document.addEventListener('DOMContentLoaded', function() {

const colors = [
    '#FF5733', '#33FF57', '#5733FF', '#FF33A1', '#33B5FF',
    '#FFD333', '#3363FF', '#FF3333', '#33FFC3', '#8A33FF',
    '#FFC333', '#3378FF', '#EA33FF', '#33FFA9', '#FF333A',
    '#33FF6C', '#F233FF', '#FF8533', '#3385FF', '#FF33D1',
    '#33FF45', '#FF3361', '#33E5FF', '#FF5733', '#33FF57',
    '#5733FF', '#FF33A1', '#33B5FF', '#FFD333', '#3363FF',
    '#FF3333', '#33FFC3', '#8A33FF', '#FFC333', '#3378FF',
    '#EA33FF', '#33FFA9', '#FF333A', '#33FF6C', '#F233FF',
    '#FF8533', '#3385FF', '#FF33D1', '#33FF45', '#FF3361',
    '#33E5FF', '#FF5733', '#33FF57', '#5733FF', '#FF33A1',
    '#33B5FF', '#FFD333', '#3363FF', '#FF3333', '#33FFC3',
    '#8A33FF', '#FFC333', '#3378FF', '#EA33FF', '#33FFA9',
    '#FF333A', '#33FF6C', '#F233FF', '#FF8533', '#3385FF',
    '#FF33D1', '#33FF45', '#FF3361', '#33E5FF', '#FF5733',
    '#33FF57', '#5733FF', '#FF33A1', '#33B5FF', '#FFD333',
    '#3363FF', '#FF3333', '#33FFC3', '#8A33FF', '#FFC333',
    '#3378FF', '#EA33FF', '#33FFA9', '#FF333A', '#33FF6C',
    '#F233FF', '#FF8533', '#3385FF', '#FF33D1', '#33FF45',
    '#FF3361', '#33E5FF', '#FF5733', '#33FF57', '#5733FF'
];

let note = document.createElement('p')
note.textContent = 'Press "Basic" or "Rainbow" to start drawing'
this.body.appendChild(note)

let gridContain = document.createElement('div')
gridContain.classList.add('container')
document.body.appendChild(gridContain)

let basicColor = document.createElement('button')
basicColor.textContent = 'Basic'
basicColor.classList.add('basiccolor')
this.body.appendChild(basicColor)

let rainbow = document.createElement('button')
rainbow.classList.add('rainbow')
rainbow.textContent = 'Rainbow Color'
this.body.appendChild(rainbow)

let erase = document.createElement('button')
erase.textContent = 'Eraser'
erase.classList.add('erase')
this.body.appendChild(erase)

let reset = document.createElement('button')
reset.textContent = "Reset"
reset.classList.add('reset')
this.body.appendChild(reset)

let gridSize = document.createElement('button')
gridSize.classList.add('gridsize')
gridSize.textContent = 'Create Grid'
this.body.appendChild(gridSize)

let numberOfSquares;

gridSize.addEventListener('click', function() {
    gridSize.value = 'on'
    numberOfSquares = +prompt('Enter Grid Size')
    let containerSize = 525
    gridResized = ((containerSize / numberOfSquares))


for (let i = 0; i<numberOfSquares; i++) {
    for (let j = 0; j < numberOfSquares; j++) {

    let grid = document.createElement('div')
    grid.classList.add('grid')
    grid.style.backgroundColor = '#d3d3d3'
    grid.style.width = gridResized + 'px'
    grid.style.height = gridResized + 'px'
    gridContain.appendChild(grid)

    if (gridSize.value === 'on') {
        gridSize.addEventListener('click', function() {
            grid.style.width = '0px'
            grid.style.height = '0px'
        })
    }


    reset.addEventListener('click', function() {
        grid.style.backgroundColor = '#d3d3d3'
    })

    basicColor.addEventListener('click', function() {
        basicColor.value = 'on'
        if (basicColor.value === 'on') {
            grid.addEventListener('mouseover', function() {
            grid.style.backgroundColor = 'black'
            })
        }
    })

    rainbow.addEventListener('click', function() {
        rainbow.value = 'on'
        if (rainbow.value === 'on') {
            grid.addEventListener('mouseover', function() {
            let randomIndex = Math.floor(Math.random()*colors.length)
            let randomColor = colors[randomIndex]
            grid.style.backgroundColor = randomColor
            })
        }
    })

    erase.addEventListener('click', function() {
        erase.value = 'on'
        if (erase.value === 'on') {
        grid.addEventListener('mouseover', function() {
            grid.style.backgroundColor = '#d3d3d3'
        })
    }
})


   


    

}
    
} 




})





})

