const challenges = [
  {
    id: 'compost',
    icon: '🌿',
    title: 'Composting Waste',
    description: 'Turn organic waste into nutrient-rich compost for your farm. Learn proper composting techniques and reduce waste!',
    xp: 50,
    coins: 20,
    tasks: [
      'Collect kitchen scraps and dry leaves',
      'Layer greens and browns properly',
      'Turn the compost pile once'
    ]
  },
  {
    id: 'rainwater',
    icon: '💧',
    title: 'Rainwater Harvesting',
    description: 'Collect and store rainwater for irrigation. Save water resources and reduce your environmental impact!',
    xp: 60,
    coins: 25,
    tasks: [
      'Set up gutters or collection surface',
      'Place/clean a filter on inlet',
      'Store water in a covered tank'
    ]
  },
  {
    id: 'organic-pest',
    icon: '🐞',
    title: 'Organic Pest Control',
    description: 'Use natural methods to control pests without harmful chemicals. Protect your crops and the environment!',
    xp: 55,
    coins: 22,
    tasks: [
      'Identify beneficial insects',
      'Apply a natural spray (e.g., neem)',
      'Add a companion plant row'
    ]
  },
  {
    id: 'crop-rotation',
    icon: '🔄',
    title: 'Crop Rotation',
    description: 'Rotate your crops to maintain soil health and prevent pest buildup. Improve long-term farm productivity!',
    xp: 65,
    coins: 28,
    tasks: [
      'List last season\'s crops',
      'Plan next crop family',
      'Mark rotation on plot map'
    ]
  },
  {
    id: 'water-efficient',
    icon: '💦',
    title: 'Efficient Water Use',
    description: 'Implement drip irrigation and water-saving techniques. Conserve precious water resources!',
    xp: 70,
    coins: 30,
    tasks: [
      'Fix visible leaks',
      'Mulch around plants',
      'Schedule early-morning watering'
    ]
  },
  {
    id: 'tree-planting',
    icon: '🌳',
    title: 'Tree Planting',
    description: 'Plant trees around your farm to prevent soil erosion and create habitats. Build a sustainable ecosystem!',
    xp: 80,
    coins: 35,
    tasks: [
      'Choose native tree species',
      'Prepare planting pits',
      'Water and mulch after planting'
    ]
  },
  {
    id: 'soil-health',
    icon: '🧑‍🔬',
    title: 'Soil Health Boost',
    description: 'Improve soil structure and fertility through organic amendments and reduced tillage.',
    xp: 60,
    coins: 25,
    tasks: [
      'Collect soil samples for testing',
      'Apply compost to one plot',
      'Record soil moisture before/after'
    ]
  },
  {
    id: 'greenhouse-care',
    icon: '🏡',
    title: 'Greenhouse Care',
    description: 'Optimize greenhouse environment for healthy, high-yield crops.',
    xp: 55,
    coins: 24,
    tasks: [
      'Install/clean shade netting',
      'Check and fix irrigation lines',
      'Ventilate to reduce humidity'
    ]
  },
  {
    id: 'livestock-care',
    icon: '🐄',
    title: 'Livestock Care',
    description: 'Enhance animal welfare with clean water, nutrition, and shelter.',
    xp: 50,
    coins: 22,
    tasks: [
      'Clean water troughs',
      'Prepare balanced feed',
      'Inspect shelters for repairs'
    ]
  },
  {
    id: 'precision-farming',
    icon: '📡',
    title: 'Precision Farming',
    description: 'Use data and sensors to optimize inputs and reduce waste.',
    xp: 70,
    coins: 30,
    tasks: [
      'Check sensor readings (moisture/EC)',
      'Adjust irrigation schedule',
      'Log observations in a notebook'
    ]
  },
  {
    id: 'market-planning',
    icon: '📈',
    title: 'Market Planning',
    description: 'Plan harvest schedules and buyers to reduce post-harvest loss.',
    xp: 45,
    coins: 20,
    tasks: [
      'List top 3 buyers/channels',
      'Estimate harvest window',
      'Arrange transport or storage'
    ]
  },
  {
    id: 'renewable-energy',
    icon: '🔋',
    title: 'Renewable Energy Setup',
    description: 'Explore solar or biogas to power farm operations sustainably.',
    xp: 65,
    coins: 28,
    tasks: [
      'Audit current power usage',
      'Identify solar/biogas site',
      'Get a basic cost estimate'
    ]
  },
  {
    id: 'beekeeping',
    icon: '🐝',
    title: 'Beekeeping Basics',
    description: 'Introduce pollinators for better yields and healthy ecosystems.',
    xp: 55,
    coins: 24,
    tasks: [
      'Identify a safe hive location',
      'Plant bee-friendly flowers',
      'Set up/basic inspect a hive'
    ]
  },
  {
    id: 'compost-tea',
    icon: '☕',
    title: 'Brew Compost Tea',
    description: 'Brew and apply compost tea to boost soil microbes.',
    xp: 50,
    coins: 22,
    tasks: [
      'Gather aerator, bucket, and compost',
      'Brew for 24 hours with aeration',
      'Apply tea to one crop bed'
    ]
  },
  {
    id: 'farm-safety',
    icon: '🦺',
    title: 'Farm Safety Check',
    description: 'Reduce accidents by improving on-farm safety practices.',
    xp: 45,
    coins: 20,
    tasks: [
      'Inspect tools and PPE availability',
      'Clear walkways and mark hazards',
      'Review an emergency contact plan'
    ]
  }
];

function renderTasks(challenge) {
  const list = $('#tasksList');
  list.empty();

  const progress = farmerData.taskProgress[challenge.id];

  (challenge.tasks || []).forEach((task, index) => {
    const item = $(`
      <li class="flex items-center gap-3">
        <input type="checkbox" class="task-checkbox w-5 h-5 accent-emerald-600" data-index="${index}" ${progress[index] ? 'checked' : ''} />
        <span class="text-gray-700">${task}</span>
      </li>
    `);

    item.find('.task-checkbox').change(function() {
      const i = parseInt($(this).data('index'), 10);
      progress[i] = $(this).is(':checked');
      saveFarmerData();
      setStartButtonState(progress.every(Boolean));
    });

    list.append(item);
  });
}

function areAllTasksDone(challengeId) {
  const arr = farmerData.taskProgress?.[challengeId];
  return Array.isArray(arr) && arr.length > 0 && arr.every(Boolean);
}

function setStartButtonState(enabled) {
  const btn = $('#startChallenge');
  if (enabled) {
    btn.prop('disabled', false).removeClass('opacity-50 cursor-not-allowed');
  } else {
    btn.prop('disabled', true).addClass('opacity-50 cursor-not-allowed');
  }
}

// Build leaderboard dynamically from all users saved in localStorage
function getAllFarmersFromStorage() {
  const users = [];
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('farmerData:')) {
        const val = localStorage.getItem(key);
        if (!val) continue;
        try {
          const data = JSON.parse(val);
          if (data && typeof data.name === 'string') {
            users.push({ name: data.name, xp: Number(data.xp) || 0 });
          }
        } catch (_) {
          // ignore bad JSON
        }
      }
    }
  } catch (e) {
    // localStorage not accessible (unlikely here); return current user only
  }
  
  // Add dummy users for a more populated leaderboard
  const dummyUsers = [
    { name: 'GreenThumb Guru', xp: 1250 },
    { name: 'EcoFarmer Max', xp: 980 },
    { name: 'Sustainable Sam', xp: 850 },
    { name: 'Organic Olivia', xp: 720 },
    { name: 'Compost King', xp: 650 },
    { name: 'Rainwater Rita', xp: 580 },
    { name: 'CropMaster Chris', xp: 520 },
    { name: 'SoilScientist Sarah', xp: 450 },
    { name: 'Harvest Hero', xp: 380 },
    { name: 'FarmFresh Frank', xp: 20 }
  ];
  
  users.push(...dummyUsers);
  return users;
}

let farmerData = null;
let selectedChallenge = null;
let challengeStarted = false;

$(document).ready(function() {
  loadFarmerData();
  displayProfile();
  displayChallenges();
  displayLeaderboard();
  setupEventListeners();
});

function loadFarmerData() {
  const currentUser = localStorage.getItem('currentUser');
  if (!currentUser) {
    window.location.href = 'index.html';
    return;
  }
  const userKey = `farmerData:${currentUser}`;
  const data = localStorage.getItem(userKey);
  if (data) {
    farmerData = JSON.parse(data);
  } else {
    window.location.href = 'index.html';
  }
  if (!farmerData.taskProgress) {
    farmerData.taskProgress = {};
    saveFarmerData();
  }
}

function saveFarmerData() {
  const currentUser = localStorage.getItem('currentUser');
  if (!currentUser) return;
  const userKey = `farmerData:${currentUser}`;
  localStorage.setItem(userKey, JSON.stringify(farmerData));
}

function displayProfile() {
  $('#farmerName').text(farmerData.name);
  $('#coinCount').text(farmerData.coins);
  $('#xpCount').text(farmerData.xp);

  const level = calculateLevel(farmerData.xp);
  farmerData.level = level;
  $('#farmerLevel').text(level);

  const xpForNextLevel = level * 100;
  const xpInCurrentLevel = farmerData.xp % 100;
  const progressPercent = (xpInCurrentLevel / 100) * 100;

  $('#currentXP').text(xpInCurrentLevel);
  $('#nextLevelXP').text(100);
  $('#xpBar').css('width', progressPercent + '%');
}

function calculateLevel(xp) {
  return Math.floor(xp / 100) + 1;
}

function displayChallenges() {
  const grid = $('#challengesGrid');
  grid.empty();

  challenges.forEach(challenge => {
    const isCompleted = farmerData.completedChallenges.includes(challenge.id);
    const card = $(`
      <div class="bg-white rounded-3xl shadow-lg p-6 transform hover:scale-105 transition-all cursor-pointer ${isCompleted ? 'opacity-60' : ''}" data-challenge-id="${challenge.id}">
        <div class="text-6xl text-center mb-4">${challenge.icon}</div>
        <h4 class="text-xl font-bold text-emerald-700 mb-2 text-center">${challenge.title}</h4>
        <p class="text-gray-600 text-sm mb-4 text-center">${challenge.description.substring(0, 60)}...</p>
        <div class="flex justify-center gap-4">
          <span class="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold">🪙 ${challenge.coins}</span>
          <span class="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold">⚡ ${challenge.xp}</span>
        </div>
        ${isCompleted ? '<div class="mt-4 text-center text-emerald-600 font-bold">✓ Completed</div>' : ''}
      </div>
    `);

    if (!isCompleted) {
      card.click(function() {
        openChallengeModal(challenge);
      });
    }

    grid.append(card);
  });
}

function openChallengeModal(challenge) {
  selectedChallenge = challenge;
  $('#modalIcon').text(challenge.icon);
  $('#modalTitle').text(challenge.title);
  $('#modalDescription').text(challenge.description);
  $('#modalCoins').text(challenge.coins);
  $('#modalXP').text(challenge.xp);

  // Initial state: tasks hidden until user clicks Start
  challengeStarted = false;
  $('#tasksSection').hide();
  const btn = $('#startChallenge');
  btn.text('Start Challenge 🚀');
  btn.prop('disabled', false).removeClass('opacity-50 cursor-not-allowed');

  // If there is existing task progress for this challenge, restore it and show tasks immediately
  const existing = farmerData.taskProgress?.[challenge.id];
  if (Array.isArray(existing) && existing.length > 0) {
    challengeStarted = true;
    $('#tasksSection').show();
    renderTasks(challenge);
    btn.text('Challenge Complete ✅');
    setStartButtonState(existing.every(Boolean));
  }

  $('#challengeModal').removeClass('hidden');
  setTimeout(() => {
    $('#modalContent').addClass('scale-100');
  }, 10);
}

function setupEventListeners() {
  $('#closeModal').click(function() {
    $('#modalContent').removeClass('scale-100');
    setTimeout(() => {
      $('#challengeModal').addClass('hidden');
    }, 300);
    // reset started state when closing
    challengeStarted = false;
  });

  $('#startChallenge').click(function() {
    const btn = $('#startChallenge');
    if (!challengeStarted) {
      // start phase: reveal tasks and switch button to complete mode
      challengeStarted = true;
      $('#tasksSection').slideDown(200);
      // initialize task progress if first time
      if (!farmerData.taskProgress[selectedChallenge.id]) {
        farmerData.taskProgress[selectedChallenge.id] = new Array(selectedChallenge.tasks?.length || 0).fill(false);
        saveFarmerData();
      }
      renderTasks(selectedChallenge);
      btn.text('Challenge Complete ✅');
      const allDone = areAllTasksDone(selectedChallenge.id);
      setStartButtonState(allDone);
      return;
    }

    // completion phase: only complete if enabled (all tasks done)
    if (!btn.prop('disabled')) {
      completeChallenge(selectedChallenge);
    }
  });

  $('#themeToggle').click(function() {
    $('body').toggleClass('dark');
    if ($('body').hasClass('dark')) {
      $('body').removeClass('bg-gradient-to-br from-emerald-50 to-lime-100')
               .addClass('bg-gradient-to-br from-gray-800 to-gray-900');
    } else {
      $('body').removeClass('bg-gradient-to-br from-gray-800 to-gray-900')
               .addClass('bg-gradient-to-br from-emerald-50 to-lime-100');
    }
  });
}

function completeChallenge(challenge) {
  $('#modalContent').removeClass('scale-100');
  setTimeout(() => {
    $('#challengeModal').addClass('hidden');
  }, 300);

  farmerData.xp += challenge.xp;
  farmerData.coins += challenge.coins;
  farmerData.completedChallenges.push(challenge.id);

  if (!farmerData.badges.includes(challenge.id)) {
    farmerData.badges.push(challenge.id);
  }

  // Clear task progress on completion
  if (farmerData.taskProgress) {
    delete farmerData.taskProgress[challenge.id];
  }

  saveFarmerData();

  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });

  showToast(`+${challenge.xp} XP! +${challenge.coins} Coins!`, 'success');

  setTimeout(() => {
    displayProfile();
    displayChallenges();
    displayLeaderboard();
  }, 500);
}

function showToast(message, type = 'success') {
  const bgColor = type === 'success' ? 'bg-emerald-500' : 'bg-red-500';
  const toast = $(`
    <div class="toast ${bgColor} text-white px-6 py-4 rounded-lg shadow-2xl flex items-center gap-3">
      <span class="text-2xl">${type === 'success' ? '🎉' : '⚠️'}</span>
      <span class="font-bold">${message}</span>
    </div>
  `);

  $('#toastContainer').append(toast);

  setTimeout(() => {
    toast.fadeOut(500, function() {
      $(this).remove();
    });
  }, 3000);
}

function displayLeaderboard() {
  const tbody = $('#leaderboardBody');
  tbody.empty();

  // Gather all saved users
  let allPlayers = getAllFarmersFromStorage();
  // Ensure current user is present/up to date
  const idx = allPlayers.findIndex(u => u.name === farmerData.name);
  if (idx >= 0) {
    allPlayers[idx].xp = farmerData.xp;
  } else {
    allPlayers.push({ name: farmerData.name, xp: farmerData.xp });
  }
  allPlayers = allPlayers.filter(u => typeof u.name === 'string');
  allPlayers.sort((a, b) => (b.xp || 0) - (a.xp || 0));

  const topPlayers = allPlayers.slice(0, 10);

  topPlayers.forEach((player, index) => {
    const isCurrentUser = player.name === farmerData.name;
    const rankEmoji = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '';

    const row = $(`
      <tr class="${isCurrentUser ? 'bg-yellow-100' : 'hover:bg-emerald-50'} border-b border-emerald-100">
        <td class="py-3 px-4 font-bold">${rankEmoji} #${index + 1}</td>
        <td class="py-3 px-4 ${isCurrentUser ? 'font-bold text-emerald-700' : ''}">${player.name}${isCurrentUser ? ' (You)' : ''}</td>
        <td class="py-3 px-4 text-right font-semibold">${player.xp} XP</td>
      </tr>
    `);

    tbody.append(row);
  });
}
