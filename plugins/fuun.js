/*
created by ⇝𝐻𝒶𝓈𝓈𝒶𝓃 ʀᴀᴊᴘ𝙾𝙾ᴛ ×͜×
contact me 923286813475
© Copy coder alert ⚠
*/




const axios = require('axios');
                         const {cmd , commands} = require('../command');

                         cmd({
                             pattern: "define",
                             desc: "📚 Get the definition of a word",
                             react: "🔍",
                             category: "Auther",
                             filename: __filename
                         },
                         async (conn, mek, m, { from, q, reply }) => {
                             try {
                                 if (!q) return reply("❗ Please provide a word to define. Usage: .define [word]");

                                 const word = q;
                                 const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

                                 const response = await axios.get(url);
                                 const definitionData = response.data[0];

                                 const definition = definitionData.meanings[0].definitions[0].definition;
                                 const example = definitionData.meanings[0].definitions[0].example || 'No example available';
                                 const synonyms = definitionData.meanings[0].definitions[0].synonyms.join(', ') || 'No synonyms available';

const wordInfo = `
*[ •  ⇝𝐻𝒶𝓈𝓈𝒶𝓃 ʀᴀᴊᴘ𝙾𝙾ᴛ ×͜× - DEFINE ‎ • ]*
*╭┈───────────────•*
*│  ◦* 📚 *WORD*: ${definitionData.word}
*│  ◦*
*│  ◦* 🔍 *DEFINITION*: ${definition}
*│  ◦*
*│  ◦* 📝 *EXAMPLE*: ${example}
*│  ◦*
*│  ◦* 🔗 *SYNONYMS*: ${synonyms}
*│  ◦*
*│  ◦* *MADE WITH ♥ ⇝𝐻𝒶𝓈𝓈𝒶𝓃 ʀᴀᴊᴘ𝙾𝙾ᴛ ×͜×*
*╰┈───────────────•*

*•────────────•⟢*
> *© ⇝𝐻𝒶𝓈𝓈𝒶𝓃 ʀᴀᴊᴘ𝙾𝙾ᴛ ×͜×*
*•────────────•⟢*
`;

                                 return reply(wordInfo);
                             } catch (e) {
                                 console.log(e);
                                 if (e.response && e.response.status === 404) {
                                     return reply("🚫 Word not found. Please check the spelling and try again.");
                                 }
                                 return reply("⚠️ An error occurred while fetching the definition. Please try again later.");
                             }
                         });

cmd({
    pattern: "dog",
    desc: "Fetch a random dog image.",
    category: "fun",
    react: "🐶",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const apiUrl = `https://dog.ceo/api/breeds/image/random`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        await conn.sendMessage(from, { image: { url: data.message }, caption: '⇝𝐻𝒶𝓈𝓈𝒶𝓃 ʀᴀᴊᴘ𝙾𝙾ᴛ ×͜× DOWNLOAD📂DOG PICS\n\n\n> *BY SILENTLOVER432*' }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`Error Fetching Dog Image🤕: ${e.message}`);
    }
});

cmd({
    pattern: "fact",
    desc: "🧠 Get a random fun fact",
    react: "😝",
    category: "fun",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        const url = 'https://uselessfacts.jsph.pl/random.json?language=en';  // API for random facts
        const response = await axios.get(url);
        const fact = response.data.text;

        const funFact = `
*[ •  ⇝𝐻𝒶𝓈𝓈𝒶𝓃 ʀᴀᴊᴘ𝙾𝙾ᴛ ×͜× - RANDOM FACT‎ • ]*
*╭┈───────────────•*
*│  ◦* *${fact}*
*╰┈───────────────•*
Isn't that interesting? 😄

*•────────────•⟢*
> © ⇝𝐻𝒶𝓈𝓈𝒶𝓃 ʀᴀᴊᴘ𝙾𝙾ᴛ ×͜×
*•────────────•⟢*
`;

        return reply(funFact);
    } catch (e) {
        console.log(e);
        return reply("⚠️ An error occurred while fetching a fun fact. Please try again later🤕.");
    }
});

cmd({
    pattern: "joke",
    desc: "😂 Get a random joke",
    react: "🤣",
    category: "fun",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        const url = 'https://official-joke-api.appspot.com/random_joke';  // API for random jokes
        const response = await axios.get(url);
        const joke = response.data;
        const jokeMessage = `
*[ •  ⇝𝐻𝒶𝓈𝓈𝒶𝓃 ʀᴀᴊᴘ𝙾𝙾ᴛ ×͜× - RANDOM JOKE‎ • ]*
*╭┈───────────────•*
*│  ◦* 😂 *Here's a random joke for you!* 😂
*│  ◦* *${joke.setup}*
*│  ◦* ${joke.punchline} 😄
*╰┈───────────────•*

*•────────────•⟢*
> © ⇝𝐻𝒶𝓈𝓈𝒶𝓃 ʀᴀᴊᴘ𝙾𝙾ᴛ ×͜×
*•────────────•⟢*
`;
        return reply(jokeMessage);
    } catch (e) {
        console.log(e);
        return reply("⚠️ Couldn't fetch a joke right now. Please try again later.");
    }
});

cmd({
    pattern: "quote",
    desc: "Get a random inspiring quote.",
    category: "fun",
    react: "💬",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const response = await axios.get('https://api.quotable.io/random');
        const quote = response.data;
        const message = `
*[ •  ⇝𝐻𝒶𝓈𝓈𝒶𝓃 ʀᴀᴊᴘ𝙾𝙾ᴛ ×͜× - QUOTE ‎ • ]*
*╭┈───────────────•*
*│  ◦* 💬 "${quote.content}"
*│  ◦* - ${quote.author}
*│  ◦* *QUOTES BY ⇝𝐻𝒶𝓈𝓈𝒶𝓃 ʀᴀᴊᴘ𝙾𝙾ᴛ ×͜×*
*╰┈───────────────•*

*•────────────•⟢*
> © ⇝𝐻𝒶𝓈𝓈𝒶𝓃 ʀᴀᴊᴘ𝙾𝙾ᴛ ×͜×
*•────────────•⟢*
`;
        return reply(message);
    } catch (e) {
        console.error("Error fetching quote:", e);
        reply("¢συℓ∂ ησт ƒєт¢н α qυσтє. ρℓєαѕє тяу αgαιη ℓαтєя.");
    }
});
