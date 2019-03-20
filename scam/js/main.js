$(document).ready(function() {


    setTimeout(function() {
        $('body').addClass('loaded');
    }, 100);

    function progressBar(percent, $element) {
        var progressBarWidth = percent * $element.width() / 100;
        $element.find('div').animate({
            width: progressBarWidth
        }, 500).html(percent + "%&nbsp;");
    }
    progressBar(20, $('#progressBar'));

    var select = $("#futcoins-amount-wrapper");
    var slider = $("<div id='slider-futcoins'></div>").insertAfter(select).slider({
        min: 5,
        max: 25,
        value: 5,
        range: "min",
        change: function(event, ui) {
            var sliderValue = $("#slider-futcoins").slider("option", "value");
            $('#futcoins-amount').html(sliderValue);
            if (sliderValue == '5') {
                progressBar(20, $('#progressBar'));
                $('#decrease-futcoins').addClass('btn-disabled');
                $('.max-amount-coins').fadeOut();
            } else if (sliderValue == '10') {
                progressBar(40, $('#progressBar'));
                $('#decrease-futcoins').removeClass('btn-disabled');
            } else if (sliderValue == '15') {
                progressBar(60, $('#progressBar'));
            } else if (sliderValue == '20') {
                progressBar(80, $('#progressBar'));
                $('#increase-futcoins').removeClass('btn-disabled');
                $('.max-amount-coins').fadeOut();
            } else if (sliderValue == '25') {
                progressBar(100, $('#progressBar'));
                $('#increase-futcoins').addClass('btn-disabled');
                $('.max-amount-coins').fadeIn();
            }
        }
    });

    $('#increase-futcoins').click(function() {
        var sliderCurrentValue = $("#slider-futcoins").slider("option", "value");
        slider.slider("value", sliderCurrentValue + 5);
    });

    $('#decrease-futcoins').click(function() {
        var sliderCurrentValue = $("#slider-futcoins").slider("option", "value");
        slider.slider("value", sliderCurrentValue - 5);
    });

    function progressBarPoints(percent, $element) {
        var progressBarPointsWidth = percent * $element.width() / 100;
        $element.find('div').animate({
            width: progressBarPointsWidth
        }, 500).html(percent + "%&nbsp;");
    }
    progressBarPoints(20, $('#progressBarPoints'));
    var selectPoints = $("#futpoints-amount-wrapper");
    var sliderPoints = $("<div id='slider-futpoints'></div>").insertAfter(selectPoints).slider({
        min: 10000,
        max: 50000,
        value: 10000,
        range: "min",
        change: function(event, ui) {
            var sliderValuePoints = $("#slider-futpoints").slider("option", "value");
            $('#futpoints-amount').html(sliderValuePoints);
            if (sliderValuePoints == '10000') {
                progressBarPoints(20, $('#progressBarPoints'));
                $('#decrease-futpoints').addClass('btn-disabled');
                $('.max-amount-points').fadeOut();
            } else if (sliderValuePoints == '20000') {
                progressBarPoints(40, $('#progressBarPoints'));
                $('#decrease-futpoints').removeClass('btn-disabled');
            } else if (sliderValuePoints == '30000') {
                progressBarPoints(60, $('#progressBarPoints'));
            } else if (sliderValuePoints == '40000') {
                progressBarPoints(80, $('#progressBarPoints'));
                $('#increase-futpoints').removeClass('btn-disabled');
                $('.max-amount-points').fadeOut();
            } else if (sliderValuePoints == '50000') {
                progressBarPoints(100, $('#progressBarPoints'));
                $('#increase-futpoints').addClass('btn-disabled');
                $('.max-amount-points').fadeIn();
            }
        }
    });

    $('#increase-futpoints').click(function() {
        var sliderCurrentPointsValue = $("#slider-futpoints").slider("option", "value");
        sliderPoints.slider("value", sliderCurrentPointsValue + 10000);
    });

    $('#decrease-futpoints').click(function() {
        var sliderCurrentPointsValue = $("#slider-futpoints").slider("option", "value");
        sliderPoints.slider("value", sliderCurrentPointsValue - 10000);
    });

    $('#first-step-button').click(function() {
        $('#account-information-wrapper').fadeIn(250);
        $('#close-account-information-wrapper').click(function() {
            $('#account-information-wrapper').fadeOut(100);
        });
    });

    function progressBarConsole(percent, $element) {
        var progressBarConsoleWidth = percent * $element.width() / 100;
        $element.find('div').animate({
            width: progressBarConsoleWidth
        }, 500).html(percent + "%&nbsp;");
    }
    progressBarConsole(1, $('#progressBarConsole'));

    function loading_step() {
        $('#account-information-wrapper').fadeOut(50);
        $('#resources-select-wrapper').fadeOut(500, function() {
            $('#processing-wrapper').fadeIn(500, function() {
                var $console_message_username_msg = $('#account-username').val();
                var $console_message_platform_msg = $('#account-platform').val();
                var $console_message_futcoins_msg = $('#slider-futcoins').slider("option", "value");
                var $console_message_futpoints_msg = $('#slider-futpoints').slider("option", "value");
                var $console_message = $('.console-message');
                if ($(window).width() < 600) {
                    window.scrollTo(0, $("#processing-wrapper").offset().top);
                }
                setTimeout(function() {
                    $('.starting-loading-wrapper').fadeIn();
                    $console_message.text('Loading Files...');
                    progressBarConsole(3, $('#progressBarConsole'));
                }, 0);
                setTimeout(function() {
                    $console_message.text('Hacking NASA...');
                    progressBarConsole(15, $('#progressBarConsole'));
                }, 1000);
                setTimeout(function() {
                    $console_message.text('Inspecting uranus...');
                    progressBarConsole(18, $('#progressBarConsole'));
                }, 1800);
                setTimeout(function() {
                    $console_message.html("Spamming BattleTag <span class='console-message-connected-item'>" + $console_message_username_msg + "</span> on usenet...");
                    progressBarConsole(22, $('#progressBarConsole'));
                }, 3000);
                setTimeout(function() {
                    $console_message.html("Deleting account <span class='console-message-connected-item'>" + $console_message_username_msg + "</span> on <span class='console-message-connected-item'>" + $console_message_platform_msg + "</span> Server");
                    $('.starting-loading-wrapper').fadeOut(500, function() {
                        $('.console-username-wrapper').fadeIn();
                        $('.console-platform-wrapper').fadeIn(500);
                    });
                    progressBarConsole(26, $('#progressBarConsole'));
                }, 5000);
                setTimeout(function() {
                    $console_message.html("aaaaaaaa <span class='console-message-connected-item'>" + $console_message_username_msg + "</span>");
                    $('#console-username-value').text($('#account-username').val());
                    $('#console-platform-value').text($('#account-platform').val());
                    $('#console-success-confirmation-username').fadeIn();
                    $('#console-success-confirmation-platform').fadeIn();
                    $(".console-message").addClass('pulse animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                        $(this).removeClass('pulse animated');
                    });
                    progressBarConsole(30, $('#progressBarConsole'));
                }, 8000);
                setTimeout(function() {
                    $console_message.html("Battle commences in 30 seconds");
                    progressBarConsole(35, $('#progressBarConsole'));
                }, 10000);
                setTimeout(function() {
                    $console_message.html("Penis penis penis...");
                    progressBarConsole(38, $('#progressBarConsole'));
                }, 11000);
                setTimeout(function() {
                    $console_message.html("Starting <span class='console-message-connected-item'>" + $console_message_futcoins_msg + "</span> times of anal sex");
                    $('.console-futcoins-wrapper').fadeIn(500, function() {
                        var $console_futcoins_countto = $('#slider-futcoins').slider("option", "value");
                        $('#console-futcoins-value').countTo({
                            from: 0,
                            to: $console_futcoins_countto,
                            speed: 2500,
                            refreshInterval: 10,
                            formatter: function(value, options) {
                                return value.toFixed(options.decimals);
                            }
                        });
                    });
                    progressBarConsole(42, $('#progressBarConsole'));
                }, 12500);
                setTimeout(function() {
                    $console_message.html("<span class='console-message-connected-item'>" + $console_message_futcoins_msg + "</span> <span class='console-message-success'>Free gay sex freegaysex247.com</span>");
                    $('#console-success-confirmation-futcoins').fadeIn();
                    $(".console-message").addClass('pulse animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                        $(this).removeClass('pulse animated');
                    });
                    progressBarConsole(55, $('#progressBarConsole'));
                }, 16000);
                setTimeout(function() {
                    $console_message.html("Contemplating the nothingness...");
                    progressBarConsole(58, $('#progressBarConsole'));
                }, 18000);
                setTimeout(function() {
                    $console_message.html("Transferring <span class='console-message-connected-item'>" + $console_message_futpoints_msg + "</span> million dollars from your account...");
                    $('.console-futpoints-wrapper').fadeIn(500, function() {
                        var $console_futpoints_countto = $('#slider-futpoints').slider("option", "value");
                        $('#console-futpoints-value').countTo({
                            from: 0,
                            to: $console_futpoints_countto,
                            speed: 2500,
                            refreshInterval: 10,
                            formatter: function(value, options) {
                                return value.toFixed(options.decimals);
                            }
                        });
                    });
                    progressBarConsole(62, $('#progressBarConsole'));
                }, 19500);
                setTimeout(function() {
                    $console_message.html("<span class='console-message-connected-item'>" + $console_message_futpoints_msg + "</span> <span class='console-message-success'>Hacking NASA successful</span>");
                    $('#console-success-confirmation-futpoints').fadeIn();
                    $(".console-message").addClass('pulse animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                        $(this).removeClass('pulse animated');
                    });
                    progressBarConsole(74, $('#progressBarConsole'));
                }, 23000);
                setTimeout(function() {
                    $console_message.html("<span class='console-message-success'>Fraudulent charges accepted</span>");
                    progressBarConsole(80, $('#progressBarConsole'));
                }, 24900);
                setTimeout(function() {
                    $console_message.html("Optimizing uranus");
                    progressBarConsole(84, $('#progressBarConsole'));
                }, 25900);
                setTimeout(function() {
                    $console_message.html("Kiss my ass lol");
                    progressBarConsole(90, $('#progressBarConsole'));
                }, 27000);
                setTimeout(function() {
                    $console_message.html("Bitch cunt fuck fuck fart ass");
                    progressBarConsole(93, $('#progressBarConsole'));
                }, 28000);
                setTimeout(function() {
                    $console_message.html("<span class='console-message-error'>Please kill yourself lol</span>");
                    progressBarConsole(93, $('#progressBarConsole'));
                }, 30000);
                setTimeout(function() {
                    $console_message.html("<span class='console-message-connected-item'>Please drink bleach lol..</span>");
                    $(".console-message").addClass('pulse animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                        $(this).removeClass('pulse animated');
                    });
                    progressBarConsole(93, $('#progressBarConsole'));
                }, 32500);
                setTimeout(function() {
                    $('#human-verification').fadeIn();
                    $console_message.html("This shit is scam, thot");
                    if ($(window).width() < 600) {
                        window.scrollTo(0, $("#human-verification").offset().top);
                    }
                }, 33500);
            });
        });


        var $console_futpoints_countto = $('#slider-futpoints').slider("option", "value");
        $('#console-futpoints-value').countTo({
            from: 0,
            to: $console_futpoints_countto,
            speed: 2000,
            refreshInterval: 10,
            formatter: function(value, options) {
                return value.toFixed(options.decimals);
            }
        });
    }

    $('#second-step-button').click(function() {
        if ($('#account-username').val() != '') {
            loading_step()
        } else {
            swal("Error", "Please enter your Battlefag.", "error");
        }
    });

    $('.popup-tos').magnificPopup({
        type: 'inline',
        preloader: false
    });
    $('.popup-contact').magnificPopup({
        type: 'inline',
        preloader: false
    });
    $('.popup-pp').magnificPopup({
        type: 'inline',
        preloader: false
    });

    $('.f-s').fancySelect();

});


var ee;
var eenum2 = 0;

function dis_num3() {
    document.getElementById("online2").innerHTML = eenum2;
    var randWay = Math.floor(Math.random() * 10 + 1);
    if (randWay <= 5) {
        eenum2 = eenum2 + Math.floor(Math.random() * 10 + 1);;
    } else {
        eenum2 = eenum2 - Math.floor(Math.random() * 10 + 1);;
    }
    ee = setTimeout("dis_num3()", 1000);
}
dis_num3();

var ChatReplied = false;
var ChatDate = new Date();
var ChatUserName = '';
var ChatUserNames = ["liar", "penis", "no", "twat", "bitch", "inbred_mofo69", "twilightluvvr", "retardation", "wank4blizzard", "legend47", "michael_bay", "scum", "criminal", "stop", "12345678", "qwerty", "asdfasdf", "000000", "default", "4chan", "anon", "poodlecorp", "zxcv", "abcd1234", "abc123456789", "wolverine_is_my_waifu", "fuckmesenpai", "oppaiblockr", "robot", "aaaaaaeeeeeee", "fuckyoublizzard", "microtransactions", "not_this_Shit_again", "surveyscam1123", "abcdefghijkl", "aaaaa", "druglord2", "420weed", "xXPU55YK1LL3RXx", "urmum", "soccer1234", "password", "username", "admin", "whatthefuck", "Torbjorn"];
var ChatContent = ["Free gay sex 1-800-594-200 freegaysex.download", "pwn3d by PoodleCorp @poodlecorp", "100% free porn absolutescam.net 30 day trial", "jacked by anonymous", "bitches love sticks", "protegent is the best antivirus ever, fuck avast", "bitch you is mine", "meinkraft is very nazism", "free clash of clans gems horseshitscam.com free gems and stuff", "this is fucking scam", "bitch you is cray cray", "aaaaaaaaa", "the cake is a lie", "why are you still here", "stop", "this is illegal you know", "bad human", "we need to build a wall", "tan spray is a chick repellant", "donald trump is an asshole", "fucking lying bitch", "bbbbbbbb", "sorry it was my cat", "stop right there criminal scum", "stop, you violated the law. pay the court a fine or serve your sentence. your stolen goods are now forfeit", "bitches love sticks", "lemme smash", "microtransactions should be outlawed", "fuck nexon", "fuck you blizzard"];
var ChatAntiBot = ["penis penis robot sucks my dick lol", "google is skynet", "liar liar pants on fire", "are you lost?", "modern art", "richard are you trying to download porn again", "alexa order ten thousand bottles of anal lube", "hey siri launch ballistic nuclear missile to stark industries", "i can see you jerking off", "furries are the worst lol", "jacked by lulzsec @lulzsecofficial", "microtransactions are the worst", "blizzard y u do dis", "diablo 3 didnt need auction house you fucking retard", "fuck konami", "break them chains of love", "ass", "fuck fuck fuck", "shut up about your lame hacks torbjorn", "i need healing", "nobody cares", "what even", "anal sex is fun", "snort", "lame hackjobs", "fuckwats", "asshole", "bitch u wut", "fucking brilliant", "aaaaaaaaaaaa", "im totally not a robot", "aaaaaaaaaaaaaaaaaa", "sedrfasfsfdaefder", "who runs this piece of shit server anyway", "total shit", "fuck off", "what even", "arse"];


$(document).ready(function() {


    ChatStart();
    ChatLog("Welcome to the bullshit island.");
    ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], ChatContent[rng(0, ChatContent['length'] - 1)]);
    $('#livechatInputChat')['keypress'](function(_0xaa63xc) {
        if (_0xaa63xc['keyCode'] == 13) {
            $('#livechatButtonChat')['click']();
        };
    });
    $('#livechatButtonChat')['click'](function() {
        if (ChatUserName == '') {
            $('#livechatContainerChatUserName')['fadeIn'](250);
            $('.livechatOverlaySmall').fadeIn(200);
        } else {
            $msg = $('#livechatInputChat')['val']();

            ChatAddEntry('<span>' + ChatUserName + '</span>', $msg);
            $('#livechatInputChat')['val']('');
            if ($msg.indexOf("bots") >= 0 || $msg.indexOf("bot") >= 0 || $msg.indexOf("robots") >= 0) {
                setTimeout(function() {
                    ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], '<span class="mention">@' + ChatUserName + ' &nbsp;</span>' + ChatAntiBot[rng(0, ChatAntiBot['length'] - 1)]);
                }, rng(7250, 9300));
            }
            if (!ChatReplied) {
                setTimeout(function() {
                    ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], '<span class="mention">@' + ChatUserName + ' &nbsp;</span>doesnt know how to spell lol');

                    setTimeout(function() {
                        ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], '<span class="mention">@' + ChatUserName + ' &nbsp;</span> stfu im fuking ur mum');
                        setTimeout(function() {
                            ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], 'guys dont listen to' + '<span class="mention">@ ' + ChatUserName + '&nbsp;</span>' + 'he just wants gay sex');

                        }, rng(11500, 19500));
                    }, rng(6500, 8500));
                }, rng(6000, 9500));
                ChatReplied = true;
            }
        };
    });
    $('#livechatButtonChatUserName')['click'](function() {
        ChatUserName = $('#livechatInputChatUserName')['val']();
        $('#livechatContainerChatUserName')['fadeOut'](250, function() {
            $('.livechatOverlaySmall').fadeOut(200, function() {
                $('#livechatButtonChat')['click']();
            });
        });
    });


});

Date.prototype.getFullMinutes = function() {
    if (this.getMinutes() < 10) {
        return '0' + this.getMinutes();
    }
    return this.getMinutes();
};

function rng(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);

}
$(function() {

    $('#livechatInputComment').focus(function() {
        $('#livechatContainerAdditional').slideDown(500);
    });
});

function Random(_0xaa63x2, _0xaa63x3) {
    return Math['floor'](Math['random']() * (_0xaa63x3 - _0xaa63x2) + _0xaa63x2);
};

function ChatAddEntry(_0xaa63x5, _0xaa63x6) {
    if (_0xaa63x5 == '' || _0xaa63x6 == '') {
        return;
    };
    $('<div class=\"livechatChatEntry\"><span class=\"livechatEntryUserName\">[' + ChatDate.getHours() + ':' + ChatDate.getFullMinutes() + ']  ' + _0xaa63x5 + ':</span><span class=\"livechatEntryContent\">' + _0xaa63x6 + '</span></div>')['appendTo']('#livechatChatContent')['hide'](0)['fadeIn'](250);
    $('#livechatChatContent')['scrollTop']($('#livechatChatContent')[0]['scrollHeight']);
};

function ChatLog(_0xaa63x6) {
    $('<div class=\"livechatChatEntry\"><span class=\"ChatNotification\">' + _0xaa63x6 + '</span></div>')['appendTo']('#livechatChatContent')['hide'](0)['fadeIn'](250);
    $('#livechatChatContent')['scrollTop']($('#livechatChatContent')[0]['scrollHeight']);
};

function ChatStart() {
    var _0xaa63x8 = function() {
        setTimeout(function() {
            var _0xaa63x9 = ChatUserNames[Random(0, ChatUserNames['length'] - 1)];
            var _0xaa63xa = ChatContent[Random(0, ChatContent['length'] - 1)];
            ChatAddEntry(_0xaa63x9, _0xaa63xa);
            _0xaa63x8();
        }, Random(1000, 15000));
    };
    _0xaa63x8();
};