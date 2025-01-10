const config = require('../config');
const { cmd, commands } = require('../command');
const wiki = require('wikipedia');

// Define the Wikipedia search command
cmd({
    pattern: "wiki",
    desc: "Search Wikipedia for information",
    category: "main",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Check if a query was provided
        if (!q) {
            return reply('Please provide a search query.');
        }

        // Fetch summary from Wikipedia
        const summary = await wiki.summary(q);
        
        // Format the reply
        let replyText = `
*📚 𝐖𝐢𝐤𝐢𝐩𝐞𝐝𝐢𝐚 𝐒𝐮𝐦𝐦𝐚𝐫𝐲 📚*

🔍 *ǫᴜᴇʀʏ*: _${q}_

💬 *ᴛɪᴛʟᴇ*: _${summary.title}_

📝 *sᴜᴍᴍᴀʀʏ*: _${summary.extract}_

🔗 *ᴜʀʟ*: ${summary.content_urls.desktop.page}

> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𓄂𝕚𝕥𝕩.𝑺𝑯𝑬𝑰𝑲𝑯 𝑨𝑳𝑰 🔥༽༼ `;

        // Send the reply with the thumbnail image
        await conn.sendMessage(from, { image: { url: summary.originalimage.source }, caption: replyText }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`Error: ${e.message}`);
    }
});
