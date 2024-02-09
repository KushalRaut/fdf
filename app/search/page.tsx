import Image from "next/image";

const LandingPage = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image width={550} height={450} src={"/test.webp"} alt="no-meaning" />
    </div>
  );
};

export default LandingPage;
