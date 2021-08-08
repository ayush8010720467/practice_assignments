function checkDay(){
    var day = document.getElementById('day').value;
    if(day.length>0){
        document.getElementById('errorText').style.display = 'none';
        // console.log(weekDay(day));
        document.getElementById('result').value = weekDay(day);

    } else{
        document.getElementById('errorText').style.display = 'block';
    }
}
function weekDay(n){
    var day;
    switch(parseInt(n)){
        case 1: day= 'Monday';
                break;
        case 2: day= 'Tues';
                break;
        case 3: day= 'Wed';
                break;
        case 4: day= 'Thus';
                break;
        case 5: day= 'Friday';
                break;
        case 6: day= 'Sat';
                break;
        case 7: day= 'Sunday';
                break;
        default: day = 'day should be in range of 1 to 7 only'

    }
    return `The day is ${day}`;
}