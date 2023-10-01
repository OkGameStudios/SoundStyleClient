let loaded = false

let containerChange = new MutationObserver(() => {
  const innerApp = document?.querySelector('div[class="container-1eFtFS"]')
  // console.log(innerApp);

  if(innerApp !== null) {
      console.log('Discord is loaded!')

      onClientLoad()
    } else {
      console.log('Discord not loaded...')
    }
  });
  
  containerChange.observe(document, {
    childList: true,
    subtree: true
  });
  
  function onClientLoad() {
    containerChange.disconnect()

    document.body.setAttribute("data-theme", "tokyo-night")
  }

let sidebarChange = new MutationObserver(() => {
  const element = document.querySelector(".side-1lrxIh")

  if(element !== null) {
    console.log("Settings page");

    addMenu()
  } else {
    console.log("Setting no page");
  }
})

sidebarChange.observe(document, {
    childList: true,
    subtree: true
})
  // addEventListener("navigation", () => {
  //   console.log("hello");
  // })


function addMenu() {
  const element = document.querySelector("div.side-1lrxIh")
  
  // const div = document.createElement("div")
  // div.innerText = "Hi sucker"

  // element.appendChild(div)
  
  // <div class="header-2F5_LB" tabindex="-1" role="button"><div class="eyebrow-1Shfyi headerText-10ez_d" data-text-variant="eyebrow">User Settings</div></div>
  // console.log(element);
}

const offline = addEventListener("offline", () => {
  const innerApp = document?.querySelector('div[id="app-mount"]')
  
  const banner = document.createElement("div")
  banner.style.backgroundColor = "crimson"
  banner.style.color = "white"
  banner.style.display = "flex"
  banner.style.justifyContent = "space-between"
  banner.style.userSelect = "text"
  banner.style.padding = "10px"
  banner.style.border = "red"
  banner.style.textAlign = "center"
  banner.id = "offline-banner"
  banner.innerHTML = `
  You are currently offline! You might still get messages but you won't be able to send them!
  <button style="background: none; color: white;" id="close-button" >X</button>
  `
  innerApp.insertBefore(banner, innerApp.firstChild)

  document.getElementById("close-button").addEventListener("click", () => {
    innerApp.removeChild(document.getElementById("offline-banner"))
  })
//   innerApp.style = "display: grid"
//   innerApp.innerHTML = `
//     <div style="place-self: center" >You are currently offline! The window will reload when you get back online</div>
//   `
})

const online = addEventListener("online", () => {
  const innerApp = document?.querySelector('div[id="app-mount"]')

  innerApp.removeChild(document.getElementById("offline-banner"))
})