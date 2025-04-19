import { useState } from "react";
import { useParams } from "react-router-dom";

import { getAppInfo } from "../resource";

export default function PrivacyPolicy() {
    const { appId } = useParams();
    const appInfo = getAppInfo(appId!)
    const [language, setLanguage] = useState("vi");

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "vi" ? "en" : "vi"));
    };

    const content: Record<"vi" | "en", {
        title: string;
        lastUpdate: string;
        introduction: string;
        noDataCollection: string;
        dataStorage: string;
        googleDriveAccess: string;
        sharing: string;
        security: string;
        userRights: string;
        changes: string;
        contact: string;
    }> = {
        vi: {
            title: "Chính Sách Quyền Riêng Tư",
            lastUpdate: "Cập nhật lần cuối",
            introduction: "Giới Thiệu",
            noDataCollection: "Không thu thập thông tin cá nhân",
            dataStorage: "Lưu Trữ Dữ Liệu",
            googleDriveAccess: "Quyền truy cập Google Drive",
            sharing: "Chia Sẻ Thông Tin",
            security: "Bảo Mật Dữ Liệu",
            userRights: "Quyền Của Bạn",
            changes: "Thay Đổi Chính Sách",
            contact: "Liên Hệ",
        },
        en: {
            title: "Privacy Policy",
            lastUpdate: "Last Updated",
            introduction: "Introduction",
            noDataCollection: "No Personal Data Collection",
            dataStorage: "Data Storage",
            googleDriveAccess: "Google Drive Access",
            sharing: "Information Sharing",
            security: "Data Security",
            userRights: "Your Rights",
            changes: "Policy Changes",
            contact: "Contact",
        },
    };

    const selectedContent = content[language as keyof typeof content];

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center py-10 px-4">
            <button
                onClick={toggleLanguage}
                className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 transition"
            >
                {language === "vi" ? "🇺🇸 English" : "🇻🇳 Tiếng Việt"}
            </button>
            <div className="bg-white max-w-3xl w-full p-8 shadow-lg rounded-lg">
                <div className="flex justify-center mb-4">
                    <img src={appInfo!.logo} alt="App Logo" className="h-16 w-16 object-contain" />
                </div>
                <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
                    {selectedContent.title}
                </h1>
                <p className="text-gray-600 text-center mb-8">{selectedContent.lastUpdate}: {language === "vi" ? "Ngày 24 tháng 2 năm 2025" : "February 24, 2025"}</p>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800">1. {selectedContent.introduction}</h2>
                    <p className="text-gray-700 mt-2">
                        {language === "vi" ? (
                            <>
                                Chào mừng bạn đến với <strong>{appInfo!.name}</strong>. {appInfo?.descriptionVI}.
                                Chúng tôi cam kết bảo vệ quyền riêng tư của bạn.
                            </>
                        ) : (
                            <>
                                Welcome to <strong>{appInfo!.name}</strong>. {appInfo?.descriptionEN}.
                                We are committed to protecting your privacy.
                            </>
                        )}
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800">2. {selectedContent.noDataCollection}</h2>
                    <ul className="list-disc ml-6 text-gray-700 mt-2">
                        {language === "vi" ? (
                            <>
                                <li>Ứng dụng không lưu trữ dữ liệu cá nhân trên máy chủ.</li>
                                <li>Mọi dữ liệu chỉ tồn tại trên thiết bị của bạn.</li>
                            </>
                        ) : (
                            <>
                                <li>The app does not store personal data on servers.</li>
                                <li>All data remains on your device.</li>
                            </>
                        )}
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800">3. {selectedContent.dataStorage}</h2>
                    <ul className="list-disc ml-6 text-gray-700 mt-2">
                        {language === "vi" ? (
                            <>
                                <li>Dữ liệu chỉ được lưu trên thiết bị của bạn.</li>
                                <li>Nếu đồng bộ, dữ liệu sẽ lưu trên Google Drive của bạn.</li>
                            </>
                        ) : (
                            <>
                                <li>Data is only stored on your device.</li>
                                <li>If synced, data is stored on your Google Drive.</li>
                            </>
                        )}
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800">4. {selectedContent.googleDriveAccess}</h2>
                    <ul className="list-disc ml-6 text-gray-700 mt-2">
                        {language === "vi" ? (
                            <>
                                <li>Ứng dụng chỉ có quyền đọc/ghi dữ liệu của ứng dụng trên Google Drive.</li>
                                <li>Bạn có thể xóa dữ liệu bất kỳ lúc nào.</li>
                            </>
                        ) : (
                            <>
                                <li>The app only has read/write access to its own data on Google Drive.</li>
                                <li>You can delete the data at any time.</li>
                            </>
                        )}
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800">5. {selectedContent.sharing}</h2>
                    <p className="text-gray-700 mt-2">
                        {language === "vi" ? (
                            "Ứng dụng không lưu trữ thông tin cá nhân của bạn trên máy chủ. Dữ liệu được lưu trên thiết bị hoặc Google Drive của bạn nếu đồng bộ."
                        ) : (
                            "The app does not store your personal information on its servers. Data is stored on your device or your Google Drive if synced."
                        )}
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800">6. {selectedContent.security}</h2>
                    <ul className="list-disc ml-6 text-gray-700 mt-2">
                        {language === "vi" ? (
                            <>
                                <li>Ứng dụng không gửi dữ liệu ra ngoài nên nguy cơ rò rỉ thông tin là rất thấp.</li>
                                <li>Người dùng có toàn quyền kiểm soát dữ liệu của mình.</li>
                            </>
                        ) : (
                            <>
                                <li>The app does not send data outside, so the risk of data leakage is very low.</li>
                                <li>Users have full control over their data.</li>
                            </>
                        )}
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800">7. {selectedContent.userRights}</h2>
                    <p className="text-gray-700 mt-2">
                        {language === "vi" ? (
                            "Bạn có thể quản lý, chỉnh sửa hoặc xóa dữ liệu trực tiếp trên thiết bị hoặc Google Drive cá nhân."
                        ) : (
                            "You can manage, edit, or delete data directly on your device or personal Google Drive."
                        )}

                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800">8. {selectedContent.changes}</h2>
                    <p className="text-gray-700 mt-2">
                        {language === "vi" ? (
                            "Nếu có thay đổi lớn liên quan đến quyền riêng tư, chúng tôi sẽ thông báo đến bạn."
                        ) : (
                            "If there are significant changes related to privacy, we will notify you."
                        )}

                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800">9. {selectedContent.contact}</h2>
                    <p className="text-gray-700 mt-2">
                        {language === "vi" ? "Nếu có câu hỏi, vui lòng liên hệ:" : "For any questions, please contact:"}
                        <a href="mailto:thanh.ph2021@gmail.com" className="text-blue-600 hover:underline ml-1">
                            thanh.ph2021@gmail.com
                        </a>
                    </p>
                </section>
            </div>
        </div>
    );
}