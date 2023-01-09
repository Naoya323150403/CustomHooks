import { VFC } from "react";
import { userProFile } from "../types/userProfile";

type Props = {
  user: userProFile;
};

export const UserCard: VFC<Props> = (props) => {
  const { user } = props;
  const style = {
    border: "solid 1px #ccc",
    borderRadius: "8px",
    padding: "0 10px",
    margin: "8px"
  };

  return (
    <div style={style}>
      <dl>
        <dt>名前</dt>
        <dd>{user.name}</dd>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>住所</dt>
        <dd>{user.address}</dd>
      </dl>
    </div>
  );
};