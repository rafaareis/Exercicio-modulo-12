const selectArray = ['Ótimo', 'Bom', 'Regular', 'Ruim', 'Péssimo']

let select = selectArray.map(function(option){
    return `
            <div id="option" class="accordion-collapse collapse">
                <div class="accordion-body">
                    <option value="${option}">${option}</option>
                </div>
            </div>
            `;
})

document.querySelector('#nota').innerHTML = select.join("");

