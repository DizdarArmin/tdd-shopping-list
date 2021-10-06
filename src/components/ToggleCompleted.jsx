export default function ToggleCompleted({ showCompleted, setShowCompleted }) {
  let buttonText;
  if (showCompleted) {
    buttonText = "Hide";
  } else {
    buttonText = "Show";
  }

  return (
    <div className="completed-holder">
      <button
        onClick={() => setShowCompleted(!showCompleted)}
        className="link-button"
      >
        {buttonText} completed
      </button>
    </div>
  );
}
