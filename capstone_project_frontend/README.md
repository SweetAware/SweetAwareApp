# 🍬 SweetAware App

SweetAware is a comprehensive web application designed to help users monitor and manage diabetes risk through advanced predictive analytics and educational resources.

![SweetAware App](src/assets/images/Hero-img.png)

## ✨ Features

- 🔍 **Diabetes Risk Prediction**

  - Advanced diagnostic tool for diabetes risk assessment
  - Detailed prediction results with risk level indicators
  - Historical prediction tracking

- 📚 **Educational Resources**

  - Comprehensive articles about diabetes management
  - Interactive educational content
  - Tips and best practices for diabetes prevention

- 📊 **Dashboard Analytics**

  - Personalized user dashboard
  - Visual representation of health metrics
  - Prediction history tracking

- 👤 **User Profile Management**

  - Customizable user profiles
  - Secure authentication system
  - Personal health information management

- 📱 **Responsive Design**
  - Seamless experience across desktop and mobile devices
  - Dark mode support
  - Intuitive user interface

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/SweetAwareApp.git
   cd SweetAwareApp/capstone_project_frontend
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file in the project root and configure your environment variables:

   ```env
   VITE_API_BASE_URL=your_backend_api_url
   ```

4. Start the development server:

   ```sh
   npm run dev
   ```

5. Build for production:
   ```sh
   npm run build
   ```

## 🛠️ Tech Stack

- **Frontend Framework:** Vue.js 3
- **Build Tool:** Vite
- **UI Components:**
  - Headless UI
  - Hero Icons
  - TailwindCSS
- **State Management:** Pinia
- **Charts:** Chart.js with Vue-ChartJS
- **Animations:**
  - GSAP
  - Framer Motion
  - VueUse Motion
- **HTTP Client:** Axios
- **Notifications:** SweetAlert2

## 📦 Project Structure

```
src/
├── assets/          # Static assets (images, icons, CSS)
├── components/      # Reusable Vue components
├── models/         # Data models
├── presenters/     # Presenters for handling business logic
├── router/         # Vue Router configuration
├── services/       # API and other services
├── stores/         # Pinia stores
├── utils/          # Utility functions
└── views/          # Page components
```

## 🔑 Key Features Implementation

### Diabetes Risk Prediction

The application uses a sophisticated algorithm to assess diabetes risk based on various health parameters. Users can:

- Input health metrics
- Receive instant risk assessment
- View detailed analysis
- Track historical predictions

### Educational Content

Access to comprehensive diabetes-related information:

- Articles on diabetes management
- Prevention tips
- Lifestyle recommendations
- Expert insights

### User Dashboard

Personal dashboard featuring:

- Risk assessment history
- Health metrics visualization
- Progress tracking
- Customizable views

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Contact

If you have any questions or suggestions, please feel free to reach out through the contact form in the application or create an issue in the repository.

---

Made with ❤️ by [Your Team Name]
