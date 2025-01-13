const config = require('../config')
const {cmd , commands} = require('../command')
const { fetchJson } = require('../lib/functions')

cmd({
    pattern: "quran",
    alias: ["alquran","surah"],
    react: "🤍",
    desc: "get quran verses.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let data = await fetchJson(`https://quranapi.pages.dev/api/${q}.json`)
return reply(` 
 *[ •  𝐐𝐔𝐑𝐀𝐍 - 𝐕𝐄𝐑𝐒𝐄𝐒 ‎ • ]*
 
 *╭┈───────────────•*
*│  ◦* *𝐒𝐔𝐑𝐀𝐇-𝐍𝐀𝐌𝐄*❤️  ${data.surahName}
 
*│  ◦* *𝐒𝐔𝐑𝐀𝐇-𝐍𝐀𝐌𝐄-𝐄𝐍*💐  ${data.surahNameTranslation} 
 
*│  ◦* *𝐒𝐔𝐑𝐀𝐇 𝐍𝐔𝐌𝐁𝐄𝐑*❤️  ${data.surahNo}

*│  ◦* *𝐀𝐘𝐀𝐇 𝐍𝐔𝐌𝐁𝐄𝐑*❤️  ${data.ayahNo}

*│  ◦* *𝐀𝐘𝐀𝐇*❤️  ${data.arabic1}
*╰┈───────────────•*
 
 *•────────────•⟢*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𓄂𝕚𝕥𝕩.𝑺𝑯𝑬𝑰𝑲𝑯 𝑨𝑳𝑰 🔥༽༼
*•────────────•⟢*`)
}catch(e){
console.log(e)
reply(`${e}`)
}
})
