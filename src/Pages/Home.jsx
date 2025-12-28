import { Link } from "react-router-dom";

const Home = () => {
  const features = [
    {
      icon: "fa-solid fa-book-open",
      title: "الدروس العلمية",
      description:
        "استمع لسلاسل علمية ماتعة في العقيدة، السيرة، الفقه، وغيرها.",
      path: "/lessons",
    },
    {
      icon: "fa-solid fa-hands-praying",
      title: "الأذكار اليومية",
      description:
        "حصن يومك بأذكار الصباح والمساء، وعدّاد لمساعدتك على المتابعة.",
      path: "/azkar",
    },
    {
      icon: "fa-solid fa-clock",
      title: "مواقيت الصلاة",
      description: "تابع مواقيت الصلاة اليومية لمدينتك حتى لا تفوتك صلاة.",
      path: "/salat",
    },
  ];

  return (
    <main className="flex flex-col items-center text-center px-4 pt-24 pb-12 text-[var(--text-color-dark)]">
      {/* Hero Section */}
      <section className="w-full max-w-4xl py-16 md:py-24">
        <i className="fa-solid fa-mosque text-7xl md:text-8xl text-[var(--primary-color)] mb-6"></i>
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--primary-color)] mb-4">
          موقع حسنات
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600">
          بوابتك لزيادة إيمانك وعلمك. نقدم لك دروساً نافعة، أذكاراً حصينة،
          ومواقيت دقيقة لتكون عوناً لك في طريقك إلى الله.
        </p>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Link to={feature.path} key={index}>
              <div className="bg-[var(--card-background)] p-8 rounded-xl shadow-[var(--shadow)] h-full flex flex-col items-center transform hover:-translate-y-2 transition-transform duration-300">
                <i
                  className={`${feature.icon} text-5xl text-[var(--accent-color)] mb-5`}
                ></i>
                <h3 className="text-2xl font-semibold text-[var(--primary-color)] mb-3">
                  {feature.title}
                </h3>
                <p className="text-base text-gray-500">{feature.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
