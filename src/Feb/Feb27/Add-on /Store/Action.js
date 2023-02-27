export const add = data => {
  return {
    type: 'ADD',
    payload: data,
  };
};
export const edit = data => {
  return {
    type: 'EDIT',
    payload: data,
  };
};
export const update = data => {
  return {
    type: 'UPDATE',
    payload: data,
  };
};
export const deleteId = data => {
  return {
    type: 'DELETE',
    payload: data,
  };
};
