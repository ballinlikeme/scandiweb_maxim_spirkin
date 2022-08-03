import OverlayScrollbars from "overlayscrollbars";

const toggleScrollbar = (root, isRequired) => {
  let scrollbar;

  if (root.current && isRequired) {
    scrollbar = OverlayScrollbars(root.current, {});
  }

  return () => {
    if (scrollbar) {
      scrollbar.destroy();
    }
  };
};

export default toggleScrollbar;
