import AgeCounterComponent from "./components/example_components/age.counter.component";
import ContactFormComponent from "./components/example_components/contact.form.component";
import Counter from "./components/example_components/counter.component";
import Count from "./components/Tasks/count.component";
import GreetingComponent from "./components/Tasks/greeting.component";
import MyInput from "./components/example_components/input.component";
import MirrorComponent from "./components/Tasks/mirror.component";
import LikeButtonComponent from "./components/example_components/like.button.component";
import ListComponent from "./components/example_components/list.component";
import ModeToggle from "./components/Tasks/dark-light-toggle.component";
import ProfileCardComponent from "./components/Tasks/profile.card.component";
import MovieListComponent from "./components/Tasks/movie.list.component";
import EffectComponent from "./components/example_components/effect";
function App() {
  return (
    <div className="">
      <h1>State in React</h1>
      <hr />
      <Counter />
      <hr />
      <MyInput />
      <hr />
      <LikeButtonComponent />
      <hr />
      <AgeCounterComponent />
      <hr />
      <ContactFormComponent />
      <hr />
      <ListComponent />
      <hr />
      <GreetingComponent />
      <hr />
      <MirrorComponent />
      <hr />
      <Count />
      <hr />
      <ModeToggle />
      <hr />
      <ProfileCardComponent />
      <hr />
      <MovieListComponent />
      <hr />
      <EffectComponent />
    </div>
  );
}

export default App;
