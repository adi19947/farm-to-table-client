import Joi from "joi";

const loginSchema: Joi.Schema = Joi.object({
  email: Joi.string()
    .pattern(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/)
    .message("Please enter a valid email")
    .required(),

  password: Joi.string()
    .pattern(
      /((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20})/
    )
    .message(
      "The password must be at least seven characters long and contain an uppercase letter, a lowercase letter, a number, and one of the following characters: !@#$%^&*-"
    )
    .required(),
});

export default loginSchema;
