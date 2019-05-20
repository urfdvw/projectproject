var linkTXT = '{"Genesis": "Gen", "创世记": "Gen", "Exodus": "Exo", "出埃及记": "Exo", "Leviticus": "Lev", "利未记": "Lev", "Numbers": "Num", "民数记": "Num", "Deuteronomy": "Deu", "申命记": "Deu", "Joshua": "Jos", "约书亚记": "Jos", "Judges": "Jug", "士师记": "Jug", "Ruth": "Rut", "路得记": "Rut", "1Samuel": "1Sa", "撒母耳记上": "1Sa", "2Samuel": "2Sa", "撒母耳记下": "2Sa", "1Kings": "1Ki", "列王记上": "1Ki", "2Kings": "2Ki", "列王记下": "2Ki", "1Chronicles": "1Ch", "历代志上": "1Ch", "2Chronicles": "2Ch", "历代志下": "2Ch", "Ezra": "Ezr", "以斯拉记": "Ezr", "Nehemiah": "Neh", "尼希米记": "Neh", "Esther": "Est", "以斯帖记": "Est", "Job": "Job", "约伯记": "Job", "Psalm": "Psm", "诗篇": "Psm", "Proverbs": "Pro", "箴言": "Pro", "Ecclesiastes": "Ecc", "传道书": "Ecc", "SongofSolomon": "Son", "雅歌": "Son", "Isaiah": "Isa", "以赛亚书": "Isa", "Jeremiah": "Jer", "耶利米书": "Jer", "Lamentations": "Lam", "耶利米哀歌": "Lam", "Ezekiel": "Eze", "以西结书": "Eze", "Daniel": "Dan", "但以理书": "Dan", "Hosea": "Hos", "何西阿书": "Hos", "Joel": "Joe", "约珥书": "Joe", "Amos": "Amo", "阿摩司书": "Amo", "Obadiah": "Oba", "俄巴底亚书": "Oba", "Jonah": "Jon", "约拿书": "Jon", "Micah": "Mic", "弥迦书": "Mic", "Nahum": "Nah", "那鸿书": "Nah", "Habakkuk": "Hab", "哈巴谷书": "Hab", "Zephaniah": "Zep", "西番雅书": "Zep", "Haggai": "Hag", "哈该书": "Hag", "Zechariah": "Zec", "撒迦利亚书": "Zec", "Malachi": "Mal", "玛拉基书": "Mal", "Matthew": "Mat", "马太福音": "Mat", "Mark": "Mak", "马可福音": "Mak", "Luke": "Luk", "路加福音": "Luk", "John": "Jhn", "约翰福音": "Jhn", "Acts": "Act", "使徒行传": "Act", "Romans": "Rom", "罗马书": "Rom", "1Corinthians": "1Co", "哥林多前书": "1Co", "2Corinthians": "2Co", "哥林多后书": "2Co", "Galatians": "Gal", "加拉太书": "Gal", "Ephesians": "Eph", "以弗所书": "Eph", "Philippians": "Phl", "腓立比书": "Phl", "Colossians": "Col", "歌罗西书": "Col", "1Thessalonians": "1Ts", "帖撒罗尼迦前书": "1Ts", "2Thessalonians": "2Ts", "帖撒罗尼迦后书": "2Ts", "1Timothy": "1Ti", "提摩太前书": "1Ti", "2Timothy": "2Ti", "提摩太后书": "2Ti", "Titus": "Tit", "提多书": "Tit", "Philemon": "Phm", "腓利门书": "Phm", "Hebrews": "Heb", "希伯来书": "Heb", "James": "Jas", "雅各书": "Jas", "1Peter": "1Pe", "彼得前书": "1Pe", "2Peter": "2Pe", "彼得后书": "2Pe", "1John": "1Jn", "约翰一书": "1Jn", "2John": "2Jn", "约翰二书": "2Jn", "3John": "3Jn", "约翰三书": "3Jn", "Jude": "Jud", "犹大书": "Jud", "Revelation": "Rev", "启示录": "Rev"}';
var link = JSON.parse(linkTXT.toLowerCase());
var suggestionTXT = '{"Genesis": "Genesis", "Gen": "Genesis", "创世记": "创世记", "创": "创世记", "chuangshiji": "创世记", "chuang": "创世记", "csj": "创世记", "Exodus": "Exodus", "Exo": "Exodus", "出埃及记": "出埃及记", "出": "出埃及记", "chuaijiji": "出埃及记", "chu": "出埃及记", "cajj": "出埃及记", "Leviticus": "Leviticus", "Lev": "Leviticus", "利未记": "利未记", "利": "利未记", "liweiji": "利未记", "li": "利未记", "lwj": "利未记", "Numbers": "Numbers", "Num": "Numbers", "民数记": "民数记", "民": "民数记", "minshuji": "民数记", "min": "民数记", "msj": "民数记", "Deuteronomy": "Deuteronomy", "Deu": "Deuteronomy", "申命记": "申命记", "申": "申命记", "shenmingji": "申命记", "shen": "申命记", "smj": "申命记", "Joshua": "Joshua", "Jos": "Joshua", "约书亚记": "约书亚记", "书": "约书亚记", "yueshuyaji": "约书亚记", "shu": "约书亚记", "ysyj": "约书亚记", "Judges": "Judges", "Jug": "Judges", "士师记": "士师记", "士": "士师记", "shishiji": "士师记", "shi": "诗篇", "ssj": "士师记", "Ruth": "Ruth", "Rut": "Ruth", "路得记": "路得记", "得": "路得记", "ludeji": "路得记", "de": "路得记", "ldj": "路得记", "1Samuel": "1Samuel", "1Sa": "1Samuel", "撒母耳记上": "撒母耳记上", "撒上": "撒母耳记上", "samuerjishang": "撒母耳记上", "sashang": "撒母耳记上", "smejs": "撒母耳记上", "2Samuel": "2Samuel", "2Sa": "2Samuel", "撒母耳记下": "撒母耳记下", "撒下": "撒母耳记下", "samuerjixia": "撒母耳记下", "saxia": "撒母耳记下", "smejx": "撒母耳记下", "1Kings": "1Kings", "1Ki": "1Kings", "列王记上": "列王记上", "王上": "列王记上", "liewangjishang": "列王记上", "wangshang": "列王记上", "lwjs": "列王记上", "2Kings": "2Kings", "2Ki": "2Kings", "列王记下": "列王记下", "王下": "列王记下", "liewangjixia": "列王记下", "wangxia": "列王记下", "lwjx": "列王记下", "1Chronicles": "1Chronicles", "1Ch": "1Chronicles", "历代志上": "历代志上", "代上": "历代志上", "lidaizhishang": "历代志上", "daishang": "历代志上", "ldzs": "历代志上", "2Chronicles": "2Chronicles", "2Ch": "2Chronicles", "历代志下": "历代志下", "代下": "历代志下", "lidaizhixia": "历代志下", "daixia": "历代志下", "ldzx": "历代志下", "Ezra": "Ezra", "Ezr": "Ezra", "以斯拉记": "以斯拉记", "拉": "以斯拉记", "yisilaji": "以斯拉记", "la": "以斯拉记", "yslj": "以斯拉记", "Nehemiah": "Nehemiah", "Neh": "Nehemiah", "尼希米记": "尼希米记", "尼": "尼希米记", "niximiji": "尼希米记", "ni": "尼希米记", "nxmj": "尼希米记", "Esther": "Esther", "Est": "Esther", "以斯帖记": "以斯帖记", "斯": "以斯帖记", "yisitieji": "以斯帖记", "si": "以斯帖记", "ystj": "以斯帖记", "Job": "Job", "约伯记": "约伯记", "伯": "约伯记", "yueboji": "约伯记", "bo": "约伯记", "ybj": "约伯记", "Psalm": "Psalm", "Psm": "Psalm", "诗篇": "诗篇", "诗": "诗篇", "shipian": "诗篇", "sp": "诗篇", "Proverbs": "Proverbs", "Pro": "Proverbs", "箴言": "箴言", "箴": "箴言", "zhenyan": "箴言", "zhen": "箴言", "zy": "箴言", "Ecclesiastes": "Ecclesiastes", "Ecc": "Ecclesiastes", "传道书": "传道书", "传": "传道书", "chuandaoshu": "传道书", "chuan": "传道书", "cds": "传道书", "SongofSolomon": "SongofSolomon", "Son": "SongofSolomon", "雅歌": "雅歌", "歌": "雅歌", "yage": "雅歌", "ge": "雅歌", "yg": "雅歌", "Isaiah": "Isaiah", "Isa": "Isaiah", "以赛亚书": "以赛亚书", "赛": "以赛亚书", "yisaiyashu": "以赛亚书", "sai": "以赛亚书", "ysys": "以赛亚书", "Jeremiah": "Jeremiah", "Jer": "Jeremiah", "耶利米书": "耶利米书", "耶": "耶利米书", "yelimishu": "耶利米书", "ye": "耶利米书", "ylms": "耶利米书", "Lamentations": "Lamentations", "Lam": "Lamentations", "耶利米哀歌": "耶利米哀歌", "哀": "耶利米哀歌", "yelimiaige": "耶利米哀歌", "ai": "耶利米哀歌", "ylmag": "耶利米哀歌", "Ezekiel": "Ezekiel", "Eze": "Ezekiel", "以西结书": "以西结书", "结": "以西结书", "yixijieshu": "以西结书", "jie": "以西结书", "yxjs": "以西结书", "Daniel": "Daniel", "Dan": "Daniel", "但以理书": "但以理书", "但": "但以理书", "danyilishu": "但以理书", "dan": "但以理书", "dyls": "但以理书", "Hosea": "Hosea", "Hos": "Hosea", "何西阿书": "何西阿书", "何": "何西阿书", "hexiashu": "何西阿书", "he": "何西阿书", "hxas": "何西阿书", "Joel": "Joel", "Joe": "Joel", "约珥书": "约珥书", "珥": "约珥书", "yueershu": "约珥书", "er": "约珥书", "yes": "约珥书", "Amos": "Amos", "Amo": "Amos", "阿摩司书": "阿摩司书", "摩": "阿摩司书", "amosishu": "阿摩司书", "mo": "阿摩司书", "amss": "阿摩司书", "Obadiah": "Obadiah", "Oba": "Obadiah", "俄巴底亚书": "俄巴底亚书", "俄": "俄巴底亚书", "ebadiyashu": "俄巴底亚书", "e": "俄巴底亚书", "ebdys": "俄巴底亚书", "Jonah": "Jonah", "Jon": "Jonah", "约拿书": "约拿书", "拿": "约拿书", "yuenashu": "约拿书", "na": "约拿书", "yns": "约拿书", "Micah": "Micah", "Mic": "Micah", "弥迦书": "弥迦书", "弥": "弥迦书", "mijiashu": "弥迦书", "mi": "弥迦书", "mjs": "弥迦书", "Nahum": "Nahum", "Nah": "Nahum", "那鸿书": "那鸿书", "鸿": "那鸿书", "nahongshu": "那鸿书", "hong": "那鸿书", "nhs": "那鸿书", "Habakkuk": "Habakkuk", "Hab": "Habakkuk", "哈巴谷书": "哈巴谷书", "哈": "哈巴谷书", "habagushu": "哈巴谷书", "ha": "哈巴谷书", "hbgs": "哈巴谷书", "Zephaniah": "Zephaniah", "Zep": "Zephaniah", "西番雅书": "西番雅书", "番": "西番雅书", "xifanyashu": "西番雅书", "fan": "西番雅书", "xfys": "西番雅书", "Haggai": "Haggai", "Hag": "Haggai", "哈该书": "哈该书", "该": "哈该书", "hagaishu": "哈该书", "gai": "哈该书", "hgs": "哈该书", "Zechariah": "Zechariah", "Zec": "Zechariah", "撒迦利亚书": "撒迦利亚书", "亚": "撒迦利亚书", "sajialiyashu": "撒迦利亚书", "ya": "雅各书", "sjlys": "撒迦利亚书", "Malachi": "Malachi", "Mal": "Malachi", "玛拉基书": "玛拉基书", "玛": "玛拉基书", "malajishu": "玛拉基书", "ma": "玛拉基书", "mljs": "玛拉基书", "Matthew": "Matthew", "Mat": "Matthew", "马太福音": "马太福音", "太": "马太福音", "mataifuyin": "马太福音", "tai": "马太福音", "mtfy": "马太福音", "Mark": "Mark", "Mak": "Mark", "马可福音": "马可福音", "可": "马可福音", "makefuyin": "马可福音", "ke": "马可福音", "mkfy": "马可福音", "Luke": "Luke", "Luk": "Luke", "路加福音": "路加福音", "路": "路加福音", "lujiafuyin": "路加福音", "lu": "路加福音", "ljfy": "路加福音", "John": "John", "Jhn": "John", "约翰福音": "约翰福音", "约": "约翰福音", "yuehanfuyin": "约翰福音", "yue": "约翰福音", "yhfy": "约翰福音", "Acts": "Acts", "Act": "Acts", "使徒行传": "使徒行传", "徒": "使徒行传", "shituxingzhuan": "使徒行传", "tu": "使徒行传", "stxz": "使徒行传", "Romans": "Romans", "Rom": "Romans", "罗马书": "罗马书", "罗": "罗马书", "luomashu": "罗马书", "luo": "罗马书", "lms": "罗马书", "1Corinthians": "1Corinthians", "1Co": "1Corinthians", "哥林多前书": "哥林多前书", "林前": "哥林多前书", "gelinduoqianshu": "哥林多前书", "linqian": "哥林多前书", "gldqs": "哥林多前书", "2Corinthians": "2Corinthians", "2Co": "2Corinthians", "哥林多后书": "哥林多后书", "林后": "哥林多后书", "gelinduohoushu": "哥林多后书", "linhou": "哥林多后书", "gldhs": "哥林多后书", "Galatians": "Galatians", "Gal": "Galatians", "加拉太书": "加拉太书", "加": "加拉太书", "jialataishu": "加拉太书", "jia": "加拉太书", "jlts": "加拉太书", "Ephesians": "Ephesians", "Eph": "Ephesians", "以弗所书": "以弗所书", "弗": "以弗所书", "yifusuoshu": "以弗所书", "fu": "以弗所书", "yfss": "以弗所书", "Philippians": "Philippians", "Phl": "Philippians", "腓立比书": "腓立比书", "腓": "腓立比书", "feilibishu": "腓立比书", "fei": "腓立比书", "flbs": "腓立比书", "Colossians": "Colossians", "Col": "Colossians", "歌罗西书": "歌罗西书", "西": "歌罗西书", "geluoxishu": "歌罗西书", "xi": "歌罗西书", "glxs": "歌罗西书", "1Thessalonians": "1Thessalonians", "1Ts": "1Thessalonians", "帖撒罗尼迦前书": "帖撒罗尼迦前书", "帖前": "帖撒罗尼迦前书", "tiesaluonijiaqianshu": "帖撒罗尼迦前书", "tieqian": "帖撒罗尼迦前书", "tslnjqs": "帖撒罗尼迦前书", "2Thessalonians": "2Thessalonians", "2Ts": "2Thessalonians", "帖撒罗尼迦后书": "帖撒罗尼迦后书", "帖后": "帖撒罗尼迦后书", "tiesaluonijiahoushu": "帖撒罗尼迦后书", "tiehou": "帖撒罗尼迦后书", "tslnjhs": "帖撒罗尼迦后书", "1Timothy": "1Timothy", "1Ti": "1Timothy", "提摩太前书": "提摩太前书", "提前": "提摩太前书", "timotaiqianshu": "提摩太前书", "tiqian": "提摩太前书", "tmtqs": "提摩太前书", "2Timothy": "2Timothy", "2Ti": "2Timothy", "提摩太后书": "提摩太后书", "提后": "提摩太后书", "timotaihoushu": "提摩太后书", "tihou": "提摩太后书", "tmths": "提摩太后书", "Titus": "Titus", "Tit": "Titus", "提多书": "提多书", "多": "提多书", "tiduoshu": "提多书", "duo": "提多书", "tds": "提多书", "Philemon": "Philemon", "Phm": "Philemon", "腓利门书": "腓利门书", "门": "腓利门书", "feilimenshu": "腓利门书", "men": "腓利门书", "flms": "腓利门书", "Hebrews": "Hebrews", "Heb": "Hebrews", "希伯来书": "希伯来书", "来": "希伯来书", "xibolaishu": "希伯来书", "lai": "希伯来书", "xbls": "希伯来书", "James": "James", "Jas": "James", "雅各书": "雅各书", "雅": "雅各书", "yageshu": "雅各书", "ygs": "雅各书", "1Peter": "1Peter", "1Pe": "1Peter", "彼得前书": "彼得前书", "彼前": "彼得前书", "bideqianshu": "彼得前书", "biqian": "彼得前书", "bdqs": "彼得前书", "2Peter": "2Peter", "2Pe": "2Peter", "彼得后书": "彼得后书", "彼后": "彼得后书", "bidehoushu": "彼得后书", "bihou": "彼得后书", "bdhs": "彼得后书", "1John": "1John", "1Jn": "1John", "约翰一书": "约翰一书", "约一": "约翰一书", "yuehanyishu": "约翰一书", "yueyi": "约翰一书", "yhys": "约翰一书", "2John": "2John", "2Jn": "2John", "约翰二书": "约翰二书", "约二": "约翰二书", "yuehanershu": "约翰二书", "yueer": "约翰二书", "yhes": "约翰二书", "3John": "3John", "3Jn": "3John", "约翰三书": "约翰三书", "约三": "约翰三书", "yuehansanshu": "约翰三书", "yuesan": "约翰三书", "yhss": "约翰三书", "Jude": "Jude", "Jud": "Jude", "犹大书": "犹大书", "犹": "犹大书", "youdashu": "犹大书", "you": "犹大书", "yds": "犹大书", "Revelation": "Revelation", "Rev": "Revelation", "启示录": "启示录", "启": "启示录", "qishilu": "启示录", "qi": "启示录", "qsl": "启示录"}';
var suggestion = JSON.parse(suggestionTXT.toLowerCase());