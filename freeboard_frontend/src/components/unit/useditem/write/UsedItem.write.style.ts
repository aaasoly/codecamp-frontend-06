import styled from "@emotion/styled";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const Wrapper = styled.div`
  width: 1200px;
  height: 1600px;
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  align-items: center;
  background: #ffffff;
  /* box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1); */
  padding: 80px 102px;
`;

export const MainTitle = styled.div`
  font-size: 36px;
  margin-bottom: 80px;
`;

export const SubTitle = styled.div`
  font-size: 16px;
  margin-bottom: 16px;
`;

export const Name = styled.div`
  margin-bottom: 40px;
`;

export const NameInput = styled.input`
  width: 996px;
  height: 52px;
  padding: 14px 16px;
  border: 1px solid #bdbdbd;
`;

export const Remarks = styled.div`
  margin-bottom: 40px;
`;

export const RemarksInput = styled.input`
  width: 996px;
  height: 52px;
  padding: 14px 16px;
  border: 1px solid #bdbdbd;
`;

export const Contents = styled.div`
  height: 400px;
  margin-bottom: 40px;
`;

export const ReactQuillInput = styled(ReactQuill)`
  width: 996px;
  height: 320px;
  margin-bottom: 40px;
`;
export const Price = styled.div`
  margin-bottom: 40px;
`;

export const PriceInput = styled.input`
  width: 996px;
  height: 52px;
  padding: 14px 16px;
  border: 1px solid #bdbdbd;
`;

export const Tags = styled.div`
  margin-bottom: 40px;
`;

export const TagsInput = styled.input`
  width: 996px;
  height: 52px;
  padding: 14px 16px;
  border: 1px solid #bdbdbd;
`;

export const Location = styled.div`
  display: flex;
  height: 292px;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const Location__Left = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Map = styled.div`
  width: 384px;
  height: 252px;
  border: 1px solid #bdbdbd;
`;

export const Location__Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const GPS = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const GPS__Input = styled.div`
  display: flex;
  width: 272px;
  justify-content: space-between;
`;

export const LAT = styled.input`
  width: 108px;
  height: 52px;
  padding: 14px 18px;
  color: #4f4f4f;
`;

export const LNG = styled.input`
  width: 108px;
  height: 52px;
  padding: 14px 18px;
  color: #4f4f4f;
`;

export const Adress = styled.div`
  width: 588px;
  height: 160px;
`;

export const Adress1 = styled.input`
  width: 588px;
  height: 52px;
  margin-bottom: 16px;
  border: 1px solid #bdbdbd;
  color: #bdbdbd;
`;

export const Images = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  width: 100%;
`;

export const ImageBox = styled.div`
  display: flex;
  width: 180px;
  height: 180px;
`;

export const Button = styled.button``;