$(document)['ready'](function() {
    $['fn']['bootstrapSwitch']['defaults']['onColor'] = 'success';
    $('#aesInput')['bootstrapSwitch']();
    var _0xd05bx1 = $(window)['width']();
    $('nav ul .normal-menu a, .scroll-link')['click'](function() {
        $('html, body')['animate']({
            scrollTop: $($['attr'](this, 'href'))['offset']()['top'] - 30
        }, 500);
        return false;
    });
    $('.mobile-menu')['click'](function() {
        $('.normal-menu')['fadeToggle']()
    });
    var _0xd05bx2 = ['E8VHK-FQA4J-2DH9D-FJHDX-XXXXX', 'GDZ2T-TW8X2-4XS7V-DH9TC-XXXXX', 'YCGJX-9MRCP-F4KR3-8P4VX-XXXXX', 'FCB8J-J2W27-TTRF6-JGFTJ-XXXXX', 'RKXTY-YCB6C-46HY4-CQKYM-XXXXX', 'V8XDR-7MDDX-2QMD4-MWVFM-XXXXX', 'WYYQB-Q2VDH-497F6-79VBQ-XXXXX', 'VXD4M-3QCFR-YHB83-24MY6-XXXXX', 'VF2P9-VTDJW-Y2CDK-TG6VH-XXXXX', 'WV8GF-3MY8B-QXKHY-BDXTW-XXXXX', 'QFQCW-C9TWH-MQQXQ-4BRJ8-XXXXX', 'WKD4D-83VCT-8W7QP-TKXTG-XXXXX', 'CFCCH-FMYJW-PM8P3-RY9XM-XXXXX', 'TDMCB-PKCQJ-R9D32-QX3RD-XXXXX'];

    function _0xd05bx3() {
        $random_number = Math['floor'](Math['random']() * _0xd05bx2['length']);
        $('.generated_code p')['html'](_0xd05bx2[$random_number]);
    }
    _0xd05bx3();
    var _0xd05bx4 = false;
    var _0xd05bx5 = 'NONE';
    var _0xd05bx6 = 'NONE';
    $('.connect-button')['click'](function(_0xd05bx7) {
        if (_0xd05bx4 == false) {
            if ($('#usernameInput')['val']() != '') {
                if ($('#deviceInput')['val']() != '') {
                    $('#m-accname')['text']($('#usernameInput')['val']());
                    $('#m-device')['text']($('#deviceInput')['val']());
                    $['magnificPopup']['open']({
                        items: {
                            src: '#loading_modal'
                        },
                        type: 'inline',
                        preloader: false,
                        modal: true,
                        callbacks: {
                            open: function() {
                                _0xd05bxc(function() {
                                    console['log']('progress_done');
                                    _0xd05bx4 = true;
                                    $('#gen_section')['removeClass']('inactive');
                                    $('.connected_msg')['css']('display', 'block');
                                    $('#usernameInput, #deviceInput, #aesInput')['attr']('disabled', 'true');
                                    $['magnificPopup']['close']();
                                    sweetAlert('Error', '"' + $('#usernameInput')['val']() + '" : Invalid value. Accepted values: true, false', 'success');
									console.error('End my suffering, close me');
                                })
                            },
                            close: function() {
                                console['log']('closed')
                            }
                        }
                    });
                } else {
                    sweetAlert('undefined', '¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ', 'error');
					console.error('Error: Attempt to beat a dead horse. Action terminated.');
                }
            } else {
                sweetAlert('Error', 'Who are you running from?', 'error'); // no name
				console.error('Error: Why am I a teapot?! What is this? Where am I?!');
            }
        } else {
            sweetAlert('undefined', '¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ', 'error');
			console.error('Humanity has failed.');
        }
    });

    function _0xd05bx8(_0xd05bx9, _0xd05bxa) {
        var _0xd05bxb;
        for (i = 1; i <= 5; i++) {
            if ($('.' + _0xd05bxa + i)['hasClass']('activated')) {
                $('.' + _0xd05bxa + i)['removeClass']('activated')
            }
        };
        for (i = 1; i <= 5; i++) {
            if (_0xd05bx9['hasClass'](_0xd05bxa + i)) {
                _0xd05bxb = 'OPTION_' + i
            }
        };
        _0xd05bx9['addClass']('activated');
        return _0xd05bxb;
    }
    $('.gen-button')['click'](function() {
        if (_0xd05bx4 == true) {
            $('.generator-section')['fadeOut']('slow', function() {
                $('.gen-console-area')['fadeIn']('slow', function() {
                    _0xd05bx1d($('#usernameInput')['val'](), $('#deviceInput')['val'](), $('#lives_select')['val'](), $('#coins_select')['val'](), $('#bars_select')['val'](), function() {
                        console['log']('locker');
                        $['magnificPopup']['open']({
                            items: {
                                src: '#gen_modal'
                            },
                            type: 'inline',
                            preloader: false,
                            modal: true,
                            callbacks: {
                                open: function() {}
                            }
                        });
                    });
                    $('html, body')['animate']({
                        scrollTop: $('#gen_section')['offset']()['top'] - 30
                    }, 100);
                })
            })
        } else {
            sweetAlert('Error', '¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ', 'error');
			console.error('Why are you looking into my brain?');
        }
    });

    function _0xd05bxc(_0xd05bxd) {
        var _0xd05bxe = 0;
        var _0xd05bxf = $('.connect_progressbar');
        _0xd05bxf['css']('width', '0%');
        var _0xd05bx10 = setInterval(function() {
            if (_0xd05bxe == 0) {
                _0xd05bxe = 20;
                _0xd05bxf['css']('width', _0xd05bxe + '%');
            } else {
                if (_0xd05bxe == 20) {
                    _0xd05bxe = 35;
                    _0xd05bxf['css']('width', _0xd05bxe + '%');
                } else {
                    if (_0xd05bxe == 35) {
                        _0xd05bxe = 65;
                        _0xd05bxf['css']('width', _0xd05bxe + '%');
                    } else {
                        if (_0xd05bxe == 65) {
                            _0xd05bxe = 75;
                            _0xd05bxf['css']('width', _0xd05bxe + '%');
                        } else {
                            if (_0xd05bxe == 75) {
                                _0xd05bxe = 85;
                                _0xd05bxf['css']('width', _0xd05bxe + '%');
                            } else {
                                if (_0xd05bxe == 85) {
                                    _0xd05bxe = 89;
                                    _0xd05bxf['css']('width', _0xd05bxe + '%');
                                } else {
                                    if (_0xd05bxe == 89) {
                                        _0xd05bxe = 100;
                                        _0xd05bxf['css']('width', _0xd05bxe + '%');
                                    } else {
                                        if (_0xd05bxe == 100) {
                                            _0xd05bxd();
                                            clearInterval(_0xd05bx10);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }, Math['floor']((Math['random']() * 1200) + 600));
    }
    var _0xd05bx11 = $('.gen-dev-console');
    var _0xd05bx12 = $('.dev-console-text');
    var _0xd05bx13 = _0xd05bx11['height']();

    function _0xd05bx14(_0xd05bx15, _0xd05bx16) {
        setTimeout(function() {
            var _0xd05bx17 = $('.gen-loading-msg');
            _0xd05bx17['html'](_0xd05bx15);
        }, _0xd05bx16)
    }

    function _0xd05bx18(_0xd05bx15, _0xd05bx16) {
        setTimeout(function() {
            var _0xd05bx19 = $('<li><i class="fa fa-angle-right"></i> ' + _0xd05bx15 + '</li>');
            _0xd05bx19['hide']()['appendTo'](_0xd05bx12)['fadeIn']();
            _0xd05bx11['animate']({
                scrollTop: _0xd05bx13
            }, 500);
            _0xd05bx13 += _0xd05bx11['height']();
        }, _0xd05bx16)
    }

    function _0xd05bx1a(_0xd05bx15, _0xd05bx16) {
        setTimeout(function() {
            var _0xd05bx19 = $('<li class="console-green-text"><i class="fa fa-angle-right"></i> ' + _0xd05bx15 + '</li>');
            _0xd05bx19['hide']()['appendTo'](_0xd05bx12)['fadeIn']();
            _0xd05bx11['animate']({
                scrollTop: _0xd05bx13
            }, 500);
            _0xd05bx13 += _0xd05bx11['height']();
        }, _0xd05bx16)
    }

    function _0xd05bx1b(_0xd05bx15, _0xd05bx16) {
        setTimeout(function() {
            var _0xd05bx19 = $('<li class="console-red-text"><i class="fa fa-angle-right"></i> ' + _0xd05bx15 + '</li>');
            _0xd05bx19['hide']()['appendTo'](_0xd05bx12)['fadeIn']();
            _0xd05bx11['animate']({
                scrollTop: _0xd05bx13
            }, 500);
            _0xd05bx13 += _0xd05bx11['height']();
        }, _0xd05bx16)
    }

    function _0xd05bx1c(_0xd05bx15, _0xd05bx16) {
        setTimeout(function() {
            var _0xd05bx19 = $('<li class="console-yellow-text"><i class="fa fa-angle-right"></i> ' + _0xd05bx15 + '</li>');
            _0xd05bx19['hide']()['appendTo'](_0xd05bx12)['fadeIn']();
            _0xd05bx11['animate']({
                scrollTop: _0xd05bx13
            }, 500);
            _0xd05bx13 += _0xd05bx11['height']();
        }, _0xd05bx16)
    }

    function _0xd05bx1d(_0xd05bx1e, _0xd05bx1f, _0xd05bx20, _0xd05bx21, _0xd05bx22, _0xd05bx23) {
        _0xd05bx18('Performing server anal evacuation: ｅｘｔｒａ　ｔｈｉｃｃ;', 0);
        _0xd05bx14('Downloading fake shit complete', 300);
        _0xd05bx1a('Response: HTTP 403 Forbidden', 750);
        _0xd05bx14('aaaaaaaaa aaaaaaaaaaaaaaa.', 1200);
        _0xd05bx18('Fart', 1400);
        _0xd05bx18('Flatulence amplified', 1600);
        _0xd05bx18('Stealing personal details', 1880);
        _0xd05bx14('404 Not Found', 2000);
        _0xd05bx1a('lol ur mom fat ni🅱️🅱️a', 2400);
        _0xd05bx18('fuck fuck fuck fuck fuck fuck.', 2670);
        _0xd05bx14('Warning: fopen(urmom.tiff) [function.fopen]: failed to open stream: No such file or directory in fakesite.download/fart/ni🅱🅱a.php on line 69', 2900);
        _0xd05bx1a('Microsoft Visual C++ Runtime Error', 3100);
        _0xd05bx1c('USERNAME: ' + _0xd05bx1e, 3400);
        _0xd05bx1c('DEVICE: ' + _0xd05bx1f, 3500);
        _0xd05bx1c('🅱ENIS_AMOUNT: ' + _0xd05bx20, 3500);
        _0xd05bx1c('🅱LUNTS_AMOUNT: ' + _0xd05bx21, 3500);
        _0xd05bx18('Lying straight to your mom about your grades', 4200);
        _0xd05bx14('Your hard disk is being encrypted', 4400);
        _0xd05bx18('nnnnnnnnnnnn nnnnnnnn(' + _0xd05bx1e + ');', 4700);
        _0xd05bx14('W̛̟̮͌ͣ͗̉R͕̔̌̋̍͠Eͯ̔͗͟S͍̰ͯ̋̑͌̊T̠̎L͎̞̠ͣ̾̆̾̒ͫ͗E͍̰̦̮͕ ̷ͮW̵̳͓͖ͣ̏ͧ̾Ǐ̘̃͊ͫ̾̿Ṱ̸̟̬̮ͩͨͥ̒H̗̹̪̖͎͔̬͞ ̜͇͡J̡̻̰͒ͨE̳̹͈̥̝̣͊͡F̒ͣ͋̀̽̈́͜F͉̦̹̫̓̿̕ ̛̭̤̮͈͍̟̿ͅP͕̮̓ͪ̅̿̔͜R̡̩͚͋͐̎̿̍́ͣE̖̲̤̤̤̦͙ͩ͑̌ͯͧ̏́P̀̉͂̓҉̝Ȁ̶̠̣͔̓͐͑͌́̈́R̸ͭ̈́̑̋̒È̘̅ͫ̈́͘ ͕̠̮̙̮ͮ͛ͩ͝F͓̫ͣ̓̄O̟̟̟̪͕͖͚ͭ͋͞R̈́̽͋̿̆̅̐͏̳̝̘̱̳̞ ͬ̈́̒͆ͨ͌̚Ḍ̡̣͍̳̗̤̓E̟̮̖̜̳ͣ͌̽̎̚A̐͗ͨͣ͆Tͧ̉́ͨH̩͚̻̿͜', 5000);
        _0xd05bx1a('ŶlR%♙ǥ☔😺ŷr=♵e🙈ŉ^aŲġ!ƅmǻ☪😘😹', 5300);
        _0xd05bx1a('Encrypted Information: ｐｅｎｉｓ', 5600);
        _0xd05bx18('�̵̡̬̼͎̱͉̹̗͔͇̯̤̲̹̰̻̆̋̃ͭ̈́͗̅̓̐̚̚̚͝�̨̭̺̥̥̩̞͎̺̹̥̤͓̬̰̑̈́ͧ͒͆ͦ͞☉̍ͭͩ̓̾̂͑̋̂ͨ͗̎ͯ͆̊ͧ҉̷̡̢̳͍̺͙́ͅ☼̷̝̞̳͈̻̫̔ͨ̈́̍̈́ͪ͊́̌̉ͤ̄̒̀̕Ȩ̨̞̤͎̭͕̠̑̋͊̔́͂ͫ̍̇͝ǖ̶ͦ̆͆̀ͫ̍̂̓ͣͩ̾̽͒͛̽̄́̀͟҉͉͚͕̟̥̻͚̞ͅ�́ͤ̓ͩ̎͂͆̾̈̂͛ͨͣ͏̶͏̼̗͚̟̯̝̜͕̰̘̲̤͉͕͚̯͎̥͉̀�̢̢̤͚͖̱̯̯̟́ͤ͗̓ͨ̇́͡A͓̖͕̜̗ͨ̏ͣͩ͐̽ͭ̃͒̽̋͑ͪ̀͝ͅ8̴̤͚͉̪̥ͫ̔̍ͦ̄̾ͭ͋̒̊̀̀͘♵̷̨̛̝̖̞̰̜̠̯̙̓ͦ̌͆̆̽̍ͨͥ̍̽͒ͥ̊͌̍̀͟ǫ̛̠̳͕̠͚̼̩̆͒ͬ̊̍̎ͪ̃͑ͦ͋̈̃ą̵̵͓̠͓̲̞̙̬̻̯̘̳̱̊̇̉̈̍͐̉ͤ̽̿̓̅̋̆͊ͬ̋̚͟ͅ�̷̢̢͎͚͖̗̉͊̽̔̀ͭ͂ͯ̉̃̇̈͆̑�̷̸̰̥̲͈̠͗̍͋̇̾͐̃̿̉ͦ̕ĳͬͬ͊̂̈́̃͝͏̴̢̧̺͕͇ͅ⚎̢̣̻̟̙̟̖̺͇͖̹͚͙̹̣̮͚͔̍̔͒̉̒́̕⚃̵̷̸̴̣͓̳̹̩̖̯͓̻̣̲̫ͬ̈́̒ͣͦͮ̓ͧ͛ͨ̈͡ͅͅ☁̡͕͉͓͔̮̥̜ͩ̊͒ͤ̓͐͆̆̃̓̇ͮ͂ͫ̚̕͘�̴̨̠̬͔̦̼͕͉͖̄ͩ̓ͪ͑̒ͣͣ̀̑͂̐͟�̨͕̩̪̺̰͖̝ͦ͆ͨ̈́̀̃̔̃ͦ̎͟͝�̷͉͚̺͇͚̞͕̞̹͉̬̞̖͓ͯ̈̌̑̍ͯ̍̿ͧ̿̎͋̇̇̿ͨ͗ͅͅ�ͣ̽̀ͮ̃̚͟͏̝͚̤̳̳̲̙̯̝̤̣̟̮̞̥̻͜͝ͅ&̶̧̺̟͚̻̻̘̼̠͙̙͙̘̫͖͔͔͚̃ͯ̇̐ͅĬ͇͕̮̬̤̑̑ͤ̌̐̍̆̌̑̒ͤ͘č̶͑̊̓͒̍̂́̌ͭ͊̇́҉͚͈̣̼͍̟̬͕̱̕Ʀ̷͙̜̤͓͕̳͔̞̱͙̩͖̤̰̰̜̰͔̏͑̈́͑ͩ͆ͮͦͭ͒̉́ͦͦ̿ͥͤ͟ͅy̵̵̤̙̥͎͎̯͈͙͇̻̪̣̩̞̥͉̣̜̑ͤͮͦ̿͋͗ͫͭͨ̊̽̇̂́͒͜͠�̧̢̖͍͇̦͙̝̙̈ͨ̓͌͋ͧͤͩͨ̏͂̈̚͢͜͡�̷͎̯͈͍̜̺̮ͥ̎ͦ̎̏͊̈͗ͤͪ̒̀́͢⚒̧̬͈͎̣̻͇̹͉̯̤̞̮̖̞̣̭͈̖ͧ̒͒̏ͫ̆̈͆͊̊̒͘ͅ�̧̛̭̠̜͈̮̠̜͔ͫͯ̓̐͂̍̃̋͋̂̃̐͐̓̐́͜�̶̷̧̜̯̗̗̟͎̭̠͚͓̭̩͎̗̫̭͐ͭͪ̓ͫ̽͒ͯ̀̚̚', 6000);
        _0xd05bx14('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 6100);
        _0xd05bx1a('ERROR.', 6400);
        _0xd05bx1c('Ⱥ̛̘̖͖̭͈͈͙͖͚͉͙̯͕̘̤̪͐̍̍ͩ́͑͛͒ͭ͐͑̇̾̽́̅̒̚͝Ļ̡̛͉͓͍̗̮̹̗̰̜̲̣̖ͥ̓̃ͫ͟ƥ̔̆͂͛̑͌̂̈́̇̎ͩ͛̿̽ͣ͐̃̽ͣ͏̛̳̯̠̼̼̼̲̘̗̥̱̕ͅ¡̢͉̖͕̭̗̳͓̇̉ͨ͆̽ͬ̂͊ͭ͌͌ͧ͂̎̇̓̚͞�̸̛̛̥̪̟̹̹̗̙͉̝̫̜̊ͤ̑̓ͣͩͯ̇̽̍ͫ̋͡͡�̸̢̗̹̣̹̹̦͎͓̮͚̼̳͇͋̇͗͆ͮ̋͌̽̿́̅̓⚇̧͎̘̅ͥ́ͮͅͅ}̷̧̦̻̪̣̯̟̹̌͊̾̈́̚♙ͬͮ̂́ͩ͋͐ͫ̋̚͏̨̭͚͈̮̦͍̩̞̼̱̝͘.̵̢̹͚̹̰̱̖̦̯̜͈̼̘̙̘̞̱̓̾͐̌̏ͩ̂͆ͬ̄͆ͧ͌̃̀G͖̣̲̯̹̻̬̪̯̝̪̰̞̜̦̤̎ͤ̐̉̓́ͭ̅ͧ̋ͣ͆̂ͬ͛͠͠į͚͙̤͕͔ͦͯͬ͛͑̊̀̏̕͘͡Ì̇ͯ́ͪ̄͂ͧ́̑̌ͧͦ͆ͧ̑̋̅̅͏̴̜̟̺͙̦̝̠̻̘̱͍͈̗̩̝�̢̢̜̺͉̯̞̖̋̒̅̓̐ͧͧ̍̆͆ͣ̇̎̈̀ͪ͐͢�̨̧̖̬̤̫͕̝̻̰͔̖͎̓̏͑̊̒̈ͦ̂̅͑ͥ͆̎͟�̛̮̬͍̼̹̫͚̩̬̳̻͚̹̟͑͑̓ͯ͗̈́̈ͫ́�̵͍͎̜̩ͤ̇̊ͨ̉̊̂̌̔ͭ̕͢{̷̋̆͑͂ͯ͑̿̈́̓̾̍̽͗ͫ͆̌̃̕҉̸̵̫̞̬͍̫̼̮☮̛̱̮͕̟͗̇̈̋̓́͟ȝ̵̜͉̺͈̩̈͐ͫ̄̅̓ͭͥ̾͒͑͋͑̕͟_̵̨̰̫̼̖͈̭̤̗͕̟͇̟̬̱ͣ̂̔͑̐ͫͧͥ̂̆̆ͨ~̙̠͎̤͕̣̜͈̖͙̭̱̤̃̓́ͯͥ̿̉̓̈̉̉͗́͘͘͘ȓ͚͉̦̘̰̖̦̟͇͈̺͕̰̮̜̣̟̪̂͐̉͌̍͟͜ͅ�̗̪͈͍̼͚͙̼̳͇̖̳ͤͥ̑̈́̾ͥ͒̈ͮ̈́͞�̸̵̛̟̺̦̝̩̺̗̰͎͙͍̲̭͉̑ͬ̒̎̎͑̈̌͊ͥ̽ͥ̽͒̓̉͟è̤̠̖̯̬͙͖̱̿̍̅̐ͨ͘☢̴̛̩̗͓̪̫̮͙̻͙̺͙͈̲̻͚̙͖͇̥̈́̈́̅̾̊ͪ͛̃ͤ́͝♕͕͓̲̘̫͈̼͊͆̑ͧͮ̚͘͟͜͟͢F̵̛͇̦̺̭͉̜̯̤͎͓̽ͯ̉ͬ̍̀̎ͧ̎̈́̾̓ͤ͗́͠͝¹̵̨̲͓̤̭̟̦ͯ̑̅ͨ̅ͩ͌̄̎ͨ͂̕<̨̤̟͖̟͂̆͗͐́⚃̷̛̫͈̙̫̤̖̜̳̖ͦ̏̆͗͆̀̔͋͟�̶̮̘̪̰̦̦͔̞̠̼̯̰͍̹͙̔̾ͭ̽ͮ̊̄͆̋͒̾͝͝͝ͅ�̵̵̰̗̤͖̼͚̞̺̖̖̱͔͕̪̮̰̓̃̏̂̆͊́̓̒̆̄ͣ͗ͣͧ̏ͮ͗ͯ͡͝ͅͅP̸̭͔̺͕̐͆̃ͮ̿̂̽͢ş̴̨̳̫̬̰̜̬̠͚̫͎̟̻̬̠͙͔̤̣̅̈͗̾͐̓̍͛͋̔͂̐̍ͧ̽̚ͅ☄̑͆ͥ̏̽͒̒͛́̾̑͏͚͕̺̘́#̧̡̪̳̮̥̣̞͕͔̼̤̬̫͗̽̇ͫͥ̆̀ͯͧ̈̅̀͢Õ̧̤̝͈͔̠̭̻̩͙̯̣͍̖̾͑̓ͭͤ̀͢ͅ�̸̴̧̱͉͓͓͙̻̬̟̭̙̺ͣ͌ͣ̌̄ͬ̅ͤ̍̀͜�̰̥̼̬̮̬̹̗̳̦̯̳̟͈͈̫̥͎ͫ̓̌͊͘͡ͅ�̭̺͔͈̖̠͔̱̇ͦ̈́̈̂̋͛ͩͮ̚͘͜͠ͅͅ�̸̧͔̜̞͇͈̬̠̤͉̼̹̼̻̘͔̆̐ͬ̌̂͂̆̑̕͞͠ȹ̴̯̤̠̲̳̜̙͓̬̈̔͊ͧ͑̈́ͧͨ̀͊͠͠Ȓ͕̪̺̬̲̯͔̝̟ͭ͐͆̑͂͂̉̃ͫͥͯ̽̅̽͘̕͟͞ͅ¤̡ͧ̆ͥ͐̌̽̈͢͏̬͕͉̹̣͖̜͚͞ͅư̛̰̪̲͉̐̐̀ͨ̋̔ͨͧ̂ͧͩ̒̈́̄͟͠ȏ̷̷͇̞̙͕͔͕̣͓̜͕̳͚̰ͥ̈͂ͫ͋́�̨͎̤̠͙̭̥̹̩̱̤̘̹͔̱̌̄ͤ͒͆ͪ̅ͦ̃̂͢ͅ�̴̴ͬͭ̾ͬ̃̏̾̊ͪͬͯ̅̇̓̚͡͏̖͖̦̻͎̮̘̙̗͙̘̗͎͎͍̼ǟ̶̷̢̝͚͖̭̯̻̙͎̦̞̫̤̲̝̙̞̥̟ͪ̊ͫ͌͑̊ͮ͒ͫͯ̋́̄̎ͨ́̓ǋ̨̮͈̥͚̫̠̣̯̻̱͓̱̄ͩ̍͊̒̿͗ͯͨ̌͢͟͝ü̧̗̘̣̪̫͈͙̟̦ͣ͛ͤͨͨ̎̊ͯ͊̍̓͘ŉ̡̮͇̗̮̟̖̣͎̺͈̱̭̜̬͍͎̜ͣ̈́͊ͪ̀̔ͦͧ̏ͦ̔̈̔̇̆̏͜͢͞ͅĥ̨̜̤̻̩͒̓͋ͮ̊̽͛̄̚͡}̶̛̯͎̼̪̬̠͚͇̀̑͌͂̃̈́ͩ̌́͌̐ͮͥ̐̈́̑͠Ŀ̢͎͉͉͈̤̞̳̮͑͌̓̓͛͋̊̊͑ͦ̀̊ͮ̑ͤ͌̒ͨ͢͡ď̵̍̎̎̇ͭ̎̓͐̂͒̆͋ͫ͋ͦ̅̏͢͜͜͏͉͙͚̲1̷͗̏̓ͮ͗̆ͫ̏̽̇̎̂͛͏̖̺͓̥̀�̧̤͖̖͔̞̻͊ͥͩ̐̅ͦͯ̿̾͢�̛̎͊̾ͩ͊ͯ͐͑͐̔ͮ̂͋̊̾͢͞͏͔̥̭̞̯̪͙̜̗̦̣̱̱̱̖͓͘ͅͅ�͉̙̩̭̖̤͉͚͈̝̰̮͉͖͙̞͙̿̅̎͐ͧͥ̽̆̀́́̚͢͜�̴ͩ͗͂͂ͯ͒͐͋̈͟҉̙͕̤̟̦̠̼̀F̷̨̛̣̲̣̟̱̘̘̳̲͙͇͆́ͧ͠ň̸̉͊͛̒ͭ̏͒ͬ҉̸̤̜̫͔̟͉�̾ͫͫ̈ͫ҉̨͎̙̮̳̙̺̪̺̠̥̣̻͖́͞�̸̨̳͔͍̯̰͇̙̗̖̞̗͉̭͍̻̅ͣ͐͞ͅü̵̸ͭ̄ͯ͊͗̿̒̇ͥ̔͌͏̳̺̙̳̬̭Ǘ̏ͭ̈͂̐ͧ̐͟͝҉̖͈̱͓̦̮̺͚­̷̧̠̟̲͚͔͓͙̠͈̬̮̖̪̜͓͍̫͎ͥͥ̾̾ͨ̍̃̋̂̒̏ͥͨ̓ͧ̔̐͠͠♼͋ͣ͂͗̀̓ͤ͂ͦͥ̕͡͏͕̜̙͙̻̞̫͈̻͖̞͔̪̘͕̠ͅȕ̧̨̗͇̘̗̝̳̪̙͔͍͓̌̈́̓͒̏ͭͤͯ̍͆́̌̊̏̈͑͂ͮ͟͝Ă̢̪͍̪̣̤̰̝̣̲̙̣̰̹͍͉̒̅ͯͨͩͮ̀ͤ̐͘͟͟�̜̝̳͖͍͇͓̱̝ͣͩ̍̔̄ͦ̿̏́̏ͦͯ̀͟�͖̜̺̘̲͙̲̯̩̮͈͈̪̲ͧͫ̇ͣ̏͒͗ͪ̆̒́͘�̵̶̰͙͖̣̙̼̞ͬ̂̏̂̅̒̈ͫ̏͌͑͒̈́̽̍͘͡ͅ�͌͂̃̆ͣ̚҉̸̪͇͚̘̤͖͔͇̟͉̠͈͈͢͞☬̸̴̡̣͖̲̝̰ͪ̅̋͆̈ͣ̽̉̌͑̃̊̄͂̀ͭ͘͜☼̧͕̻̗̳̦͋ͣͫ̐̂̀̉̑̑̌͗̓ͧ̆ͬ̇̌̾͜�̿̐̽̉̀̓́͞҉̙̖̝̻̟̥̗̞͔̙̦̮̞̹̟͖̲̙�̡̱̘͖͔̰̹̹̹͓̠̙͛ͫͮͩ͒̒͜͡ͅ☙̓̓̏͐̽҉̧̛̩̘̩͙̱̬͖͈͙̼̗̫͘ͅͅ�̶̻̖̮̩̞̖̄͆̈́̍͆͌̿̓͗̅̆̇͞ͅ�̸̨̛̥̙̖̲̂̀ͬ͛̓̒͂ͣ͘͡ͅͅĳ̶̢̠̣̞̼̥̗̩͕͕̦̖ͪ̃͆ͨͦ͆͑̇̑͛͛ͣ͊̕�̵̯̹̥͖̜̩̼̘͔̭̜̦̖̲̯͎̈́̆̈̒ͩ͆ͨ͐̍̋̿ͦ̋̎͠�̌̋ͬ̊̊̋̾̓̿͂̆͑ͫ͗̚̚͜͡͏̡̧̥͇̳♼̨̛̪̼͖̬͇̠̫̹̺̺͇̻̞͎͈͔͖̄̂̉̆ͯ̓̅̋́ͩ͑ͧ̆̀̀̈̅͡ƭͧ̐͆̏͋͒͂͑͛̊̒ͬͩ̐͑̆͒͏͓͎͓̪̳͈͚͉͢͞☸̛͙̖̲̞̘̮̳̪̻̩̗̰̤̱͙̠ͩ̈ͨ̇ͫͧ́ͅá̴̶̛̠̞̭̞̺̯̟͓͎̈́̂͐͐͗ͭ̍̓́̿̎̋͛͛ͣ̄̓̿ͣ̕È̢̠̣̝̤̻̐͛͌ͩ̐̆̎͆̊͗ͬ̈̊͟͠ͅz̨̬͕͎̫͓̐̓͑̃̑́ͩ̃͜ù̷̙̖̹͚̮̰̬͇͍͇̮̱͍͖̃̆̓̎̎ͮ͌͂̅̑ͧ͜͝6̡͍̻̗̥̳͈͈̏̀ͫ̆̂́̚ŕ̸̛͎͚̩̠̜̲͙̃̊ͬ̋̈́́ͅĖ̶̢͓͚͍͙̩̗͑͊̿ͭͪͯ́͗̂̍̽̈́̀̕͞#̐ͬ̑̀́̚͏̯͎̥̖̰͈͉͇͇̦͍̝̺̖̝̲̪☧̵͓̮̼̫̞̟̥̹̙͈̭͆͒̄͑ͯ̑ͭ̇̀̊́̔̾̈́ͧ̍̈ͨ͡ȏ̸̵̢̞͔̩͉͖̩̘̥̻͒̐̂̈̋̊ͫ̔͆̆̃ͦ̓͒̚̚̚͟͞ţ̢̡͍̩̲̞̪͙̯̺͓̰͔̗̫͇̇ͭ͑ͭͧ̎̒̃͊͑̀̀ͣ̀͋͛͛̆͘͢ố̩͔͎̟̤̹̎ͣͤ̇̆͌ͨ͢͟͞¥̡̨͈̘͇͚̦̘̦̭͓̞̭̤̳̱̬̱̖̮ͧͩ̒̓̄̉ͫͮ̓̅͒͒ͫ̀̈́͑̆͟͞¥̢̭̣̤̠̬̟͍̪̼̪̜͕͎͕́ͬ̃͆͆͊͜͞ͅŲ̶̶̜̩̰̭͕̻̾̀ͩ͑ͪ͑̈́̈́̋͋ͧͫͨͤ̎̇͂̿̈͘Ǯ̤̮͈̣̗̠̝̑ͬ͊ͨ̓͑́ͤ̔̉͒͛͌́͢�̜͈̹̮̖̻̥̳̦̭̅̏̓̈́̎́ͅ�̱̼̖̥̱̲͖̱̞̓ͦ̋̔ͩ͢͢͠�͈͈̭̪̙͚̮̠̙͓͎͔͚̤̹͇̜̅͋̏̀͢͞ͅ�̧͕̘͕͇̟͓̦̦͙̬͚͎̙̳͇͇͖͎̳̓̊͆͒̒̾̉̅ͦ̆̓̓̔̚͜�̶͖̞̲̬̰͍̤ͣ̒̈ͣͮͦ̃̔́͊̈͒̕�̶̨̼͕̰̹͉̳͈͉̜̯̝͔͐͂ͫ͊̍̋̐̓̅ͮ̀̚☱̸̴̻̱͓͖̩͎̠̬̟͍̹̳̣͔͇̲͖ͥͧ̃̑̀ͬ̈͟͟ͅ⚎̗̖̱̲͔̮̮͕̩̖̣͖̗̬͂ͨ̉̄̈͂͛ͧ̏͝͠Ȫ̶̴̷̡̡̜͇͕̖̰̻̬͔̪̗͖͚̲̠̝͇̝̼̋͗̅̄̔͋̽ͤ͗̚Ő̰͔̖̰̼ͥ́̅́ͯͦ̊͛̋͂͑ͧͥͪ̉̇̾̓͢͡Ŗ͛͋͊͆́ͧ̃ͩ̏́͏̛̼̥̫͙͚̟̝̝͇̮̹̤☳̶̨̥̲̪͇̳̟̥̲͎̺͙̥̜͎̜͍̮ͫ̂̓ͧ̂ͭ̔̽̔̇̂̈́ͮ̆ͦ͟Ä̸̴̝̘̟ͫ͗͒ͣͮ̎ͣ͋ͯ̂̏͗͒́ͦ̎̑͢͝͡5̷̛ͯͪ̌ͬ̏̐̀͏̡̱̗͔☔̵̶̛̮̲̫̲̙̹̖̲͖̠̭̲͇̜͐ͮ͐͒̇̀ͩ̐̉͛͛̂ͪ̽́̚Ņ̢̨̛͎̫̱̙͖̠͈͐̓ͦͩ̅̌̂͋̄̒ͭͫͤ̈́͗̈̿ͤ͑̕x̨ͧ͐ͥ̌̑̾ͮ̽͋̽̄ͦ͏̵̵̘̣͎̱̻̫͉̖̺̖̗͢', 6900);
        _0xd05bx1c('0', 7100);
        _0xd05bx1c('undefined', 7200);
        _0xd05bx1c('Error', 7300);
        _0xd05bx1c('�̷̛̮͎̗͉̭̂͆̐̋̓ͮ̅̊͑̋ͤ�̶̙̬̻̳̻̩̯͓̺̻̩͂ͯ̑͌ͫ́�̓ͩ͐̅̔̀̄̔͏̨̢͉̯͙̥̺̘͎̥͇͉̜̯͉̰͞ͅͅ�͇̘͎̖̼͂̄ͪ͗̎̓̆́ͨ̃͒̈ͤ͡͡Ń̡̼͙̻̠̗̖̹̪̺̻͇͔̹̦̲̭̟̲͚ͦͧ̓ͥ̓͌̐͐͂̅͊͞ĝ̶̢̛̠̝͇̯̇̓̿̒̎̈́̑͗ͯͮ̆�̧̪͇̪̹̖̼͍̯̘͉̞̠̙̺͖͚̹̪̅̅ͤͣ͛̏̒͗͑͊͗͌̾̅̅͗̚͡ͅ�̖͉̙̖̔ͥͥͪ͐̏ͯ̇̈̀͠͝A̺̘̲͎̯̩̫̝͚͇̞̹̪͖̰͚̤͛̂̿ͧ̑̓̃̅͊̀́̚͡ƞ̴̶̷̵̦̗͉̗̞̫͍̙͉̤̰͍̟̼͙̮̜̆̑̄̉̃ͩ̑́̄͂̑̌̓ͤ̋ͬ̅̚̕ͅŀ̛̫̖̪̜͕̻̮͕̰͕͖̘͍̔̉͋ͭͩ8̸̲̗͙̣̱͇̖͈̼̹̙̮ͫͦͪͥͦ̇͒̑̿ͮͯ̋ͥ̄̀͐ͪ́͠ǀ͊͆̆͗͌̑̽̑͏̶̶̷̗͙̲̱Ừ̸̛̮̝̟̬̟͈̙͍̑̾ͣ̓̑͟͡�̢̡ͥͩ̎̀̀̐͑͘͏̫̝͎̘̣̹̹̤̙̮̱�̵̢͇̘̻̦̤̼̪̹̞̈́ͭͦͭ̔̑ͫ̋̑ͧ̂ͣ̉̈͠t̢̝̳͎̫̺̘͇̱͎͍̼̯̎̃ͩ͛͂̒̽̈́̋̊ͤ̈́̔͛́͘͡͝�̬̩̦̭̦̝̻̙ͧ̊̋́̚͝�̢̙̖̣̬͕̻̥̩̺̽͛̑̃ͣ͒̅ͦ̈ͪ̓͟͟͠͡�̨͚̭͎̬̟̝̖͓̪͍͎̠̮͈͔̲ͧ̑̓̑̀̿̑ͬ͆̓̎̀̕͜͟�̋̇͌ͯ̒ͫ͒͌̒̊̑̔̀̚͏̛̺͍͈̙̖̱̤̟͓Ì̸̵̥͇̫͚̳̜̰̼̆͂̃ͨ́́�̶̋̊ͮ̉ͯ͐ͣ̚͏̹͎̺̰͔͚̦̺̱̖̖̮̻�̷̞̘̪̥͔̲̝̖̟͔̼̹̼̩̒ͫͧ͛͊̓ͪ́͢͡♄̷͕̲͔͉̮͉͍͕̳̝̘̝̣̜̼̱̻̬̝ͫͮ̍ͤͨ̏ͭ͊͡☫̱̥̖̦̞̣̼͎̺̠͍͓̳̝͉̱̌̌ͦ͐̃̑ͯ̕ṕ̛̛͉̗̞̗͍͔̯͓̫̗͚̙̱̣͈̥̥̓ͦͫ͆ͭ͘͘͜☮̷̨͚͈̯̩̥͈̤̖̞̥̟̱͓̱͔̩̣̟̑̀͒̍ͤ͐̎̒ͪ̃ͤ̑͘͝¢̶̥̠͍̤̹̩͚̩̫̙̗͔̥͓̖͚͉͆̈́̍͋͋͂̅ͪ̏ͣ̐͆̊̈́̇ͨ́̕͜ð͂̅̇ͫ̈͗̓ͧ̆̐̐͋̎̓̍̚͏̵͘҉̸͖̭̦̬͕ȳ̓̈́ͣ̒͌ͪ̓̏̑̑̏̔̾ͦ͐ͭ҉̵̛̤̗̱̬̬̗̠̜̮̬̹̲̪̰͡͡Ŗ̧̓ͭ̅́̂͌̏͂̐̆ͦ͐̿̑͏͕͍͖͎̳̝̻̼̜͓͓Ó̢̡͉͈̯̤̹͉͎͙̼̭͑̍̉̍̒̉͂̄̅̎́̓͂̆̀͟ͅĥ̛̔̓͌̆͒ͫͤ͌͗ͯ͛̍͐ͥ́͡͏̞͚̹̼͉̱͇̪̫Ƽ͖̦̹̩̮̱̻͍͖̗̝ͭ̿͆͌̾̊͌͗̉̎̂̆̈̽͑̚̚͢͞⚎̴̸̱̱͙̳̺͙͓̎̿ͤ͐̿̀̒͌̔̎̿̈͞͞ͅĈ̸̴̯̩̳̘̖̲͙͖̠̠͓̮͑͛ͮ̓͘͞͞ȫ̶͎͚̺̞͈̼͖̮̻̜̟̩͙͉̩̗ͩ͆ͯ̋̐́̽͢͜͝ͅȦ̵̺̘͓̪̩͇̂ͪͤ̉̓̉͟͢♓̻̜͖̼͎͖̫͎̘̠͕̘̫ͤ́́̂̓̉͑̑̎̓͗̍͆̈ͣ̿̚͟͢͡�̺̼̖͇̘̰͖̺͈̬ͫ̈̎̂̉̈͗̈́̂ͨ͂̂̆̕͠�̶͌ͨ̔͆̒̅ͦ͆ͫͭ͆ͮ̓̐̌̾̀͏̸͎̭̯̥͓̀Ɖ̘͚̗͇̠̲̳̋ͪͦ̂̀͜͞͞͞ͅ³̶̡̢̺̬̰̰̮̞̰̲̳̗͕̲̃̉͗̇ͬ͗̍̅̒̚ț̴̷̢̥̝̟͙̘̙̫̥͎̜͚͗ͫͥ͋ͮ̄ͣ́̏ͭ̏̿ͬ̽͂͞è̴̱̰͖͇̯͍͒ͬ̈̎̾ͮ̈́̄ͭ̓̀ͪ͘͟ȼ̭̟͎̳͖̤̬̹̫͇̘̝̬͊̅̓̾̕͟͞ͅͅ·̛̤͓̺͉͓̪̭̭̯͈̯ͤ̽ͭ̏̽͌̂ͦ̿̈́ͧͬ̽̄͜͠͠♈̸͓͈̮͎̍͌͗̽̓̓ͮ̔̈ͬ̾͝͡͡͞o̻͎̫͉̼̠ͧͧ̍͒̈̄͆̕͡͝�̒̄ͥͥ̓͟͏̬̹͍̰̯̮̣͎̣͎̺͈͝�̝̦̳̖̪ͤ͆ͫ̋͗̃̄̐͊͐͟�̸̖̥̱͚̗͕̪͍͍̼̲̥̃̎͑́͘͢͡ͅ�̶̡̖̼͚̻̭̟̜͎̤̟́̾̇̅ͪ̓ͧ͐̃͝☑̶̪̥͕̹̫̬͕̱͈̤̰̰̱̙̱͉͂ͬ̒͗̕♥̶̔ͫ͂ͫ͏̣̬̩̗̼̠̼̣̲̦̣̗̣̻̣̠Ĥ̘̻͎̣̻͚̭̖̝̺̗ͦ͊ͦͦ͊̈́ͤ̿͆͛͆̄̕͘͝�ͥ̿̽ͩͤͣ͛͑ͦͬͬ̎ͭͤͧ̓҉͏͏̻̪̳̳�̠̝͈̺͓͓̳ͬ̔̂̑ͭ͑̊͆ͪͦ͐̂ͤ̾̕͘̕͜Ë̛̩͉̭̻͈̱̜̯͕̰ͭ̈́ͪͤ͌ͨͦͭ͒̃͂̓́͟ơ̡̩̖̲͖̝̦̲͙̪̯͑ͪͧͦͣͨ̑͋̈́ͭͧͯ̚ͅŇ̴̶̒͗ͬ͊ͣͮ͌͌̃̄́̈́̅̐ͩ̚͟͡҉̟̱̲̗̫̣̥̜ã̧͙̤͕̭͇̆ͮ̊͆ͭ́́ͤ̈́́̀͠͡·̨̡̛̩̲̣̹̳̖͎͚̖̦̲̯ͤ̌ͥ̾̄͒̚͢Ḿ̲͇̤̯̰̰͙͚͔͙͎̬̟̤̜̻̺ͣ̂͗̇ͤ̓ͪ̑̀̀̚̕͘͡☑̤͈͍͔̯͕͚͚̱̠̝̰̩̐̓̑̑͊̿̕̕͞�̷̢̬̜̺̭̫̯̯̩͇͍͍̔͒ͫ̔͑̀ͨ̅ͯ͝�̡̤̪̰͓̬̈́ͨͣ̏̕͡♸̗͖̥͇̹͈̭̺͕̖̿ͨ̌ͭ͒͋ͨͩ̊̅͑ͨ̊̒ͤͥ̌̀̚͟Ĕ̸̛͍͇͎̠̯̟̫͕͉̟͉͕̤͆̉́͒͡͠͞ì̀͌̀͗̾͊̎̌̉̓͗̓ͯ̂̽͑ͭ̆̋́҉̡̨̖̻̖̼͈̹͇͕̝☍͉̮̜̬̟̟̯̙ͣ̋ͫ̾͒ͫ͌̒͟͟Ŵ̴͎̼̝͍͌̍̂̄̈̕͡ą̣̦͕͖̥̦̲͚͈̃ͧ͐̄ͣ̇̒͊̀͒́̚Ǽ̢̼̗̦̤̫̥̫̬͉̝̠̮̂͒ͥ̄͐͒ͭ̍̈́̒͋̄ͫͧͤ̉͆̄͛Ő̡̍ͭͨ̒̀͂ͣ͌ͤ̈́ͫ͌̑̑̌̋̇ͤ͘͏̴̢͈͙͖̖͍͇̟͎̦͉̘Ġ̃̏ͭͦͣ͌̓ͦͤͪ̃̇̇ͯ̒̋͏̞̤͍̮͠ş̨̱̳̩̲̤̩͚͉͕̬͎̙̱̌̈́ͫͨ́́̀ͦ̉̀́̐ͣ̌̀͠⚔̵̡̯͓͕̟̫̹̬̘͚̝̖͇̮̫̳̀͂̇̔ͪ́̆͜♇̵̴͎̖̻̦͈͓̜̭ͦ̓̐̂̇̆̔ͦͥ̀̅̽͑̐́͜☇̘̤̻̯̦̣̤̣̩͔͍͎͙͕̃͑ͥ̑ͮ̃̓ͮͩͩ̅ͯͪͨͯ́͘͟͡͡ͅ♷͍̟̮͕̳̆̔̌ͩ̏̏̍̋͒ͪ́̀⚗̷̲̪̗͙̉͌̉ͣͣ̐̆͒͂̏ͦ̏̑̕͝♠̴̴̷͚͎̦͇̖̺͔̙̻̰̯̳͚̘̦͙̳̏ͦͬͧͪ̉̽͗̇̈̒ͅͅ⚖͉̘̺͇͉̯͓̮̣ͩ̓͌ͥ͗̀̎ͩͪͧ̓ͮ̋̒ͣ̕ͅ�͕̻͉͉̙̆̀̏̄̃̉̈́̇ͧ͑ͮ̇͘͟�̴̀̽͗͐ͭ̓ͣ̂ͪ͛̓̍̇̇̉̊ͪͫ҉̫̩̭̜̭͚̗̖̤̜̖̥̯̭̼ơ̷̛͕̬͕̻̻̺̲̭̪̈̅ͮͮ̾̑̿̿̓̚͟͠Þ̴̡̮̩̞̤̩̦̟̉̀̈̒͢ͅ�͚̯̜̜̳͍̰͚̮̩̂͛̓͐̎̓̽͋̅ͬ̽ͥ͠͠�̛̪̺̝͓̝͖̹̈̐̎̒̈̔ͯͯ̉̿͆́̐̿͊̃͢͞G̨̡̛̞̳̙̯̩͙̳̫͂ͯ͆̇̑̆ͮ̀', 7400);
        _0xd05bx1c('PC LOAD LETTER', 7600);
        _0xd05bx18('FATAL ERROR: INVALID TYPE. Retry, Ignore, Fail?', 8000);
        _0xd05bx14('death comes', 8250);
        _0xd05bx1a('0.', 8430);
        setTimeout(function() {
            $('.loading-spinner')['css']('border-left', '1.1em solid #29be62')
        }, 8900);
        _0xd05bx1a('¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ', 8900);
        _0xd05bx1a('Sending item to (' + _0xd05bx1e + ') from our server.', 8900);
        _0xd05bx1a('Sorry fam, can&#38;t do', 8900);
        _0xd05bx14('You just got scammed lol', 9400);
        setTimeout(function() {
            _0xd05bx23()
        }, 12500);
    }
    $('.comment_btn')['click'](function() {
        sweetAlert('Error', 'fuck off', 'error');
		console.error('You have no mouth and you cannot scream.');
    });
});