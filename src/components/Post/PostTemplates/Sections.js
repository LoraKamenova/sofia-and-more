import '../Post.css'
import Right from '../PostTemplates/Right.js';

const Sections = (props) => {
    
    let component = null;
    switch(props.data.template) {
      case "Right":
        component = <Right section={props.data}/>
        break;
    }

    //<Right section={props.sections[0]} />
    return (
        component
     );
};

export default Sections;