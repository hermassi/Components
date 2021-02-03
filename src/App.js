import './App.css';
//import ProfilePhoto from './Component/Profile/ProfilePhoto'
import FullName from './Component/Profile/FullName'
import Addresse  from './Component/Profile/Addresse'
import ProfileUi from './Component/Profile/ProfileUi'

var img='https://scontent.ftun9-1.fna.fbcdn.net/v/t1.0-1/c45.0.240.240a/p240x240/124824768_3371910139570812_3637779146417626089_n.jpg?_nc_cat=105&ccb=2&_nc_sid=7206a8&_nc_ohc=uiRbE44SlKYAX8WgH7R&_nc_ht=scontent.ftun9-1.fna&tp=27&oh=3be440f19072f6368bea5c358b830f18&oe=60419CA1';
function App() {
  return (
    <div className="App">



        <ProfileUi 
        imgUrl= {img}
        name= < FullName /> 
        designation = < Addresse /> 
        />
          
       
    </div>
  );
}


export default App;
