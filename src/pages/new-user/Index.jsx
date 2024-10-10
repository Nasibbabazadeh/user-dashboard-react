const NewUser = () => {
  return (
    <section className="new-user">
      <div className="container">
        <div className="headText">
          <h2>Add New User</h2>
          <hr />
        </div>
        <div className="form">
          <form>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" id="name" />
            </div>

            <div>
              <label htmlFor="phone">Phone:</label>
              <input type="text" name="phone" id="phone" />
            </div>

            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" id="email" />
            </div>
            <button>Add User</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewUser;