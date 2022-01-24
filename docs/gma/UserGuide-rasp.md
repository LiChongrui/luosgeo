---
title: 栅格处理
date: 2021-10-30 00:00:00
tags:
 - gma
 - Python
categories:
 - 地理与气象分析库
---

**&emsp;&emsp;栅格处理** 为 gma 所有 **栅格处理（rasp）** 操作相关函数的详细功能、参数设置和引用方法，如果您想了解 gma 所有函数的整体情况，请参考 [函数功能列表](Function.html) 。


::: warning 须知

&emsp;rasp 下各个函数生成 GTiff 文件时默认采用 LZW 压缩，并生成外部栅格金字塔 .ovr 文件。目前，除部分自带压缩的驱动，仅对 GTiff, HFA, netCDF 进行了完整的压缩支持。

:::

## BandSynthesis
::: theorem

**引用：** gma.rasp.BandSynthesis(InFiles, OutFile, OutFormat = 'GTiff')

**功能：**【文件合并】。将单波段文件合成多波段文件。

**参数：** 

&emsp;InFiles：`str||list`。需要合成的单波段文件路径或路径集合。

&emsp;OutFile：`str`。输出栅格路径。

**可选参数：**

&emsp;OutFormat  = `str`。输出栅格文件格式。默认为 'GTiff'，其他格式详见 ToOtherFormat 函数。

::: 

## BandDecomposition
::: theorem

**引用：** gma.rasp.BandDecomposition(InFile, OutPath, Bands = None, OutFormat = 'GTiff')

**功能：**【波段分解】。将多波段文件拆分（或提取）为单波段文件。

**参数：** 

&emsp;InFile：`str`。输入栅格路径。

&emsp;OutPath：`str`。输出文件夹路径。

**可选参数：**

&emsp;OutFormat  = `str`。输出栅格文件格式。默认为 'GTiff'，其他格式详见 ToOtherFormat 函数。

::: 

## Clip

::: theorem

**引用：** gma.rasp.Clip(InFile, OutFile, CutLineFile, InNoData = None, OutNoData = None, MaskBoundary = True, OutFormat = 'GTiff')

**功能：**【裁剪】。按矢量边界裁剪栅格。

**参数：** 

&emsp;InFile：`str`。输入栅格路径。

&emsp;OutPath：`str`。输出文件夹路径。

&emsp;CutLineFile：`str`。裁剪矢量文件路径。

**可选参数：**

&emsp;InNoData = `float`。输入栅格的无效值。默认不指定（None）无效值。

&emsp;OutNoData  = `float`。输出栅格的无效值。默认不指定（None）无效值。

&emsp;MaskBoundary  = `bool`。是否掩膜边界外数据。默认掩膜（True）。

&emsp;OutFormat  = `str`。输出栅格文件格式。默认为 'GTiff'，其他格式详见 ToOtherFormat 函数。

::: 

## ToOtherFormat

::: theorem

**引用：** gma.rasp.ToOtherFormat(InFile, OutFile, OutFormat = 'GTiff')

**功能：**【格式转换】。一种栅格格式转换为另一种栅格格式。

**参数：** 

&emsp;InFile：`str`。输入栅格路径。

&emsp;OutPath：`str`。输出文件夹路径。

**可选参数：**

&emsp;OutFormat  = `str`。输出栅格文件格式，默认为 'GTiff'。

<Boxx type='tip' title='其他支持格式' content='&emsp;AAIGrid, BT, CALS, COG, DTED, EHdr, ENVI, ERS, EXR, FIT, GIF, GPKG, GRIB, GS7BG, GSAG, GSBG, GTiff, HDF4Image,HF2, HFA, ISCE, ISIS2, ISIS3, JP2OpenJPEG, JPEG, LAN, MBTiles, XPM, XYZ, netCDF, MFF2, MRF, NITF, PAux, PCIDSK, PCRaster, PNG, RST, Rasterlite, SIGDEM, USGSDEM, VICAR, VRT' />

::: 

<Boxx type='warning' title='注意' content='&emsp;&emsp;多维数据（netCDF, HDF4Image等）转出请使用 MultiSDSToTif 函数。'/>


## Mosaic

::: theorem

**引用：** gma.rasp.Mosaic(InFiles, OutFile, InNoData = None, OutNoData = None, OutFormat = 'GTiff')

**功能：**【栅格镶嵌】。将多个栅格数据集合并到一个新的栅格数据集中。

**参数：** 

&emsp;InFiles：`list`。镶嵌影像路径集合。

&emsp;OutFile：`str`。输出文件夹路径。

&emsp;CutLineFile：`str`。裁剪矢量文件路径。

**可选参数：**

&emsp;InNoData = `float||list`。输入栅格的无效值。默认自动搜索每个输入栅格的无效值（None）。

&emsp;OutNoData  = `float`。输出栅格的无效值。默认根据输入栅格自动设置（None）。

&emsp;OutFormat  = `str`。输出栅格文件格式。默认为 'GTiff'，其他格式详见 ToOtherFormat 函数。

::: 

## Resample

::: theorem

**引用：** gma.rasp.Resample(InFile, OutFile, Resolution, Method = 2, InNoData = None, OutNoData = None, OutFormat = 'GTiff')

**功能：**【重采样】。更改栅格数据的空间分辨率。

**参数：** 

&emsp;InFile：`str`。输入栅格路径。

&emsp;OutFile：`str`。输出栅格路径。

&emsp;Resolution：`float`。重采样分辨率。

**可选参数：**

&emsp;Method = `int||str`。重采样方法。默认为 'Cubic'法（2）。

<Boxx type='tip' title='支持的重采样方法' content='&emsp;0: Nearest Neighbour, 1: Bilinear, 2: Cubic, 3: CubicSpline, 4: Lanczos, 5: Average, 6: RMS, 7: Mode'/>

&emsp;InNoData  = `float`。输入栅格的无效值。默认自动搜索输入栅格的无效值（None）。

&emsp;OutNoData  = `float`。输出栅格的无效值。默认与 InNoData 的无效值相同（None）。

&emsp;OutFormat  = `str`。输出栅格文件格式。默认为 'GTiff'，其他格式详见 ToOtherFormat 函数。

::: 

## Reproject

::: theorem

**引用：** gma.rasp.Reproject(InFile, OutFile, OutProjection, InNoData = None, OutNoData = None, OutFormat = 'GTiff')

**功能：**【重投影】。将空间数据从一种坐标系投影到另一种坐标系。

**参数：** 

&emsp;InFile：`str`。输入栅格路径。

&emsp;OutFile：`str`。输出栅格路径。

&emsp;OutProjection：`str`。输出栅格坐标系（EPSG 或 wkb 格式）。

**可选参数：**

&emsp;InNoData  = `float`。输入栅格的无效值。默认自动搜索输入栅格的无效值（None）。

&emsp;OutNoData  = `float`。输出栅格的无效值。默认与 InNoData 的无效值相同（None）。

&emsp;OutFormat  = `str`。输出栅格文件格式。默认为 'GTiff'，其他格式详见 ToOtherFormat 函数。

::: 

## ChangeDataType

::: theorem

**引用：** gma.rasp.ChangeDataType(InFile, OutFile, DataType, BitDepth = None, OutFormat = 'GTiff')

**功能：**【数据类型转换】。转换栅格数据的数据类型。

**参数：** 

&emsp;InFile：`str`。输入栅格路径。

&emsp;OutFile：`str`。输出栅格路径。

&emsp;DataType：`int`。输出栅格数据类型的代码。

<Boxx type='tip' title='支持的数据类型' content='&emsp;未知类型: 0, 8位无符号整型: 1, 16位无符号整型: 2, 16位整型: 3, 32位无符号整型: 4,32位整型: 5, 32位浮点: 6, 64位浮点: 7, 16位复整型: 8, 32位复整型: 9, 32位复浮点型: 10, 64位复浮点型: 11。'/>

**可选参数：**

&emsp;BitDepth  = `int`。输出栅格位深。仅为 'GTiff' 文件提供位深支持。

&emsp;OutFormat  = `str`。输出栅格文件格式。默认为 'GTiff'，其他格式详见 ToOtherFormat 函数。

::: 

## MultiSDSToTif

::: theorem

**引用：** gma.rasp.MultiSDSToTif(InFile, OutPath, Variable = None, Dimension = None, Projection = 'WGS84')

**功能：**【多维数据转 GTiff】。将含有子数据集的多维数据提取为 GTiff。

**参数：** 

&emsp;InFile：`str`。输入栅格路径。

&emsp;OutPath：`str`。输出文件夹路径。

**可选参数：**

&emsp;Variable  = `list`。要转换变量的 字符串 列表。默认转换所有变量（None）。

&emsp;Dimension  = `list`。要转换维度的 整型数 列表。默认转换所有维度（None）。

&emsp;Projection  = `str`。输入数据的 X，Y 坐标系。默认为 'WGS84'。

::: 

## ToVector

::: theorem

**引用：** gma.rasp.ToVector(InFile, OutVector, FieldName = 'Value', TranBand = 1, OutFormat = 'ESRI Shapefile')

**功能：**【栅格转矢量】。将栅格数据转换为矢量数据。

**参数：** 

&emsp;InFile：`str`。输入栅格路径。

&emsp;OutVector：`str`。输出矢量路径。

**可选参数：**

&emsp;FieldName  = `str`。输出矢量字段的名称。默认为 'Value'。

&emsp;TranBand  = `int`。要转换的波段。默认转换第一个波段（1）。

&emsp;OutFormat   = `str`。输出矢量文件格式，默认为 'ESRI Shapefile'。其他格式详见 vesp.ToOtherFormat 函数。

::: 

<Boxx type='tip' title='描述' content='&emsp;不需要设置类型（点、线、面等），默认根据栅格数据自动确定类型。'/>

## WriteRaster

::: theorem

**引用：** gma.rasp.WriteRaster(OutFile, DataArray, Projection = None, Transform = None, Format = 'GTiff', DataType = 6, NoData = None)

**功能：**【写出栅格】。将数组保存为栅格文件。

**参数：** 

&emsp;OutFile：`str`。输出栅格路径。

&emsp;DataArray：`array`。输入数组。

**可选参数：**

&emsp;Projection  = `str`。输出栅格坐标系。默认不指定坐标系（None）。

&emsp;Transform  = `tuple`。输出栅格的仿射变换。默认不指定仿射变换（None）。

&emsp;Format   = `str`。输出栅格文件格式。默认为 'GTiff'。其他格式详见 ToOtherFormat 函数。

&emsp;DataType  = `int`。输出栅格数据类型。默认为 float32（6）。其他数据类型见 ChangeDataType 函数。

&emsp;NoData = `float`。输出栅格的无效值。默认不设置无效值（None）。

::: 

## GenerateOVR

::: theorem

**引用：** gma.rasp.GenerateOVR(InFile, Force = False)

**功能：**【构建栅格金字塔】。为 GTiff 文件构造 .ovr 栅格金字塔，或为其他类型的栅格数据强制构造 .ovr 金字塔 。

**参数：** 

&emsp;InFile：`str`。栅格文件路径。

**可选参数：**

&emsp;Force  = `bool`。是否为所有类型的文件添加 .ovr 金字塔。默认（False）只为 GTiff 驱动的栅格添加金字塔。

::: 

## OrthophotoCorrection

::: theorem

**引用：** gma.rasp.OrthophotoCorrection(InFile, OutFile, DEM = None, Resample = 0, OutFormat = 'GTiff')

**功能：**【正射校正】。根据有理多项式系数（RPC）对影像进行正射校正。

**参数：** 

&emsp;InFile：`str`。输入栅格路径。

&emsp;&emsp;输入栅格必须有内部 RPC（有理多项式系数）元数据或同路径下描述 RPC 的外部 .rpb 或 _RPC.txt 文件。

&emsp;OutFile：`str`。输出栅格路径。

**可选参数：**

&emsp;DEM  = `float||str`。用于 RPC 计算的 固定海拔 或 DEM 文件的名称。默认不设置此参数（None）。

&emsp;Resample  = `int||str`。重采样方法。默认为 'Nearest Neighbour'法（0）。其他重采样方法详见 Resample 函数。

&emsp;OutFormat   = `str`。输出栅格文件格式。默认为 'GTiff'，其他格式详见 ToOtherFormat 函数。

::: 

## Deformation


::: theorem

**引用：** gma.rasp.Deformation(InFiles, OutFile, CutLineFile = None, ResampleMethod = 0, Resolution = None, OutProjection = 'WGS84',  InNoData = None, OutNoData = None, OutFormat = 'GTiff')

**功能：**【流程化处理】。完成镶嵌-裁剪-重采样-重投影-格式转换等其中一个或多个功能。

**参数：** 

&emsp;InFiles：`str||list`。输入栅格路径。如果为列表，则列表内所有的栅格将被【镶嵌】（Mosaic）。

&emsp;OutFile：`str`。输出栅格路径。

**可选参数：**

&emsp;CutLineFile  = `str`。裁剪矢量文件路径。如果有，将用此 矢量文件 裁剪输出栅格。

&emsp;Resolution  = `float`。重采样分辨率。设置重采样分辨率。

&emsp;ResampleMethod  = `int||str`。重采样方法。默认为 'Nearest Neighbour'法（0）。其他重采样方法详见 Resample 函数。

&emsp;OutProjection = `str`。输出栅格坐标系名称。输出栅格坐标系（EPSG 、 wkb 或 坐标名称）。

&emsp;InNoData  = `float`。输出无效值。输出栅格的无效值。

&emsp;OutNoData  = `float`。输出无效值。默认与 InNoData 的无效值相同（None）。

&emsp;OutFormat   = `str`。输出栅格文件格式。默认为 'GTiff'，其他格式详见 ToOtherFormat 函数。

::: 

## Fusion 类

::: theorem

**引用：** gma.rasp.Fusion(InPanchromatic, InMultispectral, OutFile)

**功能：**【影像融合】。

**初始化：**

&emsp;InPanchromatic：`str`。输入全色影像路径。

&emsp;Multispectral：`str`。输入多光谱影像数据。

&emsp;OutFile：`str`。输出栅格路径。

::: 

::: warning 注意
&emsp;  类内函数引用前请先初始化 `Fusion` 类！
::: 

### Pansharpen

::: theorem

**引用：** gma.rasp.Fusion().Pansharpen(ResampleMethod = None, SpatAdjust = None, Bands = None, NumThreads = None, BitDepth = None, InNoData = None, OutFormat = 'GTiff')

&emsp;  注意：*引用前请先初始化 `Fusion` 类。*

**功能：**【Pansharp】。对全色影像和多光谱影像基于 Pansharpen 方法进行融合。

**参数：** 

&emsp;ResampleMethod：`str`。重采样方法。默认为 'Cubic'（None）。

&emsp; &emsp;  重采样方法包括：Nearest, Bilinear, Cubic, CubicSpline, Lanczos, Average。

&emsp;SpatAdjust：`str`。空间坐标系调整。默认为 'Union'（None）。

&emsp; &emsp;  调整方法还包括：Intersection, NoneWithoutWarning。

&emsp;Bands：`list`。融合多光谱波段列表。例如[1,2...]，波段计数从 1 开始。默认融合输入多光谱数据的所有波段（None）。

<Boxx type='warning' title='注意' content='&emsp;每个波段的权重值（Weights）相同，根据 Bands 数量确定，为 1 / len(Bands)。'/>

&emsp;NumThreads：`int||ALL_CPUS`。融合使用计算机 CPU 的线程数。默认不使用多线程（None）。

&emsp;BitDepth：`int`。生成数据的位深。默认不设置位深（None）, 但如果全色波段存在 NBITS 值，则使用该值作为位深。

&emsp;InNoData：`float`。全色和多光谱影像的无效值（所有输入数据的无效值应当相同，否则该设置无效），输出文件的无效值也为该值。默认不设置无效值（None）。

&emsp;OutFormat：`str`。输出栅格文件格式。默认为 'GTiff'，其他格式详见 ToOtherFormat 函数。

::: 

## AddColorTable <Badge text="1.0.1 +"/>

::: theorem

**引用：** gma.rasp.AddColorTable(InFile, TemplateFile = None, ColorTable = None)

**功能：**【添加色彩映射表】。为栅格数据添加色彩映射。

**参数：** 

&emsp;InFile：`str`。输入栅格路径。

**可选参数：**

&emsp;TemplateFile = `str`。模板栅格路径。若设置模板栅格（不为None），则将模板栅格的色彩映射表添加到输入栅格。

&emsp;ColorTable = `dict`。色彩映射表。格式为 {值: (R,G,B,A)}。默认不设置（None）。

::: tip 示例

ColorTable = {10:(200,50,100,255), 20:(200,50,100,255)}。
:::

::: warning 注意

&emsp;若设置了 ColorTable，则：

&emsp;&emsp;1、若 TemplateFile 未设置（None），则用 ColorTable 更新输入栅格的色彩映射表。

&emsp;&emsp;2、若设置了 TemplateFile，则以 TemplateFile 色彩映射表为基础，并用 ColorTable 更新该基础色彩映射表，然后将更新后的色彩映射表添加到输入栅格中。

:::

## SplitImage <Badge text="1.0.3 +"/>

::: theorem

**引用：** gma.rasp.SplitImage(InFile, OutPath, Size=256, Lap=0, FillValue=None)

**功能：**【影像切片】。将一幅影像切分为特定行列数的小影像（切片）。

**参数：** 

&emsp;InFile：`str`。输入栅格路径。

&emsp;OutPath：`str`。输出文件夹路径。

<Boxx type='tip' title='提示' content='输出切片会自动命名。命名规则：<br>&emsp;&emsp;<输入文件名>_<切片左边界>_<切片上边界>.xxx <br>&emsp;&emsp;其中 xxx 为输入影像驱动格式的扩展名。'/>

**可选参数：**

&emsp;Size = `int`。切片大小。切片结果的行列数大小。默认为 256。

&emsp;Lap = `int`。输出相邻切片的重叠度，默认不重叠（0）。

&emsp;FillValue = `None||float||'AUTO'`。边缘切片不足 Size 大小时的处理方法。不同参数的含义：

&emsp;&emsp;（1）None: （默认设置）忽略边缘值。不会进行扩展，不足 Size 大小的部分切片时将被舍弃。

&emsp;&emsp;（2）float: 不足 Size 的部分将用此值填充。

&emsp;&emsp;（2）'AUTO': 不足 Size 的部分将用输入栅格的 NoData 值填充。若 NoData不存在，则自动尝试扩展填充值。

:::

## Open 类

::: theorem

**引用：** gma.rasp.Open(InFile)

**功能：**【打开栅格文件】。

**初始化：**

&emsp;InFile：`str`。输入栅格路径。

::: 

::: warning 注意
&emsp;  类内函数引用前请先初始化 `Open` 类！
::: 

### Bands

::: theorem

**引用：** gma.rasp.Open().Bands 

&emsp;  注意：*引用前请先初始化 `Open` 类。*

**功能：**【波段数】。类属性，获取栅格波段数。

**返回：**`str`。

:::

### Columns

::: theorem

**引用：** gma.rasp.Open().Columns 

&emsp;  注意：*引用前请先初始化 `Open` 类。*

**功能：**【列数】。类属性，获取栅格列数（X）。

**返回：**`int`。

:::

### Rows

::: theorem

**引用：** gma.rasp.Open().Rows

&emsp;  注意：*引用前请先初始化 `Open` 类。*

**功能：**【行数】。类属性，获取栅格行数（Y）。

**返回：**`int`。

:::

### ToArray

::: theorem

**引用：** gma.rasp.Open().ToArray()

&emsp;  注意：*引用前请先初始化 `Open` 类。*

**功能：**【转为数组】。将栅格数据读取为 Numpy 数组。

**返回：**`array`。

:::

### DataType

::: theorem

**引用：** gma.rasp.Open().DataType

&emsp;  注意：*引用前请先初始化 `Open` 类。*

**功能：**【数据类型】。类属性，获取栅格数据的数据类型。如果为多波段数据，则取所有波段数据类型的众数。

**返回：**`int`。

:::

### Driver

::: theorem

**引用：** gma.rasp.Open().Driver

&emsp;  注意：*引用前请先初始化 `Open` 类。*

**功能：**【栅格驱动】。获取栅格数据驱动。

**返回：**`str`。

:::

### GeoTransform

::: theorem

**引用：** gma.rasp.Open().GeoTransform

&emsp;  注意：*引用前请先初始化 `Open` 类。*

**功能：**【仿射变换】。类属性，获取栅格仿射变换。

**返回：**`tuple`。

:::

### GetBand

::: theorem

**引用：** gma.rasp.Open().GetBand(Band)

&emsp;  注意：*引用前请先初始化 `Open` 类。*

**功能：**【获取 Band】。读取某一波段为 gdal.Band。

**参数：** 

&emsp;Band：`int`。栅格文件的波段数。从 1 开始。

**返回：**`gdal.Band`。

:::

### GetBandToArray

::: theorem

**引用：** gma.rasp.Open().GetBandToArray(Band) 

&emsp;  注意：*引用前请先初始化 `Open` 类。*

**参数：** 

&emsp;Band：`int`。栅格文件的波段数。从 1 开始。

**功能：**【转换波段为数组】。将某一波段读取为 Numpy 数组。

**返回：**`array`。

:::

### GetGDALDataset

::: theorem

**引用：** gma.rasp.Open().GetGDALDataset()

&emsp;  注意：*引用前请先初始化 `Open` 类。*

**功能：**【获取 GDALDataset】。读取栅格数据为 gdal.GDALDataset。

**返回：**`gdal.GDALDataset`。

:::

### NoData

::: theorem

**引用：** gma.rasp.Open().NoData

&emsp;  注意：*引用前请先初始化 `Open` 类。*

**功能：**【无效值】。类属性，获取栅格无效值。

**返回：**`float||None`。

:::

### Projection

::: theorem

**引用：** gma.rasp.Open().Projection

&emsp;  注意：*引用前请先初始化 `Open` 类。*

**功能：**【坐标系】。类属性，获取栅格坐标系。

**返回：**`str||None`。

:::