export default function Header(props: {
  sectionName: string,
  title: string,
  children: string
}) {
  return (
    <div className="w-full flex flex-col items-start gap-4">
      <span className="text-caption font-caption text-brand-600">
        {props.sectionName.toUpperCase()}
      </span>
      <span className="text-heading-1 font-heading-1 text-default-font">
        {props.title}
      </span>
      <span className="text-heading-2 font-heading-2 text-subtext-color">
        {props.children}
      </span>
    </div>
  )
}