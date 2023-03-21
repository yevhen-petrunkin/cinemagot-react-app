import {
  Backdrop,
  Content,
  CloseBtn,
  Caption,
  Form,
  PhotoBox,
  PhotoLabel,
  MagotName,
  Input,
} from './Photopicker.styled';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { closePhotopicker } from 'redux/redux-slices/modalSlice';
import { useMutation } from '@tanstack/react-query';
import { updateUserPhoto } from 'services/services';
import { photoSource } from 'services/sources/photoSource';

import Button from 'components/Button';
import { TfiClose } from 'react-icons/tfi';

function Photopicker() {
  const dispatch = useDispatch();

  const photopickerRoot = document.querySelector('#photopicker-root');

  useEffect(() => {
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        dispatch(closePhotopicker());
      }
    };
    window.addEventListener('keydown', handleKeydown);
  }, [dispatch]);

  const updatePhotoMutation = useMutation(url => updateUserPhoto(url), {
    onSuccess: () => {
      console.log('Avatar changed successfully.');
      setTimeout(() => window.location.reload(), 1000);
    },
    onError: () => console.log('Failed to load avatar'),
  });

  const handleCloseBtnClick = () => {
    dispatch(closePhotopicker());
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const selectedOption = formData.get('photo');
    if (selectedOption) {
      updatePhotoMutation.mutate(selectedOption);
    }
  };

  return createPortal(
    <Backdrop>
      <Content>
        <CloseBtn
          type="button"
          title="Close"
          top={12}
          right={12}
          onClick={handleCloseBtnClick}
        >
          <TfiClose style={{ width: '100%', height: '100%' }} />
        </CloseBtn>
        <Caption>Choose Your CineMagot</Caption>
        <Form onSubmit={handleSubmit}>
          <PhotoBox>
            {photoSource.map(({ photoId, address, category, label }) => {
              return (
                <PhotoLabel key={photoId} img={address}>
                  <MagotName>{label}</MagotName>
                  <Input type="radio" name={category} value={address} />
                </PhotoLabel>
              );
            })}
          </PhotoBox>
          <Button
            id="photo-submit"
            title="Submit photo"
            text="Submit"
            type="submit"
            fontSize={16}
          />
        </Form>
      </Content>
    </Backdrop>,
    photopickerRoot
  );
}

export default Photopicker;
