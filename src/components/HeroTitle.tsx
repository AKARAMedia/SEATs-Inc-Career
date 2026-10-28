// Hero heading with motion: each word slides up out of a mask in turn, then the brand words
// ("S.E.A.T.S Inc.") keep a letter-by-letter wave running, with each letter lifting and flashing green.
// The h1 carries the plain text for assistive tech; the animated spans are hidden from it.
export default function HeroTitle({ text, className = "" }: { text: string; className?: string }) {
  const words = text.split(" ");
  let brandLetter = 0;
  return (
    <h1 aria-label={text} className={className}>
      {words.map((word, i) => {
        const brand = word.includes("S.E.A.T.S") || word.startsWith("Inc");
        return (
          <span key={i} aria-hidden>
            <span className="hero-word-mask">
              <span
                className="hero-word"
                style={{ "--word-delay": `${0.15 + i * 0.12}s` } as React.CSSProperties}
              >
                {brand
                  ? Array.from(word).map((ch, c) => (
                      <span
                        key={c}
                        className="hero-letter"
                        style={{ "--letter-delay": `${brandLetter++ * 0.1}s` } as React.CSSProperties}
                      >
                        {ch}
                      </span>
                    ))
                  : word}
              </span>
            </span>
            {i < words.length - 1 ? " " : null}
          </span>
        );
      })}
    </h1>
  );
}
