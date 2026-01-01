import hero from "../assets/hero.jpg"
const Hero = () => {
  return (
    <section className="min-h-screen bg-[#F6F4EF] flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        
        {/* Text */}
        <div className="order-1">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl leading-tight text-[#1C1C1C]">
            Spaces, shaped<br />with intent.
          </h1>

          <p className="mt-6 text-base sm:text-lg text-[#6B6B6B] max-w-md">
            Residential and commercial interiors designed across styles,
            scales, and moods.
          </p>

          <button className="mt-10 inline-block border border-[#1C1C1C] px-8 py-4 text-sm uppercase tracking-wide hover:bg-[#1C1C1C] hover:text-[#F6F4EF] transition">
            View Work
          </button>
        </div>

        {/* Image */}
        <div className="order-2 w-full h-[60vh] md:h-[70vh] overflow-hidden">
          <img
            src={hero}
            alt="Interior design showcase"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
