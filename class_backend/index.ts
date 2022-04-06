console.log("타입스크립트를 실행했어요");

import { DataSource } from "typeorm";
import { Board } from "./Board.postgres";
// const { ApolloServer, gql } = require("apollo-server");
import { ApolloServer, gql } from "apollo-server";

// 1. 타입
const typeDefs = gql`
  input CreateBoardInput { # 프론트에서 받아올 값이기 때문에 type 이 아닌 input을 적어주어야한다
    writer: String
    title: String
    contents: String
  }

  # fetchBoards에 넣어줄 Board가 만든 타입이기 때문에 타입도 만들어줘야한다
  type Board {
    number: Int
    writer: String
    title: String
    contents: String
  }

  type Query {
    fetchBoards: [Board] # 배열이기 때문에 넣어줌
  }

  type Mutation { # () 안에 args 의 타입 정의
    # createBoard(writer: String, title: String, contents: String): String - 연습용(example)

    createBoard(createBoardInput: CreateBoardInput!): String # - 실제 사용(backend06)
  }
`;

// 2. API
const resolvers = {
  Query: {
    fetchBoards: async () => {
      // 데이터베이스에 접속해서 게시물 가져오기

      const result = await Board.find();
      return result;
    },
  },

  Mutation: {
    // parent, args, context, info
    createBoard: async (_: any, args: any) => {
      // 데이터베이스에 접속해서 게시물 등록하기

      await Board.insert({
        ...args.createBoardInput,
        // writer: args.createBoardInput.writer,
        // title: args.createBoardInput.title,
        // contents: args.createBoardInput.contents,
      });

      // 수정
      // Board.update({writer:"철수"}, {title: "제목"})

      // 삭제
      // Board.delete({writer:"철수"})
      // Board.update({writer:"철수"}, { deletedAt: new Date ()}) - soft delete
      // 실제로 삭제하지 않고, 빈값을 가진 컬럼 deletedAt을 만들어둔다
      // 기록의 추적이 되지 않기 때문에!
      // 만약 기록을 지우면 deletedAt에 지운 날짜가 들어간다
      // 즉, 실제로 DB에서 지워진 것은 아니지만 사용자들에게는 지운 것처럼 보이는 것

      return "게시물을 등록했습니다.";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: true, // 주소가 다른 브라우저에서도 사용 가능.
  // 원하는 사이트에서만 풀어줄 수도 잇다.
  // cors: {
  //   origin: 'http://naver.com'
  // }
});

const AppDataSource = new DataSource({
  type: "postgres",
  host: "34.64.124.189",
  port: 5002,
  username: "postgres",
  password: "postgres2021",
  database: "postgres",
  entities: [Board],
  synchronize: true, // class 와 db 를 동기화해줌
  logging: true, // log 찍어줘~!
});

AppDataSource.initialize()
  .then(() => {
    console.log("연결 성공!!!");
    // 백엔드 API 오픈(24시간동안 접속 가능하게끔 대기상태로 만들어주기)

    server.listen(4000).then(({ url }) => {
      console.log(`🚀 Server ready at ${url}`);
    });
  })
  .catch(() => {
    console.log("연결 실패!!!");
  }); // 연결에 실패하면 catch
