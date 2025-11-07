export const teamData = [
  {
    id: 1,
    name: {
      zh: '王亚沙',
      en: 'Yasha Wang'
    },
    position: {
      zh: '研究中心主任',
      en: 'Research Center Director'
    },
    title: {
      zh: '北京大学软件工程国家工程研究中心主任、教授、博士生导师',
      en: 'Director, Professor and Doctoral Supervisor, National Engineering Research Center for Software Engineering, Peking University'
    },
    email: 'wangyasha [at] pku.edu.cn',
    bio: {
      zh: '王亚沙教授，北京大学软件工程国家工程研究中心主任，博士生导师。主要研究方向为医学信息学、软件工程、人工智能在医疗领域的应用等。',
      en: 'Professor Yasha Wang is the Director of the National Engineering Research Center for Software Engineering and doctoral supervisor, focusing on medical informatics, software engineering, and AI applications in healthcare.'
    },
    image: '/images/team/wang-yasha.svg',
    links: [
      { type: 'homepage', url: 'http://scholar.pku.edu.cn/wangyasha/' },
      { type: 'scholar', url: 'https://scholar.google.com/citations?user=EXAMPLE' }
    ],
    timeline: [
      {
        type: 'work',
        title: '研究中心主任',
        organization: '北京大学软件工程国家工程研究中心',
        period: '2015 - Present',
        description: '负责研究中心的整体战略规划和运营管理，推动医学信息学和软件工程领域的创新发展。'
      },
      {
        type: 'work',
        title: '教授、博士生导师',
        organization: '北京大学',
        period: '2010 - Present',
        description: '从事医学信息学、人工智能在医疗领域的应用等方向的教学和科研工作。'
      },
      {
        type: 'education',
        title: '博士',
        organization: '北京大学',
        period: '2005 - 2010',
        description: '计算机科学与技术专业博士'
      }
    ],
    researchInterests: ['医学信息学', '软件工程', '人工智能在医疗领域的应用', '电子病历系统', '医疗大数据分析'],
    isCenterDirector: true
  },
  {
    id: 2,
    name: {
      zh: '马连韬',
      en: 'Liantao Ma'
    },
    position: {
      zh: '实验室负责人',
      en: 'Lab Director'
    },
    title: {
      zh: '北京大学软件工程国家工程研究中心研究型助理教授、医维矩阵实验室负责人',
      en: 'Research Assistant Professor, National Engineering Research Center for Software Engineering, Peking University & Director, MedX Lab'
    },
    email: 'malt [at] pku.edu.cn',
    bio: {
      zh: '马连韬，北京大学软件工程国家工程研究中心研究型助理教授，硕士生导师，医维矩阵实验室负责人。长期从事医信交叉、电子病历数据深度学习可解释分析研究工作。',
      en: 'Liantao Ma is a Research Assistant Professor at the National Engineering Research Center for Software Engineering, Peking University, Master supervisor, and Director of MedX Lab, focusing on medical informatics and deep learning.'
    },
    image: '/images/team/ma-liantao.svg',
    links: [
      { type: 'homepage', url: 'http://scholar.pku.edu.cn/malt/' },
      { type: 'scholar', url: 'https://scholar.google.com/citations?user=LYrsSoEAAAAJ' }
    ],
    timeline: [
      {
        type: 'work',
        title: '实验室负责人',
        organization: '医维矩阵实验室',
        period: '2022 - Present',
        description: '负责实验室的整体规划和研究方向制定，推动医学信息学和人工智能交叉研究。'
      },
      {
        type: 'work',
        title: '研究型助理教授',
        organization: '北京大学软件工程国家工程研究中心',
        period: '2020 - Present',
        description: '从事医学信息学、深度学习在医疗领域应用的研究和教学工作。'
      },
      {
        type: 'education',
        title: '博士',
        organization: '北京大学',
        period: '2015 - 2020',
        description: '计算机科学与技术专业博士，研究方向为医学人工智能。'
      }
    ],
    researchInterests: ['医学信息学', '深度学习', '电子病历分析', '可解释AI', '医学人工智能', '医疗数据挖掘'],
    isLabDirector: true
  },
  {
    id: 3,
    name: {
      zh: '张三',
      en: 'San Zhang'
    },
    position: {
      zh: '博士研究生',
      en: 'PhD Student'
    },
    title: {
      zh: '2021级博士研究生',
      en: 'PhD Student, Class of 2021'
    },
    email: 'zhangsan [at] pku.edu.cn',
    bio: {
      zh: '研究方向：医学图像处理、深度学习在医疗诊断中的应用。',
      en: 'Research interests: Medical image processing, deep learning applications in medical diagnosis.'
    },
    image: '/images/team/zhang-san.svg',
    timeline: [
      {
        type: 'education',
        title: '博士研究生',
        organization: '北京大学',
        period: '2021 - Present',
        description: '计算机科学与技术专业，研究方向为医学图像处理和深度学习。',
        achievements: [
          '发表SCI论文3篇',
          '获得校级优秀研究生奖学金',
          '参与国家级科研项目2项'
        ]
      },
      {
        type: 'education',
        title: '学士',
        organization: '清华大学',
        period: '2017 - 2021',
        description: '计算机科学与技术专业，优秀毕业生。'
      }
    ],
    researchInterests: ['医学图像处理', '深度学习', '计算机视觉', '医疗诊断', '图像分割'],
    research: 'Medical image processing, deep learning in diagnosis'
  },
  {
    id: 4,
    name: {
      zh: '李四',
      en: 'Si Li'
    },
    position: {
      zh: '硕士研究生',
      en: 'Master Student'
    },
    title: {
      zh: '2022级硕士研究生',
      en: 'Master Student, Class of 2022'
    },
    email: 'lisi [at] pku.edu.cn',
    bio: {
      zh: '研究方向：自然语言处理在电子病历分析中的应用。',
      en: 'Research interests: Natural language processing in electronic medical record analysis.'
    },
    image: '/images/team/li-si.svg',
    research: 'NLP in electronic medical record analysis'
  },
  {
    id: 5,
    name: {
      zh: '王五',
      en: 'Wu Wang'
    },
    position: {
      zh: '博士研究生',
      en: 'PhD Student'
    },
    title: {
      zh: '2020级博士研究生',
      en: 'PhD Student, Class of 2020'
    },
    email: 'wangwu [at] pku.edu.cn',
    bio: {
      zh: '研究方向：医疗知识图谱构建与应用、药物推荐系统。',
      en: 'Research interests: Medical knowledge graph construction and applications, drug recommendation systems.'
    },
    image: '/images/team/wang-wu.svg',
    research: 'Medical knowledge graphs, drug recommendation systems'
  },
  {
    id: 6,
    name: {
      zh: '赵六',
      en: 'Liu Zhao'
    },
    position: {
      zh: '硕士研究生',
      en: 'Master Student'
    },
    title: {
      zh: '2023级硕士研究生',
      en: 'Master Student, Class of 2023'
    },
    email: 'zhaoliu [at] pku.edu.cn',
    bio: {
      zh: '研究方向：医疗大数据分析、疾病预测模型。',
      en: 'Research interests: Medical big data analysis, disease prediction models.'
    },
    image: '/images/team/zhao-liu.svg',
    research: 'Medical big data analysis, disease prediction'
  },
  {
    id: 7,
    name: {
      zh: '陈七',
      en: 'Qi Chen'
    },
    position: {
      zh: '研究助理',
      en: 'Research Assistant'
    },
    title: {
      zh: '研究助理',
      en: 'Research Assistant'
    },
    email: 'chenqi [at] pku.edu.cn',
    bio: {
      zh: '负责实验室数据管理与维护，参与医疗数据标准化项目。',
      en: 'Responsible for laboratory data management and maintenance, participating in medical data standardization projects.'
    },
    image: '/images/team/chen-qi.svg',
    research: 'Data management, medical data standardization'
  },
  {
    id: 8,
    name: {
      zh: '孙八',
      en: 'Ba Sun'
    },
    position: {
      zh: '访问学生',
      en: 'Visiting Student'
    },
    title: {
      zh: '访问研究生',
      en: 'Visiting Graduate Student'
    },
    email: 'sunba [at] pku.edu.cn',
    bio: {
      zh: '研究方向：医疗机器人、智能手术辅助系统。',
      en: 'Research interests: Medical robotics, intelligent surgical assistance systems.'
    },
    image: '/images/team/sun-ba.svg',
    research: 'Medical robotics, surgical assistance systems'
  }
]
