import { Link } from "react-router-dom";

const Tasks = () => {
  return (
    <div className="users">
      <div className="container">
        <header>
          <h1>Users</h1>
          <Link to="/newuser">
            <button>+ New User</button>
          </Link>
        </header>
        <hr />
        <main>
          <table className="table">
            <thead>
              <tr>
                <th>No:</th>
                <th>Name:</th>
                <th>Phone:</th>
                <th>Email:</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1.</td>
                <td>name</td>
                <td>phone</td>
                <td>email</td>
              </tr>
            </tbody>
          </table>
        </main>
        <hr />
      </div>
    </div>
  );
};

export default Tasks;