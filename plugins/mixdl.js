const _0x404392=_0x479f;(function(_0x186416,_0x9e0d03){const _0xbd3d57=_0x479f,_0x3e8ed0=_0x186416();while(!![]){try{const _0x2b0631=-parseInt(_0xbd3d57(0x1c6))/0x1+parseInt(_0xbd3d57(0x1ae))/0x2*(-parseInt(_0xbd3d57(0x1e9))/0x3)+parseInt(_0xbd3d57(0x1e5))/0x4+-parseInt(_0xbd3d57(0x1a2))/0x5+parseInt(_0xbd3d57(0x1c0))/0x6+parseInt(_0xbd3d57(0x1c8))/0x7+parseInt(_0xbd3d57(0x1a3))/0x8*(parseInt(_0xbd3d57(0x1af))/0x9);if(_0x2b0631===_0x9e0d03)break;else _0x3e8ed0['push'](_0x3e8ed0['shift']());}catch(_0x55562f){_0x3e8ed0['push'](_0x3e8ed0['shift']());}}}(_0x225e,0x7f428));const {cmd}=require('../command'),yts=require('yt-search'),path=require('path'),axios=require(_0x404392(0x1cb)),fs=require('fs');function _0x225e(){const _0x3750f9=['.play8\x20<video\x20name>','838BAcCFI','71856nNAqnp','❌\x20No\x20results\x20found\x20for\x20\x22','.apk\x20<appName>','120363354023106228@newsletter','*Please\x20provide\x20a\x20song\x20name\x20or\x20keywords\x20to\x20search\x20for.*','play5','\x22...*','video/mp4','*🔗\x20Generating\x20TinyURL...*','success','❌\x20Failed\x20to\x20fetch\x20APK\x20for\x20\x22','catch','Download\x20MP3\x20audio\x20from\x20YouTube\x20by\x20searching\x20for\x20song\x20names.','https://api.giftedtech.web.id/api/download/facebook?apikey=gifted&url=','finish','play6','audio/mp4','2097612UwBHim','.apk','*Please\x20provide\x20a\x20Facebook\x20video\x20URL.*','length','Generate\x20a\x20TinyURL\x20from\x20a\x20long\x20URL.','https://api.giftedtech.web.id/api/download/apkdl?apikey=gifted&appName=','994311GrdUxO','.play7\x20<song\x20name>','3901219TDhmuk','title','Download\x20video\x20from\x20YouTube\x20by\x20searching\x20for\x20keywords.','axios','.play3\x20<song\x20name\x20or\x20keywords>','Download\x20APK\x20files\x20for\x20Android\x20apps.','.video\x20<keywords>','❌\x20Failed\x20to\x20fetch\x20audio\x20for\x20\x22','videos','data','*Please\x20provide\x20a\x20video\x20name\x20to\x20search\x20for.*','*🎧\x20Searching\x20for\x20the\x20song...*','Download\x20video\x20from\x20Facebook\x20by\x20URL.','GET','url','sendMessage','https://api.davidcyriltech.my.id/download/ytmp3?url=','https://api.giftedtech.web.id/api/download/dlmp4?apikey=gifted&url=','Download\x20MP4\x20video\x20from\x20YouTube\x20by\x20searching\x20for\x20video\x20names.','*Please\x20provide\x20a\x20song\x20name\x20to\x20search\x20for.*','*🎬\x20Searching\x20for\x20the\x20video...*','*🎥\x20Searching\x20for\x20the\x20video...*','❌\x20An\x20error\x20occurred\x20while\x20processing\x20your\x20request.','https://api.davidcyriltech.my.id/download/ytmp4?url=','then','*Please\x20provide\x20the\x20name\x20of\x20the\x20app\x20to\x20download.*','Download\x20audio\x20from\x20YouTube\x20by\x20searching\x20for\x20keywords.','❌\x20Failed\x20to\x20fetch\x20video\x20from\x20Facebook.','createWriteStream','3885760PHkKRB','*🎬\x20Fetching\x20video\x20from\x20Facebook...*','.tinyurl\x20<long\x20URL>','get','5001iqUTOj','music','apk2','.facebookdl\x20<facebook\x20video\x20URL>','result','❌\x20Failed\x20to\x20fetch\x20video\x20for\x20\x22','arraybuffer','media','video5','sender','1275675JogUpD','592WTkaIH','*🔍\x20Searching\x20for\x20APK\x20of\x20\x22','unlinkSync','https://api.giftedtech.web.id/api/download/dlmp3?apikey=gifted&url=','tools','join','resolve','https://api.giftedtech.web.id/api/tools/tinyurl?apikey=gifted&url=','*📱\x20App\x20Name:*\x20','error'];_0x225e=function(){return _0x3750f9;};return _0x225e();}function _0x479f(_0x57d7ce,_0x21ec6e){const _0x225e56=_0x225e();return _0x479f=function(_0x479f82,_0x47ec88){_0x479f82=_0x479f82-0x1a1;let _0x380336=_0x225e56[_0x479f82];return _0x380336;},_0x479f(_0x57d7ce,_0x21ec6e);}cmd({'pattern':'play2','react':'🎵','desc':_0x404392(0x1e2),'category':_0x404392(0x1ea),'use':'.play2\x20<song\x20name\x20or\x20keywords>','filename':__filename},async(_0x1a7c38,_0x4dc8df,_0x1161c6,{from:_0x18a278,args:_0x28a0ca,reply:_0x2ad359})=>{const _0x4da535=_0x404392;try{const _0x34a504=_0x28a0ca[_0x4da535(0x1a8)]('\x20');if(!_0x34a504)return _0x2ad359(_0x4da535(0x1b3));_0x2ad359(_0x4da535(0x1d3));const _0x1774c9=await yts(_0x34a504);if(!_0x1774c9[_0x4da535(0x1d0)]||_0x1774c9[_0x4da535(0x1d0)]['length']===0x0)return _0x2ad359(_0x4da535(0x1b0)+_0x34a504+'\x22.');const _0x3ebbc5=_0x1774c9['videos'][0x0],_0x3e49f5=_0x3ebbc5[_0x4da535(0x1d6)],_0x5d9b22=_0x4da535(0x1d8)+_0x3e49f5,_0xd9d42e=await axios[_0x4da535(0x1e8)](_0x5d9b22);if(!_0xd9d42e[_0x4da535(0x1d1)][_0x4da535(0x1b8)])return _0x2ad359(_0x4da535(0x1cf)+_0x34a504+'\x22.');const {title:_0x4355fb,download_url:_0x4f4bcf}=_0xd9d42e['data'][_0x4da535(0x1ed)];await _0x1a7c38[_0x4da535(0x1d7)](_0x18a278,{'audio':{'url':_0x4f4bcf},'mimetype':_0x4da535(0x1bf),'ptt':![]},{'quoted':_0x4dc8df});}catch(_0x29bd8d){console['error'](_0x29bd8d),_0x2ad359(_0x4da535(0x1de));}}),cmd({'pattern':_0x404392(0x1b4),'react':'🎵','desc':'Download\x20audio\x20from\x20YouTube\x20by\x20searching\x20for\x20keywords.','category':'music','use':_0x404392(0x1cc),'filename':__filename},async(_0x25a44c,_0x57d711,_0x4439e2,{from:_0x3132bb,args:_0x46b0fa,reply:_0x395436})=>{const _0x1b606c=_0x404392;try{const _0x261c6e=_0x46b0fa['join']('\x20');if(!_0x261c6e)return _0x395436(_0x1b606c(0x1b3));_0x395436(_0x1b606c(0x1d3));const _0x5cc50d=await yts(_0x261c6e);if(!_0x5cc50d[_0x1b606c(0x1d0)]||_0x5cc50d[_0x1b606c(0x1d0)][_0x1b606c(0x1c3)]===0x0)return _0x395436(_0x1b606c(0x1b0)+_0x261c6e+'\x22.');const _0x51df35=_0x5cc50d['videos'][0x0],_0x4ae6d3=_0x51df35['url'],_0x2de6e2='https://api.davidcyriltech.my.id/youtube/mp3?url='+_0x4ae6d3,_0x4c747b=await axios[_0x1b606c(0x1e8)](_0x2de6e2);if(!_0x4c747b[_0x1b606c(0x1d1)][_0x1b606c(0x1b8)])return _0x395436(_0x1b606c(0x1cf)+_0x261c6e+'\x22.');const {title:_0xf41539,downloadUrl:_0x533b57}=_0x4c747b[_0x1b606c(0x1d1)][_0x1b606c(0x1ed)];await _0x25a44c['sendMessage'](_0x3132bb,{'audio':{'url':_0x533b57},'mimetype':'audio/mp4','ptt':![]},{'quoted':_0x57d711});}catch(_0x456fb1){console['error'](_0x456fb1),_0x395436(_0x1b606c(0x1de));}}),cmd({'pattern':'video2','react':'🎬','desc':_0x404392(0x1ca),'category':_0x404392(0x1f0),'use':_0x404392(0x1ce),'filename':__filename},async(_0x24c315,_0x3a6d67,_0x1fe974,{from:_0x767c92,args:_0x55bbc3,reply:_0x5b120e})=>{const _0x37a77a=_0x404392;try{const _0x4d3a95=_0x55bbc3['join']('\x20');if(!_0x4d3a95)return _0x5b120e('*Please\x20provide\x20a\x20video\x20title\x20or\x20keywords\x20to\x20search\x20for.*');_0x5b120e(_0x37a77a(0x1dc));const _0x2110e1=await yts(_0x4d3a95);if(!_0x2110e1[_0x37a77a(0x1d0)]||_0x2110e1[_0x37a77a(0x1d0)][_0x37a77a(0x1c3)]===0x0)return _0x5b120e(_0x37a77a(0x1b0)+_0x4d3a95+'\x22.');const _0x4ed4c1=_0x2110e1[_0x37a77a(0x1d0)][0x0],_0x2ef690=_0x4ed4c1[_0x37a77a(0x1d6)],_0x23109c=_0x37a77a(0x1df)+_0x2ef690,_0x567fa0=await axios[_0x37a77a(0x1e8)](_0x23109c);if(!_0x567fa0[_0x37a77a(0x1d1)][_0x37a77a(0x1b8)])return _0x5b120e(_0x37a77a(0x1ee)+_0x4d3a95+'\x22.');const {title:_0x390c02,download_url:_0x519f84}=_0x567fa0[_0x37a77a(0x1d1)][_0x37a77a(0x1ed)];await _0x24c315[_0x37a77a(0x1d7)](_0x767c92,{'video':{'url':_0x519f84},'mimetype':'video/mp4','caption':_0x390c02},{'quoted':_0x3a6d67});}catch(_0x5e8828){console[_0x37a77a(0x1ac)](_0x5e8828),_0x5b120e(_0x37a77a(0x1de));}}),cmd({'pattern':_0x404392(0x1eb),'react':'📥','desc':_0x404392(0x1cd),'category':_0x404392(0x1a7),'use':_0x404392(0x1b1),'filename':__filename},async(_0x49f470,_0xbcf4f4,_0x5f1fab,{from:_0x56f751,args:_0x542e57,reply:_0x19c997})=>{const _0x422a1c=_0x404392;try{const _0x2b8ead=_0x542e57[_0x422a1c(0x1a8)]('\x20');if(!_0x2b8ead)return _0x19c997(_0x422a1c(0x1e1));_0x19c997(_0x422a1c(0x1a4)+_0x2b8ead+_0x422a1c(0x1b5));const _0x44f924=_0x422a1c(0x1c5)+encodeURIComponent(_0x2b8ead),_0x326611=await axios[_0x422a1c(0x1e8)](_0x44f924);if(!_0x326611[_0x422a1c(0x1d1)][_0x422a1c(0x1b8)])return _0x19c997(_0x422a1c(0x1b9)+_0x2b8ead+'\x22.');const {appname:_0x2a558c,appicon:_0x225d73,developer:_0x190ec8,download_url:_0x7beebe,mimetype:_0x4b16b7}=_0x326611[_0x422a1c(0x1d1)][_0x422a1c(0x1ed)],_0xe90ffe=path[_0x422a1c(0x1a9)](__dirname,_0x2a558c+_0x422a1c(0x1c1)),_0x8de27=await axios({'url':_0x7beebe,'method':_0x422a1c(0x1d5),'responseType':'stream'}),_0x137d03=fs[_0x422a1c(0x1e4)](_0xe90ffe);_0x8de27[_0x422a1c(0x1d1)]['pipe'](_0x137d03),await new Promise((_0x5c8698,_0x1477d4)=>{const _0x47670f=_0x422a1c;_0x137d03['on'](_0x47670f(0x1bd),_0x5c8698),_0x137d03['on'](_0x47670f(0x1ac),_0x1477d4);}),await _0x49f470['sendMessage'](_0x56f751,{'document':{'url':_0xe90ffe},'mimetype':_0x4b16b7,'fileName':_0x2a558c+'.apk','caption':_0x422a1c(0x1ab)+_0x2a558c+'\x0a*👨‍💻\x20Developer:*\x20'+_0x190ec8+'\x0a*🔗\x20ᴅᴏᴡɴʟᴏᴀᴅᴇᴅ\x20ᴠɪᴀ\x20𓄂𝕚𝕥𝕩.𝑺𝑯𝑬𝑰𝑲𝑯\x20𝑨𝑳𝑰\x20🔥༽༼\x20💜*','jpegThumbnail':_0x225d73?await axios({'url':_0x225d73,'responseType':_0x422a1c(0x1ef)})[_0x422a1c(0x1e0)](_0x2b695b=>_0x2b695b['data'])[_0x422a1c(0x1ba)](()=>null):null,'contextInfo':{'mentionedJid':[_0xbcf4f4[_0x422a1c(0x1a1)]],'forwardingScore':0x3e7,'isForwarded':!![],'forwardedNewsletterMessageInfo':{'newsletterJid':_0x422a1c(0x1b2),'newsletterName':'𓄂𝕚𝕥𝕩.𝑺𝑯𝑬𝑰𝑲𝑯 𝑨𝑳𝑰 🔥༽༼','serverMessageId':0x8f}}},{'quoted':_0xbcf4f4}),fs[_0x422a1c(0x1a5)](_0xe90ffe);}catch(_0x2976a9){console[_0x422a1c(0x1ac)](_0x2976a9),_0x19c997('❌\x20An\x20error\x20occurred\x20while\x20processing\x20your\x20request.');}}),cmd({'pattern':_0x404392(0x1be),'react':'🎵','desc':_0x404392(0x1bb),'category':_0x404392(0x1ea),'use':_0x404392(0x1c7),'filename':__filename},async(_0xbdeed3,_0x1a1f32,_0x3f48d8,{from:_0x1f7d88,args:_0x4a1b3c,reply:_0x14fab0})=>{const _0x4589cd=_0x404392;try{const _0x3cf9fb=_0x4a1b3c[_0x4589cd(0x1a8)]('\x20');if(!_0x3cf9fb)return _0x14fab0(_0x4589cd(0x1db));_0x14fab0('*🎧\x20Searching\x20for\x20the\x20song...*');const _0x3698b5=await yts(_0x3cf9fb);if(!_0x3698b5['videos']||_0x3698b5['videos'][_0x4589cd(0x1c3)]===0x0)return _0x14fab0(_0x4589cd(0x1b0)+_0x3cf9fb+'\x22.');const _0x1f216b=_0x3698b5[_0x4589cd(0x1d0)][0x0],_0x3b2f99=_0x1f216b['url'],_0xf8933d=_0x4589cd(0x1a6)+encodeURIComponent(_0x3b2f99),_0x5c5e2d=await axios[_0x4589cd(0x1e8)](_0xf8933d);if(!_0x5c5e2d[_0x4589cd(0x1d1)]['success'])return _0x14fab0(_0x4589cd(0x1cf)+_0x3cf9fb+'\x22.');const {download_url:_0xb4c50c}=_0x5c5e2d[_0x4589cd(0x1d1)][_0x4589cd(0x1ed)];await _0xbdeed3[_0x4589cd(0x1d7)](_0x1f7d88,{'audio':{'url':_0xb4c50c},'mimetype':_0x4589cd(0x1bf),'ptt':![]},{'quoted':_0x1a1f32});}catch(_0x334732){console['error'](_0x334732),_0x14fab0(_0x4589cd(0x1de));}}),cmd({'pattern':_0x404392(0x1f1),'react':'🎥','desc':_0x404392(0x1da),'category':'video','use':_0x404392(0x1ad),'filename':__filename},async(_0xd5951b,_0x3f889b,_0x489734,{from:_0x49ed9f,args:_0x18c4ef,reply:_0x2951d1})=>{const _0x4b4d90=_0x404392;try{const _0x318e14=_0x18c4ef[_0x4b4d90(0x1a8)]('\x20');if(!_0x318e14)return _0x2951d1(_0x4b4d90(0x1d2));_0x2951d1(_0x4b4d90(0x1dd));const _0x4c3b77=await yts(_0x318e14);if(!_0x4c3b77[_0x4b4d90(0x1d0)]||_0x4c3b77[_0x4b4d90(0x1d0)]['length']===0x0)return _0x2951d1(_0x4b4d90(0x1b0)+_0x318e14+'\x22.');const _0x34bc2e=_0x4c3b77['videos'][0x0],_0x13d9a0=_0x34bc2e[_0x4b4d90(0x1d6)],_0x2d3aa0=_0x4b4d90(0x1d9)+encodeURIComponent(_0x13d9a0),_0x3fd014=await axios[_0x4b4d90(0x1e8)](_0x2d3aa0);if(!_0x3fd014[_0x4b4d90(0x1d1)][_0x4b4d90(0x1b8)])return _0x2951d1('❌\x20Failed\x20to\x20fetch\x20video\x20for\x20\x22'+_0x318e14+'\x22.');const {download_url:_0x49d8b5}=_0x3fd014[_0x4b4d90(0x1d1)]['result'];await _0xd5951b[_0x4b4d90(0x1d7)](_0x49ed9f,{'video':{'url':_0x49d8b5},'mimetype':_0x4b4d90(0x1b6),'caption':_0x3fd014[_0x4b4d90(0x1d1)][_0x4b4d90(0x1ed)][_0x4b4d90(0x1c9)]},{'quoted':_0x3f889b});}catch(_0x3a4782){console[_0x4b4d90(0x1ac)](_0x3a4782),_0x2951d1(_0x4b4d90(0x1de));}}),cmd({'pattern':'fb2','react':'🎬','desc':_0x404392(0x1d4),'category':_0x404392(0x1f0),'use':_0x404392(0x1ec),'filename':__filename},async(_0x2b5a01,_0x3008c7,_0x214e5b,{from:_0x329c2d,args:_0x304664,reply:_0x2351ed})=>{const _0x2bf184=_0x404392;try{const _0x1347bf=_0x304664[0x0];if(!_0x1347bf)return _0x2351ed(_0x2bf184(0x1c2));_0x2351ed(_0x2bf184(0x1e6));const _0x14810b=_0x2bf184(0x1bc)+encodeURIComponent(_0x1347bf),_0x4aef09=await axios['get'](_0x14810b);if(!_0x4aef09[_0x2bf184(0x1d1)][_0x2bf184(0x1b8)])return _0x2351ed(_0x2bf184(0x1e3));const {hd_video:_0x2a7e37,sd_video:_0x1c3db9,title:_0x4c9b63}=_0x4aef09[_0x2bf184(0x1d1)][_0x2bf184(0x1ed)],_0x2fc4d0=_0x2a7e37||_0x1c3db9;await _0x2b5a01[_0x2bf184(0x1d7)](_0x329c2d,{'video':{'url':_0x2fc4d0},'mimetype':_0x2bf184(0x1b6),'caption':_0x4c9b63},{'quoted':_0x3008c7});}catch(_0x444bb1){console[_0x2bf184(0x1ac)](_0x444bb1),_0x2351ed(_0x2bf184(0x1de));}}),cmd({'pattern':'tinyurl','react':'🔗','desc':_0x404392(0x1c4),'category':'tools','use':_0x404392(0x1e7),'filename':__filename},async(_0x22909d,_0x314c8a,_0x2415c2,{from:_0x3c8bb9,args:_0x5c9f06,reply:_0x2f1cca})=>{const _0x5869b2=_0x404392;try{const _0x3eb356=_0x5c9f06[0x0];if(!_0x3eb356)return _0x2f1cca('*Please\x20provide\x20a\x20long\x20URL\x20to\x20shorten.*');_0x2f1cca(_0x5869b2(0x1b7));const _0x554213=_0x5869b2(0x1aa)+encodeURIComponent(_0x3eb356),_0x5d082b=await axios['get'](_0x554213);if(!_0x5d082b[_0x5869b2(0x1d1)][_0x5869b2(0x1b8)])return _0x2f1cca('❌\x20Failed\x20to\x20generate\x20TinyURL.');const {result:_0x4a4b00}=_0x5d082b[_0x5869b2(0x1d1)];await _0x2f1cca('Here\x27s\x20your\x20TinyURL:\x20'+_0x4a4b00);}catch(_0x3647e6){console[_0x5869b2(0x1ac)](_0x3647e6),_0x2f1cca('❌\x20An\x20error\x20occurred\x20while\x20processing\x20your\x20request.');}});