document.addEventListener("DOMContentLoaded", function() {
    // ฟังก์ชั่นสำหรับโหลดเนื้อหา HTML
    function loadHTML(url, elementId) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.getElementById(elementId).innerHTML = data;
            })
            .catch(error => console.error('Error loading HTML:', error));
    }

    // โหลดส่วนหัว ฮีโร่ ผลิตภัณฑ์ ฟีเจอร์ และส่วนท้าย
    loadHTML('header.html', 'header-placeholder');
    loadHTML('hero.html', 'hero-placeholder');
    loadHTML('products.html', 'products-placeholder');
    loadHTML('featurette.html', 'featurette-placeholder');
    loadHTML('footer.html', 'footer-placeholder');

    // ฟังก์ชั่นสำหรับจัดการพารามิเตอร์ค้นหา
    function handleSearchQuery() {
        const urlParams = new URLSearchParams(window.location.search);
        const query = urlParams.get('query');
        if (query) {
            if (query === 'หน้าหลัก') {
                window.location.href = 'index.html';
            } else if (query === 'สินค้า') {
                window.location.href = 'store.html';
            } else {
                // ตัวอย่าง: แสดงข้อความค้นหา
                const resultsDiv = document.getElementById('products-placeholder');
                resultsDiv.innerHTML = `<p>ไม่มีผลลัพธ์สำหรับคำว่า: ${query}</p>`;
            }
        }
    }

    handleSearchQuery();
});
