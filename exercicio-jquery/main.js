$(document).ready(function() {
    $('form').submit(function(event) {
        event.preventDefault();
        var nomeTarefa = $('#nome-tarefa').val();
        if (nomeTarefa !== '') {
            var listItem = $('<li></li>').text(nomeTarefa);
            var checkbox = $('<input type="checkbox">');
            listItem.prepend(checkbox);
            $('#lista-tarefas').append(listItem);
            $('#nome-tarefa').val('');

            listItem.click(function() {
                $(this).toggleClass('concluido');
            });
        }
    });

    $('#btnLimpar').click(function() {
        $('input[type="checkbox"]:checked').each(function() {
            $(this).closest('li').remove();
        });
    });
});
