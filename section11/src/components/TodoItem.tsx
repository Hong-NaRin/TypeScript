import { useTodoDispatch } from "../App";
import { Todo } from "../types";

// 중복 코드 types.ts에 적어서 불러오기
// interface Props {
//   id: number;
//   content: string;
// }

interface Props extends Todo {
  // extra: string; -> 새로운 프롭스를 받아야 된다면 추가해서 받을 수도 있음
  // onClickDelete: (id: number) => void;
}

export default function TodoItem(props: Props) {
  const dispatch = useTodoDispatch();

  const onClickButton = () => {
    dispatch.onClickDelete(props.id);
  };

  return (
    <div>
      {props.id}번: {props.content}
      <button onClick={onClickButton}>삭제</button>
    </div>
  );
}
