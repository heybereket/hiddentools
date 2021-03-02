import '../style/banner.css';
import { Link } from 'react-router-dom';

const Banner = ({title}) => {
        return (
            <div className="banner">
	            Introducing Hidden Tools v2! {title}
            </div>
        );
}

export default Banner;