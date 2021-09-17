function result() {

    var students = {
        MAHESH : {
            math:"95",
            physics:"85",
            Chemistry:"85"
        },
        RUDHAV : {
            math:"90",
            physics:"80",
            Chemistry:"85"
        },
        SAI : {
            math:"95",
            physics:"80",
            Chemistry:"87"
        },
        SIDHHI : {
            math:"95",
            physics:"95",
            Chemistry:"95"
        }
    }
    var studentname = document.getElementById("studentname").value;
    var input = studentname.toUpperCase();
    var defination = students[input];
    var output = document.getElementById('output');
    
    if (defination == undefined) {
        output.innerHTML = `<hr> There is no information about this student. <hr>`;
    } else {
        output.innerHTML = `<hr> Math Score is ${defination.math}.<hr> Physics Score is ${defination.physics}.<hr> Chemistry Score is ${defination.chemistry} <hr>`;
    };
};