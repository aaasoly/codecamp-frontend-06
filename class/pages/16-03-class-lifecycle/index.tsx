import { Component, createRef } from "react";
import Router from "next/router";

interface IState {
  count: number;
}

export default class CounterPage extends Component {
  inputRef = createRef<HTMLInputElement>();

  state = {
    // component 에서 제공해주는 기능
    count: 0,
  };

  componentDidMount() {
    console.log("마운트 됨!!!");
    this.inputRef.current?.focus();
    // 포커스 깜빡깜빡
  }

  componentDidUpdate() {
    console.log("수정되고 다시 그려짐!!!"); // 리렌더
  }

  componentWillUnmount() {
    console.log("컴포넌트 사라짐!!!");
    // 채팅방 나가기
    // api 요청 >> 나가기 버튼을 누르지 않고 나갔을 때도 api 요청이 됨
  }

  // onClick채팅방나가기(){ > 백엔드에 알리기 위한 함수
  //   채팅방 나가는 api 요청
  // }

  onClickCounter = () => {
    console.log(this.state.count);
    this.setState((prev: IState) => ({
      count: prev.count + 1,
    }));
  };

  onClickMove() {
    Router.push("/");
  }

  render() {
    // component 에서 제공해주는 기능
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        {/* aaa 에 input 태그를 담아줌 */}
        <div>현재카운트: {this.state.count}</div>
        <button onClick={this.onClickCounter}>카운트 올리기!!!</button>
        <button onClick={this.onClickMove}>나가기</button>
      </div>
    );
  }
}

// class는 도구 모음일뿐 컴포넌트의 역할을 하는게 아니다!!
//  >> hooks 사용할 수 없음
// 사용하고 싶으면 extends Component 를 써줘야한다
