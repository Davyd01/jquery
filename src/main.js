"use strict";

$(document).ready(() => {
  $('#todo-list').on('click', '.list-group-item', function () {
    const taskText = $(this).text();
    $('.modal-body').text(taskText);
  });
});


