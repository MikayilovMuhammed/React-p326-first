import React from "react";

import { getAllUsers, getUserById } from "../../actions/usersApi";

function Users() {
  const [users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [clicked, setClicked] = React.useState(false);
  const [user, setUser] = React.useState();

  const [id, setId] = React.useState();

  // const handleClick = () => {
  //   setIsLoading(true);
  //   getAllUsers(setUsers, setIsLoading);
  // };

  const handleClick = React.useCallback(() => {
    // setIsLoading(true);
    // getAllUsers(setUsers, setIsLoading);
    // setClicked(true);
    setClicked(true);
  }, []);

  const handleFilteredData = React.useMemo(() => {
    let test = [];
    if (users) {
      test = users;
    }
    if (clicked) {
      test = test.filter((item) => Number(item.id) > 38);
    }
    return test;
  }, [users, clicked]);

  // const handle = () => {
  //   let test = [];
  //   if (users) {
  //     test = users;
  //   }
  //   if (clicked) {
  //     test = test.filter((item) => Number(item.id) > 38);
  //   }
  //   return test;
  // };

  // const

  // React.useEffect(() => {
  //   // if (clicked) {
  //   setIsLoading(true);
  //   getAllUsers(setUsers, setIsLoading);
  //   // }
  // }, []);

  React.useEffect(() => {
    // if (clicked) {
    setIsLoading(true);
    getAllUsers(setUsers, setIsLoading);
    // }
  }, []);

  React.useEffect(() => {
    if (id) {
      getUserById(setUser, setIsLoading, id);
    }
  }, [id]);

  return (
    <div>
      <button onClick={handleClick}>Get data</button>
      {id && (
        <h2>
          {user?.name} - {user?.id}
        </h2>
      )}
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        handleFilteredData.map(({ name, id }) => (
          <h1 key={id} onClick={() => setId(id)}>
            {id} - {name}
          </h1>
        ))
      )}
    </div>
  );
}

export default Users;
