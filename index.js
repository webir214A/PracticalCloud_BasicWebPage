$(function() {
        console.log("DOM loaded.")
        a();

        var divTable = $("<div>").addClass("divTable");
        var divTableBody = $("<div>").addClass("divTableBody").attr("id","tablebody");
        divTable.append(divTableBody);

        var jsonAPI = 'https://jsonplaceholder.typicode.com/posts';
        $.ajax({
            type: 'GET',
            url: jsonAPI,
            data: { userId: '1' },
            dataType: 'json',
            success: function (data) {
                $.each(data, function(index, element) {
                    console.log(element.id);

                    var divTableRow = $("<div>").addClass("divTableRow");

                    var divTableCellId = $("<div>").addClass("divTableCell").html(element.id);
                    var divTableCellTitle = $("<div>").addClass("divTableCell").html(element.title);
                    var divTableCellBody = $("<div>").addClass("divTableCell").html(element.body);
                    //var div = $("<div>").html(element.id);

                    divTableRow.append(divTableCellId,divTableCellTitle,divTableCellBody);

                    //$("#js").append(div);
                    $("#tablebody").append(divTableRow);
                });
            }
        });//end $.ajax

        $("#js").append(divTable);

    }//end func
)

function a (){
    alert("hello");
}

$("p").click(function(){
    alert("p clicked");
})



