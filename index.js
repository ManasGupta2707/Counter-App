const countvalue=document.querySelector('#counter');

const increment=() => {
    // Get the value form Ui
    let value=parseInt(countvalue.innerText);
    // Update the value
    value=value+1;
    // set the value onto UI
    countvalue.innerText=value;
};

function decrement(){
    // Get the value form Ui
    let value=parseInt(countvalue.innerText);
    // Update the value
    value=value-1;
    // set the value onto UI
    countvalue.innerText=value;
};