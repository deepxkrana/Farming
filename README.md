# 🌾 FarmQuest

**FarmQuest** is a gamified web application designed to promote sustainable farming practices through interactive challenges, educational content, and community engagement. Built as an educational platform, it helps users learn about eco-friendly agriculture while earning rewards and tracking their progress.

## ✨ Features

### 🎮 Gamification System
- **XP & Leveling**: Earn experience points and level up by completing challenges
- **Virtual Currency**: Collect coins as rewards for achievements
- **Progress Tracking**: Visual progress bars and statistics dashboard
- **Leaderboard**: Compete with other farmers on the global leaderboard

### 🌱 Farm Challenges
Interactive challenges covering sustainable farming practices:
- Composting techniques
- Rainwater harvesting
- Crop rotation strategies
- Organic pest control
- Mulching benefits
- Cover crops management
- Soil testing
- Precision farming tools
- Greenhouse farming
- Weed management
- Drip irrigation
- Agroforestry

### 📚 Knowledge Center
- **Interactive Quiz**: Test your knowledge about sustainable farming
- **Flip Cards**: Hover over cards to reveal detailed farming tips
- **Educational Content**: Learn best practices for eco-friendly agriculture

### 👥 Community Features
- **Social Feed**: Share farming progress and achievements
- **Badge System**: Unlock badges for completing challenges
- **Farming Facts**: Discover interesting facts about sustainable agriculture
- **User Profiles**: Track personal achievements and badges

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Farm
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in terminal)

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 🏗️ Project Structure

```
Farm/
├── index.html           # Landing page with animated intro
├── dashboard.html       # Main dashboard with challenges
├── knowledge.html       # Educational content and quiz
├── community.html       # Community feed and achievements
├── js/
│   ├── dashboard.js     # Dashboard functionality
│   ├── quiz.js          # Quiz logic
│   └── community.js     # Community features
├── public/              # Static assets (images, audio)
├── package.json         # Project dependencies
└── vercel.json         # Deployment configuration
```

## 🎨 Tech Stack

- **Frontend Framework**: Vanilla JavaScript with jQuery
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Animations**: Custom CSS animations with Canvas Confetti
- **Storage**: LocalStorage for user data persistence
- **Deployment**: Vercel

## 🎯 How to Use

1. **Enter Your Name**: Start by entering your farmer name on the landing page
2. **Explore Challenges**: Browse through various sustainable farming challenges
3. **Complete Tasks**: Click on challenges to view tasks and start them
4. **Earn Rewards**: Collect XP and coins for completing challenges
5. **Learn**: Visit the Knowledge Center to take quizzes and learn farming tips
6. **Share**: Post your achievements on the community feed

## 💾 Data Persistence

FarmQuest uses browser LocalStorage to save:
- User profiles and names
- XP and coin counts
- Completed challenges
- Earned badges
- Quiz completion status

## 🎮 Gameplay Mechanics

- **XP System**: Each challenge awards XP (ranging from 25 to 100 XP)
- **Coin System**: Earn coins (10-50) alongside XP
- **Level Progression**: Level up every 100 XP
- **Achievements**: Unlock badges by completing specific challenges
- **Leaderboard**: Rankings based on total XP earned

## 🌐 Deployment

This project is configured for deployment on Vercel:

```bash
# Deploy to Vercel
vercel
```

The `vercel.json` configuration ensures proper build and deployment settings.

## 🎨 Customization

### Adding New Challenges

Edit `js/dashboard.js` and add to the `challenges` array:

```javascript
{
  id: 13,
  title: "New Challenge",
  icon: "🌿",
  description: "Challenge description",
  xp: 50,
  coins: 20,
  tasks: ["Task 1", "Task 2"],
  completed: false
}
```

### Adding Quiz Questions

Edit `js/quiz.js` and add to the `questions` array:

```javascript
{
  question: "Your question?",
  options: ["Option A", "Option B", "Option C", "Option D"],
  correct: 0 // Index of correct answer
}
```

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is created for educational purposes as part of INT219 coursework.

## 👨‍💻 Author

**Deepak Rana**

## 🙏 Acknowledgments

- Tailwind CSS for styling
- Canvas Confetti for celebration effects
- jQuery for DOM manipulation
- Vite for build tooling
- Sustainable farming community for inspiration

## 📧 Contact

For questions or feedback, please reach out through the project repository.

---

**🌍 Building a sustainable future, one farm at a time**
