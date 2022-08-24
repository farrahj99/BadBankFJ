function Spa(props, state) {
  return (
    <HashRouter>
      <UserContext.Provider value={{users:[{name:'sergia',email:'sergia@mit.edu',password:'love',balance:100}],loggedIn:[]}}>
        <NavBar />
        <div className="container" style={{padding: "40px"}}>
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit}/>
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/alldata/" component={AllData} />
        </div>
      </UserContext.Provider>
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
