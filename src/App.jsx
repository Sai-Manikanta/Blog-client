import Header from './components/Header';
import GlobalStyle from './components/GlobalStyles';
import { Route } from 'react-router-dom';
import Blog from './pages/Blog';

const App = () => {
    return ( 
        <>
            <GlobalStyle />
            <Header />
            <div className="content">
                <Route path="/blog" component={Blog} />
            </div>
        </>
    );
}

export default App;