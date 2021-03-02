import '../style/banner.css';
import { Link } from 'react-router-dom';

const Banner = ({title}) => {
        return (
            <div className="banner">
	            Introducing Hidden Tools v2. To submit a tool, email:

                <a aria-label="What's New Page Link"target="_blank" href="mailto:submit.hiddentools@gmail.com?subject=Tool Suggestion" rel="noreferrer"> {title}</a>
            </div>
        );
}

export default Banner;