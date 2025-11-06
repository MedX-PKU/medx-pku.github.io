---
title: 北大医维矩阵实验室两篇大模型交互文章于WWW2025国际会议展示
date: 2025-05-20
excerpt: 近日，2025年度国际万维网会议 WWW (International World Wide Web Conference 2025)在悉尼举行，我实验室文章"Adaptive Activation Steering"和"ColaCare"被该会议录用。北京大学王亚沙教授、马连韬研究助理教授团队硕士二年级学生王天龙、硕士一年级学生王子翔作为两篇文章第一作者前往参会。
featured: false
tags: ['WWW2025', '大语言模型', '多智能体协作', '学术会议', '医信交叉']
category: news
image: /images/news/www2025-presentation-header.jpg
---

近日，2025年度国际万维网会议 WWW (International World Wide Web Conference 2025)在悉尼举行，WWW是计算机互联网领域的国际顶级学术会议，在中国计算机学会（CCF）推荐会议列表中被列为A类会议。我实验室文章**"Adaptive Activation Steering: A Tuning-Free LLM Truthfulness Improvement Method for Diverse Hallucinations Categories"** 和**"ColaCare: Enhancing Electronic Health Record Modeling through Large Language Model-Driven Multi-Agent Collaboration"**被该会议录用。北京大学王亚沙教授、马连韬研究助理教授团队**硕士二年级学生****王天龙、硕士一年级学生王子翔作为两篇文章第一作者**前往参会。

![WWW2025会议现场](https://mmbiz.qpic.cn/mmbiz_png/dyabGzHWib7ibOFUUsM7BvjWaLrhuVGPicu0DfTjBQBh80iausrXURz2e2PCPMw5IEibmRWl7RFWUHjpLDL4tYgMGkg/640?wx_fmt=png&from=appmsg&wxfrom=13&tp=wxpic#imgIndex=0)

## 文章简介及海报

### Adaptive Activation Steering: 解决大语言模型"知而不言"的幻觉问题

**题目**：Adaptive Activation Steering: A Tuning-Free LLM Truthfulness Improvement Method for Diverse Hallucinations Categories

**摘要**：为缓解大语言模型（LLM）因"知"与"言"鸿沟引发的幻觉问题，即LLM虽具备正确知识却无法稳定输出真实回答，本文提出了一种无需微调的自适应激活转向方法（ACT）。ACT基于计算机视觉与自然语言处理中概念线性编码的启发，将"真实性"作为特殊概念，通过提取激活空间中的"转向向量"，在推理阶段动态引导模型思维。

其核心创新包括：
1. 针对逻辑谬误、常识混淆等不同类型幻觉设计定制化转向向量
2. 根据激活的"真实性"含量自适应调整干预强度，避免过度干扰

实验表明，ACT在TruthfulQA基准测试中显著提升LLaMA-7B模型真实指标达83.1%，并在LLaMA、LLaMA2、Alpaca等六大主流模型中实现跨模型泛化（最高提升142%）。此外，该方法仅增加2%推理计算开销，适用于不同规模模型（7B-65B），且与少样本提示方法兼容，叠加后性能提升20%。

**链接**：[北大WWW 2025大模型论文：低成本免微调！缓解大语言模型"知"与"言"鸿沟所导致的幻觉](https://mp.weixin.qq.com/s?__biz=Mzk3NTA5ODY3Nw==&mid=2247483814&idx=1&sn=f17a0d418a17a9c7cc584bc6c564c058&scene=21#wechat_redirect)

![ACT研究海报](https://mmbiz.qpic.cn/mmbiz_png/dyabGzHWib7ibOFUUsM7BvjWaLrhuVGPicujcWMic3L2xFf28MrakiaTXVG5MrhbbjsLzC95I2Dc5BibicxzgrFR5SuGw/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&imgIndex=1)

### ColaCare: 大语言模型驱动的多智能体医疗协作框架

**题目**：ColaCare: Enhancing Electronic Health Record Modeling through Large Language Model-Driven Multi-Agent Collaboration

**摘要**：针对现有EHR模型依赖静态数据、缺乏临床知识融合及推理透明性不足的痛点，本文提出ColaCare框架，通过大语言模型驱动的多智能体协作机制，显著提升电子病历（EHR）预测建模的精度与可解释性。该框架创新性地模拟临床多学科会诊（MDT）范式，构建"特征提取-知识增强-群体决策"三层架构。

核心突破包括：
1. 采用检索增强生成（RAG）技术动态整合权威医学指南，解决知识更新滞后问题
2. 设计DoctorAgent与MetaAgent智能体，通过多轮辩论与共识形成机制，模拟真实MDT协作流程
3. 生成"数据预测-临床推理-指南依据"三位一体的诊断报告，增强决策可追溯性

实验基于MIMIC-IV、COVID-19重症和终末期肾病三大真实数据集，结果显示ColaCare在死亡率和再入院率预测任务中性能全面超越传统深度学习与集成学习方法，消融实验验证各模块贡献。案例研究进一步证明，框架能精准识别复杂病例（如代谢性酸中毒与低钾血症协同风险），并生成循证医学干预建议。

**链接**：[北大WWW2025 | 让DeepSeek和DeepSeek像人类医生一样进行会诊预测患者病情](https://mp.weixin.qq.com/s?__biz=Mzk3NTA5ODY3Nw==&mid=2247483842&idx=1&sn=2ee0ff57da1568abd08af6dc68b6dfff&scene=21#wechat_redirect)

![ColaCare研究海报](https://mmbiz.qpic.cn/mmbiz_png/dyabGzHWib7ibOFUUsM7BvjWaLrhuVGPicuXrUfA0XVK4ekoYAxUucJMjsnpxZBbIqHwJAicRTdJDV5rtJcunCspCw/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&imgIndex=2)

## 参会合影

![参会合影1](https://mmbiz.qpic.cn/mmbiz_jpg/dyabGzHWib7ibOFUUsM7BvjWaLrhuVGPicuJibMEIvDPy4w3K8u6dI0YxCxaliaibicHAoicLMroddK3OicVSGBHJGicrv2g/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&imgIndex=3)

![参会合影2](https://mmbiz.qpic.cn/mmbiz_jpg/dyabGzHWib7ibOFUUsM7BvjWaLrhuVGPicuQcKY4yuERxBWBL8JA0Pg7AmFuZvEzFFHS7OTH4530TorwbDSaqfI1Q/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&imgIndex=4)

![参会合影3](https://mmbiz.qpic.cn/mmbiz_jpg/dyabGzHWib7ibOFUUsM7BvjWaLrhuVGPicufAQZ0sPJ14uaBtHWTcfvaq3uRFS0mibMccHxRIcFHNmHdTkpyLMzW1A/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&imgIndex=5)

![参会合影4](https://mmbiz.qpic.cn/mmbiz_png/dyabGzHWib7ibOFUUsM7BvjWaLrhuVGPicuLq07JnyhpibguXM4axia9quFgFW2MRep2mtrl8TODLeEMC1HZI6wpnQA/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&imgIndex=6)

## 引用信息

Wang, T., Jiao, X., Zhu, Y., Chen, Z., He, Y., Chu, X., ... & Ma, L. (2025, April). Adaptive activation steering: A tuning-free llm truthfulness improvement method for diverse hallucinations categories. In Proceedings of the ACM on Web Conference 2025 (pp. 2562-2578).

Wang, Z., Zhu, Y., Zhao, H., Zheng, X., Sui, D., Wang, T., ... & Ma, L. (2025, April). Colacare: Enhancing electronic health record modeling through large language model-driven multi-agent collaboration. In Proceedings of the ACM on Web Conference 2025 (pp. 2250-2261).

---

*医维矩阵实验室*
*2025年5月20日*