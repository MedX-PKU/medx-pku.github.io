---
title: 北大Health Data Science文章 | 终末期肾病患者怎么吃更预示着长期生存？——长达12年随访试图给出分析
date: 2025-07-09
excerpt: 北京大学第三医院唐雯主任医师、徐州第一人民医院王玲主任医师、北京大学王亚沙教授、马连韬研究助理教授团队，于《Health Data Science》期刊发表研究论文，通过对656名腹膜透析患者长达12年的随访数据进行深入分析，揭示了饮食摄入与死亡风险之间的非线性关系。
featured: true
tags: ['Health Data Science', '营养研究', '腹膜透析', '长期随访', '个性化营养']
category: research
image: /images/news/health-data-science-nutrition-header.jpg
---

北京大学第三医院唐雯主任医师、徐州第一人民医院王玲主任医师、北京大学王亚沙教授、马连韬研究助理教授团队，于《Health Data Science》期刊发表一篇题为《Exploring the Relationship Between Dietary Intake and Clinical Outcomes in Peritoneal Dialysis Patients Stratified by Serum Albumin Levels》 的研究论文。该研究通过对656名腹膜透析（PD）患者长达12年的随访数据进行深入分析，揭示了饮食摄入与死亡风险之间的非线性关系，并提出了与改善预后相关的精确营养摄入阈值，推动个性化营养管理的发展。

该研究由北京大学、北医三院、徐州市第一人民医院、爱丁堡大学联合团队共同完成，作者为：吴悦莹、高峻逸、唐雯、苏春燕、朱英豪、王天龙、王玲、廖伟斌、初旭、王亚沙、赵新菊、汪涛、Ewen Harrison、马连韬。

## 研究背景

终末期肾病（ESRD）严重影响患者的生活质量，并带来巨大的社会经济负担。而肾病"三分治、七分吃"（形象化表述）——饮食干预在ESRD管理中至关重要，但目前将饮食与死亡率结果直接关联的高质量证据和分析仍然较为有限。

研究饮食摄入与预后之间的关系面临诸多挑战：

1. **数据采集困难**：收集长期且高质量的关联性数据是一项复杂且困难的任务，准确的数据采集过程需要专家的监督、严格遵循指南，并进行全面的面对面访谈

2. **关系复杂性**：饮食摄入与预后之间的关系非常复杂，由于ESRD的进展不可避免，饮食习惯对疾病预后的明确影响常常显得模糊不清

3. **定义挑战**：定义"有益的预后"本身就充满挑战，同时诸多混杂因素可能同时影响其饮食选择和疾病预后

## 研究内容

在临床实践中，本研究收集了超过13,000次临床随访数据，涵盖了656名腹膜透析患者，随访时间跨度超过12年，平均每三个月随访一次，每位患者平均随访次数近20次。饮食细节通过指南推荐的三天饮食记录法进行高精度记录，并由专家监督完成。这一数据集包含了详尽的真实世界饮食营养素记录、随访数据及预后信息，为本文分析提供了基础。

![方法框架总览](https://mmbiz.qpic.cn/mmbiz_png/dyabGzHWib79ib9jZEH8ibd1pFG2ySICReIYD8xVYWOOc2zIlUJDLoh0ibOcWWxCwDQMHyDmrCPKbVo2ibwia4kd4UQQ/640?wx_fmt=png&from=appmsg&wxpic#wxfrom=5&wx_lazy=1&imgIndex=0)

为了应对混杂变量，本研究设计了一种分层方法，通过临床指标检测患者健康状况，将健康状况相似的患者分组，以尽可能减少混杂因素的影响。此外，为了解决饮食与预后之间复杂关系的挑战，本研究开发了一种两阶段模型评估死亡风险，并在复杂场景下建模营养素与风险之间的非线性关系。

### 关键发现

研究发现26种营养元素有益预后的精准阈值。例如，结果显示膳食蛋白摄入量（DPI）最佳范围为0.88-1.13 g/kg/天。

- **与现有指南的一致性**：针对现有指南已提供指导建议的12种营养元素，研究结论与现有指南基本一致

- **新的营养建议**：针对指南中未给出明确建议的14种营养元素，本文同样给出摄入建议

- **个性化营养管理**：对于不同健康状况分组的患者（以腹透基线时血清白蛋白为划分标准）分别给出阈值，供患者与慢性病管理营养专家参考

![不同类型患者中与良好预后相关的营养摄入范围](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/2000/svg'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

![不同类型患者中与良好预后相关的蛋白质摄入范围](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/2000/svg'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

## 研究意义

这项研究通过长达12年的大规模真实世界数据分析，为终末期肾病患者的个性化营养管理提供了科学依据：

1. **精准营养指导**：提出了26种营养元素的具体摄入阈值，为临床营养指导提供了量化标准

2. **个性化治疗方案**：基于患者血清白蛋白水平的分层分析，实现了个性化营养建议

3. **循证医学支持**：研究结论与现有指南基本一致，同时补充了指南未覆盖的营养元素建议

这项研究推动了ESRD患者营养管理从经验性向循证性的转变，为改善患者长期预后提供了重要的科学依据。

## 引用信息

*Wu, Y., Gao, J., Tang, W., Su, C., Zhu, Y., Wang, T., ... & Ma, L. (2025). Exploring the Relationship Between Dietary Intake and Clinical Outcomes in Peritoneal Dialysis Patients Stratified by Serum Albumin Levels. Health Data Science.*

---

*医维矩阵实验室*
*2025年7月9日*