const config = require('../config');
const { cmd, commands } = require('../command');
const { runtime } = require('../lib/functions');
const axios = require('axios');

function isEnabled(value) {
    // Function to check if a value represents a "true" boolean state
    return value && value.toString().toLowerCase() === "true";
}

cmd({
    pattern: "env",
    alias: ["setting", "allvar"],
    desc: "Settings of bot",
    category: "menu",
    react: "⤵️",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, reply }) => {
    try {
        // Define the settings message with the correct boolean checks
        let envSettings = `╭━━━〔 *𝐒𝐇𝐄𝐈𝐊𝐇-𝐀𝐋𝐈-𝐌𝐃* 〕━━━┈⊷
┃▸╭───────────
┃▸┃๏ *𝐄𝐍𝐕 𝐒𝐄𝐓𝐓𝐈𝐍𝐆𝐒 🗿*
┃▸└───────────···๏
╰────────────────┈⊷
╭━━〔 *𝐄𝐧𝐚𝐛𝐥𝐞𝐝 𝐃𝐢𝐬𝐚𝐛𝐥𝐞𝐝* 〕━━┈⊷
┇๏ *ᴀᴜᴛᴏ ʀᴇᴀᴅ sᴛᴀᴛᴜs:* ${isEnabled(config.AUTO_STATUS_SEEN) ? "ᴇɴᴀʙʟᴇᴅ ✅" : "ᴅɪsᴀ-ʙʟᴇᴅ ❌"}
┇๏ *ᴀᴜᴛᴏ ʀᴇᴘʟʏ sᴛᴀᴛᴜs:* ${isEnabled(config.AUTO_STATUS_REPLY) ? "ᴇɴᴀʙʟᴇᴅ ✅" : "ᴅɪsᴀʙʟᴇᴅ ❌"}
┇๏ *ᴀᴜᴛᴏ ʀᴇᴘʟʏ:* ${isEnabled(config.AUTO_REPLY) ? "ᴇɴᴀʙʟᴇᴅ ✅" : "ᴅɪsᴀʙʟᴇᴅ ❌"}
┇๏ *ᴀᴜᴛᴏ sᴛɪᴄᴋᴇʀ:* ${isEnabled(config.AUTO_STICKER) ? "ᴇɴᴀʙʟᴇᴅ ✅" : "ᴅɪsᴀʙʟᴇᴅ ❌"}
┇๏ *ᴀᴜᴛᴏ ᴠᴏɪᴄᴇ:* ${isEnabled(config.AUTO_VOICE) ? "ᴇɴᴀʙʟᴇᴅ ✅" : "ᴅɪsᴀʙʟᴇᴅ ❌"}
┇๏ *ᴄᴜsᴛᴏᴍ ʀᴇᴀᴄᴛs:* ${isEnabled(config.CUSTOM_REACT) ? "ᴇɴᴀʙʟᴇᴅ ✅" : "ᴅɪsᴀʙʟᴇᴅ ❌"}
┇๏ *ᴀᴜᴛᴏ ʀᴇᴀᴄᴛ:* ${isEnabled(config.AUTO_REACT) ? "ᴇɴᴀʙʟᴇᴅ ✅" : "ᴅɪsᴀʙʟᴇᴅ ❌"}
┇๏ *ᴅᴇʟᴇᴛᴇ ʟɪɴᴋs:* ${isEnabled(config.DELETE_LINKS) ? "ᴇɴᴀʙʟᴇᴅ ✅" : "ᴅɪsᴀʙʟᴇᴅ ❌"}
┇๏ *ᴀɴᴛɪ-ʟɪɴᴋ:* ${isEnabled(config.ANTI_LINK) ? "ᴇɴᴀʙʟᴇᴅ ✅" : "ᴅɪsᴀʙʟᴇᴅ ❌"}
┇๏ *ᴀɴᴛɪ-ʙᴀᴅ ᴡᴏʀᴅs:* ${isEnabled(config.ANTI_BAD) ? "ᴇɴᴀʙʟᴇᴅ ✅" : "ᴅɪsᴀʙʟᴇᴅ ❌"}
┇๏ *ᴀᴜᴛᴏ ᴛʏᴘɪɴɢ:* ${isEnabled(config.AUTO_TYPING) ? "ᴇɴᴀʙʟᴇᴅ ✅" : "ᴅɪsᴀʙʟᴇᴅ ❌"}
┇๏ *ᴀᴜᴛᴏ ʀᴇᴄᴏʀᴅɪɴɢ:* ${isEnabled(config.AUTO_RECORDING) ? "ᴇɴᴀʙʟᴇᴅ ✅" : "ᴅɪsᴀʙʟᴇᴅ ❌"}
┇๏ *ᴀʟᴡᴀʏs ᴏɴʟɪɴᴇ:* ${isEnabled(config.ALWAYS_ONLINE) ? "ᴇɴᴀʙʟᴇᴅ ✅" : "ᴅɪsᴀʙʟᴇᴅ ❌"}
┇๏ *ᴘᴜʙʟɪᴄ ᴍᴏᴅᴇ:* ${isEnabled(config.PUBLIC_MODE) ? "ᴇɴᴀʙʟᴇᴅ ✅" : "ᴅɪsᴀʙʟᴇᴅ ❌"}
┇๏ *ʀᴇᴀᴅ ᴍᴇssᴀɢᴇ:* ${isEnabled(config.READ_MESSAGE) ? "ᴇɴᴀʙʟᴇᴅ ✅" : "ᴅɪsᴀʙʟᴇᴅ ❌"}
╰━━━━━━━━━━━━──┈⊷
> ${config.DESCRIPTION}`;

        // Send message with an image
        await conn.sendMessage(
            from,
            {
                image: { url: 'https://i.ibb.co/k9F88tw/6383.jpg' }, // Image URL
                caption: envSettings,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '0029Vao1lnR1nozDF8jBNh3B@newsletter',
                        newsletterName: "𓄂𝕚𝕥𝕩.𝑺𝑯𝑬𝑰𝑲𝑯 𝑨𝑳𝑰 🔥༽༼",
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send an audio file
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/JawadYTX/KHAN-DATA/raw/refs/heads/main/autovoice/menunew.m4a' }, // Audio URL
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });

    } catch (error) {
        console.log(error);
        reply(`Error: ${error.message}`);
    }
});
