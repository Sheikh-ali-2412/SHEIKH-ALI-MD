const _0x43bb85=_0xe091;(function(_0x4b877f,_0x12e9bc){const _0x459831=_0xe091,_0x411383=_0x4b877f();while(!![]){try{const _0x49ae4d=-parseInt(_0x459831(0x198))/0x1+parseInt(_0x459831(0x18f))/0x2+-parseInt(_0x459831(0x197))/0x3*(-parseInt(_0x459831(0x1a2))/0x4)+-parseInt(_0x459831(0x19b))/0x5*(parseInt(_0x459831(0x1a1))/0x6)+parseInt(_0x459831(0x17c))/0x7*(parseInt(_0x459831(0x191))/0x8)+parseInt(_0x459831(0x18a))/0x9*(-parseInt(_0x459831(0x183))/0xa)+-parseInt(_0x459831(0x195))/0xb*(parseInt(_0x459831(0x17e))/0xc);if(_0x49ae4d===_0x12e9bc)break;else _0x411383['push'](_0x411383['shift']());}catch(_0x1878ea){_0x411383['push'](_0x411383['shift']());}}}(_0xbfa9,0x6d367));function _0xbfa9(){const _0x4bcd30=['image','.tourl','url','createReadStream','10ZQasyO','axios','length','download','*Image\x20Uploaded\x20Successfully\x20📸*\x0aSize:\x20','tmpdir','quoted','3698343VgZtLs','msg','startsWith','❌\x20Failed\x20to\x20upload\x20the\x20file.','JawadTechX','1307282INORCl','data','680216TxalSG','tourl','imgtourl','img2url','906785aymIPp','form-data','2541423qjcWhY','195443dXWemb','getHeaders','../command','60vmCIRj','sendMessage','🌻\x20Please\x20reply\x20to\x20an\x20image.','temp_image','utility','https://api.imgbb.com/1/upload?key=06d00f0e4520243a32b58138765a2ecc','267348psIbAg','4ZpXujp','append','error','writeFileSync','14kuPhAc','post','12QifWFA'];_0xbfa9=function(){return _0x4bcd30;};return _0xbfa9();}function _0xe091(_0x121229,_0x2372a4){const _0xbfa98c=_0xbfa9();return _0xe091=function(_0xe0910,_0x38035a){_0xe0910=_0xe0910-0x17c;let _0x5e2997=_0xbfa98c[_0xe0910];return _0x5e2997;},_0xe091(_0x121229,_0x2372a4);}const axios=require(_0x43bb85(0x184)),FormData=require(_0x43bb85(0x196)),fs=require('fs'),os=require('os'),path=require('path'),{cmd}=require(_0x43bb85(0x19a));cmd({'pattern':_0x43bb85(0x192),'alias':[_0x43bb85(0x193),_0x43bb85(0x194),_0x43bb85(0x181)],'react':'🖇','desc':'Convert\x20an\x20image\x20to\x20a\x20URL\x20using\x20imgbb.','category':_0x43bb85(0x19f),'use':_0x43bb85(0x180),'filename':__filename},async(_0x2a615f,_0x296ebb,_0x131287,_0x46c0dd)=>{const _0x2ee863=_0x43bb85,{from:_0x462e92,quoted:_0x38fbf1,reply:_0x74c833,sender:_0x5931e7}=_0x46c0dd;try{const _0x2fc0f4=_0x296ebb[_0x2ee863(0x189)]?_0x296ebb[_0x2ee863(0x189)]:_0x296ebb,_0x4dd0ec=(_0x2fc0f4[_0x2ee863(0x18b)]||_0x2fc0f4)['mimetype']||'';if(!_0x4dd0ec||!_0x4dd0ec[_0x2ee863(0x18c)](_0x2ee863(0x17f)))throw _0x2ee863(0x19d);const _0x227cf8=await _0x2fc0f4[_0x2ee863(0x186)](),_0x18c2b8=path['join'](os[_0x2ee863(0x188)](),_0x2ee863(0x19e));fs[_0x2ee863(0x1a5)](_0x18c2b8,_0x227cf8);const _0x1bf672=new FormData();_0x1bf672[_0x2ee863(0x1a3)](_0x2ee863(0x17f),fs[_0x2ee863(0x182)](_0x18c2b8));const _0x338f64=await axios[_0x2ee863(0x17d)](_0x2ee863(0x1a0),_0x1bf672,{'headers':{..._0x1bf672[_0x2ee863(0x199)]()}});if(!_0x338f64[_0x2ee863(0x190)]||!_0x338f64[_0x2ee863(0x190)][_0x2ee863(0x190)]||!_0x338f64['data'][_0x2ee863(0x190)]['url'])throw _0x2ee863(0x18d);const _0x2b12b1=_0x338f64[_0x2ee863(0x190)]['data']['url'];fs['unlinkSync'](_0x18c2b8);const _0x273817={'mentionedJid':[_0x5931e7],'forwardingScore':0x3e7,'isForwarded':!![],'forwardedNewsletterMessageInfo':{'newsletterJid':'120363354023106228@newsletter','newsletterName':_0x2ee863(0x18e),'serverMessageId':0x8f}};await _0x2a615f[_0x2ee863(0x19c)](_0x462e92,{'text':_0x2ee863(0x187)+_0x227cf8[_0x2ee863(0x185)]+'\x20Byte(s)\x0a*URL:*\x20'+_0x2b12b1+'\x0a\x0a>\x20⚖️\x20ᴜᴘʟᴏᴀᴅᴇᴅ\x20ᴠɪᴀ\x20sʜᴇɪᴋʜ-ᴀʟɪ-ᴍᴅ','contextInfo':_0x273817});}catch(_0x5db687){_0x74c833('Error:\x20'+_0x5db687),console[_0x2ee863(0x1a4)](_0x5db687);}});
