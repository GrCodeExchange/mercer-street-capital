/**
 * @section AboutSplit
 * @description Large statement left + description text and bullet items right. Works for mission, values, company overview.
 * @props {
 *   "eyebrow": "string?",
 *   "headline": "string",
 *   "headlineAccent": "string?",
 *   "body": "string",
 *   "statement": "string? — large decorative statement in left panel",
 *   "items": "Array<{title:string,body:string}> — optional bullet/feature list"
 * }
 */
import Eyebrow from "@/components/Eyebrow";
import SplitHeadline from "@/components/SplitHeadline";

interface Props {
  id?: string;
  eyebrow?: string;
  headline: string;
  headlineAccent?: string;
  body: string;
  statement?: string;
  items?: Array<{ title: string; body: string }>;
}

export default function AboutSplit({ id, eyebrow, headline, headlineAccent, body, statement, items = [] }: Props) {
  return (
    <section id={id ?? "about"} className="section surface-2">
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          {/* Left */}
          <div>
            {statement ? (
              <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--color-accent-dark)", lineHeight: 1.2, fontStyle: "italic" }}>
                &ldquo;{statement}&rdquo;
              </p>
            ) : (
              <>
                {eyebrow && <div style={{ marginBottom: "1.25rem" }}><Eyebrow>{eyebrow}</Eyebrow></div>}
                <SplitHeadline dark={headline} accent={headlineAccent} style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }} />
              </>
            )}
          </div>

          {/* Right */}
          <div>
            {statement && (
              <>
                {eyebrow && <div style={{ marginBottom: "1.25rem" }}><Eyebrow>{eyebrow}</Eyebrow></div>}
                <SplitHeadline dark={headline} accent={headlineAccent} style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", marginBottom: "1.5rem" }} />
              </>
            )}
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1.0625rem", color: "var(--color-secondary)", lineHeight: 1.8, marginBottom: items.length ? "2rem" : 0 }}>{body}</p>
            {items.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {items.map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--color-accent)", marginTop: "0.55rem", flexShrink: 0 }} />
                    <div>
                      <div style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.9375rem", color: "var(--color-fg)", marginBottom: "0.25rem" }}>{item.title}</div>
                      <div style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "var(--color-secondary)", lineHeight: 1.7 }}>{item.body}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about > div > div { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}
