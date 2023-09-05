export const translateTextToCommand = async (text) => {
    return text.replace(/[aeiouAEIOU]/g, "x");
};

export const translateCommandToText = async (command) => {
    return command.replace(/[aeiouAEIOU]/g, "y");
};
