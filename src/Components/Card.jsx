const Card = ({ content, children, className = "", repeat, episodeNumber }) => {
  return (
    <li
      className={`grow bg-[var(--card-background)] w-full min-h-20 min-w-[290px] max-w-2xl flex justify-evenly gap-1.5 items-center p-2.5 rounded-xl shadow-[var(--shadow)] ${className}`}
    >
      {episodeNumber && (
        <span className="text-[var(--primary-color)] font-bold text-lg">
          {episodeNumber}
        </span>
      )}
      <p className="w-6/10 text-wrap font-medium text-[var(--text-color-dark)]">
        {content}
      </p>
      {repeat && (
        <span className="text-[var(--accent-color)] font-bold">{repeat}</span>
      )}
      {children}
    </li>
  );
};

export default Card;
