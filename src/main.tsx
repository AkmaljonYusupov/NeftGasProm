// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'; // ← bu qatorni qo'shing
import App from './App.tsx'
import "./i18n/i18n.ts"; // i18n konfiguratsiyasini import qilish
import './index.css'; // agar bor bo'lsa

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>           {/* ← butun App ni shu ichiga o'rang */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)