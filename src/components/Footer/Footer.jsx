import {
  FooterSection,
  FooterBg,
  FooterCapSection,
  FooterCaption,
  FooterLine,
  FooterBtnSet,
  FooterInfoSection,
  ImgBox,
  Img,
  LogoText,
  FooterMenuSection,
  FooterMenuCap,
  FooterMenu,
  FooterMenuItem,
  FooterLink,
  FooterUnderSection,
  FooterUnderLine,
} from './Footer.styled';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openFooterModal } from 'redux/redux-slices/modalSlice';
import { selectUser, selectFooterModal } from 'redux/selectors';
import { footerMenuLinks } from 'services/sources/footerMenuSource';
import Container from 'components/Container/Container';
import Button from 'components/Button';
import SignUpForm from 'components/SignUpForm';
import LogInForm from 'components/LogInForm';
import { FooterModal } from 'components/Modal';
import logo from '../../images/logo.jpg';
import { FaBahai, FaArrowAltCircleDown } from 'react-icons/fa';

function Footer() {
  const dispatch = useDispatch();
  const isFooterModalOpen = useSelector(selectFooterModal);
  const isUserAuth = useSelector(selectUser);
  const [formId, setFormId] = useState('');

  const openAuthModal = e => {
    setFormId(e.target.id);
    dispatch(openFooterModal());
  };

  return (
    <FooterSection>
      <FooterBg>
        <Container>
          <FooterCapSection>
            <FooterCaption>
              {isUserAuth
                ? 'Found a bug or have suggestions?'
                : 'Interested in enhancing your opportunities?'}
            </FooterCaption>
            <FooterLine>
              {isUserAuth
                ? 'Contacts are below.'
                : 'Then sign up or log in soon!'}
            </FooterLine>
            {isUserAuth ? (
              <FaArrowAltCircleDown />
            ) : (
              <FooterBtnSet>
                <li>
                  <Button
                    id="footer-signup"
                    title="Sign Up"
                    type="button"
                    text="Sign Up"
                    fontSize={20}
                    onClick={openAuthModal}
                  />
                </li>
                <li>
                  <Button
                    id="footer-login"
                    title="Log In"
                    type="button"
                    text="Log In"
                    fontSize={20}
                    onClick={openAuthModal}
                  />
                </li>
              </FooterBtnSet>
            )}
            {isFooterModalOpen && (
              <FooterModal>
                {formId === 'footer-signup' && <SignUpForm />}
                {formId === 'footer-login' && <LogInForm />}
              </FooterModal>
            )}
          </FooterCapSection>

          <FooterInfoSection>
            <section>
              <ImgBox>
                <Img src={logo} alt="logo" />
              </ImgBox>
              <LogoText>Cinemagot</LogoText>
            </section>

            <FooterMenuSection>
              <FooterMenuCap>Contact Me</FooterMenuCap>
              <FooterMenu>
                {footerMenuLinks.map(ref => {
                  const { id, icon, link } = ref;
                  return (
                    <FooterMenuItem key={id}>
                      <FooterLink href={link} target="_blank" rel="noopener">
                        {icon}
                      </FooterLink>
                    </FooterMenuItem>
                  );
                })}
              </FooterMenu>
            </FooterMenuSection>
          </FooterInfoSection>

          <FooterUnderSection>
            <FooterUnderLine>2023</FooterUnderLine>
            <FaBahai />
            <FooterUnderLine>By Yevhen Petrunkin</FooterUnderLine>
          </FooterUnderSection>
        </Container>
      </FooterBg>
    </FooterSection>
  );
}

export default Footer;
