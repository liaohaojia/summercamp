const studyData = {
  cpp: {
    rounds: [
      {
        title: "第1轮",
        items: [
          { days: "day1", topic: "第1章 · 绪论" },
          { days: "day2、day3、day4", topic: "第2章 · C++语言简单程序设计" },
          { days: "day5、day6、day7", topic: "第3章 · 函数" },
          { days: "day8、day9", topic: "第11章 · 流类库与输入输出" }
        ]
      },
      {
        title: "第2轮",
        items: [
          { days: "day1、day2、day3、day4、day5", topic: "第6章 · 数组、指针与字符串" },
          { days: "day6、day7", topic: "第5章 · 数据的共享与保护" },
          { days: "day8、day9", topic: "第4章 · 类与对象" }
        ]
      }
    ],
    resources: [
      {
        tag: "Bilibili",
        title: "【完结】C++面向过程",
        url: "https://www.bilibili.com/video/BV1Mh411T7Be/?share_source=copy_web&vd_source=62c6d0db8dd729abcf699e7144cb4e49"
      },
      {
        tag: "Bilibili",
        title: "【更新中】C++面向对象",
        url: "https://www.bilibili.com/video/BV1wCkcYQEwN/?share_source=copy_web&vd_source=62c6d0db8dd729abcf699e7144cb4e49"
      }
    ]
  },
  math: {
    rounds: [
      {
        title: "第1轮",
        items: [
          {
            days: "day1、day2、day3",
            topic: "第1章 · 函数与极限",
            videos: [
              { title: "【数列极限学懵了？万能模板来了！30min从入门到精通 | 高数上】", url: "https://www.bilibili.com/video/BV1fpxLeYEmX/?share_source=copy_web&vd_source=62c6d0db8dd729abcf699e7144cb4e49" },
              { title: "【函数极限没学懂？万能模板又来了！40min从入门到精通！ | 高数上】", url: "https://www.bilibili.com/video/BV1xhmnYFEir/?share_source=copy_web&vd_source=62c6d0db8dd729abcf699e7144cb4e49" },
              { title: "【用“夹逼定理”求数列极限，看这一个视频就够！| 高数上】", url: "https://www.bilibili.com/video/BV1eg1KY8EGw/?share_source=copy_web&vd_source=62c6d0db8dd729abcf699e7144cb4e49" },
              { title: "【直击痛点 | 求极限题型与方法一课通 等价无穷小TA来了！】", url: "https://www.bilibili.com/video/BV1Fb4y1V7Bg/?share_source=copy_web&vd_source=62c6d0db8dd729abcf699e7144cb4e49" }
            ]
          },
          {
            days: "day4、day5、day6",
            topic: "第2章 · 导数与微分",
            videos: [
              { title: "【“导数定义”不会做题？50min从入门到精通！ | 高数上】", url: "https://www.bilibili.com/video/BV1Y2DGYoEEw/?share_source=copy_web&vd_source=62c6d0db8dd729abcf699e7144cb4e49" }
            ]
          },
          {
            days: "day7、day8、day9",
            topic: "第3章 · 微分中值定理与导数的应用",
            videos: [
              { title: "【「微分中值定理」保姆级教程！8道题搞定！干货密集，不看后悔 | 高数上】", url: "https://www.bilibili.com/video/BV18SmZYrEPA/?share_source=copy_web&vd_source=62c6d0db8dd729abcf699e7144cb4e49" },
              { title: "【泰勒公式，39分钟，小白也直接上手！| 高等数学】", url: "https://www.bilibili.com/video/BV12G411U7tD/?share_source=copy_web&vd_source=62c6d0db8dd729abcf699e7144cb4e49" },
              { title: "【泰勒公式，3大核心考点，一个视频搞定！| 证明题来了】", url: "https://www.bilibili.com/video/BV14C4y127xd/?share_source=copy_web&vd_source=62c6d0db8dd729abcf699e7144cb4e49" }
            ]
          }
        ]
      },
      {
        title: "第2轮",
        items: [
          {
            days: "day1、day2、day3",
            topic: "第4章 · 不定积分",
            videos: [
              { title: "【不定积分难学？1h全面入门到精通！| 学渣救星】", url: "https://www.bilibili.com/video/BV1su4y1L7Vn/?share_source=copy_web&vd_source=62c6d0db8dd729abcf699e7144cb4e49" },
              { title: "【不定积分，必会技巧，思路瞬间清晰！一般人不知道】", url: "https://www.bilibili.com/video/BV1ie411d7ze/?share_source=copy_web&vd_source=62c6d0db8dd729abcf699e7144cb4e49" },
              { title: "【边学边练！“有理函数积分”，49min全面入门到精通！| 高数上】", url: "https://www.bilibili.com/video/BV1XLiUY9Eud/?share_source=copy_web&vd_source=62c6d0db8dd729abcf699e7144cb4e49" }
            ]
          },
          {
            days: "day4、day5、day6",
            topic: "第5章 · 定积分",
            videos: [
              { title: "【「定积分」一课通！概念+性质一站式到位！】", url: "https://www.bilibili.com/video/BV1EN4y1a7Qr/?share_source=copy_web&vd_source=62c6d0db8dd729abcf699e7144cb4e49" },
              { title: "【牛莱公式的发现之旅？变限积分+微积分基本定理！】", url: "https://www.bilibili.com/video/BV1EH4y1k7aZ/?share_source=copy_web&vd_source=62c6d0db8dd729abcf699e7144cb4e49" },
              { title: "【备战期末！定积分，你要学会的方法技巧，都在这！】", url: "https://www.bilibili.com/video/BV1za4y197yY/?share_source=copy_web&vd_source=62c6d0db8dd729abcf699e7144cb4e49" },
              { title: "【反常积分敛散性，23min，从小白到高手！| 高数上】", url: "https://www.bilibili.com/video/BV1JArLYHEeD/?share_source=copy_web&vd_source=62c6d0db8dd729abcf699e7144cb4e49" }
            ]
          },
          {
            days: "day7",
            topic: "第6章 · 定积分的应用",
            videos: [
              { title: "【期末必考！定积分几何应用，从入门到精通】", url: "https://www.bilibili.com/video/BV1ee411r71f/?share_source=copy_web&vd_source=62c6d0db8dd729abcf699e7144cb4e49" }
            ]
          },
          {
            days: "day8、day9",
            topic: "第7章 · 微分方程",
            videos: [
              { title: "【微分方程没学懂？从头讲解本质，30分钟零基础上手！| 高等数学同济八版】", url: "https://www.bilibili.com/video/BV1etZxBGEZc/?share_source=copy_web&vd_source=62c6d0db8dd729abcf699e7144cb4e49" },
              { title: "【期末速成 | 微分方程难学？1h全面梳理从概念到各题型】", url: "https://www.bilibili.com/video/BV1Kc41187HS/?share_source=copy_web&vd_source=62c6d0db8dd729abcf699e7144cb4e49" }
            ]
          }
        ]
      }
    ]
  }
};

function renderRounds(containerId, rounds, showVideos) {
  const container = document.getElementById(containerId);
  container.innerHTML = rounds.map((round) => `
    <article class="round-card">
      <h3>${round.title}</h3>
      <ul class="schedule-list">
        ${round.items.map((item) => `
          <li class="schedule-item">
            <span class="day-badge">${item.days}</span>
            <p class="topic-title">${item.topic}</p>
            ${showVideos && item.videos ? `
              <div class="video-list">
                ${item.videos.map((video) => `
                  <a class="video-item" href="${video.url}" target="_blank" rel="noreferrer">
                    <span class="video-tag">Video</span>
                    <p class="video-title">${video.title}</p>
                  </a>
                `).join("")}
              </div>
            ` : ""}
          </li>
        `).join("")}
      </ul>
    </article>
  `).join("");
}

function renderResources(containerId, resources) {
  const container = document.getElementById(containerId);
  container.innerHTML = resources.map((resource) => `
    <a class="video-item" href="${resource.url}" target="_blank" rel="noreferrer">
      <span class="video-tag">${resource.tag}</span>
      <p class="video-title">${resource.title}</p>
    </a>
  `).join("");
}

function setupTabs() {
  const buttons = document.querySelectorAll(".tab-button");
  const panels = document.querySelectorAll(".subject-panel");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((item) => item.classList.remove("is-active"));
      panels.forEach((panel) => panel.classList.remove("is-active"));

      button.classList.add("is-active");
      document.getElementById(button.dataset.target).classList.add("is-active");
    });
  });
}

renderRounds("cpp-rounds", studyData.cpp.rounds, false);
renderResources("cpp-resources", studyData.cpp.resources);
renderRounds("math-rounds", studyData.math.rounds, true);
setupTabs();
