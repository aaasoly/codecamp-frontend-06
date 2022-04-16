import styled from "@emotion/styled";
import { HeartFilled } from "@ant-design/icons";

export const Wrapper = styled.div`
  width: 1600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Wrapper__Header = styled.div`
  /* width: 1600px; */
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 50px;
`;

export const Wrapper__Body = styled.div`
  width: 1600px;
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  flex-wrap: wrap;
`;

export const SearchInput = styled.input`
  border: none;
  width: 300px;
  height: 40px;
  padding: 5px 10px;
  border-radius: 10px;
  background-color: #eee;
  &:focus {
    outline: none;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  width: 1200px;
  border-bottom: 1px solid #bdbdbd;
`;

export const BoradReview = styled.div`
  width: 300px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Thum__Header = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Thum__img = styled.img`
  width: 100%;
  height: 100%;
`;

export const Thum__Body = styled.div`
  width: 100%;
  height: 170px;
`;

export const Thum__Bottom = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #bdbdbd;
`;

export const Title = styled.div`
  width: 100%;
  height: 40px;
  padding: 8px;
  font-weight: 700;
  border-bottom: 1px solid #bdbdbd;
`;

export const Contents = styled.div`
  width: 300px;
  height: 120px;
  padding: 8px;
  overflow: hidden;
  /* white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; */
`;

export const Writer = styled.div`
  font-size: 16px;
  font-weight: 700;
`;

export const Like = styled.div``;

export const LikeIcon = styled(HeartFilled)`
  margin-right: 10px;
  color: coral;
`;
// export const ColumnNumberHead = styled.div`
//   width: 15%;
//   height: 52px;
//   padding: 11px 0;
//   font-weight: 700;
//   text-align: center;
// `;

// export const ColumnTitleHead = styled.div`
//   width: 55%;
//   height: 52px;
//   padding: 11px 0;
//   font-weight: 700;
//   text-align: center;
// `;

// export const ColumnContentsHead = styled.div`
//   width: 15%;
//   height: 52px;
//   padding: 11px 0;
//   font-weight: 700;
//   text-align: center;
// `;

// export const ColumnDateHead = styled.div`
//   width: 15%;
//   height: 52px;
//   padding: 11px 0;
//   font-weight: 700;
//   text-align: center;
// `;

// export const ColumnNumber = styled.div`
//   width: 15%;
//   height: 52px;
//   padding: 14px 0;
//   text-align: center;
//   cursor: pointer;
//   &:hover {
//     color: #b2b2b2;
//   }
// `;

// export const ColumnTitle = styled.div`
//   width: 55%;
//   height: 52px;
//   padding: 14px 0;
//   text-align: center;
//   cursor: pointer;
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   &:hover {
//     color: #b2b2b2;
//   }
//   color: black;
// `;

// export const ColumnWriter = styled.div`
//   width: 15%;
//   height: 52px;
//   padding: 14px 0;
//   text-align: center;
//   cursor: pointer;
//   &:hover {
//     color: #b2b2b2;
//   }
// `;

// export const ColumnDate = styled.div`
//   width: 15%;
//   height: 52px;
//   padding: 14px 0;
//   text-align: center;
// `;

export const Footer = styled.div`
  /* width: 1200px; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-left: 480px; */
`;
export const WriteIcon = styled.button`
  width: 60px;
  height: 60px;
  border: 1px solid #bdbdbd;
  border-radius: 10px;
  margin-top: 30px;
  background-color: #fff;
  cursor: pointer;
  &:hover {
  }
`;

export const Token = styled.span`
  color: ${(props) => (props.isMatched ? "skyblue" : "")};
`;
