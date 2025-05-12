
---

# 📊 Real-time Sentiment Analysis Dashboard

A real-time dashboard that ingests live tweets or product reviews, analyzes their sentiment using NLP, and visualizes sentiment trends and scores dynamically.

---

## 🚀 Features

- 🧠 Real-time **Sentiment Scoring** with NLP
- 📈 Live **Data Visualization** of sentiment trends and polarity
- 🕒 **Historical Sentiment Analysis** for comparative insights
- 🔁 Built on robust **streaming architecture** using Kafka
- 🧰 Fully **containerized** for consistent deployments

---

## 🛠️ Tech Stack

- 🐍 **Python (TextBlob)** – Sentiment analysis
- 🔄 **Apache Kafka** – Real-time data streaming
- 🌐 **Node.js + Express** – Backend REST API
- ⚛️ **React** – Interactive frontend (Vite-powered)
- 🐳 **Docker** – Containerized setup for all services




---

## ⚙️ Setup Instructions

### 🧠 NLP Producer (Python + Kafka)

```bash
pip install kafka-python textblob
python producer.py
````

> Produces real-time sentiment-scored data to Kafka topic

---

### 📡 Backend (Node.js + Express)

```bash
cd backend
npm install
npm start
```

> Serves API endpoints to frontend and bridges Kafka consumer

---

### 🖥️ Frontend (React + Vite)

```bash
npm create vite@latest frontend -- --template react
cd frontend
npm install axios
npm run dev
```

> Visit: `http://localhost:5173` to view the live dashboard

---

## 🧪 Example Workflow

1. `producer.py` fetches live tweets/reviews → sends to Kafka
2. Kafka Consumer (in backend) scores sentiment → stores/analyzes data
3. Frontend fetches API data → renders real-time visualizations

---

## 📬 Contact

Crafted by [Hasvanth Kalyan Gundu](https://www.linkedin.com/in/hasvanth-kalyan-g-13538a148)
📧 [hasvanthkalyan9@gmail.com](mailto:hasvanthkalyan9@gmail.com)

---

## 🙌 Contributions Welcome!

* Add more advanced NLP models (e.g., HuggingFace transformers)
* Enhance charting (e.g., D3.js, Chart.js)
* Expand data sources (Reddit, product APIs, etc.)

---

