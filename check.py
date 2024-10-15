def check_csv_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        lines = file.readlines()

    # Tách header và xác định số cột
    header = lines[0].strip().split(',')
    expected_columns = len(header)

    # Kiểm tra từng hàng trong file
    for i, line in enumerate(lines[1:], start=2):  # bắt đầu từ dòng 2 vì dòng 1 là header
        row = line.strip().split(',')
        if len(row) != expected_columns:
            print(f"Hàng {i} bị thiếu cột: {row}")
        else:
            # Kiểm tra dữ liệu trống trong hàng
            if any(cell.strip() == '' for cell in row):
                print(f"Hàng {i} có dữ liệu bị thiếu: {row}")

# Gọi hàm để kiểm tra file
check_csv_file('input1.txt')
