import 'dotenv/config';

import OpenAI from 'openai';

export const openai = new OpenAI();

const userInput = process.argv[2];

if (!userInput) {
  console.error('Please provide a message')
  process.exit(1);
}

const runAI = async({
    userInput
}: {
    userInput: string;
}) => {
  const response = await openai.chat.completions.create({
    messages: [{ role: 'user', content: userInput }],
    model: 'gpt-4o-mini',
    temperature: 0.1,
  });

  return response;
}

const response = await runAI({ userInput });

console.log(response.choices[0].message.content);