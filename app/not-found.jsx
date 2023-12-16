import React from "react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <main className="grid place-items-center h-[80vh]">
      <div className="italic text-gray-500">
        This page doesn&apos;t exist. <br />
        Click here for&nbsp;
        <Link href={"/"} className="underline text-primary">
          Home
        </Link>
        &nbsp;page.
      </div>
    </main>
  );
};

export default NotFoundPage;
