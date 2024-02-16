import Image from "next/image";

export default function NotFoundImage() {
  return (
    <Image
      className="mx-auto"
      width={400}
      height={400}
      alt="Not Found"
      src={"/images/404.svg"}
    />
  );
}
