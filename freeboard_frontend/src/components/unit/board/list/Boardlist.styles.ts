import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 152px 360px 10px;
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

export const SearchInput = styled.input`
  border: 1px solid #b2b2b2;
  width: 200px;
  padding: 5px 10px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  /* width: 1200px; */
  border-bottom: 1px solid #bdbdbd;
`;

export const ColumnNumberHead = styled.div`
  width: 200px;
  height: 52px;
  padding: 11px 0;
  font-weight: 700;
  text-align: center;
`;

export const ColumnTitleHead = styled.div`
  width: 600px;
  height: 52px;
  padding: 11px 0;
  font-weight: 700;
  text-align: center;
`;

export const ColumnContentsHead = styled.div`
  width: 200px;
  height: 52px;
  padding: 11px 0;
  font-weight: 700;
  text-align: center;
`;

export const ColumnDateHead = styled.div`
  width: 200px;
  height: 52px;
  padding: 11px 0;
  font-weight: 700;
  text-align: center;
`;

export const ColumnNumber = styled.div`
  width: 200px;
  height: 52px;
  padding: 14px 0;
  text-align: center;
  cursor: pointer;
  &:hover {
    color: #b2b2b2;
  }
`;

export const ColumnTitle = styled.div`
  width: 600px;
  height: 52px;
  padding: 14px 0;
  text-align: center;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:hover {
    color: #b2b2b2;
  }
  color: black;
`;

export const ColumnWriter = styled.div`
  width: 200px;
  height: 52px;
  padding: 14px 0;
  text-align: center;
  cursor: pointer;
  &:hover {
    color: #b2b2b2;
  }
`;

export const ColumnDate = styled.div`
  width: 200px;
  height: 52px;
  padding: 14px 0;
  text-align: center;
`;

export const Footer = styled.div`
  /* width: 1200px; */
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
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
  color: ${(props) => (props.isMatched ? "skyblue" : "#b2b2b2")};
`;
