// Dữ liệu thô từ máy quét Kiosk
const rawAppointmentCode = "  med-nhi-1024  ";
const cleanPatientName = "  nguyễn văn an  ";

// 1. Dọn dẹp khoảng trắng hai đầu
const cleanAppointmentCode = rawAppointmentCode.trim();

// 2. Chuẩn hóa chuỗi (Viết hoa toàn bộ) để đảm bảo tính bất biến khi so sánh
const normalizedCode = cleanAppointmentCode.toUpperCase();
const formattedPatientName = cleanPatientName.trim().toUpperCase();

// 3. Kiểm tra tính hợp lệ của tiền tố trên chuỗi đã được chuẩn hóa
const isCodeValid = normalizedCode.startsWith("MED-");

// 4. Cắt lấy mã chuyên khoa và số thứ tự tiếp đón
// Tham số slice(4, 7) lấy "NHI"
const departmentCode = normalizedCode.slice(4, 7); 
// Sửa index kết thúc thành 12 (hoặc bỏ trống tham số thứ 2) để lấy trọn vẹn 4 chữ số
const appointmentNumber = normalizedCode.slice(8, 12); 

// 5. In kết quả ra màn hình
console.log("Bệnh nhân:", formattedPatientName);
console.log("Chuyên khoa:", departmentCode);
console.log("Số thứ tự tiếp đón:", appointmentNumber);
console.log("Trạng thái hợp lệ:", isCodeValid);
