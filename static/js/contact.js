/* eslint-disable no-unused-vars */
function onSubmit(token) {
    var _form = $('form[name=contact]');
    var data = _form.serialize();
    var url = 'https://us-central1-solid-outlook-270109.cloudfunctions.net/contactSubmit'; 
    var btn = _form.find('button[type=submit]');
    btn.text('Sending...');
    $('#contact-success').addClass('d-none');
    $('#contact-danger').addClass('d-none');

    $.ajax({
        url: url,
        type: _form.attr('method'),
        dataType: 'json',
        data: data,
        success: function (response) {
            btn.text('SUBMIT');
            if (response.success) {

                _form.trigger('reset');
                $('#contact-success').removeClass('d-none');

                return false;
            } else {
                // if (response.message) {
                //     alert(response.message);
                // } else {
                //     alert('Something wrong. Please try again.');
                // }
                $('#contact-danger').removeClass('d-none');
            }
            return false;
        },
        error: function (err) {
            btn.text('SUBMIT');
            console.log(err);
            $('#contact-danger').removeClass('d-none');
            return false;
        }
    });
};