/**
 * Hàm hỗ trợ chuẩn hóa chuỗi thành định dạng Title Case (Viết hoa chữ cái đầu mỗi từ)
 * Vận dụng các hàm: toLowerCase(), split(), toUpperCase(), slice()
 */
function toTitleCase(str) {
    let words = str.toLowerCase().split(" ");
    for (let i = 0; i < words.length; i++) {
        // Viết hoa chữ cái đầu và ghép với phần còn lại của từ
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}

/**
 * Module bóc tách và định dạng chuỗi lịch khám
 */
function parseScheduleString(rawData) {
    // 1. Tách chuỗi theo dấu gạch ngang "-"
    const parts = rawData.split("-");

    // 2. Chuẩn hóa tên Bác sĩ
    // Cắt bỏ "BS." và đổi "_" thành khoảng trắng
    let rawName = parts[0].replace("BS.", "").replaceAll("_", " ");
    let doctorName = toTitleCase(rawName);

    // 3. Chuẩn hóa Chuyên khoa
    let rawDept = parts[1].replaceAll("_", " ");
    let department = toTitleCase(rawDept);

    // 4. Lấy Giờ khám (giữ nguyên từ chuỗi)
    let time = parts[2];

    // 5. Chuẩn hóa Phòng khám
    let room = parts[3].replace("PHONG_", "Phòng ");

    // In bảng thông báo bằng Template Literals
    const displayBoard = `
=========================================
      BẢNG PHÂN CÔNG CA KHÁM BỆNH
=========================================
 👨‍⚕️ Bác sĩ     : ${doctorName}
 🏥 Chuyên khoa : ${department}
 ⏰ Giờ khám    : ${time}
 🚪 Phòng       : ${room}
=========================================
`;
    console.log(displayBoard);
}

// Bổ sung ít nhất 3 chuỗi dữ liệu bác sĩ khác nhau để kiểm thử
const schedule1 = "BS.nguyen_van_hai-KHOA_TIM_MACH-08:30-PHONG_302";
const schedule2 = "BS.tran_thi_thu_huong-KHOA_NHI-10:00-PHONG_105";
const schedule3 = "BS.le_hoang_nam-KHOA_NOI_TIET-13:45-PHONG_201";

console.log("--- TEST CASE 1 ---");
parseScheduleString(schedule1);

console.log("--- TEST CASE 2 ---");
parseScheduleString(schedule2);

console.log("--- TEST CASE 3 ---");
parseScheduleString(schedule3);
