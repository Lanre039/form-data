const host = 'http://localhost:3000';
const formData = document.querySelector('#form');


    formData.addEventListener('submit', (e) => {
        e.preventDefault();

        const userName = document.querySelector('#name');
        const userNumber = document.querySelector('#number');
        const userEmail = document.querySelector('#email');
        const msg = document.querySelector('#msg');
        const page_1 = document.querySelector('.page_1');
        const page_2 = document.querySelector('.page_2');

        page_1.style.display = 'none';
        page_2.style.display = 'block';
        
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
            msg.textContent = 'Data submitted successfully!'
        })
        .catch(err => {
            msg.textContent = 'Failed!'
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



