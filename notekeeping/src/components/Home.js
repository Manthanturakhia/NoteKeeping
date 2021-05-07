import React, { useState } from "react";
import { useStateValue } from "../StateProvider";
function Home() {
  const [user, dispatch] = useStateValue();
  return (
    <div>
      <h1>HOME PAGE</h1>
      {user && <h1>user</h1>}
    </div>
  );
}

export default Home;
