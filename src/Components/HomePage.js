
import CompoFive from "./BookTable";
import CompoFour from "./UpcomingEvents";
import CompoOne from "./BurgerWeek";
import CompoSix from "./Footer";
import CompoThree from "./ChooseAndEnjoy";
import CompoTwo from "./PopularBurgers";


function HomePage() {
  return (
    <div>

        <CompoOne/>
        <CompoTwo/>
        <CompoThree/>
        <CompoFour/>
        <CompoFive/>
       <CompoSix/>

        
     
    </div>
  );
}

export default HomePage;