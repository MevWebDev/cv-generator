import Header from "./Header";
import "./CV.css";
function CV({ personal }) {
  const fullName = personal.fullName;
  const email = personal.email;
  const phone = personal.phone;
  const address = personal.address;
  return (
    <div className="cv">
      <Header
        fullName={fullName}
        email={email}
        phone={phone}
        address={address}
      />
    </div>
  );
}
export default CV;
