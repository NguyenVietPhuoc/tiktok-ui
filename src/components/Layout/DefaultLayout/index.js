import Header from '~/components/Layout/components/Header';
import Sidebar from '~/components/Layout/DefaultLayout/Sidebar';
import Content from '~/components/Layout/DefaultLayout/Content';

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
