import { dashMenuSource } from 'services/sources/dashMenuSource';
import { NavMenu, NavStyledLink } from './DashMenu.styled';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function DashMenu() {
  const navigate = useNavigate();
  const isFirstDashboard = sessionStorage.getItem('isFirstDashboard');

  useEffect(() => {
    if (!isFirstDashboard) {
      sessionStorage.setItem('isFirstDashboard', 'true');
      navigate('info/');
    }
  }, [isFirstDashboard, navigate]);

  return (
    <>
      <NavMenu>
        {dashMenuSource.map(({ id, listId, content }) => (
          <li key={id}>
            <NavStyledLink to={'info/' + listId}>{content}</NavStyledLink>
          </li>
        ))}
      </NavMenu>
    </>
  );
}

export default DashMenu;
