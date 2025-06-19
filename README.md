# Grab Restaurant (Vite + React + Tailwind + DaisyUI)

โปรเจกต์นี้เป็นเว็บแอปแสดงรายชื่อร้านอาหาร สร้างด้วย React, Vite, TailwindCSS และ DaisyUI  
**ข้อมูลร้านอาหารถูกเก็บไว้ในไฟล์ db.json (ยังไม่ได้ดึงมาใช้จริงในหน้าเว็บ)**

---

## วิธีเริ่มโปรเจกต์

1. สร้างโปรเจกต์ด้วย Vite  
   ```bash
   npm create vite@latest
   # เลือก React
   cd grab-restaurant
   npm install
   ```

2. ติดตั้ง TailwindCSS และ DaisyUI  
   (ในโปรเจกต์นี้เพิ่มไว้ใน dependencies แล้ว)

3. รันโปรเจกต์  
   ```bash
   npm run dev
   ```

---

## โครงสร้างไฟล์

```
src/
│   db.json
│   index.css
│   main.jsx
│
├── assets/
│     react.svg
│
├── components/
│     Card.jsx
│     Navbar.jsx
│     Restaurant.jsx
│
└── pages/
      Home.jsx
```

---

## อธิบายแต่ละไฟล์

### 1. `src/db.json`
เก็บข้อมูลร้านอาหารในรูปแบบ JSON  
**ยังไม่ได้ถูกนำมาใช้จริงในหน้าเว็บ (Restaurant.jsx ยัง hardcode ข้อมูล)**

### 2. `src/main.jsx`
ไฟล์ entry point ของแอป เรียกใช้ `<Home />`  
```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
```

### 3. `src/pages/Home.jsx`
หน้า Home หลักของเว็บ  
- แสดง Navbar
- แสดงหัวข้อ Grab Restaurant
- มีช่อง Search (แต่ยังไม่ทำงาน)
- เรียกใช้ `<Restaurant />` เพื่อแสดงร้านอาหาร

### 4. `src/components/Navbar.jsx`
Navbar ด้านบนของเว็บ  
- มีเมนู Add Restaurant, Search, About Us
- มีปุ่ม Register, Login

### 5. `src/components/Restaurant.jsx`
**แสดง Card ร้านอาหารแบบ hardcode**  
- นำเข้า Card
- วาง Card หลายใบ (props title, type, img)
- ยังไม่ได้อ่านข้อมูลจาก db.json

### 6. `src/components/Card.jsx`
คอมโพเนนต์สำหรับแสดงข้อมูลร้านอาหารแต่ละร้าน  
- รับ props: title, type, img
- มีปุ่ม Edit, Delete (ยังไม่ทำงาน)

### 7. `src/index.css`
ตั้งค่า TailwindCSS และ DaisyUI  
```css
@plugin "daisyui";
@import "tailwindcss";
```

---

## Vite Config (`vite.config.js`)

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```
- ใช้ plugin React และ TailwindCSS
- ไม่มีการตั้งค่าเพิ่มเติม

---

## หมายเหตุ

- ข้อมูลร้านอาหารในหน้าเว็บยังเป็น hardcode ใน Restaurant.jsx
- ถ้าต้องการให้ดึงข้อมูลจาก db.json จริง ๆ ต้องเพิ่ม logic การอ่านไฟล์หรือ fetch ข้อมูล
- เหมาะกับการทดลองเล่นและฝึก React + Tailwind +