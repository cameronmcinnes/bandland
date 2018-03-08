export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const TOGGLE_MENU = 'TOGGLE_MENU';

export const toggleModal = (modalName) => ({
  type: TOGGLE_MODAL,
  modalName
});

export const toggleMenu = (menu) => {
  return {
    type: TOGGLE_MENU,
    menu
  };
};
