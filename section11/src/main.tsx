import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import _ from "lodash";
// npm 사이트에서 ts가 붙어 있는 것은 ts가 호환되지만, 붙어 있지 않으면 js에서만 쓸 수 있음
// => lodash만 설치하면 ts에 호환되지 않기 때문에 @types/lodash 설치해야 됨 (외부 라이브러리 이용)
// @types가 붙어 있는 타입 정보를 제공하는 패키지들을 Definitely Types라고 부름

createRoot(document.getElementById("root") as HTMLElement).render(
  // 단언해주지 않으면 HTMLElement | null 타입으로 간주해서 null이 들어올 때 에러가 발생하게 됨
  <StrictMode>
    <App />
  </StrictMode>
);
