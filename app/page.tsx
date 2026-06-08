export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <header className="bg-black text-white p-5">
        <h1 className="text-3xl font-bold">
          VietsMedia Website OS
        </h1>
      </header>

      <section className="p-10">
        <h2 className="text-2xl font-semibold mb-6">
          Hệ điều hành quản trị doanh nghiệp
        </h2>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded shadow">
            CEO Dashboard
          </div>

          <div className="bg-white p-6 rounded shadow">
            HR Dashboard
          </div>

          <div className="bg-white p-6 rounded shadow">
            CRM
          </div>

          <div className="bg-white p-6 rounded shadow">
            Sales Dashboard
          </div>

          <div className="bg-white p-6 rounded shadow">
            SOP
          </div>

          <div className="bg-white p-6 rounded shadow">
            AI Assistant
          </div>
        </div>
      </section>
    </main>
  );
}