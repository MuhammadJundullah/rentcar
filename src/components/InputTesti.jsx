import { Rating } from "@material-tailwind/react";

function InputTesti() {
  return (
    <div>
      <section className="bg-gray-100 w-screen">
        <div className="mx-auto lg:px-12 px-3 pb-20">
          <h2 className="text-3xl text-start font-bold tracking-tight text-gray-900 sm:text-4xl mb-5">
            Beri Ulasan
          </h2>
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form action="/" className="space-y-4">
                <div className="flex gap-0.5">
                  <div>
                    <Rating></Rating>
                    <input
                      className="sr-only peer"
                      type="radio"
                      id="star1"
                      name="rating"
                      value="1"
                    />
                    <label
                      htmlFor="star1"
                      className="w-full cursor-pointer text-3xl fill-gray-300 peer-checked:fill-amber-400 peer-checked:peer-first:fill-amber-400"
                      tabIndex="0">
                      <svg className="h-8 w-8 shrink-0" viewBox="0 0 256 256">
                        <path d="M239.2 97.4A16.4 16.4 0 0 0 224.6 86l-59.4-4.1-22-55.5A16.4 16.4 0 0 0 128 16h0a16.4 16.4 0 0 0-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5 0 0 0 16.8 97.4 16.8 16.8 0 0 0 22 115.5l45.4 38.4L53.9 207a18.5 18.5 0 0 0 7 19.6 18 18 0 0 0 20.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1 0 0 0 8.7 2.6 16.5 16.5 0 0 0 15.8-20.8l-14.3-58.1L234 115.5A16.8 16.8 0 0 0 239.2 97.4z"></path>
                      </svg>
                    </label>
                  </div>

                  <div>
                    <input
                      className="sr-only peer"
                      type="radio"
                      id="star2"
                      name="rating"
                      value="2"
                    />
                    <label
                      htmlFor="star2"
                      className="w-full cursor-pointer text-3xl fill-gray-300 peer-checked:fill-amber-400"
                      tabIndex="0">
                      <svg className="h-8 w-8 shrink-0" viewBox="0 0 256 256">
                        <path d="M239.2 97.4A16.4 16.4 0 0 0 224.6 86l-59.4-4.1-22-55.5A16.4 16.4 0 0 0 128 16h0a16.4 16.4 0 0 0-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5 0 0 0 16.8 97.4 16.8 16.8 0 0 0 22 115.5l45.4 38.4L53.9 207a18.5 18.5 0 0 0 7 19.6 18 18 0 0 0 20.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1 0 0 0 8.7 2.6 16.5 16.5 0 0 0 15.8-20.8l-14.3-58.1L234 115.5A16.8 16.8 0 0 0 239.2 97.4z"></path>
                      </svg>
                    </label>
                  </div>

                  <div>
                    <input
                      className="sr-only peer"
                      type="radio"
                      id="star3"
                      name="rating"
                      value="3"
                    />
                    <label
                      htmlFor="star3"
                      className="w-full cursor-pointer text-3xl fill-gray-300 peer-checked:fill-amber-400"
                      tabIndex="0">
                      <svg className="h-8 w-8 shrink-0" viewBox="0 0 256 256">
                        <path d="M239.2 97.4A16.4 16.4 0 0 0 224.6 86l-59.4-4.1-22-55.5A16.4 16.4 0 0 0 128 16h0a16.4 16.4 0 0 0-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5 0 0 0 16.8 97.4 16.8 16.8 0 0 0 22 115.5l45.4 38.4L53.9 207a18.5 18.5 0 0 0 7 19.6 18 18 0 0 0 20.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1 0 0 0 8.7 2.6 16.5 16.5 0 0 0 15.8-20.8l-14.3-58.1L234 115.5A16.8 16.8 0 0 0 239.2 97.4z"></path>
                      </svg>
                    </label>
                  </div>

                  <div>
                    <input
                      className="sr-only peer"
                      type="radio"
                      id="star4"
                      name="rating"
                      value="4"
                    />
                    <label
                      htmlFor="star4"
                      className="w-full cursor-pointer text-3xl fill-gray-300 peer-checked:fill-amber-400"
                      tabIndex="0">
                      <svg className="h-8 w-8 shrink-0" viewBox="0 0 256 256">
                        <path d="M239.2 97.4A16.4 16.4 0 0 0 224.6 86l-59.4-4.1-22-55.5A16.4 16.4 0 0 0 128 16h0a16.4 16.4 0 0 0-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5 0 0 0 16.8 97.4 16.8 16.8 0 0 0 22 115.5l45.4 38.4L53.9 207a18.5 18.5 0 0 0 7 19.6 18 18 0 0 0 20.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1 0 0 0 8.7 2.6 16.5 16.5 0 0 0 15.8-20.8l-14.3-58.1L234 115.5A16.8 16.8 0 0 0 239.2 97.4z"></path>
                      </svg>
                    </label>
                  </div>

                  <div>
                    <input
                      className="sr-only peer"
                      type="radio"
                      id="star5"
                      name="rating"
                      value="5"
                    />
                    <label
                      htmlFor="star5"
                      className="w-full cursor-pointer text-3xl fill-gray-300 peer-checked:fill-amber-400"
                      tabIndex="0">
                      <svg className="h-8 w-8 shrink-0" viewBox="0 0 256 256">
                        <path d="M239.2 97.4A16.4 16.4 0 0 0 224.6 86l-59.4-4.1-22-55.5A16.4 16.4 0 0 0 128 16h0a16.4 16.4 0 0 0-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5 0 0 0 16.8 97.4 16.8 16.8 0 0 0 22 115.5l45.4 38.4L53.9 207a18.5 18.5 0 0 0 7 19.6 18 18 0 0 0 20.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1 0 0 0 8.7 2.6 16.5 16.5 0 0 0 15.8-20.8l-14.3-58.1L234 115.5A16.8 16.8 0 0 0 239.2 97.4z"></path>
                      </svg>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Your Name"
                    type="text"
                    id="name"
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="judul">
                    Judul
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Judul"
                    type="text"
                    id="judul"
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>

                  <textarea
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Message"
                    rows="8"
                    id="message"></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto">
                    Kirim Ulasan
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default InputTesti;
