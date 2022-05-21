import Joi from 'joi';

const schema =  Joi.object({
    name: Joi.string().min(1).required(),
    question: Joi.string().min(1).required(),
    subject: Joi.string().valid(...['Português', 'Matemática', 'História', 'Geografia', 'Ciências da natureza', 'Ciências sociais']).required(),
})

export const postQuestionMiddleware = (req, res, next) => {
    if(!schema.validate(req.body))
        return res.sendStatus(422)

    next()
}