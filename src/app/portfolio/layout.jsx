const Layout = ({ children }) => {
  return (
    <div className="py-12">
      <h1 className="mb-8 text-3xl font-bold tracking-tight">My Works</h1>
      {children}
    </div>
  );
};

export default Layout;
