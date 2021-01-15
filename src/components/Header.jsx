import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <StyledHeader>
            <nav>
                <a href="#"><Link to="/blog" >Home</Link></a>
                <a href="#">Membership</a>
                <a href="#">Style Guide</a>
            </nav>
            <div className="logo-nav-container">
                <img src="https://okiro.fueko.net/content/images/2020/11/okiro.svg" alt="logo"/>
                <div className="bars">
                    <FontAwesomeIcon size="2x" icon={faBars} />
                </div>
            </div>
            <div className="right-nav">
                    <a href="#">
                        <FontAwesomeIcon icon={faSearch} />
                    </a>
                    <a href="#">Sign in</a>
                    <a href="#" id="sign_up_link">Sign up</a>
            </div>
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px 25px;

    nav, .right-nav {
        display: none;
    }

    .logo-nav-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    img {
        height: 38px;
    }

    @media screen and (min-width: 600px) {
        height: 120px;
        flex-direction: row;

        nav a, .right-nav a {
            color: #2B394E;
            padding: 8px 15px;
            text-decoration: none;
            font-size: 1.2rem;
        }

        nav, .right-nav {
            display: flex;
            flex: 1 1 0;
            align-items: center;
        }

        .right-nav {
            justify-content: flex-end;
        }

        .logo-nav-container {
            flex: 0 1 0;
            .bars {
                display: none;
            }
        }

        img {
            height: 48px;
        }
        #sign_up_link {
            background-color: #656DFC;
            border-radius: 35px;
            color: #ffffff;
            padding: 12px 20px;
            margin-left: 20px;
        }
    }
`;
 
export default Header;