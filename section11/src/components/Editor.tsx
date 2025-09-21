import { useContext, useState } from "react";
import { TodoDispatchContext, useTodoDispatch } from "../App";

interface Props {
  // onClickAdd: (text: string) => void;
}

export default function Editor(props: Props) {
  const dispatch = useTodoDispatch();

  const [text, setText] = useState(""); // text의 타입이 string으로 추론
  // react의 useState라는 메서드는 초기값으로 전달한 인수의 타입에 따라, state변수(text)와 state의 변화 함수의 타입을 자동으로 추론
  // => 제네릭 함수라고 부름

  // setText(123); -> string이 아닌 다른 타입을 넣으면 오류 발생

  // useState를 쓸 때, 초기값을 넣을 게 없어서 useState()로 설정하면 undefined타입으로 자동 추론
  // => 이렇게 되면 setText()의 값이 undefined 밖에 없기 때문에 타입 스크립트에서는 useState()로 쓰면 안 됨.
  // 초기값으로 설정할 값이 없는 경우, 타입 변수를 useState<string>() 같은 식으로 직접 설정해줘야 함
  // => string | undefined 유니온 타입으로 추론되는 이유는 string 타입 변수를 넣긴 했지만 ()로 초기값이 없기 때문에 undefined가 나올 수도 있음
  // => 그렇기 때문에 useState("")를 더 권장함

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickButton = () => {
    dispatch.onClickAdd(text); // 인수로 text state 값을 전달
    setText(""); // useState 값 초기화하고 빈 문자열 전달
  };

  return (
    <div>
      <input value={text} onChange={onChangeInput} />
      <button onClick={onClickButton}>추가</button>
    </div>
  );
}
