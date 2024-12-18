function Stats() {
  return (
    <div className="bg-gray-100 pt-10">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 lg:pb-16 bg-gray-300 rounded-3xl">
        {/* <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Trusted by eCommerce Businesses
        </h2>

        <p className="mt-4 text-gray-500 sm:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          dolores laborum labore provident impedit esse recusandae facere libero
          harum sequi.
        </p>
      </div> */}

        <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col rounded-lg bg-white px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-gray-500">
              Airport Trasnsfer
              <p className="text-sm text-gray-600">
                Layanan transportasi dari bandara ke tujuan akhir atau
                sebaliknya.
              </p>
            </dt>

            <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl mx-auto py-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                class="bi bi-airplane-fill"
                viewBox="0 0 16 16">
                <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849" />
              </svg>
            </dd>
          </div>

          <div className="flex flex-col rounded-lg bg-white px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-gray-500">
              Patwal Perjalanan
              <p className="text-sm text-gray-600">
                Pengawalan atau patroli keamanan selama perjalanan.
              </p>
            </dt>

            <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl mx-auto py-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                class="bi bi-people-fill"
                viewBox="0 0 16 16">
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
              </svg>
            </dd>
          </div>

          <div className="flex flex-col rounded-lg bg-white px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-gray-500">
              VIP Line
              <p className="text-sm text-gray-600">
                Jalur eksklusif untuk VIP, memungkinkan akses cepat di berbagai
                fasilitas.
              </p>
            </dt>

            <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl mx-auto py-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                class="bi bi-car-front-fill"
                viewBox="0 0 16 16">
                <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679q.05.242.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.8.8 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2m10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17s3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z" />
              </svg>
            </dd>
          </div>

          <div className="flex flex-col rounded-lg bg-white px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-gray-500">
              Coorporate Partner
              <p className="text-sm text-gray-600">
                Mitra bisnis yang berkolaborasi dalam berbagai inisiatif dan
                proyek.
              </p>
            </dt>

            <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl  mx-auto py-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                class="bi bi-person-badge-fill"
                viewBox="0 0 16 16">
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm4.5 0a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6m5 2.755C12.146 12.825 10.623 12 8 12s-4.146.826-5 1.755V14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1z" />
              </svg>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

export default Stats;
