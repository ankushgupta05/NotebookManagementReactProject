var jwt = require('jsonwebtoken');
// const JWT_SECRET = 'ANKUSHGUPTA0510'
const JWT_SECRET = 'ankushisagooddb$oy';


const fetchuser = (req, res, next) => {
    // Get the user from the jwt token and add id to req object
    const token = req.header('auth-token');
    // console.log(token);
    if (!token) {
        res.status(401).send({ error: 'Please authentication using a valid token' });
    }

    try {
        const data = jwt.verify(token, JWT_SECRET)
        // console.log(data); // for test purpose
        // req.user = data.user;  // code by codewithharry but it give error
        
        req.user = data;   // code by Ankush but it not give error
        // console.log('\n\n',req.user);  // for test purpose
        next();
    } catch (error) {
        res.status(401).send({ error: 'Please authentication using a valid token' });
    }

}




module.exports = fetchuser;









// var jwt = require('jsonwebtoken');
// // const JWT_SECRET = 'Harryisagoodb$oy';
// const JWT_SECRET = 'ankushisagooddb$oy'


// const fetchuser = (req, res, next) => {
//     // Get the user from the jwt token and add id to req object
//     const token = req.header('auth-token');
//     if (!token) {
//         res.status(401).send({ error: "Please authenticate using a valid token" })
//     }
//     try {
//         const data = jwt.verify(token, JWT_SECRET);
//         req.user = data.user;
//         next();
//     } catch (error) {
//         res.status(401).send({ error: "Please authenticate using a valid token" })
//     }

// }


// module.exports = fetchuser;























