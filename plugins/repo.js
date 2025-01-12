const { cmd, commands } = require('../command');
const config = require('../config');

// repo info
cmd({
    pattern: "sheikhrepo",
    alias: ["sc", "script", "info"],
    desc: "Info about the bot repository",
    category: "main",
    react: "👨‍💻",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `*𝐇𝐞𝐥𝐥𝐨 𝐝𝐞𝐚𝐫 𝐒𝐇𝐄𝐈𝐊𝐇-𝐀𝐋𝐈-𝐌𝐃 𝐔𝐬𝐞𝐫! 👋🏻* 

> sɪᴍᴘʟᴇ , sᴛʀᴀɪɢʜᴛ ғᴏʀᴡᴀʀᴅ ʙᴜᴛ ʟᴏᴀᴅᴇᴅ Wi*th ғᴇᴀᴛ-ᴜʀᴇs 🎊, ᴍᴇᴇ-ᴛ sʜᴇɪᴋʜ-ᴀʟɪ-ᴍᴅ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ.

*𝐓𝐡𝐚𝐧𝐤𝐬 𝐟𝐨𝐫 𝐮𝐬𝐢𝐧𝐠 𝐒𝐇𝐄𝐈𝐊𝐇-𝐀𝐋𝐈-𝐌𝐃 🚩* 

> ᴅᴏɴ'ᴛ ғᴏʀɢᴇᴛ ᴛᴏ ғʀᴏᴋ ᴛʜᴇ ʀᴇᴘᴏ ⤵️

https://github.com/Sheikh-ali-2412/SHEIKH-ALI-MD`;

        // Send image with caption
        await conn.sendMessage(from, { 
            image: { url: `https://i.ibb.co/k9F88tw/6383.jpg` }, 
            caption: dec, 
            contextInfo: { 
                mentionedJid: [m.sender], 
                forwardingScore: 999, 
                isForwarded: true, 
                forwardedNewsletterMessageInfo: { 
                    newsletterJid: '120363354023106228@newsletter', 
                    newsletterName: '𓄂𝕚𝕥𝕩.𝑺𝑯𝑬𝑰𝑲𝑯 𝑨𝑳𝑰 🔥༽༼', 
                    serverMessageId: 143 
                } 
            } 
        }, { quoted: mek });

        // Send audio with contextInfo
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/JawadYTX/KHAN-DATA/raw/refs/heads/main/autovoice/repo.m4a' },
            mimetype: 'audio/mp4',
            ptt: true,
            contextInfo: { 
                mentionedJid: [m.sender], 
                forwardingScore: 999, 
                isForwarded: true, 
                forwardedNewsletterMessageInfo: { 
                    newsletterJid: '120363354023106228@newsletter', 
                    newsletterName: '𓄂𝕚𝕥𝕩.𝑺𝑯𝑬𝑰𝑲𝑯 𝑨𝑳𝑰 🔥༽༼', 
                    serverMessageId: 143 
                } 
            }
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
