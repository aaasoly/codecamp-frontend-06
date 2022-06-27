import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { ChangeEvent, useRef, useState } from "react";
import { FETCH_USER_LOGGED_IN } from "../../../../commons/login/Login.queries";
import {
  IMutation,
  IMutationUpdateUserArgs,
} from "../../../../commons/types/generated/types";
import Sidebar from "../../../commons/layout/sidebar";

export const Wrapper = styled.div`
  width: 1290px;
  min-height: 900px;
  display: flex;
  font-size: 16px;
`;

export const Main = styled.div`
  width: 1000px;
  min-height: 900px;
  border-left: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 30px;
  padding-top: 20px;
`;

const ProfileDiv = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  border-top: 1px solid #bebebe;
  padding-top: 20px;
`;

const NameDiv = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  border-top: 1px solid #bebebe;
  border-bottom: 1px solid #bebebe;
  padding-top: 20px;
`;

const UserPicture = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  box-shadow: 0 3px 6px 0 rgb(29 34 53 / 8%);
  margin-bottom: 10px;
`;

const InputLabel = styled.label`
  font-size: 20px;
  width: 120px;
  text-align: center;
  margin-right: 20px;
`;

const Input = styled.input`
  width: 340px;
  height: 60px;
  border: 1px solid #bebebe;
  border-radius: 30px;
  padding: 14px;
`;

const ActiveBtn = styled.button`
  width: 190px;
  height: 50px;
  background-color: #fff;
  border: 1px solid #000000;
  border-radius: 30px;
`;

const UPDATE_USER = gql`
  mutation updateUser($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      _id
    }
  }
`;

export default function MyProfilePage() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [updateUser] = useMutation<
    Pick<IMutation, "updateUser">,
    IMutationUpdateUserArgs
  >(UPDATE_USER);
  const fileRef = useRef<HTMLInputElement>(null);

  const [imageUrl, setImageUrl] = useState("");

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangeUserPic = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event?.target.files?.[0];
    if (!file) {
      return;
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      if (typeof data.target?.result === "string") {
        console.log(data.target?.result);
        setImageUrl(data.target?.result);
      }
    };
  };

  const onClickUpdateUser = async () => {
    try {
      const result = await updateUser({
        variables: {
          updateUserInput: {
            name: data?.fetchUserLoggedIn.name,
            picture: imageUrl,
          },
        },
      });
      console.log(result);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return (
    <Wrapper>
      <Sidebar />
      <Main>
        <ProfileDiv>
          <InputLabel>프로필 사진</InputLabel>
          {imageUrl ? (
            <UserPicture src={imageUrl} />
          ) : (
            <UserPicture src={data?.fetchUserLoggedIn.picture} />
          )}
          <ActiveBtn onClick={onClickUpload}>등록</ActiveBtn>
          <Input
            id="inputPicture"
            type="file"
            style={{ display: "none" }}
            onChange={onChangeUserPic}
            ref={fileRef}
          />
        </ProfileDiv>

        <NameDiv>
          <InputLabel>이름</InputLabel>
          <Input type="text" defaultValue={data?.fetchUserLoggedIn.name} />
        </NameDiv>

        <ActiveBtn onClick={onClickUpdateUser}>저장</ActiveBtn>
      </Main>
    </Wrapper>
  );
}
