export const openSidebar = () => {
  const sidebar = document.querySelector(".tmp_side_bar");
  const overlay = document.querySelector(".overlay_close_side_menu");
  
  if (sidebar) {
    sidebar.classList.add("tmp_side_bar_open");
    document.body.style.overflow = "hidden";
  }
  
  if (overlay) {
    overlay.style.visibility = "visible";
    setTimeout(() => {
      overlay.style.opacity = "1";
    }, 10);
  }
};

export const closeSidebar = () => {
  const sidebar = document.querySelector(".tmp_side_bar");
  const overlay = document.querySelector(".overlay_close_side_menu");
  
  if (sidebar) {
    sidebar.classList.remove("tmp_side_bar_open");
    document.body.style.overflow = "";
  }
  
  if (overlay) {
    overlay.style.opacity = "0";
    setTimeout(() => {
      overlay.style.visibility = "hidden";
    }, 300);
  }
};
