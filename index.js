// Add your code here

function submitData(name , email){
    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
            Accept: 'application/json',
            
        },
        body:JSON.stringify({
            name: 'Steve',
            email: 'steve@steve.com',
        })
    })
    .then(response => response.json())
    .then(users => console.log(users))
    .catch(error => {
        alert("Bad things! Ragnarők!");
        console.log(error)
    })
}
submitData('Sam','sam@sam.com')