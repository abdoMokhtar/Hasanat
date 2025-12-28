import { Link } from "react-router-dom";

const LessonCard = ({ lesson }) => {
  return (
    <li className="w-full max-w-[350px] min-w-[300px] bg-[var(--card-background)] rounded-xl shadow-[var(--shadow)] overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-lg)] hover:-translate-y-2">
      <div className="relative h-48">
        <img
          className="absolute h-full w-full object-contain"
          src={lesson.image}
          alt={lesson.teacher}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <h2 className="absolute bottom-0 right-0 p-4 text-2xl font-bold text-white">
          {lesson.title}
        </h2>
      </div>
      <div className="p-5 flex flex-col items-center gap-4">
        <p className="text-lg font-medium text-[var(--text-color-dark)]">
          {lesson.teacher}
        </p>
      </div>
      <Link
        to={`/lessons/series/${lesson.id}`}
        className="block w-full text-center bg-[var(--primary-color)] text-[var(--text-color-light)] py-3 font-semibold transition-colors duration-300 hover:bg-[var(--accent-color)] hover:text-[var(--text-color-dark)]"
      >
        عرض السلسلة
      </Link>
    </li>
  );
};

export default LessonCard;
