$(document).ready(() => {
    $('header button').click(() => {
        $('form').slideDown() // mostrando menu de upload de fotos
    })

    $('#cancelButton').click(() => {
        $('form').slideUp() 
    })

    $('form').on('submit', (event) => {

        event.preventDefault()
        const addressNewImage = $('#address-new-image').val()

        const newItem = $('<li></li>')
        $(`<img src="addressNewImage" />`).appendTo(newItem)
        $(`
                <div class="overlay-imagem-link">
                <a href="${addressNewImage}" target="_blanck" title="ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(newItem)

        $(newItem).appendTo('ul')
        $(newItem).fadeIn(1000)
        $('#address-new-image').val('')
    })
})