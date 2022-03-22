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

const MyRow = styled.div`
    display: flex;
`

const MyColumn = styled.div`
    width: 25%;
`

export default function MapBoardPage(){
    const { data } = useQuery(FETCH_BOARDS)

    return (
        <div>             {/* index 매개 변수 : 게시글이 쓰인 순서 */}
            {data?.fetchBoards.map((el) => (
                <MyRow key={el.number}> 
                 {/* 고유한 키값 = el.number */}
                    <MyColumn><input type="checkbox" /></MyColumn>
                    <MyColumn>{el.number}</MyColumn>
                    <MyColumn>{el.writer}</MyColumn>
                    <MyColumn>{el.title}</MyColumn>
                </MyRow>
            ))}
        </div>
    )

}