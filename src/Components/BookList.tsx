import { Book } from "@/types";
import Image from "next/image";
import Link from "next/link";

const BookList = async () => {
  const response = await fetch(`${process.env.BACKEND_URI}books`, {
    method: "GET",
    cache: "no-store",
  });
  if (response === null) {
    throw new Error("Could not fetch");
  }
  const data = await response.json();
  const books: Book[] = data.books;

  return (
    <div className="max-w-7xl mx-auto flex flex-wrap gap-6">
      {books.map((book) => {
        return (
          <div
            key={book._id}
            className="shadow-md rounded-lg flex items-center gap-3 py-2 px-4 w-[30%]"
          >
            <div>
              <Image
                src={book.coverImage}
                alt={book.title}
                width={150}
                height={100}
                priority={true}
              />
            </div>
            <div>
              <h3 className="text-xl text-primary font-bold">{book.title}</h3>
              <h4 className="mb-12">{book.author}</h4>
              <Link
                className="py-2 px-4 text-center border-2 font-medium text-primary border-primary rounded-md hover:bg-primary hover:text-white transition-all"
                href={`/book/${book._id}`}
              >
                Read More
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BookList;
