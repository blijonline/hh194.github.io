    $(document).ready(function () {

        // ANIMATEDLY DISPLAY THE NOTIFICATION COUNTER.
        $('#noti_Counter')
            .css({ opacity: 0 })
            .text('2')              // ADD DYNAMIC VALUE (YOU CAN EXTRACT DATA FROM DATABASE OR XML).
            .css({ top: '-10px' })
            .animate({ top: '-2px', opacity: 1 }, 500);

        $('#noti-bell').click(function () {

            // TOGGLE (SHOW OR HIDE) NOTIFICATION WINDOW.
            $('#notifications').fadeToggle('fast', 'linear', function () {
            });

            $('#noti_Counter').fadeOut('slow');                 // HIDE THE COUNTER.

            return false;
        });

        // HIDE NOTIFICATIONS WHEN CLICKED ANYWHERE ON THE PAGE.
        $(document).click(function () {
            $('#notifications').hide();
        });

        $('#notifications').click(function () {
            return false;       // DO NOTHING WHEN CONTAINER IS CLICKED.
        });

        // remove notifications when clicked on the X

        $('#noti-x1').click( () => {
            $('.noti-rule1').remove();
            $('.noti-sep').remove();
        });

        $('#noti-x2').click( () => {
            $('.noti-rule2').remove();
            $('.noti-sep').remove();
        });

        // add border on active tab sidebar   

        $('.icon-div').on('click', function(){
            $('div.current').removeClass('current');
            $(this).addClass('current');
        });


        $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

        // autocomplete function for searching members

var input = document.getElementById("myinput");
new Awesomplete(input, {
    list: ["Victoria Chambers", "Dale Byrd", "Dawn Wood", "Dan Oliver", "Henri Huisman"]
});


    });