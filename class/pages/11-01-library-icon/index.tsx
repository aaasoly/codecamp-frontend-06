import { QuestionCircleOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

const MyIcon = styled(QuestionCircleOutlined)`
  font-size: 50px;
  color: red;
`;

export default function LibraryIconPage() {
  // return <QuestionCircleOutlined />;
  // 아이콘에 아이디 추가하면 쓸 수가 없음.. 지금은 추가하지 말것
  // antd 에서 만들어 둔 태그가 있기 때문에 아이디 값이 다른 곳으로 이동

  return <MyIcon />;
}
