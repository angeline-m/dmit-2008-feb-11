/*
    NODE build your files with JS first
    - get them working, test on the command line
    - add the Commonjs exports to the function

    **pass the email and the password auth with the user.json
    read the user.json
    array methods map filter find reduce forEach
    Arrays of objects JSON XML SSR built on the server at runtimer

    Auth
    email ===> email from the form
    password ===> password sent from form
    POST login route
    {
    req.body.email
    req.body.password
    }
*/

const fileService = require('./fileService')

const authenticate = (credentials) => {
    const {email, password} = {...credentials}
    const users = fileService.getFileContents('../data/users.json')
    console.log(users)
}

authenticate({email:"user@gmail.com", password:"1234"})