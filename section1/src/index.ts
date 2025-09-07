const a = 1;

// 타입스크립트는 다른 파일이더라도 같은 변수명이 정의되어 있으면
// -> 전역 공간에 같이 있다고 판단하여 오류 발생
// -> 첫 번째 해결 방법 : export, import 같은 모듈 시스템을 사용해서 독립된 모듈로 판단
// export {};
// -> 두 번째 해결 방법 : tsconfig.json 파일에 "moduleDetection": "force" 설정으로 개별 모듈로 취급
