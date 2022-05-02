// 테스트를 하나하나 할 수 있는 양이 아닐 때 스냅샷을 뜬다
// 바뀌면

import { render } from "@testing-library/react";
import JestUnitTestSnapshotPage from "../../pages/34-03-jest-unit-test-snapshot";

it("컴포넌트가 기존이랑 바뀐게 없는지 비교해보자 - 스냅샷 테스트", () => {
  const result = render(<JestUnitTestSnapshotPage />);
  expect(result.container).toMatchSnapshot();

  // 달라진게 있으면 맞든 틀리든 error 를 띄움
});
