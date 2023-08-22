require("dotenv").config({ path: "../.env" });
const cohere = require("cohere-ai");

cohere.init(process.env.COHERE_API_KEY); // This is your trial API key

const generate_text = async (prompt) => {
    const response = await cohere.generate({
        model: "command",
        prompt,
        max_tokens: 300,
        temperature: 0.8,
        k: 0,
        stop_sequences: [],
        return_likelihoods: "NONE",
    });
    console.log(response.body.generations[0].text);
    return JSON.parse(response.body.generations[0].text);
};

module.exports = { generate_text };
