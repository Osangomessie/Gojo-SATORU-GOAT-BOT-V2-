€cmd install bonjour.js module.exports = {
        config: {
                        name: "bonjour",
                        version: "1.0",
                        author: "messie OSANGO",
                        countDown: 5,
                        role: 0,
                        shortDescription: "sarcasm",
                        longDescription: "sarcasm",
                        category: "reply",
        },
onStart: async function(){}, 
onChat: async function({
        event,
        message,
        getLang
}) {
        if (event.body && event.body.toLowerCase() == "bonjour") return message.reply("_______________\n𝐸𝐶𝑅𝐼𝑆 {€𝑅𝐸𝐶𝐻𝐸𝑅𝐶𝐻𝐸 𝑃𝑂𝑈𝑅 𝐸𝑇𝑅𝐸 𝐾𝐼𝐷𝑁𝐴𝑃𝑃É\n_________________");
}
};
