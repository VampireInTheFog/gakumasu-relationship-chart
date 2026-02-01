const characters = [
    { id: 1, name: "花海咲季", image: "images/image_170.png" },
    { id: 2, name: "月村手毬", image: "images/image_171.png" },
    { id: 3, name: "藤田ことね", image: "images/image_172.png" },
    { id: 4, name: "雨夜燕", image: "images/image_173.png" },
    { id: 5, name: "有村麻央", image: "images/image_174.png" },
    { id: 6, name: "葛城リ｜リ", image: "images/image_175.png" },
    { id: 7, name: "倉本千奈", image: "images/image_176.png" },
    { id: 8, name: "紫雲清夏", image: "images/image_177.png" },
    { id: 9, name: "篠澤広", image: "images/image_178.png" },
    { id: 10, name: "十王星南", image: "images/image_179.png" },
    { id: 11, name: "秦谷美鈴", image: "images/image_180.png" },
    { id: 12, name: "花海佑芽", image: "images/image_181.png" },
    { id: 13, name: "姫崎莉波", image: "images/image_182.png" },
];

const coAppearances = {
    "10_11": {
        count: 9,
        cards: [
            { id: "SP_SSR_0081", name: "やっと見つけたぞ！", imageNum: 10 },
            { id: "SP_SSR_0077", name: "月村手毬、興味深いわね", imageNum: 14 },
            { id: "SP_SSR_0069", name: "いつまでも続けばいいのに", imageNum: 22 },
            { id: "SP_SSR_0041", name: "キラキラして綺麗～っ！", imageNum: 50 },
            { id: "SP_SSR_0039", name: "プロデュースって大変ね", imageNum: 52 },
            { id: "SP_SSR_0007", name: "私の目に狂いはない", imageNum: 83 },
            { id: "SP_SSR_0003", name: "仕事のつもりで臨みなさい", imageNum: 87 },
            { id: "SP_SR_0052", name: "今日は見学なんです", imageNum: 101 },
            { id: "SP_SR_0040", name: "まごころを込めて", imageNum: 113 },
        ]
    },
    "10_12": {
        count: 8,
        cards: [
            { id: "SP_SSR_0069", name: "いつまでも続けばいいのに", imageNum: 22 },
            { id: "SP_SSR_0041", name: "キラキラして綺麗～っ！", imageNum: 50 },
            { id: "SP_SSR_0039", name: "プロデュースって大変ね", imageNum: 52 },
            { id: "SP_SSR_0007", name: "私の目に狂いはない", imageNum: 83 },
            { id: "SP_SSR_0003", name: "仕事のつもりで臨みなさい", imageNum: 87 },
            { id: "SP_SR_0052", name: "今日は見学なんです", imageNum: 101 },
            { id: "SP_SR_0045", name: "屈辱の2位", imageNum: 108 },
            { id: "SP_SR_0007", name: "嬉し恥ずかし夢心地", imageNum: 146 },
        ]
    },
    "10_13": {
        count: 13,
        cards: [
            { id: "SP_SSR_0075", name: "大運動会、開催っ！", imageNum: 16 },
            { id: "SP_SSR_0069", name: "いつまでも続けばいいのに", imageNum: 22 },
            { id: "SP_SSR_0068", name: "盛り上げてこー！", imageNum: 23 },
            { id: "SP_SSR_0060", name: "みんなの意見を聞かせて♪", imageNum: 31 },
            { id: "SP_SSR_0059", name: "よくやったな、倉本。", imageNum: 32 },
            { id: "SP_SSR_0054", name: "さあ、もう一戦！", imageNum: 37 },
            { id: "SP_SSR_0045", name: "これが私達の、3年間", imageNum: 46 },
            { id: "SP_SSR_0039", name: "プロデュースって大変ね", imageNum: 52 },
            { id: "SP_SSR_0035", name: "会長、準備は万端です", imageNum: 55 },
            { id: "SP_SSR_0022", name: "「ア」じゃなくて「エ」！", imageNum: 68 },
            { id: "SP_SSR_0003", name: "仕事のつもりで臨みなさい", imageNum: 87 },
            { id: "SP_SR_0045", name: "屈辱の2位", imageNum: 108 },
            { id: "SP_SR_0026", name: "ブレイクタイムは珈琲で", imageNum: 127 },
        ]
    },
    "11_12": {
        count: 12,
        cards: [
            { id: "SP_SSR_0069", name: "いつまでも続けばいいのに", imageNum: 22 },
            { id: "SP_SSR_0061", name: "迷子のおしらせです", imageNum: 30 },
            { id: "SP_SSR_0057", name: "わたしと美鈴、超仲良し", imageNum: 34 },
            { id: "SP_SSR_0046", name: "はいっ、みんなも一緒に♪", imageNum: 45 },
            { id: "SP_SSR_0041", name: "キラキラして綺麗～っ！", imageNum: 50 },
            { id: "SP_SSR_0039", name: "プロデュースって大変ね", imageNum: 52 },
            { id: "SP_SSR_0031", name: "1人たりとも欠ける事なく", imageNum: 59 },
            { id: "SP_SSR_0019", name: "何やってるんだろう、", imageNum: 71 },
            { id: "SP_SSR_0007", name: "私の目に狂いはない", imageNum: 83 },
            { id: "SP_SSR_0006", name: "また、あんなに無理をして", imageNum: 84 },
            { id: "SP_SSR_0003", name: "仕事のつもりで臨みなさい", imageNum: 87 },
            { id: "SP_SR_0052", name: "今日は見学なんです", imageNum: 101 },
        ]
    },
    "11_13": {
        count: 5,
        cards: [
            { id: "SP_SSR_0069", name: "いつまでも続けばいいのに", imageNum: 22 },
            { id: "SP_SSR_0046", name: "はいっ、みんなも一緒に♪", imageNum: 45 },
            { id: "SP_SSR_0039", name: "プロデュースって大変ね", imageNum: 52 },
            { id: "SP_SSR_0003", name: "仕事のつもりで臨みなさい", imageNum: 87 },
            { id: "SP_SR_0064", name: "ぐつぐつ、いいにおい♪", imageNum: 91 },
        ]
    },
    "12_13": {
        count: 7,
        cards: [
            { id: "SP_SSR_0069", name: "いつまでも続けばいいのに", imageNum: 22 },
            { id: "SP_SSR_0047", name: "バレンタイン♡会議中ーっ！", imageNum: 44 },
            { id: "SP_SSR_0046", name: "はいっ、みんなも一緒に♪", imageNum: 45 },
            { id: "SP_SSR_0039", name: "プロデュースって大変ね", imageNum: 52 },
            { id: "SP_SSR_0003", name: "仕事のつもりで臨みなさい", imageNum: 87 },
            { id: "SP_SR_0045", name: "屈辱の2位", imageNum: 108 },
            { id: "SP_SR_0029", name: "SSDのひみつ", imageNum: 124 },
        ]
    },
    "1_10": {
        count: 2,
        cards: [
            { id: "SP_SSR_0039", name: "プロデュースって大変ね", imageNum: 52 },
            { id: "SP_SSR_0022", name: "「ア」じゃなくて「エ」！", imageNum: 68 },
        ]
    },
    "1_11": {
        count: 3,
        cards: [
            { id: "SP_SSR_0070", name: "仲直りしましょう", imageNum: 21 },
            { id: "SP_SSR_0039", name: "プロデュースって大変ね", imageNum: 52 },
            { id: "SP_SSR_0006", name: "また、あんなに無理をして", imageNum: 84 },
        ]
    },
    "1_12": {
        count: 17,
        cards: [
            { id: "SP_SSR_0085", name: "自分と向き合う時間だ", imageNum: 6 },
            { id: "SP_SSR_0082", name: "メリクリ、おねーちゃん♪", imageNum: 9 },
            { id: "SP_SSR_0076", name: "これは――お城ッ！！", imageNum: 15 },
            { id: "SP_SSR_0047", name: "バレンタイン♡会議中ーっ！", imageNum: 44 },
            { id: "SP_SSR_0039", name: "プロデュースって大変ね", imageNum: 52 },
            { id: "SP_SSR_0029", name: "ゆっくりと過ごしましょう", imageNum: 61 },
            { id: "SP_SSR_0027", name: "夏を満喫するわよ！", imageNum: 63 },
            { id: "SP_SSR_0020", name: "まだ上がりませんように！", imageNum: 70 },
            { id: "SP_SSR_0015", name: "お姉ちゃんに任せなさい！", imageNum: 75 },
            { id: "SP_SSR_0014", name: "ぐぬぬぬぬ…………！", imageNum: 76 },
            { id: "SP_SSR_0006", name: "また、あんなに無理をして", imageNum: 84 },
            { id: "SP_SR_0066", name: "仲良しの証", imageNum: 89 },
            { id: "SP_SR_0044", name: "奥義、三重とび！", imageNum: 109 },
            { id: "SP_SR_0030", name: "トンボをつかまえて", imageNum: 123 },
            { id: "SP_SR_0029", name: "SSDのひみつ", imageNum: 124 },
            { id: "SP_SR_0018", name: "どりゃぎゃ", imageNum: 135 },
            { id: "SP_SR_0015", name: "体当たりのラブコール", imageNum: 138 },
        ]
    },
    "1_13": {
        count: 6,
        cards: [
            { id: "SP_SSR_0087", name: "オシャレもメイクも♪", imageNum: 4 },
            { id: "SP_SSR_0047", name: "バレンタイン♡会議中ーっ！", imageNum: 44 },
            { id: "SP_SSR_0039", name: "プロデュースって大変ね", imageNum: 52 },
            { id: "SP_SSR_0022", name: "「ア」じゃなくて「エ」！", imageNum: 68 },
            { id: "SP_SR_0039", name: "SSCの爆誕", imageNum: 114 },
            { id: "SP_SR_0029", name: "SSDのひみつ", imageNum: 124 },
        ]
    },
    "1_2": {
        count: 14,
        cards: [
            { id: "SP_SSR_0087", name: "オシャレもメイクも♪", imageNum: 4 },
            { id: "SP_SSR_0076", name: "これは――お城ッ！！", imageNum: 15 },
            { id: "SP_SSR_0070", name: "仲直りしましょう", imageNum: 21 },
            { id: "SP_SSR_0066", name: "お母さんか！", imageNum: 25 },
            { id: "SP_SSR_0062", name: "すっかり仲良しって感じ♪", imageNum: 29 },
            { id: "SP_SSR_0056", name: "利用し合うのが友達！", imageNum: 35 },
            { id: "SP_SSR_0044", name: "もう一度、最初から！", imageNum: 47 },
            { id: "SP_SSR_0027", name: "夏を満喫するわよ！", imageNum: 63 },
            { id: "SP_SSR_0022", name: "「ア」じゃなくて「エ」！", imageNum: 68 },
            { id: "SP_SSR_0018", name: "第2回教室パーティー！", imageNum: 72 },
            { id: "SP_SSR_0017", name: "あなたにも作ってあげる！", imageNum: 73 },
            { id: "SP_SSR_0016", name: "こいつらめんどくさー", imageNum: 74 },
            { id: "SP_SSR_0006", name: "また、あんなに無理をして", imageNum: 84 },
            { id: "SP_SR_0019", name: "かちこちストレッチ", imageNum: 134 },
        ]
    },
    "1_3": {
        count: 13,
        cards: [
            { id: "SP_SSR_0087", name: "オシャレもメイクも♪", imageNum: 4 },
            { id: "SP_SSR_0076", name: "これは――お城ッ！！", imageNum: 15 },
            { id: "SP_SSR_0070", name: "仲直りしましょう", imageNum: 21 },
            { id: "SP_SSR_0066", name: "お母さんか！", imageNum: 25 },
            { id: "SP_SSR_0062", name: "すっかり仲良しって感じ♪", imageNum: 29 },
            { id: "SP_SSR_0056", name: "利用し合うのが友達！", imageNum: 35 },
            { id: "SP_SSR_0044", name: "もう一度、最初から！", imageNum: 47 },
            { id: "SP_SSR_0027", name: "夏を満喫するわよ！", imageNum: 63 },
            { id: "SP_SSR_0022", name: "「ア」じゃなくて「エ」！", imageNum: 68 },
            { id: "SP_SSR_0018", name: "第2回教室パーティー！", imageNum: 72 },
            { id: "SP_SSR_0017", name: "あなたにも作ってあげる！", imageNum: 73 },
            { id: "SP_SSR_0016", name: "こいつらめんどくさー", imageNum: 74 },
            { id: "SP_SR_0018", name: "どりゃぎゃ", imageNum: 135 },
        ]
    },
    "1_4": {
        count: 1,
        cards: [
            { id: "SP_SSR_0085", name: "自分と向き合う時間だ", imageNum: 6 },
        ]
    },
    "1_5": {
        count: 3,
        cards: [
            { id: "SP_SSR_0087", name: "オシャレもメイクも♪", imageNum: 4 },
            { id: "SP_SSR_0047", name: "バレンタイン♡会議中ーっ！", imageNum: 44 },
            { id: "SP_SSR_0044", name: "もう一度、最初から！", imageNum: 47 },
        ]
    },
    "1_6": {
        count: 6,
        cards: [
            { id: "SP_SSR_0087", name: "オシャレもメイクも♪", imageNum: 4 },
            { id: "SP_SSR_0062", name: "すっかり仲良しって感じ♪", imageNum: 29 },
            { id: "SP_SSR_0053", name: "相手にとって不足なしよ！", imageNum: 38 },
            { id: "SP_SSR_0044", name: "もう一度、最初から！", imageNum: 47 },
            { id: "SP_SSR_0018", name: "第2回教室パーティー！", imageNum: 72 },
            { id: "SP_SR_0044", name: "奥義、三重とび！", imageNum: 109 },
        ]
    },
    "1_7": {
        count: 5,
        cards: [
            { id: "SP_SSR_0078", name: "クールダウンが大切よ！", imageNum: 13 },
            { id: "SP_SSR_0076", name: "これは――お城ッ！！", imageNum: 15 },
            { id: "SP_SSR_0039", name: "プロデュースって大変ね", imageNum: 52 },
            { id: "SP_SSR_0015", name: "お姉ちゃんに任せなさい！", imageNum: 75 },
            { id: "SP_SR_0066", name: "仲良しの証", imageNum: 89 },
        ]
    },
    "1_8": {
        count: 8,
        cards: [
            { id: "SP_SSR_0087", name: "オシャレもメイクも♪", imageNum: 4 },
            { id: "SP_SSR_0062", name: "すっかり仲良しって感じ♪", imageNum: 29 },
            { id: "SP_SSR_0056", name: "利用し合うのが友達！", imageNum: 35 },
            { id: "SP_SSR_0044", name: "もう一度、最初から！", imageNum: 47 },
            { id: "SP_SSR_0043", name: "待ちなさーい！", imageNum: 48 },
            { id: "SP_SSR_0018", name: "第2回教室パーティー！", imageNum: 72 },
            { id: "SP_SSR_0017", name: "あなたにも作ってあげる！", imageNum: 73 },
            { id: "SP_SR_0009", name: "魅惑の大腿四頭筋", imageNum: 144 },
        ]
    },
    "1_9": {
        count: 4,
        cards: [
            { id: "SP_SSR_0087", name: "オシャレもメイクも♪", imageNum: 4 },
            { id: "SP_SSR_0076", name: "これは――お城ッ！！", imageNum: 15 },
            { id: "SP_SR_0066", name: "仲良しの証", imageNum: 89 },
            { id: "SP_SR_0028", name: "興味深い飲み物", imageNum: 125 },
        ]
    },
    "2_10": {
        count: 2,
        cards: [
            { id: "SP_SSR_0077", name: "月村手毬、興味深いわね", imageNum: 14 },
            { id: "SP_SSR_0022", name: "「ア」じゃなくて「エ」！", imageNum: 68 },
        ]
    },
    "2_11": {
        count: 13,
        cards: [
            { id: "SP_SSR_0086", name: "堂々とサボってる！？", imageNum: 5 },
            { id: "SP_SSR_0077", name: "月村手毬、興味深いわね", imageNum: 14 },
            { id: "SP_SSR_0070", name: "仲直りしましょう", imageNum: 21 },
            { id: "SP_SSR_0065", name: "どんな関係なんですか？", imageNum: 26 },
            { id: "SP_SSR_0058", name: "ひとりごとです", imageNum: 33 },
            { id: "SP_SSR_0057", name: "わたしと美鈴、超仲良し", imageNum: 34 },
            { id: "SP_SSR_0040", name: "さみだれ", imageNum: 51 },
            { id: "SP_SSR_0024", name: "一時休戦です", imageNum: 66 },
            { id: "SP_SSR_0019", name: "何やってるんだろう、", imageNum: 71 },
            { id: "SP_SSR_0006", name: "また、あんなに無理をして", imageNum: 84 },
            { id: "SP_SR_0041", name: "ピューとシューの二重奏", imageNum: 112 },
            { id: "SP_SR_0035", name: "カロリー/2でハッピー×2", imageNum: 118 },
            { id: "SP_SR_0014", name: "今はあえて、背を向けて", imageNum: 139 },
        ]
    },
    "2_12": {
        count: 10,
        cards: [
            { id: "SP_SSR_0088", name: "手毬のリサイタル、だね", imageNum: 3 },
            { id: "SP_SSR_0076", name: "これは――お城ッ！！", imageNum: 15 },
            { id: "SP_SSR_0057", name: "わたしと美鈴、超仲良し", imageNum: 34 },
            { id: "SP_SSR_0027", name: "夏を満喫するわよ！", imageNum: 63 },
            { id: "SP_SSR_0019", name: "何やってるんだろう、", imageNum: 71 },
            { id: "SP_SSR_0009", name: "わたしたち、やればできる", imageNum: 81 },
            { id: "SP_SSR_0006", name: "また、あんなに無理をして", imageNum: 84 },
            { id: "SP_SR_0065", name: "おひさま笑顔、満開ふたつ", imageNum: 90 },
            { id: "SP_SR_0058", name: "あったか足ツボマッサージ", imageNum: 95 },
            { id: "SP_SR_0006", name: "実食！例のSSD", imageNum: 147 },
        ]
    },
    "2_13": {
        count: 3,
        cards: [
            { id: "SP_SSR_0087", name: "オシャレもメイクも♪", imageNum: 4 },
            { id: "SP_SSR_0022", name: "「ア」じゃなくて「エ」！", imageNum: 68 },
            { id: "SP_SR_0056", name: "腹筋で背筋で体幹キープ！", imageNum: 97 },
        ]
    },
    "2_3": {
        count: 17,
        cards: [
            { id: "SP_SSR_0087", name: "オシャレもメイクも♪", imageNum: 4 },
            { id: "SP_SSR_0076", name: "これは――お城ッ！！", imageNum: 15 },
            { id: "SP_SSR_0070", name: "仲直りしましょう", imageNum: 21 },
            { id: "SP_SSR_0066", name: "お母さんか！", imageNum: 25 },
            { id: "SP_SSR_0065", name: "どんな関係なんですか？", imageNum: 26 },
            { id: "SP_SSR_0062", name: "すっかり仲良しって感じ♪", imageNum: 29 },
            { id: "SP_SSR_0056", name: "利用し合うのが友達！", imageNum: 35 },
            { id: "SP_SSR_0044", name: "もう一度、最初から！", imageNum: 47 },
            { id: "SP_SSR_0027", name: "夏を満喫するわよ！", imageNum: 63 },
            { id: "SP_SSR_0022", name: "「ア」じゃなくて「エ」！", imageNum: 68 },
            { id: "SP_SSR_0019", name: "何やってるんだろう、", imageNum: 71 },
            { id: "SP_SSR_0018", name: "第2回教室パーティー！", imageNum: 72 },
            { id: "SP_SSR_0017", name: "あなたにも作ってあげる！", imageNum: 73 },
            { id: "SP_SSR_0016", name: "こいつらめんどくさー", imageNum: 74 },
            { id: "SP_SR_0046", name: "2名様、ご案内～♪", imageNum: 107 },
            { id: "SP_SR_0016", name: "イヤホンはんぶんこ", imageNum: 137 },
            { id: "SP_SR_0014", name: "今はあえて、背を向けて", imageNum: 139 },
        ]
    },
    "2_5": {
        count: 3,
        cards: [
            { id: "SP_SSR_0087", name: "オシャレもメイクも♪", imageNum: 4 },
            { id: "SP_SSR_0044", name: "もう一度、最初から！", imageNum: 47 },
            { id: "SP_SR_0042", name: "虫愛づる王子様", imageNum: 111 },
        ]
    },
    "2_6": {
        count: 7,
        cards: [
            { id: "SP_SSR_0087", name: "オシャレもメイクも♪", imageNum: 4 },
            { id: "SP_SSR_0086", name: "堂々とサボってる！？", imageNum: 5 },
            { id: "SP_SSR_0062", name: "すっかり仲良しって感じ♪", imageNum: 29 },
            { id: "SP_SSR_0051", name: "ひとりで立てますか？", imageNum: 40 },
            { id: "SP_SSR_0044", name: "もう一度、最初から！", imageNum: 47 },
            { id: "SP_SSR_0026", name: "花火、やりませんか……？", imageNum: 64 },
            { id: "SP_SSR_0018", name: "第2回教室パーティー！", imageNum: 72 },
        ]
    },
    "2_7": {
        count: 9,
        cards: [
            { id: "SP_SSR_0088", name: "手毬のリサイタル、だね", imageNum: 3 },
            { id: "SP_SSR_0076", name: "これは――お城ッ！！", imageNum: 15 },
            { id: "SP_SSR_0057", name: "わたしと美鈴、超仲良し", imageNum: 34 },
            { id: "SP_SSR_0019", name: "何やってるんだろう、", imageNum: 71 },
            { id: "SP_SSR_0009", name: "わたしたち、やればできる", imageNum: 81 },
            { id: "SP_SR_0041", name: "ピューとシューの二重奏", imageNum: 112 },
            { id: "SP_SR_0035", name: "カロリー/2でハッピー×2", imageNum: 118 },
            { id: "SP_SR_0027", name: "千奈の恩返し", imageNum: 126 },
            { id: "SP_SR_0014", name: "今はあえて、背を向けて", imageNum: 139 },
        ]
    },
    "2_8": {
        count: 9,
        cards: [
            { id: "SP_SSR_0087", name: "オシャレもメイクも♪", imageNum: 4 },
            { id: "SP_SSR_0062", name: "すっかり仲良しって感じ♪", imageNum: 29 },
            { id: "SP_SSR_0057", name: "わたしと美鈴、超仲良し", imageNum: 34 },
            { id: "SP_SSR_0056", name: "利用し合うのが友達！", imageNum: 35 },
            { id: "SP_SSR_0044", name: "もう一度、最初から！", imageNum: 47 },
            { id: "SP_SSR_0033", name: "似合うんじゃない？", imageNum: 57 },
            { id: "SP_SSR_0018", name: "第2回教室パーティー！", imageNum: 72 },
            { id: "SP_SSR_0017", name: "あなたにも作ってあげる！", imageNum: 73 },
            { id: "SP_SR_0035", name: "カロリー/2でハッピー×2", imageNum: 118 },
        ]
    },
    "2_9": {
        count: 9,
        cards: [
            { id: "SP_SSR_0090", name: "みいつけた。", imageNum: 1 },
            { id: "SP_SSR_0088", name: "手毬のリサイタル、だね", imageNum: 3 },
            { id: "SP_SSR_0087", name: "オシャレもメイクも♪", imageNum: 4 },
            { id: "SP_SSR_0076", name: "これは――お城ッ！！", imageNum: 15 },
            { id: "SP_SSR_0057", name: "わたしと美鈴、超仲良し", imageNum: 34 },
            { id: "SP_SSR_0009", name: "わたしたち、やればできる", imageNum: 81 },
            { id: "SP_SR_0035", name: "カロリー/2でハッピー×2", imageNum: 118 },
            { id: "SP_SR_0027", name: "千奈の恩返し", imageNum: 126 },
            { id: "SP_SR_0021", name: "第五種接近遭遇", imageNum: 132 },
        ]
    },
    "3_10": {
        count: 9,
        cards: [
            { id: "SP_SSR_0075", name: "大運動会、開催っ！", imageNum: 16 },
            { id: "SP_SSR_0038", name: "ぜったい追いついてやる！", imageNum: 53 },
            { id: "SP_SSR_0022", name: "「ア」じゃなくて「エ」！", imageNum: 68 },
            { id: "SP_SSR_0005", name: "あら、奇遇ね", imageNum: 85 },
            { id: "SP_SSR_0004", name: "まじか。", imageNum: 86 },
            { id: "SP_SR_0040", name: "まごころを込めて", imageNum: 113 },
            { id: "SP_SR_0026", name: "ブレイクタイムは珈琲で", imageNum: 127 },
            { id: "SP_SR_0023", name: "ふわふわなお面？", imageNum: 130 },
            { id: "SP_SR_0004", name: "思惑とガクガク", imageNum: 149 },
        ]
    },
    "3_11": {
        count: 5,
        cards: [
            { id: "SP_SSR_0070", name: "仲直りしましょう", imageNum: 21 },
            { id: "SP_SSR_0065", name: "どんな関係なんですか？", imageNum: 26 },
            { id: "SP_SSR_0019", name: "何やってるんだろう、", imageNum: 71 },
            { id: "SP_SR_0040", name: "まごころを込めて", imageNum: 113 },
            { id: "SP_SR_0014", name: "今はあえて、背を向けて", imageNum: 139 },
        ]
    },
    "3_12": {
        count: 6,
        cards: [
            { id: "SP_SSR_0076", name: "これは――お城ッ！！", imageNum: 15 },
            { id: "SP_SSR_0071", name: "おい、来てやったぞ！", imageNum: 20 },
            { id: "SP_SSR_0027", name: "夏を満喫するわよ！", imageNum: 63 },
            { id: "SP_SSR_0019", name: "何やってるんだろう、", imageNum: 71 },
            { id: "SP_SR_0025", name: "りっぱなすすき！", imageNum: 128 },
            { id: "SP_SR_0018", name: "どりゃぎゃ", imageNum: 135 },
        ]
    },
    "3_13": {
        count: 5,
        cards: [
            { id: "SP_SSR_0087", name: "オシャレもメイクも♪", imageNum: 4 },
            { id: "SP_SSR_0075", name: "大運動会、開催っ！", imageNum: 16 },
            { id: "SP_SSR_0022", name: "「ア」じゃなくて「エ」！", imageNum: 68 },
            { id: "SP_SR_0053", name: "ちべたなひととき", imageNum: 100 },
            { id: "SP_SR_0026", name: "ブレイクタイムは珈琲で", imageNum: 127 },
        ]
    },
    "3_4": {
        count: 2,
        cards: [
            { id: "SP_SSR_0075", name: "大運動会、開催っ！", imageNum: 16 },
            { id: "SP_SSR_0071", name: "おい、来てやったぞ！", imageNum: 20 },
        ]
    },
    "3_5": {
        count: 7,
        cards: [
            { id: "SP_SSR_0087", name: "オシャレもメイクも♪", imageNum: 4 },
            { id: "SP_SSR_0075", name: "大運動会、開催っ！", imageNum: 16 },
            { id: "SP_SSR_0044", name: "もう一度、最初から！", imageNum: 47 },
            { id: "SP_SSR_0021", name: "晴れたね", imageNum: 69 },
            { id: "SP_SR_0057", name: "はっぴぃはろうぃ～～ん！", imageNum: 96 },
            { id: "SP_SR_0026", name: "ブレイクタイムは珈琲で", imageNum: 127 },
            { id: "SP_SR_0013", name: "のらりくらりしっかり", imageNum: 140 },
        ]
    },
    "3_6": {
        count: 5,
        cards: [
            { id: "SP_SSR_0087", name: "オシャレもメイクも♪", imageNum: 4 },
            { id: "SP_SSR_0062", name: "すっかり仲良しって感じ♪", imageNum: 29 },
            { id: "SP_SSR_0044", name: "もう一度、最初から！", imageNum: 47 },
            { id: "SP_SSR_0018", name: "第2回教室パーティー！", imageNum: 72 },
            { id: "SP_SR_0034", name: "きゅる～んωポーズッ☆", imageNum: 119 },
        ]
    },
    "3_7": {
        count: 4,
        cards: [
            { id: "SP_SSR_0076", name: "これは――お城ッ！！", imageNum: 15 },
            { id: "SP_SSR_0071", name: "おい、来てやったぞ！", imageNum: 20 },
            { id: "SP_SSR_0019", name: "何やってるんだろう、", imageNum: 71 },
            { id: "SP_SR_0014", name: "今はあえて、背を向けて", imageNum: 139 },
        ]
    },
    "3_8": {
        count: 8,
        cards: [
            { id: "SP_SSR_0087", name: "オシャレもメイクも♪", imageNum: 4 },
            { id: "SP_SSR_0062", name: "すっかり仲良しって感じ♪", imageNum: 29 },
            { id: "SP_SSR_0056", name: "利用し合うのが友達！", imageNum: 35 },
            { id: "SP_SSR_0044", name: "もう一度、最初から！", imageNum: 47 },
            { id: "SP_SSR_0018", name: "第2回教室パーティー！", imageNum: 72 },
            { id: "SP_SSR_0017", name: "あなたにも作ってあげる！", imageNum: 73 },
            { id: "SP_SR_0043", name: "ガールズ♡トーク", imageNum: 110 },
            { id: "SP_SR_0034", name: "きゅる～んωポーズッ☆", imageNum: 119 },
        ]
    },
    "3_9": {
        count: 2,
        cards: [
            { id: "SP_SSR_0087", name: "オシャレもメイクも♪", imageNum: 4 },
            { id: "SP_SSR_0076", name: "これは――お城ッ！！", imageNum: 15 },
        ]
    },
    "4_10": {
        count: 13,
        cards: [
            { id: "SP_SSR_0083", name: "貸せ、手本を見せてやる！", imageNum: 8 },
            { id: "SP_SSR_0081", name: "やっと見つけたぞ！", imageNum: 10 },
            { id: "SP_SSR_0075", name: "大運動会、開催っ！", imageNum: 16 },
            { id: "SP_SSR_0069", name: "いつまでも続けばいいのに", imageNum: 22 },
            { id: "SP_SSR_0068", name: "盛り上げてこー！", imageNum: 23 },
            { id: "SP_SSR_0060", name: "みんなの意見を聞かせて♪", imageNum: 31 },
            { id: "SP_SSR_0059", name: "よくやったな、倉本。", imageNum: 32 },
            { id: "SP_SSR_0055", name: "相変わらず不器用ね", imageNum: 36 },
            { id: "SP_SSR_0054", name: "さあ、もう一戦！", imageNum: 37 },
            { id: "SP_SSR_0045", name: "これが私達の、3年間", imageNum: 46 },
            { id: "SP_SSR_0035", name: "会長、準備は万端です", imageNum: 55 },
            { id: "SP_SSR_0003", name: "仕事のつもりで臨みなさい", imageNum: 87 },
            { id: "SP_SR_0045", name: "屈辱の2位", imageNum: 108 },
        ]
    },
    "4_11": {
        count: 4,
        cards: [
            { id: "SP_SSR_0081", name: "やっと見つけたぞ！", imageNum: 10 },
            { id: "SP_SSR_0069", name: "いつまでも続けばいいのに", imageNum: 22 },
            { id: "SP_SSR_0003", name: "仕事のつもりで臨みなさい", imageNum: 87 },
            { id: "SP_SR_0047", name: "主菓子、甘い、薄茶、渋み", imageNum: 106 },
        ]
    },
    "4_12": {
        count: 5,
        cards: [
            { id: "SP_SSR_0085", name: "自分と向き合う時間だ", imageNum: 6 },
            { id: "SP_SSR_0071", name: "おい、来てやったぞ！", imageNum: 20 },
            { id: "SP_SSR_0069", name: "いつまでも続けばいいのに", imageNum: 22 },
            { id: "SP_SSR_0003", name: "仕事のつもりで臨みなさい", imageNum: 87 },
            { id: "SP_SR_0045", name: "屈辱の2位", imageNum: 108 },
        ]
    },
    "4_13": {
        count: 12,
        cards: [
            { id: "SP_SSR_0084", name: "なぜこんなところにッ！？", imageNum: 7 },
            { id: "SP_SSR_0075", name: "大運動会、開催っ！", imageNum: 16 },
            { id: "SP_SSR_0069", name: "いつまでも続けばいいのに", imageNum: 22 },
            { id: "SP_SSR_0068", name: "盛り上げてこー！", imageNum: 23 },
            { id: "SP_SSR_0060", name: "みんなの意見を聞かせて♪", imageNum: 31 },
            { id: "SP_SSR_0059", name: "よくやったな、倉本。", imageNum: 32 },
            { id: "SP_SSR_0054", name: "さあ、もう一戦！", imageNum: 37 },
            { id: "SP_SSR_0045", name: "これが私達の、3年間", imageNum: 46 },
            { id: "SP_SSR_0035", name: "会長、準備は万端です", imageNum: 55 },
            { id: "SP_SSR_0003", name: "仕事のつもりで臨みなさい", imageNum: 87 },
            { id: "SP_SR_0061", name: "バディ？", imageNum: 93 },
            { id: "SP_SR_0045", name: "屈辱の2位", imageNum: 108 },
        ]
    },
    "4_5": {
        count: 8,
        cards: [
            { id: "SP_SSR_0084", name: "なぜこんなところにッ！？", imageNum: 7 },
            { id: "SP_SSR_0075", name: "大運動会、開催っ！", imageNum: 16 },
            { id: "SP_SSR_0068", name: "盛り上げてこー！", imageNum: 23 },
            { id: "SP_SSR_0060", name: "みんなの意見を聞かせて♪", imageNum: 31 },
            { id: "SP_SSR_0054", name: "さあ、もう一戦！", imageNum: 37 },
            { id: "SP_SSR_0045", name: "これが私達の、3年間", imageNum: 46 },
            { id: "SP_SR_0061", name: "バディ？", imageNum: 93 },
            { id: "SP_SR_0045", name: "屈辱の2位", imageNum: 108 },
        ]
    },
    "4_6": {
        count: 1,
        cards: [
            { id: "SP_SSR_0084", name: "なぜこんなところにッ！？", imageNum: 7 },
        ]
    },
    "4_7": {
        count: 6,
        cards: [
            { id: "SP_SSR_0071", name: "おい、来てやったぞ！", imageNum: 20 },
            { id: "SP_SSR_0069", name: "いつまでも続けばいいのに", imageNum: 22 },
            { id: "SP_SSR_0059", name: "よくやったな、倉本。", imageNum: 32 },
            { id: "SP_SSR_0003", name: "仕事のつもりで臨みなさい", imageNum: 87 },
            { id: "SP_SR_0047", name: "主菓子、甘い、薄茶、渋み", imageNum: 106 },
            { id: "SP_SR_0045", name: "屈辱の2位", imageNum: 108 },
        ]
    },
    "4_9": {
        count: 1,
        cards: [
            { id: "SP_SR_0051", name: "スパルタ＆スパイス", imageNum: 102 },
        ]
    },
    "5_10": {
        count: 7,
        cards: [
            { id: "SP_SSR_0075", name: "大運動会、開催っ！", imageNum: 16 },
            { id: "SP_SSR_0068", name: "盛り上げてこー！", imageNum: 23 },
            { id: "SP_SSR_0060", name: "みんなの意見を聞かせて♪", imageNum: 31 },
            { id: "SP_SSR_0054", name: "さあ、もう一戦！", imageNum: 37 },
            { id: "SP_SSR_0045", name: "これが私達の、3年間", imageNum: 46 },
            { id: "SP_SR_0045", name: "屈辱の2位", imageNum: 108 },
            { id: "SP_SR_0026", name: "ブレイクタイムは珈琲で", imageNum: 127 },
        ]
    },
    "5_12": {
        count: 3,
        cards: [
            { id: "SP_SSR_0079", name: "レディ・セット、ゴー！", imageNum: 12 },
            { id: "SP_SSR_0047", name: "バレンタイン♡会議中ーっ！", imageNum: 44 },
            { id: "SP_SR_0045", name: "屈辱の2位", imageNum: 108 },
        ]
    },
    "5_13": {
        count: 17,
        cards: [
            { id: "SP_SSR_0087", name: "オシャレもメイクも♪", imageNum: 4 },
            { id: "SP_SSR_0084", name: "なぜこんなところにッ！？", imageNum: 7 },
            { id: "SP_SSR_0075", name: "大運動会、開催っ！", imageNum: 16 },
            { id: "SP_SSR_0068", name: "盛り上げてこー！", imageNum: 23 },
            { id: "SP_SSR_0060", name: "みんなの意見を聞かせて♪", imageNum: 31 },
            { id: "SP_SSR_0054", name: "さあ、もう一戦！", imageNum: 37 },
            { id: "SP_SSR_0050", name: "新生活のはじまりだね", imageNum: 41 },
            { id: "SP_SSR_0047", name: "バレンタイン♡会議中ーっ！", imageNum: 44 },
            { id: "SP_SSR_0045", name: "これが私達の、3年間", imageNum: 46 },
            { id: "SP_SSR_0032", name: "二人ならあっという間だね", imageNum: 58 },
            { id: "SP_SSR_0013", name: "次の桜の季節には。", imageNum: 77 },
            { id: "SP_SR_0061", name: "バディ？", imageNum: 93 },
            { id: "SP_SR_0045", name: "屈辱の2位", imageNum: 108 },
            { id: "SP_SR_0026", name: "ブレイクタイムは珈琲で", imageNum: 127 },
            { id: "SP_SR_0020", name: "海、楽しまなきゃ！", imageNum: 133 },
            { id: "SP_SR_0012", name: "愛無き暗記は難しい", imageNum: 141 },
            { id: "SP_SR_0002", name: "いつか、きっと花開く", imageNum: 151 },
        ]
    },
    "5_6": {
        count: 6,
        cards: [
            { id: "SP_SSR_0087", name: "オシャレもメイクも♪", imageNum: 4 },
            { id: "SP_SSR_0084", name: "なぜこんなところにッ！？", imageNum: 7 },
            { id: "SP_SSR_0044", name: "もう一度、最初から！", imageNum: 47 },
            { id: "SP_SSR_0037", name: "そろそろ焼けたかな？", imageNum: 54 },
            { id: "SP_SSR_0011", name: "まるで王子様みたいな", imageNum: 79 },
            { id: "SP_SR_0022", name: "やさしさ、あったかい", imageNum: 131 },
        ]
    },
    "5_7": {
        count: 3,
        cards: [
            { id: "SP_SSR_0079", name: "レディ・セット、ゴー！", imageNum: 12 },
            { id: "SP_SSR_0072", name: "おっと、危ないよ", imageNum: 19 },
            { id: "SP_SR_0045", name: "屈辱の2位", imageNum: 108 },
        ]
    },
    "5_8": {
        count: 6,
        cards: [
            { id: "SP_SSR_0087", name: "オシャレもメイクも♪", imageNum: 4 },
            { id: "SP_SSR_0044", name: "もう一度、最初から！", imageNum: 47 },
            { id: "SP_SSR_0037", name: "そろそろ焼けたかな？", imageNum: 54 },
            { id: "SP_SR_0050", name: "むず×2ふぁっしょんしょー", imageNum: 103 },
            { id: "SP_SR_0031", name: "バズっちゃお！", imageNum: 122 },
            { id: "SP_SR_0022", name: "やさしさ、あったかい", imageNum: 131 },
        ]
    },
    "5_9": {
        count: 4,
        cards: [
            { id: "SP_SSR_0087", name: "オシャレもメイクも♪", imageNum: 4 },
            { id: "SP_SSR_0079", name: "レディ・セット、ゴー！", imageNum: 12 },
            { id: "SP_SSR_0072", name: "おっと、危ないよ", imageNum: 19 },
            { id: "SP_SR_0054", name: "師弟の修行", imageNum: 99 },
        ]
    },
    "6_11": {
        count: 1,
        cards: [
            { id: "SP_SSR_0086", name: "堂々とサボってる！？", imageNum: 5 },
        ]
    },
    "6_12": {
        count: 2,
        cards: [
            { id: "SP_SR_0063", name: "佑芽ソリレース、疾走！", imageNum: 92 },
            { id: "SP_SR_0044", name: "奥義、三重とび！", imageNum: 109 },
        ]
    },
    "6_13": {
        count: 3,
        cards: [
            { id: "SP_SSR_0087", name: "オシャレもメイクも♪", imageNum: 4 },
            { id: "SP_SSR_0084", name: "なぜこんなところにッ！？", imageNum: 7 },
            { id: "SP_SSR_0074", name: "ちょっと詳しいんです！", imageNum: 17 },
        ]
    },
    "6_7": {
        count: 2,
        cards: [
            { id: "SP_SSR_0063", name: "推し活なひととき、だね！", imageNum: 28 },
            { id: "SP_SR_0059", name: "ごきげんような挨拶♪", imageNum: 94 },
        ]
    },
    "6_8": {
        count: 15,
        cards: [
            { id: "SP_SSR_0087", name: "オシャレもメイクも♪", imageNum: 4 },
            { id: "SP_SSR_0080", name: "ぜったいに取るんだ！", imageNum: 11 },
            { id: "SP_SSR_0063", name: "推し活なひととき、だね！", imageNum: 28 },
            { id: "SP_SSR_0062", name: "すっかり仲良しって感じ♪", imageNum: 29 },
            { id: "SP_SSR_0052", name: "ここから始まるんだね！", imageNum: 39 },
            { id: "SP_SSR_0044", name: "もう一度、最初から！", imageNum: 47 },
            { id: "SP_SSR_0042", name: "あったかいね", imageNum: 49 },
            { id: "SP_SSR_0037", name: "そろそろ焼けたかな？", imageNum: 54 },
            { id: "SP_SSR_0023", name: "もうっ！　冷たいよ！", imageNum: 67 },
            { id: "SP_SSR_0018", name: "第2回教室パーティー！", imageNum: 72 },
            { id: "SP_SSR_0010", name: "おいしい顔、いただき～！", imageNum: 80 },
            { id: "SP_SSR_0002", name: "ほら、一緒に持と♪", imageNum: 88 },
            { id: "SP_SR_0034", name: "きゅる～んωポーズッ☆", imageNum: 119 },
            { id: "SP_SR_0022", name: "やさしさ、あったかい", imageNum: 131 },
            { id: "SP_SR_0010", name: "ほっぺた、ぷに", imageNum: 143 },
        ]
    },
    "6_9": {
        count: 3,
        cards: [
            { id: "SP_SSR_0087", name: "オシャレもメイクも♪", imageNum: 4 },
            { id: "SP_SR_0059", name: "ごきげんような挨拶♪", imageNum: 94 },
            { id: "SP_SR_0049", name: "ばたんきゅー", imageNum: 104 },
        ]
    },
    "7_10": {
        count: 9,
        cards: [
            { id: "SP_SSR_0069", name: "いつまでも続けばいいのに", imageNum: 22 },
            { id: "SP_SSR_0067", name: "放っておけない気になる子", imageNum: 24 },
            { id: "SP_SSR_0059", name: "よくやったな、倉本。", imageNum: 32 },
            { id: "SP_SSR_0048", name: "絶対にお渡ししますわっ！", imageNum: 43 },
            { id: "SP_SSR_0039", name: "プロデュースって大変ね", imageNum: 52 },
            { id: "SP_SSR_0003", name: "仕事のつもりで臨みなさい", imageNum: 87 },
            { id: "SP_SR_0045", name: "屈辱の2位", imageNum: 108 },
            { id: "SP_SR_0032", name: "サンマ、パタパタ", imageNum: 121 },
            { id: "SP_SR_0007", name: "嬉し恥ずかし夢心地", imageNum: 146 },
        ]
    },
    "7_11": {
        count: 12,
        cards: [
            { id: "SP_SSR_0069", name: "いつまでも続けばいいのに", imageNum: 22 },
            { id: "SP_SSR_0061", name: "迷子のおしらせです", imageNum: 30 },
            { id: "SP_SSR_0057", name: "わたしと美鈴、超仲良し", imageNum: 34 },
            { id: "SP_SSR_0046", name: "はいっ、みんなも一緒に♪", imageNum: 45 },
            { id: "SP_SSR_0039", name: "プロデュースって大変ね", imageNum: 52 },
            { id: "SP_SSR_0031", name: "1人たりとも欠ける事なく", imageNum: 59 },
            { id: "SP_SSR_0019", name: "何やってるんだろう、", imageNum: 71 },
            { id: "SP_SSR_0003", name: "仕事のつもりで臨みなさい", imageNum: 87 },
            { id: "SP_SR_0047", name: "主菓子、甘い、薄茶、渋み", imageNum: 106 },
            { id: "SP_SR_0041", name: "ピューとシューの二重奏", imageNum: 112 },
            { id: "SP_SR_0035", name: "カロリー/2でハッピー×2", imageNum: 118 },
            { id: "SP_SR_0014", name: "今はあえて、背を向けて", imageNum: 139 },
        ]
    },
    "7_12": {
        count: 23,
        cards: [
            { id: "SP_SSR_0089", name: "思い出の宝箱だ、ね", imageNum: 2 },
            { id: "SP_SSR_0088", name: "手毬のリサイタル、だね", imageNum: 3 },
            { id: "SP_SSR_0079", name: "レディ・セット、ゴー！", imageNum: 12 },
            { id: "SP_SSR_0076", name: "これは――お城ッ！！", imageNum: 15 },
            { id: "SP_SSR_0071", name: "おい、来てやったぞ！", imageNum: 20 },
            { id: "SP_SSR_0069", name: "いつまでも続けばいいのに", imageNum: 22 },
            { id: "SP_SSR_0061", name: "迷子のおしらせです", imageNum: 30 },
            { id: "SP_SSR_0057", name: "わたしと美鈴、超仲良し", imageNum: 34 },
            { id: "SP_SSR_0049", name: "あなたたちのことが好き", imageNum: 42 },
            { id: "SP_SSR_0046", name: "はいっ、みんなも一緒に♪", imageNum: 45 },
            { id: "SP_SSR_0039", name: "プロデュースって大変ね", imageNum: 52 },
            { id: "SP_SSR_0031", name: "1人たりとも欠ける事なく", imageNum: 59 },
            { id: "SP_SSR_0030", name: "新たな挑戦の成功ですわ！", imageNum: 60 },
            { id: "SP_SSR_0025", name: "夏を楽しみましょう！", imageNum: 65 },
            { id: "SP_SSR_0019", name: "何やってるんだろう、", imageNum: 71 },
            { id: "SP_SSR_0015", name: "お姉ちゃんに任せなさい！", imageNum: 75 },
            { id: "SP_SSR_0009", name: "わたしたち、やればできる", imageNum: 81 },
            { id: "SP_SSR_0008", name: "可愛いと可愛いで可愛い！", imageNum: 82 },
            { id: "SP_SSR_0003", name: "仕事のつもりで臨みなさい", imageNum: 87 },
            { id: "SP_SR_0066", name: "仲良しの証", imageNum: 89 },
            { id: "SP_SR_0045", name: "屈辱の2位", imageNum: 108 },
            { id: "SP_SR_0017", name: "パシャっとキメポ", imageNum: 136 },
            { id: "SP_SR_0007", name: "嬉し恥ずかし夢心地", imageNum: 146 },
        ]
    },
    "7_13": {
        count: 9,
        cards: [
            { id: "SP_SSR_0069", name: "いつまでも続けばいいのに", imageNum: 22 },
            { id: "SP_SSR_0059", name: "よくやったな、倉本。", imageNum: 32 },
            { id: "SP_SSR_0046", name: "はいっ、みんなも一緒に♪", imageNum: 45 },
            { id: "SP_SSR_0039", name: "プロデュースって大変ね", imageNum: 52 },
            { id: "SP_SSR_0028", name: "あっちも行きたいですわ！", imageNum: 62 },
            { id: "SP_SSR_0012", name: "お疲れ様、千奈ちゃん。", imageNum: 78 },
            { id: "SP_SSR_0003", name: "仕事のつもりで臨みなさい", imageNum: 87 },
            { id: "SP_SR_0045", name: "屈辱の2位", imageNum: 108 },
            { id: "SP_SR_0011", name: "てとりあしとり", imageNum: 142 },
        ]
    },
    "7_8": {
        count: 6,
        cards: [
            { id: "SP_SSR_0073", name: "ｖギャルピーーースッｖ", imageNum: 18 },
            { id: "SP_SSR_0063", name: "推し活なひととき、だね！", imageNum: 28 },
            { id: "SP_SSR_0057", name: "わたしと美鈴、超仲良し", imageNum: 34 },
            { id: "SP_SR_0048", name: "あん・どぅ・とろわっ！", imageNum: 105 },
            { id: "SP_SR_0035", name: "カロリー/2でハッピー×2", imageNum: 118 },
            { id: "SP_SR_0024", name: "キュッと締めて", imageNum: 129 },
        ]
    },
    "7_9": {
        count: 22,
        cards: [
            { id: "SP_SSR_0089", name: "思い出の宝箱だ、ね", imageNum: 2 },
            { id: "SP_SSR_0088", name: "手毬のリサイタル、だね", imageNum: 3 },
            { id: "SP_SSR_0079", name: "レディ・セット、ゴー！", imageNum: 12 },
            { id: "SP_SSR_0076", name: "これは――お城ッ！！", imageNum: 15 },
            { id: "SP_SSR_0073", name: "ｖギャルピーーースッｖ", imageNum: 18 },
            { id: "SP_SSR_0072", name: "おっと、危ないよ", imageNum: 19 },
            { id: "SP_SSR_0067", name: "放っておけない気になる子", imageNum: 24 },
            { id: "SP_SSR_0061", name: "迷子のおしらせです", imageNum: 30 },
            { id: "SP_SSR_0057", name: "わたしと美鈴、超仲良し", imageNum: 34 },
            { id: "SP_SSR_0049", name: "あなたたちのことが好き", imageNum: 42 },
            { id: "SP_SSR_0046", name: "はいっ、みんなも一緒に♪", imageNum: 45 },
            { id: "SP_SSR_0034", name: "すっかり秋色ですわね！", imageNum: 56 },
            { id: "SP_SSR_0031", name: "1人たりとも欠ける事なく", imageNum: 59 },
            { id: "SP_SSR_0030", name: "新たな挑戦の成功ですわ！", imageNum: 60 },
            { id: "SP_SSR_0025", name: "夏を楽しみましょう！", imageNum: 65 },
            { id: "SP_SSR_0009", name: "わたしたち、やればできる", imageNum: 81 },
            { id: "SP_SSR_0008", name: "可愛いと可愛いで可愛い！", imageNum: 82 },
            { id: "SP_SR_0066", name: "仲良しの証", imageNum: 89 },
            { id: "SP_SR_0059", name: "ごきげんような挨拶♪", imageNum: 94 },
            { id: "SP_SR_0035", name: "カロリー/2でハッピー×2", imageNum: 118 },
            { id: "SP_SR_0027", name: "千奈の恩返し", imageNum: 126 },
            { id: "SP_SR_0008", name: "ふわふわでワクワク", imageNum: 145 },
        ]
    },
    "8_11": {
        count: 2,
        cards: [
            { id: "SP_SSR_0057", name: "わたしと美鈴、超仲良し", imageNum: 34 },
            { id: "SP_SR_0035", name: "カロリー/2でハッピー×2", imageNum: 118 },
        ]
    },
    "8_12": {
        count: 1,
        cards: [
            { id: "SP_SSR_0057", name: "わたしと美鈴、超仲良し", imageNum: 34 },
        ]
    },
    "8_13": {
        count: 2,
        cards: [
            { id: "SP_SSR_0087", name: "オシャレもメイクも♪", imageNum: 4 },
            { id: "SP_SSR_0064", name: "いつも頑張ってるね。", imageNum: 27 },
        ]
    },
    "8_9": {
        count: 4,
        cards: [
            { id: "SP_SSR_0087", name: "オシャレもメイクも♪", imageNum: 4 },
            { id: "SP_SSR_0073", name: "ｖギャルピーーースッｖ", imageNum: 18 },
            { id: "SP_SSR_0057", name: "わたしと美鈴、超仲良し", imageNum: 34 },
            { id: "SP_SR_0035", name: "カロリー/2でハッピー×2", imageNum: 118 },
        ]
    },
    "9_10": {
        count: 2,
        cards: [
            { id: "SP_SSR_0067", name: "放っておけない気になる子", imageNum: 24 },
            { id: "SP_SR_0052", name: "今日は見学なんです", imageNum: 101 },
        ]
    },
    "9_11": {
        count: 8,
        cards: [
            { id: "SP_SSR_0061", name: "迷子のおしらせです", imageNum: 30 },
            { id: "SP_SSR_0057", name: "わたしと美鈴、超仲良し", imageNum: 34 },
            { id: "SP_SSR_0046", name: "はいっ、みんなも一緒に♪", imageNum: 45 },
            { id: "SP_SSR_0031", name: "1人たりとも欠ける事なく", imageNum: 59 },
            { id: "SP_SR_0052", name: "今日は見学なんです", imageNum: 101 },
            { id: "SP_SR_0035", name: "カロリー/2でハッピー×2", imageNum: 118 },
            { id: "SP_SR_0005", name: "マイペース、マイライフ", imageNum: 148 },
            { id: "SP_SR_0003", name: "ほっとけないクラスメイト", imageNum: 150 },
        ]
    },
    "9_12": {
        count: 16,
        cards: [
            { id: "SP_SSR_0089", name: "思い出の宝箱だ、ね", imageNum: 2 },
            { id: "SP_SSR_0088", name: "手毬のリサイタル、だね", imageNum: 3 },
            { id: "SP_SSR_0079", name: "レディ・セット、ゴー！", imageNum: 12 },
            { id: "SP_SSR_0076", name: "これは――お城ッ！！", imageNum: 15 },
            { id: "SP_SSR_0061", name: "迷子のおしらせです", imageNum: 30 },
            { id: "SP_SSR_0057", name: "わたしと美鈴、超仲良し", imageNum: 34 },
            { id: "SP_SSR_0049", name: "あなたたちのことが好き", imageNum: 42 },
            { id: "SP_SSR_0046", name: "はいっ、みんなも一緒に♪", imageNum: 45 },
            { id: "SP_SSR_0031", name: "1人たりとも欠ける事なく", imageNum: 59 },
            { id: "SP_SSR_0030", name: "新たな挑戦の成功ですわ！", imageNum: 60 },
            { id: "SP_SSR_0025", name: "夏を楽しみましょう！", imageNum: 65 },
            { id: "SP_SSR_0009", name: "わたしたち、やればできる", imageNum: 81 },
            { id: "SP_SSR_0008", name: "可愛いと可愛いで可愛い！", imageNum: 82 },
            { id: "SP_SR_0066", name: "仲良しの証", imageNum: 89 },
            { id: "SP_SR_0052", name: "今日は見学なんです", imageNum: 101 },
            { id: "SP_SR_0033", name: "ディカプルエックスエル！", imageNum: 120 },
        ]
    },
    "9_13": {
        count: 3,
        cards: [
            { id: "SP_SSR_0087", name: "オシャレもメイクも♪", imageNum: 4 },
            { id: "SP_SSR_0046", name: "はいっ、みんなも一緒に♪", imageNum: 45 },
            { id: "SP_SR_0055", name: "トゲトゲ注意報", imageNum: 98 },
        ]
    },
};
