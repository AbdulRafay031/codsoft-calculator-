const buttons = document.querySelectorAll('.button');
let values = '';

Array.from(buttons).forEach((button) =>{
    button.addEventListener('click', (e) => {
        const buttonValue = e.target.innerHTML;
        if(buttonValue == '='){
            try{
            values = eval(values);
            document.querySelector('.inp-display').value = values;
            }catch(e){
            document.querySelector('.inp-display').value = 'Error';
            }
        }
        else if(buttonValue == 'AC'){
            values='';
            document.querySelector('.inp-display').value = '';
        }
        else if(buttonValue == 'Del'){
            values = values.slice(0,-1);
            document.querySelector('.inp-display').value = values;
        }
        else if(buttonValue == '×'){
            values += '*';
            document.querySelector('.inp-display').value = values;
        }
        else if(buttonValue == '÷'){
            values += '/';
            document.querySelector('.inp-display').value = values;
        }
        else{
        values = values + buttonValue;
        document.querySelector('.inp-display').value = values;
    }
    }
    )
})

