$(document).ready(function() {

    // EXEMPLO 01
    // // Selecionar o botão que dispara o conteúdo na tela
    // $('#btn-content').click(function() {
    //     // Criar a funcionalidade para aparecer o conteúdo na tela
    //     $('#content').removeClass('hide') //Selecionei a nossa div #content e exclui a classe hide() do css
    //         // Após clicado o bot]ao iremos desativa-lo
    //     $('#btn-content').attr('disabled', 'true')
    // })

    // EXEMPLO 02

    $('#content').hide()

    $('#btn-content').click(function() {
        // Criar uma variável para receber o status do botão [data-status]
        let status = $(this).attr('data-status')

        if (status == 1) {
            $('#btn-content').attr('data-status', '2') //É quando a nossa imagem deverá aparecer
            $('#btn-content').empty() //Estamos limpando o texto contido no botão
            $('#btn-content').append('Ocultar a imagem') //Adiciona o texto ao botão
        } else {
            $('#btn-content').attr('data-status', '1') //É quando nossa imagem deverá esconder
            $('#btn-content').empty() //Estamos limpando o texto contido no botão
            $('#btn-content').append('Ver a imagem') //Adiciona o texto ao botão
        }

        // A função toggle serve para mudar o status do conteúdo em tela de oculto para visível e vice e versa
        $('#content').toggle()
    })

    // Controlando o tamanho dos textos pelo click dos botões

    $('.btn-sm').click(function() {
        $('p').removeClass('text-md text-lg').addClass('text-sm')
    })

    $('.btn-md').click(function() {
        $('p').removeClass('text-sm text-lg').addClass('text-md')
    })

    $('.btn-lg').click(function() {
        $('p').removeClass('text-sm text-md').addClass('text-lg')
    })

})