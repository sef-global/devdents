$(document).ready(() => {
    $('.sidenav').sidenav();
    loadStudents();
});


let loadStudents = () => {

    $.ajax({
        url : 'storage/entries.json',
        dataType : 'json',
        type : 'GET',
        success : (response) => {
            renderStudents(response);
        }
    });

};

let renderStudents = (students) => {
    let elem = $('#studentsLoader');
    let con = '';
    for(let i in students) {
        let student = students[i];
        con += '<div class="row">' +
                    '<div class="s1">' + 
                        '<h4>' + student.name + '</h4>' +
                        '<a href="#">@' + student.githubUsername + '</a>' +
                    '</div>' +
                  '</div>';
        elem.html(con);
    }
};