import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="relative w-full py-24 bg-[#0A0A0A] text-white overflow-hidden">

      {/* Background world map dots (exact style like image) */}
      <div className="absolute inset-0 bg-[url('/about-dots.png')] bg-cover bg-center opacity-[0.25]" />

      {/* Black gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black/95" />

      {/* Content */}
      <div className="relative mx-auto max-w-5xl px-6 text-center">

        {/* Heading */}
        <h3 className="text-4xl font-semibold tracking-wide mb-6">
          ABOUT RIZONN
        </h3>

        {/* Paragraph */}
        <p className="mt-4 text-[17px] leading-relaxed text-gray-300 max-w-3xl mx-auto">
          As an innovation-driven team, Rizonn focuses on developing collaboration
          solutions that enable immersive communications. Since our establishment,
          we have enhanced workplace creativity and productivity worldwide by
          providing advanced display technologies and end-to-end solutions.
        </p>

        <p className="mt-4 text-[17px] leading-relaxed text-gray-300 max-w-3xl mx-auto">
          Our ecosystem delivers total solutions for all scenarios—from smart
          interactive displays and unified communication devices to digital
          signage and mobile stands for flexible work environments.
        </p>

        {/* CTA Button */}
        <Link
          href="/about"
          className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 transition-all px-8 py-3 rounded-lg text-white font-medium shadow-lg"
        >
          Learn More →
        </Link>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

          {/* Stat 1 */}
          <div>
            <p className="text-4xl font-bold">6500+</p>
            <p className="text-gray-400 mt-2 text-sm tracking-wide">
              Total Employees
            </p>
          </div>

          {/* Stat 2 */}
          <div>
            <p className="text-4xl font-bold">30</p>
            <p className="text-gray-400 mt-2 text-sm tracking-wide">
              Average Age
            </p>
          </div>

          {/* Stat 3 */}
          <div>
            <p className="text-4xl font-bold">60%</p>
            <p className="text-gray-400 mt-2 text-sm tracking-wide">
              R&D Engineer
            </p>
          </div>

          {/* Stat 4 */}
          <div>
            <p className="text-4xl font-bold">US$ 3B</p>
            <p className="text-gray-400 mt-2 text-sm tracking-wide">
              Revenue
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
