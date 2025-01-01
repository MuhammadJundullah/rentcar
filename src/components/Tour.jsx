import { useState, useEffect } from "react";
import axios from "axios";

function Tour() {
  const [Tour, setTour] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/get/tour")
      .then((response) => {
        if (response.data.status === "success") {
          console.log(response.data.data);
          setTour(response.data.data);
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
    <div
      className="mx-auto px-4 sm:px-6 py-32 lg:px-8 bg-gray-100"
      style={{
        backgroundImage: "url('/media/paketour.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}>
      <div className="text-center ">
        <h2 className="text-3xl font-bold text-gray-100 sm:text-4xl">
          Paket Tour
        </h2>
        <p className="mt-4 text-gray-100 sm:text-xl">
          Kami memiliki armada kendaraan yang terawat dengan baik dan selalu
          siap untuk menemani perjalanan Anda. Mulai dari mobil ekonomi hingga
          SUV mewah, kami memiliki berbagai opsi untuk memenuhi kebutuhan
          transportasi Anda.
        </p>
      </div>
      <d className=" grid lg:grid-cols-4 md:grid-cols-2 gap-10 py-20">
        {Tour.map((item, index) => (
          <a
            key={index}
            className={`group h-96 relative flex flex-col w-full min-h-60 bg-center bg-cover rounded-xl hover:shadow-lg focus:outline-none focus:shadow-lg transition`}
            style={{
              backgroundImage: `url('http://localhost:8000/storage/${item.foto}')`,
            }}
            href="/reservasi-online">
            <div className="flex-auto p-4 md:p-6">
              <h3 className="text-xl text-white/90 group-hover:text-white">
                {item.deskripsi}
              </h3>
            </div>
            <div className="pt-0 p-4 md:p-6">
              <div className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/70">
                Booking Sekarang !
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </div>
            </div>
          </a>
        ))}
      </d>
    </div>
  );
}

export default Tour;
