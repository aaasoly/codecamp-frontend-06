const HashTagPage = () => {
  const [hashtag, setHashtag] = useState("");
  const [hashArr, setHashArr] = useState([]);

  const onKeyUpHash = (event) => {
    // 키보드 이벤트에는 keyCode 라는 값이 있다
    // 키값으로 32(스페이스바) 이고 밸류가 빈값이 아닌 경우 실행
    if (event.keyCode === 32 && event.target.value !== " ") {
      // [기존에 있던 hashArr, 새로 입력한 value]
      setHashArr([...hashArr, "#" + event.target.value]);
      // setHashArr 출력 후 다시 input 창을 빈값으로 만들어준다
      event.target.value = "";
    }
  };

  return (
    <>
      <div>
        <span>
          {/* hassArr 를 가져와서 map 으로 뿌려준다 */}
          {hashArr.map((el, idx) => (
            <span key={idx}>{el}</span>
          ))}
        </span>
        <input type="text" onKeyUp={onKeyUpHash} />
      </div>
    </>
  );
};

export default HashTagPage;
