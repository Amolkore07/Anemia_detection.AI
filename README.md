# HerHealth: Non-Invasive AI Anemia Screening System

HerHealth is an automated, non-invasive anemia screening system designed to assess anemia risk using deep learning. The platform analyzes photographic images of the palpebral conjunctiva (inner lower eyelid) or fingernail beds to provide instant risk classification, estimated hemoglobin levels, and clinical recommendations.

The architecture comprises a React-based single-page web interface integrated with a Flask REST backend serving a Convolutional Neural Network (CNN) trained with TensorFlow/Keras.

---

## Architecture Overview

1. **Client Interface (Frontend)**
   - Framework: React 18, Vite, TailwindCSS
   - Responsibilities: User interface, conjunctiva image capture/upload, clinical symptom logging, and reporting.

2. **Inference Engine (Backend)**
   - Framework: Python Flask, Flask-CORS
   - Framework Engine: TensorFlow / Keras, Pillow, NumPy
   - Model: `model_anemia.h5` (Convolutional Neural Network)
   - Input: Preprocessed RGB image (64x64 pixels)
   - Output: Binary classification (`Anemic` or `Non-Anemic`) and confidence score.

---

## Project Structure

```text
anemia_app/
├── app.py                  # Flask REST API backend
├── model_anemia.h5         # Trained Keras model weights
├── requirements.txt        # Python backend dependencies
├── package.json            # Node.js frontend dependencies
├── vite.config.js          # Vite build configuration
├── tailwind.config.js      # TailwindCSS styling configuration
├── index.html              # Web entry HTML
├── public/                 # Static web assets
│   └── favicon.svg
├── src/
│   ├── App.jsx             # Client routing configuration
│   ├── main.jsx            # React root mount
│   ├── index.css           # Global CSS styles
│   ├── components/         # Reusable UI components
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── constants/          # Medical thresholds and symptom definitions
│   │   └── anemiaData.js
│   ├── pages/              # Application views
│   │   ├── Home.jsx        # Landing and informational view
│   │   ├── Screening.jsx   # Image upload and symptom collection
│   │   └── Result.jsx      # Diagnostic report and triage guidance
│   └── utils/
│       └── api.js          # HTTP client for Flask /predict API
├── .env.example            # Environment variables configuration template
└── .gitignore              # Git ignore configuration
```

---

## Prerequisites

Ensure the following runtimes are installed on your system:

- **Node.js**: Version 18.0.0 or higher
- **Python**: Version 3.10 to 3.12 (TensorFlow requires Python <= 3.12 on Windows)
- **Git**

---

## Installation

### 1. Clone Repository
```bash
git clone https://github.com/YOUR_USERNAME/anemia_app.git
cd anemia_app
```

### 2. Frontend Setup
Install the Node dependencies:
```bash
npm install
```

### 3. Backend Setup
Set up a Python virtual environment and install the required machine learning and web packages:

**Windows (PowerShell):**
```powershell
# Using Python 3.12
py -3.12 -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
```

**Linux / macOS:**
```bash
python3.12 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

---

## Running the Servers

The application requires both the Python Flask backend and the React Vite development server to run concurrently.

### Step 1: Start Backend Server (Flask)

Open Terminal 1:

**Windows:**
```powershell
.\.venv\Scripts\python.exe app.py
```

**Linux / macOS:**
```bash
source .venv/bin/activate
python app.py
```

- Backend URL: `http://127.0.0.1:5000`
- Model `model_anemia.h5` will be loaded into memory automatically upon initialization.

### Step 2: Start Frontend Server (Vite)

Open Terminal 2:

```bash
npm run dev
```

- Frontend URL: `http://localhost:5173`

Navigate to `http://localhost:5173` in a web browser to use the application.

---

## API Specification

### Endpoint: Predict Anemia Risk

- **URL:** `/predict`
- **Method:** `POST`
- **Content-Type:** `multipart/form-data`

#### Request Body
| Parameter | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `image` | Binary File | Yes | Photographic image of palpebral conjunctiva or nailbed (JPEG/PNG). |

#### Response Format (`200 OK`)
```json
{
  "result": "Non-Anemic",
  "confidence": 67.41
}
```

#### Error Response (`400 Bad Request`)
```json
{
  "error": "No image file provided"
}
```

---

## Production Build

To build the client interface for static deployment:

```bash
npm run build
```

Production output will be generated in the `dist/` directory.

---

## Medical Disclaimer

This software is an experimental decision-support and screening prototype. It is intended solely for research, triage, and educational purposes and does not constitute formal clinical diagnosis. Blood laboratory testing (Complete Blood Count) administered by licensed medical practitioners remains the standard for diagnostic confirmation.
