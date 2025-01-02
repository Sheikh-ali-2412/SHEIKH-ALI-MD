/*

                                                                                                                                                                                             
                                                                                                                                                                                             
   SSSSSSSSSSSSSSS HHHHHHHHH     HHHHHHHHHEEEEEEEEEEEEEEEEEEEEEEIIIIIIIIIIKKKKKKKKK    KKKKKKKHHHHHHHHH     HHHHHHHHH                    AAA               LLLLLLLLLLL             IIIIIIIIII
 SS:::::::::::::::SH:::::::H     H:::::::HE::::::::::::::::::::EI::::::::IK:::::::K    K:::::KH:::::::H     H:::::::H                   A:::A              L:::::::::L             I::::::::I
S:::::SSSSSS::::::SH:::::::H     H:::::::HE::::::::::::::::::::EI::::::::IK:::::::K    K:::::KH:::::::H     H:::::::H                  A:::::A             L:::::::::L             I::::::::I
S:::::S     SSSSSSSHH::::::H     H::::::HHEE::::::EEEEEEEEE::::EII::::::IIK:::::::K   K::::::KHH::::::H     H::::::HH                 A:::::::A            LL:::::::LL             II::::::II
S:::::S              H:::::H     H:::::H    E:::::E       EEEEEE  I::::I  KK::::::K  K:::::KKK  H:::::H     H:::::H                  A:::::::::A             L:::::L                 I::::I  
S:::::S              H:::::H     H:::::H    E:::::E               I::::I    K:::::K K:::::K     H:::::H     H:::::H                 A:::::A:::::A            L:::::L                 I::::I  
 S::::SSSS           H::::::HHHHH::::::H    E::::::EEEEEEEEEE     I::::I    K::::::K:::::K      H::::::HHHHH::::::H                A:::::A A:::::A           L:::::L                 I::::I  
  SS::::::SSSSS      H:::::::::::::::::H    E:::::::::::::::E     I::::I    K:::::::::::K       H:::::::::::::::::H               A:::::A   A:::::A          L:::::L                 I::::I  
    SSS::::::::SS    H:::::::::::::::::H    E:::::::::::::::E     I::::I    K:::::::::::K       H:::::::::::::::::H              A:::::A     A:::::A         L:::::L                 I::::I  
       SSSSSS::::S   H::::::HHHHH::::::H    E::::::EEEEEEEEEE     I::::I    K::::::K:::::K      H::::::HHHHH::::::H             A:::::AAAAAAAAA:::::A        L:::::L                 I::::I  
            S:::::S  H:::::H     H:::::H    E:::::E               I::::I    K:::::K K:::::K     H:::::H     H:::::H            A:::::::::::::::::::::A       L:::::L                 I::::I  
            S:::::S  H:::::H     H:::::H    E:::::E       EEEEEE  I::::I  KK::::::K  K:::::KKK  H:::::H     H:::::H           A:::::AAAAAAAAAAAAA:::::A      L:::::L         LLLLLL  I::::I  
SSSSSSS     S:::::SHH::::::H     H::::::HHEE::::::EEEEEEEE:::::EII::::::IIK:::::::K   K::::::KHH::::::H     H::::::HH        A:::::A             A:::::A   LL:::::::LLLLLLLLL:::::LII::::::II
S::::::SSSSSS:::::SH:::::::H     H:::::::HE::::::::::::::::::::EI::::::::IK:::::::K    K:::::KH:::::::H     H:::::::H       A:::::A               A:::::A  L::::::::::::::::::::::LI::::::::I
S:::::::::::::::SS H:::::::H     H:::::::HE::::::::::::::::::::EI::::::::IK:::::::K    K:::::KH:::::::H     H:::::::H      A:::::A                 A:::::A L::::::::::::::::::::::LI::::::::I
 SSSSSSSSSSSSSSS   HHHHHHHHH     HHHHHHHHHEEEEEEEEEEEEEEEEEEEEEEIIIIIIIIIIKKKKKKKKK    KKKKKKKHHHHHHHHH     HHHHHHHHH     AAAAAAA                   AAAAAAALLLLLLLLLLLLLLLLLLLLLLLLIIIIIIIIII
                                                                                                                                                                                             
                                                                                                                                                                                             
                                                                                                                                                                                             
                                                                                                                                                                                             
                                                                                                                                                                                             
                                                                                                                                                                                             
                                                                                                                                                                                             
                                                                                                                                                                                               
created by 𓄂𝕚𝕥𝕩.𝑺𝑯𝑬𝑰𝑲𝑯 𝑨𝑳𝑰 🔥༽༼ 🕵
contact me 923143702270 ♻️
© Copy coder alert ⚠
*/



const { cmd } = require('../command');

// Function to format mentions
const toM = (a) => '@' + a.split('@')[0];

cmd({
    pattern: "ship",
    alias: ["cup", "love"],
    desc: "Randomly pairs the command user with another group member.",
    react: "❤️",
    category: "fun",
    filename: __filename,
}, 
async (conn, mek, m, { from, isGroup, groupMetadata, reply }) => {
    try {
        // Ensure command is used in a group
        if (!isGroup) {
            return reply("This command can only be used in groups.");
        }

        // Get group participants
        const participants = groupMetadata.participants.map(p => p.id);

        if (participants.length < 2) {
            return reply("Not enough members to pair.");
        }

        // Sender of the command
        const sender = m.sender;

        // Randomly select another participant
        let randomParticipant;
        do {
            randomParticipant = participants[Math.floor(Math.random() * participants.length)];
        } while (randomParticipant === sender);

        // Reply with the pairing
        const message = `${toM(sender)} ❤️ ${toM(randomParticipant)}\nCongratulations 💖🍻`;
        await conn.sendMessage(from, { text: message, mentions: [sender, randomParticipant] });
    } catch (e) {
        console.error("Error in ship command:", e);
        reply("An error occurred while processing the command. Please try again.");
    }
});
