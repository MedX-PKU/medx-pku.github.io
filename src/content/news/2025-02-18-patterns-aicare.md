---
title: 北大Cell Patterns封面文章 | 基于动态电子病历的患者个体化预后预测
date: 2025-02-18
excerpt: 2023年12月，北京大学王亚沙教授、唐雯主任医师、马连韬研究助理教授团队于Cell Press细胞出版社旗下期刊Patterns上以首页封面文章的形式发表了题为"Mortality Prediction with Adaptive Feature Importance Recalibration for Peritoneal Dialysis Patients"的研究论文。
featured: true
tags: ['Cell Patterns', 'AI医疗', '腹膜透析', '预后预测', '深度学习']
category: research
image: /images/news/aicare-patterns-header.jpg
---

2023年12月，北京大学王亚沙教授、唐雯主任医师、马连韬研究助理教授团队于Cell Press细胞出版社旗下期刊Patterns上以首页封面文章的形式发表了题为"Mortality Prediction with Adaptive Feature Importance Recalibration for Peritoneal Dialysis Patients"的研究论文，该医信交叉研究基于腹膜透析患者时序随访电子病历数据，搭建个体化预后分析模型AICare，智能预测不良结局发生概率、个体化判别关键影响因素、重新判断指标参考值，研究同时开源发布了预后预测可视化系统"小雅医生"，以便于临床医生试用参考。

![AICare研究框架图](https://mmbiz.qpic.cn/mmbiz_png/dyabGzHWib7icYjNBslA8LVGbnVWzEdia0StzjlchkRknmP4yk8qqXUhwicBZ42OAsQthBj76vfblBafyCYYmha2Bw/640?wx_fmt=png&from=appmsg&wxfrom=13&tp=wxpic#imgIndex=0)

## 研究背景目标：腹透患者预后预测

终末期肾脏病（End-Stage Renal Disease，ESRD，即尿毒症）的发生率持续增加，已成为全球重大医疗负担。ESRD是一种长病程疾病，患者需要持续多年甚至几十年的肾脏替代治疗。腹膜透析（Peritoneal Dialysis，PD）是一种成熟的ESRD患者居家生命支持治疗方式。在长期腹膜透析过程中，患者需要定期随访以监测疾病进展状况。

基于门诊随访过程中所记录的结构化时序电子病历（Electronic Medical Record，EMR）个体化、动态预测不良结局和识别风险因素，对于精准诊疗、早期干预、提高长期透析患者的生存至关重要。

## 数据纳入：真实世界时序电子病历

本研究基于656位腹透患者共13,091次门诊随访记录构成的真实世界电子病历数据集，数据集时间跨度12年，每位患者平均记录约20次随访，平均随访时间4年。分析数据包括：

- 患者的基线数据：患者的人口统计数据（如年龄、性别），是否患有糖尿病
- 动态随访时序数据：实验室检验检查数据（血常规、肝肾功能、血压记录等）

## 方法设计：可解释健康状况学习框架

本研究提出了一项基于深度学习的可解释健康状况表示学习框架——AICare，该端到端模型包含多通道特征提取模块和自适应特征重要性重新校准模块。

- 多通道时序特征编码架构从高维医疗时序特征中提取序列模式
- 患者基线信息和动态随访特征的压缩编码被视为健康上下文向量，用于指导特征重要性的重新校准模块
- 模型在患者随访过程中，针对每一次电子病历继续编码多变量时序数据，建模患者疾病发展轨迹，最终实现动态预后预测

## 实验结果：不同死因预测性能差异分析

AICare模型在腹透患者一年期死亡风险动态预测任务中AUROC（接收者操作特征曲线下面积）为81.6%，AUPRC（精确率-召回率曲线下面积）为47.2%，超过业内已有模型。

根据预测结果，恶液质（Cachexia，AUROC=0.88）、感染（Infection，AUROC=0.082）和周围血管病（PVD，AUROC-0.82）相关的一年期不良预后风险容易识别。脑血管疾病（CVE，AUROC=0.55）和心血管疾病（CVD，AUROC=0.71）相关不良预后风险最难预测。

## 动态预测：个体化疾病进展轨迹可视化

本研究基于特征重标定模块在预测过程中随患者疾病状态变化自适应判别关键特征，通过多视角观察可以进行细粒度可解释性分析，辅助医学专家了解模型如何为特定患者做出预测。

研究配套AICare开发了AI-医生交互预后预测系统，用于可视化患者疾病进展轨迹和关键指标。该系统已开源发布，用户可以在线上传数据以立即获得预测结果，或下载代码以基于自有数据集离线训练模型。

## 定量观察：指标参考值划定

本研究首次揭示了每个特征重要性变化的模式，并基于内置可解释性为大多数PD患者提供推荐参考值。AICare学习到的特征重要性变化呈现两种明显模式：V形抛物线（如白蛋白、舒张压）和L形折线（如收缩压、血红蛋白）。

例如，白蛋白的重要性权重呈V形曲线，以32 g/L为最低转折点。对于大多数PD患者，当白蛋白低于（或高于）32 g/L时，其值越极端，AICare分配的注意力权重就越大，预测的死亡风险随之上升（或下降）。

## 总结与发布

- 本研究发布于：https://www.cell.com/patterns/fulltext/S2666-3899(23)00294-5
- 中文版简介 http://scholar.pku.edu.cn/malt/
- 健康轨迹可视化系统：http://v.ai-care.top/A8
- 特征重要性可视化：http://v.ai-care.top/statistics/feature
- 开源代码发布：https://github.com/Accountable-Machine-Intelligence/AICare
- 在线预测系统：http://v.ai-care.top/predict

## 引用方式

引用信息为：Ma, Liantao, Chaohe Zhang, Junyi Gao, Xianfeng Jiao, Zhihao Yu, Yinghao Zhu, Tianlong Wang et al. "Mortality prediction with adaptive feature importance recalibration for peritoneal dialysis patients." Patterns 4, no. 12 (2023).

---

*医维矩阵实验室*
*2025年2月18日*