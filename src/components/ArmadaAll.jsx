import { useState, useEffect } from "react";
import axios from "axios";

function ArmadaAll() {
  const [armada, setArmada] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8001/api/get/armada")
      .then((response) => {
        if (response.data.status === "success") {
          setArmada(response.data.data);
        }
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error}</p>;

  return (
    <div className="bg-gray-100 h-screen">
      <div className="mx-auto h-screen px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl text-center ">
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
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 py-20">
          {armada.map((item) => (
            <article
              key={item.id}
              className="flex bg-white transition hover:shadow-xl">
              <div className="hidden sm:block sm:basis-56">
                <img
                  alt={item.nama}
                  src={`http://localhost:8001/storage/${item.foto}`}
                  className="my-10"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                  <a href="/">
                    <h3 className="font-bold uppercase text-gray-900">
                      {item.kelas} | {item.nama}
                    </h3>
                  </a>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                    Harga Mulai Rp {item.harga} / 24 Jam
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default ArmadaAll;
