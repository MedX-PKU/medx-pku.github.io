// Name-to-Link Dictionary for Collaborators
export const authorLinks = {
  'Yinghao Zhu': 'https://yhzhu99.github.io/',
  'Lequan Yu': 'https://yulequan.github.io/',
  'Liantao Ma': 'http://scholar.pku.edu.cn/malt/home',
  'Chengwei Pan': 'https://scholar.google.com/citations?user=7i1dqbEAAAAJ&hl=en',
  'Yasha Wang': 'https://faculty.pku.edu.cn/wangyasha/en/index.htm',
  'Junyi Gao': 'https://aboutme.vixerunt.org/',
  'Zixiang Wang': 'https://fieldry.github.io/',
  'Haoran Hu': 'https://openreview.net/profile?id=~Haoran_Hu3',
  'Dehao Sui': 'https://openreview.net/profile?id=~Dehao_Sui1',
  'Lei Gu': 'https://openreview.net/profile?id=~Lei_Gu5',
  'Xiaochen Zheng': 'https://www.linkedin.com/in/xiaochen-zheng-a058429b/',
  'Ziyi He': 'https://www.linkedin.com/in/ziyi-he-8a142122b/',
  'Xichen Zhang': 'https://www.linkedin.com/in/xichen-zhang-205704259/',
  'Yifan Qi': 'https://openreview.net/profile?id=~Yifan_Qi4',
  'Huiya Zhao': 'https://openreview.net/profile?id=~Huiya_Zhao1',
  'Tianlong Wang': 'https://openreview.net/profile?id=~Tianlong_Wang1',
  'Weibin Liao': 'https://openreview.net/profile?id=~Weibin_Liao1',
  'Junjun He': 'https://junjun2016.github.io/',
  'Wen Tang': 'https://baike.baidu.com/item/%E5%94%90%E9%9B%AF/15893218',
  'Ewen M. Harrison': 'https://www.ed.ac.uk/profile/ewen-harrison',
  'Ewen Harrison': 'https://www.ed.ac.uk/profile/ewen-harrison',
  'Miguel O. Bernabeu': 'https://edwebprofiles.ed.ac.uk/profile/miguel-o-bernabeu',
  'Michael Krauthammer': 'https://krauthammerlab.ch/authors/michaelkrauthammer/',
  'Ahmed Allam': 'https://scholar.google.com/citations?user=xcuCdJUAAAAJ&hl=en',
  'Jiaya Jia': 'https://jiaya.me/home',
  'Junlan Feng': 'https://scholar.google.com/citations?user=rBjPtmQAAAAJ&hl=en',
  'Zhoujun Li': 'https://scholar.google.com/citations?user=e-4LoEcAAAAJ&hl=en',
  'Xu Chu': 'https://cfcs.pku.edu.cn/english/people/faculty/xuchu/index.htm',
  'Zhongwei Qiao': 'https://ch.shmu.edu.cn/main/doctor/intro/id/375/pid/334.html',
  'Fang Liu': 'https://liufang816.github.io/',
  'Xin Tan': 'https://scholar.google.com/citations?user=vi1H6KMAAAAJ&hl=en',
  'Li Zhang': 'https://scholar.google.com/citations?user=WQuLq0MAAAAJ&hl=en'
}

// Utility to assign unique IDs to items in arrays.
// This function is defined once and captures the idCounter in a closure.
const autoAssignIds = (() => {
  let idCounter = 1;
  return (dataArrays) => {
    dataArrays.forEach(arr => {
      if (Array.isArray(arr)) {
        arr.forEach(item => {
          if (item && typeof item === 'object' && !item.id) {
            item.id = idCounter++;
          }
          // Special case for services which have a nested 'items' array
          if (item.items && Array.isArray(item.items)) {
            item.items.forEach(subItem => {
               if (subItem && typeof subItem === 'object' && !subItem.id) {
                    subItem.id = idCounter++;
               }
            });
          }
        });
      }
    });
  };
})();

export const allPublications = [
  {
    featured: true,
    title:
      'MedAgentBoard: Benchmarking Multi-Agent Collaboration with Conventional Methods for Diverse Medical Tasks',
    authors:
      'Yinghao Zhu, Ziyi He, Haoran Hu, Xiaochen Zheng, Xichen Zhang, Zixiang Wang, Junyi Gao, Liantao Ma, Lequan Yu',
    firstAuthors: 'Yinghao Zhu, Ziyi He, Haoran Hu, Xiaochen Zheng',
    correspondingAuthors: 'Liantao Ma, Lequan Yu',
    venue:
      'Conference on Neural Information Processing Systems (NeurIPS) Datasets and Benchmarks Track, 2025',
    year: '2025',
    tag: 'Healthcare Benchmark',
    links: [
      { type: 'Paper', url: 'https://arxiv.org/abs/2505.12371' },
      { type: 'Code', url: 'https://github.com/yhzhu99/MedAgentBoard' },
      { type: 'Website', url: 'https://medagentboard.netlify.app/' }
    ]
  },
  {
    featured: true,
    title:
      'AICare: An AI-Clinician Interaction System for Transparent and Actionable Clinical Decision Support',
    authors:
      'Junyi Gao, Zixiang Wang, Dehao Sui, Wen Tang, Yasha Wang, Ling Wang, Liantao Ma, Yinghao Zhu',
    firstAuthors: '',
    correspondingAuthors: '',
    venue:
      'The Symposium on Artificial Intelligence in Learning Health Systems (SAIL), Best abstract nominee, 2025',
    year: '2025',
    tag: 'Toolkits & Platforms',
    links: [
      {
        type: 'Paper',
        url: 'https://aboutme.vixerunt.org/assets/material/sail_aicare.pdf'
      },
      { type: 'Website', url: 'http://47.93.42.104/215' }
    ]
  },
  {
    featured: true,
    title:
      'Magical: Medical Lay Language Generation via Semantic Invariance and Layperson-tailored Adaptation',
    authors:
      'Weibin Liao, Tianlong Wang, Yinghao Zhu, Yasha Wang, Junyi Gao, Liantao Ma',
    firstAuthors: 'Weibin Liao, Tianlong Wang',
    correspondingAuthors: 'Junyi Gao, Liantao Ma',
    venue:
      'Conference on Neural Information Processing Systems (NeurIPS), 2025',
    year: '2025',
    tag: 'Healthcare Modeling',
    links: [
      { type: 'Paper', url: 'https://arxiv.org/abs/2508.08730' },
      { type: 'Code', url: 'https://github.com/tianlwang/Magical' }
    ]
  },
  {
    featured: true,
    title:
      'Learnable Prompt as Pseudo-Imputation: Rethinking the Necessity of Traditional EHR Data Imputation in Downstream Clinical Prediction',
    authors:
      'Weibin Liao, Yinghao Zhu, Zhongji Zhang, Yuhang Wang, Zixiang Wang, Xu Chu, Yasha Wang, Liantao Ma',
    firstAuthors: '',
    correspondingAuthors: 'Liantao Ma',
    venue:
      'ACM SIGKDD Conference on Knowledge Discovery and Data Mining (KDD), 2025',
    year: '2025',
    tag: 'Healthcare Modeling',
    links: [
      { type: 'Paper', url: 'https://dl.acm.org/doi/10.1145/3690624.3709166' },
      { type: 'Code', url: 'https://github.com/MrBlankness/PAI' }
    ]
  },
  {
    featured: true,
    title:
      'ColaCare: Enhancing Electronic Health Record Modeling through Large Language Model-Driven Multi-Agent Collaboration',
    authors:
      'Zixiang Wang, Yinghao Zhu, Huiya Zhao, Xiaochen Zheng, Tianlong Wang, Wen Tang, Yasha Wang, Chengwei Pan, Ewen M. Harrison, Junyi Gao, Liantao Ma',
    firstAuthors: 'Zixiang Wang, Yinghao Zhu, Huiya Zhao',
    correspondingAuthors: 'Yasha Wang, Junyi Gao, Liantao Ma',
    venue: 'ACM International World Wide Web Conference (WWW), 2025',
    year: '2025',
    tag: 'LLM Agents for Healthcare',
    links: [
      { type: 'Paper', url: 'https://dl.acm.org/doi/10.1145/3696410.3714877' },
      { type: 'Code', url: 'https://github.com/PKU-AICare/ColaCare' },
      { type: 'Website', url: 'https://colacare.netlify.app' }
    ]
  },
  {
    featured: true,
    title:
      'A Comprehensive Benchmark For COVID-19 Predictive Modeling Using Electronic Health Records in Intensive Care',
    authors:
      'Junyi Gao, Yinghao Zhu, Wenqing Wang, Zixiang Wang, Guiying Dong, Wen Tang, Hao Wang, Yasha Wang, Ewen M. Harrison, Liantao Ma',
    firstAuthors: 'Junyi Gao, Yinghao Zhu, Wenqing Wang',
    correspondingAuthors: 'Liantao Ma',
    venue: 'Cell Patterns, 2024',
    year: '2024',
    tag: 'Healthcare Benchmark',
    links: [
      { type: 'Paper', url: 'https://www.cell.com/patterns/fulltext/S2666-3899(24)00050-3' },
      { type: 'Code', url: 'https://github.com/yhzhu99/pyehr' },
      { type: 'Website', url: 'https://pyehr.netlify.app' }
    ]
  },
  {
    featured: true,
    title:
      'Mortality Prediction with Adaptive Feature Importance Recalibration for Peritoneal Dialysis Patients',
    authors:
      'Liantao Ma, Chaohe Zhang, Junyi Gao, Xianfeng Jiao, Zhihao Yu, Yinghao Zhu, Tianlong Wang, Xinyu Ma, Yasha Wang, Wen Tang, Xinju Zhao, Wenjie Ruan, Tao Wang',
    firstAuthors: 'Liantao Ma, Chaohe Zhang, Junyi Gao',
    correspondingAuthors: 'Junyi Gao, Yasha Wang, Wen Tang',
    venue: 'Cell Patterns, Cover, 2023',
    year: '2023',
    tag: 'Healthcare Modeling',
    links: [
      { type: 'Paper', url: 'https://www.cell.com/patterns/fulltext/S2666-3899(23)00294-5' },
      { type: 'Code', url: 'https://github.com/Accountable-Machine-Intelligence/AICare' }
    ]
  },
  {
    featured: true,
    title: 'Adaptive Activation Steering: A Tuning-Free LLM Truthfulness Improvement Method for Diverse Hallucinations Categories',
    authors: 'Tianlong Wang, Xianfeng Jiao, Yinghao Zhu, Zhongzhi Chen, Yifan He, Xu Chu, Junyi Gao, Yasha Wang, Liantao Ma',
    firstAuthors: 'Tianlong Wang, Xianfeng Jiao',
    correspondingAuthors: 'Liantao Ma',
    venue: 'ACM International World Wide Web Conference (WWW), 2025',
    year: '2025',
    tag: 'Trustworthy AI',
    links: [
      { type: 'Paper', url: 'https://dl.acm.org/doi/10.1145/3696410.3714640' },
      { type: 'Code', url: 'https://github.com/tianlwang/ACT' }
    ]
  }
]

// Auto-assign IDs to publications
autoAssignIds([allPublications])
