/* 
created by 𓄂𝕚𝕥𝕩.𝑺𝑯𝑬𝑰𝑲𝑯 𝑨𝑳𝑰 🔥༽༼ 🕵
contact me 923143702270 ♻️
© Copy coder alert ⚠
*/

const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `*╭┈───────────────•*

*👋 HELLO ${pushname}*

*╰┈───────────────•*
*╭┈───────────────•*
*│  ◦* *ᴡᴇʟᴄᴏᴍᴇ ɪᴛs sʜᴇɪᴋʜ-ᴀʟɪ-ᴍᴅ-ʙᴏᴛ*
*│  ◦* *ᴄʀᴇᴀᴛᴇʀ ᴀʟɪ ᴀʜᴍᴀᴅ...²⁴⁰⁶*
*│  ◦* *ʀᴇᴀʟ ɴᴀᴍᴇ➠ sʜᴇɪᴋʜ-ᴀʟɪ-ᴀʜᴍᴀᴅ*
*│  ◦* *ᴘᴜʙʟɪᴄ ɴᴀᴍᴇ➠ sʜᴇɪᴋʜ sᴀʙ*
*│  ◦* *ᴀɢᴇ➠ ɴɪɴᴇᴛᴇᴇɴ ʏᴇᴀʀ*
*│  ◦* *ᴄɪᴛʏ➠ ᴘᴇʀsɴᴏʟ ʜᴀɪ*
*│  ◦* *ᴀ sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ ᴅᴇᴠᴇʟᴏᴘᴇʀ*
*╰┈───────────────•*
> *◆◆◆◆◆◆◆◆◆◆◆◆*

*[ • SHEIKH-ALI-MD - TEAM • ]*
*╭┈───────────────•*
*│  ◦* *▢➠ᴀʟɪ ᴀʜᴍᴀᴅ...²⁴⁰⁶😈*
*│  ◦* *▢➠ᴀʟɪ ᴀʜᴍᴀᴅ's ǫᴜᴇᴇɴ💘🙈*
*│  ◦* *▢➠ʜᴀssᴀɴ ʀᴀᴊᴘᴏᴏᴛ😈*
*│  ◦* *▢➠ʜᴀssᴀɴ's ǫᴜᴇᴇɴ 💓
*│  ◦* *▢➠ᴘᴇʀsᴏɴᴀʟ ʜᴀɪ🤭*
*╰┈───────────────•*
*•────────────•⟢*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𓄂𝕚𝕥𝕩.𝑺𝑯𝑬𝑰𝑲𝑯 𝑨𝑳𝑰 🔥༽༼
*•────────────•⟢*
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:about},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
