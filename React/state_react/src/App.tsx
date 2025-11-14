import AgeCounterComponent from "./components/age.counter.component";
import ContactFormComponent from "./components/contact.form.component";
import Counter from "./components/counter.component";
import Count from "./components/Tasks/count.component";
import GreetingComponent from "./components/Tasks/greeting.component";
import MyInput from "./components/input.component";
import MirrorComponent from "./components/Tasks/mirror.component";
import LikeButtonComponent from "./components/like.button.component";
import ListComponent from "./components/list.component";
import ModeToggle from "./components/Tasks/dark-light-toggle.component";
import ProfileCardComponent from "./components/Tasks/profile.card.component";
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
    </div>
  );
}

export default App;
