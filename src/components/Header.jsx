export default function Header() {
  return (
    <header className="flex justify-between p-2 px-5 bg-black item-center">
      <h2>OZ코딩스쿨</h2>
      <ul className="flex justify-center item-center gap-[20px]">
        <li className="font-normal list-none text-[13px]">로그인</li>
        <li className="font-normal list-none text-[13px]">회원가입</li>
        <li className="font-normal list-none text-[13px]">내클래스</li>
      </ul>
    </header>
  );
}
