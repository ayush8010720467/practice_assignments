document.addEventListener("keydown", function(event) {
    console.log(event.key);
    let msg ;
    if(event.which === 32){
        msg= `The key pressed is <strong>SPACE </strong> and the Key Code is<strong> ${event.which}</strong> `;
    } else{
        msg= `The key pressed is <strong>${event.key} </strong> and the Key Code is<strong> ${event.which}</strong> `;
    }
    let res = document.getElementById('result');
    let defaultStatement = document.getElementById('default')
    res.innerHTML = msg;
    res.classList.remove('hide');
    res.classList.add('show');
    defaultStatement.classList.add('hide');
    defaultStatement.classList.remove('show');
    document.title = event.which;
  })