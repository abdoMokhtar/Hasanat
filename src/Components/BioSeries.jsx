const BioSeries = ({ name, image, section }) => {
  return (
    <div className="w-full max-w-3xl bg-[var(--card-background)] rounded-2xl p-6 flex flex-col items-center gap-6 shadow-[var(--shadow)] text-center">
      <img
        className="w-32 h-32 rounded-full object-cover border-4 border-[var(--primary-color)] shadow-lg"
        src={`/${image}`}
        alt={`صورة المحاضر ${name}`}
      />

      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold text-[var(--primary-color)]">
          {section}
        </h2>
        <p className="text-lg text-[var(--text-color-dark)] leading-relaxed">
          يقدمها الشيخ الفاضل: <span className="font-semibold">{name}</span>
          <br />
          نسأل الله أن ينفعنا بعلمه ويجعله في ميزان حسناته.
        </p>
      </div>
    </div>
  );
};

export default BioSeries;
