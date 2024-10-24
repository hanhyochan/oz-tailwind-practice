export default function Content({ content }) {
  return (
    <div className="flex flex-col items-start gap-[5px]">
      <img className="w-[300px] rounded-[10px] mb-[3px]" src={content.img} alt={content.title} />
      <span style={{ color: '#d7fa00', borderColor: '#d7fa00' }} className="text-[12px] border-[1px] px-[4px] py-[5px] rounded-[3px]">모집중</span>
      <div className="text-[18px] font-semibold">{content.title}</div>
      <p style={{ color:"rgb(160, 160, 160)" }} className="text-[12px]">{content.subtitle}</p>
    </div>
  );
}
