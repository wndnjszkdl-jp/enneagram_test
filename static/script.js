const typeInfo = {
  1: {
    name: "그로도",
    keyword: "완벽주의자",
    summary: "바르게 하고 싶고, 기준을 지키고 싶고, 어지러운 것을 정돈하고 싶은 마음이 강한 타입이에요.",
    detail: "그로도 타입은 책임감과 기준 의식이 강합니다. 해야 할 일과 옳고 그른 일을 비교적 분명하게 보는 편이며, 스스로에게도 엄격할 가능성이 큽니다. 그래서 주변에서는 믿음직하고 성실하다고 느끼지만, 본인은 늘 '더 잘해야 하는데'라는 압박을 안고 있을 수 있어요.",
    strength: "정리정돈, 책임감, 원칙의식, 꾸준함, 신뢰를 주는 태도",
    caution: "지나친 자기비판, 완벽하지 않으면 시작을 미루는 경향, 타인의 실수에 예민해질 수 있음",
    tip: "모든 것을 완벽하게 해내는 것보다, 충분히 좋은 상태로 마무리하는 연습을 할 때 더 크게 성장해요."
  },
  2: {
    name: "블루어",
    keyword: "이타주의자",
    summary: "사람을 챙기고 도와줄 때 마음이 따뜻해지고, 관계 속에서 자신의 가치를 느끼는 타입이에요.",
    detail: "블루어 타입은 정이 많고 타인의 감정에 민감합니다. 누군가 필요로 할 때 적극적으로 손을 내미는 편이며, 배려와 돌봄을 자연스럽게 실천합니다. 다만 너무 남을 먼저 생각하다 보면 정작 자신의 감정과 욕구는 뒤로 밀릴 수 있어요.",
    strength: "공감력, 배려심, 친절함, 관계 형성 능력, 따뜻한 존재감",
    caution: "거절이 어려움, 서운함을 속으로 쌓기 쉬움, 인정받고 싶은 마음이 과해질 수 있음",
    tip: "남을 돌보는 마음만큼, 내 마음이 정말 괜찮은지도 자주 확인할 때 더 건강해져요."
  },
  3: {
    name: "도밍",
    keyword: "목표주의자",
    summary: "목표를 향해 나아가고, 성과를 내고, 인정받는 데 큰 동기와 에너지를 느끼는 타입이에요.",
    detail: "도밍 타입은 실행력이 좋고 방향을 잡으면 빠르게 몰입합니다. 결과 중심적이고 현실 감각도 있어 실제로 일을 끝까지 밀고 가는 힘이 있습니다. 다만 성취와 인정에 너무 집중하면, 쉬는 것 자체를 불안하게 느끼거나 진짜 감정보다 '잘 보이는 모습'을 우선할 수 있어요.",
    strength: "실행력, 추진력, 성과 지향성, 효율성, 자신감",
    caution: "과로, 진짜 감정 무시, 실패에 대한 과도한 두려움, 비교의식",
    tip: "성과가 아닌 존재 자체로도 충분히 가치 있다는 감각을 가질 때 훨씬 안정적으로 오래 갑니다."
  },
  4: {
    name: "샤샤",
    keyword: "감성주의자",
    summary: "감정의 결을 깊게 느끼고, 특별함과 진정성을 중요하게 여기는 타입이에요.",
    detail: "샤샤 타입은 섬세하고 감수성이 풍부합니다. 분위기와 의미, 나만의 색깔을 중요하게 여기며, 흔한 것보다 진짜 내 마음에 닿는 것을 찾으려는 경향이 있어요. 그래서 창의성과 개성이 돋보이지만, 기분의 높낮이에 따라 에너지가 크게 흔들릴 수도 있습니다.",
    strength: "감수성, 표현력, 창의성, 진정성, 분위기를 읽는 능력",
    caution: "감정 기복, 비교에서 오는 공허함, 혼자 깊이 빠져드는 경향",
    tip: "특별함을 증명하려 하기보다, 지금 느끼는 감정을 차분히 다루는 힘을 기를수록 더 단단해져요."
  },
  5: {
    name: "도도",
    keyword: "지식 · 수집형",
    summary: "생각하고 관찰하고 정리하는 것을 좋아하며, 이해가 되어야 마음이 놓이는 타입이에요.",
    detail: "도도 타입은 지적 호기심이 많고, 깊이 있게 파고드는 힘이 있습니다. 혼자만의 시간과 생각할 공간이 필요하며, 무작정 뛰어들기보다 먼저 구조를 이해하려고 합니다. 그래서 분석력은 뛰어나지만, 너무 머릿속에서만 맴돌면 실행 타이밍을 놓치기 쉬워요.",
    strength: "분석력, 집중력, 관찰력, 정보 정리 능력, 깊이 있는 사고",
    caution: "과도한 거리두기, 감정보다 논리에 치우침, 행동 시작이 늦어질 수 있음",
    tip: "완벽히 이해한 뒤 움직이려 하기보다, 작은 실행으로 확인하는 습관이 큰 힘이 됩니다."
  },
  6: {
    name: "프리밍",
    keyword: "겁이 많고 신중함",
    summary: "위험을 먼저 살피고, 안전한 길을 찾고, 쉽게 믿기보다 확인하려는 타입이에요.",
    detail: "프리밍 타입은 조심성이 있고 책임감도 강합니다. 상황의 허점을 잘 발견하고, 미리 대비하려는 습관이 있어 위험 관리 능력이 뛰어납니다. 다만 생각이 많아지면 걱정이 커지고, 결정 전에 여러 가능성을 따지다가 지치기 쉬워요.",
    strength: "신중함, 대비 능력, 현실 감각, 책임감, 충실함",
    caution: "불안 확대, 결정 지연, 지나친 의심, 타인의 반응에 민감함",
    tip: "모든 불안을 없앤 뒤 시작하려 하기보다, 불안이 있어도 한 걸음 움직이는 연습이 중요해요."
  },
  7: {
    name: "딜라잇",
    keyword: "재미 · 즉흥형",
    summary: "재미있고 새로운 경험을 사랑하며, 답답한 분위기보다 활기와 가능성을 향해 움직이는 타입이에요.",
    detail: "딜라잇 타입은 밝고 에너지가 많으며, 새로운 아이디어와 경험에 쉽게 설렙니다. 분위기를 띄우는 능력이 있고, 빠르게 가능성을 발견하는 장점이 있어요. 하지만 지루함과 답답함을 견디기 힘들어 깊게 버티는 힘이 약해질 수 있습니다.",
    strength: "낙관성, 발상력, 에너지, 적응력, 즐거운 분위기 형성",
    caution: "집중 분산, 끝맺음 부족, 불편한 감정 회피, 즉흥성 과다",
    tip: "재미를 잃지 않으면서도 한 가지를 끝까지 완성하는 경험을 쌓으면 훨씬 강해져요."
  },
  8: {
    name: "파스칼",
    keyword: "도전 · 리더형",
    summary: "강하게 밀고 나가고, 상황을 주도하고, 약한 것을 지키고 싶어 하는 타입이에요.",
    detail: "파스칼 타입은 에너지가 크고, 부당하거나 답답한 상황을 보면 직접 움직이는 편입니다. 리더십과 결단력이 있으며, 자기 사람을 지키려는 마음도 강해요. 하지만 강한 표현이 주변에 부담으로 느껴질 수 있고, 약한 모습을 드러내는 걸 어려워할 수 있습니다.",
    strength: "리더십, 결단력, 추진력, 보호 본능, 강한 존재감",
    caution: "과한 직진, 통제 욕구, 감정 표현의 거침, 부드러움 부족",
    tip: "강함 위에 부드러움까지 더해질 때 사람들은 파스칼을 더 깊이 신뢰하게 됩니다."
  },
  9: {
    name: "쿤지",
    keyword: "평화주의자",
    summary: "조화롭고 편안한 분위기를 좋아하며, 갈등보다 평온함과 균형을 소중히 여기는 타입이에요.",
    detail: "쿤지 타입은 부드럽고 편안한 에너지를 가지고 있습니다. 주변 사람을 편하게 해주고, 갈등을 중재하거나 큰 마찰 없이 상황을 지나가게 만드는 힘이 있어요. 하지만 자기 주장이 뒤로 밀리고, 중요한 순간에도 미루거나 그냥 참고 넘어갈 수 있습니다.",
    strength: "안정감, 포용력, 편안함, 조율 능력, 온화한 분위기",
    caution: "우유부단함, 자기 의견 숨김, 중요한 문제 회피, 미루기",
    tip: "평화를 지키는 것과 내 마음을 말하는 것은 동시에 가능하다는 걸 기억하면 좋아요."
  }
};

const questions = [
  {
    text: "일을 맡으면 대충 끝내기보다 <br> 제대로 해내야 마음이 놓인다.",
    mood: "차분하게 나를 돌아보는 시간",
    answers: [
      { text: "정말 그렇다", scores: {1: 3, 3: 1} },
      { text: "꽤 그렇다", scores: {1: 2} },
      { text: "조금 그렇다", scores: {6: 1, 9: 1} },
      { text: "거의 아니다", scores: {7: 2} }
    ]
  },
  {
    text: "누군가 힘들어 보이면 내 일이 아니어도 도와주고 싶어진다.",
    mood: "관계와 마음을 느껴보는 시간",
    answers: [
      { text: "정말 그렇다", scores: {2: 3, 9: 1} },
      { text: "꽤 그렇다", scores: {2: 2} },
      { text: "조금 그렇다", scores: {6: 1} },
      { text: "거의 아니다", scores: {5: 2, 8: 1} }
    ]
  },
  {
    text: "목표가 생기면 꽤 빠르게 <br>몰입하고 결과를 내고 싶어진다.",
    mood: "앞으로 나아가는 에너지",
    answers: [
      { text: "정말 그렇다", scores: {3: 3, 8: 1} },
      { text: "꽤 그렇다", scores: {3: 2} },
      { text: "조금 그렇다", scores: {1: 1, 7: 1} },
      { text: "거의 아니다", scores: {9: 1, 4: 1} }
    ]
  },
  {
    text: "나는 기분, 분위기, 감정의 결을<br>다른 사람보다 깊게 느끼는 편이다.",
    mood: "감정을 들여다보는 시간",
    answers: [
      { text: "정말 그렇다", scores: {4: 3} },
      { text: "꽤 그렇다", scores: {4: 2, 2: 1} },
      { text: "조금 그렇다", scores: {9: 1} },
      { text: "거의 아니다", scores: {3: 1, 5: 1} }
    ]
  },
  {
    text: "새로운 주제를 알게 되면 혼자 깊게<br> 파고들고 정리하는 게 즐겁다.",
    mood: "머릿속이 반짝이는 시간",
    answers: [
      { text: "정말 그렇다", scores: {5: 3} },
      { text: "꽤 그렇다", scores: {5: 2, 1: 1} },
      { text: "조금 그렇다", scores: {6: 1} },
      { text: "거의 아니다", scores: {7: 2} }
    ]
  },
  {
    text: "무언가를 시작하기 전, 혹시 모를 <br>위험이나 실수를 먼저 생각하는 편이다.",
    mood: "안전을 살펴보는 시간",
    answers: [
      { text: "정말 그렇다", scores: {6: 3, 1: 1} },
      { text: "꽤 그렇다", scores: {6: 2} },
      { text: "조금 그렇다", scores: {5: 1, 9: 1} },
      { text: "거의 아니다", scores: {7: 2, 8: 1} }
    ]
  },
  {
    text: "재미있고 설레는 일이 보이면 <br>우선 해보고 싶어지는 편이다.",
    mood: "통통 튀는 기분",
    answers: [
      { text: "정말 그렇다", scores: {7: 3, 3: 1} },
      { text: "꽤 그렇다", scores: {7: 2} },
      { text: "조금 그렇다", scores: {8: 1} },
      { text: "거의 아니다", scores: {5: 1, 6: 1} }
    ]
  },
  {
    text: "나는 답답한 상황에서 누가 뭐라 해도 <br> 앞에 나서서 정리하는 편이다.",
    mood: "주도권이 드러나는 시간",
    answers: [
      { text: "정말 그렇다", scores: {8: 3, 3: 1} },
      { text: "꽤 그렇다", scores: {8: 2} },
      { text: "조금 그렇다", scores: {1: 1, 6: 1} },
      { text: "거의 아니다", scores: {9: 2} }
    ]
  },
  {
    text: "나는 갈등이 생기면 강하게 부딪히기보다 <br> 조용히 넘어가고 싶을 때가 많다.",
    mood: "부드러운 균형의 시간",
    answers: [
      { text: "정말 그렇다", scores: {9: 3, 2: 1} },
      { text: "꽤 그렇다", scores: {9: 2} },
      { text: "조금 그렇다", scores: {6: 1} },
      { text: "거의 아니다", scores: {8: 2} }
    ]
  },
  {
    text: "스스로에게 '이 정도로는 부족해'라고 말하는 순간이 자주 있다.",
    mood: "내면의 기준을 보는 시간",
    answers: [
      { text: "정말 그렇다", scores: {1: 3, 3: 1} },
      { text: "꽤 그렇다", scores: {1: 2, 6: 1} },
      { text: "조금 그렇다", scores: {4: 1} },
      { text: "거의 아니다", scores: {7: 1, 9: 1} }
    ]
  },
  {
    text: "사람들에게 사랑받고 필요 있는 <br>존재가 되고 싶다는 마음이 있다.",
    mood: "사람 사이의 온기를 보는 시간",
    answers: [
      { text: "정말 그렇다", scores: {2: 3} },
      { text: "꽤 그렇다", scores: {2: 2, 4: 1} },
      { text: "조금 그렇다", scores: {9: 1} },
      { text: "거의 아니다", scores: {5: 1, 8: 1} }
    ]
  },
  {
    text: "나는 인정받을 때 힘이 나고, <br>성과가 분명하면 더 힘이 난다.",
    mood: "빛나는 성취의 시간",
    answers: [
      { text: "정말 그렇다", scores: {3: 3} },
      { text: "꽤 그렇다", scores: {3: 2, 8: 1} },
      { text: "조금 그렇다", scores: {7: 1} },
      { text: "거의 아니다", scores: {4: 1, 9: 1} }
    ]
  },
  {
    text: "평범한 것보다 나다운 것, <br>진짜 내 마음에 맞는 것이 중요하다.",
    mood: "나만의 색을 만나는 시간",
    answers: [
      { text: "정말 그렇다", scores: {4: 3} },
      { text: "꽤 그렇다", scores: {4: 2, 5: 1} },
      { text: "조금 그렇다", scores: {2: 1} },
      { text: "거의 아니다", scores: {3: 1, 1: 1} }
    ]
  },
  {
    text: "사람들과 오래 함께 있으면 <br>혼자만의 시간이 꼭 필요하다.",
    mood: "고요한 충전의 시간",
    answers: [
      { text: "정말 그렇다", scores: {5: 3} },
      { text: "꽤 그렇다", scores: {5: 2, 4: 1} },
      { text: "조금 그렇다", scores: {6: 1} },
      { text: "거의 아니다", scores: {2: 1, 7: 1} }
    ]
  },
  {
    text: "결정하기 전에 여러 가능성과<br> 변수들을 오래 점검하는 편이다.",
    mood: "조심스럽게 살피는 시간",
    answers: [
      { text: "정말 그렇다", scores: {6: 3, 5: 1} },
      { text: "꽤 그렇다", scores: {6: 2} },
      { text: "조금 그렇다", scores: {1: 1} },
      { text: "거의 아니다", scores: {7: 1, 8: 1} }
    ]
  },
  {
    text: "답답하거나 우울한 감정이 오래 이어지면<br>다른 즐거운 일을 찾아 움직인다.",
    mood: "가볍게 튀어오르는 시간",
    answers: [
      { text: "정말 그렇다", scores: {7: 3} },
      { text: "꽤 그렇다", scores: {7: 2, 9: 1} },
      { text: "조금 그렇다", scores: {3: 1} },
      { text: "거의 아니다", scores: {4: 2, 5: 1} }
    ]
  },
  {
    text: "나는 약한 모습을 보이기보다 <br>강한 쪽에 서고 싶다는 마음이 있다.",
    mood: "단단한 힘을 보는 시간",
    answers: [
      { text: "정말 그렇다", scores: {8: 3} },
      { text: "꽤 그렇다", scores: {8: 2, 3: 1} },
      { text: "조금 그렇다", scores: {1: 1} },
      { text: "거의 아니다", scores: {2: 1, 9: 1} }
    ]
  },
  {
    text: "누군가와 다투는 것보다 그냥 참고<br> 분위기를 지키는 쪽을 택할 때가 많다.",
    mood: "평온함을 지키는 시간",
    answers: [
      { text: "정말 그렇다", scores: {9: 3} },
      { text: "꽤 그렇다", scores: {9: 2, 2: 1} },
      { text: "조금 그렇다", scores: {6: 1} },
      { text: "거의 아니다", scores: {8: 2} }
    ]
  }
];

const body = document.body;

const startScreen = document.getElementById("start-screen");
const questionScreen = document.getElementById("question-screen");
const resultScreen = document.getElementById("result-screen");

const startBtn = document.getElementById("start-btn");
const questionCount = document.getElementById("question-count");
const questionText = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");
const progressBar = document.getElementById("progress-bar");
const moodLabel = document.getElementById("mood-label");

const resultNumber = document.getElementById("result-number");
const resultName = document.getElementById("result-name");
const resultKeyword = document.getElementById("result-keyword");
const resultSummary = document.getElementById("result-summary");
const resultDetail = document.getElementById("result-detail");
const resultStrength = document.getElementById("result-strength");
const resultCaution = document.getElementById("result-caution");
const resultTip = document.getElementById("result-tip");
const topScores = document.getElementById("top-scores");

const saveBtn = document.getElementById("save-btn");
const restartBtn = document.getElementById("restart-btn");
const saveMessage = document.getElementById("save-message");

let currentQuestionIndex = 0;
let scores = {
  1: 0, 2: 0, 3: 0, 4: 0, 5: 0,
  6: 0, 7: 0, 8: 0, 9: 0
};
let finalResult = null;

startBtn.addEventListener("click", () => {
  startScreen.classList.remove("active");
  questionScreen.classList.add("active");
  showQuestion();
});

function getThemeClass(index) {
  const mod = index % 4;
  if (mod === 0) return "theme-question-1";
  if (mod === 1) return "theme-question-2";
  if (mod === 2) return "theme-question-3";
  return "theme-question-4";
}

function showQuestion() {
  const question = questions[currentQuestionIndex];

  body.className = getThemeClass(currentQuestionIndex);

  questionCount.textContent = `${currentQuestionIndex + 1} / ${questions.length}`;
  questionText.textContent = question.text;
  moodLabel.textContent = question.mood;

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  progressBar.style.width = `${progress}%`;

  answerButtons.innerHTML = "";

  question.answers.forEach((answer) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = answer.text;
    btn.addEventListener("click", () => selectAnswer(answer.scores));
    answerButtons.appendChild(btn);
  });
}

function selectAnswer(answerScores) {
  for (const type in answerScores) {
    scores[type] += answerScores[type];
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  questionScreen.classList.remove("active");
  resultScreen.classList.add("active");
  body.className = "theme-result";

  const sortedTypes = Object.keys(scores)
    .map((type) => ({
      type: Number(type),
      score: scores[type]
    }))
    .sort((a, b) => b.score - a.score);

  const topType = sortedTypes[0].type;
  const result = typeInfo[topType];
  finalResult = {
    type: topType,
    ...result
  };

  document.getElementById("result-character").src =
  `/static/images/type${topType}.png`;
  resultName.textContent = `${topType}. ${result.name}`;
  resultKeyword.textContent = result.keyword;
  resultSummary.textContent = result.summary;
  resultDetail.textContent = result.detail;
  resultStrength.textContent = result.strength;
  resultCaution.textContent = result.caution;
  resultTip.textContent = result.tip;

  renderTopScores(sortedTypes.slice(0, 3));
}

function renderTopScores(topThree) {
  topScores.innerHTML = "";

  const maxScore = topThree[0].score || 1;

  topThree.forEach((item) => {
    const info = typeInfo[item.type];
    const percent = Math.round((item.score / maxScore) * 100);

    const row = document.createElement("div");
    row.className = "score-item";

    row.innerHTML = `
      <div class="score-label">${item.type}. ${info.name} · ${info.keyword}</div>
      <div class="score-bar-wrap">
        <div class="score-bar" style="width:${percent}%"></div>
      </div>
      <div class="score-value">${item.score}점</div>
    `;

    topScores.appendChild(row);
  });
}

saveBtn.addEventListener("click", async () => {
  const name = document.getElementById("user-name").value.trim();
  const phone = document.getElementById("user-phone").value.trim();

  if (!name || !phone) {
    saveMessage.textContent = "이름과 연락처를 모두 입력해주세요.";
    return;
  }

  if (!finalResult) {
    saveMessage.textContent = "결과 정보가 없습니다.";
    return;
  }

  try {
    const response = await fetch("/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        phone: phone,
        result_type: finalResult.type,
        result_name: finalResult.name,
        result_keyword: finalResult.keyword,
        result_summary: finalResult.summary
      })
    });

    const data = await response.json();

    if (data.success) {
      saveMessage.textContent = "결과가 저장되었어요! 🌸";
    } else {
      saveMessage.textContent = "저장 실패: " + data.message;
    }
  } catch (error) {
    saveMessage.textContent = "서버 오류가 발생했어요.";
  }
});

restartBtn.addEventListener("click", () => {
  currentQuestionIndex = 0;
  scores = {
    1: 0, 2: 0, 3: 0, 4: 0, 5: 0,
    6: 0, 7: 0, 8: 0, 9: 0
  };
  finalResult = null;

  document.getElementById("user-name").value = "";
  document.getElementById("user-phone").value = "";
  saveMessage.textContent = "";

  resultScreen.classList.remove("active");
  startScreen.classList.add("active");
  body.className = "theme-start";
});
