import {
  Video,
  VideoBox,
  VideoBtnSet,
  HeroCaption,
  HeroBtnSet,
} from './Hero.styled';
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, selectLoading } from 'redux/selectors';
import { openModal } from 'redux/redux-slices/modalSlice';
import { selectModal } from 'redux/selectors';
import Modal from 'components/Modal';

import { HeroContainer } from 'components/Container';
import { HeroButton } from 'components/Button';

import SignUpForm from 'components/SignUpForm';
import LogInForm from 'components/LogInForm';

import intro1 from 'video/intro-01.mp4';
import intro2 from 'video/intro-02.mp4';

function Hero() {
  const videoRef = useRef(null);
  const mute = sessionStorage.getItem('mute');

  const dispatch = useDispatch();
  const isModalOpen = useSelector(selectModal);
  const isUserAuth = useSelector(selectUser);
  const isLoading = useSelector(selectLoading);

  const [muted, setMuted] = useState(true);
  const [autoplay, setAutoplay] = useState(true);
  const [formId, setFormId] = useState('');

  useEffect(() => {
    if (mute) {
      setAutoplay(false);
    }
  }, [autoplay, mute]);

  useEffect(() => {
    const body = document.querySelector('body');

    if (isModalOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'visible';
    }
  }, [isModalOpen]);

  const handleVideoEnd = () => {
    sessionStorage.setItem('mute', 'true');
    setAutoplay(false);
  };

  const openAuthModal = e => {
    setFormId(e.target.id);
    dispatch(openModal());
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
          <HeroButton id="mute" text="Mute" onClick={() => setMuted(!muted)} />
          <HeroButton id="play" text="Play" onClick={playVideo} />
        </VideoBtnSet>
        {!isUserAuth && !isLoading && (
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
          <Video
            ref={videoRef}
            autoPlay={autoplay}
            muted={muted}
            preload="auto"
            onEnded={handleVideoEnd}
          >
            <source src={intro1} type="video/mp4" />
          </Video>
        )}
        {isUserAuth && (
          <Video
            ref={videoRef}
            autoPlay={autoplay}
            muted={muted}
            preload="auto"
            onEnded={handleVideoEnd}
          >
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
