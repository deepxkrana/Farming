const challenges = [
  {
    id: 'compost',
    icon: '🌿',
    title: 'Composting Waste',
    description: 'Turn organic waste into nutrient-rich compost for your farm. Learn proper composting techniques and reduce waste!',
    xp: 50,
    coins: 20
  },
  {
    id: 'rainwater',
    icon: '💧',
    title: 'Rainwater Harvesting',
    description: 'Collect and store rainwater for irrigation. Save water resources and reduce your environmental impact!',
    xp: 60,
    coins: 25
  },
  {
    id: 'organic-pest',
    icon: '🐞',
    title: 'Organic Pest Control',
    description: 'Use natural methods to control pests without harmful chemicals. Protect your crops and the environment!',
    xp: 55,
    coins: 22
  },
  {
    id: 'crop-rotation',
    icon: '🔄',
    title: 'Crop Rotation',
    description: 'Rotate your crops to maintain soil health and prevent pest buildup. Improve long-term farm productivity!',
    xp: 65,
    coins: 28
  },
  {
    id: 'water-efficient',
    icon: '💦',
    title: 'Efficient Water Use',
    description: 'Implement drip irrigation and water-saving techniques. Conserve precious water resources!',
    xp: 70,
    coins: 30
  },
  {
    id: 'tree-planting',
    icon: '🌳',
    title: 'Tree Planting',
    description: 'Plant trees around your farm to prevent soil erosion and create habitats. Build a sustainable ecosystem!',
    xp: 80,
    coins: 35
  }
];

const leaderboardData = [
  { name: 'Mahesh Dalle', xp: 850 },
  { name: 'Sydney Soony', xp: 720 },
  { name: 'Kiirish', xp: 680 },
  { name: 'Santosh Pagal', xp: 590 },
  { name: 'kallu kaliya', xp: 520 }
];

let farmerData = null;
let selectedChallenge = null;

$(document).ready(function() {
  loadFarmerData();
  displayProfile();
  displayChallenges();
  displayLeaderboard();
  setupEventListeners();
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
      <div class="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all cursor-pointer ${isCompleted ? 'opacity-60' : ''}" data-challenge-id="${challenge.id}">
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
  });

  $('#startChallenge').click(function() {
    completeChallenge(selectedChallenge);
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

  const allPlayers = [...leaderboardData, { name: farmerData.name, xp: farmerData.xp }];
  allPlayers.sort((a, b) => b.xp - a.xp);

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
