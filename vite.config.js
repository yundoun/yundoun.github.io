import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/yundoun.github.io/', // 슬래시 포함! 예: '/my-vite-app/'
  plugins: [react()]
})