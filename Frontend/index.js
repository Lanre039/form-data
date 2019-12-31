
const formData = document.querySelector('#form');
const userName = document.querySelector('#name');
const userNumber = document.querySelector('#number');
const userEmail = document.querySelector('#email');


if (formData != null) {
    formData.addEventListener('submit', (e) => {
        e.preventDefault();
        
        
        const name = userName.value;
        const number = userNumber.value;
        const email = userEmail.value;
        const uid = 'x' + Math.random().toString(36).substr(2, 9)
        
        // const config = { headers: { 'Content-Type': 'application/json; charset=utf-8' } };
        // const data = JSON.stringify({
        //     uid,
        //     name,
        //     number,
        //     email
        // })

        // axios.post('http://localhost:3000/users', data, config)
        // .then((response) => {
        //     console.log(response)
        // })
        // .catch((err) => {
        //     console.log(err)
        // })


        fetch('http://localhost:3000/users', {
            headers: { "Content-Type": "application/json" },
            method: 'POST',
            body: JSON.stringify({
                uid,
                name,
                number,
                email
              })
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




