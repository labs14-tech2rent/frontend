export const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`${attr}`);
  return wrapper;
};
