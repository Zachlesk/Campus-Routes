import jwt from 'jsonwebtoken';

export const generateJWT = (uid= '') => {
    new Promise((resolve, reject) => {
        
        const payload = {uid};

        jwt.sign(payload.process.env.SECRET_ON_PRIVATE_KEY, {
            expiresIN: '2h'
        }, (error, token)=>{
            if(error) {
                console.log(error);
                reject;
            } else {
                resolve(token);
            }
        })
        
})
}

export default generateJWT;