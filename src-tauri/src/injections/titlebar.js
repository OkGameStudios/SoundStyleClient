// addEventListener("load", () => {
//     addTitleBar()
//   })
  
//   function addTitleBar() {
//     const innerApp = document?.querySelector('div[id="app-mount"]')
  
//     const titlebar = document.createElement("div")
//     titlebar.setAttribute("data-tauri-drag-region", "")
//     titlebar.setAttribute("class", "titlebar")
//     titlebar.innerHTML =`
//   <div class="titlebar-button" id="titlebar-minimize">
//     -
//   </div>
//   <div class="titlebar-button" id="titlebar-maximize">
//     []
//   </div>
//   <div class="titlebar-button" id="titlebar-close">
//     X
//   </div>
//     `
  
//     innerApp.insertBefore(titlebar, innerApp.firstChild)
//   }