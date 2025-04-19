import dailytaskLogo from "./assets/dailytask-logo.png";
import statusBioAIGeneratorLogo from "./assets/status-bio-ai-generator-logo.png";

export const resources = [
    {
        id: "1",
        name: "DailyTask",
        logo: dailytaskLogo,
        descriptionVI: 'Đây là một ứng dụng quản lý công việc hàng ngày',
        descriptionEN: 'This application helps users manage their daily tasks efficiently and stay organized.',
    },
    {
        id: "2",
        name: "Status & Bio AI Generator",
        logo: statusBioAIGeneratorLogo,
        descriptionVI: 'Ứng dụng này giúp bạn tạo ra những dòng trạng thái, tiểu sử và chú thích độc đáo, sáng tạo và mang tính cá nhân hóa nhờ sức mạnh của trí tuệ nhân tạo',
        descriptionEN: 'Status & Bio AI Generator helps you create unique, creative, and personalized statuses, bios, and captions with the power of AI',
    },
];

export function getAppInfo(appId: string) {
    return resources.find((item) => item.id === appId);
};