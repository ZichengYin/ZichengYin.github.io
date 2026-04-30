import { experienceItems } from './experience'
import { galleryItems } from './gallery'
import { honorItems } from './honors'
import { internshipItems } from './internships'

export type Language = 'en' | 'zh'

export interface LocalizedTextItem {
  title: string
  body: string
}

export const text = {
  en: {
    nav: {
      projects: 'Projects',
      internships: 'Internships',
      experience: 'Experience',
      honors: 'Honors',
      gallery: 'Gallery',
    },
    sections: {
      projects: 'Projects',
      internships: 'Internships',
      experience: 'Experience',
      honors: 'Honors & Awards',
      gallery: 'Gallery',
    },
    actions: {
      view: 'View',
      viewProject: 'View Project',
      backHome: 'Back to Home',
      copied: 'Copied!',
      totalVisits: 'Total visits',
      english: 'EN',
      chinese: '中文',
    },
    projectNotFound: {
      title: 'Project Not Found',
      body: "The project you're looking for doesn't exist.",
    },
    galleryIntro:
      'As a non-art major, I use drawing as a way to think and communicate. This gallery collects some of my original and fan art creations. While my techniques are still evolving, several of my works have reached 20,000+ recommendations and 3,000+ saves on the platform, with a total engagement of 24,500+. I have also participated in three public art exhibitions and contributed to UI design and production for three non-personal projects. More importantly, these works have led to multiple paid commission opportunities - a strong proof of their resonance with the audience.',
  },
  zh: {
    nav: {
      projects: '项目',
      internships: '实习',
      experience: '经历',
      honors: '荣誉',
      gallery: '画廊',
    },
    sections: {
      projects: '项目',
      internships: '实习经历',
      experience: '实践经历',
      honors: '荣誉与奖项',
      gallery: '作品画廊',
    },
    actions: {
      view: '查看',
      viewProject: '查看项目',
      backHome: '返回首页',
      copied: '已复制',
      totalVisits: '总访问量',
      english: 'EN',
      chinese: '中文',
    },
    projectNotFound: {
      title: '未找到项目',
      body: '你正在寻找的项目不存在。',
    },
    galleryIntro:
      '虽然我不是美术专业出身，但绘画一直是我思考和表达的方式。这里收录了一些原创作品与同人创作。我的技法仍在持续成长，其中部分作品在平台上获得了 20,000+ 推荐、3,000+ 收藏，总互动量超过 24,500。我也参与过三次公共艺术展，并为三个非个人项目负责或参与 UI 设计与制作。更重要的是，这些作品带来了多次商业约稿机会，也证明了它们与观众之间的连接。',
  },
} as const

export const localizedInternships: Record<Language, LocalizedTextItem[]> = {
  en: internshipItems,
  zh: [
    {
      title: '上海智多互动娱乐科技 - 声音设计师',
      body: '2026 年 2 月 - 2026 年 4 月。公司唯一音频岗位，统筹总部及分部项目的音效与音乐设计，独立完成音频编辑并建设公司声音素材库，显著提升团队协作效率。',
    },
    {
      title: '腾讯 - 音频支持实习生',
      body: '2025 年 8 月 - 2025 年 10 月。为《The Finals》提供音频技术支持与声音设计测试，使用 TTS 制作和调试语音资产，并协助音频资源规范化与问题排查。',
    },
    {
      title: '上海灵狮信息科技 - 音乐课程实习生',
      body: '2025 年 7 月 - 2025 年 8 月。参与在线音乐课程开发与 UI 设计，设计制作 5 个交互式音乐课程系列，负责音乐听写、制谱，并协助完成 30+ 份课程乐谱。',
    },
    {
      title: '上海广播电视台 - 助理',
      body: '2024 年 7 月 - 2024 年 8 月。协助“经典 947”广播节目制作，参与前期文案、音频编辑与后期处理，并为直播团队准备音乐现场音频。',
    },
    {
      title: '上海音乐厅 - 运营',
      body: '2024 年 2 月 - 2024 年 3 月。参与两场“数字缪斯”商业演出的组织工作，负责文档整理、宣传与现场协调。',
    },
  ],
}

export const localizedExperience: Record<Language, LocalizedTextItem[]> = {
  en: experienceItems,
  zh: [
    { title: '上海市青少年科学院', body: '第三届理事会秘书长，主持理事会会议，任期内组织 4 场市级大型科技活动。' },
    { title: '认知障碍儿童康复训练答题系统', body: '项目负责人，设计完整问答系统。项目入选“声音人才赋能计划”，并获第十九届“挑战杯”上海大学生创业计划竞赛校级三等奖。' },
    { title: '虚拟乐器博物馆', body: '项目经理，协调 3D 乐器建模与交互音频开发，在 Unity 中实现实时音频反馈，带领设计与技术团队并对接 3 家合作机构。' },
    { title: '音乐科技探索展示', body: '总导演，策划并执导游戏音频主题展示，舞台呈现原创游戏声音设计作品，协调 20 人团队完成音频与节目统筹。' },
    { title: '华为终端博雅项目 - Beta 测试', body: '模块负责人，独立管理音乐可视化模块的文档流程，包括参数审核、标准制定与最终交付，保障 Demo 展示稳定呈现。' },
    { title: '科幻音乐科技探索之旅（济南站）- 商业展示主持', body: '担任济南站主持与展示讲解，向公众展示上海音乐学院的多项音乐科技项目。' },
    { title: '中学音乐课程 - 助教', body: '在南洋模范中学音乐创作与编配课程、徐汇中学智能钢琴课程担任助教，参与教学、学生指导、课程协调与沟通。' },
    { title: '上海录音师协会', body: '协会成员，参与多类型录音与现场扩声工作，包括民乐团、现代乐队和配音录制等。' },
    { title: '2024 Music China - Music X Future Lab 品牌大使与学生代表', body: '担任学校首席品牌大使与学生代表，协调大使团队并支持海外品牌进行产品推广，促进音乐科技领域的跨文化交流。' },
    { title: '戏剧与表演', body: '高中戏剧社社长、Destination Imagination 队长，大学期间参演多部学生短片。' },
    { title: 'vivo 中央研究院 - 高级技术外部合作经理', body: '因支持 vivo 中央研究院与上海音乐学院联合实验获得官方表彰，负责多方协调，推动实验顺利执行与技术探索。' },
    { title: '音乐表演', body: 'Banbanband 与 Echo 乐队吉他手，参与商业演出与乐队活动，包括昆山市民文化节乐队专场音乐会。' },
  ],
}

export const localizedHonors: Record<Language, string[]> = {
  en: honorItems,
  zh: [
    '第十四届“挑战杯”上海市大学生创业计划竞赛 - 铜奖。',
    '第十九届“挑战杯”上海大学生创业计划竞赛（校级）- 三等奖。',
    '第二届“文创上海”创新创业大赛 - 创新传承奖。',
    '国家版权局 - 计算机软件著作权登记。',
    '第 37 届上海市青少年科技创新大赛 - 市级二等奖。',
    '上海 DI 青少年创新思维竞赛 - 市级第三名。',
    '第一届上海市青少年创意大赛 - 市级优秀奖。',
    '第一届上海市青少年创意大赛 - 汉高可持续创意之星。',
    '徐汇区“上中杯”青少年科技创新论坛 - 区一等奖（2022）。',
    '徐汇区“上中杯”青少年科技创新论坛 - 区一等奖（2020）。',
    '其他高中前奖项：科学实验类 13 项，绘画与摄影类 10 项，写作类 5 项，主持大型活动 3 场，并获得乐器/体育证书 3 项（含古筝十级）。',
  ],
}

export const localizedGalleryItems = {
  en: galleryItems,
  zh: galleryItems.map(item => ({
    ...item,
    title: item.title
      .replace('Performance Data', '平台数据')
      .replace('Artwork', '作品')
      .replace('UI Design', 'UI 设计'),
    description: item.description
      .replace('My primary platform for publishing my works. Personal page:', '我的主要作品发布平台。个人主页：')
      .replace('Original character.', '原创角色。')
      .replace('Fan art of Persona 5 Royal. This piece has received over 1,000 likes across all platforms.', '《女神异闻录 5 皇家版》同人作品，全平台获得 1,000+ 点赞。')
      .replace('Fan art of Hollow Knight Silksong.', '《空洞骑士：丝之歌》同人作品。')
      .replace('UI design for a patented software project 路 Virtual Instrument Museum.', '专利软件项目“虚拟乐器博物馆”的 UI 设计。')
      .replace('Fan art of Hazbin Hotel. This piece has received over 1,000 likes across all platforms.', '《地狱客栈》同人作品，全平台获得 1,000+ 点赞。')
      .replace('Ace of Diamond fan art. This piece has received over 1,000 likes across all platforms.', '《钻石王牌》同人作品，全平台获得 1,000+ 点赞。')
      .replace('Ace of Diamond fan art.', '《钻石王牌》同人作品。')
      .replace('Fan art of Arknights.', '《明日方舟》同人作品。')
      .replace('Commissioned works from my early freelance period. This piece has received over 1,000 likes across all platforms.', '早期自由职业阶段的委托作品，全平台获得 1,000+ 点赞。'),
  })),
}

export function languagePath(language: Language, pathname: string): string {
  const withoutZh = pathname.replace(/^\/zh(?=\/|$)/, '') || '/'
  return language === 'zh' ? `/zh${withoutZh === '/' ? '' : withoutZh}` : withoutZh
}
