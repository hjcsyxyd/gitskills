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
        date: "2023-10-05",
        content: "在b站上学习JavaScript的相关指令与运用",
        image: "https://z1.ax1x.com/2023/10/17/piP1kGQ.png"
        
    },
    {
        title: "轮播图制作流程",
        date: "2023-10-07",
        content: "先用弹性盒子容纳图片，再然后设置按钮并使图片滚动，再设置过渡动画使其流畅，最后再设置重置滚动使手动与自动不冲突",
        image: "https://z1.ax1x.com/2023/10/18/piPjH0K.png"
        
    },
    {
        title: "主题切换流程",
        date: "2023-10-10",
        content: "创建三个不同颜色主题，并设置首选样式，再设置主题切换按钮并调色",
        image: "https://z1.ax1x.com/2023/10/18/piPv54g.png"
        
    },
    {
        title: "学习记录流程",
        date: "2023-10-15",
        content: "用html写一下学习记录框的样式，再用JavaScript使其可以在页面上展示学习内容",
        image: "https://z1.ax1x.com/2023/10/18/piPv54g.png"
        
    }

];

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