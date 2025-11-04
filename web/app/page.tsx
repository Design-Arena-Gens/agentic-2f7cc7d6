export default function Home() {
  return (
    <main>
      <div className="scene" aria-hidden>
        {/* sunlight beams and haze */}
        <div className="beams" />
        <div className="haze" />

        {/* distant trees */}
        <svg className="layer layer--far" viewBox="0 0 1600 600" preserveAspectRatio="xMidYMax slice" aria-hidden>
          <g fill="#cbd5e1" opacity="0.9">
            {Array.from({ length: 16 }).map((_, i) => (
              <polygon key={i} points={`${i*110},600 ${i*110+40},300 ${i*110+80},600`} />
            ))}
          </g>
          <rect y="560" width="1600" height="40" fill="#cfdfd6" />
        </svg>

        {/* mid trees with clay-like softness */}
        <svg className="layer layer--mid" viewBox="0 0 1600 600" preserveAspectRatio="xMidYMax slice" aria-hidden>
          <g fill="#b0c4b1">
            {Array.from({ length: 14 }).map((_, i) => (
              <g key={i} transform={`translate(${i*120},0)`}>
                <polygon points={`0,600 50,280 100,600`} />
                <rect x="46" y="280" width="8" height="200" rx="4" fill="#a2b7a3" />
              </g>
            ))}
          </g>
          <rect y="560" width="1600" height="40" fill="#bed3c2" />
        </svg>

        {/* near trees */}
        <svg className="layer layer--near" viewBox="0 0 1600 600" preserveAspectRatio="xMidYMax slice" aria-hidden>
          <g fill="#9ab69a">
            {Array.from({ length: 12 }).map((_, i) => (
              <g key={i} transform={`translate(${i*135},0)`}>
                <polygon points={`0,600 60,260 120,600`} />
                <rect x="56" y="260" width="10" height="230" rx="5" fill="#8eab8e" />
              </g>
            ))}
          </g>
          <rect y="560" width="1600" height="40" fill="#a7c39f" />
        </svg>

        {/* grass field with blades */}
        <div className="grass">
          {Array.from({ length: 120 }).map((_, i) => (
            <span
              key={i}
              className="blade"
              style={{
                left: `${(i/120)*100 + (Math.sin(i)*0.8)}%`,
                height: `${4.5 + (i % 7) * 0.35}rem`,
                width: `${0.6 + (i % 3) * 0.16}rem`,
                // gently desync each blade
                animationDelay: `${(i % 10) * 0.2}s`,
                // vary sway speed slightly
                // @ts-ignore custom property for CSS
                ['--speed' as any]: `${4 + (i % 5)}s`,
              } as React.CSSProperties}
            />
          ))}
        </div>

        {/* bokeh dust */}
        <div className="bokeh">
          {Array.from({ length: 22 }).map((_, i) => (
            <span
              key={i}
              style={{
                left: `${Math.random()*100}%`,
                top: `${Math.random()*60}%`,
                // @ts-ignore CSS var
                ['--s' as any]: `${8 + (i % 5) * 6}px`,
                animationDelay: `${(i % 7) * 0.7}s`,
              } as React.CSSProperties}
            />
          ))}
        </div>

        {/* birds gliding across lens */}
        {[
          { top: '22%', delay: '0s', dur: '23s' },
          { top: '28%', delay: '6s', dur: '26s' },
          { top: '18%', delay: '10s', dur: '24s' },
        ].map((b, idx) => (
          <div
            className="bird"
            key={idx}
            style={{ ['--top' as any]: b.top, animationDelay: b.delay, ['--flight' as any]: b.dur } as React.CSSProperties}
          >
            <svg viewBox="0 0 60 30" aria-hidden>
              <path d="M0 15 C 10 5, 20 5, 30 15 C 40 25, 50 25, 60 15 L 60 18 C 50 28, 40 28, 30 18 C 20 8, 10 8, 0 18 Z" />
            </svg>
          </div>
        ))}
      </div>

      <div className="center" aria-hidden>
        <h1 className="title">A peaceful pastel forest at sunrise</h1>
      </div>
    </main>
  );
}
