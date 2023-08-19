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

module.exports = openai;
