console.log('main.js file loaded');

function sendToMail() {
    var form_data = {
        name: $("#f_name").val(),
        tel: $("#f_tel").val(),
        mail: $("#f_email").val()
    };

    $.ajax({
        type: 'POST',
        url: 'process.php',
        data: form_data,

        success: function(data) {
            var url = 'thankyou.html';
            window.location = url;
            console.log(data);
        },
        error: function(data){
            console.log(data);
        }
    });
}
function validate()
{
    var valid = true;

    namev = $("#f_name").val();
    telv = $("#f_tel").val();
    emailv = $("#f_email").val();

    $("input").removeClass("invalid");

    if(namev.length < 3)
    {
        $("#f_name").addClass("invalid");
        valid = false;
    }
    if(emailv.length < 3)
    {
        $("#f_email").addClass("invalid");
        valid = false;
    }
    if(telv.length < 8)
    {
        $("#f_tel").addClass("invalid");
        valid = false;
    }

    return valid;
}