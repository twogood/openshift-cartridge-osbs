Menu = {};
Menu.items = [];
Menu.handleMenu = handleMenu;

function handleMenu (name) {
  for (var i = Menu.items.length - 1; i >= 0; i--) {
    if (Menu.items[i].name == name)
      Menu.items[i].active = true;
    else
      Menu.items[i].active = false;
  };
}

// Navbar Items
Menu.items[Menu.items.length] = {
  name: "Account Stats",
  url: "/accountstats",
  title: "Account Stats",
  active: false
}
Menu.items[Menu.items.length] = {
  name: "Gear List",
  url: "/gearlist",
  title: "Gear List",
  active: false
}
Menu.items[Menu.items.length] = {
  name: "Manage Backups",
  url: "/managebackups",
  title: "Manage Backups",
  active: false
}
Menu.items[Menu.items.length] = {
  name: "Schedule Backup",
  url: "/schedulebackup",
  title: "Schedule Backup",
  active: false
}
Menu.items[Menu.items.length] = {
  name: "API Docs",
  url: "/apidocs",
  title: "API Docs",
  active: false
}
exports.menu = Menu;