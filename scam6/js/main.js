$(document).ready(function($) {
    // Sticky v1.0 by Daniel Raftery
    // http://thrivingkings.com/sticky
    //
    // http://twitter.com/ThrivingKings

    (function($) {

        // Using it without an object
        $.sticky = function(note, options, callback) {
            return $.fn.sticky(note, options, callback);
        };

        $.fn.sticky = function(note, options, callback) {
            // Default settings
            var position = 'top-left'; // top-left, top-right, bottom-left, or bottom-right

            var settings = {
                'speed': 200, // animations: fast, slow, or integer
                'duplicates': true, // true or false
                'autoclose': 15 // integer or false
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
            if (!$('#fortnite-sticky').find('.sticky-queue').html()) {
                $('#fortnite-sticky').append('<div class="sticky-queue ' + position + '"></div>');
            }

            // Can it be displayed?
            if (display) {
                // Building and inserting sticky note
                $('.sticky-queue').prepend('<div class="sticky border-' + position + '" id="' + uniqID + '"></div>');

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

    var UserName = ["  ", " ", "00000000", "0Sleepless", "111094Jrh", "14h", "194IQredditor", "1brayle", "1k2o1ko12ko12ko2", "1stTimeDraven", "1tzJustVictor", "2011", "54Bomb99", "666", "6666666666666", "7hThintoN", "7Qing", "AAltec", "Abidius", "Abou222", "AbsoluteFridges", "Academiic", "Aceyy", "Acme", "Adorations", "AdrianMa", "aenba", "Aerodactyl", "Afflictive", "AGilletteRazor", "Agolite", "Agrorenn", "AH.", "AHHHHHHHHH", "ahqwe5tdoor", "Aiciel", "aiopqwe", "AirscendoSona", "Airtom", "AiShiTeru", "AkameBestGirl", "AKAPapaChau", "AKASIeepingDAWG", "Akatsuki", "aksn1per", "aLeo", "Alestz", "alextheman", "alexxisss", "AliBracamontes", "AllianceMike", "AlliancePatrick", "Allorim", "ALLRekklesvNA", "Alphabetical", "Altrum", "amandagugu", "Anangelababy007", "AnarchyofDinh", "AnDa", "andtheknee", "Aniratak", "AnnieBot", "AnnieCHastur", "AnObesePanda", "Anoledoran", "Anthony", "AnVu", "Apauloh", "aphromoo", "Applum", "Arakune", "Aranium", "Araya", "Arcenius", "Arcsecond", "ArcticPuffin11", "Ariana22ROO", "ArianaLovato", "ArizonaGreenTea", "Arnold", "Aror", "arthasqt", "ArtThief", "AsianSGpotato", "Astro", "Asutarotto", "ATColdblood", "AtomicN", "AurionKratos", "AxelAxis", "AxelsFinalFlame", "Ayai", "Ayr", "Azingy", "B1GKr1T", "BaamSouma", "Babalew", "Back2Nexus", "badeed", "Baesed", "Bakudanx", "BallsInYourFace", "BalmungLFT", "BamfDotaPlayer", "baohando", "BarbecueRibs", "BarronZzZ", "BasedYoona", "BeachedWhaIe", "beatmymeat", "BeautifulKorean", "Bebhead", "BeefTacos", "Believe", "BellaFlica", "BenignSentinel", "BenNguyen", "BennyHung", "BestDota2Sona", "BestFelixNA", "BestGodniviaNA", "BestJanna", "Betsujin", "BGJessicaJung", "BIackWinter", "bigfatlp", "BiggestNoob", "BigolRon", "BillyBoss", "BillyBossXD", "Biofrost", "Bischu", "bive", "Blackmill", "BlGHUEVOS", "BloodWater", "BlownbyJanna", "BlueHole", "BlueRainn", "bobqinXD", "Bokbokimacat", "BonQuish", "Born4this", "Brainfre3z", "BrandonFtw8", "BrianTheis", "broIy", "Bulgogeeeee", "ButtercupShawty", "butttpounder", "C10Meteos", "C9BalIs", "C9Balls", "C9Hai", "C9Hard", "C9LemonNation", "C9LOD", "C9Meteos", "C9Sneaky", "C9SoIo", "C9TGleebglarbu", "C9Yusui", "cAbstracT", "cackgod", "CaliTrlolz8", "CallMeExtremity", "CaptainNuke", "CARDCAPTORCARD", "CaristinnQT", "Casely", "CaseOpened", "CatVomit", "CcLiuShicC", "CeIestic", "Cerathe", "cesuna", "chadiansile", "ChaIlengerAhri", "Chaox", "Chapanya", "charmanderu", "Chaullenger", "Chimonaa1", "ChineseJester", "Chipotlehunter", "Chiruno", "ChowPingPong", "CHRISTHORMANN", "CHRlSS", "chubbiercheeks", "Chubymonkey", "Chulss", "ChumpJohnsTeemo", "Chunkyfresh", "Chuuper", "cidadedecack", "Ciscla", "CLGDandyLite", "CLGDeftsu", "CLGEasy", "CLGLourlo", "CLGThink", "CloudNguyen", "CloudWater", "Cloverblood", "ClydeBotNA", "CoachLFProTeam", "coBBz", "coLBubbadub", "Colonelk1", "coLROBERTO", "Connie", "Connort", "Contractz", "CopyCat", "CornChowder", "CornStyle", "CowGoesMooooo", "Cpense", "CptJack", "CRBFyre", "CRBRakin", "cre4tive", "Cruzerthebruzer", "CSauce", "CSTCris", "CSTJesiz", "CutestNeo", "Cybody", "Cypress", "Cyprincess", "Cytosine", "D3cimat3r", "dabestmelon", "DaBox", "DaBoxII", "DadeFakerPawn", "Dafreakz", "DaiJurJur", "DAKular", "DaoKho", "darksnipa47", "Daserer", "dawolfsclaw", "dawoofsclaw", "Daydreamin", "DD666666", "DDABONG", "deDeezer", "deft1", "Deleted", "DeliciousMilkGG", "delirous", "DELLZOR", "Delta", "Denny", "denoshuresK", "Descraton", "Dessias", "Destinedwithin", "Desu", "DeTFMCeros", "DeTFMYumenoti", "DeTRFEsteL", "DeTRFMoyashi", "DeTRFShinmori", "DeTRFZerost", "Dezx", "DGB", "Diamond", "DifferentSword", "Dinklebergg", "DioDeSol", "DJJingYun", "djpocketchange", "DJTrance", "DkBnet", "dKiWiKid", "DKrupt", "DoctorDoom", "DoctorElo", "Docxm", "Dodo8", "DonDardanoni", "DonPorks", "DontMashMe", "Dontqqnubz", "Doomtrobo", "dopa7", "Doublelift", "DouyuTVForgottt", "Dragles", "DragonRaider", "DragonxCharl", "Draguner", "drallaBnayR", "DrawingPalette", "Dreemo", "DrSeussGRINCH", "Druiddroid", "DuBuKiD", "duliniul", "dunamis", "Duocek", "DuoChiDianShi", "Dusey", "Dusty", "Dyad", "DyrudeJstormRMX", "Dyrus", "ecco", "EddieMasao", "Egotesticle", "Eitori", "Ekkocat", "Elemia", "ElkWhisperer", "eLLinOiSe", "ELMdamemitai", "ElvishGleeman", "Emanpop", "Emeraldancer", "EmilyVanCamp", "EmperorSteeleye", "Endlesss", "EnmaDaiO", "Enticed", "Entities", "Entranced", "Entus", "EnzoIX", "EpicLynx", "equalix", "EREnko", "Erurikku", "erwinbooze", "ErzaScarIet", "Ethil", "EugeneJPark", "EvanRL", "Event", "evertan", "ExecutionerKen", "ExileOfTheBlade", "Exxpression", "F0rtissimo", "F1Flow", "fabbbyyy", "FairieTail", "FakerSama", "FallenBandit", "FasScriptor", "FeedOn", "FeelTheLove", "FelixCC", "Fenixlol", "FENOMENO", "Fexir", "FFat20GGWP", "Firehazerd", "FishingforUrf", "Flandoor", "FluffyKittens206", "Flyinpiggy", "Foolish", "FORG1VENliftlift", "forgivenbow", "FoxDog", "Fragnat1c", "FrannyPack", "freakingnoodles", "FreeGaming", "freelancer18", "FrenchLady", "Frostalicious", "Frostarix", "FrostyLights", "FSNChunkyfresh", "FSNDLuffy", "FSNMeMer", "Fubguns", "FunFrock", "FusionSin", "fwii", "Gaggiano", "Gambler", "Gamely", "gamepiong", "GamerXz", "GangstaSwerve", "GankedFromAbove", "Gate", "GATOAmyTorin", "Geranimoo", "Gh3ttoWatermelon", "GinormousNoob", "Gir1shot2diamond", "givesyouwiings", "GladeGleamBright", "Gleebglarb", "Gleebglarbu", "GochuHunter", "godisfeng66666", "godofcontrol", "GodOfZed", "GoJeongPa", "GoJeonPa", "goldenglue", "GoldStars", "Grandederp", "Grigne", "GrimmmmmmmReaper", "GrimmReaper", "GrimSamurai", "Gundamu", "GuriAndGunji", "gurminder", "GusTn", "GVBunnyFuFuu", "GVCop", "GVHauntzer", "GVKeane", "GVStvicious", "GVVicious", "Hakuho", "halo3madsniper", "HamSammiches", "Hanjaro", "HappyBirfdizzay", "Haruka", "hashinshin", "Hate", "HatersWantToBeMe", "Haughty", "Hauntzer", "Hawez", "Hawk", "HawkStandard", "Hazedlol", "Hcore", "HctMike", "heavenTime", "Heejae", "Hellkey", "HellooKittie", "HentaiKatness69", "Herald0fDeath", "HeroesOfTheStorm", "Hexadecimal", "HeXrisen", "Hickus", "hiimgosu", "hiimria", "hiimrogue", "hiimxiao", "HiImYolo", "hiitsviper", "Hiphophammer", "Hoardedsoviet", "Hoeji", "HOGEE", "HomedogPaws", "Hoofspark", "HooManDu", "HOoZy", "Hordstyle", "HotGuy6Pack", "HotshotGG", "HunterHagen", "HurricaneJanna", "HUYAGorilIA", "Hxadecimal", "I", "Iamagoodboy", "Iambbb", "IAmDoughboy", "IamFearless", "iAmNotSorry", "IamOsiris", "IAmTheIRS", "ice", "ichibaNNN", "Iemonlimesodas", "Iggypop", "IGotSunshine", "Iizard", "iJesus69", "iKeNNyu", "iKoogar", "ikORY", "IlIIlII", "IlIlIIIlIIIIlIII", "ilovefatdongs", "ILoveNASoloQ", "iLucent", "ilyTaylor", "Imacarebear", "Imaqtpie", "ImbaDreaMeR", "IMBAYoungGooby", "IMbz", "ImJas", "ImJinAh", "ImNovel", "imp", "Impasse", "Imunne", "iMysterious", "Ina", "Indivisible", "InnoX", "interest", "intero", "InvertedComposer", "iOddOrange", "Iodus", "ionz", "IoveLu", "IREGlNALD", "IreliaCarriesU", "irvintaype", "IsDatLohpally", "IslandLager", "Isunari", "Isuyu", "iToradorable", "ItsYourChoice", "Iucid", "iuzi", "ixou", "J0kes", "Jacka", "Jackoo", "jamee", "JannaFKennedy", "JannaMechanics", "japanman", "JayJ", "Jayms", "jbraggs", "Jesse", "JGLafter", "JHHoon", "Jibberwackey", "JimmerFredette", "JimmyHong", "JimmyTalon", "JinMori", "Jintae", "Jintea", "jivhust", "jivhust1", "JJackstar", "JJayel", "JJJackstar", "Johnp0t", "JoopsaKid", "jordank", "JoshMabrey", "JRT94", "JukeKing", "Jummychu", "Junha", "JustinJoe", "JustJayce", "Jynthe", "k3soju", "Kaichu", "Kammgefahr", "kamonika", "Kappasun", "Karmix", "KasuganoHaru", "KatLissEverdeen", "KawaiiTheo", "Kazahana", "Kazma", "Kazura", "Kebrex", "KEITHMCBRIEF", "kelppowder", "Kenleebudouchu", "Kerpal", "Kevnn", "KevonBurt", "kevybear", "KillaKast", "KillerHeedonge", "KimchimanBegins", "kimjeii", "KingCobra", "KingKenneth", "KiNGNidhogg", "KingofMemes", "Kios", "KiritoKamui", "Kirmora", "KissMeRDJ", "KittenAnya", "Kitzuo", "Kiyoon", "kjin", "KKOBONG", "KLucid", "KMadClown", "KMadClowns", "KMadKing", "kMSeunG", "KnivesMillions", "Kojolika", "KojotheCat", "KonKwon", "koreas", "KPC", "KrucifixKricc", "Krymer", "ktSmurf", "Kurumx", "Kurumz", "Kwaku", "kyaasenpaix3", "L0LWal", "LafalgarTaw", "LAGEhsher", "LAGGoldenShiv", "LAGOrbwalk", "lalaisland", "lamBjerg", "latebloomer", "lAtmospherel", "Lattman", "Laughing", "LearningToPIay", "LeBulbe", "LeBulbetier", "LeeBai", "LeeGuitarStringa", "Leesinwiches", "LegacyofHao", "LeithaI", "Lemin", "LemonBoy", "Leonard", "LevelPerfect", "Life", "LifelessEyes", "Likang45", "LikeAMaws", "LiLBunnyFuFuu", "LilBuu", "lilgrim", "LingTong", "Link", "Linsanityy", "Lionsexual", "LiquidDominate", "LiquidFeniX", "LiquidInori", "LiquidInoriTV", "LiquidIWD", "LiquidKEITH", "LiquidNyjacky", "LiquidPiglet", "LiquidQuas", "LiquidXpecial", "Liquidzig", "LiShengShun", "llllllllllllIIII", "lllllllllllllIII", "lloveOreo", "llRomell", "lntense", "Lobstery", "Lock0nStratos", "LockDownExec", "LOD", "LogicalDan", "LongCat4", "Loopercorn", "LotusBoyKiller", "LotusEdge", "Lourlo", "LoveIy", "Lovelyiris", "lovemyRMB", "LoveSick", "LuckyLone56", "Lucl3n3Ch4k0", "Lukeeeeeeeeee", "M1ssBear", "m2sticc", "Magicians", "MahNeega", "MakiIsuzuSento", "MakNooN", "Malajukii", "Mammon", "ManateeWaffles", "Manco", "mandatorycloud", "maplestreet8", "maplestreeTT", "MariaCreveling", "MarkPassion", "MARSIRELIA", "Martel", "Masrer", "MasterCoach", "MASTERDING", "MasterDragonKing", "MASTERROSHl", "MatLifeTriHard", "Maulface", "Mazrer", "Meatmush", "MegaMilkGG", "MeganFoxisGG", "MegaZero", "Melhsa", "Melo", "Meow", "Meowwww", "Merryem", "METALCHOCOB0", "MetaRhyperior", "MewtMe", "Michaelcreative", "MidnightBoba", "midVox", "Migipooop", "MikeHct", "mikeshiwuer", "MikeyC", "MikeytheBully", "MiniMe", "miqo", "MisoMango", "MissyQing", "MisterDon", "MisterOombadu", "Mixture", "Mizuji", "mldkingking", "MochiBalls", "Moelon", "MongolWarrior", "MonkeyDufle", "MonkeyDx", "Mookiez", "moonway", "moosebreeder", "morippe", "MrArceeSenpaiSir", "MrBlackburn", "MrCarter", "MrChivalry", "MrCow", "MrGamer", "MrGatsby", "MRHIGHLIGHTREEL", "MrJuneJune", "MrJuvel", "Mruseless", "Muffintopper66", "Naeim", "nathanielbee", "Nebulite", "Neko", "Nematic", "NeonSurge", "Nerzhu1", "Neverlike", "NhatNguyen", "nhocBym", "nicemoves", "Nickpappa", "Nickywu", "NicoleKidman", "Nightblue3", "Nightlie", "NiHaoDyLan", "Nihillmatic", "Nikkone", "NiMaTMSiLe", "ninjamaster69xxx", "NintendudeX", "Nintenpai", "Niqhtmarea", "Niqhtmarex", "NKSoju", "NMEBodydrop", "NMEflareszx", "NMEInnoX", "NMEotter", "NMEotterr", "NMETrashyy", "nokappazone", "Normalize", "nothinghere", "Nove", "NtzLeopard", "NtzMoon", "NtzNasty", "Ntzsmgyu", "null", "nweHuang", "Nydukon", "Oasis", "OberonDark", "Odete49", "oerh", "OGNEunJungCho", "ohdaughter", "Ohhhq", "Old", "OmegaB", "OmekoMushi", "OMikasaAckermanO", "oMizu", "onelaugh", "Oryziaslatipes", "otte", "OverlordForte", "Oyt", "ozoss0", "p0z", "P18GEMEINV", "Packy", "Pallione", "PAlNLESS", "Panchie", "PandaCoupIe", "PantsareDragon", "Papasmuff", "Paperkat", "Patoy", "PaulDano", "Pavle", "Pcboy", "Pdop1", "PekinWoof", "penguin", "Penguinpreacher", "PengYiliang", "PeterBrown", "Phanimal", "Phaxen", "Piaget", "Picarus", "pichumy", "PiggyAzalea", "Pikaboo", "Pillowesque", "PiPiPig", "Platoon", "playmkngsupport", "PlayWithAnimals", "Plumber", "Plun", "Pobelter", "Podu", "Pokemorph", "Polx", "Popobelterold", "PoppersOP", "Popuh", "Porogami", "PorpoiseDeluxe", "Potato", "Potatooooooooooo", "pr0llylol", "Preachy", "PrinceChumpJohn", "pro711", "probablycoL", "Promises", "Promitio", "ProofOfPayment", "Protective", "PSiloveyou", "Pulzar", "PureCorruption", "PurpleFloyd", "Pyrr", "QmoneyAKAQdollas", "QQ346443922", "QQ459680082", "QualityADC", "QuanNguyen", "QuantumFizzics", "Quasmire", "r0b0cop", "Raimazz", "Rainaa", "Rakinas", "RambointheJungle", "RamenWithCheese", "Ramzlol", "Rathul", "RayXu", "RBbabbong", "RedBerrrys", "RedEyeAkame", "RedoutabIe", "ReeferChiefer420", "RefuseFate", "Rekeri", "Remie", "Revenge", "RFLegendary", "RiceFox", "RickyTang", "Riftcrawl", "RiNDiN", "RiotChun", "RiotMeyeA", "RiotZALE", "RoA", "ROBERTxLEE", "ROBERTZEBRONZE", "Rockblood", "RockleeCtrl", "Rockllee", "Rohammers", "RongRe", "RoseByrne", "rua0311desuyo", "Rule18", "RumbIeMidGG", "Rushmore", "RyanChoi", "Ryden7", "Ryzer", "S0lipsism", "s7efen", "SAGANoPause", "SAGASUPVEIGM", "sakurafIowers", "SandPaperX", "Sandrew", "Saskio", "SawitonReddit", "scarra", "sciberbia", "Scorpionz", "scorro", "Scrumm", "SDiana2", "SeaHorsee", "SeaShell", "SecretofMana", "Seeiya", "Senjogahara", "Senks", "Seongmin", "SepekuAW", "SerenityKitty", "SexualSavant", "sexycan", "sh4pa", "Shade20", "shadowshifte", "Shampu", "Sheepx", "shinymew", "Shiphtur", "Shoopuff", "Shoopufff", "ShorterACE", "SHOWMETHEMONEY", "Shweeb", "Shweebie", "sickening", "Sickoscott", "Sikeylol", "SillyAdam", "Silverblade12345", "silvermidget", "SimonHawkes", "SireSnoopy", "SirhcEezy", "SJAero", "Sjvir", "Skadanton", "Skinathonian", "SleepyDinosaur", "Sleepyz", "SlowlyDriftnAway", "Slylittlefox121", "Smoian", "SmooshyCake", "SmoSmoSmo", "Snidstrat", "snowmine", "Soeren", "Soghp", "Sojs", "SombreroGalaxy", "Sonnynot6", "sooyoung", "Sorcerawr", "Soredemo", "SoYung", "Sphinx", "SpiritDog", "Splorchicken", "Splorgen", "Spreek", "Sprusse", "SrsBznsBro", "ssforfail", "St1xxay", "ST2g", "stainzoid", "Stan007", "Steffypoo", "Stefono62", "StellaLoussier", "stephyscute2", "Strompest", "stuntopia", "stuntopolis", "Suadero", "Submit", "Suffix", "Sunar", "Sunohara", "SuperMetroid", "Superrrman", "Susice", "Suzikai", "suzuXIII", "svbk", "SwagersKing", "Sweept", "sweetinnocence", "SwiftyNyce", "Synxia", "Szmao", "TacoKat", "Taeyawn", "Tahx", "TailsLoL", "Tailsz", "TaintedDucky", "TaketheDraw", "TalkPIayLove", "TallerACE", "Tallwhitebro", "Tangularx", "TanHat", "TDKKez", "TDKkina", "TDKLouisXGeeGee", "TDKNear", "TDKSmoothie", "TeaMALaoSong", "Teaz89", "TedStickles", "TEESEMM", "tempname456543", "TFBlade", "TGZ", "Th3FooL", "ThaOGTschussi", "TheAmberTeahouse", "TheBiddler", "TheBroskie", "TheCptAmerica", "TheEyeofHorus", "Thefatkidfromup", "TheFriendlyDofu", "Theifz", "TheItalianOne", "theletter3", "themassacre8", "ThePrimaryEdict", "TheTyrant", "THExJOHNxCENA555", "Thurtle", "Thyak", "TiensiNoAkuma", "TINYHUEVOS", "TiPApollo", "TiPMa", "TiPyoondog", "TitanDweevil", "TLIWDominate", "tofumanoftruth", "tongsoojosim", "toontown", "TooPro4u", "TooSalty", "Topcatz", "Torgun", "touch", "ToxiGood", "Toxil", "TP101", "TransIogic", "Triett", "Trisexual", "Tritan", "TrojanPanda", "TrollerDog", "TSMLustboy", "TSMMeNoHaxor", "TummyTuck", "Tuoooor", "Turdelz", "TurtletheCat", "TwistedFox", "TwistedSun", "TwistyJuker", "TwitchTvAuke", "TwoPants", "TwtchTviLoveSezu", "ugg1", "UhKili", "uJ3lly", "Ultimazero", "Uncover", "UnholyNirvana", "UnKooL", "UpAIlNight", "Upu", "urbutts", "UrekMazin0", "v1anddrotate", "Valkrin", "ValkrinSenpai", "vane", "VANISHINGDRAG0N", "Vanxer", "Veeless", "VeryBitter", "VictimOfTalent", "VictoricaDebloiz", "VikingKarots", "VIPEEEEEEEEEEEER", "VirginEmperor", "Virus", "Volt", "VoyboyCARRY", "voyyboy", "Vsepr", "Vultix", "VwSKhoachitizer", "VwSSandvich", "VwSTeesum", "W", "Wadenation", "wahoolahoola", "WahzYan", "waitingforu", "WakaWaka", "WakaWakaWak", "Waker", "WallOfText", "WalterWhiteOG", "Wardrium", "Warmogger", "WeixiaTianshi", "Westrice", "WhatisLove", "whBox", "White", "whiteclaw", "whoishe", "WildTurtl", "WildTurtle", "willxo", "wimbis", "Windgelu", "Wingsofdeathx", "Winno", "WizFujiiN", "WoahItsJoe", "womp", "wompwompwompwomp", "Wonderfuls", "WonderfulTea", "Working", "woshishabi", "wozhixiangyin", "wswgou", "wutroletoplay", "WWvvWvvWvvwWwvww", "X1337Gm4uLk03rX", "Xandertrax", "xBlueMoon", "Xeralis", "XerbeK", "Xerosenkio", "xFSNSaber", "xHeroofChaos", "Xiaobanma", "xiaolan", "Xiaomi", "xiaoweiba", "XiaoWeiXiao", "XIVJan", "Xode", "Xoqe", "xPecake", "Xpecial", "xPepastel", "xrawrgasm", "xSaury", "xSojin", "xTc4", "xTearz", "xtsetse", "XXRhythmMasterXX", "XxRobvanxX", "XxWarDoomxX", "YahooDotCom", "Yammy", "Yashimasta", "YellOwish", "YiOwO", "YoloOno", "Yook", "yorozu", "YouGotFaker", "YouHadNoDream", "ysohardstylez", "yuBinstah", "Yukari", "yungmulahBABY", "YY90001PiKaChu", "Zaineking", "Zakard", "Zaryab", "Zbuum", "Zealous", "zeflife", "ZENPhooka", "zeralf", "zetsuen", "Zeyzal", "zgerman", "Zik", "ZionSpartan", "ZnipetheDog", "Zookerz", "Zulgor", "Zwag"];
	// Fucking hell, how unimaginative are those fuckers? This is the EXACT same list from the League of Legend scams back in 2010! 
    var CountryFlags = ['img/cf/dk.png', 'img/cf/us.png', 'img/cf/il.png', 'img/cf/fi.png', 'img/cf/sw.png', 'img/cf/pl.png', 'img/cf/no.png', 'img/cf/ir.png', 'img/cf/et.png'];
	// I actually was unable to find any flag pictures from the server this shit was hosted on because they didn't know how to install the thing. I've taken it upon myself and fixed it.
    var Platforms = ["<span class='platfrom-append'>object</span> Object", "<span class='platfrom-append'>on</span> null", "<span class='platfrom-append'>on</span> error", "<span class='platfrom-append'>on</span> ;DROP TABLE *", "<span class='platfrom-append'>on</span> 0"];
	// Really? Fucking really?
    var FUTresources = ["<span class='activity-vbucks'>0 bucks</span>", "<span class='activity-vbucks'>house arrest</span>", "<span class='activity-vbucks'>null</span>", "<span class='activity-vbucks'>error</span>", "<span class='activity-vbucks'>fuck-all</span>", "<span class='activity-vbucks'>life-long debt</span>", "<span class='activity-vbucks'>nada</span>"];
    $(document).ready(function() {


        $.sticky('<div class="fortnite-sticky-tab"><div class="fortnite-sticky-user-wrapper"><img class="activity-flag-img" src="' + random_flag() + '"/><span class="activity-username">' + random_username() + '</span></div><span class="activity-platform">' + random_platform() + '</span><div class="activity-generated-amount">' + random_futresource() + '</div></div>');
        var call_recent_activity_tab = function() {
            $.sticky('<div class="fortnite-sticky-tab"><div class="fortnite-sticky-user-wrapper"><img class="activity-flag-img" src="' + random_flag() + '"/><span class="activity-username">' + random_username() + '</span></div><span class="activity-platform">' + random_platform() + '</span><div class="activity-generated-amount">' + random_futresource() + '</div></div>');
        }
        setInterval(call_recent_activity_tab, 3000);
        var call_recent_activity_tab = function() {
            $.sticky('<div class="fortnite-sticky-tab"><div class="fortnite-sticky-user-wrapper"><img class="activity-flag-img" src="' + random_flag() + '"/><span class="activity-username">' + random_username() + '</span></div><span class="activity-platform">' + random_platform() + '</span><div class="activity-generated-amount">' + random_futresource() + '</div></div>');
        }
        setInterval(call_recent_activity_tab, 2500);
        var call_recent_activity_tab = function() {
            $.sticky('<div class="fortnite-sticky-tab"><div class="fortnite-sticky-user-wrapper"><img class="activity-flag-img" src="' + random_flag() + '"/><span class="activity-username">' + random_username() + '</span></div><span class="activity-platform">' + random_platform() + '</span><div class="activity-generated-amount">' + random_futresource() + '</div></div>');
        }

        function random_username() {
            return UserName[fortnite_rnd(0, UserName['length'] - 1)];
        }

        function random_platform() {
            return Platforms[fortnite_rnd(0, Platforms['length'] - 1)];
        }

        function random_flag() {
            return CountryFlags[fortnite_rnd(0, CountryFlags['length'] - 1)];
        }

        function random_futresource() {
            return FUTresources[fortnite_rnd(0, FUTresources['length'] - 1)];
        }
    });

    function fortnite_rnd(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);

    }
});

$('#connect').click(function(event) {
    if ($('#vbucksusername').val() == '') {
        console.error('User is stupid');

        $.magnificPopup.open({
            items: {
                src: '#acc-connect-err',
            },
            type: 'inline',
            preloader: false,
            modal: true,
        });

    } else {
        $('#user-text').text($('#vbucksusername').val());
        $('.input-wrap').fadeOut('slow', function() {
            $('.username-connected').addClass('connected');
            $('.username-connected').fadeIn('slow', function() {
                console.error('lol, a watchdogs reference?');
            });
        });
    }
});

/*Start Gen*/

$('.generate').click(function(event) {
    if ($('.username-connected').hasClass('connected')) {
		console.error('Disappointment!');
        $('#fortnite-progress-text').text('Processing your request...');
        $('.select-vbucks').fadeOut('slow', function() {
            $('.fortnite-progress-wrap').fadeIn('slow', function() {
            });
        });
        progress_snap(function() {
            $('#fortnite-progress-text').text('Generate V-bucks Package');
            progress_snap2(function() {
                $('#fortnite-progress-text').text('Encript connection');
				console.error('Hey, this fucker can\'t even spell!');
                $('.fortnite-progress-wrap').fadeOut('slow', function() {
                    $('.verification-wrap').fadeIn('slow', function() {
                        var text = $('#user-text').text();
                        $('#user-text2').append(text);

                    });
                });

            });
        });
        console.error('You failed lol');

    } else {

        $.magnificPopup.open({
            items: {
                src: '#acc-connect-err',
            },
            type: 'inline',
            preloader: false,
            modal: true,

        });
		console.error('You fucking failure!');
    }
});

function progress_snap(callback) {
    var $progress_percent = 0;
    var $blue_progress = $('.g-progressbar');
    $blue_progress.css('width', '0%');
    var interval_timer = setInterval(function() {
        if ($progress_percent == 0) {
            $progress_percent = 5;
            $blue_progress.css('width', $progress_percent + '%')
        } else if ($progress_percent == 5) {
            $progress_percent = 97;
            $blue_progress.css('width', $progress_percent + '%');
        } else if ($progress_percent == 97) {
            $progress_percent = 1;
            $blue_progress.css('width', $progress_percent + '%');
        } else if ($progress_percent == 1) {
            $progress_percent = 51;
            $blue_progress.css('width', $progress_percent + '%');
        } else if ($progress_percent == 51) {
            $progress_percent = 2;
            $blue_progress.css('width', $progress_percent + '%');
        } else if ($progress_percent == 2) {
            $progress_percent = 98;
            $blue_progress.css('width', $progress_percent + '%');
        } else if ($progress_percent == 98) {
            $progress_percent = 99;
            $blue_progress.css('width', $progress_percent + '%')
        } else if ($progress_percent == 99) {
            callback();
            clearInterval(interval_timer);
        }
    }, Math.floor((Math.random() * 90) + 600));
}

function progress_snap2(callback) {
    var $progress_percent = 99;
    var $blue_progress = $('.g-progressbar');
    $blue_progress.css('width', '0%');
    var interval_timer = setInterval(function() {
        if ($progress_percent == 99) {
            $progress_percent = 95;
            $blue_progress.css('width', $progress_percent + '%')
        } else if ($progress_percent == 95) {
            $progress_percent = 85;
            $blue_progress.css('width', $progress_percent + '%');
        } else if ($progress_percent == 85) {
            $progress_percent = 75;
            $blue_progress.css('width', $progress_percent + '%');
        } else if ($progress_percent == 75) {
            $progress_percent = 65;
            $blue_progress.css('width', $progress_percent + '%');
        } else if ($progress_percent == 65) {
            $progress_percent = 45;
            $blue_progress.css('width', $progress_percent + '%');
        } else if ($progress_percent == 45) {
            $progress_percent = 35;
            $blue_progress.css('width', $progress_percent + '%');
        } else if ($progress_percent == 35) {
            $progress_percent = 1;
            $blue_progress.css('width', $progress_percent + '%')
        } else if ($progress_percent == 1) {
            callback();
            clearInterval(interval_timer);
        }
    }, Math.floor((Math.random() * 10) + 200));
}