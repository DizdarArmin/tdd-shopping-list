export default function Input({ state, setState, html }) {
  const { type, placeholder } = html;
  return (
    <div className="col field">
      <input
        className="form-control"
        value={state}
        onChange={(event) => setState(event.target.value)}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}
