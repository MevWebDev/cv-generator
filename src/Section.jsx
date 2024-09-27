import { useState } from "react";
import "./Section.css";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";
import AddButton from "./AddButton";
import SectionForm from "./SectionForm";

function Section({ children }) {
  const [opened, setOpened] = useState(false);
  const [formOpened, setFormOpen] = useState(false);

  function handleClick(setter, prop) {
    setter(!prop);
  }

  let formProps =
    children === "Education"
      ? {
          title: "School",
          subtitle: "Degree",
          start: "Start",
          end: "End",
        }
      : {
          title: "Company Name",
          subtitle: "Position Title",
          start: "Start",
          end: "End",
        };

  return (
    <div className="section">
      <div className="section-header">
        {children}
        <button
          className="arrow-button"
          onClick={() => handleClick(setOpened, opened)}
        >
          {opened ? <SlArrowUp /> : <SlArrowDown />}
        </button>
      </div>
      {opened &&
        (formOpened ? (
          <SectionForm props={formProps}>
            <button onClick={() => handleClick(setFormOpen, formOpened)}>
              Close
            </button>
          </SectionForm>
        ) : (
          <div>
            <AddButton showForm={() => handleClick(setFormOpen, formOpened)}>
              {children}
            </AddButton>
          </div>
        ))}
    </div>
  );
}
export default Section;
