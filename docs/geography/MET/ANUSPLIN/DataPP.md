---
title: 气象数据处理
date: 2018-10-08 23:00:00
tags:
 - AUNSPLIN
categories:
 - 气象研学
---
&emsp;&emsp;本例原始气象数据为从 **[气象数据网](http://data.cma.cn/)** 或其他渠道下载的 .txt 格式数据。若不需要进行气象数据处理，可直接进行插值脚本编写。

<!-- more -->

## 1 提取所需站点信息
&emsp;&emsp;首先需要获取所拥有的气象数据中的气象站点信息以及研究区域的 .shp 文件，参考坐标系尽量相同。利用 ARCGIS 或其他方法进行站点筛选，筛选原则为研究区内所有站点和研究区域边界外垂直于边界方向 1-2 个站点的站点数的总和。参考方法如下： 

&emsp;&emsp; 1）导入数据。在 ARCGIS 中，点击<添加数据>，导入包含站点经纬度数据的 .xls  文件和对应的sheet。

::: warning 注意
&emsp;&emsp;ARCGIS不能很好地打开 .xlsx 文件，建议将包含站点经纬度数据的 .xlsx 文件另存为 .xls 文件。
:::
&emsp;&emsp; 2）显示数据。右键点击 **<图层>** 下导入的文件数据，选择 **<显示 XY 数据>** ， **<X 字段>**  选择经度列， **<Y 字段>** 选择纬度列，**<Z 字段>** 可不进行设置，**<输入坐标的坐标系>** 选择 WGS 1984 。

&emsp;&emsp; 3）将数据文件导出为 .shp  矢量图层文件。方法：**[右键数据-数据-导出数据]**。

&emsp;&emsp; 4）	导入研究区域的 .shp 矢量图层文件，并对其进行编辑。利用 **<编辑器>** 工具，按照筛选原则，制作一个包含所有所需站点的 .shp 矢量图层文件。

&emsp;&emsp; 5）裁剪所需要的点数据。以制作的包含所有所需站点的 .shp 矢量图层文件为掩膜， 裁剪导出的气象站点 .shp 文件，得到所需的气象站点。方法为：**[地图处理-裁剪]**，输入要素为站点导出的 .shp 矢量图层文件，裁剪要素为制作的包含所有所需站点的 .shp 矢量图层文件。

&emsp;&emsp; 6）导出数据。打开 **[地图处理-ArcToolBox-转换工具-表转 Excel]** ，将裁剪后得到的气象站点数据文件导出为 Excel 文件，并删除或替换其中的冗余数据。

## 2 原始气象数据整理
### 2.1 气象数据整理格式

**<center>表 2.1-a ANUSPLIN 插值数据格式示例</center>**

区站号|经度|纬度|高程|2018.1.1|2018.1.2|2018.1.3|2018.1.4
 ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | -----
50136|122.52|52.97|438.5|2|5|3|5
50246|124.72|52.35|361.9|1|4|7|6
50349|124.4|51.67|501.5|0|4|6|6
50353|126.63|51.73|173.9|0|6|6|7
50425|120.18|50.25|581.4|5|3|6|6
50434|121.68|50.48|732.6|5|3|7|7

::: tip 提示
&emsp;&emsp;此处经纬度坐标系为 WGS-1984 地理坐标系，单位为度（°），也可为 albers 投影坐标系，单位为米 （m），或其他坐标系。经纬度高程为变量信息，可进行取舍，如果还有其他变量或协变量，可在经纬度高程后依次添加相应变量数据。
:::
**<center>表 2.1-b 原始气象数据格式示例</center>**

区站号|纬度|经度|高程|年|月|日|平均气温|最高气温|最低气温|平均气温质量控制码|日最高气温质量控制码|日最低气温质量控制码
 ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | -----
50136|5258|12231|4330|1999|12|1|-205|-165|-242|0|0|0
50136|5258|12231|4330|1999|12|2|-293|-175|-361|0|0|0
50136|5258|12231|4330|1999|12|3|-270|-173|-324|0|0|0
50136|5258|12231|4330|1999|12|4|-248|-136|-314|0|0|0
50136|5258|12231|4330|1999|12|5|-230|-117|-296|0|0|0
50136|5258|12231|4330|1999|12|6|-230|-115|-306|0|0|0

### 2.2 原始数据合并
&emsp;&emsp; 原始气象站点数据为 .TXT 格式文本，若文本较多，需要将其合并从而简化步骤。以国家气象数据共享网的气象站点数据为例，通过<SURF_CLI_CHN_MUL_DAY_FORMAT.doc>《数据集内容和文件组织方式》文件信息，找出所需要的气象数据对应的$*$.txt 文件。例如日照时数数据，以<SURF_CLI_CHN_MUL_DAY-SSD-14032-YYYYMM.TXT>的方式命名。

&emsp;&emsp; 合并步骤如下：

&emsp;&emsp; 1）将所需气象数据拷贝至空文件夹，在此文件夹下新建一个 .txt 文件。

&emsp;&emsp; 2）打开新建的 .txt 文件，编辑以下内容：

```bash
 type *.txt > xxx.txt
```

&emsp;&emsp; 其中 xxx 为合并后文件的文件名。

&emsp;&emsp; 3）保存文件，将文件扩展名 txt 改为 bat，双击运行。文件夹下所有 .txt 文件会合并到<文件名>.txt 文件。

::: warning 注意
&emsp;&emsp; 此方法要求原始 .txt 文件末尾必须有空行，否则会出现合并乱行。
:::

**<center>表 2.2 “日照时数”数据组织方式示例</center>**

序号|中文名|数据类型|单位
 ----- | ----- | ----- | -----
1|区站号|Number(5)|
2|纬度|Number(5)|（度、分）
3|经度|Number(6)|（度、分）
4|观测场海拔高度|Number(7)|0.1 米
5|年|Number(5)|年
6|月|Number(3)|月
7|日|Number(3)|日
8|日照时数|Number(7)|0.1 小时
9|日照时数质量控制码|Number(2)|

::: theorem
&emsp;&emsp; 数据解析方式为：每行的字符串长度为（5+5+6+7+5+3+3+7+2），与数据类型列（）内标记的数据长度对应且相等。其中 1-5 位为区站号，6-10 位为纬度……依此类推。
:::
### 2.3 数据重构
&emsp;&emsp; 数据重构利用 SPSS 软件（版本为 25.0）。步骤如下：

&emsp;&emsp; 1）打开 SPSS，利用 **[文件-导入数据-文本数据]** 导入合并的气象数据文件。

::: warning 注意
&emsp;&emsp; 若气象数据含有特定特征值 32766 或其他特殊值而导致相邻数据之间无空格符区分，则可能导致 SPSS 无法正常读取这些数据。这里，可以利用 Excel 来解决这些问题，以日照时数数据为例：

&emsp;&emsp; 1.	依据《数据集内容和文件组织方式》文件，获取对应的序号、中文名、数据类型、单位等信息， 提取数据类型 Number 后的数据宽度值信息。

&emsp;&emsp; 2.	打开 Excel，导入合并后的气象数据文件，导入数据选项中选择固定宽度，依据 Number 后的数据宽度值划分数据，完成后另存数据，利用 SPSS 导入另存后数据，也可在此处直接进行< 2）>的步骤后再进行 SPSS 导入数据。

&emsp;&emsp; 2）检查数据信息，删除无效数据。此处可保留经纬度高程数据，若经纬度高程数据相同站点出现不同值，建议剔除经纬度高程，保留日期和所需的气象数据即可。

<Boxx type='tip' title='建议' content='&emsp;建议去除经纬度高程信息，利于<2.4 站点筛选>步骤。'/>

&emsp;&emsp; 3）数据重构。方法为：**[数据-重构]** (可不进行保存) 。
:::

### 2.4 站点筛选
&emsp;&emsp; 若重构后的数据完全为所研究的数据，则忽略此步骤。若只利用其中部分站点的数据，则利用 SPSS 进行以下步骤：

&emsp;&emsp; 1）获得所需的站点数据，包括经纬度高程信息。

&emsp;&emsp; 2）导入重构后的气象数据和站点数据文件。

&emsp;&emsp; 3）文件合并。将气象数据合并到气象站点数据，步骤为 **[数据-合并文件-添加变量]** ， 打开气象数据的数据集，选择基于键值的一对一合并，键值选择区站号，点击确定。将合并后的文件另存为 Excel 文件。

&emsp;&emsp; 4）删除多余站点数据。打开导出的 Excel 文件，筛选出没有经纬度高程信息的站点， 删除站点及气象数据，并保存。


### 2.5 缺失值插补
&emsp;&emsp; 在 SPSS 中进行缺失值插补。利用同一站点不同日期数据，对缺失数据通过线性内插的方法进行数据补全。方法如下：

&emsp;&emsp; 1）利用 SPSS 或 Excel 对筛选过的站点数据进行转置。保证每一列为同一站点不同日期的数据。

&emsp;&emsp; 2）将特定特征值 32766 或其他特殊值替换为空值，并删除经纬度高程信息。

&emsp;&emsp; 3）打开 **[转换-替换缺失值]** 工具，导入第一组要插值的数据，方法选择 **<线性内插>** ， 之后点击 **<变化量>**，最后，选择其余所有需要缺失值插补的数据组导入，点击确定后完成差值。

&emsp;&emsp; 4）删除插值前的数据，保留插值后的数据，重新转置数据并导出为 Excel 文件。

::: theorem 进阶
&emsp;&emsp; 缺失值插补可使用[地理与气象分析库（gma）](http://gma.luosgeo.com/)的 [gma.math.FillNoData](http://gma.luosgeo.com/UserGuide/math.html#fillnodata) 函数。
:::

### 2.6 单位换算
&emsp;&emsp; 依据《数据集内容和文件组织方式》，各个气象数据的单位并不为 1。例如降水的单位为 0.1mm，即，如果降水数据为 135，则真实降水量应为 135 * 0.1 = 13.5 mm，另外，缺失值插补后小数位数会增加。若单位和小数位数不影响后续计算和分析，则忽略此步，否则，则可利用进行以下步骤进行单位换算和改变小数位数：

&emsp;&emsp; 1）打开缺失值插补后 Excel 文件，新建一个 sheet ，复制第一行日期和第一列区站号至新 sheet 相应位置。

&emsp;&emsp; 2）从新 sheet 中对应的原 sheet 第一个数据的位置开始，输入以下公式：

```vbnet
=ROUND(Sheet1!B2*0.1,1)
```
&emsp;&emsp; 其中 Sheet1!B2 为原 sheet 第一个数据的位置，0.1 为数据单位，1 为需要保留的小数位数。

::: warning 注意
&emsp;&emsp; 在 Excel 中单元格设置中设置小数位数，只能改变显示的小数位数，源数据小数位数并未改变。
:::
&emsp;&emsp; 3）将公式填充到新 sheet 中所有对应数据的位置，完成单位换算和小数位数的设置。建议将新 sheet 中的数据，以文本的格式复制到另一个无数据的sheet 或新 Excel 文件中，便于下一步使用。

### 2.7 重新添加信息

&emsp;&emsp; 如果需要转换坐标系，可以利用 [*3 站点坐标转换](DataPP.html#_3-站点坐标转换) 的方法进行经纬度坐标转换。

&emsp;&emsp; 由于前步骤去除了站点经纬度高程信息，需要在数据整理最后步骤中重新进行添加。

&emsp;&emsp; 添加过程如 [2.4 站点筛选](DataPP.html#_2-4-站点筛选) 过程中的文件合并，基本思路为，将处理完成的气象数据合并到所需站点数据之后，由于站点相同，所以合并完成的文件便为包含站点经纬度高程信息和气象数据的文件。也可将经纬度高程信息直接粘贴到数据文件的相应位置，同样可以得到 [表 2.1-a](DataPP.html#_2-原始气象数据整理) 所示例的 Anusplin 插值数据格式。最后导出数据文件，建议为 Excel 文件。

### 2.8 导出数据

&emsp;&emsp; ANUSPLIN 要求输入数据文件为以 ASCII 码保存的包含站点经纬度和高程信息的站点数据（.dat），可以使用 SPSS 进行数据文件导出。

&emsp;&emsp; 1）SPSS 导入包含完整数据的 Excel 文件。将数据第一行读取为变量名称。

::: warning 注意
&emsp;&emsp; 导出的 .dat 不含变量名称。
:::

&emsp;&emsp; 2）变量属性定义。在变量视图窗口，将区站号 **<类型>** 定义为字符串，其余变量组的< 类型>均为数字，宽度和小数位数自拟。除经度、纬度、高程等变量或协变量外，建议数 据组变量的格式设置相同，即相同的类型、宽度和小数位数。设置宽度时建议宽度值大于变量组中变量的最大值的所占的数据宽度（例如 15.32，数据所需宽度为 5，建议设置该组数据宽度值大于 5）。

&emsp;&emsp; 如果数据过多，可进行批量定义属性，方法如下：

&emsp;&emsp; 打开 **[数据-定义变量属性]** 工具，选择需要定义的变量（建议取消勾选 **<将显示的值数目限制为>** ），点击继续，在 **<定义变量属性>** 对话框设置一组数据的类型、宽度和小数位数，之后点击 **<复制属性>** 中的 **<到其他变量>** ，选择其余所有需要定义相同属性的变量， 点击复制，然后点击确定完成变量属性批量定义。

&emsp;&emsp; 3）导出数据。点击 **[文件-另存为]** ，保存类型选择 **<固定 ASCII>** ，编码（若可选）建议选择 **<本地编码>**，导出文件名自拟。

::: warning 注意
&emsp;&emsp; 以上过程完整的输出了每一步处理所得的文件。如果不需要，处理过程的中间文件可以忽略， 直接尝试执行所有步骤一次性导出以 ASCII 码保存的包含站点经纬度和高程信息的站点数据（.dat）。
:::
## *3 站点坐标转换

&emsp;&emsp;ANUSPLIN 通常使用投影坐标系。

&emsp;&emsp;如果需要进行站点坐标转换，可利用 ARCGIS 进行坐标转换并替换原始站点坐标信息，本章以 WGS 1984 转 Albers 投影坐标系为例。

### *3.1 定义投影

&emsp;&emsp;1）打开  **[地图处理-ArcToolBox-数据管理工具-投影和变换-创建空间参考]** 工具，利用
 **<空间参考>** 属性（或其他方法打开 <空间参考> 属性），新建一个投影坐标系。 

&emsp;&emsp;2）投影坐标系参数设置。**<名称>** 项为新建坐标文件的名称，这里命名为

**<Asia_North_Albers_WGS84_LCR>** ， **<投影名称>** 选择  **Albers**，**<Central_Meridian>** 设置为 **105.0**，**<Standard_Parallel_1>** 设置为 **25.0**，**<Standard_Parallel_2>** 设置为 **47.0**，线性单位 **< 名称>** 选择 **Meter**，**<每单位米数>** 设置 **1**，**<地理坐标系>** 选择 **WGS 1984**，其余参数为默认。
::: theorem
**&emsp;&emsp;Asia_North_Albers_WGS84_LCR**：Albers 投影平面为以东经 105°为中央经线，过北纬 25°和 47°的平面。
:::

### *3.2 坐标转换
&emsp;&emsp;1）导入和显示数据。如 [1 提取所需站点信息](DataPP.html#_1-提取所需站点信息) 中的方法。

&emsp;&emsp;2）要素转点。打开 **[地图处理-ArcToolBox-数据管理工具-要素-要素转点]** 工具，选择 输入数据和输出文件进行转换。

&emsp;&emsp;3）投影。打开 **[地图处理-ArcToolBox-数据管理工具-投影和变换-投影]** 工具，对输出文件进行投影变换，输出坐标系选择自定义的 <Asia_North_Albers_WGS84_LCR> 。

&emsp;&emsp;4）添加 XY 坐标。打开 **[地图处理-ArcToolBox-数据管理工具-要素-添加 XY 坐标]** 工具，对投影完成后的数据添加坐标。打开数据属性表，可以发现原始站点经纬度数据后增加了定义的 Albers 投影坐标信息。

&emsp;&emsp;5）导出 Excel。打开 **[地图处理-ArcToolBox-转换工具-表转 Excel]** ，将添加完Albers 投影坐标的数据导出为 Excel 文件，并删除其中的冗余数据，保留所需的 Albers 投影坐标数据。

