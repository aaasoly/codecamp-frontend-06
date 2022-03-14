import styled from '@emotion/styled'

export default function EatsRoad() {

  const Container = styled.div`
    width: 640px;
    height: 1138px;
    background-color: #fff;
    display: flex;
  `

  const Search = styled.img`
    width: 32px;
    height: 32px;
  `

  const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `

  const Title = styled.div`
    font-size: 40px;
    font-weight: 700;
    color: #1f1f1f;
  `

  const Profile = styled.img`
    width: 60px;
    height: 60px;
  `


  const Menu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `

  const MenuOff = styled.span`
    font-size: 30px;
    color: #cacaca;
  `
  const MenuOn = styled.span`
    font-size: 30px;
    color: #ff1b6d;
  `

  const DivideLine = styled.div`
    width: 100%;
    border-top: 1px solid #cacaca;
  `

  const Body = styled.div`
    width: 100%;
    height: 694px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-around;
  `

  const QNo = styled.div`
    font-size: 18px;
    color: #adadad;
  `

  const Question = styled.div`
    font-size: 24px;
    color: #444;
  `

  const Footer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  `

  const Icon = styled.img`
    width: 58px;
    height: 58px;
  `



  // 여기는 자바스크립트 쓰는 곳

  return (
    <Container>
      <Header>
        <Title>
          마이
        </Title>
      </Header>

    </Container>
  )
}