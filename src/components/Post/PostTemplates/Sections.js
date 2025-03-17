import '../Post.css'
import Right from '../PostTemplates/Right.js';
import Left from '../PostTemplates/Left.js';
import Upper from '../PostTemplates/Upper.js';
import Gallery from '../PostTemplates/Gallery.js';

const Sections = (props) => {
    
    let component = null;
    switch(props.data.template) {
        case "Right":
            component = <Right section={props.data}/>
            break;
        case "Left":
            component = <Left section={props.data}/>
            break;
        case "Upper":
            component = <Upper section={props.data}/>
            break;
        case "Gallery":
            component = <Gallery section={props.data}/>
            break;
    }
    return (
        component
     );
};

export default Sections;