function Home() {


    let user = sessionStorage.getItem("user")
return(
    <div>
        <h2>Welcome to Home Page {user}</h2>
      
    </div>
)

}

export default Home;