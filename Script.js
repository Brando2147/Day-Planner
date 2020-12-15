jQuery(document).ready(function () {

    // Declaring global variables 
    let textArea = $("textarea");
    let jumboTron = $("jumbotron");
    let currentDate = luxon.DateTime.local().toLocaleString({
        weekday: 'long',
        month: 'long',
        day: '2-digit'
    });;
    $("#currentDay").text(currentDate);
    let currentTime = luxon.DateTime.local().get('hour');
    let currentTimeInt = parseInt(currentTime);

    // Load any saved values from local storage
    $('#hrNine').text(window.localStorage.getItem('hrNine'));
    $('#hrTen').text(window.localStorage.getItem('hrTen'));
    $('#hrEleven').text(window.localStorage.getItem('hrEleven'));
    $('#hrTwelve').text(window.localStorage.getItem('hrTwelve'));
    $('#hrOne').text(window.localStorage.getItem('hrOne'));
    $('#hrTwo').text(window.localStorage.getItem('hrTwo'));
    $('#hrThree').text(window.localStorage.getItem('hrThree'));
    $('#hrFour').text(window.localStorage.getItem('hrFour'));
    $('#hrFive').text(window.localStorage.getItem('hrFive'));


    // Sets a style color to each time block based on Past, Present, or Current
    $(".time-block").each(function () {
        let hrBlock = $(this).attr('value');

        // currentTime = parseInt(currentTime);
        if (hrBlock === currentTimeInt) {
            $(this).find('textarea').addClass('present');
        } else if (hrBlock > currentTimeInt) {
            $(this).find('textarea').addClass('future');
        } else if (hrBlock < currentTimeInt) {
            $(this).find('textarea').addClass('past');
        };

    });


    // Saves user input from all text areas
    function saveStorage() {
        $('textarea').each(function () {
            let val = $(this).val();
            let id = $(this).attr("id");
            localStorage.setItem(id, val);
        });
    };

    // Triggers the saveStorage function when the save button is clicked
    $('.saveBtn').on('click', saveStorage);

})