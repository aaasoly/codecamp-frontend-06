import { 
  Container, 
  MainTitle, 
  User, 
  UserInfo, 
  Title,
  Contents,
  Item, 
  Blank, 
  MainContents, 
  Post, 
  PostBlank, 
  PostSearch, 
  Address,
  AddressBlank,
  Youtube,
  Picture, 
  Upload,
  PicAttach, 
  Select, 
  Setting,
  Radio, 
  RadioLabel,
  BtnSubmit,
  Error
} from './Boardwrite.styles'


export default function BoardWriteUI(props) {


  return (

    <Container>
      <MainTitle>게시물 등록</MainTitle>

      <User>
        <UserInfo>
          <Item>작성자</Item>
          <Blank type="text" placeholder='이름을 적어주세요.' onChange={props.onChangeName} />
          <Error>{props.nameError}</Error>
        </UserInfo>
        <UserInfo>
          <Item>비밀번호</Item>
          <Blank type="password" placeholder='비밀번호를 입력하세요.' onChange={props.onChangePassword} />
          <Error>{props.passwordError}</Error>
        </UserInfo>
      </User>

      <Title>
        <Item>제목</Item>
        <Blank type="text" placeholder='제목을 작성해주세요.' onChange={props.onChangeTitle} />
        <Error>{props.titleError}</Error>
      </Title>

      <Contents>
        <Item>내용</Item>
        <MainContents type="text" placeholder='내용을 작성해주세요.' onChange={props.onChangeContents} />
        <Error>{props.contentsError}</Error>
      </Contents>

      <Address>
        <Item>주소</Item>
        <Post>
          <PostBlank type="text" placeholder='07250' />
          <PostSearch>우편번호 검색</PostSearch>
        </Post>
            <AddressBlank type="text" onChange={props.onChangeAddress} />
            <AddressBlank type="text" onChange={props.onChangeAddress} />
        <Error>{props.addressError}</Error>
      </Address>

      <Youtube>
        <Item>유튜브</Item>
        <Blank type="text" placeholder='링크를 복사해주세요.'/>
      </Youtube>

      <Picture>
        <Item>사진첨부</Item>
        <Upload>
          <PicAttach>+<br/>Upload</PicAttach>
          <PicAttach>+<br/>Upload</PicAttach>
          <PicAttach>+<br/>Upload</PicAttach>
        </Upload>
      </Picture>

      <Setting>
        <Item>메인 설정</Item>
        <Select>
          <Radio type="radio" name="setting" /><RadioLabel>유튜브</RadioLabel>
          <Radio type="radio" name="setting" /><RadioLabel>사진</RadioLabel>
        </Select>
      </Setting>

      <BtnSubmit onClick={props.onClickSubmit} isActive={props.isActive}>등록하기</BtnSubmit>


    </Container>


  )

}