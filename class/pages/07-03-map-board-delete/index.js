import { useMutation } from '@apollo/client'
import { useQuery, gql } from '@apollo/client'
import styled from '@emotion/styled'

const FETCH_BOARDS = gql`
    query fetchBoards{
        fetchBoards{
            number
            writer
            title
            contents
        }
    }
`

const DELETE_BOARD = gql`
    mutation deleteBoard($number: Int){
        deleteBoard(number: $number){
            message
        }
    }
`

const Row = styled.div`
    display: flex;
`

const Column = styled.div`
    width: 20%;
`

export default function MapBoardPage(){
    const [ deleteBoard ] = useMutation(DELETE_BOARD) // deleteboard api 요청
    const { data } = useQuery(FETCH_BOARDS)

    const onClickDelete = (event) => {
        deleteBoard({
            variables: {number: Number(event.target.id)},
            // 삭제 버튼을 누르면 버튼의 number에 id={el.number} 가 반영 >> 선택한 게시글 삭제 가능
            // id={el.number}는 문자열이기 때문에 Number()로 변환
            refetchQueries: [{ query: FETCH_BOARDS }]
            // 새롭게 변한 데이터를 다시 가져옴
        })
    }

    return (
        <div>             {/* index 매개 변수 : 게시글이 쓰인 순서 */}
            {data?.fetchBoards.map((el) => (
                // div 로 감싸지 않을 때 <Fragment key={el.number}> 도 가능
                <Row key={el.number}> 
                    {/* 고유한 키값 = el.number 
                        index로 key를 주면 안됨!
                        완전 고유한 id 나 number 로 줘야한다 */}
                    <Column><input type="checkbox" /></Column>
                    <Column>{el.number}</Column>
                    <Column>{el.writer}</Column>
                    <Column>{el.title}</Column>
                    <Column>
                        <button id={el.number} onClick={onClickDelete}>삭제</button>
                    </Column>
                </Row>
            ))}
        </div> 
    )

}