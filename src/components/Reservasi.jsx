import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";

function Reservasi() {
  const [armada, setArmada] = useState([]); // State untuk menyimpan data armada
  const [selectedArmada, setSelectedArmada] = useState(""); // State untuk menyimpan armada yang dipilih
  const [name, setName] = useState(""); // State untuk menyimpan nama
  const [email, setEmail] = useState(""); // State untuk menyimpan email
  const [phone, setPhone] = useState(""); // State untuk menyimpan nomor telepon
  const [tanggal, setTanggal] = useState(""); // State untuk menyimpan nomor telepon
  const [message, setMessage] = useState(""); // State untuk menyimpan pesan
  const [loading, setLoading] = useState(true); // State untuk status loading
  const [error, setError] = useState(null); // State untuk menyimpan error jika ada

  // Mengambil data dari API saat komponen pertama kali dimuat
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/get/armada") // Ganti dengan URL API-mu
      .then((response) => {
        if (response.data.status === "success") {
          setArmada(response.data.data); // Set data armada ke state
        }
      })
      .catch((err) => {
        setError(err.message); // Simpan error jika ada
      })
      .finally(() => {
        setLoading(false); // Selesai loading
      });
  }, []); // Kosongkan array dependencies untuk memanggil hanya sekali saat pertama kali dimuat

  // Jika data masih loading
  if (loading) return <Loading />;

  // Jika ada error
  if (error) return <p>Error: {error}</p>;

  // Fungsi untuk menangani submit form
  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah reload halaman

    // Data yang akan dikirimkan
    const formData = {
      name,
      email,
      phone,
      tanggal,
      armada: selectedArmada,
      message,
    };

    // Mengirim data ke API
    axios
      .post("http://localhost:8000/api/post/reservasi", formData) // Ganti dengan URL API-mu untuk submit form
      .then((response) => {
        console.log(response);
        if (response.data.status === "success") {
          alert("Form submitted successfully!");
          // Reset form setelah submit berhasil
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
          setSelectedArmada("");
        }
      })
      .catch((err) => {
        setError(err.message); // Menangani error jika submit gagal
      });
  };

  return (
    <>
      <section className="bg-gray-100 pt-20">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <p className="max-w-xl text-lg font-light text-start">
                Pesan mobil sewaan Anda sekarang dan nikmati perjalanan yang
                nyaman dan aman bersama kami. <br /> <br />
                Isi form di samping untuk melakukan pemesanan atau hubungi
                melalui whatsapp.
              </p>

              <div className="mt-8">
                <a
                  href="https://wa.me/+6282267496504"
                  className="text-2xl font-bold text-pink-600">
                  {" "}
                  0822 - 6709 - 6504{" "}
                </a>

                <address className="mt-2 not-italic font-bold">
                  Kota Medan, Sumatera Utara
                </address>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="name">
                    Nama
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Nama"
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)} // Menangani perubahan input
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Alamat Email (jika ada)"
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)} // Menangani perubahan input
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="email">
                      Tanggal
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Tanggal"
                      type="date"
                      id="tanggal"
                      value={tanggal}
                      onChange={(e) => setTanggal(e.target.value)} // Menangani perubahan input
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)} // Menangani perubahan input
                    />
                  </div>
                </div>

                {/* Dropdown Armada */}
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="armadaDropdown"></label>
                  <select
                    id="armadaDropdown"
                    name="armada"
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    value={selectedArmada}
                    onChange={(e) => setSelectedArmada(e.target.value)} // Menangani perubahan input
                  >
                    <option value="">Pilih Armada</option>
                    {/* Loop melalui data armada yang didapat dari API */}
                    {armada.map((item) => (
                      <option key={item.id} value={item.nama}>
                        {item.nama}
                        {/* Ganti sesuai dengan nama atau field yang ada pada data */}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Masukkan pesan Anda"
                    rows="8"
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)} // Menangani perubahan input
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto">
                    Booking
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Reservasi;
