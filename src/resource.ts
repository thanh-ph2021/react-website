import dailytaskLogo from "./assets/dailytask-logo.png";

export const resources = [
    {
        id: "1",
        name: "DailyTask",
        logo: dailytaskLogo,
    },
];

export function getAppInfo(appId: string) {
    return resources.find((item) => item.id === appId);
};