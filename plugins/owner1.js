const _0x296952=_0x29a0;(function(_0x30fe59,_0x5ec5a0){const _0x1b4cf3=_0x29a0,_0x121447=_0x30fe59();while(!![]){try{const _0x568d55=-parseInt(_0x1b4cf3(0x1d3))/0x1+-parseInt(_0x1b4cf3(0x1ab))/0x2+parseInt(_0x1b4cf3(0x1d2))/0x3+-parseInt(_0x1b4cf3(0x1e2))/0x4+parseInt(_0x1b4cf3(0x1bd))/0x5*(parseInt(_0x1b4cf3(0x1f0))/0x6)+parseInt(_0x1b4cf3(0x1ae))/0x7+parseInt(_0x1b4cf3(0x1d0))/0x8*(-parseInt(_0x1b4cf3(0x1c3))/0x9);if(_0x568d55===_0x5ec5a0)break;else _0x121447['push'](_0x121447['shift']());}catch(_0x3d9087){_0x121447['push'](_0x121447['shift']());}}}(_0x451a,0xa331d));function _0x451a(){const _0x48644d=['❌\x20Error\x20blocking\x20user:\x20','❌\x20Please\x20reply\x20to\x20an\x20image.','delete','❌\x20ඡායාරූපයට\x20පිළිතුරු\x20දක්වන්න.','📢\x20පණිවිඩය\x20සියළුම\x20කණ්ඩායම්\x20වෙත\x20පරිසීලනය\x20කරන\x20ලදී.','clearchats','updateProfilePicture','Set\x20bot\x20profile\x20picture.','1934048ttTLav','🚫\x20පරිශීලකයා\x20සාර්ථකව\x20අවහිර\x20කර\x20ඇත.','length','{groupJids}','../lib/functions','replace','unblock','✅\x20පරිශීලකයා\x20සාර්ථකව\x20අවහිර\x20ඉවත්\x20කර\x20ඇත.','groupFetchAllParticipating','❌\x20ඔබ\x20අවහිර\x20කරන\x20කෙනාට\x20පිළිතුරු\x20දෙන්න.','Unblock\x20a\x20user.','✅\x20User\x20unblocked\x20successfully.','message','🧹\x20All\x20chats\x20cleared\x20successfully!','1738698weltvN','broadcast','then','sendMessage','📢\x20Message\x20broadcasted\x20to\x20all\x20groups.','Shutdown\x20the\x20bot.','owner','block','❌\x20Error\x20updating\x20profile\x20picture:\x20','../command','Block\x20a\x20user.','modifyChat','LANG','❌\x20Please\x20reply\x20to\x20the\x20user\x20you\x20want\x20to\x20block.','🤖\x20*Bot\x20JID:*\x20{jid}','setpp','124146WBEoNl','🚫\x20User\x20blocked\x20successfully.','../config','901439VlDrgo','Get\x20the\x20bot\x27s\x20JID.','❌\x20ඔබ\x20හිමිකරුවෙකු\x20නොවේ!','sender','notOwner','❌\x20You\x20are\x20not\x20the\x20owner!','🤖\x20*බොට්\x20JID:*\x20{jid}','unblockSuccess','child_process','Get\x20the\x20list\x20of\x20JIDs\x20for\x20all\x20groups\x20the\x20bot\x20is\x20part\x20of.','blockPrompt','join','🖼️','unblockPrompt','gjid','20pyxyUh','broadcastPrompt','broadcastSuccess','📝\x20*කණ්ඩායම්\x20JID:*\x0a\x0a{groupJids}','❌\x20Please\x20reply\x20to\x20the\x20user\x20you\x20want\x20to\x20unblock.','imageMessage','1090251ryNTJe','❌\x20Error\x20clearing\x20chats:\x20{error}','blockSuccess','clearchatsError','❌\x20ඔබ\x20අවහිර\x20ඉවත්\x20කරන\x20කෙනාට\x20පිළිතුරු\x20දෙන්න.','jid','🖼️\x20ගැටයුම්\x20පින්තූරය\x20සාර්ථකව\x20යාවත්කාලීන\x20කරන\x20ලදී!','❌\x20චැට්\x20මකා\x20දමන\x20කාලයේ\x20දෝෂයක්:\x20{error}','exit','Clear\x20all\x20chats\x20from\x20the\x20bot.','user','all','🖼️\x20Profile\x20picture\x20updated\x20successfully!','72HnUiCJ','🛑\x20බොට්\x20නිවීම...','3783519jEfrTO','244801NqqmVz','setppSuccess','{jid}','keys','updateBlockStatus','setppPrompt','❌\x20Error\x20unblocking\x20user:\x20'];_0x451a=function(){return _0x48644d;};return _0x451a();}const {cmd,commands}=require(_0x296952(0x1a4)),{exec}=require(_0x296952(0x1b6)),config=require(_0x296952(0x1ad)),{sleep}=require(_0x296952(0x1e6)),messages={'EN':{'notOwner':_0x296952(0x1b3),'shuttingDown':'🛑\x20Shutting\x20down...','broadcastPrompt':'📢\x20Please\x20provide\x20a\x20message\x20to\x20broadcast.','broadcastSuccess':_0x296952(0x1f4),'setppPrompt':_0x296952(0x1db),'setppSuccess':_0x296952(0x1cf),'blockPrompt':_0x296952(0x1a8),'blockSuccess':_0x296952(0x1ac),'unblockPrompt':_0x296952(0x1c1),'unblockSuccess':_0x296952(0x1ed),'clearchatsSuccess':_0x296952(0x1ef),'clearchatsError':_0x296952(0x1c4),'jid':_0x296952(0x1a9),'gjid':'📝\x20*Group\x20JIDs:*\x0a\x0a{groupJids}'},'SI':{'notOwner':_0x296952(0x1b0),'shuttingDown':_0x296952(0x1d1),'broadcastPrompt':'📢\x20කරුණාකර\x20පණිවිඩයක්\x20ලබා\x20දී\x20broadcast\x20කරන්න.','broadcastSuccess':_0x296952(0x1de),'setppPrompt':_0x296952(0x1dd),'setppSuccess':_0x296952(0x1c9),'blockPrompt':_0x296952(0x1eb),'blockSuccess':_0x296952(0x1e3),'unblockPrompt':_0x296952(0x1c7),'unblockSuccess':_0x296952(0x1e9),'clearchatsSuccess':'🧹\x20සියලු\x20චැට්\x20මකා\x20දමන\x20ලදී!','clearchatsError':_0x296952(0x1ca),'jid':_0x296952(0x1b4),'gjid':_0x296952(0x1c0)}};function _0x29a0(_0x493304,_0x52cbba){const _0x451aef=_0x451a();return _0x29a0=function(_0x29a095,_0x3b9d71){_0x29a095=_0x29a095-0x1a4;let _0x1e451f=_0x451aef[_0x29a095];return _0x1e451f;},_0x29a0(_0x493304,_0x52cbba);}cmd({'pattern':'shutdown','desc':_0x296952(0x1f5),'category':'owner','react':'🛑','filename':__filename},async(_0x406282,_0x1e620d,_0x57a9ac,{from:_0xc38885,isOwner:_0x64e0b5,reply:_0x191e89})=>{const _0x70316b=_0x296952;if(!_0x64e0b5)return _0x191e89(messages[config[_0x70316b(0x1a7)]][_0x70316b(0x1b2)]);_0x191e89(messages[config[_0x70316b(0x1a7)]]['shuttingDown'])[_0x70316b(0x1f2)](()=>process[_0x70316b(0x1cb)]());}),cmd({'pattern':_0x296952(0x1f1),'desc':'Broadcast\x20a\x20message\x20to\x20all\x20groups.','category':_0x296952(0x1f6),'react':'📢','filename':__filename},async(_0x405ba2,_0x5042b5,_0x540cb4,{from:_0x178d8e,isOwner:_0x5ac76b,args:_0xf7e289,reply:_0x27ee83})=>{const _0x3e5fad=_0x296952;if(!_0x5ac76b)return _0x27ee83(messages[config['LANG']][_0x3e5fad(0x1b2)]);if(_0xf7e289[_0x3e5fad(0x1e4)]===0x0)return _0x27ee83(messages[config[_0x3e5fad(0x1a7)]][_0x3e5fad(0x1be)]);const _0x4bc241=_0xf7e289[_0x3e5fad(0x1b9)]('\x20'),_0x50e640=Object[_0x3e5fad(0x1d6)](await _0x405ba2['groupFetchAllParticipating']());for(const _0x963928 of _0x50e640){await _0x405ba2[_0x3e5fad(0x1f3)](_0x963928,{'text':_0x4bc241},{'quoted':_0x5042b5});}_0x27ee83(messages[config[_0x3e5fad(0x1a7)]][_0x3e5fad(0x1bf)]);}),cmd({'pattern':_0x296952(0x1aa),'desc':_0x296952(0x1e1),'category':_0x296952(0x1f6),'react':_0x296952(0x1ba),'filename':__filename},async(_0x2366d5,_0x779547,_0x5614f2,{from:_0x44fd6c,isOwner:_0xe4a1e3,quoted:_0xbd1290,reply:_0x1b42fb})=>{const _0x54185f=_0x296952;if(!_0xe4a1e3)return _0x1b42fb(messages[config[_0x54185f(0x1a7)]][_0x54185f(0x1b2)]);if(!_0xbd1290||!_0xbd1290[_0x54185f(0x1ee)][_0x54185f(0x1c2)])return _0x1b42fb(messages[config['LANG']][_0x54185f(0x1d8)]);try{const _0x4d9e76=await _0x2366d5['downloadMediaMessage'](_0xbd1290);await _0x2366d5[_0x54185f(0x1e0)](_0x2366d5[_0x54185f(0x1cd)][_0x54185f(0x1c8)],{'url':_0x4d9e76}),_0x1b42fb(messages[config['LANG']][_0x54185f(0x1d4)]);}catch(_0x5dd850){_0x1b42fb(_0x54185f(0x1f8)+_0x5dd850['message']);}}),cmd({'pattern':'block','desc':_0x296952(0x1a5),'category':'owner','react':'🚫','filename':__filename},async(_0x4b1002,_0x6df4e0,_0x461f96,{from:_0x3c2340,isOwner:_0x226933,quoted:_0x1a5400,reply:_0x46ee22})=>{const _0xfd5ded=_0x296952;if(!_0x226933)return _0x46ee22(messages[config[_0xfd5ded(0x1a7)]][_0xfd5ded(0x1b2)]);if(!_0x1a5400)return _0x46ee22(messages[config[_0xfd5ded(0x1a7)]][_0xfd5ded(0x1b8)]);const _0x5ee37b=_0x1a5400[_0xfd5ded(0x1b1)];try{await _0x4b1002[_0xfd5ded(0x1d7)](_0x5ee37b,_0xfd5ded(0x1f7)),_0x46ee22(messages[config['LANG']][_0xfd5ded(0x1c5)]);}catch(_0x5c430b){_0x46ee22(_0xfd5ded(0x1da)+_0x5c430b[_0xfd5ded(0x1ee)]);}}),cmd({'pattern':_0x296952(0x1e8),'desc':_0x296952(0x1ec),'category':_0x296952(0x1f6),'react':'✅','filename':__filename},async(_0x1e457c,_0x5525d1,_0x61196a,{from:_0x2d7033,isOwner:_0x4d06b2,quoted:_0x2bf8b4,reply:_0x4525b})=>{const _0xb51fdf=_0x296952;if(!_0x4d06b2)return _0x4525b(messages[config[_0xb51fdf(0x1a7)]]['notOwner']);if(!_0x2bf8b4)return _0x4525b(messages[config['LANG']][_0xb51fdf(0x1bb)]);const _0x413615=_0x2bf8b4[_0xb51fdf(0x1b1)];try{await _0x1e457c[_0xb51fdf(0x1d7)](_0x413615,_0xb51fdf(0x1e8)),_0x4525b(messages[config[_0xb51fdf(0x1a7)]][_0xb51fdf(0x1b5)]);}catch(_0x52f811){_0x4525b(_0xb51fdf(0x1d9)+_0x52f811[_0xb51fdf(0x1ee)]);}}),cmd({'pattern':_0x296952(0x1df),'desc':_0x296952(0x1cc),'category':'owner','react':'🧹','filename':__filename},async(_0x420a2a,_0x5c2964,_0x16d6ff,{from:_0x91ac4a,isOwner:_0x43bb27,reply:_0x376a65})=>{const _0x4f97ad=_0x296952;if(!_0x43bb27)return _0x376a65(messages[config[_0x4f97ad(0x1a7)]][_0x4f97ad(0x1b2)]);try{const _0x2000c5=_0x420a2a['chats'][_0x4f97ad(0x1ce)]();for(const _0x3decd8 of _0x2000c5){await _0x420a2a[_0x4f97ad(0x1a6)](_0x3decd8[_0x4f97ad(0x1c8)],_0x4f97ad(0x1dc));}_0x376a65(messages[config['LANG']]['clearchatsSuccess']);}catch(_0x40f180){_0x376a65(messages[config[_0x4f97ad(0x1a7)]][_0x4f97ad(0x1c6)][_0x4f97ad(0x1e7)]('{error}',_0x40f180['message']));}}),cmd({'pattern':_0x296952(0x1c8),'desc':_0x296952(0x1af),'category':_0x296952(0x1f6),'react':'🤖','filename':__filename},async(_0x481ec6,_0x125d34,_0x3b86e0,{from:_0x4dbfc0,isOwner:_0x4c9e3a,reply:_0xb9084f})=>{const _0x42f8dd=_0x296952;if(!_0x4c9e3a)return _0xb9084f(messages[config['LANG']][_0x42f8dd(0x1b2)]);_0xb9084f(messages[config[_0x42f8dd(0x1a7)]][_0x42f8dd(0x1c8)][_0x42f8dd(0x1e7)](_0x42f8dd(0x1d5),_0x481ec6[_0x42f8dd(0x1cd)][_0x42f8dd(0x1c8)]));}),cmd({'pattern':_0x296952(0x1bc),'desc':_0x296952(0x1b7),'category':_0x296952(0x1f6),'react':'📝','filename':__filename},async(_0xb96050,_0x4d3327,_0x2efcba,{from:_0x1c50e0,isOwner:_0xab870c,reply:_0x2e7708})=>{const _0x323f6f=_0x296952;if(!_0xab870c)return _0x2e7708(messages[config[_0x323f6f(0x1a7)]][_0x323f6f(0x1b2)]);const _0x5e3925=await _0xb96050[_0x323f6f(0x1ea)](),_0x262d25=Object[_0x323f6f(0x1d6)](_0x5e3925)['join']('\x0a');_0x2e7708(messages[config[_0x323f6f(0x1a7)]]['gjid'][_0x323f6f(0x1e7)](_0x323f6f(0x1e5),_0x262d25));});