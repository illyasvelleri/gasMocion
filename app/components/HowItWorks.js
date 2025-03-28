export default function HowItWorks() {
    return (
        <div className="bg-background">
        <section 
            className="relative max-w-5xl mx-auto px-6 py-16 text-white"
            style={{
                backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.5)), url('https://img.freepik.com/free-photo/view-luxurious-hotel-interior-space_23-2150683413.jpg?t=st=1743058764~exp=1743062364~hmac=a5074d7ed3c73a4346d86364a7a96db991bf9b444880963274268af278205c16&w=1380')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "12px"
            }}
        >
            <h2 className="text-4xl font-extrabold text-center mb-12">
                How It Works
            </h2>

            <div className="space-y-14">
                {[
                    {
                        step: "01",
                        title: "Match with a designer & get inspired",
                        description:
                            "With 10 years of experience and 100,000+ designs, we’ll help refine your style and bring your vision to life.",
                    },
                    {
                        step: "02",
                        title: "Collaborate to design your perfect space",
                        description:
                            "Work 1:1 with your designer to craft a space tailored to your needs. Experience it in 3D before finalizing.",
                        reverse: true,
                    },
                    {
                        step: "03",
                        title: "Bring your design home with ease",
                        description:
                            "Shop from 100+ brands with a seamless checkout process and price guarantees.",
                    },
                ].map(({ step, title, description, reverse }, index) => (
                    <div
                        key={index}
                        className={`flex flex-col ${
                            reverse ? "md:flex-row-reverse" : "md:flex-row"
                        } items-center gap-8`}
                    >
                        {/* Step Number */}
                        <div className="w-16 h-16 flex items-center justify-center bg-yellow-500 text-gray-900 text-3xl font-bold rounded-full shadow-lg">
                            {step}
                        </div>

                        {/* Text Content */}
                        <div className="md:w-3/4">
                            <h3 className="text-2xl font-semibold">{title}</h3>
                            <p className="mt-2 leading-relaxed">{description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        </div>
    );
}
