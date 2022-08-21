import { styled } from "@stitches/react";
import Link from "next/link";

export default function Nav() {
  return (
    <StyledNav>
      <Link href="/home">Home</Link>
      <Link href="/login">login</Link>
    </StyledNav>
  );
}

const StyledNav = styled("nav", {
  display: "flex",
  gap: 10,
  "& > a": {
    padding: 7.5,
    border: "1px solid #ccc",
    borderRadius: 5,
    cursor: "pointer",
    textDecoration: "none",
  },
  "& > a:visited": { color: "#2c7fff" },
  "& > a:hover": { background: "#2c7fff", color: "#fff" },
});
