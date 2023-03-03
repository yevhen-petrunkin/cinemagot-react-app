import { dashMenuSource } from 'services/sources/dashMenuSource';
import { NavMenu, NavStyledLink } from './DashMenu.styled';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';

function DashMenu() {
  const navigate = useNavigate();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      navigate('info');
    }
  }, [navigate]);

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
