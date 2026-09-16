const login = require("./login");

test("Đăng nhập đúng với admin và mật khẩu 123", function() {
    expect(login("admin", "123")).toBe(true);
});

test("Đăng nhập sai khi mật khẩu không đúng", function() {
    expect(login("admin", "1234")).toBe(false);
});

test("Đăng nhập sai khi username không đúng", function() {
    expect(login("user", "123")).toBe(false);
});
