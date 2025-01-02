const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*[ •  B O T - O W N E R ‎ • ]*
*╭┈───────────────•*
*│  ◦* * 𝐀𝐋𝐈 𝐀𝐇𝐌𝐀𝐃•••²⁴⁰⁶*
*╰┈───────────────•*

*[ •  SHEIKH-ALI--MD - REPO ‎ • ]*
*╭┈───────────────•*
*│  ◦* *https://github.com/Sheikh-ali-2412/SHEIKH-ALI-MD*
*╰┈───────────────•*

*[ •  SUPPORT - GROUP‎ • ]*
*╭┈───────────────•*
*│  ◦* *https://whatsapp.com/channel/0029Vao1lnR1nozDF8jBNh3B*
*╰┈───────────────•*

*•────────────•⟢*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𓄂𝕚𝕥𝕩.𝑺𝑯𝑬𝑰𝑲𝑯 𝑨𝑳𝑰 🔥༽༼
*•────────────•⟢*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '12036323288171807@newsletter',
      newsletterName: "ALIAHMAD2406",
      serverMessageId: 999
    },
externalAdReply: { 
title: 'SHEIKH-ALI-MD',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/Sheikh-ali-2412/SHEIKH-ALI-MD" ,
thumbnailUrl: "https://i.ibb.co/KFYzSLs/Picsart-24-11-23-16-00-15-845.jpg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
