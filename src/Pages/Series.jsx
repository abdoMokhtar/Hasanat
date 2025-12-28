import { useData } from "../hooks/UseData.js";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BioSeries from "../Components/BioSeries.jsx";
import Card from "../Components/Card.jsx";

const Series = () => {
  const { lessons, loading, Spinner } = useData();
  const { seriesId } = useParams();
  const [currentSeries, setCurrentSeries] = useState(null);

  useEffect(() => {
    if (!loading && lessons.length > 0) {
      const foundSeries = lessons.find((e) => e.id === seriesId);
      setCurrentSeries(foundSeries);
    }
  }, [lessons, seriesId, loading]);

  if (loading || !currentSeries) {
    return Spinner();
  }
  return (
    <article className="w-9/10 min-w-[305px] flex justify-around gap-5 p-2 my-24 flex-col items-center max-sm:text-[70%]">
      <BioSeries
        name={currentSeries.teacher}
        section={currentSeries.title}
        image={currentSeries.image}
      />
      <ul className="p-2.5 flex flex-col gap-5 items-center w-full">
        {currentSeries.episodes.map((item, index) => (
          <Card key={index} content={item.title} episodeNumber={`${index + 1}`}>
            <Link
              to={item.link}
              target="_blank"
              className="bg-[var(--accent-color)] text-[var(--text-color-dark)] p-2.5 rounded-lg cursor-pointer hover:bg-[var(--primary-color)] hover:text-[var(--text-color-light)] transition-colors"
            >
              استمع
            </Link>
          </Card>
        ))}
      </ul>
    </article>
  );
};

export default Series;
