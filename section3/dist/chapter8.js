/*
 * 서로소 유니온 타입
 * -> 교집합이 없는 타입들로만 만든 유니온 타입
 * => ex) string과 number 두 개의 집합을 서로소 관계 (서로소 집합)
 */
// Admin -> {name}님 현재까지 {kickCount}명 강퇴했습니다.
// Member -> {name}님 현재까지 {point}모았습니다.
// Guest -> {name님 현재까지 {visitCount}번 방문하셨습니다.
function login(user) {
    // 밑이랑 똑같지만 더 직관적인 방법
    switch (user.tag) {
        case "ADMIN": {
            console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
            break;
        }
        case "MEMBER": {
            console.log(`${user.name}님 현재까지 ${user.point}모았습니다..`);
            break;
        }
        case "GUEST": {
            console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`);
            break;
        }
    }
    // if ("kickCount" in user) { => 이렇게 작성해도 되지만 다른 사람이 봐도 어떤 타입인지 한 번에 알아볼 수 있게
    if (user.tag === "ADMIN") {
        console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
        // } else if ("point" in user) {
    }
    else if (user.tag === "MEMBER") {
        console.log(`${user.name}님 현재까지 ${user.point}모았습니다..`);
    }
    else {
        console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`);
    }
}
// 위의 방식을 안 쓰고 선택적 프로퍼티로 만들 때의 방식
// type AsyncTask = {
//   state: "LOADING" | "FAILED" | "SUCCESS";
//   error?: {
//     // LOADING일 때는 프로퍼티가 없으므로 선택적 프로퍼티로 작성
//     message: string;
//   };
//   response?: {
//     data: string;
//   };
// };
// 로딩 중 -> 콘솔에 로딩 중 출력
// 실패 -> 실패 : 에러 메세지를 출력
// 성공 -> 성공 : 데이터를 출력
function processResult(task) {
    switch (task.state) {
        case "LOADING": {
            console.log("로딩 중");
            break;
        }
        case "FAILED": {
            // console.log(`에러 발생 : ${task.error?.message}`);
            // ? 적는 이유 : 에러 프로퍼티는 선택적 프로퍼티로 정의되어 있기 때문에 에러가 있는지 없는지 확실히 알 수 없음 => 더 좁혀질 타입이 없음
            console.log(`에러 발생 : ${task.error.message}`); // ?나 !를 쓰지 않고 적는 방식 -> 타입이 더 좁혀짐
            break;
        }
        case "SUCCESS": {
            // console.log(`성공 : ${task.response?.data}`);
            console.log(`성공 : ${task.response.data}`);
            break;
        }
    }
}
const loading = {
    state: "LOADING",
};
const failed = {
    state: "FAILED",
    error: {
        message: "오류 발생 원인은 ~",
    },
};
const success = {
    state: "SUCCESS",
    response: {
        data: "데이터 ~~",
    },
};
export {};
