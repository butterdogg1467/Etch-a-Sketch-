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

let gridContain = document.createElement('div')
gridContain.classList.add('container')
document.body.appendChild(gridContain)

let reset = document.createElement('button')
reset.textContent = "Reset"
reset.classList.add('reset')
this.body.appendChild(reset)

let gridSize = document.createElement('button')
gridSize.classList.add('gridsize')
gridSize.textContent = 'Change Gridsize'
this.body.appendChild(gridSize)

gridSize.addEventListener('click', function() {
    let gridDimensions = +prompt('Enter Grid Size')
    
})




for (let i = 0; i<256; i++) {
    let grid = document.createElement('div')
    grid.classList.add('grid')
    grid.style.backgroundColor = '#d3d3d3'
    grid.style.width = '32px'
    grid.style.height = '32px'
    grid.style.border = ('solid')
    gridContain.appendChild(grid)

    grid.addEventListener('mouseover', function() {
        let randomIndex = Math.floor(Math.random()*colors.length)
        let randomColor = colors[randomIndex]
        grid.style.backgroundColor = randomColor

    reset.addEventListener('click', function() {
        grid.style.backgroundColor = '#d3d3d3'
    })


    })
}











})