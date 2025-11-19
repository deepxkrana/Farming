const questionsPool = [
  {
    question: 'What is composting?',
    options: {
      a: 'Burning agricultural waste',
      b: 'Decomposing organic matter to create nutrient-rich soil',
      c: 'Using chemical fertilizers'
    },
    answer: 'b'
  },
  {
    question: 'Why is crop rotation important?',
    options: {
      a: 'It makes crops grow faster',
      b: 'It prevents soil depletion and reduces pest buildup',
      c: 'It requires less water'
    },
    answer: 'b'
  },
  {
    question: 'What is a benefit of rainwater harvesting?',
    options: {
      a: 'It increases electricity costs',
      b: 'It reduces dependence on groundwater and saves money',
      c: 'It requires expensive equipment'
    },
    answer: 'b'
  },
  {
    question: 'Which is an organic pest control method?',
    options: {
      a: 'Using synthetic chemical pesticides',
      b: 'Introducing beneficial insects like ladybugs',
      c: 'Burning crop residues'
    },
    answer: 'b'
  },
  {
    question: 'What does sustainable farming aim to achieve?',
    options: {
      a: 'Maximum profit regardless of environmental impact',
      b: 'Balance between productivity, environmental health, and economic viability',
      c: 'Using only traditional methods'
    },
    answer: 'b'
  },
  {
    question: 'What does mulching primarily help with?',
    options: {
      a: 'Increasing soil salinity',
      b: 'Retaining soil moisture and suppressing weeds',
      c: 'Attracting more pests'
    },
    answer: 'b'
  },
  {
    question: 'Which irrigation method is most water-efficient?',
    options: {
      a: 'Sprinkler irrigation',
      b: 'Flood irrigation',
      c: 'Drip irrigation'
    },
    answer: 'c'
  },
  {
    question: 'Cover crops are mainly used to:',
    options: {
      a: 'Increase pesticide use',
      b: 'Prevent erosion and improve soil health',
      c: 'Reduce biodiversity'
    },
    answer: 'b'
  },
  {
    question: 'Which practice best improves soil organic matter?',
    options: {
      a: 'Continuous monocropping',
      b: 'Tilling more often',
      c: 'Adding compost and using cover crops'
    },
    answer: 'c'
  },
  {
    question: 'Which is a renewable on-farm energy source?',
    options: {
      a: 'Diesel generators',
      b: 'Solar panels',
      c: 'Coal-fired heaters'
    },
    answer: 'b'
  },
  {
    question: 'What is the primary purpose of using biofertilizers?',
    options: {
      a: 'To increase chemical residue in soil',
      b: 'To provide beneficial microorganisms that enhance nutrient availability',
      c: 'To replace irrigation entirely'
    },
    answer: 'b'
  },
  {
    question: 'Which practice helps reduce soil erosion on sloped land?',
    options: {
      a: 'Contour farming',
      b: 'Excessive tilling',
      c: 'Planting only shallow-rooted crops'
    },
    answer: 'a'
  },
  {
    question: 'What is the main advantage of agroforestry?',
    options: {
      a: 'Decreases biodiversity',
      b: 'Integrates trees with crops to improve productivity and resilience',
      c: 'Eliminates the need for crop management'
    },
    answer: 'b'
  },
  {
    question: 'Which method improves water infiltration in soil?',
    options: {
      a: 'Compacting the soil',
      b: 'Adding organic matter and reducing tillage',
      c: 'Removing all ground cover'
    },
    answer: 'b'
  },
  {
    question: 'What is the purpose of integrated pest management (IPM)?',
    options: {
      a: 'Rely solely on chemical pesticides',
      b: 'Combine biological, physical, and chemical methods to manage pests sustainably',
      c: 'Ignore pest problems until crop loss occurs'
    },
    answer: 'b'
  },
  {
    question: 'Which farming practice helps reduce greenhouse gas emissions?',
    options: {
      a: 'Overuse of nitrogen fertilizers',
      b: 'Adopting no-till or reduced-till farming',
      c: 'Burning fields after harvest'
    },
    answer: 'b'
  },
  {
    question: 'What is the main function of windbreaks on a farm?',
    options: {
      a: 'Increase wind speed',
      b: 'Reduce wind erosion and protect crops',
      c: 'Block sunlight from reaching crops'
    },
    answer: 'b'
  },
  {
    question: 'Why is soil testing important?',
    options: {
      a: 'It helps determine nutrient needs and avoid over-fertilization',
      b: 'It guarantees maximum yield without management',
      c: 'It replaces the need for crop monitoring'
    },
    answer: 'a'
  },
  {
    question: 'What is a key benefit of intercropping?',
    options: {
      a: 'Reduces overall biodiversity',
      b: 'Improves resource use efficiency and reduces pest pressure',
      c: 'Requires only one type of nutrient management plan'
    },
    answer: 'b'
  },
  {
    question: 'Which technology helps farmers apply water more precisely?',
    options: {
      a: 'GPS-guided irrigation systems',
      b: 'Uncontrolled flood irrigation',
      c: 'Random watering schedules'
    },
    answer: 'a'
  },
  {
  question: 'What is the main purpose of integrated pest management (IPM)?',
  options: {
    a: 'Rely only on chemical pesticides',
    b: 'Combine biological, cultural, and mechanical methods to control pests sustainably',
    c: 'Increase pesticide usage for faster results'
  },
  answer: 'b'
},
{
  question: 'Which practice helps prevent soil erosion the most?',
  options: {
    a: 'Leaving fields bare after harvest',
    b: 'Contour plowing and terracing',
    c: 'Over-irrigating fields'
  },
  answer: 'b'
},
{
  question: 'What is the main benefit of using biofertilizers?',
  options: {
    a: 'They increase soil nutrients using beneficial microorganisms',
    b: 'They work faster than chemical fertilizers',
    c: 'They make soil acidic'
  },
  answer: 'a'
},
{
  question: 'Which farming method reduces greenhouse gas emissions?',
  options: {
    a: 'Using diesel-powered equipment excessively',
    b: 'Adopting conservation tillage',
    c: 'Burning fields between seasons'
  },
  answer: 'b'
},
{
  question: 'What is the purpose of agroforestry?',
  options: {
    a: 'Planting trees to improve soil and diversify farm production',
    b: 'Replacing crops with only trees',
    c: 'Reducing farm area available for cultivation'
  },
  answer: 'a'
},
{
  question: 'Why is soil testing important in sustainable farming?',
  options: {
    a: 'To randomly choose fertilizers',
    b: 'To understand nutrient levels and apply inputs precisely',
    c: 'To avoid using any fertilizers'
  },
  answer: 'b'
},
{
  question: 'Which method improves water infiltration in soil?',
  options: {
    a: 'Overgrazing land',
    b: 'Using organic matter and reduced tillage',
    c: 'Compacting the soil with heavy machinery'
  },
  answer: 'b'
},
{
  question: 'What is the key benefit of using drought-resistant crop varieties?',
  options: {
    a: 'They need more irrigation',
    b: 'They survive better in low-rain conditions',
    c: 'They require chemical fertilizers'
  },
  answer: 'b'
},
{
  question: 'Which technique increases biodiversity on farms?',
  options: {
    a: 'Monocropping',
    b: 'Using diverse crop species and intercropping',
    c: 'Removing natural habitats'
  },
  answer: 'b'
},
{
  question: 'What does zero-budget natural farming (ZBNF) emphasize?',
  options: {
    a: 'Using expensive chemical inputs',
    b: 'Farming without synthetic fertilizers or pesticides',
    c: 'Increasing tillage to improve soil'
  },
  answer: 'b'
},
{
  question: 'What is the primary advantage of drip irrigation?',
  options: {
    a: 'High water loss through evaporation',
    b: 'Water is delivered directly to roots with minimal waste',
    c: 'It floods the field thoroughly'
  },
  answer: 'b'
},
{
  question: 'Green manures mainly help by:',
  options: {
    a: 'Degrading soil texture',
    b: 'Adding nutrients and improving soil fertility when plowed back',
    c: 'Increasing pesticide usage'
  },
  answer: 'b'
},
{
  question: 'What is vermicomposting?',
  options: {
    a: 'Using earthworms to convert organic waste into nutrient-rich compost',
    b: 'Burning waste to create soil amendments',
    c: 'Drying waste under the sun'
  },
  answer: 'a'
},
{
  question: 'Which farming technique reduces water evaporation from soil?',
  options: {
    a: 'Leaving soil bare',
    b: 'Mulching with organic material',
    c: 'Using chemical sprays'
  },
  answer: 'b'
},
{
  question: 'Why is reducing tillage beneficial for soil?',
  options: {
    a: 'It destroys soil structure',
    b: 'It preserves soil microbes and reduces erosion',
    c: 'It increases fuel consumption'
  },
  answer: 'b'
}
];

// Holds the currently rendered quiz selection and answers
let currentQuiz = {
  questions: [], // array of objects from questionsPool
  answers: {}    // map q{i} -> correct option key
};

let farmerData = null;

$(document).ready(function() {
  loadFarmerData();
  renderQuiz();
});

function loadFarmerData() {
  const data = localStorage.getItem('farmerData');
  if (data) {
    farmerData = JSON.parse(data);
  } else {
    window.location.href = 'index.html';
  }
}

function saveFarmerData() {
  localStorage.setItem('farmerData', JSON.stringify(farmerData));
}

function renderQuiz() {
  // Sample 5 random unique questions
  const shuffled = [...questionsPool].sort(() => Math.random() - 0.5);
  currentQuiz.questions = shuffled.slice(0, 5);
  currentQuiz.answers = {};

  let quizBody = '';
  currentQuiz.questions.forEach((q, idx) => {
    const qName = `q${idx + 1}`;
    currentQuiz.answers[qName] = q.answer;
    quizBody += `
      <div class="border-2 border-emerald-200 rounded-xl p-6">
        <p class="font-bold text-lg text-emerald-800 mb-4">${idx + 1}. ${q.question}</p>
        <div class="space-y-2">
          ${Object.entries(q.options).map(([key, text]) => `
            <label class=\"flex items-center gap-3 cursor-pointer hover:bg-emerald-50 p-3 rounded-lg\">
              <input type=\"radio\" name=\"${qName}\" value=\"${key}\" class=\"w-5 h-5\"> 
              <span>${text}</span>
            </label>
          `).join('')}
        </div>
      </div>
    `;
  });

  const quizHtml = `
    <form id="quizForm">
      <div class="space-y-6">${quizBody}</div>
      <button type="submit" class="w-full mt-8 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xl py-4 rounded-lg transition-all transform hover:scale-103">
        Submit Quiz 📝
      </button>
    </form>
  `;

  $('#quizSection').html(quizHtml).removeClass('hidden');
  $('#resultSection').addClass('hidden').empty();

  $('#quizForm').submit(function(e) {
    e.preventDefault();
    submitQuiz();
  });
}

function submitQuiz() {
  let correctAnswers = 0;
  const totalQuestions = currentQuiz.questions.length;

  for (let i = 1; i <= totalQuestions; i++) {
    const qName = `q${i}`;
    const answer = $(`input[name="${qName}"]:checked`).val();
    if (!answer) {
      alert('Please answer all questions before submitting!');
      return;
    }
    if (answer === currentQuiz.answers[qName]) {
      correctAnswers++;
    }
  }

  const score = (correctAnswers / totalQuestions) * 100;

  $('#quizSection').fadeOut(500, function() {
    displayResults(score, correctAnswers, totalQuestions);
  });
}

function displayResults(score, correctAnswers, totalQuestions) {
  let earnedXP = 0;
  let earnedCoins = 0;
  let resultIcon = '';
  let resultTitle = '';
  let resultMessage = '';

  if (score >= 70) {
    earnedXP = 100;
    earnedCoins = 50;
    resultIcon = '🏆';
    resultTitle = 'Excellent Work!';
    resultMessage = `You scored ${score}%! You've earned the Knowledge Badge and bonus rewards!`;

    farmerData.xp += earnedXP;
    farmerData.coins += earnedCoins;

    if (!farmerData.badges.includes('knowledge-badge')) {
      farmerData.badges.push('knowledge-badge');
    }

    if (!farmerData.hasCompletedQuiz) {
      farmerData.hasCompletedQuiz = true;
    }

    saveFarmerData();

    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 }
    });
  } else {
    resultIcon = '📚';
    resultTitle = 'Keep Learning!';
    resultMessage = `You scored ${score}%. You need at least 70% to earn the Knowledge Badge. Try again!`;
    earnedXP = Math.floor(score / 2);
    earnedCoins = Math.floor(score / 4);

    if (earnedXP > 0) {
      farmerData.xp += earnedXP;
      farmerData.coins += earnedCoins;
      saveFarmerData();
    }
  }

  const resultHtml = `
    <div class="text-6xl mb-4">${resultIcon}</div>
    <h3 class="text-3xl font-bold mb-4" style="color: ${score >= 70 ? '#059669' : '#d97706'}">${resultTitle}</h3>
    <p class="text-xl text-gray-600 mb-6">${resultMessage}</p>
    <div class="flex justify-center gap-6 mb-6">
      <div class="bg-yellow-100 rounded-xl p-6">
        <p class="text-3xl font-bold text-yellow-600">${earnedCoins}</p>
        <p class="text-gray-600">🪙 Coins Earned</p>
      </div>
      <div class="bg-emerald-100 rounded-xl p-6">
        <p class="text-3xl font-bold text-emerald-600">${earnedXP}</p>
        <p class="text-gray-600">⚡ XP Earned</p>
      </div>
    </div>
    <button id="retakeQuiz" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-3 rounded-lg">
      Retake Quiz
    </button>
  `;

  $('#resultSection').html(resultHtml);
  $('#resultSection').fadeIn(500);

  $('#retakeQuiz').click(function() {
    $('#resultSection').addClass('hidden');
    $('#quizSection').removeClass('hidden').hide().fadeIn(300);
    renderQuiz();
  });
}
