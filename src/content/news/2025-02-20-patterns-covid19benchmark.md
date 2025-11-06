---
title: 北大Cell Patterns文章 | 开源发布新冠重症患者院内健康状况评估基准测试框架
date: 2025-02-20
excerpt: 北京大学软件工程国家工程研究中心王亚沙教授、马连韬研究助理教授团队于Cell Press细胞出版社旗下期刊Patterns上发表了题为"A comprehensive benchmark for COVID-19 predictive modeling using electronic health records in intensive care"的研究论文。
featured: true
tags: ['Cell Patterns', 'COVID-19', '基准测试', '深度学习', '机器学习']
category: research
image: /images/news/covid-benchmark-header.jpg
---

北京大学软件工程国家工程研究中心王亚沙教授、马连韬研究助理教授团队于Cell Press细胞出版社旗下期刊Patterns上发表了题为"A comprehensive benchmark for COVID-19 predictive modeling using electronic health records in intensive care"的研究论文。该医信交叉研究设计并评估了两项新的预测任务——针对COVID-19 ICU患者的结局相关的住院时长预测和早期死亡风险预测。团队在西班牙HM医院、华中科技大学同济医院的公开数据集上评估与测试了临床评分方法、机器学习、深度学习等在内的18种预测模型，辅助医生在临床实践中选择合适的模型，帮助医生高效识别高风险患者。

![研究框架示意图](https://mmbiz.qpic.cn/mmbiz_png/dyabGzHWib78HjVaOqE6XKyg0pTo1lGV8lcdBW9PNIGAgvJmX9xibCeDYWRKRmTE9w5dKpHfX6GjYkED6J81xKUA/640?wx_fmt=png&from=appmsg&wxfrom=13&tp=wxpic#imgIndex=0)

## 研究背景和目标

COVID-19 大流行给全球社会留下了难以磨灭的影响。虽然已有研究表明新的COVID-19变种的致死率较低，但它们的传播能力增强，导致全球病例持续激增。在这种情况下，尤其是对于重症监护单元（ICU）中的COVID-19患者，提早进行风险预测和疾病进展估计显得尤为重要，这有助于最优化医疗资源分配，减轻后疫情时代医疗系统的压力。

尽管现有的COVID-19预测模型在特定数据集上表现出色，但研究人员和临床医生在将这些最先进的预测模型应用于新数据时常常遇到困难。该研究旨在通过构建全面的基准测试与评估框架，提出一个标准化的COVID-19在ICU的基准测试，帮助医生在具体的临床实践中从机器学习、深度学习等模型中挑选合适的模型。

## 研究数据纳入

该研究使用了两个公开新冠重症患者时序病历数据集：

- **华中科技大学同济医院新冠重症患者数据集（TJH数据集）**：该数据集由同济医院2020年1月10日至2月24日共计485名新冠患者住院期间的电子病历数据构成，包括了74项实验室检验检查数据以及年龄、性别2项人口统计数据。

- **西班牙HM医院Covid Data Save Lives新冠重症患者数据集（CDSL数据集）**：该数据集包括了HM医院4479名确诊新冠或疑似感染新冠患者的电子病历数据，由大量异构医疗特征如诊断信息、治疗记录、实验室检验检查数据等构成。

数据预处理流程严谨，覆盖清洗数据、合并数据、标准化数据和填充缺失数据等步骤。

## 研究方法设计

该工作针对真实世界新冠重症监护场景下的临床实际需求，提出了两项任务与评价指标：

- **结局相关的住院时长预测（OSMAE）**：在传统的住院时长预测任务的基础上，考察患者生存结局情况，准确反映出患者的健康状况。

- **早期死亡风险预测（ES）**：奖励模型在患者入院就诊早期即作出正确判断的情况，以评价模型在提前医疗干预的能力。

针对早期死亡风险预测任务的特点，设计了一种简单而有效的时间感知的损失函数（Time-Aware Loss，TA Loss），鼓励模型尽早对高风险患者发出警报。

## 实验结果与分析

该工作在两项任务上分别开展基准测试实验，证明了所设计的时间感知损失以及多任务学习策略的有效性。实验结果全面展示了18种不同预测模型在两个真实世界数据集上的性能表现，为临床医生和研究人员提供了模型选择的参考依据。

## 部署系统

该研究在 https://pyehr.netlify.app 上线了基准测试系统。该系统包含了所有模型在两项任务上的性能及其相关的超参数组合。表格的设计便于用户进行查询、比较和排序等。此外，所有训练好的模型已在线发布，临床医生和研究人员可方便地在真实数据上应用模型。

## 总结

该研究提出了一项全面且开源的COVID-19新冠重症患者预测建模基准。该基准使用了来自重症监护单元的时序电子病历数据，根据COVID-19预测场景的临床实践的特点，引入了两项临床预测任务——早期死亡风险预测和结局相关的住院时长预测，并在两个真实世界数据集上进行了测试。通过严谨数据处理和模型训练流程，确保公平性和可复制性。

该工作为多达18个预测模型提供了基准性能评估，包括1项临床评分方法、5种传统机器学习模型、6种基础深度学习模型以及6种针对电子病历的深度学习模型。为了方便复现研究，研究公开了代码、模型参数权重，并开发了基准测试结果平台，帮助临床医生和研究人员能够迅速应用预训练模型获得预测结果。

## 研究链接

- **研究发布链接：** https://www.cell.com/patterns/fulltext/S2666-3899(24)00050-3
- **代码GitHub平台开源：** https://github.com/yhzhu99/pyehr
- **在线部署系统：** https://pyehr.netlify.app

## 引用信息

Gao, Junyi, Yinghao Zhu, Wenqing Wang, Zixiang Wang, Guiying Dong, Wen Tang, Hao Wang, Yasha Wang, Ewen M. Harrison, and Liantao Ma. "A comprehensive benchmark for COVID-19 predictive modeling using electronic health records in intensive care." Patterns 5, no. 4 (2024).

---

*医维矩阵实验室*
*2025年2月20日*