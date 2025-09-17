import React, { useState } from "react";
import axios from "axios";

function InputTesti() {
  const [rating, setRating] = useState(0); // State untuk menyimpan rating
  const [name, setName] = useState(""); // State untuk nama
  const [judul, setJudul] = useState(""); // State untuk judul
  const [message, setMessage] = useState(""); // State untuk pesan

  const apiurl = process.env.API_URL;

  const handleSubmit = async (event) => {
    event.preventDefault(); // Mencegah reload halaman

    // Data yang akan dikirim ke API
    const ulasanData = {
      nama: name,
      judul: judul,
      isi: message,
      rating: rating.toString(),
    };

    try {
      const response = await axios.post(
        `${apiurl}/api/post/ulasan`,
        ulasanData
      );
      if (response.status === 200) {
        alert("Ulasan berhasil dikirim!");
      } else {
        alert("Gagal mengirim ulasan. Silakan coba lagi.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan saat mengirim ulasan.");
    }
  };

  return (
    <div>
      <section className="bg-gray-100 w-screen">
        <div className="mx-auto lg:px-12 px-3 pb-20">
          <h2 className="text-3xl text-start font-bold tracking-tight text-gray-900 sm:text-4xl mb-5">
            Beri Ulasan
          </h2>
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Komponen Rating */}
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <div key={value}>
                      <input
                        className="sr-only peer"
                        type="radio"
                        id={`star${value}`}
                        name="rating"
                        value={value}
                        onClick={() => setRating(value)} // Ketika bintang diklik
                      />
                      <label
                        htmlFor={`star${value}`}
                        className={`w-full cursor-pointer text-3xl ${
                          value <= rating ? "fill-amber-400" : "fill-gray-300"
                        }`}
                        tabIndex="0">
                        <svg className="h-8 w-8 shrink-0" viewBox="0 0 256 256">
                          <path d="M239.2 97.4A16.4 16.4 0 0 0 224.6 86l-59.4-4.1-22-55.5A16.4 16.4 0 0 0 128 16h0a16.4 16.4 0 0 0-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5 0 0 0 16.8 97.4 16.8 16.8 0 0 0 22 115.5l45.4 38.4L53.9 207a18.5 18.5 0 0 0 7 19.6 18 18 0 0 0 20.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1 0 0 0 8.7 2.6 16.5 16.5 0 0 0 15.8-20.8l-14.3-58.1L234 115.5A16.8 16.8 0 0 0 239.2 97.4z"></path>
                        </svg>
                      </label>
                    </div>
                  ))}
                </div>

                {/* Input Nama */}
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Your Name"
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)} // Perbarui state nama
                  />
                </div>

                {/* Input Judul */}
                <div>
                  <label className="sr-only" htmlFor="judul">
                    Judul
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Judul"
                    type="text"
                    id="judul"
                    value={judul}
                    onChange={(e) => setJudul(e.target.value)} // Perbarui state judul
                  />
                </div>

                {/* Input Pesan */}
                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Message"
                    rows="8"
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)} // Perbarui state pesan
                  ></textarea>
                </div>

                {/* Tombol Kirim */}
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
