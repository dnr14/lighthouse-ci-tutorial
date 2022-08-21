import { styled } from "@stitches/react";
import { useRouter } from "next/router";

const BackButton = () => {
  const { back } = useRouter();

  const handleOnClick = () => back();

  return (
    <Button id="back" onClick={handleOnClick}>
      뒤로가기
    </Button>
  );
};

const Button = styled("button", {
  padding: 7.5,
  color: "#2c7fff",
  background: "#fff",
  border: "1px solid #ccc",
  borderRadius: 5,
  cursor: "pointer",

  "&:hover": {
    background: "#2c7fff",
    color: "#fff",
  },

  transition: "background 0.5s ease, color 0.25s ease",
});

export default BackButton;
