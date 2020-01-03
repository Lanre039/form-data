const host = 'http://localhost:3000';

const userEmail = document.querySelector('#email');

function validateEmail() {
    const validEmail = document.querySelector('#validEmail');
    const page_1 = document.querySelector('.page_1');
    const page_2 = document.querySelector('.page_2');
    
    const emailID = userEmail.value;
    const includeAt = emailID.indexOf("@");
    const includeDot = emailID.lastIndexOf(".");
    
    if (includeAt < 1 || ( includeDot - includeAt < 2 )) {
        validEmail.textContent = 'Please enter correct email ID'
        userEmail.focus();
        return false;
    } else {
        page_1.style.display = 'none';
        page_2.style.display = 'block';
        
    }
}

const formData = document.querySelector('#form');

    formData.addEventListener('submit', (e) => {
        e.preventDefault();

        const userName = document.querySelector('#name');
        const userNumber = document.querySelector('#number');
        const msg = document.querySelector('#msg');

        validateEmail()
        
        const data = {
            name: userName.value,
            email: userEmail.value,
            number: userNumber.value,
            uid: Math.random().toString(36).substr(2, 10)
        };
        
        
        fetch(`${host}/users`, {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(response => {
            console.log('Data submitted successfully!')
        })
        .catch(err => {
            console.log('Failed!')
        });
    
    });
    
const verifyData = document.querySelector('#form-2');
    
    verifyData.addEventListener('submit', (e) => {
        e.preventDefault()
        
        const inputValue = document.querySelector('#uid');
        const userName = document.querySelector('#username');
        const userEmail = document.querySelector('#usermail');
        const userNumber = document.querySelector('#usernumber');
        const error = document.querySelector('#error');
        

        const id = inputValue.value;

        fetch(`${host}/users/${id}`)
        .then(response => response.json())
        .then(data => {
            userName.textContent = data[0].name
            userEmail.textContent = data[0].email;
            userNumber.textContent = data[0].number;
        })
        .catch((err) => {
                error.textContent = 'DATA NOT FOUND, CHECK THE ID AND TRY AGAIN!'
         });
        
    });



