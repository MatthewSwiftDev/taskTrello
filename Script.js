let cardIdCounter = 13  // Номер следующей карточки
let columnIdCounter = 5 // Номер следующей колонки

document
    .querySelectorAll('.column')
    .forEach(ProcessAddColumn)

document
    .querySelector('[data-action-addColumn]')
    .addEventListener('click', function(event) {
        const columnElment = document.createElement('div')
        columnElment.classList.add('column')
        columnElment.setAttribute('draggable', 'true')
        columnElment.setAttribute('data-column-id', columnIdCounter)
        
        columnElment.innerHTML = 
        `<p class = "column-header" contenteditable="true">Tasks</p>
        <div data-cards></div>
        <p class="column-footer">
            <span data-action-addCard class="action">+ Добавить карточку</span>
        </p>`
        
        columnIdCounter++;
        document.querySelector('.columns').append(columnElment)   

        ProcessAddColumn(columnElment)
    })

document
    .querySelectorAll('.card')
    .forEach(ProcessEditCard)

function ProcessAddColumn(columnElment) {
        const span_actAddCard = columnElment.querySelector('[data-action-addCard]')
        
        span_actAddCard.addEventListener('click', function(event) {
            // Создание новой карточки
            const cardElement = document.createElement('div')
            cardElement.classList.add('card')
            cardElement.setAttribute('draggable', 'true')
            cardElement.setAttribute('data-card-id', cardIdCounter)

            cardIdCounter++;

            columnElment.querySelector('[data-cards]').append(cardElement)
            ProcessEditCard(cardElement)
        })
    }

function ProcessEditCard(cardElement) {
        cardElement.addEventListener('dblclick', function(event) {
            cardElement.setAttribute('contenteditable', 'true')
            cardElement.focus()
        })

        cardElement.addEventListener('blur', function(event) {
            cardElement.removeAttribute('contenteditable')
        })

    }