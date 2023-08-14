const openai = require("./config/openaiConfig");

const generate_prompt = (prompt, isTextToGit) => {
    return `
    Provide the equivalent ${
        isTextToGit ? "Git command" : "text"
    } for "${prompt}" as just JSON:

Example:
{
    text: Undo the last commit but keep the changes.
    command: git reset HEAD~1
}
{
    text: Switch to the production branch.
    command: git checkout production.
}

    `;
};

const openai_request = async (prompt, isTextToGit) => {
    try {
        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "user",
                    content: generate_prompt(prompt, isTextToGit),
                },
            ],
        });

        return JSON.parse(response.data.choices[0].message.content);
    } catch (error) {
        throw new Error("[Error] OpenAI request failed: " + error.message);
    }
};

const textToCommand = async (text) =>
    (await openai_request(text, true)).command;

const commandToText = async (command) =>
    (await openai_request(command, false)).text;

module.exports = {
    textToCommand,
    commandToText,
};
