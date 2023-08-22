require("dotenv").config({ path: "../.env" });
const { Configuration, OpenAIApi } = require("openai");

if (!process.env.OPENAI_API_KEY) {
    throw new Error(
        "[openai] OPENAI_API_KEY is not defined in .env file. Please add it there."
    );
}

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
    organization: process.env.OPENAI_API_ORGANIZATION,
});
const openai = new OpenAIApi(configuration);

const generate_text = async (prompt) => {
    try {
        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            temperature: 0.6,
            max_tokens: 200,
            messages: [
                {
                    role: "user",
                    content: prompt,
                },
            ],
        });

        return JSON.parse(response.data.choices[0].message.content);
    } catch (error) {
        console.error("[Error] OpenAI request failed: " + error.message);
        throw new Error("OpenAI request failed");
    }
};

module.exports = { generate_text };
