import React, { useReducer, useEffect } from "react";
import {
  Container,
  Grid,
  GridColumn,
  GridRow,
  Header,
  Segment,
} from "semantic-ui-react";
import AddUserButton from "../../Components/AddUserButton";
import RegisteredUser from "../../Components/RegisteredUser";

let initialState = {
  userList: [],
};

const RegistrationList = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "init":
        return {
          ...state,
          userList: action.val,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const list = [
      {
        id: 1,
        name: "Swapnil Dhamal",
        Address: "Katraj, Pune",
        Gender: "Male",
        Email: "sdhamal2803@gmail.com",
      },
      {
        id: 1,
        name: "Shivangi Dhamal",
        Address: "Katraj, Pune",
        Gender: "Male",
        Email: "sdhamal2803@gmail.com",
      },
      {
        id: 1,
        name: "Ayansh Dhamal",
        Address: "Katraj, Pune",
        Gender: "Male",
        Email: "sdhamal2803@gmail.com",
      },
      {
        id: 1,
        name: "Raj Ghorpade",
        Address: "Katraj, Pune",
        Gender: "Male",
        Email: "sdhamal2803@gmail.com",
      },
    ];

    dispatch({
      type: "init",
      val: list,
    });
  }, []);

  const loadRegisterUserList = () => {
    return state.userList.map((user) => {
      return (
        <GridColumn width={4}>
          <RegisteredUser user={user} />
        </GridColumn>
      );
    });
  };

  return (
    <Segment>
      <Header as="h2" block>
        Registered User
        <AddUserButton />
      </Header>
      <Container fluid>
        <Grid>
          <GridRow>{loadRegisterUserList()}</GridRow>
        </Grid>
      </Container>
    </Segment>
  );
};

export default RegistrationList;
