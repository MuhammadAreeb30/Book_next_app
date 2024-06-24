import React from "react";
import Image from "next/image";
import Link from "next/link";

const singlePage = async ({ params }: { params: { id: string } }) => {
  console.log(params, "id");
  const res = await fetch(`${process.env.BACKEND_URI}books/${params.id}`, {
    next: {
      revalidate: 3600,
    },
  });
  if (!res.ok) {
    return console.error("Fetching book failed");
  }
  const data = await res.json();
  const bookData = data.book;
  return (
    <div className="h-[80vh] max-w-7xl mx-auto grid grid-cols-2 place-items-center">
      <div>
        <Image
          src={bookData.coverImage}
          alt={bookData.title}
          width={0}
          height={0}
          sizes="100%"
          style={{
            width: "300px",
            height: "80%",
          }}
        />
      </div>
      <div>
        <h1 className="text-primary text-4xl font-bold">{bookData.title}</h1>
        <h2 className="text-lg font-semibold mt-1">
          <span className="text-sm mr-2 font-semibold">Author:</span>
          {bookData.author}
        </h2>
        <h4 className="text-primary font-medium mt-1">
          <span className="text-sm mr-2 font-semibold text-black">Genre:</span>
          {bookData.genre}
        </h4>
        <p className="mt-4 mb-8 text-md font-medium flex flex-col">
          <span className="text-sm mb-1 font-semibold">Description:</span>
          <i>{bookData.description}</i>
        </p>
        <Link
          href={bookData.file}
          className="py-2 px-6 border-2 border-transparent rounded-md bg-primary text-white hover:bg-transparent hover:border-primary hover:text-primary transition-all font-medium"
        >
          Download Book
        </Link>
      </div>
    </div>
  );
};

export default singlePage;
