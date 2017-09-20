

document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('search').addEventListener('click', function(){

    let request = new XMLHttpRequest();
    var searchTerm = document.getElementById("searchTerm").value;

    request.open('GET','https://en.wikipedia.org//w/api.php?action=opensearch&format=json&origin=*&search=' + searchTerm +'&limit=10', true);
    request.onload = function() {
        data = JSON.parse(request.responseText);
        //console.log(data); test
        //console.log(data[1][1]); test

        document.getElementById('searchResult').innerHTML = " ";


        for (var i = 0; i <= data[1].length-1; i++) {

            document.getElementById('searchResult').innerHTML +='<a href=' + data[3][i]+ ' target= "blank" class="list-group-item">' + data[1][i] + '</a>';      

        }
    };

    request.send();

    });

    document.getElementById('searchTerm').addEventListener('keyup',function(enter) {
        //if(enter.keyCode == 13) { if you want results to show on enter
            document.getElementById('search').click();
        //}
    })
});



