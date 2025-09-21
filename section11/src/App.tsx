import React, {
  useState,
  useRef,
  useEffect,
  useReducer,
  useContext,
} from "react";
import "./App.css";
import Editor from "./components/Editor";
import TodoItem from "./components/TodoItem";
import { Todo } from "./types";

type Action =
  | {
      type: "CREATE";
      data: {
        id: number;
        content: string;
      };
    }
  | { type: "DELETE"; id: number };

function reducer(state: Todo[], action: Action) {
  switch (action.type) {
    case "CREATE": {
      return [...state, action.data];
    }
    case "DELETE": {
      return state.filter((it) => it.id !== action.id);
    }
  }
}

export const TodoStateContext = React.createContext<Todo[] | null>(null); // TodoStateContext의 초기값이 null로 설정됨
export const TodoDispatchContext = React.createContext<{
  onClickAdd: (text: string) => void;
  onClickDelete: (id: number) => void;
} | null>(null);

export function useTodoDispatch() {
  const dispatch = useContext(TodoDispatchContext);
  // 타입 좁혀주기
  if (!dispatch) throw new Error("TodoDispatchContext에 문제가 있다"); // dispatch가 null 타입이라면
  return dispatch; // dispatch가 null이 아니라면
}

function App() {
  // const [todos, setTodos] = useState<Todo[]>([]);
  const [todos, dispatch] = useReducer(reducer, []);
  // 1번째 인수 reducer라는 상태 변화를 직접 처리하는 함수를 받고, 2번째 인수는 상태의 초기값을 받음

  const idRef = useRef(0);

  // const onClickAdd = (text: string) => {
  //   setTodos([...todos, { id: idRef.current++, content: text }]); // 새로운 Todo 추가
  // };

  const onClickAdd = (text: string) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        content: text,
      },
    });
  };

  // const onClickDelete = (id: number) => {
  //   setTodos(todos.filter((todo) => todo.id !== id)); // todo의 id가 매개변수로 받은 id가 아닐 때 삭제
  // };

  const onClickDelete = (id: number) => {
    dispatch({
      type: "DELETE",
      id: id,
    });
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <>
      <div className="App">
        <h1>Todo</h1>
        <TodoStateContext.Provider value={todos}>
          <TodoDispatchContext.Provider
            value={{
              onClickAdd,
              onClickDelete,
            }}
          >
            <Editor
            // onClickAdd = {onClickAdd}
            />
            <div>
              {todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  {...todo}
                  // onClickDelete={onClickDelete}
                />
              ))}
            </div>
          </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
      </div>
    </>
  );
}

export default App;
