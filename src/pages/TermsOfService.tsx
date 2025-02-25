import { useState } from "react";
import { useParams } from "react-router-dom";

import { getAppInfo } from "../resource";

export default function TermsOfService() {
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
        termsOfUse: string;
        userRights: string;
        dataAndSecurity: string;
        liability: string;
        changes: string;
        contact: string;
    }> = {
        vi: {
            title: "Điều Khoản Dịch Vụ",
            lastUpdate: "Cập nhật lần cuối",
            introduction: "Giới Thiệu",
            termsOfUse: "Điều Kiện Sử Dụng",
            userRights: "Quyền và Trách Nhiệm Của Người Dùng",
            dataAndSecurity: "Dữ Liệu và Bảo Mật",
            liability: "Giới Hạn Trách Nhiệm",
            changes: "Thay Đổi Điều Khoản",
            contact: "Liên Hệ",
        },
        en: {
            title: "Terms of Service",
            lastUpdate: "Last Updated",
            introduction: "Introduction",
            termsOfUse: "Terms of Use",
            userRights: "User Rights and Responsibilities",
            dataAndSecurity: "Data and Security",
            liability: "Liability Limitations",
            changes: "Changes to Terms",
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
                                Chào mừng bạn đến với <strong>{appInfo!.name}</strong>. Đây là một ứng dụng quản lý công việc hàng ngày.
                                Bằng cách sử dụng ứng dụng, bạn đồng ý với các điều khoản và điều kiện sau đây.
                            </>
                        ) : (
                            <>
                                Welcome to <strong>{appInfo!.name}</strong>. This is a daily task management app.
                                We are committed to protecting your privacy.
                            </>
                        )}
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800">2. {selectedContent.termsOfUse}</h2>
                    <ul className="list-disc ml-6 text-gray-700 mt-2">
                        {language === "vi" ? (
                            <>
                                <li>Bạn phải đủ tuổi theo quy định pháp luật để sử dụng ứng dụng.</li>
                                <li>Bạn không được sử dụng ứng dụng cho mục đích bất hợp pháp.</li>
                            </>
                        ) : (
                            <>
                                <li>You must meet the legal age requirement to use the application.</li>
                                <li>You may not use the application for any illegal purposes.</li>
                            </>
                        )}
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800">3. {selectedContent.userRights}</h2>
                    <ul className="list-disc ml-6 text-gray-700 mt-2">
                        {language === "vi" ? (
                            <>
                                <li>Bạn chịu trách nhiệm bảo vệ thông tin cá nhân của mình.</li>
                                <li>Bạn không được sao chép, phân phối hoặc chỉnh sửa nội dung ứng dụng mà không có sự cho phép.</li>
                            </>
                        ) : (
                            <>
                                <li>You are responsible for protecting your personal information.</li>
                                <li>You may not copy, distribute, or modify the application's content without permission.</li>
                            </>
                        )}
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800">4. {selectedContent.dataAndSecurity}</h2>
                    <ul className="list-disc ml-6 text-gray-700 mt-2">
                        {language === "vi" ? (
                            <>
                                <li>Ứng dụng không thu thập hay lưu trữ thông tin cá nhân trên máy chủ.</li>
                                <li>Dữ liệu của bạn chỉ được lưu trữ trên thiết bị hoặc Google Drive nếu bạn đồng bộ.</li>
                                <li>Bạn có toàn quyền quản lý, chỉnh sửa hoặc xóa dữ liệu của mình.</li>
                            </>
                        ) : (
                            <>
                                <li>The application does not collect or store personal information on servers.</li>
                                <li>Your data is only stored on your device or Google Drive if you choose to sync it.</li>
                                <li>You have full control to manage, edit, or delete your data.</li>
                            </>
                        )}
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800">5. {selectedContent.liability}</h2>
                    <ul className="list-disc ml-6 text-gray-700 mt-2">
                        {language === "vi" ? (
                            <>
                                <li>Chúng tôi không chịu trách nhiệm với bất kỳ tổn thất hoặc thiệt hại nào phát sinh từ việc sử dụng ứng dụng.</li>
                                <li>Ứng dụng được cung cấp "như hiện trạng" mà không có bất kỳ đảm bảo nào.</li>
                            </>
                        ) : (
                            <>
                                <li>We are not responsible for any loss or damage arising from the use of the application.</li>
                                <li>The application is provided "as is" without any warranties.</li>
                            </>
                        )}
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800">6. {selectedContent.changes}</h2>
                    <p className="text-gray-700 mt-2">
                        {language === "vi" ? (
                            <>
                                Chúng tôi có thể cập nhật Điều Khoản Dịch Vụ bất kỳ lúc nào. Nếu có thay đổi quan trọng, chúng tôi sẽ thông báo đến bạn.
                            </>
                        ) : (
                            <>
                                We may update the Terms of Service at any time. If there are significant changes, we will notify you.
                            </>
                        )}
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800">7. {selectedContent.contact}</h2>
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