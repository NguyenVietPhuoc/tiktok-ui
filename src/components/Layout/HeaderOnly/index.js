import Header from './Header';

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="Content">{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
