$(function () {

    function display(bool) {
        if (bool) {
            $("html").show();
        } else {
            $("html").hide();
        }
    }

    display(false)

    window.addEventListener('message', function(event) {
        var item = event.data;
        if (item.type === "sendnotification") {
            if (item.status == true) {
                $("html").fadeIn();
                display(true)
            } else {
                display(false)
            }
        }
    })

    window.addEventListener('message', function (event) {
        try {
            switch(event.data.action) {
                case 'message':
                    if (event.data.value != null) text.innerHTML = event.data.value;
                break;
            }
    } catch(err) {}
    });
})