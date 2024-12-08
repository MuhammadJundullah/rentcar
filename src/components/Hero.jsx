function Hero() {
  return (
    <section className="overflow-hidden bg-[url(https://www.asuransiku.id/support/images/upload-photos/article/artikel3-bisnis-travel-besar.png)] bg-cover bg-top bg-no-repeat">
      <div className="bg-black/50 p-8 md:p-12 lg:px-16 lg:py-40 h-auto py-28 sm:flex justify-around block items-center">
        <div className="text-center ltr:sm:text-left rtl:sm:text-right">
          <p className="text-start font-extrabold text-gray-300">Brand</p>
          <h2 className="max-w-lg text-start text-2xl font-bold text-white sm:text-3xl md:text-5xl">
            Rent Car, Tour and Travel on Sumatera Utara
          </h2>

          <p className="max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed text-sm py-10 text-start">
            Apakah Anda sedang mencari solusi transportasi yang nyaman dan
            handal ? Puzalla adalah pilihan yang tepat untuk memenuhi kebutuhan
            perjalanan Anda. Kami menyediakan layanan rental mobil berkualitas
            tinggi dengan berbagai pilihan kendaraan yang dapat disesuaikan
            dengan kebutuhan Anda.
          </p>
        </div>
        <div className="block">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
            rent a car and tour now !
          </h2>

          <div className="sm:flex gap-2 sm:space-y-0 space-y-7 justify-center py-5 gap-x-10">
            <label
              htmlFor="UserEmail"
              className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-white focus-within:ring-1 ">
              <input
                type="email"
                id="UserEmail"
                placeholder="Lokasi"
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm text-white"
              />

              <span className="absolute start-3 top-3 -translate-y-1/2 text-xs transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs text-white">
                Lokasi
              </span>
            </label>
            <label
              htmlFor="UserEmail"
              className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-white focus-within:ring-1 ">
              <input
                type="email"
                id="UserEmail"
                placeholder="Mobil"
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm text-white"
              />

              <span className="absolute start-3 top-3 -translate-y-1/2 text-xs  transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs text-white">
                Mobil
              </span>
            </label>
            <label
              htmlFor="UserEmail"
              className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-white focus-within:ring-1 ">
              <input
                type="email"
                id="UserEmail"
                placeholder="Whatsapp"
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm text-white"
              />

              <span className="absolute start-3 top-3 -translate-y-1/2 text-xs  transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs text-white">
                Whatsapp
              </span>
            </label>
          </div>

          <div className="mt-4 sm:mt-8">
            <a
              href="/"
              className="inline-block rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400">
              Booking
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
