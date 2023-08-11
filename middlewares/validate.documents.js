import validationResult from 'express-validator'

export const validationDocuments = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if(errors.isEmpty()){
            return res.status(400).json(errors);
        }
        next();
    } catch (err) {
        console.log(err);
    }
}

export default validationDocuments;