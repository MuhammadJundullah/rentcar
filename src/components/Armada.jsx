function Armada() {
  return (
    <div className="mx-auto  px-4 py-8 sm:px-6 sm:py-12 lg:px-8 bg-gray-100 ">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Armada Kami
        </h2>

        <p className="mt-4 text-gray-500 sm:text-xl">
          Kami memiliki armada kendaraan yang terawat dengan baik dan selalu
          siap untuk menemani perjalanan Anda. Mulai dari mobil ekonomi hingga
          SUV mewah, kami memiliki berbagai opsi untuk memenuhi kebutuhan
          transportasi Anda.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 py-20 overflow-x-auto">
        <article className="flex bg-white transition hover:shadow-xl">
          <div className="hidden sm:block sm:basis-56">
            <img alt="mobil" src="/media/alphard.png" className="my-10" />
          </div>

          <div className="flex flex-1 flex-col justify-between">
            <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
              <a href="/">
                <h3 className="font-bold uppercase text-gray-900">
                  Luxury | Alphard
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                Harga Mulai Rp 2.200.000 / 24 Jam
              </p>
            </div>

            <div className="sm:flex sm:items-end sm:justify-end">
              <a
                href="/"
                className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400">
                Booking
              </a>
            </div>
          </div>
        </article>
        <article className="flex bg-white transition hover:shadow-xl">
          <div className="hidden sm:block sm:basis-56">
            <img alt="mobil" src="/media/alphard.png" className="my-10" />
          </div>

          <div className="flex flex-1 flex-col justify-between">
            <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
              <a href="/">
                <h3 className="font-bold uppercase text-gray-900">
                  Luxury | Alphard
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                Harga Mulai Rp 2.200.000 / 24 Jam
              </p>
            </div>

            <div className="sm:flex sm:items-end sm:justify-end">
              <a
                href="/"
                className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400">
                Booking
              </a>
            </div>
          </div>
        </article>
        <article className="flex bg-white transition hover:shadow-xl">
          <div className="hidden sm:block sm:basis-56">
            <img alt="mobil" src="/media/alphard.png" className="my-10" />
          </div>

          <div className="flex flex-1 flex-col justify-between">
            <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
              <a href="/">
                <h3 className="font-bold uppercase text-gray-900">
                  Luxury | Alphard
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                Harga Mulai Rp 2.200.000 / 24 Jam
              </p>
            </div>

            <div className="sm:flex sm:items-end sm:justify-end">
              <a
                href="/"
                className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400">
                Booking
              </a>
            </div>
          </div>
        </article>
      </div>
      <a href="/unit-kendaraan">
        <button
          type="button"
          class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
          Lihat semua armada
        </button>
      </a>
    </div>
  );
}

export default Armada;
