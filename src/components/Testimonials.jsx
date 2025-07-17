import user1 from '../assets/images/user1.png';
import user2 from '../assets/images/user2.png';
import starGroup from '../assets/images/stars.png';
import quoteIcon from '../assets/images/quote.png';
import testimonialimg from '../assets/images/material-symbols_electric-bolt-outline.png';
import '../assets/styles/Testimonial.css'

const testimonials = [
  {
    name: 'Priya Patel',
    role: 'Homeowner',
    image: user1,
    quote:
      "The electrical panel upgrade done by ZAHRIX was seamless. Their electricians were courteous, knowledgeable, and provided excellent customer service. I'm thrilled with the results!",
  },
  {
    name: 'Rahul Sharma',
    role: 'Facility Manager',
    image: user2,
    quote:
      "ZAHRIX Electrical Services delivered exceptional work on our office electrical upgrade. Their team was professional, efficient, and completed the project on time. Highly recommended!",
  },
];

const Testimonials = () => {
  return (
    <section id='testimonial' className="bg-[#f4f4f4] py-16 px-4 text-center">
      <h2 className="text-3xl lg:text-4xl font-bold text-black mb-2 flex justify-center items-center gap-2">
        OUR TESTIMONIALS
        <img src={testimonialimg} alt="testimonial icon" className="h-8 w-auto" />
      </h2>
      <p className="text-3xl text-[#4A66A0] text-center font-semibold mt-10 mb-10">Real People, Real Results</p>

      <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 max-w-7xl mx-auto">
        {testimonials.map((t, idx) => (
          <div className="relative flex-1" key={idx}>
            <div className="card-shadow absolute bottom-[-24px] right-[-20px] w-[80%] h-[100px] bg-[#4A66A0] rounded-3xl z-0"></div>

            <div className="testimonial-card min-h-[350px] gap-5  relative bg-white rounded-tl-[8rem] rounded-tr-[8rem] shadow-lg text-left p-6 pt-16 border border-gray-200 z-10">

              <div className="user-profile absolute top-0 mx-5 left-16 flex items-center gap-3 bg-[#4A66A0] text-white pl-10 pr-4 py-2 rounded-full z-10">
                <div className="w-15 h-12 -ml-10">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-13 h-14 rounded-full object-cover border-2 border-white"
                  />
                </div>
                <div className="ml-2">
                  <p className="text-base font-semibold">{t.name}</p>
                  <p className="text-sm">{t.role}</p>
                </div>
              </div>

              <div className="star absolute top-8 mx-10 right-16 z-10">
                <img src={starGroup} alt="Stars" className="w-38" />
              </div>

              <p className="quote text-blue-700 text-xl font-medium leading-relaxed mt-14 z-10 relative px-2">
                “{t.quote}”
              </p>

              <div className="absolute bottom-4 right-6 z-10">
                <img src={quoteIcon} alt="quote" className="w-6 h-6" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24 flex justify-center gap-4">
        <button className="w-12 h-12 bg-[#4A66A0] hover:bg-gray-400 text-white text-2xl font-bold rounded">
          &lt;
        </button>

        <button className="w-12 h-12 mx-10 bg-[#4A66A0] hover:bg-gray-400 text-white text-2xl font-bold rounded">
          &gt;
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
