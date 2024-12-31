"use strict";

$(document).ready(function () {
  $('#todo-list').on('click', '.list-group-item', function () {
    var taskText = $(this).text();
    $('.modal-body').text(taskText);
  });
});