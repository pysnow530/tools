// 示例模板
const examples = {
    url: 'https://example.com/api?name=John&age=30&city=New%20York',
    encoded: 'Hello%20World%2C%20this%20is%20a%20test%20with%20%26%20and%20%3D%20symbols',
    complex: 'https://api.example.com/v1/search?q=test%20query&page=1&limit=10&sort=desc&filter%5Bcategory%5D=books&filter%5Bprice%5D%5Bmin%5D=10&filter%5Bprice%5D%5Bmax%5D=100'
};

function loadExample(type) {
    document.getElementById('input').value = examples[type];
    formatText(); // 自动格式化
}

function formatText() {
    const input = document.getElementById('input').value;
    const output = document.getElementById('output');
    
    try {
        // 检查是否是URL
        if (input.includes('http://') || input.includes('https://')) {
            output.value = formatUrl(input);
        } else {
            output.value = formatGeneralText(input);
        }
    } catch (error) {
        output.value = '格式化出错：' + error.message;
    }
}

function formatUrl(url) {
    // 解码URL编码的字符
    let decodedUrl = decodeURIComponent(url);
    
    // 分割URL为基本URL和参数部分
    const [baseUrl, params] = decodedUrl.split('?');
    
    if (!params) {
        return decodedUrl;
    }
    
    // 格式化参数，每个参数前添加&符号
    const formattedParams = params.split('&').map((param, index) => {
        if (index === 0) {
            return param; // 第一个参数不需要&
        }
        return `&${param}`;
    }).join('\n');
    
    return `${baseUrl}?\n${formattedParams}`;
}

function formatGeneralText(text) {
    // 处理普通文本的格式化
    // 这里可以添加更多的格式化规则
    return text
        .replace(/%2C/g, ',')
        .replace(/%20/g, ' ')
        .replace(/%3A/g, ':')
        .replace(/%2F/g, '/')
        .replace(/%3F/g, '?')
        .replace(/%3D/g, '=')
        .replace(/%26/g, '&');
} 