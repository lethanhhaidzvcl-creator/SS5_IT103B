/* 
 * GIẢI THÍCH NGUYÊN LÝ STRING IMMUTABILITY:
 * Trong JavaScript, chuỗi (string) là kiểu dữ liệu nguyên thủy bất biến. 
 * Các thao tác như .trim(), .toUpperCase() hay .replaceAll() không can thiệp 
 * hay thay đổi chuỗi gốc, mà sẽ trả về một bản sao chuỗi mới đã được xử lý. 
 * Do đó, bắt buộc phải lưu trữ kết quả trả về vào một biến mới để tái sử dụng.
 */

const rawTicketCode = "  med-card-0520-ut  ";

// 1. Dọn dẹp khoảng trắng và viết hoa, GÁN VÀO BIẾN MỚI
const cleanedTicketCode = rawTicketCode.trim().toUpperCase();

// 2. Thực hiện các thao tác kiểm tra trên biến đã được làm sạch
const isValidPrefix = cleanedTicketCode.startsWith("MED-");
const departmentCode = cleanedTicketCode.slice(4, 8);
const isPriority = cleanedTicketCode.includes("-UT");
const displayCode = cleanedTicketCode.replaceAll("-", " | ");

// 3. In kết quả ra màn hình
console.log("Mã phiếu hợp lệ:", isValidPrefix);
console.log("Khoa điều trị:", departmentCode);
console.log("Ưu tiên:", isPriority);
console.log("Chuỗi in phiếu:", displayCode);
