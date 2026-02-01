const characters = [
    { id: 1, name: "花海咲季", image: "images/image_170.png" },
    { id: 2, name: "月村手毬", image: "images/image_171.png" },
    { id: 3, name: "藤田琴音", image: "images/image_172.png" },
    { id: 4, name: "雨夜燕", image: "images/image_173.png" },
    { id: 5, name: "有村麻央", image: "images/image_174.png" },
    { id: 6, name: "葛城莉莉娅", image: "images/image_175.png" },
    { id: 7, name: "仓本千奈", image: "images/image_176.png" },
    { id: 8, name: "紫云清夏", image: "images/image_177.png" },
    { id: 9, name: "筱泽广", image: "images/image_178.png" },
    { id: 10, name: "十王星南", image: "images/image_179.png" },
    { id: 11, name: "秦谷美铃", image: "images/image_180.png" },
    { id: 12, name: "花海祐芽", image: "images/image_181.png" },
    { id: 13, name: "姬崎莉波", image: "images/image_182.png" },
];

const coAppearances = {
    "10_11": {
        count: 9,
        cards: [
            { name: "やっと見つけたぞ！", imageNum: 10 },
            { name: "月村手毬、興味深いわね", imageNum: 14 },
            { name: "いつまでも続けばいいのに", imageNum: 22 },
            { name: "キラキラして綺麗～っ！", imageNum: 50 },
            { name: "プロデュースって大変ね", imageNum: 52 },
            { name: "私の目に狂いはない", imageNum: 84 },
            { name: "仕事のつもりで臨みなさい", imageNum: 88 },
            { name: "今日は見学なんです", imageNum: 105 },
            { name: "まごころを込めて", imageNum: 117 },
        ]
    },
    "10_12": {
        count: 8,
        cards: [
            { name: "いつまでも続けばいいのに", imageNum: 22 },
            { name: "キラキラして綺麗～っ！", imageNum: 50 },
            { name: "プロデュースって大変ね", imageNum: 52 },
            { name: "私の目に狂いはない", imageNum: 84 },
            { name: "仕事のつもりで臨みなさい", imageNum: 88 },
            { name: "今日は見学なんです", imageNum: 105 },
            { name: "屈辱の2位", imageNum: 112 },
            { name: "嬉し恥ずかし夢心地", imageNum: 150 },
        ]
    },
    "10_13": {
        count: 15,
        cards: [
            { name: "大運動会、開催っ！", imageNum: 16 },
            { name: "いつまでも続けばいいのに", imageNum: 22 },
            { name: "盛り上げてこー！", imageNum: 23 },
            { name: "みんなの意見を聞かせて♪", imageNum: 31 },
            { name: "よくやったな、倉本。", imageNum: 32 },
            { name: "さあ、もう一戦！", imageNum: 37 },
            { name: "これが私達の、3年間", imageNum: 46 },
            { name: "プロデュースって大変ね", imageNum: 52 },
            { name: "会長、準備は万端です", imageNum: 56 },
            { name: "「ア」じゃなくて「エ」！", imageNum: 69 },
            { name: "仕事のつもりで臨みなさい", imageNum: 88 },
            { name: "屈辱の2位", imageNum: 112 },
            { name: "ブレイクタイムは珈琲で", imageNum: 131 },
            { name: "謹厳実直", imageNum: 157 },
            { name: "完全無欠のプランニング", imageNum: 166 },
        ]
    },
    "11_12": {
        count: 13,
        cards: [
            { name: "いつまでも続けばいいのに", imageNum: 22 },
            { name: "迷子のおしらせです", imageNum: 30 },
            { name: "わたしと美鈴、超仲良し", imageNum: 34 },
            { name: "はいっ、みんなも一緒に♪", imageNum: 45 },
            { name: "キラキラして綺麗～っ！", imageNum: 50 },
            { name: "プロデュースって大変ね", imageNum: 52 },
            { name: "1人たりとも欠ける事なく", imageNum: 60 },
            { name: "何やってるんだろう、", imageNum: 72 },
            { name: "私の目に狂いはない", imageNum: 84 },
            { name: "また、あんなに無理をして", imageNum: 85 },
            { name: "仕事のつもりで臨みなさい", imageNum: 88 },
            { name: "今日は見学なんです", imageNum: 105 },
            { name: "わたしのペースで", imageNum: 167 },
        ]
    },
    "11_13": {
        count: 5,
        cards: [
            { name: "いつまでも続けばいいのに", imageNum: 22 },
            { name: "はいっ、みんなも一緒に♪", imageNum: 45 },
            { name: "プロデュースって大変ね", imageNum: 52 },
            { name: "仕事のつもりで臨みなさい", imageNum: 88 },
            { name: "ぐつぐつ、いいにおい♪", imageNum: 93 },
        ]
    },
    "12_13": {
        count: 8,
        cards: [
            { name: "いつまでも続けばいいのに", imageNum: 22 },
            { name: "バレンタイン♡会議中ーっ！", imageNum: 44 },
            { name: "はいっ、みんなも一緒に♪", imageNum: 45 },
            { name: "プロデュースって大変ね", imageNum: 52 },
            { name: "仕事のつもりで臨みなさい", imageNum: 88 },
            { name: "屈辱の2位", imageNum: 112 },
            { name: "SSDのひみつ", imageNum: 128 },
            { name: "頼れる先輩お姉さん", imageNum: 169 },
        ]
    },
    "1_10": {
        count: 4,
        cards: [
            { name: "プロデュースって大変ね", imageNum: 52 },
            { name: "「ア」じゃなくて「エ」！", imageNum: 69 },
            { name: "謹厳実直", imageNum: 157 },
            { name: "枝毛をくるり", imageNum: 160 },
        ]
    },
    "1_11": {
        count: 3,
        cards: [
            { name: "仲直りしましょう", imageNum: 21 },
            { name: "プロデュースって大変ね", imageNum: 52 },
            { name: "また、あんなに無理をして", imageNum: 85 },
        ]
    },
    "1_12": {
        count: 17,
        cards: [
            { name: "自分と向き合う時間だ", imageNum: 6 },
            { name: "メリクリ、おねーちゃん♪", imageNum: 9 },
            { name: "これは――お城ッ！！", imageNum: 15 },
            { name: "バレンタイン♡会議中ーっ！", imageNum: 44 },
            { name: "プロデュースって大変ね", imageNum: 52 },
            { name: "ゆっくりと過ごしましょう", imageNum: 62 },
            { name: "夏を満喫するわよ！", imageNum: 64 },
            { name: "まだ上がりませんように！", imageNum: 71 },
            { name: "お姉ちゃんに任せなさい！", imageNum: 76 },
            { name: "ぐぬぬぬぬ…………！", imageNum: 77 },
            { name: "また、あんなに無理をして", imageNum: 85 },
            { name: "仲良しの証", imageNum: 91 },
            { name: "奥義、三重とび！", imageNum: 113 },
            { name: "トンボをつかまえて", imageNum: 127 },
            { name: "SSDのひみつ", imageNum: 128 },
            { name: "どりゃぎゃ", imageNum: 139 },
            { name: "体当たりのラブコール", imageNum: 142 },
        ]
    },
    "1_13": {
        count: 7,
        cards: [
            { name: "オシャレもメイクも♪", imageNum: 4 },
            { name: "バレンタイン♡会議中ーっ！", imageNum: 44 },
            { name: "プロデュースって大変ね", imageNum: 52 },
            { name: "「ア」じゃなくて「エ」！", imageNum: 69 },
            { name: "SSCの爆誕", imageNum: 118 },
            { name: "SSDのひみつ", imageNum: 128 },
            { name: "謹厳実直", imageNum: 157 },
        ]
    },
    "1_2": {
        count: 15,
        cards: [
            { name: "オシャレもメイクも♪", imageNum: 4 },
            { name: "これは――お城ッ！！", imageNum: 15 },
            { name: "仲直りしましょう", imageNum: 21 },
            { name: "お母さんか！", imageNum: 25 },
            { name: "すっかり仲良しって感じ♪", imageNum: 29 },
            { name: "利用し合うのが友達！", imageNum: 35 },
            { name: "もう一度、最初から！", imageNum: 47 },
            { name: "夏を満喫するわよ！", imageNum: 64 },
            { name: "「ア」じゃなくて「エ」！", imageNum: 69 },
            { name: "第2回教室パーティー！", imageNum: 73 },
            { name: "あなたにも作ってあげる！", imageNum: 74 },
            { name: "こいつらめんどくさー", imageNum: 75 },
            { name: "また、あんなに無理をして", imageNum: 85 },
            { name: "かちこちストレッチ", imageNum: 138 },
            { name: "全力、その後", imageNum: 159 },
        ]
    },
    "1_3": {
        count: 14,
        cards: [
            { name: "オシャレもメイクも♪", imageNum: 4 },
            { name: "これは――お城ッ！！", imageNum: 15 },
            { name: "仲直りしましょう", imageNum: 21 },
            { name: "お母さんか！", imageNum: 25 },
            { name: "すっかり仲良しって感じ♪", imageNum: 29 },
            { name: "利用し合うのが友達！", imageNum: 35 },
            { name: "もう一度、最初から！", imageNum: 47 },
            { name: "夏を満喫するわよ！", imageNum: 64 },
            { name: "「ア」じゃなくて「エ」！", imageNum: 69 },
            { name: "第2回教室パーティー！", imageNum: 73 },
            { name: "あなたにも作ってあげる！", imageNum: 74 },
            { name: "こいつらめんどくさー", imageNum: 75 },
            { name: "どりゃぎゃ", imageNum: 139 },
            { name: "枝毛をくるり", imageNum: 160 },
        ]
    },
    "1_4": {
        count: 2,
        cards: [
            { name: "自分と向き合う時間だ", imageNum: 6 },
            { name: "謹厳実直", imageNum: 157 },
        ]
    },
    "1_5": {
        count: 4,
        cards: [
            { name: "オシャレもメイクも♪", imageNum: 4 },
            { name: "バレンタイン♡会議中ーっ！", imageNum: 44 },
            { name: "もう一度、最初から！", imageNum: 47 },
            { name: "謹厳実直", imageNum: 157 },
        ]
    },
    "1_6": {
        count: 6,
        cards: [
            { name: "オシャレもメイクも♪", imageNum: 4 },
            { name: "すっかり仲良しって感じ♪", imageNum: 29 },
            { name: "相手にとって不足なしよ！", imageNum: 38 },
            { name: "もう一度、最初から！", imageNum: 47 },
            { name: "第2回教室パーティー！", imageNum: 73 },
            { name: "奥義、三重とび！", imageNum: 113 },
        ]
    },
    "1_7": {
        count: 6,
        cards: [
            { name: "クールダウンが大切よ！", imageNum: 13 },
            { name: "これは――お城ッ！！", imageNum: 15 },
            { name: "プロデュースって大変ね", imageNum: 52 },
            { name: "お姉ちゃんに任せなさい！", imageNum: 76 },
            { name: "仲良しの証", imageNum: 91 },
            { name: "念入りにストレッチ", imageNum: 158 },
        ]
    },
    "1_8": {
        count: 8,
        cards: [
            { name: "オシャレもメイクも♪", imageNum: 4 },
            { name: "すっかり仲良しって感じ♪", imageNum: 29 },
            { name: "利用し合うのが友達！", imageNum: 35 },
            { name: "もう一度、最初から！", imageNum: 47 },
            { name: "待ちなさーい！", imageNum: 48 },
            { name: "第2回教室パーティー！", imageNum: 73 },
            { name: "あなたにも作ってあげる！", imageNum: 74 },
            { name: "魅惑の大腿四頭筋", imageNum: 148 },
        ]
    },
    "1_9": {
        count: 6,
        cards: [
            { name: "オシャレもメイクも♪", imageNum: 4 },
            { name: "これは――お城ッ！！", imageNum: 15 },
            { name: "仲良しの証", imageNum: 91 },
            { name: "興味深い飲み物", imageNum: 129 },
            { name: "念入りにストレッチ", imageNum: 158 },
            { name: "枝毛をくるり", imageNum: 160 },
        ]
    },
    "2_10": {
        count: 2,
        cards: [
            { name: "月村手毬、興味深いわね", imageNum: 14 },
            { name: "「ア」じゃなくて「エ」！", imageNum: 69 },
        ]
    },
    "2_11": {
        count: 14,
        cards: [
            { name: "堂々とサボってる！？", imageNum: 5 },
            { name: "月村手毬、興味深いわね", imageNum: 14 },
            { name: "仲直りしましょう", imageNum: 21 },
            { name: "どんな関係なんですか？", imageNum: 26 },
            { name: "ひとりごとです", imageNum: 33 },
            { name: "わたしと美鈴、超仲良し", imageNum: 34 },
            { name: "さみだれ", imageNum: 51 },
            { name: "一時休戦です", imageNum: 67 },
            { name: "何やってるんだろう、", imageNum: 72 },
            { name: "また、あんなに無理をして", imageNum: 85 },
            { name: "ピューとシューの二重奏", imageNum: 116 },
            { name: "カロリー/2でハッピー×2", imageNum: 122 },
            { name: "今はあえて、背を向けて", imageNum: 143 },
            { name: "わたしのペースで", imageNum: 167 },
        ]
    },
    "2_12": {
        count: 11,
        cards: [
            { name: "手毬のリサイタル、だね", imageNum: 3 },
            { name: "これは――お城ッ！！", imageNum: 15 },
            { name: "わたしと美鈴、超仲良し", imageNum: 34 },
            { name: "夏を満喫するわよ！", imageNum: 64 },
            { name: "何やってるんだろう、", imageNum: 72 },
            { name: "わたしたち、やればできる", imageNum: 82 },
            { name: "また、あんなに無理をして", imageNum: 85 },
            { name: "おひさま笑顔、満開ふたつ", imageNum: 92 },
            { name: "あったか足ツボマッサージ", imageNum: 99 },
            { name: "実食！例のSSD", imageNum: 151 },
            { name: "わたしのペースで", imageNum: 167 },
        ]
    },
    "2_13": {
        count: 3,
        cards: [
            { name: "オシャレもメイクも♪", imageNum: 4 },
            { name: "「ア」じゃなくて「エ」！", imageNum: 69 },
            { name: "腹筋で背筋で体幹キープ！", imageNum: 101 },
        ]
    },
    "2_3": {
        count: 17,
        cards: [
            { name: "オシャレもメイクも♪", imageNum: 4 },
            { name: "これは――お城ッ！！", imageNum: 15 },
            { name: "仲直りしましょう", imageNum: 21 },
            { name: "お母さんか！", imageNum: 25 },
            { name: "どんな関係なんですか？", imageNum: 26 },
            { name: "すっかり仲良しって感じ♪", imageNum: 29 },
            { name: "利用し合うのが友達！", imageNum: 35 },
            { name: "もう一度、最初から！", imageNum: 47 },
            { name: "夏を満喫するわよ！", imageNum: 64 },
            { name: "「ア」じゃなくて「エ」！", imageNum: 69 },
            { name: "何やってるんだろう、", imageNum: 72 },
            { name: "第2回教室パーティー！", imageNum: 73 },
            { name: "あなたにも作ってあげる！", imageNum: 74 },
            { name: "こいつらめんどくさー", imageNum: 75 },
            { name: "2名様、ご案内～♪", imageNum: 111 },
            { name: "イヤホンはんぶんこ", imageNum: 141 },
            { name: "今はあえて、背を向けて", imageNum: 143 },
        ]
    },
    "2_5": {
        count: 3,
        cards: [
            { name: "オシャレもメイクも♪", imageNum: 4 },
            { name: "もう一度、最初から！", imageNum: 47 },
            { name: "虫愛づる王子様", imageNum: 115 },
        ]
    },
    "2_6": {
        count: 7,
        cards: [
            { name: "オシャレもメイクも♪", imageNum: 4 },
            { name: "堂々とサボってる！？", imageNum: 5 },
            { name: "すっかり仲良しって感じ♪", imageNum: 29 },
            { name: "ひとりで立てますか？", imageNum: 40 },
            { name: "もう一度、最初から！", imageNum: 47 },
            { name: "花火、やりませんか……？", imageNum: 65 },
            { name: "第2回教室パーティー！", imageNum: 73 },
        ]
    },
    "2_7": {
        count: 10,
        cards: [
            { name: "手毬のリサイタル、だね", imageNum: 3 },
            { name: "これは――お城ッ！！", imageNum: 15 },
            { name: "わたしと美鈴、超仲良し", imageNum: 34 },
            { name: "何やってるんだろう、", imageNum: 72 },
            { name: "わたしたち、やればできる", imageNum: 82 },
            { name: "ピューとシューの二重奏", imageNum: 116 },
            { name: "カロリー/2でハッピー×2", imageNum: 122 },
            { name: "千奈の恩返し", imageNum: 130 },
            { name: "今はあえて、背を向けて", imageNum: 143 },
            { name: "いめーじとれーにんぐ", imageNum: 165 },
        ]
    },
    "2_8": {
        count: 9,
        cards: [
            { name: "オシャレもメイクも♪", imageNum: 4 },
            { name: "すっかり仲良しって感じ♪", imageNum: 29 },
            { name: "わたしと美鈴、超仲良し", imageNum: 34 },
            { name: "利用し合うのが友達！", imageNum: 35 },
            { name: "もう一度、最初から！", imageNum: 47 },
            { name: "似合うんじゃない？", imageNum: 58 },
            { name: "第2回教室パーティー！", imageNum: 73 },
            { name: "あなたにも作ってあげる！", imageNum: 74 },
            { name: "カロリー/2でハッピー×2", imageNum: 122 },
        ]
    },
    "2_9": {
        count: 10,
        cards: [
            { name: "みいつけた。", imageNum: 1 },
            { name: "手毬のリサイタル、だね", imageNum: 3 },
            { name: "オシャレもメイクも♪", imageNum: 4 },
            { name: "これは――お城ッ！！", imageNum: 15 },
            { name: "わたしと美鈴、超仲良し", imageNum: 34 },
            { name: "わたしたち、やればできる", imageNum: 82 },
            { name: "カロリー/2でハッピー×2", imageNum: 122 },
            { name: "千奈の恩返し", imageNum: 130 },
            { name: "第五種接近遭遇", imageNum: 136 },
            { name: "いめーじとれーにんぐ", imageNum: 165 },
        ]
    },
    "3_10": {
        count: 10,
        cards: [
            { name: "大運動会、開催っ！", imageNum: 16 },
            { name: "ぜったい追いついてやる！", imageNum: 53 },
            { name: "「ア」じゃなくて「エ」！", imageNum: 69 },
            { name: "あら、奇遇ね", imageNum: 86 },
            { name: "まじか。", imageNum: 87 },
            { name: "まごころを込めて", imageNum: 117 },
            { name: "ブレイクタイムは珈琲で", imageNum: 131 },
            { name: "ふわふわなお面？", imageNum: 134 },
            { name: "思惑とガクガク", imageNum: 153 },
            { name: "枝毛をくるり", imageNum: 160 },
        ]
    },
    "3_11": {
        count: 5,
        cards: [
            { name: "仲直りしましょう", imageNum: 21 },
            { name: "どんな関係なんですか？", imageNum: 26 },
            { name: "何やってるんだろう、", imageNum: 72 },
            { name: "まごころを込めて", imageNum: 117 },
            { name: "今はあえて、背を向けて", imageNum: 143 },
        ]
    },
    "3_12": {
        count: 6,
        cards: [
            { name: "これは――お城ッ！！", imageNum: 15 },
            { name: "おい、来てやったぞ！", imageNum: 20 },
            { name: "夏を満喫するわよ！", imageNum: 64 },
            { name: "何やってるんだろう、", imageNum: 72 },
            { name: "りっぱなすすき！", imageNum: 132 },
            { name: "どりゃぎゃ", imageNum: 139 },
        ]
    },
    "3_13": {
        count: 5,
        cards: [
            { name: "オシャレもメイクも♪", imageNum: 4 },
            { name: "大運動会、開催っ！", imageNum: 16 },
            { name: "「ア」じゃなくて「エ」！", imageNum: 69 },
            { name: "ちべたなひととき", imageNum: 104 },
            { name: "ブレイクタイムは珈琲で", imageNum: 131 },
        ]
    },
    "3_4": {
        count: 2,
        cards: [
            { name: "大運動会、開催っ！", imageNum: 16 },
            { name: "おい、来てやったぞ！", imageNum: 20 },
        ]
    },
    "3_5": {
        count: 8,
        cards: [
            { name: "オシャレもメイクも♪", imageNum: 4 },
            { name: "大運動会、開催っ！", imageNum: 16 },
            { name: "もう一度、最初から！", imageNum: 47 },
            { name: "晴れたね", imageNum: 70 },
            { name: "はっぴぃはろうぃ～～ん！", imageNum: 100 },
            { name: "ブレイクタイムは珈琲で", imageNum: 131 },
            { name: "のらりくらりしっかり", imageNum: 144 },
            { name: "王子様のひと呼吸", imageNum: 161 },
        ]
    },
    "3_6": {
        count: 7,
        cards: [
            { name: "オシャレもメイクも♪", imageNum: 4 },
            { name: "すっかり仲良しって感じ♪", imageNum: 29 },
            { name: "もう一度、最初から！", imageNum: 47 },
            { name: "第2回教室パーティー！", imageNum: 73 },
            { name: "きゅる～んωポーズッ☆", imageNum: 123 },
            { name: "ひたむき居残りレッスン", imageNum: 162 },
            { name: "スイッチON！", imageNum: 164 },
        ]
    },
    "3_7": {
        count: 4,
        cards: [
            { name: "これは――お城ッ！！", imageNum: 15 },
            { name: "おい、来てやったぞ！", imageNum: 20 },
            { name: "何やってるんだろう、", imageNum: 72 },
            { name: "今はあえて、背を向けて", imageNum: 143 },
        ]
    },
    "3_8": {
        count: 10,
        cards: [
            { name: "オシャレもメイクも♪", imageNum: 4 },
            { name: "すっかり仲良しって感じ♪", imageNum: 29 },
            { name: "利用し合うのが友達！", imageNum: 35 },
            { name: "もう一度、最初から！", imageNum: 47 },
            { name: "第2回教室パーティー！", imageNum: 73 },
            { name: "あなたにも作ってあげる！", imageNum: 74 },
            { name: "ガールズ♡トーク", imageNum: 114 },
            { name: "きゅる～んωポーズッ☆", imageNum: 123 },
            { name: "ひたむき居残りレッスン", imageNum: 162 },
            { name: "スイッチON！", imageNum: 164 },
        ]
    },
    "3_9": {
        count: 3,
        cards: [
            { name: "オシャレもメイクも♪", imageNum: 4 },
            { name: "これは――お城ッ！！", imageNum: 15 },
            { name: "枝毛をくるり", imageNum: 160 },
        ]
    },
    "4_10": {
        count: 14,
        cards: [
            { name: "貸せ、手本を見せてやる！", imageNum: 8 },
            { name: "やっと見つけたぞ！", imageNum: 10 },
            { name: "大運動会、開催っ！", imageNum: 16 },
            { name: "いつまでも続けばいいのに", imageNum: 22 },
            { name: "盛り上げてこー！", imageNum: 23 },
            { name: "みんなの意見を聞かせて♪", imageNum: 31 },
            { name: "よくやったな、倉本。", imageNum: 32 },
            { name: "相変わらず不器用ね", imageNum: 36 },
            { name: "さあ、もう一戦！", imageNum: 37 },
            { name: "これが私達の、3年間", imageNum: 46 },
            { name: "会長、準備は万端です", imageNum: 56 },
            { name: "仕事のつもりで臨みなさい", imageNum: 88 },
            { name: "屈辱の2位", imageNum: 112 },
            { name: "謹厳実直", imageNum: 157 },
        ]
    },
    "4_11": {
        count: 4,
        cards: [
            { name: "やっと見つけたぞ！", imageNum: 10 },
            { name: "いつまでも続けばいいのに", imageNum: 22 },
            { name: "仕事のつもりで臨みなさい", imageNum: 88 },
            { name: "主菓子、甘い、薄茶、渋み", imageNum: 110 },
        ]
    },
    "4_12": {
        count: 5,
        cards: [
            { name: "自分と向き合う時間だ", imageNum: 6 },
            { name: "おい、来てやったぞ！", imageNum: 20 },
            { name: "いつまでも続けばいいのに", imageNum: 22 },
            { name: "仕事のつもりで臨みなさい", imageNum: 88 },
            { name: "屈辱の2位", imageNum: 112 },
        ]
    },
    "4_13": {
        count: 13,
        cards: [
            { name: "なぜこんなところにッ！？", imageNum: 7 },
            { name: "大運動会、開催っ！", imageNum: 16 },
            { name: "いつまでも続けばいいのに", imageNum: 22 },
            { name: "盛り上げてこー！", imageNum: 23 },
            { name: "みんなの意見を聞かせて♪", imageNum: 31 },
            { name: "よくやったな、倉本。", imageNum: 32 },
            { name: "さあ、もう一戦！", imageNum: 37 },
            { name: "これが私達の、3年間", imageNum: 46 },
            { name: "会長、準備は万端です", imageNum: 56 },
            { name: "仕事のつもりで臨みなさい", imageNum: 88 },
            { name: "バディ？", imageNum: 96 },
            { name: "屈辱の2位", imageNum: 112 },
            { name: "謹厳実直", imageNum: 157 },
        ]
    },
    "4_5": {
        count: 8,
        cards: [
            { name: "なぜこんなところにッ！？", imageNum: 7 },
            { name: "大運動会、開催っ！", imageNum: 16 },
            { name: "盛り上げてこー！", imageNum: 23 },
            { name: "みんなの意見を聞かせて♪", imageNum: 31 },
            { name: "さあ、もう一戦！", imageNum: 37 },
            { name: "これが私達の、3年間", imageNum: 46 },
            { name: "屈辱の2位", imageNum: 112 },
            { name: "謹厳実直", imageNum: 157 },
        ]
    },
    "4_6": {
        count: 1,
        cards: [
            { name: "なぜこんなところにッ！？", imageNum: 7 },
        ]
    },
    "4_7": {
        count: 6,
        cards: [
            { name: "おい、来てやったぞ！", imageNum: 20 },
            { name: "いつまでも続けばいいのに", imageNum: 22 },
            { name: "よくやったな、倉本。", imageNum: 32 },
            { name: "仕事のつもりで臨みなさい", imageNum: 88 },
            { name: "主菓子、甘い、薄茶、渋み", imageNum: 110 },
            { name: "屈辱の2位", imageNum: 112 },
        ]
    },
    "4_9": {
        count: 1,
        cards: [
            { name: "スパルタ＆スパイス", imageNum: 106 },
        ]
    },
    "5_10": {
        count: 8,
        cards: [
            { name: "大運動会、開催っ！", imageNum: 16 },
            { name: "盛り上げてこー！", imageNum: 23 },
            { name: "みんなの意見を聞かせて♪", imageNum: 31 },
            { name: "さあ、もう一戦！", imageNum: 37 },
            { name: "これが私達の、3年間", imageNum: 46 },
            { name: "屈辱の2位", imageNum: 112 },
            { name: "ブレイクタイムは珈琲で", imageNum: 131 },
            { name: "謹厳実直", imageNum: 157 },
        ]
    },
    "5_11": {
        count: 1,
        cards: [
            { name: "ピコピコでポーン", imageNum: 95 },
        ]
    },
    "5_12": {
        count: 3,
        cards: [
            { name: "レディ・セット、ゴー！", imageNum: 12 },
            { name: "バレンタイン♡会議中ーっ！", imageNum: 44 },
            { name: "屈辱の2位", imageNum: 112 },
        ]
    },
    "5_13": {
        count: 17,
        cards: [
            { name: "オシャレもメイクも♪", imageNum: 4 },
            { name: "なぜこんなところにッ！？", imageNum: 7 },
            { name: "大運動会、開催っ！", imageNum: 16 },
            { name: "盛り上げてこー！", imageNum: 23 },
            { name: "みんなの意見を聞かせて♪", imageNum: 31 },
            { name: "さあ、もう一戦！", imageNum: 37 },
            { name: "新生活のはじまりだね", imageNum: 41 },
            { name: "バレンタイン♡会議中ーっ！", imageNum: 44 },
            { name: "これが私達の、3年間", imageNum: 46 },
            { name: "二人ならあっという間だね", imageNum: 59 },
            { name: "次の桜の季節には。", imageNum: 78 },
            { name: "屈辱の2位", imageNum: 112 },
            { name: "ブレイクタイムは珈琲で", imageNum: 131 },
            { name: "海、楽しまなきゃ！", imageNum: 137 },
            { name: "愛無き暗記は難しい", imageNum: 145 },
            { name: "いつか、きっと花開く", imageNum: 155 },
            { name: "謹厳実直", imageNum: 157 },
        ]
    },
    "5_6": {
        count: 6,
        cards: [
            { name: "オシャレもメイクも♪", imageNum: 4 },
            { name: "なぜこんなところにッ！？", imageNum: 7 },
            { name: "もう一度、最初から！", imageNum: 47 },
            { name: "そろそろ焼けたかな？", imageNum: 54 },
            { name: "まるで王子様みたいな", imageNum: 80 },
            { name: "やさしさ、あったかい", imageNum: 135 },
        ]
    },
    "5_7": {
        count: 3,
        cards: [
            { name: "レディ・セット、ゴー！", imageNum: 12 },
            { name: "おっと、危ないよ", imageNum: 19 },
            { name: "屈辱の2位", imageNum: 112 },
        ]
    },
    "5_8": {
        count: 6,
        cards: [
            { name: "オシャレもメイクも♪", imageNum: 4 },
            { name: "もう一度、最初から！", imageNum: 47 },
            { name: "そろそろ焼けたかな？", imageNum: 54 },
            { name: "むず×2ふぁっしょんしょー", imageNum: 107 },
            { name: "バズっちゃお！", imageNum: 126 },
            { name: "やさしさ、あったかい", imageNum: 135 },
        ]
    },
    "5_9": {
        count: 4,
        cards: [
            { name: "オシャレもメイクも♪", imageNum: 4 },
            { name: "レディ・セット、ゴー！", imageNum: 12 },
            { name: "おっと、危ないよ", imageNum: 19 },
            { name: "師弟の修行", imageNum: 103 },
        ]
    },
    "6_11": {
        count: 1,
        cards: [
            { name: "堂々とサボってる！？", imageNum: 5 },
        ]
    },
    "6_12": {
        count: 2,
        cards: [
            { name: "佑芽ソリレース、疾走！", imageNum: 94 },
            { name: "奥義、三重とび！", imageNum: 113 },
        ]
    },
    "6_13": {
        count: 3,
        cards: [
            { name: "オシャレもメイクも♪", imageNum: 4 },
            { name: "なぜこんなところにッ！？", imageNum: 7 },
            { name: "ちょっと詳しいんです！", imageNum: 17 },
        ]
    },
    "6_7": {
        count: 2,
        cards: [
            { name: "推し活なひととき、だね！", imageNum: 28 },
            { name: "ごきげんような挨拶♪", imageNum: 98 },
        ]
    },
    "6_8": {
        count: 17,
        cards: [
            { name: "オシャレもメイクも♪", imageNum: 4 },
            { name: "ぜったいに取るんだ！", imageNum: 11 },
            { name: "推し活なひととき、だね！", imageNum: 28 },
            { name: "すっかり仲良しって感じ♪", imageNum: 29 },
            { name: "ここから始まるんだね！", imageNum: 39 },
            { name: "もう一度、最初から！", imageNum: 47 },
            { name: "あったかいね", imageNum: 49 },
            { name: "そろそろ焼けたかな？", imageNum: 54 },
            { name: "もうっ！　冷たいよ！", imageNum: 68 },
            { name: "第2回教室パーティー！", imageNum: 73 },
            { name: "おいしい顔、いただき～！", imageNum: 81 },
            { name: "ほら、一緒に持と♪", imageNum: 89 },
            { name: "きゅる～んωポーズッ☆", imageNum: 123 },
            { name: "やさしさ、あったかい", imageNum: 135 },
            { name: "ほっぺた、ぷに", imageNum: 147 },
            { name: "ひたむき居残りレッスン", imageNum: 162 },
            { name: "スイッチON！", imageNum: 164 },
        ]
    },
    "6_9": {
        count: 3,
        cards: [
            { name: "オシャレもメイクも♪", imageNum: 4 },
            { name: "ごきげんような挨拶♪", imageNum: 98 },
            { name: "ばたんきゅー", imageNum: 108 },
        ]
    },
    "7_10": {
        count: 9,
        cards: [
            { name: "いつまでも続けばいいのに", imageNum: 22 },
            { name: "放っておけない気になる子", imageNum: 24 },
            { name: "よくやったな、倉本。", imageNum: 32 },
            { name: "絶対にお渡ししますわっ！", imageNum: 43 },
            { name: "プロデュースって大変ね", imageNum: 52 },
            { name: "仕事のつもりで臨みなさい", imageNum: 88 },
            { name: "屈辱の2位", imageNum: 112 },
            { name: "サンマ、パタパタ", imageNum: 125 },
            { name: "嬉し恥ずかし夢心地", imageNum: 150 },
        ]
    },
    "7_11": {
        count: 12,
        cards: [
            { name: "いつまでも続けばいいのに", imageNum: 22 },
            { name: "迷子のおしらせです", imageNum: 30 },
            { name: "わたしと美鈴、超仲良し", imageNum: 34 },
            { name: "はいっ、みんなも一緒に♪", imageNum: 45 },
            { name: "プロデュースって大変ね", imageNum: 52 },
            { name: "1人たりとも欠ける事なく", imageNum: 60 },
            { name: "何やってるんだろう、", imageNum: 72 },
            { name: "仕事のつもりで臨みなさい", imageNum: 88 },
            { name: "主菓子、甘い、薄茶、渋み", imageNum: 110 },
            { name: "ピューとシューの二重奏", imageNum: 116 },
            { name: "カロリー/2でハッピー×2", imageNum: 122 },
            { name: "今はあえて、背を向けて", imageNum: 143 },
        ]
    },
    "7_12": {
        count: 25,
        cards: [
            { name: "思い出の宝箱だ、ね", imageNum: 2 },
            { name: "手毬のリサイタル、だね", imageNum: 3 },
            { name: "レディ・セット、ゴー！", imageNum: 12 },
            { name: "これは――お城ッ！！", imageNum: 15 },
            { name: "おい、来てやったぞ！", imageNum: 20 },
            { name: "いつまでも続けばいいのに", imageNum: 22 },
            { name: "迷子のおしらせです", imageNum: 30 },
            { name: "わたしと美鈴、超仲良し", imageNum: 34 },
            { name: "あなたたちのことが好き", imageNum: 42 },
            { name: "はいっ、みんなも一緒に♪", imageNum: 45 },
            { name: "プロデュースって大変ね", imageNum: 52 },
            { name: "1人たりとも欠ける事なく", imageNum: 60 },
            { name: "新たな挑戦の成功ですわ！", imageNum: 61 },
            { name: "夏を楽しみましょう！", imageNum: 66 },
            { name: "何やってるんだろう、", imageNum: 72 },
            { name: "お姉ちゃんに任せなさい！", imageNum: 76 },
            { name: "わたしたち、やればできる", imageNum: 82 },
            { name: "可愛いと可愛いで可愛い！", imageNum: 83 },
            { name: "仕事のつもりで臨みなさい", imageNum: 88 },
            { name: "仲良しの証", imageNum: 91 },
            { name: "屈辱の2位", imageNum: 112 },
            { name: "パシャっとキメポ", imageNum: 140 },
            { name: "嬉し恥ずかし夢心地", imageNum: 150 },
            { name: "憧れを目指して", imageNum: 163 },
            { name: "お姉ちゃん直伝メニュー", imageNum: 168 },
        ]
    },
    "7_13": {
        count: 9,
        cards: [
            { name: "いつまでも続けばいいのに", imageNum: 22 },
            { name: "よくやったな、倉本。", imageNum: 32 },
            { name: "はいっ、みんなも一緒に♪", imageNum: 45 },
            { name: "プロデュースって大変ね", imageNum: 52 },
            { name: "あっちも行きたいですわ！", imageNum: 63 },
            { name: "お疲れ様、千奈ちゃん。", imageNum: 79 },
            { name: "仕事のつもりで臨みなさい", imageNum: 88 },
            { name: "屈辱の2位", imageNum: 112 },
            { name: "てとりあしとり", imageNum: 146 },
        ]
    },
    "7_8": {
        count: 6,
        cards: [
            { name: "ｖギャルピーーースッｖ", imageNum: 18 },
            { name: "推し活なひととき、だね！", imageNum: 28 },
            { name: "わたしと美鈴、超仲良し", imageNum: 34 },
            { name: "あん・どぅ・とろわっ！", imageNum: 109 },
            { name: "カロリー/2でハッピー×2", imageNum: 122 },
            { name: "キュッと締めて", imageNum: 133 },
        ]
    },
    "7_9": {
        count: 26,
        cards: [
            { name: "思い出の宝箱だ、ね", imageNum: 2 },
            { name: "手毬のリサイタル、だね", imageNum: 3 },
            { name: "レディ・セット、ゴー！", imageNum: 12 },
            { name: "これは――お城ッ！！", imageNum: 15 },
            { name: "ｖギャルピーーースッｖ", imageNum: 18 },
            { name: "おっと、危ないよ", imageNum: 19 },
            { name: "放っておけない気になる子", imageNum: 24 },
            { name: "迷子のおしらせです", imageNum: 30 },
            { name: "わたしと美鈴、超仲良し", imageNum: 34 },
            { name: "あなたたちのことが好き", imageNum: 42 },
            { name: "はいっ、みんなも一緒に♪", imageNum: 45 },
            { name: "すっかり秋色ですわね！", imageNum: 57 },
            { name: "1人たりとも欠ける事なく", imageNum: 60 },
            { name: "新たな挑戦の成功ですわ！", imageNum: 61 },
            { name: "夏を楽しみましょう！", imageNum: 66 },
            { name: "わたしたち、やればできる", imageNum: 82 },
            { name: "可愛いと可愛いで可愛い！", imageNum: 83 },
            { name: "仲良しの証", imageNum: 91 },
            { name: "ごきげんような挨拶♪", imageNum: 98 },
            { name: "カロリー/2でハッピー×2", imageNum: 122 },
            { name: "千奈の恩返し", imageNum: 130 },
            { name: "ふわふわでワクワク", imageNum: 149 },
            { name: "念入りにストレッチ", imageNum: 158 },
            { name: "憧れを目指して", imageNum: 163 },
            { name: "いめーじとれーにんぐ", imageNum: 165 },
            { name: "お姉ちゃん直伝メニュー", imageNum: 168 },
        ]
    },
    "8_11": {
        count: 2,
        cards: [
            { name: "わたしと美鈴、超仲良し", imageNum: 34 },
            { name: "カロリー/2でハッピー×2", imageNum: 122 },
        ]
    },
    "8_12": {
        count: 1,
        cards: [
            { name: "わたしと美鈴、超仲良し", imageNum: 34 },
        ]
    },
    "8_13": {
        count: 2,
        cards: [
            { name: "オシャレもメイクも♪", imageNum: 4 },
            { name: "いつも頑張ってるね。", imageNum: 27 },
        ]
    },
    "8_9": {
        count: 4,
        cards: [
            { name: "オシャレもメイクも♪", imageNum: 4 },
            { name: "ｖギャルピーーースッｖ", imageNum: 18 },
            { name: "わたしと美鈴、超仲良し", imageNum: 34 },
            { name: "カロリー/2でハッピー×2", imageNum: 122 },
        ]
    },
    "9_10": {
        count: 3,
        cards: [
            { name: "放っておけない気になる子", imageNum: 24 },
            { name: "今日は見学なんです", imageNum: 105 },
            { name: "枝毛をくるり", imageNum: 160 },
        ]
    },
    "9_11": {
        count: 8,
        cards: [
            { name: "迷子のおしらせです", imageNum: 30 },
            { name: "わたしと美鈴、超仲良し", imageNum: 34 },
            { name: "はいっ、みんなも一緒に♪", imageNum: 45 },
            { name: "1人たりとも欠ける事なく", imageNum: 60 },
            { name: "今日は見学なんです", imageNum: 105 },
            { name: "カロリー/2でハッピー×2", imageNum: 122 },
            { name: "マイペース、マイライフ", imageNum: 152 },
            { name: "ほっとけないクラスメイト", imageNum: 154 },
        ]
    },
    "9_12": {
        count: 18,
        cards: [
            { name: "思い出の宝箱だ、ね", imageNum: 2 },
            { name: "手毬のリサイタル、だね", imageNum: 3 },
            { name: "レディ・セット、ゴー！", imageNum: 12 },
            { name: "これは――お城ッ！！", imageNum: 15 },
            { name: "迷子のおしらせです", imageNum: 30 },
            { name: "わたしと美鈴、超仲良し", imageNum: 34 },
            { name: "あなたたちのことが好き", imageNum: 42 },
            { name: "はいっ、みんなも一緒に♪", imageNum: 45 },
            { name: "1人たりとも欠ける事なく", imageNum: 60 },
            { name: "新たな挑戦の成功ですわ！", imageNum: 61 },
            { name: "夏を楽しみましょう！", imageNum: 66 },
            { name: "わたしたち、やればできる", imageNum: 82 },
            { name: "可愛いと可愛いで可愛い！", imageNum: 83 },
            { name: "仲良しの証", imageNum: 91 },
            { name: "今日は見学なんです", imageNum: 105 },
            { name: "ディカプルエックスエル！", imageNum: 124 },
            { name: "憧れを目指して", imageNum: 163 },
            { name: "お姉ちゃん直伝メニュー", imageNum: 168 },
        ]
    },
    "9_13": {
        count: 3,
        cards: [
            { name: "オシャレもメイクも♪", imageNum: 4 },
            { name: "はいっ、みんなも一緒に♪", imageNum: 45 },
            { name: "トゲトゲ注意報", imageNum: 102 },
        ]
    },
};
