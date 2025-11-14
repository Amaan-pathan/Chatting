# 🤖 AI Chatbot — Powered by Google Gemini API

An intelligent, conversational AI chatbot built using the **Google Gemini API** and **Assistant UI Library**.  
This project provides a **ChatGPT-like experience** with a modern, minimal, and responsive interface — built entirely with **React**.

---

## 🚀 Features

- 💬 Chat with an AI model powered by **Google Gemini API**
- ⚡ Smooth and interactive **Assistant UI**
- 🧠 Context-aware conversations
- 🎨 Clean and modern design (fully customizable)
- 🔉 (Optional) Voice and image generation integration support
- 🧩 Easy to extend and integrate into your own applications

---

## 🛠️ Tech Stack

- **Frontend:** Next.js, Assistant UI Library  
- **Backend:** Node.js (optional if using Gemini API directly)
- **API:** Google Gemini API Key  
- **Language:** JavaScript (ES6+)

---

## 🔐 Environment Setup

1. Create a `.env.local` file (or add an Environment Variable on Vercel) with your Gemini key:
   ```
   GOOGLE_GENERATIVE_AI_API_KEY=your_gemini_api_key
   ```
   `GEMINI_API_KEY` or `NEXT_PUBLIC_GEMINI_API_KEY` can also be used if you already expose the key under those names.
2. Restart the dev server (`npm run dev`) so Next.js can load the vars.
3. On Vercel, set the same variable under **Project Settings → Environment Variables** and redeploy.

---

# Chatting
