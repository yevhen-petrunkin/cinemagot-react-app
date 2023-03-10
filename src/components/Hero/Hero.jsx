import {
  Video,
  VideoBox,
  VideoBtnSet,
  VideoBtn,
  HeroCaption,
  HeroBtnSet,
} from './Hero.styled';
import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/selectors';
import { openModal } from 'redux/redux-slices/modalSlice';
import { selectModal } from 'redux/selectors';
import Modal from 'components/Modal';

import { HeroContainer } from 'components/Container';
import { HeroButton } from 'components/Button';

import SignUpForm from 'components/SignUpForm';
import LogInForm from 'components/LogInForm';
import intro1 from '../../video/intro-01.mp4';
import intro2 from '../../video/intro-02.mp4';

function Hero() {
  const videoRef = useRef(null);

  const dispatch = useDispatch();
  const isModalOpen = useSelector(selectModal);
  const isUserAuth = useSelector(selectUser);

  const [muted, setMuted] = useState(true);
  const [formId, setFormId] = useState('');

  const openAuthModal = e => {
    setFormId(e.target.id);
    dispatch(openModal());
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <HeroContainer>
      <VideoBox>
        <HeroCaption>Cinemagot</HeroCaption>
        <VideoBtnSet>
          <VideoBtn type="button" onClick={toggleMute}>
            Toggle Mute
          </VideoBtn>
          <VideoBtn type="button" onClick={playVideo}>
            Play
          </VideoBtn>
        </VideoBtnSet>
        {!isUserAuth && (
          <HeroBtnSet>
            <HeroButton
              id="heroSignup"
              text="Sign Up"
              onClick={openAuthModal}
            />
            <HeroButton id="heroLogin" text="Log In" onClick={openAuthModal} />
          </HeroBtnSet>
        )}
        {!isUserAuth && (
          <Video ref={videoRef} autoPlay preload="auto">
            <source src={intro1} type="video/mp4" />
          </Video>
        )}
        {isUserAuth && (
          <Video ref={videoRef} autoPlay preload="auto">
            <source src={intro2} type="video/mp4" />
          </Video>
        )}
      </VideoBox>
      {isModalOpen && (
        <Modal>
          {formId === 'heroSignup' && <SignUpForm />}
          {formId === 'heroLogin' && <LogInForm />}
        </Modal>
      )}
    </HeroContainer>
  );
}

export default Hero;
