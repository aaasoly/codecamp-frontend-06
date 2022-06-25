import styled from "@emotion/styled";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { device } from "../../../../commons/responsive/breakPoint";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const Wrapper = styled.div`
  width: 120rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  /* box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1); */
  padding: 8rem 10.2rem;
  font-size: 14px;
  margin: 0 auto;
  @media ${device.laptop} {
    width: 90rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120rem;
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
  margin-bottom: 4rem;
`;

export const NameInput = styled.input`
  width: 99.6rem;
  height: 52px;
  padding: 14px 16px;
  border: 1px solid #bdbdbd;
  border-radius: 30px;
  &:placeholder {
    color: #bdbdbd;
  }
  &:focus {
    outline: none;
  }
`;

export const Remarks = styled.div`
  margin-bottom: 4rem;
`;

export const RemarksInput = styled.input`
  width: 99.6rem;
  height: 52px;
  padding: 14px 16px;
  border: 1px solid #bdbdbd;
  border-radius: 30px;
  &:placeholder {
    color: #bdbdbd;
  }
  &:focus {
    outline: none;
  }
`;

export const Contents = styled.div`
  height: 40rem;
  margin-bottom: 40px;
  @media ${device.tablet} {
    height: 210px;
  }
`;

export const ReactQuillInput = styled(ReactQuill)`
  width: 99.6rem;
  height: 32rem;
  border-radius: 30px;
`;

export const Price = styled.div`
  margin-bottom: 4rem;
`;

export const PriceInput = styled.input`
  width: 99.6rem;
  height: 52px;
  padding: 14px 16px;
  border: 1px solid #bdbdbd;
  border-radius: 30px;
  &:placeholder {
    color: #bdbdbd;
  }
  &:focus {
    outline: none;
  }
`;

export const Tags = styled.div`
  width: 99.6rem;
  margin-bottom: 40px;
`;

export const TagsInput = styled.input`
  width: 99.6rem;
  height: 52px;
  padding: 14px 16px;
  border: 1px solid #bdbdbd;
  border-radius: 30px;
  &:placeholder {
    color: #bdbdbd;
  }
  &:focus {
    outline: none;
  }
  margin-bottom: 10px;
`;

export const TagUnit = styled.span`
  display: inline-block;
  font-size: 13px;
  padding: 6px 15px 5px;
  color: #fff;
  border-radius: 20px;
  margin-right: 5px;
  background-color: #ac92fa;
`;

export const Location = styled.div`
  width: 99.6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 24px;
`;

export const LocationTop = styled.div`
  width: 100%;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PostCode = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 217px;
  height: 52px;
`;

export const PostInput = styled.input`
  width: 77px;
  height: 52px;
  padding: 14px;
  border-radius: 30px;
  border: 1px solid #bdbdbd;
`;

export const AddrSearch = styled.button`
  width: 124px;
  height: 51px;
  padding: 14px 16px 14px 16px;
  background-color: #000;
  color: #fff;
  border-radius: 30px;
  cursor: pointer;
`;

export const LocationBottom = styled.div`
  width: 100%;
  height: 360px;
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
`;

export const Map = styled.div`
  width: 475px;
  height: 352px;
  border: 1px solid #bdbdbd;
  overflow: hidden;
  margin: 0 auto;
`;

// export const GPS = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
// `;

// export const GPS__Input = styled.div`
//   display: flex;
//   width: 272px;
//   justify-content: space-between;
// `;

// export const LAT = styled.input`
//   width: 108px;
//   height: 52px;
//   padding: 14px 18px;
//   color: #4f4f4f;
// `;

// export const LNG = styled.input`
//   width: 108px;
//   height: 52px;
//   padding: 14px 18px;
//   color: #4f4f4f;
// `;

export const Address = styled.div`
  width: 58.8rem;
  height: 160px;
  @media ${device.laptop} {
    width: 300px;
  }
`;

export const AddrInput = styled.input`
  width: 99.6rem;
  height: 52px;
  margin-bottom: 16px;
  border: 1px solid #bdbdbd;
  border-radius: 30px;
  padding: 14px 16px;
  &:placeholder {
    color: #bdbdbd;
  }
  &:focus {
    outline: none;
  }
`;

export const AddrDetailInput = styled.input`
  width: 99.6rem;
  height: 52px;
  margin-bottom: 16px;
  border: 1px solid #bdbdbd;
  border-radius: 30px;
  padding: 14px 16px;
  &:placeholder {
    color: #bdbdbd;
  }
  &:focus {
    outline: none;
  }
`;

export const Images = styled.div`
  width: 99.6rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

export const ImageBox = styled.div`
  display: flex;
  width: 100%;
  height: 180px;
`;

export const Button = styled.button`
  width: 124px;
  height: 52px;
  background-color: #fff;
  border-radius: 30px;
  border: 1px solid #bebebe;
  cursor: pointer;
  margin: 0 auto;
`;
