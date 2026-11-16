/*
  Placeholder
  A dashed box that marks content Saiful still has to supply.
  It is easy to spot, so nothing fake is mistaken for real content.

  Usage: <Placeholder title="Photo" note="Add your photo in src/data/profile.js" />
*/
export default function Placeholder({ title, note, className = "" }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-line bg-surface p-6 text-center ${className}`}
    >
      <span className="label text-accent">Placeholder</span>
      <p className="font-display text-lg font-medium text-ink">{title}</p>
      {note && <p className="max-w-[28ch] text-sm text-muted">{note}</p>}
    </div>
  );
}
