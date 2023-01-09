import { UserCard } from "./components/UserCard";
import "./styles.css";
import { useAllUssers } from "./hooks/useAllUsers";

export default function App() {
  const { getUsers, userProfiles, loading, error } = useAllUssers();

  const onCLickFetchUser = () => getUsers();

  return (
    <div className="App">
      <button onClick={onCLickFetchUser}>データ取得ボタン</button>
      <br />
      {error ? (
        <p>失敗</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}
