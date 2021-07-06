import Navigation from "../components/Navigation";
import Logo from "../components/Logo";

const Home = () =>{
    return(
        <div className="home">
            <Navigation></Navigation>
            <Logo/>
            <h1>Accueil</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laboriosam, iste eveniet impedit, id officiis eius totam quaerat itaque, corporis perferendis sint quas repellat odio dicta labore molestiae est eaque.</p>
        </div>
    )
}

export default Home;