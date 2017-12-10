// Assessment API: https://api.myjson.com/bins/14s553
//Timetable API: https://api.myjson.com/bins/vun2f
//DO NOT DELETE!!!!! data[0].fba[0].lecture1[0].time


$(document).ready(function () {
    $('#jumboHead').fadeIn(3000);


    $.getJSON("https://api.myjson.com/bins/vun2f", function (data) {
        //console.log(data[0].fba[0].lecture1[0].time);
        //console.log(data[0].project_management[0].lab1[0].day+' at '+data[0].project_management[0].lab1[0].time);
        document.getElementById('fbalab').innerHTML = '<span>FBA Lab</span><br/><span>'+data[0].fba[0].lab1[0].day+' at '+data[0].fba[0].lab1[0].time+'</span>';

        document.getElementById('webapplecture1').innerHTML = '<span>Webb App Lecture</span><br/><span>'+data[0].web_applications[0].lecture1[0].day+' at '+data[0].web_applications[0].lecture1[0].time+'</span>';

        document.getElementById('databaseslecture1').innerHTML = '<span>Database Lecture</span><br/><span>'+data[0].databases[0].lecture1[0].day+' at '+data[0].databases[0].lecture1[0].time+'</span>';

        document.getElementById('webapplecture2').innerHTML = '<span>Webb App Lecture</span><br/><span>'+data[0].web_applications[0].lecture2[0].day+' at '+data[0].web_applications[0].lecture2[0].time+'</span>';

        document.getElementById('databaseslab1').innerHTML = '<span>Database Lab</span><br/><span>'+data[0].databases[0].lab1[0].day+' at '+data[0].databases[0].lab1[0].time+'</span>';

        document.getElementById('pmlab').innerHTML = '<span>Project Management Lab</span><br/><span>'+data[0].project_management[0].lab1[0].day+' at '+data[0].project_management[0].lab1[0].time+'</span>';

        document.getElementById('ooplecture1').innerHTML = '<span>OOP Lecture</span><br/><span>'+data[0].programming[0].lecture1[0].day+' at '+data[0].programming[0].time+'</span>';

        document.getElementById('webapplab1').innerHTML = '<span>Webb App Lab</span><br/><span>'+data[0].web_applications[0].lab1[0].day+' at '+data[0].web_applications[0].lab1[0].time+'</span>';

        document.getElementById('fbalecture').innerHTML = '<span>FBA Lecture</span><br/><span>'+data[0].fba[0].lecture1[0].day+' at '+data[0].web_applications[0].lecture1[0].time+'</span>';

        document.getElementById('ooplab').innerHTML = '<span>OOP Lab</span><br/><span>'+data[0].programming[0].lab1[0].day+' at '+data[0].programming[0].lab1[0].time+'</span>';

        document.getElementById('webapplab2').innerHTML = '<span>Webb App Lab</span><br/><span>'+data[0].web_applications[0].lab2[0].day+' at '+data[0].web_applications[0].lab2[0].time+'</span>';

        document.getElementById('pmlecture').innerHTML = '<span>Project Management Lecture</span><br/><span>'+data[0].project_management[0].lecture1[0].day+' at '+data[0].project_management[0].lecture1[0].time+'</span>';

    });
});

/*
$(document).ready(function () {
    $('#signIn').fadeIn(5000);
});
*/

var $username = $('#username').val();
var $password = $('#password').val();
var $assessment = $('#assessmentTbl');
var data = "";
//var $timetable = $("#timetablelist");

$('#submit').click(function () {
    $.ajax({
        type: 'GET',
        url: 'https://api.myjson.com/bins/15gdtr',
        success: function (users) {
            $.each(users, function (i, user) {
                var userdata =""+user.username+" "+user.pword+" ";
                data+=userdata;
            });
            console.log(data);
            console.log($username);
            console.log($password);
            //(data.indexOf($username) >= 0) && (data.indexOf($password) >= 0)
            console.log(data.indexOf($username));
            if ((data.indexOf($username) >= 0) && (data.indexOf($password) >= 0)) {
                console.log('success');
                $('#timetable').fadeIn(3000);
            }
            else {
                console.log('failure');
            }
        }
    });
});

$('#create').click(function () {
    var newUser = {
        "username": $username,
        "pword": $password
    };

    var url = 'https://api.myjson.com/bins/15gd' +
        '';
    var proxy = 'http://cors-anywhere.herokuapp.com/';
    $.ajax({
        type: 'POST',
        url: proxy+url,
        data: newUser,
        contentType:"application/json; charset=utf-8",
        dataType:"json",
        success: function (newUser) {
            console.log(newUser);
            alert('success in adding user');
        }
    })
});





$('.databases').click(function () {
    $.getJSON('https://api.myjson.com/bins/18setb', function (data) {
        $assessment.append('<tr><td>CA One</td><td>'+data[0].databases[0].ca_test_one[0].due_date+'</td><td>'+data[0].databases[0].ca_test_one[0].time+'</td><td>'+data[0].databases[0].ca_test_one[0].weighting+'</td>');
        $assessment.append('<tr><td>Project</td><td>'+data[0].databases[0].project[0].due_date+'</td><td>'+data[0].databases[0].project[0].time+'</td><td>'+data[0].databases[0].project[0].weighting+'</td>');
        $assessment.append('<tr><td>CA Two</td><td>'+data[0].databases[0].ca_test_two[0].due_date+'</td><td>'+data[0].databases[0].ca_test_two[0].time+'</td><td>'+data[0].databases[0].ca_test_two[0].weighting+'</td>');
        $assessment.append('<tr><td>Exam</td><td>'+data[0].databases[0].exam[0].due_date+'</td><td>'+data[0].databases[0].exam[0].time+'</td><td>'+data[0].databases[0].exam[0].weighting+'</td>');
    });
    $('#assessments').fadeIn(3000);
});

$('.fba').click(function () {
    $.getJSON('https://api.myjson.com/bins/18setb', function (data) {
        $assessment.append('<tr><td>Project</td><td>'+data[0].fba[0].project[0].due_date+'</td><td>'+data[0].fba[0].project[0].time+'</td><td>'+data[0].fba[0].project[0].weighting+'</td>');
        $assessment.append('<tr><td>Exam</td><td>'+data[0].fba[0].exam[0].due_date+'</td><td>'+data[0].databases[0].exam[0].time+'</td><td>'+data[0].fba[0].exam[0].weighting+'</td>');
    });
    $('#assessments').fadeIn(3000);
});

$('.webapp').click(function () {
    $.getJSON('https://api.myjson.com/bins/18setb', function (data) {
        $assessment.append('<tr><td>CA One</td><td>'+data[0].web_applications[0].ca_test[0].due_date+'</td><td>'+data[0].web_applications[0].ca_test[0].time+'</td><td>'+data[0].web_applications[0].ca_test[0].weighting+'</td>');
        $assessment.append('<tr><td>Project</td><td>'+data[0].web_applications[0].project[0].due_date+'</td><td>'+data[0].web_applications[0].project[0].time+'</td><td>'+data[0].web_applications[0].project[0].weighting+'</td>');
        $assessment.append('<tr><td>Presentation</td><td>'+data[0].web_applications[0].presentation[0].due_date+'</td><td>'+data[0].web_applications[0].presentation[0].time+'</td><td>'+data[0].web_applications[0].presentation[0].weighting+'</td>');
    });
    $('#assessments').fadeIn(3000);
});

$('.oop').click(function () {
    $.getJSON('https://api.myjson.com/bins/18setb', function (data) {
        $assessment.append('<tr><td>CA One(Formative)</td><td>'+data[0].programming[0].ca_test_formative[0].due_date+'</td><td>'+data[0].programming[0].ca_test_formative[0].time+'</td><td>'+data[0].programming[0].ca_test_formative[0].weighting+'</td>');
        $assessment.append('<tr><td>Project</td><td>'+data[0].programming[0].project[0].due_date+'</td><td>'+data[0].programming[0].project[0].time+'</td><td>'+data[0].programming[0].project[0].weighting+'</td>');
        $assessment.append('<tr><td>CA Two</td><td>'+data[0].programming[0].ca_test[0].due_date+'</td><td>'+data[0].programming[0].ca_test[0].time+'</td><td>'+data[0].programming[0].ca_test[0].weighting+'</td>');
    });
    $('#assessments').fadeIn(3000);
});

$('.pm').click(function () {
    $.getJSON('https://api.myjson.com/bins/18setb', function (data) {
        $assessment.append('<tr><td>CA Labs</td><td>'+data[0].project_management[0].ca_labs[0].due_date+'</td><td>'+data[0].project_management[0].ca_labs[0].time+'</td><td>'+data[0].project_management[0].ca_labs[0].weighting+'</td>');
        $assessment.append('<tr><td>Exam</td><td>'+data[0].project_management[0].exam[0].due_date+'</td><td>'+data[0].databases[0].exam[0].time+'</td><td>'+data[0].project_management[0].exam[0].weighting+'</td>');
    });
    $('#assessments').fadeIn(3000);
});

/*
$('#create').click(function () {
    $.getJSON("https://api.myjson.com/bins/vun2f", function (data) {
        //console.log(data[0].fba[0].lecture1[0].time);
        $timetable.append('<li>FBA: Lecture 1: '+data[0].fba[0].lecture1[0].day+' '+data[0].fba[0].lecture1[0].time+'</li>');
    });
})
*/




