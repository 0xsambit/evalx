# EvalX: Technical Interview Platform

EvalX is a comprehensive platform designed to streamline technical interview processes for both recruiters and candidates. This open-source project provides tools for conducting technical assessments, scheduling interviews, tracking candidate performance, and visualizing geographical insights.

## 🚀 Technologies Used

### Frontend
- **Next.js**: React framework for server-side rendering and static site generation
- **React**: JavaScript library for building user interfaces
- **Tailwind CSS**: Utility-first CSS framework for custom styling
- **React Simple Maps**: For geographical data visualization
- **Recharts**: Composable charting library for data visualization
- **Lucide React**: Icon library with clean, consistent design
- **Shadcn UI**: UI component library for consistent design patterns

### Authentication
- **NextAuth.js**: Authentication solution for Next.js applications
- **Google OAuth**: Authentication provider for seamless login

### Backend
- **Sanity.io**: Headless CMS for content management
- **GROQ**: Graph-Relational Object Queries for Sanity data

### Deployment & Development
- **NPM**: Package management
- **Git**: Version control
- **ESLint**: Static code analysis

## 📋 Features

- **Authentication System**: Secure login with Google OAuth
- **Role-Based Access**: Different dashboards for candidates and recruiters
- **Interview Management**: Schedule, conduct, and review technical interviews
- **Feedback System**: Provide comprehensive feedback to candidates
- **Performance Analytics**: Track candidate performance with statistical insights
- **Geographic Insights**: Visualize candidate distribution globally
- **Profile Management**: Create and maintain detailed user profiles
- **Responsive Design**: Optimized for various screen sizes

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (>= 14.x)
- NPM (>= 6.x)
- Sanity account
- Google Cloud Platform account (for OAuth)

### Environment Variables
Create a `.env.local` file in the root directory with the following variables:

```
NEXTAUTH_URL = http://localhost:3000 
AUTH_SECRET = your_secret_key

Google OAuth
GOOGLE_CLIENT_ID = your_google_client_id 
GOOGLE_CLIENT_SECRET = your_google_client_secret

Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID = your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET = production 
NEXT_PUBLIC_SANITY_API_VERSION = 2024-12-02
```


### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/evalx.git
   cd evalx

   npm install
   ```
# Login to Sanity
``npx sanity login``

# Initialize Sanity studio (if not already done)
``npx sanity init``

``npm run dev``

**Access the application Open your browser and navigate to http://localhost:3000**

# Authentication Flow

Users access the home page and sign in with Google
Based on the user's email, the system checks if they're a candidate or recruiter
The middleware redirects users to the appropriate dashboard
Protected routes ensure only authenticated users can access specific pages

# Data Models

### Candidate
- Personal information (name, email, mobile)
- Profile picture
- Skills and experience level
- Social profiles (LinkedIn, GitHub, Portfolio)
- About section

### Recruiter
- Personal information (name, email, mobile)
- Profile picture
- Company information
- Role

# 🚧 Roadmap & Future Directions

## Short-Term Goals
- Core Features Completion: Finalize authentication, role-based dashboards, interview scheduling, and profile management.

- User Experience Enhancements: Refine UI components, ensure responsiveness, and conduct usability testing.

- Basic AI Integration: Implement simple AI-driven suggestions for candidate feedback based on predefined criteria.

## Mid-Term Goals
- Advanced Interview Analytics: Integrate detailed performance tracking and visualization using Recharts.

- Enhanced Scheduling: Optimize conflict management and integrate with Google Calendar for seamless scheduling.

- Real-Time Collaboration: Improve live coding and video conferencing stability using WebRTC and WebSockets.

- AI-Powered Candidate Preparation: Introduce machine learning algorithms to provide personalized coding challenges and mock interview simulations.

## Long-Term Goals

### Deep AI Integration:

- Automated Feedback & Sentiment Analysis: Leverage Natural Language Processing (NLP) to analyze interview recordings and provide real-time feedback.

- Smart Scheduling Assistant: Develop an AI-driven assistant to suggest optimal interview times based on historical data and user availability.

- Advanced Performance Insights: Use machine learning to predict candidate success and highlight areas of improvement.

- Community-Driven Enhancements: Foster an open-source community to contribute plugins, extensions, and integrations.

- Broader Ecosystem Integration: Connect EvalX with other HR tools and platforms, further streamlining the recruitment process.

## AI Integration Roadmap
- Phase 1: Implement basic AI tools to offer feedback suggestions using rule-based systems.

- Phase 2: Incorporate machine learning models to analyze interview performance data, providing detailed analytics and insights.

- Phase 3: Deploy NLP techniques for sentiment analysis on interview recordings and automated candidate assessments.

- Phase 4: Integrate an AI scheduling assistant that leverages historical data to optimize interview timings and reduce scheduling conflicts.

# Happy coding and thank you for supporting EvalX!
