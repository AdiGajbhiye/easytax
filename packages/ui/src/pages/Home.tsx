import NavBar from '@components/NavBar';
import { Navigate, Outlet } from 'react-router-dom';
import { authService } from '@service/auth';

function Home() {
  if (authService.state.value === 'loggedOut') {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default Home;
