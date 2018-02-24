# CRUD-APP 


# Details
A simple node.js express app which lets a user create,read,update,delete(CRUD) employee data into/from mongo db(noSql database) with Authentication.

This app shows what goes behind the scenes when a user registers and logs in using a jason web token(JWT) to gain access to the data base. After gaining access, the user can perfom 4 operations:
    1. Create an entry for a new employee.
    2. Read an employees data.
    3. Update an emloyee data.
    4. Delete an employee data.
    
# Requirements
1. Nodejs
2. node package manager(**NPM**)
3. mongo db installed or an mlab URI
4. An application to test the API's like POSTMAN.

# Getting started
1. run `# npm install` (once you are inside the directory)
2. Add your mongo db URI the **app.js** file.
3. run `# node app.js`

# We're now ready to test our API's using POSTMAN

1. /register endpoint helps in registering.
2. /login API helps logging in and returns a JWT(json web token) which helps in conducting other operations like read,create,update and delete data!!
