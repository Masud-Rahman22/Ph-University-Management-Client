import { z } from "zod";

export const academicSemesterSchema = z.object({
    name: z.string({required_error: 'the name field is required'}),
    year: z.string({required_error: 'the year field is required'}),
    startMonth: z.string({required_error: 'the start month field is required'}),
    endMonth: z.string({required_error: 'the end month field is required'})
  })