# ubuntu 가 깔린 linux 를 설치
# FROM ubuntu:20.04 
FROM node:14

# 깃클론 하지 않고 사용하기 
# 폴더의 모든 파일(.) 카피해서 Docker 안에 class_build 파일에 넣기
# RUN mkdir class_build 하지 않아도 됨
COPY . /class_build/

# RUN을 실행할 디렉토리 지정
WORKDIR /class_build/

# 설치
# RUN git clone 
# 반드시 여기서 yarn install 을 해줘야한다
RUN yarn install
RUN yarn build:ssr

# RUN 은 마음대로 사용 가능하지만 CMD는 한 번만 사용 가능
# build 된 압축된 파일을 한 번에 실행하는 것
# 24시간 실행 명령어는 RUN 에 들어갈 수 없음
# RUN 에 들어가있는 명령어는 최적화ㅏ.. 어쩌구..
# CMD 는 압축된 파일을 마지막에 실행시키는 용도로 미리 저장되지 않는다
CMD yarn start