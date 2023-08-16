import Link from "next/link";
import React from "react";

const Main: React.FC<{}> = () => {
  return (
    <div>
      Sample Main Page
      <Link href="/r/testcommunity">Link to test community</Link>
    </div>
  );
};
export default Main;
