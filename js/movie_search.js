$(document).ready(function(){

  $('#search_field').keyup('click', function(event){
    // event.preventDefault();
    var form = $(this);
    var input = $('#search_field').val();

    // var input2 = $('<p>' + input + '</p>');
    // $(input2).appendTo($('#results_area'));

    $.ajax({
      url: 'http://www.omdbapi.com/?s=' + input,
      method: 'get',
      dataType: 'json',

      success: function(results) {
        $('#search_results_list').html("");
        var search_results = [];
        var search_results_imdb = [];
        for (var i=0; i < results["Search"].length; i++)
          {
            search_results[i] = {title:results["Search"][i]["Title"], imdb_number:results["Search"][i]["imdbID"]};
            var search_result_titles = $('<li><a class="result" href="">' + search_results[i].title + '</a></li>');
            search_result_titles. appendTo($('#search_results_list'));
          }

        $('#search_results_list').on('click', '.result', function(event){
          event.preventDefault();
          console.log($(this).imdb_number);
        });
        // console.log(search_results_imdb);
        console.log(search_results);
      }
    });
  });
});

// $(document).ready(function() {
//   $('#new_todo').on('submit', function(event){
//     event.preventDefault();
//     var form = $(this);
//     var task = $('#todo_task').val();
//     var deadline = [$('#todo_deadline_1i').val(), $('#todo_deadline_2i').val(), $('#todo_deadline_3i').val()].join('-');
//     $.ajax({
//       url: form.attr('action'),
//       method: form.attr('method'),
//       dataType: "json",
//       data: {"todo": {
//           "task": task,
//           "deadline": deadline,
//           "completed": false,
//           "removed": false
//         }
//       },


      // success: function(new_entry) {
      //   var list = $('#outstanding_todos');
      //   var identification = new_entry.id;
      //   var d = new Date(new_entry.deadline);
      //   var date = moment(d).format('dddd, MMMM, DD, YYYY');
      //   var new_row = $('<div class="to_dos"><input type="checkbox"></input>' + new_entry.task + ', ' + d + '<button class="btn btn-danger btn-mini delete_button" type="button">Delete</button></div>');
      //   new_row.appendTo(list);

      //   $('.delete_button').on('click', function() {
      //     $(this).parent().remove();
      //     $.ajax({
      //       type: 'put',
      //       dataType: "json",
      //       url: '/todos/' + identification,
      //       data: JSON.stringify({ "todo": {"removed": true}, _method:'put'})
      //       }
      //     );
      //   });






