export const selectOpenModal = (state) => {
  const keys = Object.keys(state.ui.modals)
  for (let i = 0; i < keys.length; i++) {
    if (state.ui.modals[keys[i]]) return keys[i];
  }
}

export const selectTitle = (modalName) => {
  if (modalName === 'login') {
    return 'Log in';
  } else {
    return 'Sign up for a Bandland account';
  }
}
