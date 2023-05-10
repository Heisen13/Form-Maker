const insert = () => {

    let type = document.querySelector('#type').value; 
    let label = document.querySelector('#label').value; 

    switch(type){
        case 'text field': appendTextField(label)
            break
        case 'button': appendButton(label)
            break
        case 'password field': appendPasswordField(label)
            break
        case 'checkbox': appendCheckbox(label)
            break
        case 'radio': appendRadio(label)
            break
    }

}

const remove = () => {

    let display = document.querySelector('#display');
    let last = display.lastElementChild;

    if (last) {
      display.removeChild(last);
    }

};


const appendTextField = (label = "Default") => {

    let elem = document.createElement('input')

    elem.setAttribute('placeholder', label)
    elem.setAttribute('class', 'border-warning form-control mt-2')

    document.querySelector('#display').append(elem)

}

const appendPasswordField = (label = "Default") => {

    let elem = document.createElement('input')

    elem.setAttribute('placeholder', label)
    elem.setAttribute('class', 'border-warning form-control mt-2')
    elem.setAttribute('type', 'Password');

    document.querySelector('#display').append(elem)

}

const appendButton = (label = "Default") => {

    let elem = document.createElement('button')
 
    elem.setAttribute('class', 'btn border-warning btn-warning form-control mt-2')
    elem.textContent = label

    document.querySelector('#display').append(elem)

}

const appendCheckbox = (label = "Default") => {

    let elem = document.createElement('input');
    elem.setAttribute('type', 'checkbox');
    elem.setAttribute('id', label);
    elem.setAttribute('name', label);
    elem.setAttribute('class', 'form-check-input mt-2');
  
    let elemLabel = document.createElement('label');
    elemLabel.setAttribute('for', label);
    elemLabel.textContent = label;
  
    let container = document.createElement('div');
    container.setAttribute('class', 'form-check');
    container.append(elem, elemLabel);
  
    document.querySelector('#display').append(container);
  

}

const appendRadio = (label = "Default") => {

    let elem = document.createElement('input');
    elem.setAttribute('type', 'radio');
    elem.setAttribute('id', label);
    elem.setAttribute('name', 'radio-group');
    elem.setAttribute('class', 'form-check-input mt-2');
  
    let elemLabel = document.createElement('label');
    elemLabel.setAttribute('for', label);
    elemLabel.textContent = label;
  
    let container = document.createElement('div');
    container.setAttribute('class', 'form-check');
    container.append(elem, elemLabel);
  
    document.querySelector('#display').append(container);

}