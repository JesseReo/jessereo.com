import Image from "next/image";
import img from "../../public/test-img.jpg";
import img2 from "../../public/jesse3.jpg";

const Page = () => {
  return (
    <>
      <div className="outer">
        <Image
          src={img}
          alt="alt"
          layout="fill"
          objectFit="cover"
          objectPosition="center top"
          priority
        />
      </div>
      <div className="outer">
        <Image
          src={img2}
          alt="alt"
          layout="fill"
          objectFit="cover"
          objectPosition="center top"
          priority
        />
      </div>
      <style jsx>{`
        .outer {
          position: relative;
          width: 500px;
          height: 500px;
        }
      `}</style>
    </>
  );
};

export default Page;
