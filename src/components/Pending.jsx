/*
  Pending
  A small inline label for one missing detail, for example a link or a feature list.
  (The bigger dashed box for images is Placeholder.jsx.)

  Usage: <Pending />                       -> "To be added"
         <Pending label="To confirm" />    -> "To confirm"
         <Pending note="Source code" />    -> "To be added · Source code"
*/
export default function Pending({ label = "To be added", note }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-md border border-dashed border-line px-2.5 py-1 font-mono text-xs whitespace-nowrap text-muted">
      <span className="text-accent">{label}</span>
      {note && <span>· {note}</span>}
    </span>
  );
}
