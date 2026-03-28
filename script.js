// 質問データ（ママ向けに特化した5問）
const questions = [
    {
        text: "1日のうち、副業に使えるメインの時間は？（複数選択可）",
        options: [
            { text: "子どもが寝ている時のスキマ時間（30分未満）", types: { typeA: 3, typeG: 3, typeB: 1 } },
            { text: "幼稚園や学校に行っている昼間（1〜2時間）", types: { typeC: 3, typeD: 2, typeB: 1 } },
            { text: "夜や休日にパパにお願いしてガッツリ！（2時間以上）", types: { typeF: 3, typeE: 3, typeD: 2, typeB: 2 } }
        ]
    },
    {
        text: "収益が発生するスピード、一番の希望は？（複数選択可）",
        options: [
            { text: "今すぐ来月のオムツ代や食費の足しにしたい！", types: { typeA: 3, typeD: 3, typeC: 2 } },
            { text: "少し時間がかかっても、将来の教育費のために大きく稼げるようになりたい", types: { typeB: 3, typeE: 3, typeG: 2 } },
            { text: "今すぐじゃないけど、確実なスキルとして身につけたい", types: { typeC: 3, typeF: 2 } }
        ]
    },
    {
        text: "お仕事のペースについて、一番近いものはどれ？（複数選択可）",
        options: [
            { text: "数ヶ月だけ死ぬ気で頑張って、一気に結果を出す「短期集中型」", types: { typeF: 4, typeD: 1 } },
            { text: "納期やストレスなく、自分のペースで細く長く続ける「長期・マイペース安定型」", types: { typeG: 4, typeA: 2, typeB: 1 } },
            { text: "納期があっても、クライアントの決まった仕事をこなして手堅く稼ぎたい", types: { typeC: 3, typeF: 1 } },
            { text: "波があってもいいから、自分のファンを作って楽しく稼ぐ", types: { typeE: 3, typeB: 2 } }
        ]
    },
    {
        text: "スマホやパソコンの作業についてどう思う？（複数選択可）",
        options: [
            { text: "Instagram等で自分らしさを発信するのって楽しそう！", types: { typeE: 4, typeB: 2 } },
            { text: "発信は苦手だけど、PCで文章を書いたりデザインするのは好き", types: { typeC: 3, typeF: 2, typeB: 1 } },
            { text: "画面に向かうより、家の中を片付けたり物を扱う方が得意", types: { typeD: 3, typeA: 2 } },
            { text: "難しいことは無理！ポチポチ単純作業がいい", types: { typeA: 3, typeG: 2 } }
        ]
    },
    {
        text: "副業を始めるにあたって、一番避けたいことは？（複数選択可）",
        options: [
            { text: "1円でもお金が減ること（完全無料・ノーリスクがいい）", types: { typeA: 3, typeC: 2, typeG: 3 } },
            { text: "いつまでも月数千円しか稼げないこと（やるならガチで月10万以上！）", types: { typeF: 3, typeB: 3, typeE: 2, typeD: 2 } },
            { text: "在庫を抱えて家が散らかること（物販はちょっと…）", types: { typeE: 2, typeB: 2, typeC: 2, typeF: 1 } }
        ]
    }
];

// 診断結果データ（7タイプに細分化）
const resultsData = {
    typeA: {
        title: "🟢即金コツコツ型",
        jobs: ["ポイ活", "レシートアプリ", "不用品販売（少額）", "アンケートモニター"],
        reason: "リスクを取りたくなく、子育ての合間のスキマ時間で「確実＆すぐ」に結果を出したい性格だからです。難しいスキルなしで今日から始められます。",
        firststep: "家の中にある「絶対使わない服や本」を3つ探し出して、スマホで写真を撮る！",
        change: "「あ、私でも数千円なら本当にゼロから生み出せるんだ！」という初収益の嬉しさを味わえます。",
        ng: "「スマホでポチポチするだけで月30万！」という怪しい情報商材に高額な支払いをしてしまうこと。まずは確実な0→1を！"
    },
    typeB: {
        title: "🔵積み上げ・資産化型",
        jobs: ["特化型ブログ運営", "アフィリエイト", "ピンタレスト運用"],
        reason: "すぐにお金にならなくても、将来の教育費や資産のために「仕組み」を作る長期的な視野を持っているからです。",
        firststep: "自分が語れる「子育ての悩み解決法」や「買ってよかった便利グッズ」をノートに10個書き出す！",
        change: "「ただの日記」ではなく「誰かの役に立つ情報の発信」とは何かが少しずつ分かってきます。",
        ng: "結果を急いで、中途半端な状態で数週間でブログを放置してしまうこと。最初の3ヶ月は種まきの時期です！"
    },
    typeC: {
        title: "🟡安定収入（在宅ワーク）型",
        jobs: ["Webライター", "オンライン秘書", "データ入力・事務代行"],
        reason: "顔出しや過度なリスクを嫌い、着実にスキルを身につけて仕事として安定して手堅く稼ぎたいからです。",
        firststep: "クラウドソーシングサイト（クラウドワークスなど）に無料登録して「初心者歓迎」の案件を見る！",
        change: "「世の中には在宅でママができる仕事がこんなにあるんだ！」という発見と、初報酬の嬉しさをわかります。",
        ng: "いつまでも「勉強中だから…」とインプットばかりして、最初の仕事に応募するのを先延ばしにすること。"
    },
    typeD: {
        title: "🔴物販ガチ型",
        jobs: ["せどり", "メルカリ販売（本格的）", "ハンドメイド販売"],
        reason: "ビジネスの基本である「安く買って高く売る」仕組みに抵抗がなく、資金を少し投資してでも即収益化したいからです。",
        firststep: "近くのリサイクルショップや100円ショップに行き、「メルカリでいくらで売れているか？」を3つ検索する！",
        change: "「モノの価値は場所によって違う」という商売の基本ルールと、利益を生む感覚がわかります。",
        ng: "いきなり売れるか分からない商品を大量に仕入れて、家が在庫の山になってストレスを抱えること。"
    },
    typeE: {
        title: "🟣発信者（インフルエンサー）型",
        jobs: ["Instagram（リール・フィード）", "TikTok", "Threads", "ライブ配信"],
        reason: "SNSでの発信に前向きで、自分の魅力や、ママとしてのリアルな日常を武器にしてファンを作って稼ぐポテンシャルがあるからです。",
        firststep: "憧れている・参考にしたいママ系発信者のアカウントを3つフォローして、人気の投稿を分析する！",
        change: "「なぜこの人は人気なのか？」というファン作りの感覚が分かり、自分の発信の軸が見えてきます。",
        ng: "ただバズりたいだけで、誰の役にも立たない「痛い投稿」を続けてリアルのママ友から距離を置かれること。"
    },
    typeF: {
        title: "🔥短期集中ガチ稼ぎ型",
        jobs: ["プログラミング", "Webデザイン", "動画編集", "高単価な動画制作代行"],
        reason: "「やる時はやる！」と決めて、数ヶ月間死ぬ気でスキルを身につけ、一気に高単価な案件を取る覚悟と集中力があるからです。",
        firststep: "まずは自分が一番興味を持てるスキル（動画編集かデザインか等）の無料チュートリアルをYouTubeで1つやり遂げる！",
        change: "「私にも手に職がつけられるかも！」という自信と、専門スキルに触れるワクワク感が持てます。",
        ng: "いろんなスクールの無料体験をつまみ食いして、結局どのスキルも身につかない「ノウハウコレクター」になること。"
    },
    typeG: {
        title: "🌱長期マイペース安定型",
        jobs: ["のんびりポイ活", "趣味ブログ", "写真販売（ストックフォト）"],
        reason: "納期に追われたり、ストレスを感じることなく、子育てを最優先しながら空いた細切れの時間で「自分のお小遣い」を作りたいからです。",
        firststep: "スマホで今日撮った子どものおもちゃや風景の写真を、ストックフォトサイトに1枚試しにアップロードしてみる！",
        change: "「自分の何気ない日常が、ほんの少しでも価値になるんだ」というホッコリした嬉しさを感じられます。",
        ng: "周りの「月100万稼いだ！」という発信に焦って、自分には合わない無理な副業に手を出して疲弊してしまうこと。"
    }
};

let currentQuestionIndex = 0;
let scores = { typeA: 0, typeB: 0, typeC: 0, typeD: 0, typeE: 0, typeF: 0, typeG: 0 };
let answerHistory = []; // 戻るボタン用の履歴
let currentSelections = []; // 現在の質問で選択された項目

// DOM要素
const startScreen = document.getElementById('start-screen');
const questionScreen = document.getElementById('question-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const backBtn = document.getElementById('back-btn');
const nextBtn = document.getElementById('next-btn');

const questionCounter = document.getElementById('question-counter');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progressBar = document.getElementById('progress-bar');

const resultTitle = document.getElementById('result-title');
const jobList = document.getElementById('job-list');
const resultReason = document.getElementById('result-reason');
const resultFirststep = document.getElementById('result-firststep');
const resultChange = document.getElementById('result-change');
const resultNg = document.getElementById('result-ng');

startBtn.addEventListener('click', startDiagnosis);
restartBtn.addEventListener('click', restartDiagnosis);
backBtn.addEventListener('click', goBack);
nextBtn.addEventListener('click', handleNextClick);

function startDiagnosis() {
    scores = { typeA: 0, typeB: 0, typeC: 0, typeD: 0, typeE: 0, typeF: 0, typeG: 0 };
    answerHistory = [];
    currentQuestionIndex = 0;
    switchScreen(startScreen, questionScreen);
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
    
    questionCounter.textContent = `Q ${currentQuestionIndex + 1}/${questions.length}`;
    questionText.textContent = question.text;
    optionsContainer.innerHTML = '';
    currentSelections = [];
    nextBtn.disabled = true;
    
    // 戻るボタンの表示・非表示
    if(currentQuestionIndex > 0) {
        backBtn.style.display = 'block';
    } else {
        backBtn.style.display = 'none';
    }
    
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option.text;
        button.style.animationDelay = `${index * 0.1}s`;
        button.style.position = 'relative'; // for checkmark
        button.addEventListener('click', () => toggleOption(option.types, button));
        optionsContainer.appendChild(button);
    });
}

function toggleOption(types, button) {
    const isSelected = button.classList.contains('selected');
    
    if (isSelected) {
        // 選択解除
        button.classList.remove('selected');
        currentSelections = currentSelections.filter(t => t !== types);
    } else {
        // 選択追加
        button.classList.add('selected');
        currentSelections.push(types);
    }
    
    // 1つ以上選択されていれば次へボタンを有効化
    nextBtn.disabled = currentSelections.length === 0;
}

function handleNextClick() {
    if (currentSelections.length === 0) return;

    // 現在の選択肢のスコアをすべて合算
    let combinedTypes = {};
    currentSelections.forEach(types => {
        for (const [type, score] of Object.entries(types)) {
            if (!combinedTypes[type]) combinedTypes[type] = 0;
            combinedTypes[type] += score;
        }
    });

    // スコア加算と履歴保存
    answerHistory.push(combinedTypes);
    for (const [type, score] of Object.entries(combinedTypes)) {
        scores[type] += score;
    }
    
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        optionsContainer.style.opacity = '0';
        questionText.style.opacity = '0';
        nextBtn.style.opacity = '0';
        setTimeout(() => {
            showQuestion();
            optionsContainer.style.opacity = '1';
            questionText.style.opacity = '1';
            nextBtn.style.opacity = '1';
        }, 300);
    } else {
        progressBar.style.width = '100%';
        setTimeout(() => {
            showResult();
        }, 500);
    }
}

function goBack() {
    if(currentQuestionIndex > 0) {
        currentQuestionIndex--;
        const lastAnswer = answerHistory.pop();
        
        // 直前のスコアを減算
        for (const [type, score] of Object.entries(lastAnswer)) {
            scores[type] -= score;
        }
        
        optionsContainer.style.opacity = '0';
        questionText.style.opacity = '0';
        nextBtn.style.opacity = '0';
        setTimeout(() => {
            showQuestion();
            optionsContainer.style.opacity = '1';
            questionText.style.opacity = '1';
            nextBtn.style.opacity = '1';
        }, 300);
    }
}

function showResult() {
    let maxScore = -1;
    let resultType = '';
    // ランダム性が欲しい場合はスコアが同じ時の処理を入れるが、今回は最初のものを優先
    for (const [type, score] of Object.entries(scores)) {
        if (score > maxScore) {
            maxScore = score;
            resultType = type;
        }
    }
    
    const result = resultsData[resultType];
    
    resultTitle.textContent = `👉【${result.title}】です！`;
    
    jobList.innerHTML = '';
    result.jobs.forEach(job => {
        const li = document.createElement('li');
        li.textContent = job;
        jobList.appendChild(li);
    });
    
    resultReason.textContent = result.reason;
    resultFirststep.textContent = result.firststep;
    resultChange.textContent = result.change;
    resultNg.textContent = result.ng;
    
    switchScreen(questionScreen, resultScreen);
}

function restartDiagnosis() {
    switchScreen(resultScreen, startScreen);
}

function switchScreen(hideScreen, showScreen) {
    hideScreen.classList.remove('active');
    showScreen.classList.remove('active');
    void showScreen.offsetWidth; 
    showScreen.classList.add('active');
}
