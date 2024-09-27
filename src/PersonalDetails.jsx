import "./PersonalDetails.css";

function PersonalDetails({ handleType }) {
  return (
    <div className="personal-details">
      <h3>Personal Details</h3>
      <form>
        <label>
          Full Name
          <input type="text" name="fullName" onChange={handleType} />
        </label>

        <label>
          Email
          <input type="text" name="email" onChange={handleType} />
        </label>

        <label>
          Phone number
          <input type="text" name="phone" onChange={handleType} />
        </label>

        <label>
          Address
          <input type="text" name="address" onChange={handleType} />
        </label>
      </form>
    </div>
  );
}
export default PersonalDetails;
