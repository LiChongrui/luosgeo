---
title: 基本情况
date: 2021-12-29
tags:
 - Sentinel-2
categories:
 - 遥感研学
---

&emsp;&emsp; 哥白尼 Sentinel-2（哨兵 2）计划是一个由两颗相同的 Sentinel-2 极轨卫星组成的星座，两颗卫星相位差 180°，运行在平均高度 786 km 的太阳同步轨道上。每颗卫星在其轨道上的位置由双频全球导航卫星系统（GNSS）接收器测量；通过专用推进系统维持轨道精度；每颗卫星配备了最先进的多光谱成像仪（Multi Spectral Instrument ，MSI），可提供高分辨率的光学成像。

<!-- more -->

## **发射时间**

&emsp;&emsp; Sentinel-2A：2015 年 6 月 23 日

&emsp;&emsp; Sentinel-2B：2017 年 3 月 7 日

## **设计寿命**

&emsp;&emsp; 每颗 Sentinel-2 卫星重约 1.2 吨。卫星寿命为 7.25 年，其中包括 3 个月的在轨调试阶段。其上的电池和推进剂可以适应 12 年的运行要求，包括寿命终止轨道飞行操作。

## **任务目标**

&emsp;&emsp; 1、空间规划

&emsp;&emsp; 2、农业环境监测

&emsp;&emsp; 3、水监测

&emsp;&emsp; 4、森林和植被监测

&emsp;&emsp; 5、土地碳、自然资源监测

&emsp;&emsp; 6、全球作物监测

## **运行情况**

&emsp;&emsp; 轨道类型：太阳同步

&emsp;&emsp; 倾角：98.5°

&emsp;&emsp; 重访周期： 5 天（两颗卫星互补，单颗卫星 10 天），中纬度地区 2-3 天。

## **传感器**

&emsp;&emsp; 类型：MSI（多光谱成像仪）

&emsp;&emsp; 条带宽度：290 km

&emsp;&emsp; 空间分辨率：10 m，20 m，60 m

## **产品级别**

**&emsp;&emsp; Level-0(L0)：** 数据处理操作在数据接收操作期间由有效载荷数据地面段（Payload Data Ground Segment，PDGS）系统实时执行，数据的处理操作需要对地面段获取的 MSI 和卫星辅助原始数据（如轨道、质量、时间换算等）进行打包，并将其与相关注释参数和其他元数据一起存档。 数据处理包含以下步骤：

&emsp;&emsp;&emsp;1、MSI 遥测分析：将获取的仪器源数据包（ISP）数据连接成颗粒并执行数据分析和错误检测功能

&emsp;&emsp;&emsp;2、数据化：图像中各行的数据化可以记录每个 ISP 的准确捕获时间

&emsp;&emsp;&emsp;3、低分辨率图像提取：此处理步骤提取低分辨率图像以进行快速查看生成

&emsp;&emsp;&emsp;4、卫星辅助遥测分析：比较从比特值中提取的卫星辅助数据，并相对于预定义的允许范围进行检查

**&emsp;&emsp; Level-1A(L1A)：** L1A 级处理侧重于解压缩相关的任务源数据包。L1A 产品不向用户提供。

**&emsp;&emsp; Level-1B(L1B)：** L1B 级处理使用 L1A 级产品并应用顶层大气 (Top of Atmosphere, TOA) 辐射校正。L1B 产品不可用。

**&emsp;&emsp; Level-1C(L1C)：** L1C 级处理使用 L1B 级产品，并进行辐射矫正和几何校正，包括正射校正和全局参考系统空间配准，具有亚像素精度。数据处理包含以下步骤：

&emsp;&emsp;&emsp;1、切片关联：选择与所需图像的轮廓线相交的预定义切片。

&emsp;&emsp;&emsp;2、重新采样网格计算：将几何图像链接到目标几何图像（正射校正）。

&emsp;&emsp;&emsp;3、使用栅格重采样和插值滤波器对正射影像每个光谱波段进行重采样。TOA 反射率的计算也发生在此步骤中。

&emsp;&emsp;&emsp;4、掩膜计算：生成云和陆地/水掩膜。

&emsp;&emsp;&emsp;5、通过 JPEG2000 算法和 GML 地理影像编码对生成的 L1C 级影像进行压缩。

**&emsp;&emsp; Level-2A(L2A)：** L2A 级处理包括场景分类和应用于 TOA 的 L1C 级正射影像产品的大气校正。L2A 级主要输出是正射影像底层大气（Bottom of Atmosphere，BOA）校正反射率产品。同时生成气溶胶光学厚度（AOT） 、水汽（WV）和场景分类 （SCM）数据以及 60 m 分辨率下云和雪概率的质量指标（QI）数据。 L2A 产品可由 PDGS 使用 Sen2Cor 生成，也可使用 Sentinel-2 工具箱生成。 

