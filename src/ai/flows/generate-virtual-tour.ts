'use server';

/**
 * @fileOverview Generates a virtual tour script for the Emanuel Institute Hub.
 *
 * - generateVirtualTourScript - A function that generates a virtual tour script.
 * - GenerateVirtualTourScriptInput - The input type for the generateVirtualTourScript function.
 * - GenerateVirtualTourScriptOutput - The return type for the generateVirtualTourScript function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateVirtualTourScriptInputSchema = z.object({
  schoolName: z.string().describe('The name of the school.'),
  schoolInfo: z.string().describe('Detailed information about the school, including its history, programs, activities, and facilities.'),
  websiteContent: z.string().optional().describe('The current content of the Emanuel Institute Hub website, if available.'),
});
export type GenerateVirtualTourScriptInput = z.infer<typeof GenerateVirtualTourScriptInputSchema>;

const GenerateVirtualTourScriptOutputSchema = z.object({
  script: z.string().describe('The generated virtual tour script for the school.'),
});
export type GenerateVirtualTourScriptOutput = z.infer<typeof GenerateVirtualTourScriptOutputSchema>;

export async function generateVirtualTourScript(input: GenerateVirtualTourScriptInput): Promise<GenerateVirtualTourScriptOutput> {
  return generateVirtualTourScriptFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateVirtualTourScriptPrompt',
  input: {schema: GenerateVirtualTourScriptInputSchema},
  output: {schema: GenerateVirtualTourScriptOutputSchema},
  prompt: `You are an AI assistant specialized in creating virtual tour scripts for educational institutions.

  Based on the information provided about {{schoolName}}, generate a script for a virtual tour that highlights the school's key features, academic programs, extracurricular activities, facilities, and community events.

  Consider the following information:
  School Name: {{schoolName}}
  School Information: {{schoolInfo}}
  Website Content: {{websiteContent}}

  The script should be engaging, informative, and persuasive, encouraging prospective students and parents to consider {{schoolName}}.
  The script should be formatted for a narrated video tour, including scene descriptions and voice-over text.
`,
});

const generateVirtualTourScriptFlow = ai.defineFlow(
  {
    name: 'generateVirtualTourScriptFlow',
    inputSchema: GenerateVirtualTourScriptInputSchema,
    outputSchema: GenerateVirtualTourScriptOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
