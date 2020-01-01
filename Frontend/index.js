
const formData = document.querySelector('#form');
const userName = document.querySelector('#name');
const userNumber = document.querySelector('#number');
const userEmail = document.querySelector('#email');
const msg = document.querySelector('#msg');


if (formData != null) {
    formData.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = {
            name: userName.value,
            email: userEmail.value,
            number: userNumber.value,
            uid: 'x' + Math.random().toString(36).substr(2, 9),
        }
        
        axios.post('http://localhost:3000/users', data, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => {
            msg.textContent = 'Data submitted successfully!'
        })
        .catch(err => {
            msg.textContent = 'Failed!'
        })
        
        
    
    })
    
} else {
    const verifyData = document.querySelector('#form-2');
    const inputValue = document.querySelector('#uniqueId');
    const userName = document.querySelector('#username');
    const userEmail = document.querySelector('#usermail');
    const userNumber = document.querySelector('#usernumber');
    const error = document.querySelector('#error');
    
    verifyData.addEventListener('submit', (e) => {
        e.preventDefault()
        const id = inputValue.value;
        // console.log(id)

        fetch(`http://localhost:3000/users/${id}`)
        .then(response => response.json())
        .then(data => {
            userName.textContent = data[0].name
            userEmail.textContent = data[0].email;
            userNumber.textContent = data[0].number;
        }).catch((err) => {
                error.textContent = 'DATA NOT FOUND, CHECK THE ID AND TRY AGAIN!'
            })
        
    })
}




