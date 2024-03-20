import Link from "next/link";

interface Props {
  path: string;
  text: string;
}

export const ActiveLink = ({ path, text }: Props) => {
  return (
    <Link 
      className=" m-2" 
      href={path}
    >
      <span className="px-1">{text}</span>
    </Link>
  );
};
