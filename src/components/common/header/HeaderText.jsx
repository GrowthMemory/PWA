export default function HeaderText(props) {
  let textObj = {
    CollectPersonalData: `서비스 이용을 위해 
    약관 동의를 해주세요 :)`,
    CreateName: `서비스에서 불리고 싶은
    닉네임을 알려주세요`,
  };
  return (
    <>
      <span>{textObj[props.text]}</span>
    </>
  );
}
