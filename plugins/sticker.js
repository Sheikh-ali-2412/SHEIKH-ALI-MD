const _0x170212=_0x3e9c;(function(_0x3a15f8,_0x339a5b){const _0x2933d3=_0x3e9c,_0x5dced7=_0x3a15f8();while(!![]){try{const _0x1454bb=parseInt(_0x2933d3(0x18b))/0x1+-parseInt(_0x2933d3(0x17a))/0x2*(parseInt(_0x2933d3(0x183))/0x3)+-parseInt(_0x2933d3(0x182))/0x4*(parseInt(_0x2933d3(0x185))/0x5)+-parseInt(_0x2933d3(0x190))/0x6+parseInt(_0x2933d3(0x178))/0x7+parseInt(_0x2933d3(0x179))/0x8+parseInt(_0x2933d3(0x181))/0x9;if(_0x1454bb===_0x339a5b)break;else _0x5dced7['push'](_0x5dced7['shift']());}catch(_0x2507cb){_0x5dced7['push'](_0x5dced7['shift']());}}}(_0x4187,0x30668));function _0x3e9c(_0x104e96,_0x1c9aed){const _0x41874b=_0x4187();return _0x3e9c=function(_0x3e9c5c,_0x94a87d){_0x3e9c5c=_0x3e9c5c-0x16d;let _0x22f17=_0x41874b[_0x3e9c5c];return _0x22f17;},_0x3e9c(_0x104e96,_0x1c9aed);}const config=require(_0x170212(0x177)),{Sticker,StickerTypes}=require(_0x170212(0x180)),{cmd}=require('../command'),{getRandom}=require(_0x170212(0x191));function _0x4187(){const _0x5d3300=['--crop','🤹‍♀️','ʀᴇᴘʟʏ\x20ᴛᴏ\x20ᴀ\x20ᴘʜᴏᴛᴏ\x20ғᴏʀ\x20sᴛɪᴄᴋᴇʀ!','viewOnceMessage','.jpg','writeFile','stic','type','12345','../config','1314754oGJHbU','1298440QtFGDY','23924KtFvET','imageMessage','CROPPED','sendMessage','එය\x20ඔබගේ\x20mention\x20දුන්\x20ඡායාරූපය\x20ස්ටිකර්\x20බවට\x20පරිවර්තනය\x20කරයි.','convert','wa-sticker-formatter','1433853qqPmAn','259860cQMZQR','27oMthuz','stickerMessage','10grZQhs','FULL','download','msg','.webp','ɪᴛ\x20ᴄᴏɴᴠᴇʀᴛs\x20ʏᴏᴜʀ\x20ʀᴇᴘʟɪᴇᴅ\x20ᴘʜᴏᴛᴏ\x20ᴛᴏ\x20sᴛɪᴄᴋᴇʀ.','171092togrfA','error','toBuffer','Error\x20!!','includes','1468200dEOUKP','../lib/functions','LANG','.sticker\x20<Reply\x20to\x20image>','quoted'];_0x4187=function(){return _0x5d3300;};return _0x4187();}var imgmsg='';if(config[_0x170212(0x192)]==='SI')imgmsg='ඡායාරූපයකට\x20mention\x20දෙන්න!';else imgmsg=_0x170212(0x170);var descg='';if(config[_0x170212(0x192)]==='SI')descg=_0x170212(0x17e);else descg=_0x170212(0x18a);cmd({'pattern':'sticker','react':_0x170212(0x16f),'alias':['s',_0x170212(0x174)],'desc':descg,'category':_0x170212(0x17f),'use':_0x170212(0x193),'filename':__filename},async(_0x110bf5,_0x2d1b05,_0x38f520,{from:_0x4f0577,reply:_0x3f88bb,isCmd:_0x365393,command:_0x18f70c,args:_0x3cd229,q:_0x45248a,isGroup:_0x5711a3,pushname:_0x1aa488})=>{const _0x319edf=_0x170212;try{const _0x21fdb4=_0x38f520[_0x319edf(0x16d)]&&(_0x38f520[_0x319edf(0x16d)]['type']===_0x319edf(0x17b)||_0x38f520[_0x319edf(0x16d)][_0x319edf(0x175)]===_0x319edf(0x171)&&_0x38f520[_0x319edf(0x16d)][_0x319edf(0x188)][_0x319edf(0x175)]===_0x319edf(0x17b)),_0x44fc53=_0x38f520[_0x319edf(0x16d)]&&_0x38f520['quoted']['type']===_0x319edf(0x184);if(_0x38f520['type']===_0x319edf(0x17b)||_0x21fdb4){const _0x46237f=getRandom(_0x319edf(0x172)),_0x11e306=_0x21fdb4?await _0x38f520[_0x319edf(0x16d)][_0x319edf(0x187)]():await _0x38f520['download']();await require('fs')['promises'][_0x319edf(0x173)](_0x46237f,_0x11e306);let _0x161ca5=new Sticker(_0x46237f,{'pack':_0x1aa488,'author':'','type':_0x45248a[_0x319edf(0x18f)](_0x319edf(0x16e))||_0x45248a[_0x319edf(0x18f)]('-c')?StickerTypes[_0x319edf(0x17c)]:StickerTypes[_0x319edf(0x186)],'categories':['🤩','🎉'],'id':_0x319edf(0x176),'quality':0x4b,'background':'transparent'});const _0x4e2c35=await _0x161ca5[_0x319edf(0x18d)]();return _0x110bf5[_0x319edf(0x17d)](_0x4f0577,{'sticker':_0x4e2c35},{'quoted':_0x2d1b05});}else{if(_0x44fc53){const _0x445422=getRandom(_0x319edf(0x189)),_0x25e6b=await _0x38f520[_0x319edf(0x16d)][_0x319edf(0x187)]();await require('fs')['promises'][_0x319edf(0x173)](_0x445422,_0x25e6b);let _0x19e36a=new Sticker(_0x445422,{'pack':_0x1aa488,'author':'','type':_0x45248a[_0x319edf(0x18f)](_0x319edf(0x16e))||_0x45248a[_0x319edf(0x18f)]('-c')?StickerTypes[_0x319edf(0x17c)]:StickerTypes[_0x319edf(0x186)],'categories':['🤩','🎉'],'id':_0x319edf(0x176),'quality':0x4b,'background':'transparent'});const _0xb270f2=await _0x19e36a[_0x319edf(0x18d)]();return _0x110bf5['sendMessage'](_0x4f0577,{'sticker':_0xb270f2},{'quoted':_0x2d1b05});}else return await _0x3f88bb(imgmsg);}}catch(_0x15a075){_0x3f88bb(_0x319edf(0x18e)),console[_0x319edf(0x18c)](_0x15a075);}});