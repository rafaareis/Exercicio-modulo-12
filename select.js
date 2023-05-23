const selectArray = ['Ótimo', 'Bom', 'Regular', 'Ruim', 'Péssimo']

let select = selectArray.map(function(option){
    return `<option value="${option}">${option}</option>`;
})

document.querySelector('#nota').innerHTML = select.join("");

