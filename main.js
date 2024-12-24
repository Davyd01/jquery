
$(document).ready(function() {
  $('#todo-list').on('click', '.list-group-item', function() {
    let taskText = $(this).text()

    $('.modal-body').text(taskText)
  })
})


