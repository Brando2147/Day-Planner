jQuery(document).ready(function () {


    // // Declaring global variables 
    // let hrNine = $("hrNine")
    // let hrTen = $("hrTen")
    // let hrEleven = $("hrEleven")
    // let hrTwelve = $("hrTwelve")
    // let hrOne = $("hrOne")
    // let hrTwo = $("hrTwo")
    // let hrThree = $("hrThree")
    // let hrFour = $("hrFour")
    // let hrFive = $("hrFive")
    // let saveBtn = $("saveBtn")
    let textArea = $("textarea")
    // let jumboTron = $("jumbotron")
    let currentDate = luxon.DateTime.local().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' });;
    $("#currentDay").text(currentDate);
    let currentTime = luxon.DateTime.local().get('hour');
    var currentTimeInt = parseInt(currentTime);


    // let hoursArr = [9, 10, 11, 12, 1, 2, 3, 4, 5]

    // let events = {
    //     hr9: textArea[0].value.trim(),
    //     hr10: textArea[1].value.trim(),
    //     hr11: textArea[2].value.trim(),
    //     hr12: textArea[3].value.trim(),
    //     hr1: textArea[4].value.trim(),
    //     hr2: textArea[5].value.trim(),
    //     hr3: textArea[6].value.trim(),
    //     hr4: textArea[7].value.trim(),
    //     hr5: textArea[8].value.trim(),
    // }



    console.log(currentTime)
    // for (let i = 0; i < hoursArr.length; i++) {

    //     let hrBlock = hoursArr[i];
    //     let newRow = rows[i];

    $(".time-block").each(function () {
        let hrBlock = this.id
        // currentTime = parseInt(currentTime);

        if (hrBlock === currentTimeInt) {
            $(this).find('textarea').addClass('present')
        }

        else if (hrBlock > currentTimeInt) {
            $(this).find('textarea').addClass('future')
        }

        else if (hrBlock < currentTimeInt) {
            $(this).find('textarea').addClass('past')
        }
        console.log(currentTimeInt)
    });





    // $('.saveBtn').on('click', saveEvents);

    // Add event listener for save button  
    // function saveEvents() {

    //     localStorage.setItem("", count);



    // }


})
