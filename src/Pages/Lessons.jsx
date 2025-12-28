import { useData } from "../hooks/UseData.js";
import LessonCard from "../Components/LessonCard.jsx";

const Lessons = () => {
  const { lessons, loading, Spinner } = useData();

  return (
    <>
      <h1 className="text-4xl text-center my-8 text-[var(--primary-color)] font-bold">الدروس</h1>
      <ul className="w-9/10 p-2.5 flex justify-center gap-10 flex-wrap my-24 max-w-5xl mx-auto">
        {loading || !lessons || lessons.length === 0
          ? Spinner()
          : lessons.map((lesson) => (
              <LessonCard key={lesson.id} lesson={lesson} />
            ))}
      </ul>
    </>
  );
};

export default Lessons;
