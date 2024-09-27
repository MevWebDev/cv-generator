import "./AddButton.css";

function AddButton({ children, showForm }) {
  return (
    <button onClick={showForm} className="add-button">
      + {children}
    </button>
  );
}
export default AddButton;
