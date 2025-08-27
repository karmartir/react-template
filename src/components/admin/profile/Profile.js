import "./Profile.scss";
import Card from "./../../card/Card";
import { useEffect, useState } from "react";
import { Spinner } from "../../loader/Loader";

const Profile = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [isLoading]);

  return (
    <div className="profile">
      <h3>--- Profile ---</h3>
      <Card cardClass={"card"}>
        {isLoading ? (
          <Spinner />
        ) : (
          <form>
            <p>
              <label>Name:</label>
              <input type="text" placeholder="Name" name="name" />
            </p>
            <p>
              <label>Email:</label>
              <input type="email" placeholder="Email" name="email" />
            </p>
            <button className="--btn --btn-primary --btn-block">
              Update Profile
            </button>
          </form>
        )}
      </Card>
    </div>
  );
};

export default Profile;
