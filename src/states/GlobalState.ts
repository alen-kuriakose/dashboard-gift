import { atom } from "recoil";

export const ActiveIndexServicesCard = atom({
  key: "activeIndexServicesCard",
  default: "Dashboard",
});
export const ActiveChildIndexServicesCard = atom({
  key: "activeChildIndexServicesCard",
  default: "Default",
});
export const Activeselection = atom({
  key: "Activeselection",
  default: "Default",
});

export const EnableNotificationPanel = atom({
  key: "isNotificationPanelActive",
  default: false,
});
