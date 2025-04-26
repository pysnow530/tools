# URL 格式化工具

这是一个简单的网页工具，用于格式化 URL 和文本。它可以帮助你更好地查看和理解 URL 参数，以及解码 URL 编码的文本。

## 功能特点

1. **URL 格式化**
   - 自动解码 URL 编码的字符
   - 将 URL 参数分行显示
   - 每个参数前保留 `&` 符号（第一个参数除外）
   - 支持复杂 URL 参数（包括嵌套参数）

2. **文本解码**
   - 自动解码常见的 URL 编码字符
   - 支持转换的编码包括：
     - `%20` → 空格
     - `%2C` → 逗号
     - `%3A` → 冒号
     - `%2F` → 斜杠
     - `%3F` → 问号
     - `%3D` → 等号
     - `%26` → 与符号

## 使用方法

1. 启动服务：
   ```bash
   python3 -m http.server 8000
   ```

2. 在浏览器中访问：
   ```
   http://localhost:8000
   ```

3. 使用方式：
   - 在左侧输入框中输入需要格式化的文本或 URL
   - 点击"格式化"按钮
   - 在右侧查看格式化结果

4. 示例模板：
   - **URL示例**：展示基本的 URL 参数格式化
   - **编码文本示例**：展示 URL 编码文本的解码效果
   - **复杂URL示例**：展示多层嵌套参数的格式化效果

## 示例

### URL 格式化示例
输入：
```
https://example.com/api?name=John&age=30&city=New%20York
```

输出：
```
https://example.com/api?
name=John
&age=30
&city=New York
```

### 编码文本示例
输入：
```
Hello%20World%2C%20this%20is%20a%20test%20with%20%26%20and%20%3D%20symbols
```

输出：
```
Hello World, this is a test with & and = symbols
```

### 复杂 URL 示例
输入：
```
https://api.example.com/v1/search?q=test%20query&page=1&limit=10&sort=desc&filter%5Bcategory%5D=books&filter%5Bprice%5D%5Bmin%5D=10&filter%5Bprice%5D%5Bmax%5D=100
```

输出：
```
https://api.example.com/v1/search?
q=test query
&page=1
&limit=10
&sort=desc
&filter[category]=books
&filter[price][min]=10
&filter[price][max]=100
```

## 技术栈

- HTML5
- CSS3
- JavaScript (ES6)

## 注意事项

- 确保输入的 URL 格式正确
- 对于特别长的 URL，建议使用示例模板进行测试
- 如果遇到格式化错误，请检查输入文本的格式是否正确 