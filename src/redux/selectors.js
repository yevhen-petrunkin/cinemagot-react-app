export const selectUser = state => state.auth.user;
export const selectLoading = state => state.auth.loading;
export const selectError = state => state.auth.error;

export const selectExtraUser = state => state.userExtraData.extraUser;
export const selectExtraLoading = state => state.userExtraData.extraLoading;
export const selectExtraError = state => state.userExtraData.extraError;

export const selectModal = state => state.modal.isModalOpen;
export const selectPicBoard = state => state.modal.isPicBoardOpen;
export const selectPicturesLoading = state => state.modal.loading;
export const selectPicturesError = state => state.modal.error;
export const selectPictures = state => state.modal.pictures;

export const selectGallery = state => state.gallery.gallery;
export const selectGalleryCaption = state => state.gallery.caption;
export const selectGalleryLoading = state => state.gallery.loading;
export const selectGalleryError = state => state.gallery.error;
export const selectGalleryType = state => state.gallery.galleryType;
export const selectParams = state => state.gallery.params;
export const selectValueObject = state => state.gallery.valueObject;
export const selectRating = state => state.gallery.rating;

export const selectUserListObj = state => state.userList.userListObj;
export const selectListLoading = state => state.userList.loading;
export const selectListError = state => state.userList.error;
