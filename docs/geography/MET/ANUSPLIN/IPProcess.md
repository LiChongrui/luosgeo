---
title: 插值流程
date: 2018-10-08 23:00:00
tags:
 - AUNSPLIN
categories:
 - 气象研学
---

&emsp;&emsp; ANUSPLIN 插值需要对 [原始气象数据](DataPP.html)、[DEM 数据进行预处理](DEMPP.html)，然后编写插值脚本进行插值。整体插值思路如下图：

<center>


```mermaid
graph TD
	A(气象数据) -->B[格式整理]--> E[插值脚本]
	C(DEM) -->D[数据转换]--> E[插值脚本]
	F[插值模块]--> E[插值脚本编写]
	E-->G[执行脚本]-->H[结束]
```

</center>