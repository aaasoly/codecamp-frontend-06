import { Component } from "react";

interface IState {
  count: number;
}

export default class CounterPage extends Component {
  state = {
    // component 에서 제공해주는 기능
    count: 0,
  };

  onClickCounter = () => {
    console.log(this.state.count);
    this.setState((prev: IState) => ({
      count: prev.count + 1,
    }));
  };

  render() {
    // component 에서 제공해주는 기능
    return (
      <div>
        <div>현재카운트: {this.state.count}</div>
        <button onClick={this.onClickCounter}>카운트 올리기!!!</button>
      </div>
    );
  }
}

// class는 도구 모음일뿐 컴포넌트의 역할을 하는게 아니다!!
//  >> hooks 사용할 수 없음
// 사용하고 싶으면 extends Component 를 써줘야한다
