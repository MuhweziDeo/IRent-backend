import { Joi } from 'celebrate';

export const userValidationSchema = Joi.object().keys({
  username: Joi.string().required(),
  password: Joi.string()
    .max(10)
    .min(6)
    .required(),
  email: Joi.string()
    .required()
    .email(),
});

export const userLoginSchema =  Joi.object().keys({
  email: Joi.string()
  .required()
  .email(),
  password: Joi.string()
  .max(10)
  .min(6)
  .required(),
})
