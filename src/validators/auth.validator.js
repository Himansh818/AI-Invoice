const { z, email } = require('zod');

const registerSchema = z.object({
  Full_name: z.string().min(3, "Full name is required !"),
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Password must be at least 8 characters")
});

module.exports = {
  registerSchema,
}