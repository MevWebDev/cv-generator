import "./Header.css";

function Header({ fullName, email, phone, address }) {
  return (
    <div className="header">
      <h1>{fullName}</h1>
      <div>
        <p>{email}</p>
        <p>{phone}</p>
        <p>{address}</p>
      </div>
    </div>
  );
}
export default Header;
