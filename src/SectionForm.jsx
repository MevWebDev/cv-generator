import "./SectionForm.css";

function SectionForm({ props, children }) {
  return (
    <div className="section-form">
      <form>
        <label>
          {props.title}
          <input type="text" name="fullName" />
        </label>
        <label>
          {props.subtitle}
          <input type="text" name="fullName" />
        </label>
        <label>
          {props.start}
          <input type="text" name="fullName" />
        </label>
        <label>
          {props.end}
          <input type="text" name="fullName" />
        </label>
      </form>
      {children}
    </div>
  );
}
export default SectionForm;
