import { useState, useEffect } from "react";
import axios from "axios";

function Aktivitas() {
  const [aktivitas, setAktivitas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8001/api/get/aktivitas")
      .then((response) => {
        console.log(response.data);
        if (response.data.status === "success") {
          setAktivitas(response.data.data);
        }
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Jika data masih loading
  if (loading) return <p>Loading...</p>;

  // Jika ada error
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="bg-gray-100">
      <div className="lg:mx-20 px-4 py-8 sm:px-6 sm:py-12 lg:px-8 bg-gray-300 lg:rounded-3xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Aktivitas Kami
          </h2>

          <p className="mt-4 text-gray-500 sm:text-xl">
            Kami memiliki armada kendaraan yang terawat dengan baik dan selalu
            siap untuk menemani perjalanan Anda. Mulai dari mobil ekonomi hingga
            SUV mewah, kami memiliki berbagai opsi untuk memenuhi kebutuhan
            transportasi Anda.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 py-20 overflow-x-auto">
          {aktivitas.map((item) => (
            <article class="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <img
                alt=""
                src={`http://localhost:8001/storage/${item.foto}`}
                class="h-56 w-full object-cover"
              />

              <div class="bg-white p-4 sm:p-6">
                <time datetime="2022-10-10" class="block text-xs text-gray-500">
                  {" "}
                  {/* 10th Oct 2022{" "} */}
                  {item.tanggal}
                </time>

                <a href="/">
                  <h3 class="mt-0.5 text-lg text-gray-900">{item.judul}</h3>
                </a>

                <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  {item.isi}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Aktivitas;
