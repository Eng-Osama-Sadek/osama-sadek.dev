import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 chars").max(80),
  email: z.string().email("Invalid email"),
  budget: z.string().max(50).optional(),
  timeline: z.string().max(50).optional(),
  message: z.string().min(20, "Tell me more (min 20 chars)").max(2000),
  website: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;