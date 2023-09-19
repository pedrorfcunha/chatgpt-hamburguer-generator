import OpenAI from 'openai';

export async function handler(event) {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const body = JSON.parse(event.body);

  const message = `Based on the following characteristics, create a personalized hamburger. The hamburger must be unique for a person who describes their favorite cuisine as ${body.cuisine}, lists their 3 favorite hobbies as ${body.hobbies}, and when asked to describe themselves in one word, says ${body.description}. I need you to provide a short, funny and unusual response that starts with the name of the hamburguer. The response must be a structured JSON with the "name" and "description" separated and the description field shouldn't have more than 40 words`;

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo-0613',
      max_tokens: 90,
      temperature: 0.9,
      messages: [{ role: 'user', content: message }],
    });

    return {
      statusCode: 200,
      body: JSON.stringify(response.choices[0].message),
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'An error occurred' }),
    };
  }
}
