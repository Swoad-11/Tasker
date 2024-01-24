import Header from "./Header";

export default function TaskTable() {
  return (
    <>
      <section className="mb-20">
        <div className="container mx-auto">
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <Header />
          </div>
        </div>
      </section>
    </>
  );
}