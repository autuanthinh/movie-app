import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Nav } from 'react-bootstrap';

import './index.scss';

export interface IFooterProps {}

const Footer: FC<IFooterProps> = () => {
  return (
    <Container fluid className="app-footer">
      <Container>
        <div className="links">
          <Nav.Link as={NavLink} to={'#'} end>
            会員登録
          </Nav.Link>
          <Nav.Link as={NavLink} to={'#'} end>
            運営会社
          </Nav.Link>
          <Nav.Link as={NavLink} to={'#'} end>
            利用規約
          </Nav.Link>
          <Nav.Link as={NavLink} to={'#'} end>
            個人情報の取扱について
          </Nav.Link>
          <Nav.Link as={NavLink} to={'#'} end>
            特定商取引法に基づく表記
          </Nav.Link>
          <Nav.Link as={NavLink} to={'#'} end>
            お問い合わせ
          </Nav.Link>
        </div>
      </Container>
    </Container>
  );
};

export default Footer;
