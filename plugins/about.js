/*
created by ⇝𝐻𝒶𝓈𝓈𝒶𝓃 ʀᴀᴊᴘ𝙾𝙾ᴛ ×͜×
contact me 923286813475
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
let madeMenu = `❁ ════ ❃•⇆•❃ ════ ❁

*👋 HELLO ${pushname}*\n\n *I AM ⇝𝐻𝒶𝓈𝓈𝒶𝓃 ʀᴀᴊᴘ𝙾𝙾ᴛ ×͜×*\n\n *I AM 17 YEARS OLD BOY 👀*\n\n *I AM FROM PERSNOL HAI😁🙈*\n\n *I AM SIMPLE WHATSAPP BOT DEVELOPER👨‍💻*\n\n\n *THANK YOU.😊*

❁ ════ ❃•⇆•❃ ════ ❁

> *⇝𝐻𝒶𝓈𝓈𝒶𝓃 ʀᴀᴊᴘ𝙾𝙾ᴛ ×͜×¼*

╰━❁ ═══ ❃•⇆•❃ ═══ ❁━╯
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
