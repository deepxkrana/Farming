const badgeInfo = {
  'compost': { icon: '🌿', name: 'Compost Master' },
  'rainwater': { icon: '💧', name: 'Water Saver' },
  'organic-pest': { icon: '🐞', name: 'Pest Controller' },
  'crop-rotation': { icon: '🔄', name: 'Crop Rotator' },
  'water-efficient': { icon: '💦', name: 'Water Efficient' },
  'tree-planting': { icon: '🌳', name: 'Tree Planter' },
  'knowledge-badge': { icon: '📚', name: 'Knowledge Expert' }
};

const farmingFacts = [
  "Composting can reduce household waste by up to 30%!",
  "Rainwater harvesting can save up to 40% of water usage on farms.",
  "Crop rotation has been practiced for over 8,000 years.",
  "One mature tree can absorb up to 48 pounds of CO2 per year.",
  "Organic farming uses 45% less energy than conventional farming.",
  "Cover crops can increase soil organic matter by 1% in just 5 years.",
  "Drip irrigation is 90% efficient compared to 65% for sprinkler systems.",
  "Beneficial insects can reduce pest populations by up to 80%."
];

const dummyPosts = [
  "Just harvested my first organic tomatoes! The taste is incredible! 🍅",
  "Started my composting bin today. Excited to reduce waste! ♻️",
  "Installed a rainwater collection system. Every drop counts! 💧",
  "My crop rotation plan is working great. Soil health improved! 🌱",
  "Planted 5 new trees around the farm. Future looking green! 🌳",
  "Switched to drip irrigation. Water bill already decreasing! 💦",
  "Found ladybugs in my garden. Natural pest control at work! 🐞",
  "Made my first batch of compost tea. Plants love it! ☕",
  "Learning so much from this community. Thank you all! 🙏",
  "My sustainable farm is thriving. Small steps make a difference! 🌾"
];

const farmerNames = [
  "Green Thumb Gary",
  "Organic Olivia",
  "Sustainable Sam",
  "Eco-friendly Emma",
  "Harvest Hannah",
  "Farmer Fred",
  "Nature Nancy",
  "Bio Bob",
  "Earth Eddie",
  "Garden Grace"
];

let farmerData = null;
let posts = [];

$(document).ready(function() {
  loadFarmerData();
  loadPosts();
  displayBadges();
  displayFarmingFact();
  displayFeed();
  setupEventListeners();
  startDummyPostGenerator();
});

function loadFarmerData() {
  const data = localStorage.getItem('farmerData');
  if (data) {
    farmerData = JSON.parse(data);
  } else {
    window.location.href = 'index.html';
  }
}

function loadPosts() {
  const savedPosts = localStorage.getItem('communityPosts');
  if (savedPosts) {
    posts = JSON.parse(savedPosts);
  }
}

function savePosts() {
  localStorage.setItem('communityPosts', JSON.stringify(posts));
}

function setupEventListeners() {
  $('#postBtn').click(function() {
    createPost();
  });

  $('#postInput').keypress(function(e) {
    if (e.which === 13 && e.ctrlKey) {
      createPost();
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

function createPost() {
  const content = $('#postInput').val().trim();
  if (!content) {
    alert('Please write something to post!');
    return;
  }

  const post = {
    id: Date.now(),
    author: farmerData.name,
    content: content,
    timestamp: new Date().toISOString(),
    likes: 0,
    isUserPost: true
  };

  posts.unshift(post);
  savePosts();
  $('#postInput').val('');
  displayFeed();
}

function createDummyPost() {
  const content = dummyPosts[Math.floor(Math.random() * dummyPosts.length)];
  const author = farmerNames[Math.floor(Math.random() * farmerNames.length)];

  const post = {
    id: Date.now() + Math.random(),
    author: author,
    content: content,
    timestamp: new Date().toISOString(),
    likes: Math.floor(Math.random() * 20),
    isUserPost: false
  };

  posts.unshift(post);
  savePosts();
  displayFeed();
}

function displayFeed() {
  const container = $('#feedContainer');
  container.empty();

  if (posts.length === 0) {
    container.append(`
      <div class="bg-white rounded-xl p-8 text-center text-gray-500">
        <p class="text-xl">No posts yet. Be the first to share!</p>
      </div>
    `);
    return;
  }

  posts.forEach(post => {
    const postTime = getTimeAgo(new Date(post.timestamp));
    const postCard = $(`
      <div class="post-item bg-white rounded-xl shadow-lg p-6">
        <div class="flex items-start gap-4">
          <div class="bg-emerald-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
            ${post.author.charAt(0).toUpperCase()}
          </div>
          <div class="flex-1">
            <div class="flex justify-between items-start mb-2">
              <div>
                <h4 class="font-bold text-emerald-700">${post.author}${post.isUserPost ? ' (You)' : ''}</h4>
                <p class="text-sm text-gray-500">${postTime}</p>
              </div>
            </div>
            <p class="text-gray-700 mb-4">${post.content}</p>
            <div class="flex gap-4">
              <button class="like-btn flex items-center gap-2 text-gray-600 hover:text-red-500 transition-all" data-post-id="${post.id}">
                <span class="text-xl">❤️</span>
                <span class="like-count">${post.likes}</span>
              </button>
              <button class="flex items-center gap-2 text-gray-600 hover:text-emerald-500 transition-all">
                <span class="text-xl">💬</span>
                <span>${Math.floor(Math.random() * 10)}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `);

    postCard.find('.like-btn').click(function() {
      const postId = $(this).data('post-id');
      toggleLike(postId, $(this));
    });

    container.append(postCard);
  });
}

function toggleLike(postId, button) {
  const post = posts.find(p => p.id === postId);
  if (post) {
    post.likes++;
    savePosts();
    button.find('.like-count').text(post.likes);
    button.addClass('sparkle');
    setTimeout(() => {
      button.removeClass('sparkle');
    }, 600);
  }
}

function getTimeAgo(date) {
  const seconds = Math.floor((new Date() - date) / 1000);

  if (seconds < 60) return 'Just now';
  if (seconds < 3600) return Math.floor(seconds / 60) + ' minutes ago';
  if (seconds < 86400) return Math.floor(seconds / 3600) + ' hours ago';
  return Math.floor(seconds / 86400) + ' days ago';
}

function displayBadges() {
  const container = $('#badgesContainer');
  const noBadges = $('#noBadges');
  container.empty();

  if (!farmerData.badges || farmerData.badges.length === 0) {
    noBadges.removeClass('hidden');
    return;
  }

  noBadges.addClass('hidden');

  farmerData.badges.forEach(badgeId => {
    const badge = badgeInfo[badgeId];
    if (badge) {
      const badgeElement = $(`
        <div class="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl p-4 text-center shadow-lg badge-shine transform hover:scale-110 transition-all cursor-pointer" title="${badge.name}">
          <div class="text-4xl mb-2">${badge.icon}</div>
          <p class="text-xs font-semibold text-yellow-800">${badge.name}</p>
        </div>
      `);
      container.append(badgeElement);
    }
  });
}

function displayFarmingFact() {
  const fact = farmingFacts[Math.floor(Math.random() * farmingFacts.length)];
  $('#farmingFact').text(fact);
}

function startDummyPostGenerator() {
  setInterval(() => {
    if (Math.random() > 0.5) {
      createDummyPost();
    }
  }, 15000);
}
