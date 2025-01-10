const axios = require('axios');
const { cmd } = require('../command');
const config = require('../config'); // Ensure your API key is in config

cmd({
    pattern: "movie",
    desc: "Fetch detailed information about a movie.",
    category: "utility",
    react: "🎬",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const movieName = args.join(' ');
        if (!movieName) {
            return reply("📽️ Please provide the name of the movie.");
        }

        const apiUrl = `http://www.omdbapi.com/?t=${encodeURIComponent(movieName)}&apikey=${config.OMDB_API_KEY}`;
        const response = await axios.get(apiUrl);

        const data = response.data;
        if (data.Response === "False") {
            return reply("🚫 Movie not found.");
        }

        const movieInfo = `
🎬 *𝐌𝐨𝐯𝐢𝐞 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧* 🎬

🎥 *ᴛɪᴛʟᴇ:* ${data.Title}
📅 *ʏᴇᴀʀ:* ${data.Year}
🌟 *ʀᴀᴛᴇᴅ:* ${data.Rated}
📆 *ʀᴇʟᴇᴀsᴇᴅ:* ${data.Released}
⏳ *ʀᴜɴᴛɪᴍᴇ:* ${data.Runtime}
🎭 *ɢᴇɴʀᴇ:* ${data.Genre}
🎬 *ᴅɪʀᴇᴄᴛᴏʀ:* ${data.Director}
✍️ *ᴡʀɪᴛᴇʀ:* ${data.Writer}
🎭 *ᴀᴄᴛᴏʀs:* ${data.Actors}
📝 *ᴘʟᴏᴛ:* ${data.Plot}
🌍 *ʟᴀɴɢᴜᴀɢᴇ:* ${data.Language}
🇺🇸 *ᴄᴏᴜɴᴛʀʏ:* ${data.Country}
🏆 *ᴀᴡᴀʀᴅs:* ${data.Awards}
⭐ *ɪᴍᴅʙ ʀᴀᴛɪɴɢ:* ${data.imdbRating}
🗳️ *ɪᴍᴅʙ ᴠᴏᴛᴇs:* ${data.imdbVotes}
`;

        // Define the image URL
        const imageUrl = data.Poster && data.Poster !== 'N/A' ? data.Poster : config.ALIVE_IMG;

        // Send the movie information along with the poster image
        await conn.sendMessage(from, {
            image: { url: imageUrl },
            caption: `${movieInfo}\n> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𓄂𝕚𝕥𝕩.𝑺𝑯𝑬𝑰𝑲𝑯 𝑨𝑳𝑰 🔥༽༼`
        }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`❌ Error: ${e.message}`);
    }
});
