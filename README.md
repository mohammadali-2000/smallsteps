<p align="center">
  <br>
  <img src="frontend/public/favicon.png" alt="Smallsteps Logo" width="100"/>
  <br>
  <b>Building the Future of Open HealthTech. One Small Step at a Time.</b>
</p>

# Smallsteps 🚀

Smallsteps is an early-stage Open HealthTech initiative, software development studio, and developer community. This repository contains the complete MVP platform, including a modern React frontend and a robust Spring Boot Java backend.

## 🎯 Mission
Our mission is to build healthcare technology, modern software solutions, and foster open-source innovation. We believe in taking small, impactful steps toward a healthier, more connected future.

## ✨ Features
- **Dark Mode Modern UI:** Designed with Tailwind CSS v4 and Framer Motion.
- **Community Applications:** Open-source developers can apply to join our community.
- **Mock Interviews:** Free role-specific technical mock interviews for aspiring engineers.
- **Service Inquiries:** A full professional contact portal for prospective clients.
- **Robust Backend:** Secure Spring Boot Java API connected to PostgreSQL.

---

## 🛠️ Technology Stack

### Frontend (`/frontend`)
- **Framework**: React 18 & Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM

### Backend (`/backend`)
- **Framework**: Spring Boot 3.3
- **Language**: Java 21
- **Database ORM**: Spring Data JPA & Hibernate
- **Database**: PostgreSQL (Supabase)

---

## 💻 Local Setup Instructions

### Prerequisites
- Node.js (v18+)
- Java JDK 21
- Maven (included via `./mvnw`)

### 1. Setup Environment Variables
Duplicate the `.env.example` files in both directories to `.env`:
```bash
cp frontend/.env.example frontend/.env
cp backend/.env.example backend/.env
```
Ensure you add your actual Supabase Database credentials to `backend/.env`.

### 2. Start the Backend
Open a terminal and navigate to the backend directory:
```bash
cd backend
./mvnw clean compile
./mvnw spring-boot:run
```
The backend will automatically create the required database tables (`contacts`, `community_applications`, `mock_interview_requests`) and run on `http://localhost:8080`.

### 3. Start the Frontend
Open a new terminal and navigate to the frontend directory:
```bash
cd frontend
npm install
npm run dev
```
The frontend will be available at `http://localhost:5173`.

---

## 🚀 Deployment Instructions

### Frontend (Vercel)
1. Import this repository into Vercel.
2. Select the `/frontend` directory as the Root Directory.
3. Add the `VITE_API_URL` environment variable (e.g., `https://your-backend.onrender.com`).
4. Deploy!

### Backend (Render / AWS)
1. Import this repository into Render as a Web Service.
2. Select the `/backend` directory as the Root Directory.
3. Build command: `./mvnw clean package -DskipTests`
4. Start command: `java -jar target/backend-0.0.1-SNAPSHOT.jar`
5. Add your `SUPABASE_URL`, `SUPABASE_USER`, and `SUPABASE_PASSWORD` environment variables.
6. Set `ALLOWED_ORIGINS` to your Vercel frontend URL.
7. Deploy!

---

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
