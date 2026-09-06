# HerHealth — AI Anemia Screening App

An AI-powered, non-invasive anemia screening web application designed for adolescent girls and rural communities. By analyzing images of the lower conjunctiva (eyelid) or fingernails, HerHealth offers fast risk assessment and guidance without invasive blood testing.

---

## 🌟 Key Features

- **Non-Invasive Vision AI**: Leverages computer vision models to detect paleness in fingernails and conjunctiva.
- **Symptom Cross-Check**: Screen with common anemia symptoms (fatigue, dizziness, pale skin, etc.).
- **Immediate Triage**: Categorizes results into Low, Moderate, or High Risk with estimated hemoglobin ranges and recommended medical next steps.
- **Responsive & Lightweight**: Built with Vite and TailwindCSS for ultra-fast load times on mobile and low-bandwidth networks.

---

## 📁 Project Structure

```text
anemia_app/
├── public/                 # Static assets (favicons, icons)
│   └── favicon.svg
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── constants/          # Application data & mapping configs
│   │   └── anemiaData.js
│   ├── pages/              # Application views
│   │   ├── Home.jsx        # Landing page
│   │   ├── Screening.jsx   # Photo upload & symptom checklist
│   │   └── Result.jsx      # AI assessment & clinical guidance
│   ├── utils/              # API and helper utilities
│   │   └── roboflow.js     # Roboflow inference integration
│   ├── App.jsx             # React routing setup
│   ├── index.css           # Global Tailwind styling
│   └── main.jsx            # React root entry point
├── .env.example            # Environment variables template
├── .gitignore              # Git ignore rules
├── index.html              # HTML entry point
├── package.json            # Dependencies and scripts
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # TailwindCSS styling configuration
└── vite.config.js          # Vite build configuration
```

---

## 🚀 Getting Started

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- `npm` or `yarn`

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/anemia_app.git

# Navigate into the project directory
cd anemia_app

# Install dependencies
npm install
```

### 3. Environment Variables
Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

Add your Roboflow API key in `.env`:
```env
VITE_ROBOFLOW_API_KEY=your_actual_roboflow_api_key
```

### 4. Run Development Server
```bash
npm run dev
```

### 5. Build for Production
```bash
npm run build
```

---

## ⚠️ Medical Disclaimer
*HerHealth is an AI-assisted screening tool intended for early risk detection and educational use. It does not provide a definitive medical diagnosis. Always consult a certified healthcare professional or visit a Primary Health Centre (PHC) for clinical blood testing.*
