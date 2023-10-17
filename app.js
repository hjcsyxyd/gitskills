var studyRecords = [
    {
        title: "学习HTML",
        date: "2023-9-29",
        content: "学习了HTML基础知识，包括标签、属性等内容。",
        image: "https://z1.ax1x.com/2023/10/12/piSa7WD.png"
    },
    {
        title: "学习CSS",
        date: "2023-10-01",
        content: "学习了CSS基础知识，包括样式选择器、盒模型等内容。",
        image: "https://z1.ax1x.com/2023/10/17/piPSYzd.png"
    },
    {
        title: "netlify部署页面",
        date: "2023-10-02",
        content: "每次部署完我的网址都无法访问，困扰我几天，后面重新试了很多次，去网上买域名，解析域名，最后终于成功",
        image: "https://z1.ax1x.com/2023/10/17/piPlb5D.png"
        
    },
    {
        title: "学习JavaScript",
        date: "2023-10-07",
        content: "在b站上学习JavaScript的相关指令与运用",
        image: "https://z1.ax1x.com/2023/10/17/piP1kGQ.png"
        
    }
    // ...
];

// 在页面上展示学习记录
var recordsDiv = document.getElementById("records");
for (var i = 0; i < studyRecords.length; i++) {
    var record = studyRecords[i];
    var recordHtml = `
        <div class="record">
            <h2>${record.title}</h2>
            <p><strong>日期：</strong>${record.date}</p>
            <p><strong>内容：</strong>${record.content}</p>
            <img src="${record.image}" alt="学习记录图片">
        </div>
    `;
    recordsDiv.innerHTML += recordHtml;
}