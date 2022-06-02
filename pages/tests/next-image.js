import Image from "next/image";
import img from "../../public/test-img.jpg";

const Page = () => {
  return (
    <div className="outer">
      <Image
        src={img}
        alt="alt"
        layout="fill"
        objectFit="cover"
        objectPosition="center top"
        priority
      />
      <style jsx>{`
        .outer {
          position: relative;
          width: 500px;
          height: 500px;
        }
      `}</style>
    </div>
  );
};

export default Page;
