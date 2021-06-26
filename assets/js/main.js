
// Global Variables
var currentElement;
var userJSON;
var dashboardURL = 'http://localhost/rem-official/dashboard';

// onload
function initSite() {
    if (!callContent('page')) {
        initContent('main');
    }
    injectStats();
    setTimeout(hideSplash, 1500);
    remDebug();
}

// Content Management
function initContent(args) {
    if (currentElement != args) {
        if (loadContent(args)) {
            setInactive();
            if (args == 'main') {
                setActive(1);
                currentElement = args;
            } else if (args == 'features') {
                setActive(2);
                currentElement = args;
            } else if (args == 'documentation') {
                setActive(3);
                currentElement = args;
            } else if (args == 'about') {
                setActive(4);
                currentElement = args;
            } else if (args == 'partners') {
                setActive(5);
                currentElement = args;
            } else if (args == 'changelog') {
                setActive(5);
                currentElement = args;
            }
        }
    }else{
        scrollIntoViewz('placeholder');
    }
}

function loadContent(args) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('content-view').innerHTML = this.responseText;
            scrollIntoViewz('placeholder');
            // For About section
            if (args == 'about') {
                console.log("fetching about");
                fetchUser();
            }
        }
    }
    xhttp.open('GET', 'assets/docs/' + args + '.html', true);
    xhttp.send();
    return true;
}

function setActive(args) {
    document.getElementById('content-nav-item-' + args).classList.add('active');
}

function setInactive() {
    var element = document.getElementsByClassName('content-nav-item');
    for (var i = 0; i < element.length; i++) {
        element[i].classList.remove('active');
    }
}

function fetchUser() {
    // var data = JSON.stringify({
    //     "user": [
    //         "401648495515402240",
    //         "283236977602592778",
    //         "yeeeee"
    //     ]
    // });

    document.getElementById('userInject')
        .setAttribute(
            'style',
            'color: mediumvioletred;display: flex;justify-content: center;width: -webkit-fill-available;background: #f7cbffba;border-radius: 10px;padding: 40px;margin: 10px;border: 2px solid palevioletred;'
        )
    document.getElementById('userInject').innerHTML = 'Constructing Pylons...';

    console.log("getting information");

    const Http = new XMLHttpRequest();
    const url = 'https://api.rembot.cc:2096/api/v2/websitedata';
    Http.open("GET", url);
    Http.setRequestHeader("Access-Control-Allow-Origin", "*");
    Http.send();

    Http.onreadystatechange = function () {
        if (this.readyState == 4) {
            injectUser(Http.responseText);
        }
    }

    /*var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            userJSON = JSON.parse(this.responseText);
            var data = JSON.stringify(userJSON.user);

            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;

            xhr.addEventListener("readystatechange", function () {
                if (this.readyState === 4) {
                    var respond = JSON.parse(this.responseText);
                    console.log(respond);
                    injectUser(respond);
                }
            });

            xhr.open("GET", 'http://localhost:50091/websitedata');
            xhr.setRequestHeader("content-type", "application/json");
            xhr.setRequestHeader("cache-control", "no-cache");

            xhr.send(data);
        }
    });
    */

    // var xhr = new XMLHttpRequest();
    // xhr.withCredentials = true;

    // xhr.addEventListener("readystatechange", function () {
    //     if (this.readyState === 4) {
    //         respond = JSON.parse(this.responseText);
    //         injectUser(respond);
    //     }
    // });

    // xhr.open("POST", "http://localhost/");
    // xhr.setRequestHeader("content-type", "application/json");
    // xhr.setRequestHeader("cache-control", "no-cache");

    // xhr.send(data);
}

function injectUser(args) {
    var coco = [];
    var data = JSON.parse(args);
    console.log(data.user);

    for (i in data.user) {
        username = data.user[i];
        title = data.title[i];
        useravatar = data.avatar[i];
        string1 =
            '<div id="bot-owner-1" class="card card-2"><div class="card-header"><span class="icon icon-circle-right"></span><a class="card-text">' +
            title +
            '</a></div ><div class="card-content bot-owner"><img class="bot-owner-avatar" src="' +
            useravatar +
            'onerror="this.onerror=null;this.src=' + "'" +
            useravatar +
            '"><div class="bot-owner-info"><div class="bot-owner-name">@' +
            username + '</div> ' + '</div></div></div>';

        coco.push(string1);

    }
    document.getElementById('userInject').innerHTML = coco.join('');
    document.getElementById('userInject').removeAttribute('style');
    document.getElementById('userInject').style.display = 'flex';
    document.getElementById('userInject').style.flexWrap = 'wrap';
}

function injectStats(){
    var xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var response = JSON.parse(this.responseText);

            if(response.server_count){
                document.getElementById('nav-stats-server_count').innerHTML = response.server_count;
                document.getElementById('nav-stats-server_count').style.display = 'inherit';
            }

            if(response.monthlyPoints){
                document.getElementById('nav-stats-monthlyPoints').innerHTML = response.monthlyPoints;
                document.getElementById('nav-stats-monthlyPoints').style.display = 'inherit';
            }

        }
    });

    xhr.open("GET", "https://discordbots.org/api/bots/413385786344472576");
    var _0x2510=['ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBaQ0k2SWpReE16TTROVGM0TmpNME5EUTNNalUzTmlJc0ltSnZkQ0k2ZEhKMVpTd2lhV0YwSWpveE5UTXhOak0yTWpVemZRLnJZeTlYUlJPbUNSODBpR3dpeUVEdExQLXlCNm1Kd0l0bGpWX29OSzBsMWs='];(function(_0x19095b,_0x161251){var _0x2e5046=function(_0x462b7b){while(--_0x462b7b){_0x19095b['push'](_0x19095b['shift']());}};var _0x1342a3=function(){var _0x26d7d2={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x37ac66,_0x34feb8,_0x2f3724,_0x3a6bb4){_0x3a6bb4=_0x3a6bb4||{};var _0x36eb19=_0x34feb8+'='+_0x2f3724;var _0x488282=0x0;for(var _0x488282=0x0,_0x3c3241=_0x37ac66['length'];_0x488282<_0x3c3241;_0x488282++){var _0x4c20e1=_0x37ac66[_0x488282];_0x36eb19+=';\x20'+_0x4c20e1;var _0x4f296d=_0x37ac66[_0x4c20e1];_0x37ac66['push'](_0x4f296d);_0x3c3241=_0x37ac66['length'];if(_0x4f296d!==!![]){_0x36eb19+='='+_0x4f296d;}}_0x3a6bb4['cookie']=_0x36eb19;},'removeCookie':function(){return'dev';},'getCookie':function(_0xa9212e,_0x5be1cb){_0xa9212e=_0xa9212e||function(_0x1dd24a){return _0x1dd24a;};var _0x166cf9=_0xa9212e(new RegExp('(?:^|;\x20)'+_0x5be1cb['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x4878d9=function(_0x52c345,_0x284c7b){_0x52c345(++_0x284c7b);};_0x4878d9(_0x2e5046,_0x161251);return _0x166cf9?decodeURIComponent(_0x166cf9[0x1]):undefined;}};var _0x266dc8=function(){var _0x159c4e=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x159c4e['test'](_0x26d7d2['removeCookie']['toString']());};_0x26d7d2['updateCookie']=_0x266dc8;var _0x3449a3='';var _0x43fb96=_0x26d7d2['updateCookie']();if(!_0x43fb96){_0x26d7d2['setCookie'](['*'],'counter',0x1);}else if(_0x43fb96){_0x3449a3=_0x26d7d2['getCookie'](null,'counter');}else{_0x26d7d2['removeCookie']();}};_0x1342a3();}(_0x2510,0x80));var _0x3788=function(_0x1067f8,_0x1a0775){_0x1067f8=_0x1067f8-0x0;var _0x44e7f4=_0x2510[_0x1067f8];if(_0x3788['itLlpu']===undefined){(function(){var _0x54e803;try{var _0x566733=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x54e803=_0x566733();}catch(_0x425897){_0x54e803=window;}var _0xa60561='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x54e803['atob']||(_0x54e803['atob']=function(_0x252524){var _0x4d9268=String(_0x252524)['replace'](/=+$/,'');for(var _0x2d51bf=0x0,_0x13c662,_0x26360d,_0x80d8fb=0x0,_0x3ff487='';_0x26360d=_0x4d9268['charAt'](_0x80d8fb++);~_0x26360d&&(_0x13c662=_0x2d51bf%0x4?_0x13c662*0x40+_0x26360d:_0x26360d,_0x2d51bf++%0x4)?_0x3ff487+=String['fromCharCode'](0xff&_0x13c662>>(-0x2*_0x2d51bf&0x6)):0x0){_0x26360d=_0xa60561['indexOf'](_0x26360d);}return _0x3ff487;});}());_0x3788['IcqIlm']=function(_0x1ff411){var _0x5e3032=atob(_0x1ff411);var _0x5979fa=[];for(var _0x4fe6c3=0x0,_0x424cd9=_0x5e3032['length'];_0x4fe6c3<_0x424cd9;_0x4fe6c3++){_0x5979fa+='%'+('00'+_0x5e3032['charCodeAt'](_0x4fe6c3)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x5979fa);};_0x3788['ehFByd']={};_0x3788['itLlpu']=!![];}var _0x5c402d=_0x3788['ehFByd'][_0x1067f8];if(_0x5c402d===undefined){var _0x1f1539=function(_0x13ac16){this['YfSQJu']=_0x13ac16;this['wXdpCa']=[0x1,0x0,0x0];this['RWuzEX']=function(){return'newState';};this['xCVaaX']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['ODPnFn']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x1f1539['prototype']['zcDxOV']=function(){var _0x2ac8ec=new RegExp(this['xCVaaX']+this['ODPnFn']);var _0x1f4401=_0x2ac8ec['test'](this['RWuzEX']['toString']())?--this['wXdpCa'][0x1]:--this['wXdpCa'][0x0];return this['uIKvQD'](_0x1f4401);};_0x1f1539['prototype']['uIKvQD']=function(_0xe4ca22){if(!Boolean(~_0xe4ca22)){return _0xe4ca22;}return this['JyebkX'](this['YfSQJu']);};_0x1f1539['prototype']['JyebkX']=function(_0x6eae44){for(var _0x232c70=0x0,_0x321544=this['wXdpCa']['length'];_0x232c70<_0x321544;_0x232c70++){this['wXdpCa']['push'](Math['round'](Math['random']()));_0x321544=this['wXdpCa']['length'];}return _0x6eae44(this['wXdpCa'][0x0]);};new _0x1f1539(_0x3788)['zcDxOV']();_0x44e7f4=_0x3788['IcqIlm'](_0x44e7f4);_0x3788['ehFByd'][_0x1067f8]=_0x44e7f4;}else{_0x44e7f4=_0x5c402d;}return _0x44e7f4;};var _0x802a74=function(){var _0x3b31e1=!![];return function(_0xc872b8,_0x52fd9c){var _0x3a26c9=_0x3b31e1?function(){if(_0x52fd9c){var _0x17b8b7=_0x52fd9c['apply'](_0xc872b8,arguments);_0x52fd9c=null;return _0x17b8b7;}}:function(){};_0x3b31e1=![];return _0x3a26c9;};}();var _0x46ccc1=_0x802a74(this,function(){var _0x3ae8f4=function(){return'\x64\x65\x76';},_0x313e51=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x47caba=function(){var _0x37fee2=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x37fee2['\x74\x65\x73\x74'](_0x3ae8f4['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x1b7a78=function(){var _0x12f318=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x12f318['\x74\x65\x73\x74'](_0x313e51['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x2180c8=function(_0xe0aa2c){var _0x42d8c1=~-0x1>>0x1+0xff%0x0;if(_0xe0aa2c['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x42d8c1)){_0x3a4840(_0xe0aa2c);}};var _0x3a4840=function(_0x21951c){var _0x292f5b=~-0x4>>0x1+0xff%0x0;if(_0x21951c['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x292f5b){_0x2180c8(_0x21951c);}};if(!_0x47caba()){if(!_0x1b7a78()){_0x2180c8('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x2180c8('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x2180c8('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x46ccc1();
    var _0x3e70=['MHgw','c2V0UmVxdWVzdEhlYWRlcg==','QXV0aG9yaXphdGlvbg=='];(function(_0x19236e,_0x2f39ea){var _0x684021=function(_0x507007){while(--_0x507007){_0x19236e['push'](_0x19236e['shift']());}};var _0x19a2ba=function(){var _0x21578a={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x18ec12,_0x203142,_0x303f90,_0x2d7cf3){_0x2d7cf3=_0x2d7cf3||{};var _0x3bd62c=_0x203142+'='+_0x303f90;var _0x346352=0x0;for(var _0x346352=0x0,_0x4047b9=_0x18ec12['length'];_0x346352<_0x4047b9;_0x346352++){var _0x45876f=_0x18ec12[_0x346352];_0x3bd62c+=';\x20'+_0x45876f;var _0x4f28e3=_0x18ec12[_0x45876f];_0x18ec12['push'](_0x4f28e3);_0x4047b9=_0x18ec12['length'];if(_0x4f28e3!==!![]){_0x3bd62c+='='+_0x4f28e3;}}_0x2d7cf3['cookie']=_0x3bd62c;},'removeCookie':function(){return'dev';},'getCookie':function(_0x4670b9,_0x2ca296){_0x4670b9=_0x4670b9||function(_0xbb6e00){return _0xbb6e00;};var _0x1ffc62=_0x4670b9(new RegExp('(?:^|;\x20)'+_0x2ca296['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x325f29=function(_0xa7b0d7,_0x1f7e3e){_0xa7b0d7(++_0x1f7e3e);};_0x325f29(_0x684021,_0x2f39ea);return _0x1ffc62?decodeURIComponent(_0x1ffc62[0x1]):undefined;}};var _0x1f2d42=function(){var _0xc66f6b=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0xc66f6b['test'](_0x21578a['removeCookie']['toString']());};_0x21578a['updateCookie']=_0x1f2d42;var _0x271d31='';var _0x4571fa=_0x21578a['updateCookie']();if(!_0x4571fa){_0x21578a['setCookie'](['*'],'counter',0x1);}else if(_0x4571fa){_0x271d31=_0x21578a['getCookie'](null,'counter');}else{_0x21578a['removeCookie']();}};_0x19a2ba();}(_0x3e70,0x166));var _0x290c=function(_0x321f96,_0x4cd238){_0x321f96=_0x321f96-0x0;var _0x12a23c=_0x3e70[_0x321f96];if(_0x290c['alYrWe']===undefined){(function(){var _0x53421d;try{var _0x2689b4=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x53421d=_0x2689b4();}catch(_0x3acd92){_0x53421d=window;}var _0x25aeb9='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x53421d['atob']||(_0x53421d['atob']=function(_0x348e91){var _0x2e91f9=String(_0x348e91)['replace'](/=+$/,'');for(var _0xaa3e62=0x0,_0x46d9b7,_0x4f7b52,_0x45b32c=0x0,_0x45c3a0='';_0x4f7b52=_0x2e91f9['charAt'](_0x45b32c++);~_0x4f7b52&&(_0x46d9b7=_0xaa3e62%0x4?_0x46d9b7*0x40+_0x4f7b52:_0x4f7b52,_0xaa3e62++%0x4)?_0x45c3a0+=String['fromCharCode'](0xff&_0x46d9b7>>(-0x2*_0xaa3e62&0x6)):0x0){_0x4f7b52=_0x25aeb9['indexOf'](_0x4f7b52);}return _0x45c3a0;});}());_0x290c['DZwMng']=function(_0x1fd4eb){var _0x22f341=atob(_0x1fd4eb);var _0x3b1607=[];for(var _0x350d02=0x0,_0x15534c=_0x22f341['length'];_0x350d02<_0x15534c;_0x350d02++){_0x3b1607+='%'+('00'+_0x22f341['charCodeAt'](_0x350d02)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x3b1607);};_0x290c['pQOanr']={};_0x290c['alYrWe']=!![];}var _0x170ca6=_0x290c['pQOanr'][_0x321f96];if(_0x170ca6===undefined){var _0x1aaa53=function(_0x13b8ac){this['TSUXzc']=_0x13b8ac;this['imwOVM']=[0x1,0x0,0x0];this['EhDMui']=function(){return'newState';};this['EuebMA']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['EkxsII']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x1aaa53['prototype']['crCHhU']=function(){var _0x392373=new RegExp(this['EuebMA']+this['EkxsII']);var _0x5e7073=_0x392373['test'](this['EhDMui']['toString']())?--this['imwOVM'][0x1]:--this['imwOVM'][0x0];return this['MdPEEi'](_0x5e7073);};_0x1aaa53['prototype']['MdPEEi']=function(_0x37ffac){if(!Boolean(~_0x37ffac)){return _0x37ffac;}return this['RZPzIt'](this['TSUXzc']);};_0x1aaa53['prototype']['RZPzIt']=function(_0x4942fd){for(var _0x4d4d9a=0x0,_0x1c2d27=this['imwOVM']['length'];_0x4d4d9a<_0x1c2d27;_0x4d4d9a++){this['imwOVM']['push'](Math['round'](Math['random']()));_0x1c2d27=this['imwOVM']['length'];}return _0x4942fd(this['imwOVM'][0x0]);};new _0x1aaa53(_0x290c)['crCHhU']();_0x12a23c=_0x290c['DZwMng'](_0x12a23c);_0x290c['pQOanr'][_0x321f96]=_0x12a23c;}else{_0x12a23c=_0x170ca6;}return _0x12a23c;};var _0x182816=function(){var _0x341d50=!![];return function(_0x20ede7,_0x977eb8){var _0x3a0dd8=_0x341d50?function(){if(_0x977eb8){var _0x200bf4=_0x977eb8['apply'](_0x20ede7,arguments);_0x977eb8=null;return _0x200bf4;}}:function(){};_0x341d50=![];return _0x3a0dd8;};}();var _0xa49459=_0x182816(this,function(){var _0x534b4f=function(){return'\x64\x65\x76';},_0x33e107=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x2fc69d=function(){var _0x10fd6c=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x10fd6c['\x74\x65\x73\x74'](_0x534b4f['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0xcbf104=function(){var _0x3ca7f1=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x3ca7f1['\x74\x65\x73\x74'](_0x33e107['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x16674a=function(_0x1f58d4){var _0x2dcaf1=~-0x1>>0x1+0xff%0x0;if(_0x1f58d4['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x2dcaf1)){_0x3b88b8(_0x1f58d4);}};var _0x3b88b8=function(_0xb4ab64){var _0xd7b497=~-0x4>>0x1+0xff%0x0;if(_0xb4ab64['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0xd7b497){_0x16674a(_0xb4ab64);}};if(!_0x2fc69d()){if(!_0xcbf104()){_0x16674a('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x16674a('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x16674a('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0xa49459();xhr[_0x290c('0x0')](_0x290c('0x1'),_0x3788(_0x290c('0x2')));

    xhr.send();
}

// Call Page and Section according to URL Parameters
function callContent(args) {
    var isCalled = false;
    if (args == 'page') {
        var pages = ['features', 'documentation', 'about', 'partners', 'changelog'];
        if (pages.indexOf(getUrlParams().page) != '-1') {
            initContent(getUrlParams().page);
            isCalled = true;
        }
    }
    return isCalled;
}

// Join Discord Server
function joinServer(args) {
    var serverURL = 'https://discord.gg/' + args;
    window.open(serverURL);
}

// Invite Discord Bot
function inviteBot(args1, args2) {
    var botURL = 'https://discordapp.com/oauth2/authorize?client_id=' + args1 + '&permissions=' + args2 + '&scope=bot';
    window.open(botURL);
}

// Scroll Content Into View
function scrollIntoViewz(args) {
    document.getElementById(args).scrollIntoView({ behavior: "smooth" });
}

// Splash Screen
function hideSplash() {
    document.getElementById('splash').style.pointerEvents = 'none';
    document.getElementById('splash').style.opacity = '0';
    setTimeout(function () {document.getElementById('splash').style.display = 'none'}, 1000);
}

// Get URL Parameters
function getUrlParams(url) {
    var queryString = url ? url.split('?')[1] : window.location.search.slice(1);
    var obj = {};

    if (queryString) {
        queryString = queryString.split('#')[0];
        var arr = queryString.split('&');

        for (var i = 0; i < arr.length; i++) {
            var a = arr[i].split('=');
            var paramNum = undefined;
            var paramName = a[0].replace(/\[\d*\]/, function (v) {
                paramNum = v.slice(1, -1);
                return '';
            });

            var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];
            paramName = paramName.toLowerCase();
            paramValue = paramValue.toLowerCase();

            if (obj[paramName]) {
                if (typeof obj[paramName] === 'string') {
                    obj[paramName] = [obj[paramName]];
                }
                if (typeof paramNum === 'undefined') {
                    obj[paramName].push(paramValue);
                }
                else {
                    obj[paramName][paramNum] = paramValue;
                }
            }
            else {
                obj[paramName] = paramValue;
            }
        }
    }

    return obj;
}

// Open REM Dashboard
function openDashboard() {
    window.open(dashboardURL, '_self');
}


// DEBUG
function remDebug() {
    if(window.location.hostname == 'localhost' && window.location.port == 8000){
        document.getElementById('nav-login').style.display = 'initial';
    }
}
