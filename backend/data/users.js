import bcrypt from 'bcryptjs'


const users =[

    {
        name:'Admin User',
        email: 'kevyb07@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },

    {
        name:'Joe Black',
        email: 'joeback07@gmail.com',
        password: bcrypt.hashSync('123456', 10),
       
    },

    {
        name:'Jane Doe',
        email: 'jdoe@example.com',
        password: bcrypt.hashSync('123456', 10),
        
    },


]

export default users