import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // 원하는 포트 번호
    strictPort: true, // true: 이미 사용 중이면 에러 발생, false: 자동으로 다른 포트 사용
  },
});
