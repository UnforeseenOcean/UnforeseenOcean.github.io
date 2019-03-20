(function($) {

    // Using it without an object
    $.sticky = function(note, options, callback) {
        return $.fn.sticky(note, options, callback);
    };

    $.fn.sticky = function(note, options, callback) {
        // Default settings
        var position = 'top-left'; // top-left, top-right, bottom-left, or bottom-right

        var settings = {
            'speed': 1000, // animations: fast, slow, or integer
            'duplicates': false, // true or false
            'autoclose': 4500 // integer or false
        };

        // Passing in the object instead of specifying a note
        if (!note) {
            note = this.html();
        }

        if (options) {
            $.extend(settings, options);
        }

        // Variables
        var display = true;
        var duplicate = 'no';

        // Somewhat of a unique ID
        var uniqID = Math.floor(Math.random() * 99999);

        // Handling duplicate notes and IDs
        $('.sticky-note').each(function() {
            if ($(this).html() == note && $(this).is(':visible')) {
                duplicate = 'yes';
                if (!settings['duplicates']) {
                    display = false;
                }
            }
            if ($(this).attr('id') == uniqID) {
                uniqID = Math.floor(Math.random() * 9999999);
            }
        });

        // Make sure the sticky queue exists
        if (!$('#recent-activity').find('.sticky-queue').html()) {
            $('#recent-activity').append('<div class="sticky-queue ' + position + '"></div>');
        }

        // Can it be displayed?
        if (display) {
            // Building and inserting sticky note
            $('.sticky-queue').prepend('<div class="sticky border-' + position + '" id="' + uniqID + '"></div>');
            $('#' + uniqID).append('<img src="close.png" class="sticky-close" rel="' + uniqID + '" title="Close" />');
            $('#' + uniqID).append('<div class="sticky-note" rel="' + uniqID + '">' + note + '</div>');

            // Smoother animation
            var height = $('#' + uniqID).height();
            $('#' + uniqID).css('height', height);

            $('#' + uniqID).slideDown(settings['speed']);
            display = true;
        }

        // Listeners
        $('.sticky').ready(function() {
            // If 'autoclose' is enabled, set a timer to close the sticky
            if (settings['autoclose']) {
                $('#' + uniqID).delay(settings['autoclose']).fadeOut(settings['speed']);
            }
        });
        // Closing a sticky
        $('.sticky-close').click(function() {
            $('#' + $(this).attr('rel')).dequeue().fadeOut(settings['speed']);
        });


        // Callback data
        var response = {
            'id': uniqID,
            'duplicate': duplicate,
            'displayed': display,
            'position': position
        }

        // Callback function?
        if (callback) {
            callback(response);
        } else {
            return (response);
        }

    }
})(jQuery);

var UserName = ["StupidIdiot#0000", "ScamScamScam#0000", "Scammer#0000", "LiarLairPantsOnFire#6969", "no#0000", "aaaaaaaaaaa", "Modded by Torbjorn#1337", "johndoe#0001", "jabber#0222", "doctah#0007", "what#0003", "jamesbond#007", "legend47#nada", "sellout#blz", "username", "yourmum", "a#0111", "nokia#9999", "skynet#1997", "stuxnet#2012"];
var CountryFlags = ['img/cf/UK.png', 'img/cf/US.png'];
var Platforms = ["<span class='platfrom-append'></span> -65535 seconds ago", "<span class='platfrom-append'></span> 999 years ago", "<span class='platfrom-append'></span> hax0red by OurMine", "<span class='platfrom-append'></span> nada", "<span class='platfrom-append'></span>-1 ago"];
var FUTresources = ["<span class='activity-futcoins'>-0 Card Packs</span>", "<span class='activity-futcoins'>No Card Packs</span>", "<span class='activity-futcoins'>We are lying</span>", "<span class='activity-futcoins'>10 Card Packs</span>", "<span class='activity-futcoins'>20 Card Packs</span>", "<span class='activity-futcoins'>5 Card Packs</span>", "<span class='activity-futcoins'>25 Card Packs</span>", "<span class='activity-futcoins'>20 Card Packs</span", "<span class='activity-futcoins'>Banned</span>", "<span class='activity-futcoins'>h4x0rd by PoodleCorp</span>", "<span class='activity-futcoins'>aaaaaaaa</span>"];
$(document).ready(function() {


    $.sticky('<div class="recent-activity-tab"><div class="recent-activity-user-wrapper"><img class="activity-flag-img" src="' + random_flag() + '"/><span class="activity-username">' + random_username() + '</span></div><span class="activity-platform">' + random_platform() + '</span><div class="activity-generated-amount">' + random_futresource() + '</div></div>');
    var call_recent_activity_tab = function() {
        $.sticky('<div class="recent-activity-tab"><div class="recent-activity-user-wrapper"><img class="activity-flag-img" src="' + random_flag() + '"/><span class="activity-username">' + random_username() + '</span></div><span class="activity-platform">' + random_platform() + '</span><div class="activity-generated-amount">' + random_futresource() + '</div></div>');
    }
    setInterval(call_recent_activity_tab, 3000);
    var call_recent_activity_tab = function() {
        $.sticky('<div class="recent-activity-tab"><div class="recent-activity-user-wrapper"><img class="activity-flag-img" src="' + random_flag() + '"/><span class="activity-username">' + random_username() + '</span></div><span class="activity-platform">' + random_platform() + '</span><div class="activity-generated-amount">' + random_futresource() + '</div></div>');
    }
    setInterval(call_recent_activity_tab, 6500);
    var call_recent_activity_tab = function() {
        $.sticky('<div class="recent-activity-tab"><div class="recent-activity-user-wrapper"><img class="activity-flag-img" src="' + random_flag() + '"/><span class="activity-username">' + random_username() + '</span></div><span class="activity-platform">' + random_platform() + '</span><div class="activity-generated-amount">' + random_futresource() + '</div></div>');
    }

    function random_username() {
        return UserName[rng(0, UserName['length'] - 1)];
    }

    function random_platform() {
        return Platforms[rng(0, Platforms['length'] - 1)];
    }

    function random_flag() {
        return CountryFlags[rng(0, CountryFlags['length'] - 1)];
    }

    function random_futresource() {
        return FUTresources[rng(0, FUTresources['length'] - 1)];
    }
});