import styled from "@emotion/styled";
import { useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const PrevButton = styled(LeftOutlined)`
  color: ${(props) => (props.isActive ? "black" : "lightgray")};
`;

const NextButton = styled(RightOutlined)`
  color: ${(props) => (props.isActive ? "black" : "lightgray")};
`;

const PageNum = styled.span`
  font-size: 14px;
  margin: 0 5px;
  cursor: pointer;
  color: ${(props) => (props.current === props.id ? "black" : "lightgray")};
`;

export default function Pagination(props) {
  const [startPage, setStartPage] = useState(1);
  const [current, setCurrent] = useState(1);
  const lastPage = props.count ? Math.ceil(props.count / 10) : 0;

  const onClickPage = (event) => {
    props.refetch({ page: Number(event.target.id) });
    setCurrent(Number(event.target.id));
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    props.refetch({ page: startPage - 10 });
    // setCurrent(Number(props.id))
  };

  const onClickNextPage = () => {
    if (startPage + 10 > lastPage) return;
    setStartPage((prev) => prev + 10);
    props.refetch({ page: startPage + 10 });
    // setCurrent(Number(event.target.id))
  };

  return (
    <div>
      <PrevButton
        onClick={onClickPrevPage}
        isActive={startPage !== 1 ? true : false}
      />
      {new Array(10).fill(1).map(
        (_, index) =>
          index + startPage <= lastPage && (
            <PageNum
              key={index + startPage}
              onClick={onClickPage}
              id={index + startPage}
              current={current}
            >
              {` `}
              {index + startPage}
              {` `}
            </PageNum>
          )
      )}

      <NextButton
        onClick={onClickNextPage}
        isActive={startPage + 10 < lastPage ? true : false}
      />
    </div>
  );
}
