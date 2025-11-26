import type React from "react";

type GreetingProps = {
  isLoggedIn: boolean;
};

const Greeting: React.FC<GreetingProps> = ({ isLoggedIn }) => {
  console.log(isLoggedIn);

  if (isLoggedIn) {
    return <h3>Welcome back!</h3>;
  } else {
    return <h3>Please Log in.</h3>;
  }
};

function ConditionRender() {
  const isLoggedIn = true;

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default ConditionRender;
