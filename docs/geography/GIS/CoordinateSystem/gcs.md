---
title: 地理坐标系
date: 2021-12-21
tags:
 - 坐标系
categories:
 - 地信研学
---

&emsp;　本文统计了 454 个地理坐标系的官方 ID（ EPSG 代码），坐标系名称，椭球体，长半轴（m），反扁率，角度单位和本初子午线等参数及其对应的 WKT、Proj4 定义。

<!-- more -->

## 简介

&emsp;　地理坐标系（Geographic Coordinate System），是使用三维球面来定义地球表面位置，以实现通过经纬度对地球表面点位引用的坐标系。一个地理坐标系包括角度测量单位、本初子午线和参考椭球体三部分。在球面系统中，水平线是等纬度线或纬线。垂直线是等经度线或经线。

&emsp;　常见的 WGS 84、CGCS 2000 等都属于地理坐标系。

## 角度单位

&emsp;　角度单位定义了地理坐标系中角度单位名称和最小值（类似于分辨率）。下表对可能涉及到的角度单位进行列举，以供与 [主要坐标参数](gcs.html#主要坐标参数) 中 **角度单位** 的内容进行对应。

角度单位名称|对应中文单位|每单位弧度（°）
:---|:---|:---
Arcminute|弧分钟|0.000290888208665721
Arcsecond|弧秒|0.00000484813681109535
Degree|度|0.0174532925199432
Gon/Grad|百分度|0.0157079632679489
Microradian|微弧度|0.000000999999999999999
Mil_6400|米卢_6400|0.00098174770424681
Milliarcsecond|毫微秒|0.00000000484813681109536
Minute_Centesimal|百分之一分|0.000157079632679489
Radian|弧度|1
Second_Centesimal|百分之一秒|0.00000157079632679489

## 本初子午线

&emsp;　本初子午线，是指在地球上，连接南北两极的经线。国际上通常将通过英国伦敦格林尼治（Greenwich）天文台原址的那条经线称为 0° 经线称为本初子午线。

&emsp;　早期的坐标系并未完全以通过英国伦敦格林尼治（Greenwich）天文台原址的经线作为本初子午线，例如：Bern 1898(Bern)（EPSG:4801）以过 Bern （伯尔尼）的经线为本初子午线。下表对可能涉及到的本初子午线进行列举，以供与 [主要坐标参数](gcs.html#主要坐标参数) 中 **本初子午线** 的内容进行对应。

本初子午线名称|对应中文名|经线（°）
:---|:---|:---
Athens|雅典|23.7163375
Bern|伯尔尼|7.439583333
Bogota|波哥大|-74.08091667
Brussels|布鲁塞尔|4.367975
Ferro|费罗|-17.66666667
Greenwich|格林尼治|0
Jakarta|雅加达|106.8077194
Lisbon|里斯本|-9.131906111
Madrid|马德里|-3.687938889
Oslo|奥斯陆|10.72291667
Paris|巴黎|2.337229167
Paris_RGS|巴黎|2.337208333
Reference_Meridian|参考经线|0
Rome|罗马|12.45233333
Stockholm|斯德哥尔摩|18.05827778

## 主要坐标参数

&emsp;　 在 gma 中可以直接引用 EPSG 代码或 [WKT、Proj4](gcs.html#坐标系定义) 来表示坐标系。如果想搜索坐标系信息，可使用浏览器的页面搜索功能（ 快捷键通常为：Ctrl + F ）进行搜索。 

<table style="font-size:14px;">
  <thead>
    <tr style="text-align: left;">
      <th>官方 ID</th>
      <th>坐标系名称</th>
      <th>椭球体</th>
      <th>长半轴（m）</th>
      <th>反扁率</th>
      <th>角度单位</th>
      <th>本初子午线</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>EPSG:3819</td>
      <td>HD1909</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:3821</td>
      <td>TWD67</td>
      <td>GRS 1967 Modified</td>
      <td>6378160</td>
      <td>298.25</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:3824</td>
      <td>TWD97</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:3889</td>
      <td>IGRS</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:3906</td>
      <td>MGI 1901</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4023</td>
      <td>MOLDREF99</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4046</td>
      <td>RGRDC 2005</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4075</td>
      <td>SREF98</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4081</td>
      <td>REGCAN95</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4120</td>
      <td>Greek</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4121</td>
      <td>GGRS87</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4122</td>
      <td>ATS77</td>
      <td>Average Terrestrial System 1977</td>
      <td>6378135</td>
      <td>298.257</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4123</td>
      <td>KKJ</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4124</td>
      <td>RT90</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4125</td>
      <td>Segara</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4126</td>
      <td>LKS94</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4127</td>
      <td>Tete</td>
      <td>Clarke 1866</td>
      <td>6378206.4</td>
      <td>294.978698213898</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4128</td>
      <td>Madzansua</td>
      <td>Clarke 1866</td>
      <td>6378206.4</td>
      <td>294.978698213898</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4129</td>
      <td>Observatario</td>
      <td>Clarke 1866</td>
      <td>6378206.4</td>
      <td>294.978698213898</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4130</td>
      <td>Moznet</td>
      <td>WGS 84</td>
      <td>6378137</td>
      <td>298.257223563</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4131</td>
      <td>Indian 1960</td>
      <td>Everest 1830 (1937 Adjustment)</td>
      <td>6377276.345</td>
      <td>300.8017</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4132</td>
      <td>FD58</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4133</td>
      <td>EST92</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4134</td>
      <td>PSD93</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4135</td>
      <td>Old Hawaiian</td>
      <td>Clarke 1866</td>
      <td>6378206.4</td>
      <td>294.978698213898</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4136</td>
      <td>St. Lawrence Island</td>
      <td>Clarke 1866</td>
      <td>6378206.4</td>
      <td>294.978698213898</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4137</td>
      <td>St. Paul Island</td>
      <td>Clarke 1866</td>
      <td>6378206.4</td>
      <td>294.978698213898</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4138</td>
      <td>St. George Island</td>
      <td>Clarke 1866</td>
      <td>6378206.4</td>
      <td>294.978698213898</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4139</td>
      <td>Puerto Rico</td>
      <td>Clarke 1866</td>
      <td>6378206.4</td>
      <td>294.978698213898</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4140</td>
      <td>NAD83(CSRS)</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4141</td>
      <td>Israel 1993</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4142</td>
      <td>Locodjo 1965</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4143</td>
      <td>Abidjan 1987</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4144</td>
      <td>Kalianpur 1937</td>
      <td>Everest 1830 (1937 Adjustment)</td>
      <td>6377276.345</td>
      <td>300.8017</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4145</td>
      <td>Kalianpur 1962</td>
      <td>Everest 1830 (1962 Definition)</td>
      <td>6377301.243</td>
      <td>300.8017255</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4146</td>
      <td>Kalianpur 1975</td>
      <td>Everest 1830 (1975 Definition)</td>
      <td>6377299.151</td>
      <td>300.8017255</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4147</td>
      <td>Hanoi 1972</td>
      <td>Krassowsky 1940</td>
      <td>6378245</td>
      <td>298.3</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4148</td>
      <td>Hartebeesthoek94</td>
      <td>WGS 84</td>
      <td>6378137</td>
      <td>298.257223563</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4149</td>
      <td>CH1903</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4150</td>
      <td>CH1903+</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4151</td>
      <td>CHTRF95</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4152</td>
      <td>NAD83(HARN)</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4153</td>
      <td>Rassadiran</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4154</td>
      <td>ED50(ED77)</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4155</td>
      <td>Dabola 1981</td>
      <td>Clarke 1880 (IGN)</td>
      <td>6378249.2</td>
      <td>293.466021293627</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4156</td>
      <td>S-JTSK</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4157</td>
      <td>Mount Dillon</td>
      <td>Clarke 1858</td>
      <td>6378293.64520876</td>
      <td>294.260676369261</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4158</td>
      <td>Naparima 1955</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4159</td>
      <td>ELD79</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4160</td>
      <td>Chos Malal 1914</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4161</td>
      <td>Pampa del Castillo</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4162</td>
      <td>Korean 1985</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4163</td>
      <td>Yemen NGN96</td>
      <td>WGS 84</td>
      <td>6378137</td>
      <td>298.257223563</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4164</td>
      <td>South Yemen</td>
      <td>Krassowsky 1940</td>
      <td>6378245</td>
      <td>298.3</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4165</td>
      <td>Bissau</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4166</td>
      <td>Korean 1995</td>
      <td>WGS 84</td>
      <td>6378137</td>
      <td>298.257223563</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4167</td>
      <td>NZGD2000</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4168</td>
      <td>Accra</td>
      <td>War Office</td>
      <td>6378300</td>
      <td>296</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4169</td>
      <td>American Samoa 1962</td>
      <td>Clarke 1866</td>
      <td>6378206.4</td>
      <td>294.978698213898</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4170</td>
      <td>SIRGAS 1995</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4171</td>
      <td>RGF93</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4173</td>
      <td>IRENET95</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4174</td>
      <td>Sierra Leone 1924</td>
      <td>War Office</td>
      <td>6378300</td>
      <td>296</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4175</td>
      <td>Sierra Leone 1968</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4176</td>
      <td>Australian Antarctic</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4178</td>
      <td>Pulkovo 1942(83)</td>
      <td>Krassowsky 1940</td>
      <td>6378245</td>
      <td>298.3</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4179</td>
      <td>Pulkovo 1942(58)</td>
      <td>Krassowsky 1940</td>
      <td>6378245</td>
      <td>298.3</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4180</td>
      <td>EST97</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4181</td>
      <td>Luxembourg 1930</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4182</td>
      <td>Azores Occidental 1939</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4183</td>
      <td>Azores Central 1948</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4184</td>
      <td>Azores Oriental 1940</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4188</td>
      <td>OSNI 1952</td>
      <td>Airy 1830</td>
      <td>6377563.396</td>
      <td>299.3249646</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4189</td>
      <td>REGVEN</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4190</td>
      <td>POSGAR 98</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4191</td>
      <td>Albanian 1987</td>
      <td>Krassowsky 1940</td>
      <td>6378245</td>
      <td>298.3</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4192</td>
      <td>Douala 1948</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4193</td>
      <td>Manoca 1962</td>
      <td>Clarke 1880 (IGN)</td>
      <td>6378249.2</td>
      <td>293.466021293627</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4194</td>
      <td>Qornoq 1927</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4195</td>
      <td>Scoresbysund 1952</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4196</td>
      <td>Ammassalik 1958</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4197</td>
      <td>Garoua</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4198</td>
      <td>Kousseri</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4199</td>
      <td>Egypt 1930</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4200</td>
      <td>Pulkovo 1995</td>
      <td>Krassowsky 1940</td>
      <td>6378245</td>
      <td>298.3</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4201</td>
      <td>Adindan</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4202</td>
      <td>AGD66</td>
      <td>Australian National Spheroid</td>
      <td>6378160</td>
      <td>298.25</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4203</td>
      <td>AGD84</td>
      <td>Australian National Spheroid</td>
      <td>6378160</td>
      <td>298.25</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4204</td>
      <td>Ain el Abd</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4205</td>
      <td>Afgooye</td>
      <td>Krassowsky 1940</td>
      <td>6378245</td>
      <td>298.3</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4206</td>
      <td>Agadez</td>
      <td>Clarke 1880 (IGN)</td>
      <td>6378249.2</td>
      <td>293.466021293627</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4207</td>
      <td>Lisbon</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4208</td>
      <td>Aratu</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4209</td>
      <td>Arc 1950</td>
      <td>Clarke 1880 (Arc)</td>
      <td>6378249.145</td>
      <td>293.4663077</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4210</td>
      <td>Arc 1960</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4211</td>
      <td>Batavia</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4212</td>
      <td>Barbados 1938</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4213</td>
      <td>Beduaram</td>
      <td>Clarke 1880 (IGN)</td>
      <td>6378249.2</td>
      <td>293.466021293627</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4214</td>
      <td>Beijing 1954</td>
      <td>Krassowsky 1940</td>
      <td>6378245</td>
      <td>298.3</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4215</td>
      <td>BD50</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4216</td>
      <td>Bermuda 1957</td>
      <td>Clarke 1866</td>
      <td>6378206.4</td>
      <td>294.978698213898</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4218</td>
      <td>Bogota 1975</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4219</td>
      <td>Bukit Rimpah</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4220</td>
      <td>Camacupa 1948</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4221</td>
      <td>Campo Inchauspe</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4222</td>
      <td>Cape</td>
      <td>Clarke 1880 (Arc)</td>
      <td>6378249.145</td>
      <td>293.4663077</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4223</td>
      <td>Carthage</td>
      <td>Clarke 1880 (IGN)</td>
      <td>6378249.2</td>
      <td>293.466021293627</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4224</td>
      <td>Chua</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4225</td>
      <td>Corrego Alegre 1970-72</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4227</td>
      <td>Deir ez Zor</td>
      <td>Clarke 1880 (IGN)</td>
      <td>6378249.2</td>
      <td>293.466021293627</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4228</td>
      <td>Douala 1948</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4229</td>
      <td>Egypt 1907</td>
      <td>Helmert 1906</td>
      <td>6378200</td>
      <td>298.3</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4230</td>
      <td>ED50</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4231</td>
      <td>ED87</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4232</td>
      <td>Fahud</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4234</td>
      <td>Garoua</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4235</td>
      <td>CSG67</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4236</td>
      <td>Hu Tzu Shan 1950</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4237</td>
      <td>HD72</td>
      <td>GRS 1967</td>
      <td>6378160</td>
      <td>298.247167427</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4238</td>
      <td>ID74</td>
      <td>Indonesian National Spheroid</td>
      <td>6378160</td>
      <td>298.247</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4239</td>
      <td>Indian 1954</td>
      <td>Everest 1830 (1937 Adjustment)</td>
      <td>6377276.345</td>
      <td>300.8017</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4240</td>
      <td>Indian 1975</td>
      <td>Everest 1830 (1937 Adjustment)</td>
      <td>6377276.345</td>
      <td>300.8017</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4241</td>
      <td>Jamaica 1875</td>
      <td>Clarke 1880</td>
      <td>6378249.14480801</td>
      <td>293.466307655636</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4242</td>
      <td>JAD69</td>
      <td>Clarke 1866</td>
      <td>6378206.4</td>
      <td>294.978698213898</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4243</td>
      <td>Kalianpur 1880</td>
      <td>Everest (1830 Definition)</td>
      <td>6377299.36559538</td>
      <td>300.801725543355</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4244</td>
      <td>Kandawala</td>
      <td>Everest 1830 (1937 Adjustment)</td>
      <td>6377276.345</td>
      <td>300.8017</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4245</td>
      <td>Kertau 1968</td>
      <td>Everest 1830 Modified</td>
      <td>6377304.063</td>
      <td>300.8017</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4246</td>
      <td>KOC</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4247</td>
      <td>La Canoa</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4248</td>
      <td>PSAD56</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4249</td>
      <td>Lake</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4250</td>
      <td>Leigon</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4251</td>
      <td>Liberia 1964</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4252</td>
      <td>Lome</td>
      <td>Clarke 1880 (IGN)</td>
      <td>6378249.2</td>
      <td>293.466021293627</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4253</td>
      <td>Luzon 1911</td>
      <td>Clarke 1866</td>
      <td>6378206.4</td>
      <td>294.978698213898</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4254</td>
      <td>Hito XVIII 1963</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4255</td>
      <td>Herat North</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4256</td>
      <td>Mahe 1971</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4257</td>
      <td>Makassar</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4258</td>
      <td>ETRS89</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4259</td>
      <td>Malongo 1987</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4260</td>
      <td>Manoca 1962</td>
      <td>Clarke 1880 (IGN)</td>
      <td>6378249.2</td>
      <td>293.466021293627</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4261</td>
      <td>Merchich</td>
      <td>Clarke 1880 (IGN)</td>
      <td>6378249.2</td>
      <td>293.466021293627</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4262</td>
      <td>Massawa</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4263</td>
      <td>Minna</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4265</td>
      <td>Monte Mario</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4266</td>
      <td>M'poraloko</td>
      <td>Clarke 1880 (IGN)</td>
      <td>6378249.2</td>
      <td>293.466021293627</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4267</td>
      <td>NAD27</td>
      <td>Clarke 1866</td>
      <td>6378206.4</td>
      <td>294.978698213898</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4268</td>
      <td>NAD27</td>
      <td>Clarke 1866</td>
      <td>6378206.4</td>
      <td>294.978698213898</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4269</td>
      <td>NAD83</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4270</td>
      <td>Nahrwan 1967</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4271</td>
      <td>Naparima 1972</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4272</td>
      <td>NZGD49</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4273</td>
      <td>NGO 1948</td>
      <td>Bessel Modified</td>
      <td>6377492.018</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4274</td>
      <td>Datum 73</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4275</td>
      <td>NTF</td>
      <td>Clarke 1880 (IGN)</td>
      <td>6378249.2</td>
      <td>293.466021293627</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4276</td>
      <td>NSWC 9Z-2</td>
      <td>NWL 9D</td>
      <td>6378145</td>
      <td>298.25</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4277</td>
      <td>OSGB36</td>
      <td>Airy 1830</td>
      <td>6377563.396</td>
      <td>299.3249646</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4278</td>
      <td>OSGB70</td>
      <td>Airy 1830</td>
      <td>6377563.396</td>
      <td>299.3249646</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4279</td>
      <td>OS(SN)80</td>
      <td>Airy 1830</td>
      <td>6377563.396</td>
      <td>299.3249646</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4280</td>
      <td>Batavia</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4281</td>
      <td>Palestine 1923</td>
      <td>Clarke 1880 (Benoit)</td>
      <td>6378300.789</td>
      <td>293.466315538981</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4282</td>
      <td>Pointe Noire</td>
      <td>Clarke 1880 (IGN)</td>
      <td>6378249.2</td>
      <td>293.466021293627</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4283</td>
      <td>GDA94</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4284</td>
      <td>Pulkovo 1942</td>
      <td>Krassowsky 1940</td>
      <td>6378245</td>
      <td>298.3</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4285</td>
      <td>Qatar 1974</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4286</td>
      <td>Qatar 1948</td>
      <td>Helmert 1906</td>
      <td>6378200</td>
      <td>298.3</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4287</td>
      <td>Qornoq 1927</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4288</td>
      <td>Loma Quintana</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4289</td>
      <td>Amersfoort</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4291</td>
      <td>SAD69</td>
      <td>GRS 1967 Modified</td>
      <td>6378160</td>
      <td>298.25</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4292</td>
      <td>Sapper Hill 1943</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4293</td>
      <td>Schwarzeck</td>
      <td>Bessel Namibia (GLM)</td>
      <td>6377483.86528042</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4294</td>
      <td>Segara</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4295</td>
      <td>Serindung</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4296</td>
      <td>Adindan</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4297</td>
      <td>Tananarive</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4298</td>
      <td>Timbalai 1948</td>
      <td>Everest 1830 (1967 Definition)</td>
      <td>6377298.556</td>
      <td>300.8017</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4299</td>
      <td>TM65</td>
      <td>Airy Modified 1849</td>
      <td>6377340.189</td>
      <td>299.3249646</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4300</td>
      <td>TM75</td>
      <td>Airy Modified 1849</td>
      <td>6377340.189</td>
      <td>299.3249646</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4301</td>
      <td>Tokyo</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4302</td>
      <td>Trinidad 1903</td>
      <td>Clarke 1858</td>
      <td>6378293.64520876</td>
      <td>294.260676369261</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4303</td>
      <td>TC(1948)</td>
      <td>Helmert 1906</td>
      <td>6378200</td>
      <td>298.3</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4304</td>
      <td>Voirol 1875</td>
      <td>Clarke 1880 (IGN)</td>
      <td>6378249.2</td>
      <td>293.466021293627</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4306</td>
      <td>Bern 1938</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4307</td>
      <td>Nord Sahara 1959</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4308</td>
      <td>RT38</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4309</td>
      <td>Yacare</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4310</td>
      <td>Yoff</td>
      <td>Clarke 1880 (IGN)</td>
      <td>6378249.2</td>
      <td>293.466021293627</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4311</td>
      <td>Zanderij</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4312</td>
      <td>MGI</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4313</td>
      <td>BD72</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4314</td>
      <td>DHDN</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4315</td>
      <td>Conakry 1905</td>
      <td>Clarke 1880 (IGN)</td>
      <td>6378249.2</td>
      <td>293.466021293627</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4316</td>
      <td>Dealul Piscului 1930</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4317</td>
      <td>Pulkovo 1942(58)</td>
      <td>Krassowsky 1940</td>
      <td>6378245</td>
      <td>298.3</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4318</td>
      <td>NGN</td>
      <td>WGS 84</td>
      <td>6378137</td>
      <td>298.257223563</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4319</td>
      <td>KUDAMS</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4322</td>
      <td>WGS 72</td>
      <td>WGS 72</td>
      <td>6378135</td>
      <td>298.26</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4324</td>
      <td>WGS 72BE</td>
      <td>WGS 72</td>
      <td>6378135</td>
      <td>298.26</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4326</td>
      <td>WGS 84</td>
      <td>WGS 84</td>
      <td>6378137</td>
      <td>298.257223563</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4463</td>
      <td>RGSPM06</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4470</td>
      <td>RGM04</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4475</td>
      <td>Cadastre 1997</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4483</td>
      <td>Mexico ITRF92</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4490</td>
      <td>China Geodetic Coordinate System 2000</td>
      <td>CGCS2000</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4555</td>
      <td>New Beijing</td>
      <td>Krassowsky 1940</td>
      <td>6378245</td>
      <td>298.3</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4558</td>
      <td>RRAF 1991</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4600</td>
      <td>Anguilla 1957</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4601</td>
      <td>Antigua 1943</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4602</td>
      <td>Dominica 1945</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4603</td>
      <td>Grenada 1953</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4604</td>
      <td>Montserrat 1958</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4605</td>
      <td>St. Kitts 1955</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4606</td>
      <td>St. Lucia 1955</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4607</td>
      <td>St. Vincent 1945</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4608</td>
      <td>NAD27(76)</td>
      <td>Clarke 1866</td>
      <td>6378206.4</td>
      <td>294.978698213898</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4609</td>
      <td>NAD27(CGQ77)</td>
      <td>Clarke 1866</td>
      <td>6378206.4</td>
      <td>294.978698213898</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4610</td>
      <td>Xian 1980</td>
      <td>IAG 1975</td>
      <td>6378140</td>
      <td>298.257</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4611</td>
      <td>Hong Kong 1980</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4612</td>
      <td>JGD2000</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4613</td>
      <td>Segara</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4614</td>
      <td>QND95</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4615</td>
      <td>Porto Santo</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4616</td>
      <td>Selvagem Grande</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4617</td>
      <td>NAD83(CSRS)</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4618</td>
      <td>SAD69</td>
      <td>GRS 1967 Modified</td>
      <td>6378160</td>
      <td>298.25</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4619</td>
      <td>SWEREF99</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4620</td>
      <td>Point 58</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4621</td>
      <td>Fort Marigot</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4622</td>
      <td>Guadeloupe 1948</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4623</td>
      <td>CSG67</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4624</td>
      <td>RGFG95</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4625</td>
      <td>Martinique 1938</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4626</td>
      <td>Reunion 1947</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4627</td>
      <td>RGR92</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4628</td>
      <td>Tahiti 52</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4629</td>
      <td>Tahaa 54</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4630</td>
      <td>IGN72 Nuku Hiva</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4631</td>
      <td>IGN 1962 Kerguelen</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4632</td>
      <td>Combani 1950</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4633</td>
      <td>IGN56 Lifou</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4634</td>
      <td>IGN72 Grande Terre</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4635</td>
      <td>ST87 Ouvea</td>
      <td>WGS 84</td>
      <td>6378137</td>
      <td>298.257223563</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4636</td>
      <td>Petrels 1972</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4637</td>
      <td>Perroud 1950</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4638</td>
      <td>Saint Pierre et Miquelon 1950</td>
      <td>Clarke 1866</td>
      <td>6378206.4</td>
      <td>294.978698213898</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4639</td>
      <td>MOP78</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4640</td>
      <td>RRAF 1991</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4641</td>
      <td>IGN53 Mare</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4642</td>
      <td>ST84 Ile des Pins</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4643</td>
      <td>ST71 Belep</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4644</td>
      <td>NEA74 Noumea</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4645</td>
      <td>RGNC91-93</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4646</td>
      <td>Grand Comoros</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4657</td>
      <td>Reykjavik 1900</td>
      <td>Danish 1876</td>
      <td>6377019.27</td>
      <td>300</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4658</td>
      <td>Hjorsey 1955</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4659</td>
      <td>ISN93</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4660</td>
      <td>Helle 1954</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4661</td>
      <td>LKS92</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4662</td>
      <td>IGN72 Grande Terre</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4663</td>
      <td>Porto Santo 1995</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4664</td>
      <td>Azores Oriental 1995</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4665</td>
      <td>Azores Central 1995</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4666</td>
      <td>Lisbon 1890</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4667</td>
      <td>IKBD-92</td>
      <td>WGS 84</td>
      <td>6378137</td>
      <td>298.257223563</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4668</td>
      <td>ED79</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4669</td>
      <td>LKS94</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4670</td>
      <td>IGM95</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4671</td>
      <td>Voirol 1879</td>
      <td>Clarke 1880 (IGN)</td>
      <td>6378249.2</td>
      <td>293.466021293627</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4672</td>
      <td>Chatham Islands 1971</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4673</td>
      <td>Chatham Islands 1979</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4674</td>
      <td>SIRGAS 2000</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4675</td>
      <td>Guam 1963</td>
      <td>Clarke 1866</td>
      <td>6378206.4</td>
      <td>294.978698213898</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4676</td>
      <td>Vientiane 1982</td>
      <td>Krassowsky 1940</td>
      <td>6378245</td>
      <td>298.3</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4677</td>
      <td>Lao 1993</td>
      <td>Krassowsky 1940</td>
      <td>6378245</td>
      <td>298.3</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4678</td>
      <td>Lao 1997</td>
      <td>Krassowsky 1940</td>
      <td>6378245</td>
      <td>298.3</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4679</td>
      <td>Jouik 1961</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4680</td>
      <td>Nouakchott 1965</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4682</td>
      <td>Gulshan 303</td>
      <td>Everest 1830 (1937 Adjustment)</td>
      <td>6377276.345</td>
      <td>300.8017</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4683</td>
      <td>PRS92</td>
      <td>Clarke 1866</td>
      <td>6378206.4</td>
      <td>294.978698213898</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4684</td>
      <td>Gan 1970</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4685</td>
      <td>Kasai 1953</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4686</td>
      <td>MAGNA-SIRGAS</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4687</td>
      <td>RGPF</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4688</td>
      <td>Fatu Iva 72</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4689</td>
      <td>IGN63 Hiva Oa</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4690</td>
      <td>Tahiti 79</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4691</td>
      <td>Moorea 87</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4692</td>
      <td>Maupiti 83</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4693</td>
      <td>Nakhl-e Ghanem</td>
      <td>WGS 84</td>
      <td>6378137</td>
      <td>298.257223563</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4694</td>
      <td>POSGAR 94</td>
      <td>WGS 84</td>
      <td>6378137</td>
      <td>298.257223563</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4695</td>
      <td>Katanga 1955</td>
      <td>Clarke 1866</td>
      <td>6378206.4</td>
      <td>294.978698213898</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4696</td>
      <td>Kasai 1953</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4697</td>
      <td>IGC 1962 6th Parallel South</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4698</td>
      <td>IGN 1962 Kerguelen</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4699</td>
      <td>Le Pouce 1934</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4700</td>
      <td>IGN Astro 1960</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4701</td>
      <td>IGCB 1955</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4702</td>
      <td>Mauritania 1999</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4703</td>
      <td>Mhast 1951</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4704</td>
      <td>Mhast (onshore)</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4705</td>
      <td>Mhast (offshore)</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4706</td>
      <td>Egypt Gulf of Suez S-650 TL</td>
      <td>Helmert 1906</td>
      <td>6378200</td>
      <td>298.3</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4707</td>
      <td>Tern Island 1961</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4708</td>
      <td>Cocos Islands 1965</td>
      <td>Australian National Spheroid</td>
      <td>6378160</td>
      <td>298.25</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4709</td>
      <td>Iwo Jima 1945</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4710</td>
      <td>Astro DOS 71</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4711</td>
      <td>Marcus Island 1952</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4712</td>
      <td>Ascension Island 1958</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4713</td>
      <td>Ayabelle Lighthouse</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4714</td>
      <td>Bellevue</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4715</td>
      <td>Camp Area Astro</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4716</td>
      <td>Phoenix Islands 1966</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4717</td>
      <td>Cape Canaveral</td>
      <td>Clarke 1866</td>
      <td>6378206.4</td>
      <td>294.978698213898</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4718</td>
      <td>Solomon 1968</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4719</td>
      <td>Easter Island 1967</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4720</td>
      <td>Fiji 1986</td>
      <td>WGS 72</td>
      <td>6378135</td>
      <td>298.26</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4721</td>
      <td>Fiji 1956</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4722</td>
      <td>South Georgia 1968</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4723</td>
      <td>GCGD59</td>
      <td>Clarke 1866</td>
      <td>6378206.4</td>
      <td>294.978698213898</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4724</td>
      <td>Diego Garcia 1969</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4725</td>
      <td>Johnston Island 1961</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4726</td>
      <td>SIGD61</td>
      <td>Clarke 1866</td>
      <td>6378206.4</td>
      <td>294.978698213898</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4727</td>
      <td>Midway 1961</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4728</td>
      <td>PN84</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4729</td>
      <td>Pitcairn 1967</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4730</td>
      <td>Santo 1965</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4731</td>
      <td>Viti Levu 1912</td>
      <td>Clarke 1880 (international foot)</td>
      <td>6378306.3696</td>
      <td>293.466307655635</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4732</td>
      <td>Marshall Islands 1960</td>
      <td>Hough 1960</td>
      <td>6378270</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4733</td>
      <td>Wake Island 1952</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4734</td>
      <td>Tristan 1968</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4735</td>
      <td>Kusaie 1951</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4736</td>
      <td>Deception Island</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4737</td>
      <td>Korea 2000</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4738</td>
      <td>Hong Kong 1963</td>
      <td>Clarke 1858</td>
      <td>6378293.64520876</td>
      <td>294.260676369261</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4739</td>
      <td>Hong Kong 1963(67)</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4740</td>
      <td>PZ-90</td>
      <td>PZ-90</td>
      <td>6378136</td>
      <td>298.257839303</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4741</td>
      <td>FD54</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4742</td>
      <td>GDM2000</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4743</td>
      <td>Karbala 1979</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4744</td>
      <td>Nahrwan 1934</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4745</td>
      <td>RD/83</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4746</td>
      <td>PD/83</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4747</td>
      <td>GR96</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4748</td>
      <td>Vanua Levu 1915</td>
      <td>Clarke 1880 (international foot)</td>
      <td>6378306.3696</td>
      <td>293.466307655635</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4749</td>
      <td>RGNC91-93</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4750</td>
      <td>ST87 Ouvea</td>
      <td>WGS 84</td>
      <td>6378137</td>
      <td>298.257223563</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4751</td>
      <td>Kertau (RSO)</td>
      <td>Everest 1830 (RSO 1969)</td>
      <td>6377295.664</td>
      <td>300.8017</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4752</td>
      <td>Viti Levu 1912</td>
      <td>Clarke 1880 (international foot)</td>
      <td>6378306.3696</td>
      <td>293.466307655635</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4753</td>
      <td>fk89</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4754</td>
      <td>LGD2006</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4755</td>
      <td>DGN95</td>
      <td>WGS 84</td>
      <td>6378137</td>
      <td>298.257223563</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4756</td>
      <td>VN-2000</td>
      <td>WGS 84</td>
      <td>6378137</td>
      <td>298.257223563</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4757</td>
      <td>SVY21</td>
      <td>WGS 84</td>
      <td>6378137</td>
      <td>298.257223563</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4758</td>
      <td>JAD2001</td>
      <td>WGS 84</td>
      <td>6378137</td>
      <td>298.257223563</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4759</td>
      <td>NAD83(NSRS2007)</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4760</td>
      <td>WGS 66</td>
      <td>NWL 9D</td>
      <td>6378145</td>
      <td>298.25</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4761</td>
      <td>HTRS96</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4762</td>
      <td>BDA2000</td>
      <td>WGS 84</td>
      <td>6378137</td>
      <td>298.257223563</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4763</td>
      <td>Pitcairn 2006</td>
      <td>WGS 84</td>
      <td>6378137</td>
      <td>298.257223563</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4764</td>
      <td>RSRGD2000</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4765</td>
      <td>Slovenia 1996</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4801</td>
      <td>Bern 1898 (Bern)</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Bern</td>
    </tr>
    <tr>
      <td>EPSG:4802</td>
      <td>Bogota 1975 (Bogota)</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Bogota</td>
    </tr>
    <tr>
      <td>EPSG:4803</td>
      <td>Lisbon (Lisbon)</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Lisbon</td>
    </tr>
    <tr>
      <td>EPSG:4804</td>
      <td>Makassar (Jakarta)</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Jakarta</td>
    </tr>
    <tr>
      <td>EPSG:4805</td>
      <td>MGI (Ferro)</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Ferro</td>
    </tr>
    <tr>
      <td>EPSG:4806</td>
      <td>Monte Mario (Rome)</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Rome</td>
    </tr>
    <tr>
      <td>EPSG:4807</td>
      <td>NTF (Paris)</td>
      <td>Clarke 1880 (IGN)</td>
      <td>6378249.2</td>
      <td>293.466021293627</td>
      <td>grad</td>
      <td>Paris</td>
    </tr>
    <tr>
      <td>EPSG:4808</td>
      <td>Batavia (Jakarta)</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Jakarta</td>
    </tr>
    <tr>
      <td>EPSG:4809</td>
      <td>BD50 (Brussels)</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Brussels</td>
    </tr>
    <tr>
      <td>EPSG:4810</td>
      <td>Tananarive (Paris)</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>grad</td>
      <td>Paris</td>
    </tr>
    <tr>
      <td>EPSG:4811</td>
      <td>Voirol 1875 (Paris)</td>
      <td>Clarke 1880 (IGN)</td>
      <td>6378249.2</td>
      <td>293.466021293627</td>
      <td>grad</td>
      <td>Paris</td>
    </tr>
    <tr>
      <td>EPSG:4813</td>
      <td>Batavia (Jakarta)</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Jakarta</td>
    </tr>
    <tr>
      <td>EPSG:4814</td>
      <td>RT38 (Stockholm)</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Stockholm</td>
    </tr>
    <tr>
      <td>EPSG:4815</td>
      <td>Greek (Athens)</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Athens</td>
    </tr>
    <tr>
      <td>EPSG:4816</td>
      <td>Carthage (Paris)</td>
      <td>Clarke 1880 (IGN)</td>
      <td>6378249.2</td>
      <td>293.466021293627</td>
      <td>grad</td>
      <td>Paris</td>
    </tr>
    <tr>
      <td>EPSG:4817</td>
      <td>NGO 1948 (Oslo)</td>
      <td>Bessel Modified</td>
      <td>6377492.018</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Oslo</td>
    </tr>
    <tr>
      <td>EPSG:4818</td>
      <td>S-JTSK (Ferro)</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Ferro</td>
    </tr>
    <tr>
      <td>EPSG:4819</td>
      <td>Nord Sahara 1959</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4820</td>
      <td>Segara (Jakarta)</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Jakarta</td>
    </tr>
    <tr>
      <td>EPSG:4821</td>
      <td>Voirol 1879 (Paris)</td>
      <td>Clarke 1880 (IGN)</td>
      <td>6378249.2</td>
      <td>293.466021293627</td>
      <td>grad</td>
      <td>Paris</td>
    </tr>
    <tr>
      <td>EPSG:4823</td>
      <td>Sao Tome</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4824</td>
      <td>Principe</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4901</td>
      <td>ATF (Paris)</td>
      <td>Plessis 1817</td>
      <td>6376523</td>
      <td>308.64</td>
      <td>grad</td>
      <td>Paris RGS</td>
    </tr>
    <tr>
      <td>EPSG:4902</td>
      <td>ATF (Paris)</td>
      <td>Plessis 1817</td>
      <td>6376523</td>
      <td>308.64</td>
      <td>grad</td>
      <td>Paris RGS</td>
    </tr>
    <tr>
      <td>EPSG:4903</td>
      <td>Madrid 1870 (Madrid)</td>
      <td>Struve 1860</td>
      <td>6378298.3</td>
      <td>294.73</td>
      <td>degree</td>
      <td>Madrid</td>
    </tr>
    <tr>
      <td>EPSG:4904</td>
      <td>Lisbon 1890 (Lisbon)</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Lisbon</td>
    </tr>
    <tr>
      <td>EPSG:5013</td>
      <td>PTRA08</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:5132</td>
      <td>Tokyo 1892</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:5228</td>
      <td>S-JTSK/05</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:5229</td>
      <td>S-JTSK/05 (Ferro)</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Ferro</td>
    </tr>
    <tr>
      <td>EPSG:5233</td>
      <td>SLD99</td>
      <td>Everest 1830 (1937 Adjustment)</td>
      <td>6377276.345</td>
      <td>300.8017</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:5246</td>
      <td>GDBD2009</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:5252</td>
      <td>TUREF</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:5264</td>
      <td>DRUKREF 03</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:5324</td>
      <td>ISN2004</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:5340</td>
      <td>POSGAR 2007</td>
      <td>WGS 84</td>
      <td>6378137</td>
      <td>298.257223563</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:5354</td>
      <td>MARGEN</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:5360</td>
      <td>SIRGAS-Chile 2002</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:5365</td>
      <td>CR05</td>
      <td>WGS 84</td>
      <td>6378137</td>
      <td>298.257223563</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:5371</td>
      <td>MACARIO SOLIS</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:5373</td>
      <td>Peru96</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:5381</td>
      <td>SIRGAS-ROU98</td>
      <td>WGS 84</td>
      <td>6378137</td>
      <td>298.257223563</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:5393</td>
      <td>SIRGAS_ES2007.8</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:5451</td>
      <td>Ocotepeque 1935</td>
      <td>Clarke 1866</td>
      <td>6378206.4</td>
      <td>294.978698213898</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:5464</td>
      <td>Sibun Gorge 1922</td>
      <td>Clarke 1858</td>
      <td>6378293.64520876</td>
      <td>294.260676369261</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:5467</td>
      <td>Panama-Colon 1911</td>
      <td>Clarke 1866</td>
      <td>6378206.4</td>
      <td>294.978698213898</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:5489</td>
      <td>RGAF09</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:5524</td>
      <td>Corrego Alegre 1961</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:5527</td>
      <td>SAD69(96)</td>
      <td>GRS 1967 Modified</td>
      <td>6378160</td>
      <td>298.25</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:5546</td>
      <td>PNG94</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:5561</td>
      <td>UCS-2000</td>
      <td>Krassowsky 1940</td>
      <td>6378245</td>
      <td>298.3</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:5593</td>
      <td>FEH2010</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:5681</td>
      <td>DB_REF</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:5886</td>
      <td>TGD2005</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:6135</td>
      <td>CIGD11</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:6207</td>
      <td>Nepal 1981</td>
      <td>Everest 1830 (1937 Adjustment)</td>
      <td>6377276.345</td>
      <td>300.8017</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:6311</td>
      <td>CGRS93</td>
      <td>WGS 84</td>
      <td>6378137</td>
      <td>298.257223563</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:6318</td>
      <td>NAD83(2011)</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:6322</td>
      <td>NAD83(PA11)</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:6325</td>
      <td>NAD83(MA11)</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:6365</td>
      <td>Mexico ITRF2008</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:6668</td>
      <td>JGD2011</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:6706</td>
      <td>RDN2008</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:6783</td>
      <td>NAD83(CORS96)</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:6881</td>
      <td>Aden 1925</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:6882</td>
      <td>Bekaa Valley 1920</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:6883</td>
      <td>Bioko</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:6892</td>
      <td>South East Island 1943</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:6894</td>
      <td>Gambia</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:6980</td>
      <td>IGD05</td>
      <td>WGS 84</td>
      <td>6378137</td>
      <td>298.257223563</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:6983</td>
      <td>IG05 Intermediate CRS</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:6987</td>
      <td>IGD05/12</td>
      <td>WGS 84</td>
      <td>6378137</td>
      <td>298.257223563</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:6990</td>
      <td>IG05/12 Intermediate CRS</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:7035</td>
      <td>RGSPM06 (lon-lat)</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:7037</td>
      <td>RGR92 (lon-lat)</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:7039</td>
      <td>RGM04 (lon-lat)</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:7041</td>
      <td>RGFG95 (lon-lat)</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:7073</td>
      <td>RGTAAF07</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:7084</td>
      <td>RGF93 (lon-lat)</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:7086</td>
      <td>RGAF09 (lon-lat)</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:7088</td>
      <td>RGTAAF07 (lon-lat)</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:7133</td>
      <td>RGTAAF07 (lon-lat)</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:7136</td>
      <td>IGD05</td>
      <td>WGS 84</td>
      <td>6378137</td>
      <td>298.257223563</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:7139</td>
      <td>IGD05/12</td>
      <td>WGS 84</td>
      <td>6378137</td>
      <td>298.257223563</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:7373</td>
      <td>ONGD14</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:7683</td>
      <td>GSK-2011</td>
      <td>GSK-2011</td>
      <td>6378136.5</td>
      <td>298.2564151</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:7686</td>
      <td>Kyrg-06</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:7798</td>
      <td>BGS2005</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:7844</td>
      <td>GDA2020</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:7881</td>
      <td>St. Helena Tritan</td>
      <td>WGS 84</td>
      <td>6378137</td>
      <td>298.257223563</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:7886</td>
      <td>SHGD2015</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
  </tbody>
</table>

## 坐标系定义

<table style="font-size: 14px;">
  <thead>
    <tr style="text-align: left;">
      <th>官方 ID</th>
      <th>坐标系定义</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>EPSG:3819</td>
      <td><strong>名称</strong><br>&emsp;HD1909<br><strong>WKT</strong><br>&emsp;GEOGCS["HD1909",<br>&emsp;　DATUM["Hungarian_Datum_1909",<br>&emsp;　　SPHEROID["Bessel&emsp;1841",6377397.155,299.1528128,<br>&emsp;　　　AUTHORITY["EPSG","7004"]],<br>&emsp;　　AUTHORITY["EPSG","1024"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","3819"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=bessel +towgs84=595.48,121.69,515.35,4.115,-2.9383,0.853,-3.408 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:3821</td>
      <td><strong>名称</strong><br>&emsp;TWD67<br><strong>WKT</strong><br>&emsp;GEOGCS["TWD67",<br>&emsp;　DATUM["Taiwan_Datum_1967",<br>&emsp;　　SPHEROID["GRS&emsp;1967&emsp;Modified",6378160,298.25,<br>&emsp;　　　AUTHORITY["EPSG","7050"]],<br>&emsp;　　AUTHORITY["EPSG","1025"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","3821"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=aust_SA +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:3824</td>
      <td><strong>名称</strong><br>&emsp;TWD97<br><strong>WKT</strong><br>&emsp;GEOGCS["TWD97",<br>&emsp;　DATUM["Taiwan_Datum_1997",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","1026"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","3824"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:3889</td>
      <td><strong>名称</strong><br>&emsp;IGRS<br><strong>WKT</strong><br>&emsp;GEOGCS["IGRS",<br>&emsp;　DATUM["Iraqi_Geospatial_Reference_System",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","1029"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","3889"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:3906</td>
      <td><strong>名称</strong><br>&emsp;MGI 1901<br><strong>WKT</strong><br>&emsp;GEOGCS["MGI&emsp;1901",<br>&emsp;　DATUM["MGI_1901",<br>&emsp;　　SPHEROID["Bessel&emsp;1841",6377397.155,299.1528128,<br>&emsp;　　　AUTHORITY["EPSG","7004"]],<br>&emsp;　　AUTHORITY["EPSG","1031"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","3906"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=bessel +towgs84=682,-203,480,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4023</td>
      <td><strong>名称</strong><br>&emsp;MOLDREF99<br><strong>WKT</strong><br>&emsp;GEOGCS["MOLDREF99",<br>&emsp;　DATUM["MOLDREF99",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","1032"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4023"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4046</td>
      <td><strong>名称</strong><br>&emsp;RGRDC 2005<br><strong>WKT</strong><br>&emsp;GEOGCS["RGRDC&emsp;2005",<br>&emsp;　DATUM["Reseau_Geodesique_de_la_RDC_2005",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","1033"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4046"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4075</td>
      <td><strong>名称</strong><br>&emsp;SREF98<br><strong>WKT</strong><br>&emsp;GEOGCS["SREF98",<br>&emsp;　DATUM["Serbian_Reference_Network_1998",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","1034"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4075"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4081</td>
      <td><strong>名称</strong><br>&emsp;REGCAN95<br><strong>WKT</strong><br>&emsp;GEOGCS["REGCAN95",<br>&emsp;　DATUM["Red_Geodesica_de_Canarias_1995",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","1035"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4081"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4120</td>
      <td><strong>名称</strong><br>&emsp;Greek<br><strong>WKT</strong><br>&emsp;GEOGCS["Greek",<br>&emsp;　DATUM["Greek",<br>&emsp;　　SPHEROID["Bessel&emsp;1841",6377397.155,299.1528128,<br>&emsp;　　　AUTHORITY["EPSG","7004"]],<br>&emsp;　　AUTHORITY["EPSG","6120"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4120"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=bessel +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4121</td>
      <td><strong>名称</strong><br>&emsp;GGRS87<br><strong>WKT</strong><br>&emsp;GEOGCS["GGRS87",<br>&emsp;　DATUM["Greek_Geodetic_Reference_System_1987",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","6121"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4121"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=-199.87,74.79,246.62,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4122</td>
      <td><strong>名称</strong><br>&emsp;ATS77<br><strong>WKT</strong><br>&emsp;GEOGCS["ATS77",<br>&emsp;　DATUM["Average_Terrestrial_System_1977",<br>&emsp;　　SPHEROID["Average&emsp;Terrestrial&emsp;System&emsp;1977",6378135,298.257,<br>&emsp;　　　AUTHORITY["EPSG","7041"]],<br>&emsp;　　AUTHORITY["EPSG","6122"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4122"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378135 +rf=298.257 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4123</td>
      <td><strong>名称</strong><br>&emsp;KKJ<br><strong>WKT</strong><br>&emsp;GEOGCS["KKJ",<br>&emsp;　DATUM["Kartastokoordinaattijarjestelma_1966",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6123"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4123"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=-96.062,-82.428,-121.753,4.801,0.345,-1.376,1.496 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4124</td>
      <td><strong>名称</strong><br>&emsp;RT90<br><strong>WKT</strong><br>&emsp;GEOGCS["RT90",<br>&emsp;　DATUM["Rikets_koordinatsystem_1990",<br>&emsp;　　SPHEROID["Bessel&emsp;1841",6377397.155,299.1528128,<br>&emsp;　　　AUTHORITY["EPSG","7004"]],<br>&emsp;　　AUTHORITY["EPSG","6124"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4124"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=bessel +towgs84=414.1,41.3,603.1,-0.855,2.141,-7.023,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4125</td>
      <td><strong>名称</strong><br>&emsp;Segara<br><strong>WKT</strong><br>&emsp;GEOGCS["Segara",<br>&emsp;　DATUM["Gunung_Segara",<br>&emsp;　　SPHEROID["Bessel&emsp;1841",6377397.155,299.1528128,<br>&emsp;　　　AUTHORITY["EPSG","7004"]],<br>&emsp;　　AUTHORITY["EPSG","6613"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4613"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=bessel +towgs84=-403,684,41,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4126</td>
      <td><strong>名称</strong><br>&emsp;LKS94<br><strong>WKT</strong><br>&emsp;GEOGCS["LKS94",<br>&emsp;　DATUM["Lithuania_1994_ETRS89",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","6126"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4669"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4127</td>
      <td><strong>名称</strong><br>&emsp;Tete<br><strong>WKT</strong><br>&emsp;GEOGCS["Tete",<br>&emsp;　DATUM["Tete",<br>&emsp;　　SPHEROID["Clarke&emsp;1866",6378206.4,294.978698213898,<br>&emsp;　　　AUTHORITY["EPSG","7008"]],<br>&emsp;　　AUTHORITY["EPSG","6127"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4127"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=clrk66 +towgs84=-80,-100,-228,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4128</td>
      <td><strong>名称</strong><br>&emsp;Madzansua<br><strong>WKT</strong><br>&emsp;GEOGCS["Madzansua",<br>&emsp;　DATUM["Madzansua",<br>&emsp;　　SPHEROID["Clarke&emsp;1866",6378206.4,294.978698213898,<br>&emsp;　　　AUTHORITY["EPSG","7008"]],<br>&emsp;　　AUTHORITY["EPSG","6128"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4128"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=clrk66 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4129</td>
      <td><strong>名称</strong><br>&emsp;Observatario<br><strong>WKT</strong><br>&emsp;GEOGCS["Observatario",<br>&emsp;　DATUM["Observatario",<br>&emsp;　　SPHEROID["Clarke&emsp;1866",6378206.4,294.978698213898,<br>&emsp;　　　AUTHORITY["EPSG","7008"]],<br>&emsp;　　AUTHORITY["EPSG","6129"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4129"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=clrk66 +towgs84=-132,-110,-335,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4130</td>
      <td><strong>名称</strong><br>&emsp;Moznet<br><strong>WKT</strong><br>&emsp;GEOGCS["Moznet",<br>&emsp;　DATUM["Moznet_ITRF94",<br>&emsp;　　SPHEROID["WGS&emsp;84",6378137,298.257223563,<br>&emsp;　　　AUTHORITY["EPSG","7030"]],<br>&emsp;　　AUTHORITY["EPSG","6130"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4130"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4131</td>
      <td><strong>名称</strong><br>&emsp;Indian 1960<br><strong>WKT</strong><br>&emsp;GEOGCS["Indian&emsp;1960",<br>&emsp;　DATUM["Indian_1960",<br>&emsp;　　SPHEROID["Everest&emsp;1830&emsp;(1937&emsp;Adjustment)",6377276.345,300.8017,<br>&emsp;　　　AUTHORITY["EPSG","7015"]],<br>&emsp;　　AUTHORITY["EPSG","6131"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4131"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=evrst30 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4132</td>
      <td><strong>名称</strong><br>&emsp;FD58<br><strong>WKT</strong><br>&emsp;GEOGCS["FD58",<br>&emsp;　DATUM["Final_Datum_1958",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(RGS)",6378249.145,293.465,<br>&emsp;　　　AUTHORITY["EPSG","7012"]],<br>&emsp;　　AUTHORITY["EPSG","6132"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4132"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378249.145 +rf=293.465 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4133</td>
      <td><strong>名称</strong><br>&emsp;EST92<br><strong>WKT</strong><br>&emsp;GEOGCS["EST92",<br>&emsp;　DATUM["Estonia_1992",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","6133"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4133"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=0.055,-0.541,-0.185,0.0183,-0.0003,-0.007,-0.014 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4134</td>
      <td><strong>名称</strong><br>&emsp;PSD93<br><strong>WKT</strong><br>&emsp;GEOGCS["PSD93",<br>&emsp;　DATUM["PDO_Survey_Datum_1993",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(RGS)",6378249.145,293.465,<br>&emsp;　　　AUTHORITY["EPSG","7012"]],<br>&emsp;　　AUTHORITY["EPSG","6134"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4134"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378249.145 +rf=293.465 +towgs84=-180.624,-225.516,173.919,-0.81,-1.898,8.336,16.71006 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4135</td>
      <td><strong>名称</strong><br>&emsp;Old Hawaiian<br><strong>WKT</strong><br>&emsp;GEOGCS["Old&emsp;Hawaiian",<br>&emsp;　DATUM["Old_Hawaiian",<br>&emsp;　　SPHEROID["Clarke&emsp;1866",6378206.4,294.978698213898,<br>&emsp;　　　AUTHORITY["EPSG","7008"]],<br>&emsp;　　AUTHORITY["EPSG","6135"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4135"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=clrk66 +towgs84=61,-285,-181,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4136</td>
      <td><strong>名称</strong><br>&emsp;St. Lawrence Island<br><strong>WKT</strong><br>&emsp;GEOGCS["St.&emsp;Lawrence&emsp;Island",<br>&emsp;　DATUM["St_Lawrence_Island",<br>&emsp;　　SPHEROID["Clarke&emsp;1866",6378206.4,294.978698213898,<br>&emsp;　　　AUTHORITY["EPSG","7008"]],<br>&emsp;　　AUTHORITY["EPSG","6136"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4136"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=clrk66 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4137</td>
      <td><strong>名称</strong><br>&emsp;St. Paul Island<br><strong>WKT</strong><br>&emsp;GEOGCS["St.&emsp;Paul&emsp;Island",<br>&emsp;　DATUM["St_Paul_Island",<br>&emsp;　　SPHEROID["Clarke&emsp;1866",6378206.4,294.978698213898,<br>&emsp;　　　AUTHORITY["EPSG","7008"]],<br>&emsp;　　AUTHORITY["EPSG","6137"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4137"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=clrk66 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4138</td>
      <td><strong>名称</strong><br>&emsp;St. George Island<br><strong>WKT</strong><br>&emsp;GEOGCS["St.&emsp;George&emsp;Island",<br>&emsp;　DATUM["St_George_Island",<br>&emsp;　　SPHEROID["Clarke&emsp;1866",6378206.4,294.978698213898,<br>&emsp;　　　AUTHORITY["EPSG","7008"]],<br>&emsp;　　AUTHORITY["EPSG","6138"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4138"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=clrk66 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4139</td>
      <td><strong>名称</strong><br>&emsp;Puerto Rico<br><strong>WKT</strong><br>&emsp;GEOGCS["Puerto&emsp;Rico",<br>&emsp;　DATUM["Puerto_Rico",<br>&emsp;　　SPHEROID["Clarke&emsp;1866",6378206.4,294.978698213898,<br>&emsp;　　　AUTHORITY["EPSG","7008"]],<br>&emsp;　　AUTHORITY["EPSG","6139"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4139"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=clrk66 +towgs84=11,72,-101,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4140</td>
      <td><strong>名称</strong><br>&emsp;NAD83(CSRS)<br><strong>WKT</strong><br>&emsp;GEOGCS["NAD83(CSRS)",<br>&emsp;　DATUM["NAD83_Canadian_Spatial_Reference_System",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","6140"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4617"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4141</td>
      <td><strong>名称</strong><br>&emsp;Israel 1993<br><strong>WKT</strong><br>&emsp;GEOGCS["Israel&emsp;1993",<br>&emsp;　DATUM["Israel_1993",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","6141"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4141"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4142</td>
      <td><strong>名称</strong><br>&emsp;Locodjo 1965<br><strong>WKT</strong><br>&emsp;GEOGCS["Locodjo&emsp;1965",<br>&emsp;　DATUM["Locodjo_1965",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(RGS)",6378249.145,293.465,<br>&emsp;　　　AUTHORITY["EPSG","7012"]],<br>&emsp;　　AUTHORITY["EPSG","6142"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4142"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378249.145 +rf=293.465 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4143</td>
      <td><strong>名称</strong><br>&emsp;Abidjan 1987<br><strong>WKT</strong><br>&emsp;GEOGCS["Abidjan&emsp;1987",<br>&emsp;　DATUM["Abidjan_1987",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(RGS)",6378249.145,293.465,<br>&emsp;　　　AUTHORITY["EPSG","7012"]],<br>&emsp;　　AUTHORITY["EPSG","6143"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4143"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378249.145 +rf=293.465 +towgs84=-124.76,53,466.79,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4144</td>
      <td><strong>名称</strong><br>&emsp;Kalianpur 1937<br><strong>WKT</strong><br>&emsp;GEOGCS["Kalianpur&emsp;1937",<br>&emsp;　DATUM["Kalianpur_1937",<br>&emsp;　　SPHEROID["Everest&emsp;1830&emsp;(1937&emsp;Adjustment)",6377276.345,300.8017,<br>&emsp;　　　AUTHORITY["EPSG","7015"]],<br>&emsp;　　AUTHORITY["EPSG","6144"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4144"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=evrst30 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4145</td>
      <td><strong>名称</strong><br>&emsp;Kalianpur 1962<br><strong>WKT</strong><br>&emsp;GEOGCS["Kalianpur&emsp;1962",<br>&emsp;　DATUM["Kalianpur_1962",<br>&emsp;　　SPHEROID["Everest&emsp;1830&emsp;(1962&emsp;Definition)",6377301.243,300.8017255,<br>&emsp;　　　AUTHORITY["EPSG","7044"]],<br>&emsp;　　AUTHORITY["EPSG","6145"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4145"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6377301.243 +rf=300.8017255 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4146</td>
      <td><strong>名称</strong><br>&emsp;Kalianpur 1975<br><strong>WKT</strong><br>&emsp;GEOGCS["Kalianpur&emsp;1975",<br>&emsp;　DATUM["Kalianpur_1975",<br>&emsp;　　SPHEROID["Everest&emsp;1830&emsp;(1975&emsp;Definition)",6377299.151,300.8017255,<br>&emsp;　　　AUTHORITY["EPSG","7045"]],<br>&emsp;　　AUTHORITY["EPSG","6146"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4146"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6377299.151 +rf=300.8017255 +towgs84=295,736,257,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4147</td>
      <td><strong>名称</strong><br>&emsp;Hanoi 1972<br><strong>WKT</strong><br>&emsp;GEOGCS["Hanoi&emsp;1972",<br>&emsp;　DATUM["Hanoi_1972",<br>&emsp;　　SPHEROID["Krassowsky&emsp;1940",6378245,298.3,<br>&emsp;　　　AUTHORITY["EPSG","7024"]],<br>&emsp;　　AUTHORITY["EPSG","6147"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4147"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=krass +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4148</td>
      <td><strong>名称</strong><br>&emsp;Hartebeesthoek94<br><strong>WKT</strong><br>&emsp;GEOGCS["Hartebeesthoek94",<br>&emsp;　DATUM["Hartebeesthoek94",<br>&emsp;　　SPHEROID["WGS&emsp;84",6378137,298.257223563,<br>&emsp;　　　AUTHORITY["EPSG","7030"]],<br>&emsp;　　AUTHORITY["EPSG","6148"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4148"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4149</td>
      <td><strong>名称</strong><br>&emsp;CH1903<br><strong>WKT</strong><br>&emsp;GEOGCS["CH1903",<br>&emsp;　DATUM["CH1903",<br>&emsp;　　SPHEROID["Bessel&emsp;1841",6377397.155,299.1528128,<br>&emsp;　　　AUTHORITY["EPSG","7004"]],<br>&emsp;　　AUTHORITY["EPSG","6149"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4149"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=bessel +towgs84=674.374,15.056,405.346,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4150</td>
      <td><strong>名称</strong><br>&emsp;CH1903+<br><strong>WKT</strong><br>&emsp;GEOGCS["CH1903+",<br>&emsp;　DATUM["CH1903+",<br>&emsp;　　SPHEROID["Bessel&emsp;1841",6377397.155,299.1528128,<br>&emsp;　　　AUTHORITY["EPSG","7004"]],<br>&emsp;　　AUTHORITY["EPSG","6150"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4150"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=bessel +towgs84=674.374,15.056,405.346,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4151</td>
      <td><strong>名称</strong><br>&emsp;CHTRF95<br><strong>WKT</strong><br>&emsp;GEOGCS["CHTRF95",<br>&emsp;　DATUM["Swiss_Terrestrial_Reference_Frame_1995",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","6151"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4151"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4152</td>
      <td><strong>名称</strong><br>&emsp;NAD83(HARN)<br><strong>WKT</strong><br>&emsp;GEOGCS["NAD83(HARN)",<br>&emsp;　DATUM["NAD83_High_Accuracy_Reference_Network",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","6152"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4152"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4153</td>
      <td><strong>名称</strong><br>&emsp;Rassadiran<br><strong>WKT</strong><br>&emsp;GEOGCS["Rassadiran",<br>&emsp;　DATUM["Rassadiran",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6153"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4153"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=-133.63,-157.5,-158.62,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4154</td>
      <td><strong>名称</strong><br>&emsp;ED50(ED77)<br><strong>WKT</strong><br>&emsp;GEOGCS["ED50(ED77)",<br>&emsp;　DATUM["European_Datum_1950_1977",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6154"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4154"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4155</td>
      <td><strong>名称</strong><br>&emsp;Dabola 1981<br><strong>WKT</strong><br>&emsp;GEOGCS["Dabola&emsp;1981",<br>&emsp;　DATUM["Dabola_1981",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(IGN)",6378249.2,293.466021293627,<br>&emsp;　　　AUTHORITY["EPSG","7011"]],<br>&emsp;　　AUTHORITY["EPSG","6155"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4155"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=clrk80ign +towgs84=-83,37,124,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4156</td>
      <td><strong>名称</strong><br>&emsp;S-JTSK<br><strong>WKT</strong><br>&emsp;GEOGCS["S-JTSK",<br>&emsp;　DATUM["System_of_the_Unified_Trigonometrical_Cadastral_Network",<br>&emsp;　　SPHEROID["Bessel&emsp;1841",6377397.155,299.1528128,<br>&emsp;　　　AUTHORITY["EPSG","7004"]],<br>&emsp;　　AUTHORITY["EPSG","6156"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4156"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=bessel +towgs84=589,76,480,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4157</td>
      <td><strong>名称</strong><br>&emsp;Mount Dillon<br><strong>WKT</strong><br>&emsp;GEOGCS["Mount&emsp;Dillon",<br>&emsp;　DATUM["Mount_Dillon",<br>&emsp;　　SPHEROID["Clarke&emsp;1858",6378293.64520876,294.260676369261,<br>&emsp;　　　AUTHORITY["EPSG","7007"]],<br>&emsp;　　AUTHORITY["EPSG","6157"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4157"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378293.64520876 +rf=294.260676369261 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4158</td>
      <td><strong>名称</strong><br>&emsp;Naparima 1955<br><strong>WKT</strong><br>&emsp;GEOGCS["Naparima&emsp;1955",<br>&emsp;　DATUM["Naparima_1955",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6158"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4158"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4159</td>
      <td><strong>名称</strong><br>&emsp;ELD79<br><strong>WKT</strong><br>&emsp;GEOGCS["ELD79",<br>&emsp;　DATUM["European_Libyan_Datum_1979",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6159"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4159"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4160</td>
      <td><strong>名称</strong><br>&emsp;Chos Malal 1914<br><strong>WKT</strong><br>&emsp;GEOGCS["Chos&emsp;Malal&emsp;1914",<br>&emsp;　DATUM["Chos_Malal_1914",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6160"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4160"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4161</td>
      <td><strong>名称</strong><br>&emsp;Pampa del Castillo<br><strong>WKT</strong><br>&emsp;GEOGCS["Pampa&emsp;del&emsp;Castillo",<br>&emsp;　DATUM["Pampa_del_Castillo",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6161"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4161"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4162</td>
      <td><strong>名称</strong><br>&emsp;Korean 1985<br><strong>WKT</strong><br>&emsp;GEOGCS["Korean&emsp;1985",<br>&emsp;　DATUM["Korean_Datum_1985",<br>&emsp;　　SPHEROID["Bessel&emsp;1841",6377397.155,299.1528128,<br>&emsp;　　　AUTHORITY["EPSG","7004"]],<br>&emsp;　　AUTHORITY["EPSG","6162"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4162"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=bessel +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4163</td>
      <td><strong>名称</strong><br>&emsp;Yemen NGN96<br><strong>WKT</strong><br>&emsp;GEOGCS["Yemen&emsp;NGN96",<br>&emsp;　DATUM["Yemen_National_Geodetic_Network_1996",<br>&emsp;　　SPHEROID["WGS&emsp;84",6378137,298.257223563,<br>&emsp;　　　AUTHORITY["EPSG","7030"]],<br>&emsp;　　AUTHORITY["EPSG","6163"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4163"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4164</td>
      <td><strong>名称</strong><br>&emsp;South Yemen<br><strong>WKT</strong><br>&emsp;GEOGCS["South&emsp;Yemen",<br>&emsp;　DATUM["South_Yemen",<br>&emsp;　　SPHEROID["Krassowsky&emsp;1940",6378245,298.3,<br>&emsp;　　　AUTHORITY["EPSG","7024"]],<br>&emsp;　　AUTHORITY["EPSG","6164"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4164"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=krass +towgs84=-76,-138,67,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4165</td>
      <td><strong>名称</strong><br>&emsp;Bissau<br><strong>WKT</strong><br>&emsp;GEOGCS["Bissau",<br>&emsp;　DATUM["Bissau",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6165"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4165"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=-173,253,27,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4166</td>
      <td><strong>名称</strong><br>&emsp;Korean 1995<br><strong>WKT</strong><br>&emsp;GEOGCS["Korean&emsp;1995",<br>&emsp;　DATUM["Korean_Datum_1995",<br>&emsp;　　SPHEROID["WGS&emsp;84",6378137,298.257223563,<br>&emsp;　　　AUTHORITY["EPSG","7030"]],<br>&emsp;　　AUTHORITY["EPSG","6166"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4166"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4167</td>
      <td><strong>名称</strong><br>&emsp;NZGD2000<br><strong>WKT</strong><br>&emsp;GEOGCS["NZGD2000",<br>&emsp;　DATUM["New_Zealand_Geodetic_Datum_2000",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","6167"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4167"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4168</td>
      <td><strong>名称</strong><br>&emsp;Accra<br><strong>WKT</strong><br>&emsp;GEOGCS["Accra",<br>&emsp;　DATUM["Accra",<br>&emsp;　　SPHEROID["War&emsp;Office",6378300,296,<br>&emsp;　　　AUTHORITY["EPSG","7029"]],<br>&emsp;　　AUTHORITY["EPSG","6168"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4168"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378300 +rf=296 +towgs84=-199,32,322,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4169</td>
      <td><strong>名称</strong><br>&emsp;American Samoa 1962<br><strong>WKT</strong><br>&emsp;GEOGCS["American&emsp;Samoa&emsp;1962",<br>&emsp;　DATUM["American_Samoa_1962",<br>&emsp;　　SPHEROID["Clarke&emsp;1866",6378206.4,294.978698213898,<br>&emsp;　　　AUTHORITY["EPSG","7008"]],<br>&emsp;　　AUTHORITY["EPSG","6169"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4169"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=clrk66 +towgs84=-115,118,426,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4170</td>
      <td><strong>名称</strong><br>&emsp;SIRGAS 1995<br><strong>WKT</strong><br>&emsp;GEOGCS["SIRGAS&emsp;1995",<br>&emsp;　DATUM["Sistema_de_Referencia_Geocentrico_para_America_del_Sur_1995",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","6170"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4170"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4171</td>
      <td><strong>名称</strong><br>&emsp;RGF93<br><strong>WKT</strong><br>&emsp;GEOGCS["RGF93",<br>&emsp;　DATUM["Reseau_Geodesique_Francais_1993",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","6171"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4171"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4173</td>
      <td><strong>名称</strong><br>&emsp;IRENET95<br><strong>WKT</strong><br>&emsp;GEOGCS["IRENET95",<br>&emsp;　DATUM["IRENET95",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","6173"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4173"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4174</td>
      <td><strong>名称</strong><br>&emsp;Sierra Leone 1924<br><strong>WKT</strong><br>&emsp;GEOGCS["Sierra&emsp;Leone&emsp;1924",<br>&emsp;　DATUM["Sierra_Leone_Colony_1924",<br>&emsp;　　SPHEROID["War&emsp;Office",6378300,296,<br>&emsp;　　　AUTHORITY["EPSG","7029"]],<br>&emsp;　　AUTHORITY["EPSG","6174"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4174"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378300 +rf=296 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4175</td>
      <td><strong>名称</strong><br>&emsp;Sierra Leone 1968<br><strong>WKT</strong><br>&emsp;GEOGCS["Sierra&emsp;Leone&emsp;1968",<br>&emsp;　DATUM["Sierra_Leone_1968",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(RGS)",6378249.145,293.465,<br>&emsp;　　　AUTHORITY["EPSG","7012"]],<br>&emsp;　　AUTHORITY["EPSG","6175"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4175"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378249.145 +rf=293.465 +towgs84=-88,4,101,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4176</td>
      <td><strong>名称</strong><br>&emsp;Australian Antarctic<br><strong>WKT</strong><br>&emsp;GEOGCS["Australian&emsp;Antarctic",<br>&emsp;　DATUM["Australian_Antarctic_Datum_1998",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","6176"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4176"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4178</td>
      <td><strong>名称</strong><br>&emsp;Pulkovo 1942(83)<br><strong>WKT</strong><br>&emsp;GEOGCS["Pulkovo&emsp;1942(83)",<br>&emsp;　DATUM["Pulkovo_1942_83",<br>&emsp;　　SPHEROID["Krassowsky&emsp;1940",6378245,298.3,<br>&emsp;　　　AUTHORITY["EPSG","7024"]],<br>&emsp;　　AUTHORITY["EPSG","6178"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4178"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=krass +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4179</td>
      <td><strong>名称</strong><br>&emsp;Pulkovo 1942(58)<br><strong>WKT</strong><br>&emsp;GEOGCS["Pulkovo&emsp;1942(58)",<br>&emsp;　DATUM["Pulkovo_1942_58",<br>&emsp;　　SPHEROID["Krassowsky&emsp;1940",6378245,298.3,<br>&emsp;　　　AUTHORITY["EPSG","7024"]],<br>&emsp;　　AUTHORITY["EPSG","6179"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4179"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=krass +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4180</td>
      <td><strong>名称</strong><br>&emsp;EST97<br><strong>WKT</strong><br>&emsp;GEOGCS["EST97",<br>&emsp;　DATUM["Estonia_1997",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","6180"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4180"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4181</td>
      <td><strong>名称</strong><br>&emsp;Luxembourg 1930<br><strong>WKT</strong><br>&emsp;GEOGCS["Luxembourg&emsp;1930",<br>&emsp;　DATUM["Luxembourg_1930",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6181"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4181"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=-189.6806,18.3463,-42.7695,-0.33746,-3.09264,2.53861,0.4598 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4182</td>
      <td><strong>名称</strong><br>&emsp;Azores Occidental 1939<br><strong>WKT</strong><br>&emsp;GEOGCS["Azores&emsp;Occidental&emsp;1939",<br>&emsp;　DATUM["Azores_Occidental_Islands_1939",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6182"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4182"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4183</td>
      <td><strong>名称</strong><br>&emsp;Azores Central 1948<br><strong>WKT</strong><br>&emsp;GEOGCS["Azores&emsp;Central&emsp;1948",<br>&emsp;　DATUM["Azores_Central_Islands_1948",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6183"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4183"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=-104,167,-38,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4184</td>
      <td><strong>名称</strong><br>&emsp;Azores Oriental 1940<br><strong>WKT</strong><br>&emsp;GEOGCS["Azores&emsp;Oriental&emsp;1940",<br>&emsp;　DATUM["Azores_Oriental_Islands_1940",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6184"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4184"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=-203,141,53,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4188</td>
      <td><strong>名称</strong><br>&emsp;OSNI 1952<br><strong>WKT</strong><br>&emsp;GEOGCS["OSNI&emsp;1952",<br>&emsp;　DATUM["OSNI_1952",<br>&emsp;　　SPHEROID["Airy&emsp;1830",6377563.396,299.3249646,<br>&emsp;　　　AUTHORITY["EPSG","7001"]],<br>&emsp;　　AUTHORITY["EPSG","6188"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4188"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=airy +towgs84=482.5,-130.6,564.6,-1.042,-0.214,-0.631,8.15 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4189</td>
      <td><strong>名称</strong><br>&emsp;REGVEN<br><strong>WKT</strong><br>&emsp;GEOGCS["REGVEN",<br>&emsp;　DATUM["Red_Geodesica_Venezolana",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","6189"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4189"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4190</td>
      <td><strong>名称</strong><br>&emsp;POSGAR 98<br><strong>WKT</strong><br>&emsp;GEOGCS["POSGAR&emsp;98",<br>&emsp;　DATUM["Posiciones_Geodesicas_Argentinas_1998",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","6190"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4190"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4191</td>
      <td><strong>名称</strong><br>&emsp;Albanian 1987<br><strong>WKT</strong><br>&emsp;GEOGCS["Albanian&emsp;1987",<br>&emsp;　DATUM["Albanian_1987",<br>&emsp;　　SPHEROID["Krassowsky&emsp;1940",6378245,298.3,<br>&emsp;　　　AUTHORITY["EPSG","7024"]],<br>&emsp;　　AUTHORITY["EPSG","6191"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4191"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=krass +towgs84=-44.183,-0.58,-38.489,2.3867,2.7072,-3.5196,-8.2703 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4192</td>
      <td><strong>名称</strong><br>&emsp;Douala 1948<br><strong>WKT</strong><br>&emsp;GEOGCS["Douala&emsp;1948",<br>&emsp;　DATUM["Douala_1948",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6192"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4192"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=-206.1,-174.7,-87.7,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4193</td>
      <td><strong>名称</strong><br>&emsp;Manoca 1962<br><strong>WKT</strong><br>&emsp;GEOGCS["Manoca&emsp;1962",<br>&emsp;　DATUM["Manoca_1962",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(IGN)",6378249.2,293.466021293627,<br>&emsp;　　　AUTHORITY["EPSG","7011"]],<br>&emsp;　　AUTHORITY["EPSG","6193"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4193"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=clrk80ign +towgs84=-70.9,-151.8,-41.4,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4194</td>
      <td><strong>名称</strong><br>&emsp;Qornoq 1927<br><strong>WKT</strong><br>&emsp;GEOGCS["Qornoq&emsp;1927",<br>&emsp;　DATUM["Qornoq_1927",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6194"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4194"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4195</td>
      <td><strong>名称</strong><br>&emsp;Scoresbysund 1952<br><strong>WKT</strong><br>&emsp;GEOGCS["Scoresbysund&emsp;1952",<br>&emsp;　DATUM["Scoresbysund_1952",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6195"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4195"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=105,326,-102.5,0,0,0.814,-0.6 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4196</td>
      <td><strong>名称</strong><br>&emsp;Ammassalik 1958<br><strong>WKT</strong><br>&emsp;GEOGCS["Ammassalik&emsp;1958",<br>&emsp;　DATUM["Ammassalik_1958",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6196"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4196"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=-45,417,-3.5,0,0,0.814,-0.6 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4197</td>
      <td><strong>名称</strong><br>&emsp;Garoua<br><strong>WKT</strong><br>&emsp;GEOGCS["Garoua",<br>&emsp;　DATUM["Garoua",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(RGS)",6378249.145,293.465,<br>&emsp;　　　AUTHORITY["EPSG","7012"]],<br>&emsp;　　AUTHORITY["EPSG","6197"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4197"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378249.145 +rf=293.465 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4198</td>
      <td><strong>名称</strong><br>&emsp;Kousseri<br><strong>WKT</strong><br>&emsp;GEOGCS["Kousseri",<br>&emsp;　DATUM["Kousseri",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(RGS)",6378249.145,293.465,<br>&emsp;　　　AUTHORITY["EPSG","7012"]],<br>&emsp;　　AUTHORITY["EPSG","6198"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4198"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378249.145 +rf=293.465 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4199</td>
      <td><strong>名称</strong><br>&emsp;Egypt 1930<br><strong>WKT</strong><br>&emsp;GEOGCS["Egypt&emsp;1930",<br>&emsp;　DATUM["Egypt_1930",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6199"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4199"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4200</td>
      <td><strong>名称</strong><br>&emsp;Pulkovo 1995<br><strong>WKT</strong><br>&emsp;GEOGCS["Pulkovo&emsp;1995",<br>&emsp;　DATUM["Pulkovo_1995",<br>&emsp;　　SPHEROID["Krassowsky&emsp;1940",6378245,298.3,<br>&emsp;　　　AUTHORITY["EPSG","7024"]],<br>&emsp;　　AUTHORITY["EPSG","6200"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4200"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4201</td>
      <td><strong>名称</strong><br>&emsp;Adindan<br><strong>WKT</strong><br>&emsp;GEOGCS["Adindan",<br>&emsp;　DATUM["Adindan",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(RGS)",6378249.145,293.465,<br>&emsp;　　　AUTHORITY["EPSG","7012"]],<br>&emsp;　　AUTHORITY["EPSG","6201"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4201"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378249.145 +rf=293.465 +towgs84=-166,-15,204,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4202</td>
      <td><strong>名称</strong><br>&emsp;AGD66<br><strong>WKT</strong><br>&emsp;GEOGCS["AGD66",<br>&emsp;　DATUM["Australian_Geodetic_Datum_1966",<br>&emsp;　　SPHEROID["Australian&emsp;National&emsp;Spheroid",6378160,298.25,<br>&emsp;　　　AUTHORITY["EPSG","7003"]],<br>&emsp;　　AUTHORITY["EPSG","6202"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4202"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=aust_SA +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4203</td>
      <td><strong>名称</strong><br>&emsp;AGD84<br><strong>WKT</strong><br>&emsp;GEOGCS["AGD84",<br>&emsp;　DATUM["Australian_Geodetic_Datum_1984",<br>&emsp;　　SPHEROID["Australian&emsp;National&emsp;Spheroid",6378160,298.25,<br>&emsp;　　　AUTHORITY["EPSG","7003"]],<br>&emsp;　　AUTHORITY["EPSG","6203"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4203"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=aust_SA +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4204</td>
      <td><strong>名称</strong><br>&emsp;Ain el Abd<br><strong>WKT</strong><br>&emsp;GEOGCS["Ain&emsp;el&emsp;Abd",<br>&emsp;　DATUM["Ain_el_Abd_1970",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6204"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4204"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=-143,-236,7,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4205</td>
      <td><strong>名称</strong><br>&emsp;Afgooye<br><strong>WKT</strong><br>&emsp;GEOGCS["Afgooye",<br>&emsp;　DATUM["Afgooye",<br>&emsp;　　SPHEROID["Krassowsky&emsp;1940",6378245,298.3,<br>&emsp;　　　AUTHORITY["EPSG","7024"]],<br>&emsp;　　AUTHORITY["EPSG","6205"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4205"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=krass +towgs84=-43,-163,45,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4206</td>
      <td><strong>名称</strong><br>&emsp;Agadez<br><strong>WKT</strong><br>&emsp;GEOGCS["Agadez",<br>&emsp;　DATUM["Agadez",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(IGN)",6378249.2,293.466021293627,<br>&emsp;　　　AUTHORITY["EPSG","7011"]],<br>&emsp;　　AUTHORITY["EPSG","6206"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4206"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=clrk80ign +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4207</td>
      <td><strong>名称</strong><br>&emsp;Lisbon<br><strong>WKT</strong><br>&emsp;GEOGCS["Lisbon",<br>&emsp;　DATUM["Lisbon_1937",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6207"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4207"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4208</td>
      <td><strong>名称</strong><br>&emsp;Aratu<br><strong>WKT</strong><br>&emsp;GEOGCS["Aratu",<br>&emsp;　DATUM["Aratu",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6208"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4208"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4209</td>
      <td><strong>名称</strong><br>&emsp;Arc 1950<br><strong>WKT</strong><br>&emsp;GEOGCS["Arc&emsp;1950",<br>&emsp;　DATUM["Arc_1950",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(Arc)",6378249.145,293.4663077,<br>&emsp;　　　AUTHORITY["EPSG","7013"]],<br>&emsp;　　AUTHORITY["EPSG","6209"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4209"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378249.145 +rf=293.4663077 +towgs84=-143,-90,-294,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4210</td>
      <td><strong>名称</strong><br>&emsp;Arc 1960<br><strong>WKT</strong><br>&emsp;GEOGCS["Arc&emsp;1960",<br>&emsp;　DATUM["Arc_1960",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(RGS)",6378249.145,293.465,<br>&emsp;　　　AUTHORITY["EPSG","7012"]],<br>&emsp;　　AUTHORITY["EPSG","6210"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4210"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378249.145 +rf=293.465 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4211</td>
      <td><strong>名称</strong><br>&emsp;Batavia<br><strong>WKT</strong><br>&emsp;GEOGCS["Batavia",<br>&emsp;　DATUM["Batavia",<br>&emsp;　　SPHEROID["Bessel&emsp;1841",6377397.155,299.1528128,<br>&emsp;　　　AUTHORITY["EPSG","7004"]],<br>&emsp;　　AUTHORITY["EPSG","6211"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4211"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=bessel +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4212</td>
      <td><strong>名称</strong><br>&emsp;Barbados 1938<br><strong>WKT</strong><br>&emsp;GEOGCS["Barbados&emsp;1938",<br>&emsp;　DATUM["Barbados_1938",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(RGS)",6378249.145,293.465,<br>&emsp;　　　AUTHORITY["EPSG","7012"]],<br>&emsp;　　AUTHORITY["EPSG","6212"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4212"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378249.145 +rf=293.465 +towgs84=31.95,300.99,419.19,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4213</td>
      <td><strong>名称</strong><br>&emsp;Beduaram<br><strong>WKT</strong><br>&emsp;GEOGCS["Beduaram",<br>&emsp;　DATUM["Beduaram",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(IGN)",6378249.2,293.466021293627,<br>&emsp;　　　AUTHORITY["EPSG","7011"]],<br>&emsp;　　AUTHORITY["EPSG","6213"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4213"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=clrk80ign +towgs84=-106,-87,188,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4214</td>
      <td><strong>名称</strong><br>&emsp;Beijing 1954<br><strong>WKT</strong><br>&emsp;GEOGCS["Beijing&emsp;1954",<br>&emsp;　DATUM["Beijing_1954",<br>&emsp;　　SPHEROID["Krassowsky&emsp;1940",6378245,298.3,<br>&emsp;　　　AUTHORITY["EPSG","7024"]],<br>&emsp;　　AUTHORITY["EPSG","6214"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4214"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=krass +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4215</td>
      <td><strong>名称</strong><br>&emsp;BD50<br><strong>WKT</strong><br>&emsp;GEOGCS["BD50",<br>&emsp;　DATUM["Reseau_National_Belge_1950",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6215"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4215"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4216</td>
      <td><strong>名称</strong><br>&emsp;Bermuda 1957<br><strong>WKT</strong><br>&emsp;GEOGCS["Bermuda&emsp;1957",<br>&emsp;　DATUM["Bermuda_1957",<br>&emsp;　　SPHEROID["Clarke&emsp;1866",6378206.4,294.978698213898,<br>&emsp;　　　AUTHORITY["EPSG","7008"]],<br>&emsp;　　AUTHORITY["EPSG","6216"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4216"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=clrk66 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4218</td>
      <td><strong>名称</strong><br>&emsp;Bogota 1975<br><strong>WKT</strong><br>&emsp;GEOGCS["Bogota&emsp;1975",<br>&emsp;　DATUM["Bogota_1975",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6218"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4218"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=307,304,-318,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4219</td>
      <td><strong>名称</strong><br>&emsp;Bukit Rimpah<br><strong>WKT</strong><br>&emsp;GEOGCS["Bukit&emsp;Rimpah",<br>&emsp;　DATUM["Bukit_Rimpah",<br>&emsp;　　SPHEROID["Bessel&emsp;1841",6377397.155,299.1528128,<br>&emsp;　　　AUTHORITY["EPSG","7004"]],<br>&emsp;　　AUTHORITY["EPSG","6219"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4219"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=bessel +towgs84=-384,664,-48,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4220</td>
      <td><strong>名称</strong><br>&emsp;Camacupa 1948<br><strong>WKT</strong><br>&emsp;GEOGCS["Camacupa&emsp;1948",<br>&emsp;　DATUM["Camacupa_1948",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(RGS)",6378249.145,293.465,<br>&emsp;　　　AUTHORITY["EPSG","7012"]],<br>&emsp;　　AUTHORITY["EPSG","6220"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4220"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378249.145 +rf=293.465 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4221</td>
      <td><strong>名称</strong><br>&emsp;Campo Inchauspe<br><strong>WKT</strong><br>&emsp;GEOGCS["Campo&emsp;Inchauspe",<br>&emsp;　DATUM["Campo_Inchauspe",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6221"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4221"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=-148,136,90,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4222</td>
      <td><strong>名称</strong><br>&emsp;Cape<br><strong>WKT</strong><br>&emsp;GEOGCS["Cape",<br>&emsp;　DATUM["Cape",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(Arc)",6378249.145,293.4663077,<br>&emsp;　　　AUTHORITY["EPSG","7013"]],<br>&emsp;　　AUTHORITY["EPSG","6222"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4222"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378249.145 +rf=293.4663077 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4223</td>
      <td><strong>名称</strong><br>&emsp;Carthage<br><strong>WKT</strong><br>&emsp;GEOGCS["Carthage",<br>&emsp;　DATUM["Carthage",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(IGN)",6378249.2,293.466021293627,<br>&emsp;　　　AUTHORITY["EPSG","7011"]],<br>&emsp;　　AUTHORITY["EPSG","6223"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4223"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=clrk80ign +towgs84=-263,6,431,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4224</td>
      <td><strong>名称</strong><br>&emsp;Chua<br><strong>WKT</strong><br>&emsp;GEOGCS["Chua",<br>&emsp;　DATUM["Chua",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6224"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4224"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4225</td>
      <td><strong>名称</strong><br>&emsp;Corrego Alegre 1970-72<br><strong>WKT</strong><br>&emsp;GEOGCS["Corrego&emsp;Alegre&emsp;1970-72",<br>&emsp;　DATUM["Corrego_Alegre_1970-72",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6225"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4225"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4227</td>
      <td><strong>名称</strong><br>&emsp;Deir ez Zor<br><strong>WKT</strong><br>&emsp;GEOGCS["Deir&emsp;ez&emsp;Zor",<br>&emsp;　DATUM["Deir_ez_Zor",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(IGN)",6378249.2,293.466021293627,<br>&emsp;　　　AUTHORITY["EPSG","7011"]],<br>&emsp;　　AUTHORITY["EPSG","6227"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4227"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=clrk80ign +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4228</td>
      <td><strong>名称</strong><br>&emsp;Douala 1948<br><strong>WKT</strong><br>&emsp;GEOGCS["Douala&emsp;1948",<br>&emsp;　DATUM["Douala_1948",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6192"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4192"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=-206.1,-174.7,-87.7,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4229</td>
      <td><strong>名称</strong><br>&emsp;Egypt 1907<br><strong>WKT</strong><br>&emsp;GEOGCS["Egypt&emsp;1907",<br>&emsp;　DATUM["Egypt_1907",<br>&emsp;　　SPHEROID["Helmert&emsp;1906",6378200,298.3,<br>&emsp;　　　AUTHORITY["EPSG","7020"]],<br>&emsp;　　AUTHORITY["EPSG","6229"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4229"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=helmert +towgs84=-130,110,-13,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4230</td>
      <td><strong>名称</strong><br>&emsp;ED50<br><strong>WKT</strong><br>&emsp;GEOGCS["ED50",<br>&emsp;　DATUM["European_Datum_1950",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6230"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4230"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4231</td>
      <td><strong>名称</strong><br>&emsp;ED87<br><strong>WKT</strong><br>&emsp;GEOGCS["ED87",<br>&emsp;　DATUM["European_Datum_1987",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6231"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4231"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=-83.11,-97.38,-117.22,0.00569290865241986,-0.0446975835137458,0.0442850539012516,0.1218 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4232</td>
      <td><strong>名称</strong><br>&emsp;Fahud<br><strong>WKT</strong><br>&emsp;GEOGCS["Fahud",<br>&emsp;　DATUM["Fahud",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(RGS)",6378249.145,293.465,<br>&emsp;　　　AUTHORITY["EPSG","7012"]],<br>&emsp;　　AUTHORITY["EPSG","6232"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4232"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378249.145 +rf=293.465 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4234</td>
      <td><strong>名称</strong><br>&emsp;Garoua<br><strong>WKT</strong><br>&emsp;GEOGCS["Garoua",<br>&emsp;　DATUM["Garoua",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(RGS)",6378249.145,293.465,<br>&emsp;　　　AUTHORITY["EPSG","7012"]],<br>&emsp;　　AUTHORITY["EPSG","6197"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4197"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378249.145 +rf=293.465 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4235</td>
      <td><strong>名称</strong><br>&emsp;CSG67<br><strong>WKT</strong><br>&emsp;GEOGCS["CSG67",<br>&emsp;　DATUM["Centre_Spatial_Guyanais_1967",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6623"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4623"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=-186,230,110,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4236</td>
      <td><strong>名称</strong><br>&emsp;Hu Tzu Shan 1950<br><strong>WKT</strong><br>&emsp;GEOGCS["Hu&emsp;Tzu&emsp;Shan&emsp;1950",<br>&emsp;　DATUM["Hu_Tzu_Shan_1950",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6236"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4236"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=-637,-549,-203,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4237</td>
      <td><strong>名称</strong><br>&emsp;HD72<br><strong>WKT</strong><br>&emsp;GEOGCS["HD72",<br>&emsp;　DATUM["Hungarian_Datum_1972",<br>&emsp;　　SPHEROID["GRS&emsp;1967",6378160,298.247167427,<br>&emsp;　　　AUTHORITY["EPSG","7036"]],<br>&emsp;　　AUTHORITY["EPSG","6237"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4237"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS67 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4238</td>
      <td><strong>名称</strong><br>&emsp;ID74<br><strong>WKT</strong><br>&emsp;GEOGCS["ID74",<br>&emsp;　DATUM["Indonesian_Datum_1974",<br>&emsp;　　SPHEROID["Indonesian&emsp;National&emsp;Spheroid",6378160,298.247,<br>&emsp;　　　AUTHORITY["EPSG","7021"]],<br>&emsp;　　AUTHORITY["EPSG","6238"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4238"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378160 +rf=298.247 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4239</td>
      <td><strong>名称</strong><br>&emsp;Indian 1954<br><strong>WKT</strong><br>&emsp;GEOGCS["Indian&emsp;1954",<br>&emsp;　DATUM["Indian_1954",<br>&emsp;　　SPHEROID["Everest&emsp;1830&emsp;(1937&emsp;Adjustment)",6377276.345,300.8017,<br>&emsp;　　　AUTHORITY["EPSG","7015"]],<br>&emsp;　　AUTHORITY["EPSG","6239"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4239"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=evrst30 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4240</td>
      <td><strong>名称</strong><br>&emsp;Indian 1975<br><strong>WKT</strong><br>&emsp;GEOGCS["Indian&emsp;1975",<br>&emsp;　DATUM["Indian_1975",<br>&emsp;　　SPHEROID["Everest&emsp;1830&emsp;(1937&emsp;Adjustment)",6377276.345,300.8017,<br>&emsp;　　　AUTHORITY["EPSG","7015"]],<br>&emsp;　　AUTHORITY["EPSG","6240"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4240"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=evrst30 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4241</td>
      <td><strong>名称</strong><br>&emsp;Jamaica 1875<br><strong>WKT</strong><br>&emsp;GEOGCS["Jamaica&emsp;1875",<br>&emsp;　DATUM["Jamaica_1875",<br>&emsp;　　SPHEROID["Clarke&emsp;1880",6378249.14480801,293.466307655636,<br>&emsp;　　　AUTHORITY["EPSG","7034"]],<br>&emsp;　　AUTHORITY["EPSG","6241"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4241"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378249.14480801 +rf=293.466307655636 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4242</td>
      <td><strong>名称</strong><br>&emsp;JAD69<br><strong>WKT</strong><br>&emsp;GEOGCS["JAD69",<br>&emsp;　DATUM["Jamaica_1969",<br>&emsp;　　SPHEROID["Clarke&emsp;1866",6378206.4,294.978698213898,<br>&emsp;　　　AUTHORITY["EPSG","7008"]],<br>&emsp;　　AUTHORITY["EPSG","6242"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4242"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=clrk66 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4243</td>
      <td><strong>名称</strong><br>&emsp;Kalianpur 1880<br><strong>WKT</strong><br>&emsp;GEOGCS["Kalianpur&emsp;1880",<br>&emsp;　DATUM["Kalianpur_1880",<br>&emsp;　　SPHEROID["Everest&emsp;(1830&emsp;Definition)",6377299.36559538,300.801725543355,<br>&emsp;　　　AUTHORITY["EPSG","7042"]],<br>&emsp;　　AUTHORITY["EPSG","6243"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4243"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6377299.36559538 +rf=300.801725543355 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4244</td>
      <td><strong>名称</strong><br>&emsp;Kandawala<br><strong>WKT</strong><br>&emsp;GEOGCS["Kandawala",<br>&emsp;　DATUM["Kandawala",<br>&emsp;　　SPHEROID["Everest&emsp;1830&emsp;(1937&emsp;Adjustment)",6377276.345,300.8017,<br>&emsp;　　　AUTHORITY["EPSG","7015"]],<br>&emsp;　　AUTHORITY["EPSG","6244"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4244"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=evrst30 +towgs84=-97,787,86,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4245</td>
      <td><strong>名称</strong><br>&emsp;Kertau 1968<br><strong>WKT</strong><br>&emsp;GEOGCS["Kertau&emsp;1968",<br>&emsp;　DATUM["Kertau_1968",<br>&emsp;　　SPHEROID["Everest&emsp;1830&emsp;Modified",6377304.063,300.8017,<br>&emsp;　　　AUTHORITY["EPSG","7018"]],<br>&emsp;　　AUTHORITY["EPSG","6245"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4245"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=evrst48 +towgs84=-11,851,5,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4246</td>
      <td><strong>名称</strong><br>&emsp;KOC<br><strong>WKT</strong><br>&emsp;GEOGCS["KOC",<br>&emsp;　DATUM["Kuwait_Oil_Company",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(RGS)",6378249.145,293.465,<br>&emsp;　　　AUTHORITY["EPSG","7012"]],<br>&emsp;　　AUTHORITY["EPSG","6246"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4246"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378249.145 +rf=293.465 +towgs84=-294.7,-200.1,525.5,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4247</td>
      <td><strong>名称</strong><br>&emsp;La Canoa<br><strong>WKT</strong><br>&emsp;GEOGCS["La&emsp;Canoa",<br>&emsp;　DATUM["La_Canoa",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6247"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4247"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4248</td>
      <td><strong>名称</strong><br>&emsp;PSAD56<br><strong>WKT</strong><br>&emsp;GEOGCS["PSAD56",<br>&emsp;　DATUM["Provisional_South_American_Datum_1956",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6248"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4248"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4249</td>
      <td><strong>名称</strong><br>&emsp;Lake<br><strong>WKT</strong><br>&emsp;GEOGCS["Lake",<br>&emsp;　DATUM["Lake",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6249"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4249"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4250</td>
      <td><strong>名称</strong><br>&emsp;Leigon<br><strong>WKT</strong><br>&emsp;GEOGCS["Leigon",<br>&emsp;　DATUM["Leigon",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(RGS)",6378249.145,293.465,<br>&emsp;　　　AUTHORITY["EPSG","7012"]],<br>&emsp;　　AUTHORITY["EPSG","6250"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4250"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378249.145 +rf=293.465 +towgs84=-130,29,364,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4251</td>
      <td><strong>名称</strong><br>&emsp;Liberia 1964<br><strong>WKT</strong><br>&emsp;GEOGCS["Liberia&emsp;1964",<br>&emsp;　DATUM["Liberia_1964",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(RGS)",6378249.145,293.465,<br>&emsp;　　　AUTHORITY["EPSG","7012"]],<br>&emsp;　　AUTHORITY["EPSG","6251"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4251"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378249.145 +rf=293.465 +towgs84=-90,40,88,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4252</td>
      <td><strong>名称</strong><br>&emsp;Lome<br><strong>WKT</strong><br>&emsp;GEOGCS["Lome",<br>&emsp;　DATUM["Lome",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(IGN)",6378249.2,293.466021293627,<br>&emsp;　　　AUTHORITY["EPSG","7011"]],<br>&emsp;　　AUTHORITY["EPSG","6252"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4252"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=clrk80ign +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4253</td>
      <td><strong>名称</strong><br>&emsp;Luzon 1911<br><strong>WKT</strong><br>&emsp;GEOGCS["Luzon&emsp;1911",<br>&emsp;　DATUM["Luzon_1911",<br>&emsp;　　SPHEROID["Clarke&emsp;1866",6378206.4,294.978698213898,<br>&emsp;　　　AUTHORITY["EPSG","7008"]],<br>&emsp;　　AUTHORITY["EPSG","6253"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4253"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=clrk66 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4254</td>
      <td><strong>名称</strong><br>&emsp;Hito XVIII 1963<br><strong>WKT</strong><br>&emsp;GEOGCS["Hito&emsp;XVIII&emsp;1963",<br>&emsp;　DATUM["Hito_XVIII_1963",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6254"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4254"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4255</td>
      <td><strong>名称</strong><br>&emsp;Herat North<br><strong>WKT</strong><br>&emsp;GEOGCS["Herat&emsp;North",<br>&emsp;　DATUM["Herat_North",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6255"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4255"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=-333,-222,114,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4256</td>
      <td><strong>名称</strong><br>&emsp;Mahe 1971<br><strong>WKT</strong><br>&emsp;GEOGCS["Mahe&emsp;1971",<br>&emsp;　DATUM["Mahe_1971",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(RGS)",6378249.145,293.465,<br>&emsp;　　　AUTHORITY["EPSG","7012"]],<br>&emsp;　　AUTHORITY["EPSG","6256"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4256"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378249.145 +rf=293.465 +towgs84=41,-220,-134,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4257</td>
      <td><strong>名称</strong><br>&emsp;Makassar<br><strong>WKT</strong><br>&emsp;GEOGCS["Makassar",<br>&emsp;　DATUM["Makassar",<br>&emsp;　　SPHEROID["Bessel&emsp;1841",6377397.155,299.1528128,<br>&emsp;　　　AUTHORITY["EPSG","7004"]],<br>&emsp;　　AUTHORITY["EPSG","6257"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4257"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=bessel +towgs84=-587.8,519.75,145.76,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4258</td>
      <td><strong>名称</strong><br>&emsp;ETRS89<br><strong>WKT</strong><br>&emsp;GEOGCS["ETRS89",<br>&emsp;　DATUM["European_Terrestrial_Reference_System_1989",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","6258"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4258"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4259</td>
      <td><strong>名称</strong><br>&emsp;Malongo 1987<br><strong>WKT</strong><br>&emsp;GEOGCS["Malongo&emsp;1987",<br>&emsp;　DATUM["Malongo_1987",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6259"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4259"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=-254.1,-5.36,-100.29,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4260</td>
      <td><strong>名称</strong><br>&emsp;Manoca 1962<br><strong>WKT</strong><br>&emsp;GEOGCS["Manoca&emsp;1962",<br>&emsp;　DATUM["Manoca_1962",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(IGN)",6378249.2,293.466021293627,<br>&emsp;　　　AUTHORITY["EPSG","7011"]],<br>&emsp;　　AUTHORITY["EPSG","6193"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4193"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=clrk80ign +towgs84=-70.9,-151.8,-41.4,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4261</td>
      <td><strong>名称</strong><br>&emsp;Merchich<br><strong>WKT</strong><br>&emsp;GEOGCS["Merchich",<br>&emsp;　DATUM["Merchich",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(IGN)",6378249.2,293.466021293627,<br>&emsp;　　　AUTHORITY["EPSG","7011"]],<br>&emsp;　　AUTHORITY["EPSG","6261"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4261"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=clrk80ign +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4262</td>
      <td><strong>名称</strong><br>&emsp;Massawa<br><strong>WKT</strong><br>&emsp;GEOGCS["Massawa",<br>&emsp;　DATUM["Massawa",<br>&emsp;　　SPHEROID["Bessel&emsp;1841",6377397.155,299.1528128,<br>&emsp;　　　AUTHORITY["EPSG","7004"]],<br>&emsp;　　AUTHORITY["EPSG","6262"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4262"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=bessel +towgs84=639,405,60,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4263</td>
      <td><strong>名称</strong><br>&emsp;Minna<br><strong>WKT</strong><br>&emsp;GEOGCS["Minna",<br>&emsp;　DATUM["Minna",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(RGS)",6378249.145,293.465,<br>&emsp;　　　AUTHORITY["EPSG","7012"]],<br>&emsp;　　AUTHORITY["EPSG","6263"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4263"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378249.145 +rf=293.465 +towgs84=-92,-93,122,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4265</td>
      <td><strong>名称</strong><br>&emsp;Monte Mario<br><strong>WKT</strong><br>&emsp;GEOGCS["Monte&emsp;Mario",<br>&emsp;　DATUM["Monte_Mario",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6265"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4265"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4266</td>
      <td><strong>名称</strong><br>&emsp;M'poraloko<br><strong>WKT</strong><br>&emsp;GEOGCS["M'poraloko",<br>&emsp;　DATUM["M_poraloko",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(IGN)",6378249.2,293.466021293627,<br>&emsp;　　　AUTHORITY["EPSG","7011"]],<br>&emsp;　　AUTHORITY["EPSG","6266"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4266"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=clrk80ign +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4267</td>
      <td><strong>名称</strong><br>&emsp;NAD27<br><strong>WKT</strong><br>&emsp;GEOGCS["NAD27",<br>&emsp;　DATUM["North_American_Datum_1927",<br>&emsp;　　SPHEROID["Clarke&emsp;1866",6378206.4,294.978698213898,<br>&emsp;　　　AUTHORITY["EPSG","7008"]],<br>&emsp;　　AUTHORITY["EPSG","6267"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4267"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +datum=NAD27 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4268</td>
      <td><strong>名称</strong><br>&emsp;NAD27<br><strong>WKT</strong><br>&emsp;GEOGCS["NAD27",<br>&emsp;　DATUM["North_American_Datum_1927",<br>&emsp;　　SPHEROID["Clarke&emsp;1866",6378206.4,294.978698213898,<br>&emsp;　　　AUTHORITY["EPSG","7008"]],<br>&emsp;　　AUTHORITY["EPSG","6267"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4267"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +datum=NAD27 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4269</td>
      <td><strong>名称</strong><br>&emsp;NAD83<br><strong>WKT</strong><br>&emsp;GEOGCS["NAD83",<br>&emsp;　DATUM["North_American_Datum_1983",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","6269"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4269"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +datum=NAD83 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4270</td>
      <td><strong>名称</strong><br>&emsp;Nahrwan 1967<br><strong>WKT</strong><br>&emsp;GEOGCS["Nahrwan&emsp;1967",<br>&emsp;　DATUM["Nahrwan_1967",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(RGS)",6378249.145,293.465,<br>&emsp;　　　AUTHORITY["EPSG","7012"]],<br>&emsp;　　AUTHORITY["EPSG","6270"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4270"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378249.145 +rf=293.465 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4271</td>
      <td><strong>名称</strong><br>&emsp;Naparima 1972<br><strong>WKT</strong><br>&emsp;GEOGCS["Naparima&emsp;1972",<br>&emsp;　DATUM["Naparima_1972",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6271"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4271"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4272</td>
      <td><strong>名称</strong><br>&emsp;NZGD49<br><strong>WKT</strong><br>&emsp;GEOGCS["NZGD49",<br>&emsp;　DATUM["New_Zealand_Geodetic_Datum_1949",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6272"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4272"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4273</td>
      <td><strong>名称</strong><br>&emsp;NGO 1948<br><strong>WKT</strong><br>&emsp;GEOGCS["NGO&emsp;1948",<br>&emsp;　DATUM["NGO_1948",<br>&emsp;　　SPHEROID["Bessel&emsp;Modified",6377492.018,299.1528128,<br>&emsp;　　　AUTHORITY["EPSG","7005"]],<br>&emsp;　　AUTHORITY["EPSG","6273"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4273"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6377492.018 +rf=299.1528128 +towgs84=278.3,93,474.5,7.889,0.05,-6.61,6.21 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4274</td>
      <td><strong>名称</strong><br>&emsp;Datum 73<br><strong>WKT</strong><br>&emsp;GEOGCS["Datum&emsp;73",<br>&emsp;　DATUM["Datum_73",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6274"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4274"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4275</td>
      <td><strong>名称</strong><br>&emsp;NTF<br><strong>WKT</strong><br>&emsp;GEOGCS["NTF",<br>&emsp;　DATUM["Nouvelle_Triangulation_Francaise",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(IGN)",6378249.2,293.466021293627,<br>&emsp;　　　AUTHORITY["EPSG","7011"]],<br>&emsp;　　AUTHORITY["EPSG","6275"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4275"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=clrk80ign +towgs84=-168,-60,320,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4276</td>
      <td><strong>名称</strong><br>&emsp;NSWC 9Z-2<br><strong>WKT</strong><br>&emsp;GEOGCS["NSWC&emsp;9Z-2",<br>&emsp;　DATUM["NSWC_9Z-2",<br>&emsp;　　SPHEROID["NWL&emsp;9D",6378145,298.25,<br>&emsp;　　　AUTHORITY["EPSG","7025"]],<br>&emsp;　　AUTHORITY["EPSG","6276"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4276"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=NWL9D +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4277</td>
      <td><strong>名称</strong><br>&emsp;OSGB36<br><strong>WKT</strong><br>&emsp;GEOGCS["OSGB36",<br>&emsp;　DATUM["Ordnance_Survey_of_Great_Britain_1936",<br>&emsp;　　SPHEROID["Airy&emsp;1830",6377563.396,299.3249646,<br>&emsp;　　　AUTHORITY["EPSG","7001"]],<br>&emsp;　　AUTHORITY["EPSG","6277"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4277"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=airy +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4278</td>
      <td><strong>名称</strong><br>&emsp;OSGB70<br><strong>WKT</strong><br>&emsp;GEOGCS["OSGB70",<br>&emsp;　DATUM["OSGB_1970_SN",<br>&emsp;　　SPHEROID["Airy&emsp;1830",6377563.396,299.3249646,<br>&emsp;　　　AUTHORITY["EPSG","7001"]],<br>&emsp;　　AUTHORITY["EPSG","6278"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4278"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=airy +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4279</td>
      <td><strong>名称</strong><br>&emsp;OS(SN)80<br><strong>WKT</strong><br>&emsp;GEOGCS["OS(SN)80",<br>&emsp;　DATUM["OS_SN_1980",<br>&emsp;　　SPHEROID["Airy&emsp;1830",6377563.396,299.3249646,<br>&emsp;　　　AUTHORITY["EPSG","7001"]],<br>&emsp;　　AUTHORITY["EPSG","6279"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4279"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=airy +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4280</td>
      <td><strong>名称</strong><br>&emsp;Batavia<br><strong>WKT</strong><br>&emsp;GEOGCS["Batavia",<br>&emsp;　DATUM["Batavia",<br>&emsp;　　SPHEROID["Bessel&emsp;1841",6377397.155,299.1528128,<br>&emsp;　　　AUTHORITY["EPSG","7004"]],<br>&emsp;　　AUTHORITY["EPSG","6211"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4211"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=bessel +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4281</td>
      <td><strong>名称</strong><br>&emsp;Palestine 1923<br><strong>WKT</strong><br>&emsp;GEOGCS["Palestine&emsp;1923",<br>&emsp;　DATUM["Palestine_1923",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(Benoit)",6378300.789,293.466315538981,<br>&emsp;　　　AUTHORITY["EPSG","7010"]],<br>&emsp;　　AUTHORITY["EPSG","6281"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4281"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378300.789 +rf=293.466315538981 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4282</td>
      <td><strong>名称</strong><br>&emsp;Pointe Noire<br><strong>WKT</strong><br>&emsp;GEOGCS["Pointe&emsp;Noire",<br>&emsp;　DATUM["Congo_1960_Pointe_Noire",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(IGN)",6378249.2,293.466021293627,<br>&emsp;　　　AUTHORITY["EPSG","7011"]],<br>&emsp;　　AUTHORITY["EPSG","6282"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4282"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=clrk80ign +towgs84=-148,51,-291,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4283</td>
      <td><strong>名称</strong><br>&emsp;GDA94<br><strong>WKT</strong><br>&emsp;GEOGCS["GDA94",<br>&emsp;　DATUM["Geocentric_Datum_of_Australia_1994",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","6283"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4283"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4284</td>
      <td><strong>名称</strong><br>&emsp;Pulkovo 1942<br><strong>WKT</strong><br>&emsp;GEOGCS["Pulkovo&emsp;1942",<br>&emsp;　DATUM["Pulkovo_1942",<br>&emsp;　　SPHEROID["Krassowsky&emsp;1940",6378245,298.3,<br>&emsp;　　　AUTHORITY["EPSG","7024"]],<br>&emsp;　　AUTHORITY["EPSG","6284"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4284"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=krass +towgs84=25,-141,-78.5,0,0.35,0.736,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4285</td>
      <td><strong>名称</strong><br>&emsp;Qatar 1974<br><strong>WKT</strong><br>&emsp;GEOGCS["Qatar&emsp;1974",<br>&emsp;　DATUM["Qatar_1974",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6285"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4285"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4286</td>
      <td><strong>名称</strong><br>&emsp;Qatar 1948<br><strong>WKT</strong><br>&emsp;GEOGCS["Qatar&emsp;1948",<br>&emsp;　DATUM["Qatar_1948",<br>&emsp;　　SPHEROID["Helmert&emsp;1906",6378200,298.3,<br>&emsp;　　　AUTHORITY["EPSG","7020"]],<br>&emsp;　　AUTHORITY["EPSG","6286"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4286"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=helmert +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4287</td>
      <td><strong>名称</strong><br>&emsp;Qornoq 1927<br><strong>WKT</strong><br>&emsp;GEOGCS["Qornoq&emsp;1927",<br>&emsp;　DATUM["Qornoq_1927",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6194"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4194"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4288</td>
      <td><strong>名称</strong><br>&emsp;Loma Quintana<br><strong>WKT</strong><br>&emsp;GEOGCS["Loma&emsp;Quintana",<br>&emsp;　DATUM["Loma_Quintana",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6288"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4288"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4289</td>
      <td><strong>名称</strong><br>&emsp;Amersfoort<br><strong>WKT</strong><br>&emsp;GEOGCS["Amersfoort",<br>&emsp;　DATUM["Amersfoort",<br>&emsp;　　SPHEROID["Bessel&emsp;1841",6377397.155,299.1528128,<br>&emsp;　　　AUTHORITY["EPSG","7004"]],<br>&emsp;　　AUTHORITY["EPSG","6289"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4289"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=bessel +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4291</td>
      <td><strong>名称</strong><br>&emsp;SAD69<br><strong>WKT</strong><br>&emsp;GEOGCS["SAD69",<br>&emsp;　DATUM["South_American_Datum_1969",<br>&emsp;　　SPHEROID["GRS&emsp;1967&emsp;Modified",6378160,298.25,<br>&emsp;　　　AUTHORITY["EPSG","7050"]],<br>&emsp;　　AUTHORITY["EPSG","6618"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4618"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=aust_SA +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4292</td>
      <td><strong>名称</strong><br>&emsp;Sapper Hill 1943<br><strong>WKT</strong><br>&emsp;GEOGCS["Sapper&emsp;Hill&emsp;1943",<br>&emsp;　DATUM["Sapper_Hill_1943",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6292"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4292"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4293</td>
      <td><strong>名称</strong><br>&emsp;Schwarzeck<br><strong>WKT</strong><br>&emsp;GEOGCS["Schwarzeck",<br>&emsp;　DATUM["Schwarzeck",<br>&emsp;　　SPHEROID["Bessel&emsp;Namibia&emsp;(GLM)",6377483.86528042,299.1528128,<br>&emsp;　　　AUTHORITY["EPSG","7046"]],<br>&emsp;　　AUTHORITY["EPSG","6293"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4293"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=bess_nam +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4294</td>
      <td><strong>名称</strong><br>&emsp;Segara<br><strong>WKT</strong><br>&emsp;GEOGCS["Segara",<br>&emsp;　DATUM["Gunung_Segara",<br>&emsp;　　SPHEROID["Bessel&emsp;1841",6377397.155,299.1528128,<br>&emsp;　　　AUTHORITY["EPSG","7004"]],<br>&emsp;　　AUTHORITY["EPSG","6613"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4613"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=bessel +towgs84=-403,684,41,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4295</td>
      <td><strong>名称</strong><br>&emsp;Serindung<br><strong>WKT</strong><br>&emsp;GEOGCS["Serindung",<br>&emsp;　DATUM["Serindung",<br>&emsp;　　SPHEROID["Bessel&emsp;1841",6377397.155,299.1528128,<br>&emsp;　　　AUTHORITY["EPSG","7004"]],<br>&emsp;　　AUTHORITY["EPSG","6295"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4295"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=bessel +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4296</td>
      <td><strong>名称</strong><br>&emsp;Adindan<br><strong>WKT</strong><br>&emsp;GEOGCS["Adindan",<br>&emsp;　DATUM["Adindan",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(RGS)",6378249.145,293.465,<br>&emsp;　　　AUTHORITY["EPSG","7012"]],<br>&emsp;　　AUTHORITY["EPSG","6201"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4201"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378249.145 +rf=293.465 +towgs84=-166,-15,204,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4297</td>
      <td><strong>名称</strong><br>&emsp;Tananarive<br><strong>WKT</strong><br>&emsp;GEOGCS["Tananarive",<br>&emsp;　DATUM["Tananarive_1925",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6297"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4297"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4298</td>
      <td><strong>名称</strong><br>&emsp;Timbalai 1948<br><strong>WKT</strong><br>&emsp;GEOGCS["Timbalai&emsp;1948",<br>&emsp;　DATUM["Timbalai_1948",<br>&emsp;　　SPHEROID["Everest&emsp;1830&emsp;(1967&emsp;Definition)",6377298.556,300.8017,<br>&emsp;　　　AUTHORITY["EPSG","7016"]],<br>&emsp;　　AUTHORITY["EPSG","6298"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4298"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=evrstSS +towgs84=-679,669,-48,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4299</td>
      <td><strong>名称</strong><br>&emsp;TM65<br><strong>WKT</strong><br>&emsp;GEOGCS["TM65",<br>&emsp;　DATUM["TM65",<br>&emsp;　　SPHEROID["Airy&emsp;Modified&emsp;1849",6377340.189,299.3249646,<br>&emsp;　　　AUTHORITY["EPSG","7002"]],<br>&emsp;　　AUTHORITY["EPSG","6299"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4299"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6377340.189 +rf=299.3249646 +towgs84=482.5,-130.6,564.6,-1.042,-0.214,-0.631,8.15 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4300</td>
      <td><strong>名称</strong><br>&emsp;TM75<br><strong>WKT</strong><br>&emsp;GEOGCS["TM75",<br>&emsp;　DATUM["Geodetic_Datum_of_1965",<br>&emsp;　　SPHEROID["Airy&emsp;Modified&emsp;1849",6377340.189,299.3249646,<br>&emsp;　　　AUTHORITY["EPSG","7002"]],<br>&emsp;　　AUTHORITY["EPSG","6300"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4300"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6377340.189 +rf=299.3249646 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4301</td>
      <td><strong>名称</strong><br>&emsp;Tokyo<br><strong>WKT</strong><br>&emsp;GEOGCS["Tokyo",<br>&emsp;　DATUM["Tokyo",<br>&emsp;　　SPHEROID["Bessel&emsp;1841",6377397.155,299.1528128,<br>&emsp;　　　AUTHORITY["EPSG","7004"]],<br>&emsp;　　AUTHORITY["EPSG","6301"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4301"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=bessel +towgs84=-146.414,507.337,680.507,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4302</td>
      <td><strong>名称</strong><br>&emsp;Trinidad 1903<br><strong>WKT</strong><br>&emsp;GEOGCS["Trinidad&emsp;1903",<br>&emsp;　DATUM["Trinidad_1903",<br>&emsp;　　SPHEROID["Clarke&emsp;1858",6378293.64520876,294.260676369261,<br>&emsp;　　　AUTHORITY["EPSG","7007"]],<br>&emsp;　　AUTHORITY["EPSG","6302"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4302"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378293.64520876 +rf=294.260676369261 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4303</td>
      <td><strong>名称</strong><br>&emsp;TC(1948)<br><strong>WKT</strong><br>&emsp;GEOGCS["TC(1948)",<br>&emsp;　DATUM["Trucial_Coast_1948",<br>&emsp;　　SPHEROID["Helmert&emsp;1906",6378200,298.3,<br>&emsp;　　　AUTHORITY["EPSG","7020"]],<br>&emsp;　　AUTHORITY["EPSG","6303"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4303"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=helmert +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4304</td>
      <td><strong>名称</strong><br>&emsp;Voirol 1875<br><strong>WKT</strong><br>&emsp;GEOGCS["Voirol&emsp;1875",<br>&emsp;　DATUM["Voirol_1875",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(IGN)",6378249.2,293.466021293627,<br>&emsp;　　　AUTHORITY["EPSG","7011"]],<br>&emsp;　　AUTHORITY["EPSG","6304"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4304"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=clrk80ign +towgs84=-73,-247,227,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4306</td>
      <td><strong>名称</strong><br>&emsp;Bern 1938<br><strong>WKT</strong><br>&emsp;GEOGCS["Bern&emsp;1938",<br>&emsp;　DATUM["Bern_1938",<br>&emsp;　　SPHEROID["Bessel&emsp;1841",6377397.155,299.1528128,<br>&emsp;　　　AUTHORITY["EPSG","7004"]],<br>&emsp;　　AUTHORITY["EPSG","6306"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4306"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=bessel +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4307</td>
      <td><strong>名称</strong><br>&emsp;Nord Sahara 1959<br><strong>WKT</strong><br>&emsp;GEOGCS["Nord&emsp;Sahara&emsp;1959",<br>&emsp;　DATUM["Nord_Sahara_1959",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(RGS)",6378249.145,293.465,<br>&emsp;　　　AUTHORITY["EPSG","7012"]],<br>&emsp;　　AUTHORITY["EPSG","6307"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4307"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378249.145 +rf=293.465 +towgs84=-209.3622,-87.8162,404.6198,0.0046,3.4784,0.5805,-1.4547 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4308</td>
      <td><strong>名称</strong><br>&emsp;RT38<br><strong>WKT</strong><br>&emsp;GEOGCS["RT38",<br>&emsp;　DATUM["Stockholm_1938",<br>&emsp;　　SPHEROID["Bessel&emsp;1841",6377397.155,299.1528128,<br>&emsp;　　　AUTHORITY["EPSG","7004"]],<br>&emsp;　　AUTHORITY["EPSG","6308"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4308"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=bessel +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4309</td>
      <td><strong>名称</strong><br>&emsp;Yacare<br><strong>WKT</strong><br>&emsp;GEOGCS["Yacare",<br>&emsp;　DATUM["Yacare",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6309"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4309"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4310</td>
      <td><strong>名称</strong><br>&emsp;Yoff<br><strong>WKT</strong><br>&emsp;GEOGCS["Yoff",<br>&emsp;　DATUM["Yoff",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(IGN)",6378249.2,293.466021293627,<br>&emsp;　　　AUTHORITY["EPSG","7011"]],<br>&emsp;　　AUTHORITY["EPSG","6310"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4310"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=clrk80ign +towgs84=-30,190,89,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4311</td>
      <td><strong>名称</strong><br>&emsp;Zanderij<br><strong>WKT</strong><br>&emsp;GEOGCS["Zanderij",<br>&emsp;　DATUM["Zanderij",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6311"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4311"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=-265,120,-358,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4312</td>
      <td><strong>名称</strong><br>&emsp;MGI<br><strong>WKT</strong><br>&emsp;GEOGCS["MGI",<br>&emsp;　DATUM["Militar-Geographische_Institut",<br>&emsp;　　SPHEROID["Bessel&emsp;1841",6377397.155,299.1528128,<br>&emsp;　　　AUTHORITY["EPSG","7004"]],<br>&emsp;　　AUTHORITY["EPSG","6312"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4312"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=bessel +towgs84=577.326,90.129,463.919,5.137,1.474,5.297,2.4232 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4313</td>
      <td><strong>名称</strong><br>&emsp;BD72<br><strong>WKT</strong><br>&emsp;GEOGCS["BD72",<br>&emsp;　DATUM["Reseau_National_Belge_1972",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6313"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4313"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4314</td>
      <td><strong>名称</strong><br>&emsp;DHDN<br><strong>WKT</strong><br>&emsp;GEOGCS["DHDN",<br>&emsp;　DATUM["Deutsches_Hauptdreiecksnetz",<br>&emsp;　　SPHEROID["Bessel&emsp;1841",6377397.155,299.1528128,<br>&emsp;　　　AUTHORITY["EPSG","7004"]],<br>&emsp;　　AUTHORITY["EPSG","6314"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4314"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=bessel +towgs84=598.1,73.7,418.2,0.202,0.045,-2.455,6.7 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4315</td>
      <td><strong>名称</strong><br>&emsp;Conakry 1905<br><strong>WKT</strong><br>&emsp;GEOGCS["Conakry&emsp;1905",<br>&emsp;　DATUM["Conakry_1905",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(IGN)",6378249.2,293.466021293627,<br>&emsp;　　　AUTHORITY["EPSG","7011"]],<br>&emsp;　　AUTHORITY["EPSG","6315"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4315"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=clrk80ign +towgs84=-23,259,-9,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4316</td>
      <td><strong>名称</strong><br>&emsp;Dealul Piscului 1930<br><strong>WKT</strong><br>&emsp;GEOGCS["Dealul&emsp;Piscului&emsp;1930",<br>&emsp;　DATUM["Dealul_Piscului_1930",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6316"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4316"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=103.25,-100.4,-307.19,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4317</td>
      <td><strong>名称</strong><br>&emsp;Pulkovo 1942(58)<br><strong>WKT</strong><br>&emsp;GEOGCS["Pulkovo&emsp;1942(58)",<br>&emsp;　DATUM["Pulkovo_1942_58",<br>&emsp;　　SPHEROID["Krassowsky&emsp;1940",6378245,298.3,<br>&emsp;　　　AUTHORITY["EPSG","7024"]],<br>&emsp;　　AUTHORITY["EPSG","6179"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4179"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=krass +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4318</td>
      <td><strong>名称</strong><br>&emsp;NGN<br><strong>WKT</strong><br>&emsp;GEOGCS["NGN",<br>&emsp;　DATUM["National_Geodetic_Network",<br>&emsp;　　SPHEROID["WGS&emsp;84",6378137,298.257223563,<br>&emsp;　　　AUTHORITY["EPSG","7030"]],<br>&emsp;　　AUTHORITY["EPSG","6318"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4318"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=WGS84 +towgs84=-3.2,-5.7,2.8,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4319</td>
      <td><strong>名称</strong><br>&emsp;KUDAMS<br><strong>WKT</strong><br>&emsp;GEOGCS["KUDAMS",<br>&emsp;　DATUM["Kuwait_Utility",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","6319"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4319"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4322</td>
      <td><strong>名称</strong><br>&emsp;WGS 72<br><strong>WKT</strong><br>&emsp;GEOGCS["WGS&emsp;72",<br>&emsp;　DATUM["World_Geodetic_System_1972",<br>&emsp;　　SPHEROID["WGS&emsp;72",6378135,298.26,<br>&emsp;　　　AUTHORITY["EPSG","7043"]],<br>&emsp;　　AUTHORITY["EPSG","6322"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4322"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=WGS72 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4324</td>
      <td><strong>名称</strong><br>&emsp;WGS 72BE<br><strong>WKT</strong><br>&emsp;GEOGCS["WGS&emsp;72BE",<br>&emsp;　DATUM["WGS_72_Transit_Broadcast_Ephemeris",<br>&emsp;　　SPHEROID["WGS&emsp;72",6378135,298.26,<br>&emsp;　　　AUTHORITY["EPSG","7043"]],<br>&emsp;　　AUTHORITY["EPSG","6324"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4324"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4326</td>
      <td><strong>名称</strong><br>&emsp;WGS 84<br><strong>WKT</strong><br>&emsp;GEOGCS["WGS&emsp;84",<br>&emsp;　DATUM["WGS_1984",<br>&emsp;　　SPHEROID["WGS&emsp;84",6378137,298.257223563,<br>&emsp;　　　AUTHORITY["EPSG","7030"]],<br>&emsp;　　AUTHORITY["EPSG","6326"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4326"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +datum=WGS84 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4463</td>
      <td><strong>名称</strong><br>&emsp;RGSPM06<br><strong>WKT</strong><br>&emsp;GEOGCS["RGSPM06",<br>&emsp;　DATUM["Reseau_Geodesique_de_Saint_Pierre_et_Miquelon_2006",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","1038"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4463"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4470</td>
      <td><strong>名称</strong><br>&emsp;RGM04<br><strong>WKT</strong><br>&emsp;GEOGCS["RGM04",<br>&emsp;　DATUM["Reseau_Geodesique_de_Mayotte_2004",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","1036"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4470"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4475</td>
      <td><strong>名称</strong><br>&emsp;Cadastre 1997<br><strong>WKT</strong><br>&emsp;GEOGCS["Cadastre&emsp;1997",<br>&emsp;　DATUM["CADASTRE&emsp;1997",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["IGNF","REG7010001"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4475"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=-381.788,-57.501,-256.673,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4483</td>
      <td><strong>名称</strong><br>&emsp;Mexico ITRF92<br><strong>WKT</strong><br>&emsp;GEOGCS["Mexico&emsp;ITRF92",<br>&emsp;　DATUM["Mexico_ITRF92",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","1042"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4483"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4490</td>
      <td><strong>名称</strong><br>&emsp;China Geodetic Coordinate System 2000<br><strong>WKT</strong><br>&emsp;GEOGCS["China&emsp;Geodetic&emsp;Coordinate&emsp;System&emsp;2000",<br>&emsp;　DATUM["China_2000",<br>&emsp;　　SPHEROID["CGCS2000",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","1024"]],<br>&emsp;　　AUTHORITY["EPSG","1043"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4490"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4555</td>
      <td><strong>名称</strong><br>&emsp;New Beijing<br><strong>WKT</strong><br>&emsp;GEOGCS["New&emsp;Beijing",<br>&emsp;　DATUM["New_Beijing",<br>&emsp;　　SPHEROID["Krassowsky&emsp;1940",6378245,298.3,<br>&emsp;　　　AUTHORITY["EPSG","7024"]],<br>&emsp;　　AUTHORITY["EPSG","1045"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4555"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=krass +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4558</td>
      <td><strong>名称</strong><br>&emsp;RRAF 1991<br><strong>WKT</strong><br>&emsp;GEOGCS["RRAF&emsp;1991",<br>&emsp;　DATUM["Reseau_de_Reference_des_Antilles_Francaises_1991",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","1047"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4558"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4600</td>
      <td><strong>名称</strong><br>&emsp;Anguilla 1957<br><strong>WKT</strong><br>&emsp;GEOGCS["Anguilla&emsp;1957",<br>&emsp;　DATUM["Anguilla_1957",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(RGS)",6378249.145,293.465,<br>&emsp;　　　AUTHORITY["EPSG","7012"]],<br>&emsp;　　AUTHORITY["EPSG","6600"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4600"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378249.145 +rf=293.465 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4601</td>
      <td><strong>名称</strong><br>&emsp;Antigua 1943<br><strong>WKT</strong><br>&emsp;GEOGCS["Antigua&emsp;1943",<br>&emsp;　DATUM["Antigua_1943",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(RGS)",6378249.145,293.465,<br>&emsp;　　　AUTHORITY["EPSG","7012"]],<br>&emsp;　　AUTHORITY["EPSG","6601"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4601"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378249.145 +rf=293.465 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4602</td>
      <td><strong>名称</strong><br>&emsp;Dominica 1945<br><strong>WKT</strong><br>&emsp;GEOGCS["Dominica&emsp;1945",<br>&emsp;　DATUM["Dominica_1945",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(RGS)",6378249.145,293.465,<br>&emsp;　　　AUTHORITY["EPSG","7012"]],<br>&emsp;　　AUTHORITY["EPSG","6602"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4602"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378249.145 +rf=293.465 +towgs84=725,685,536,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4603</td>
      <td><strong>名称</strong><br>&emsp;Grenada 1953<br><strong>WKT</strong><br>&emsp;GEOGCS["Grenada&emsp;1953",<br>&emsp;　DATUM["Grenada_1953",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(RGS)",6378249.145,293.465,<br>&emsp;　　　AUTHORITY["EPSG","7012"]],<br>&emsp;　　AUTHORITY["EPSG","6603"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4603"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378249.145 +rf=293.465 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4604</td>
      <td><strong>名称</strong><br>&emsp;Montserrat 1958<br><strong>WKT</strong><br>&emsp;GEOGCS["Montserrat&emsp;1958",<br>&emsp;　DATUM["Montserrat_1958",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(RGS)",6378249.145,293.465,<br>&emsp;　　　AUTHORITY["EPSG","7012"]],<br>&emsp;　　AUTHORITY["EPSG","6604"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4604"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378249.145 +rf=293.465 +towgs84=174,359,365,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4605</td>
      <td><strong>名称</strong><br>&emsp;St. Kitts 1955<br><strong>WKT</strong><br>&emsp;GEOGCS["St.&emsp;Kitts&emsp;1955",<br>&emsp;　DATUM["St_Kitts_1955",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(RGS)",6378249.145,293.465,<br>&emsp;　　　AUTHORITY["EPSG","7012"]],<br>&emsp;　　AUTHORITY["EPSG","6605"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4605"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378249.145 +rf=293.465 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4606</td>
      <td><strong>名称</strong><br>&emsp;St. Lucia 1955<br><strong>WKT</strong><br>&emsp;GEOGCS["St.&emsp;Lucia&emsp;1955",<br>&emsp;　DATUM["St_Lucia_1955",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(RGS)",6378249.145,293.465,<br>&emsp;　　　AUTHORITY["EPSG","7012"]],<br>&emsp;　　AUTHORITY["EPSG","6606"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4606"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378249.145 +rf=293.465 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4607</td>
      <td><strong>名称</strong><br>&emsp;St. Vincent 1945<br><strong>WKT</strong><br>&emsp;GEOGCS["St.&emsp;Vincent&emsp;1945",<br>&emsp;　DATUM["St_Vincent_1945",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(RGS)",6378249.145,293.465,<br>&emsp;　　　AUTHORITY["EPSG","7012"]],<br>&emsp;　　AUTHORITY["EPSG","6607"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4607"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378249.145 +rf=293.465 +towgs84=195.671,332.517,274.607,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4608</td>
      <td><strong>名称</strong><br>&emsp;NAD27(76)<br><strong>WKT</strong><br>&emsp;GEOGCS["NAD27(76)",<br>&emsp;　DATUM["North_American_Datum_1927_1976",<br>&emsp;　　SPHEROID["Clarke&emsp;1866",6378206.4,294.978698213898,<br>&emsp;　　　AUTHORITY["EPSG","7008"]],<br>&emsp;　　AUTHORITY["EPSG","6608"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4608"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=clrk66 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4609</td>
      <td><strong>名称</strong><br>&emsp;NAD27(CGQ77)<br><strong>WKT</strong><br>&emsp;GEOGCS["NAD27(CGQ77)",<br>&emsp;　DATUM["North_American_Datum_1927_CGQ77",<br>&emsp;　　SPHEROID["Clarke&emsp;1866",6378206.4,294.978698213898,<br>&emsp;　　　AUTHORITY["EPSG","7008"]],<br>&emsp;　　AUTHORITY["EPSG","6609"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4609"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=clrk66 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4610</td>
      <td><strong>名称</strong><br>&emsp;Xian 1980<br><strong>WKT</strong><br>&emsp;GEOGCS["Xian&emsp;1980",<br>&emsp;　DATUM["Xian_1980",<br>&emsp;　　SPHEROID["IAG&emsp;1975",6378140,298.257,<br>&emsp;　　　AUTHORITY["EPSG","7049"]],<br>&emsp;　　AUTHORITY["EPSG","6610"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4610"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=IAU76 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4611</td>
      <td><strong>名称</strong><br>&emsp;Hong Kong 1980<br><strong>WKT</strong><br>&emsp;GEOGCS["Hong&emsp;Kong&emsp;1980",<br>&emsp;　DATUM["Hong_Kong_1980",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6611"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4611"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=-162.619,-276.959,-161.764,0.067753,-2.243649,-1.158827,-1.094246 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4612</td>
      <td><strong>名称</strong><br>&emsp;JGD2000<br><strong>WKT</strong><br>&emsp;GEOGCS["JGD2000",<br>&emsp;　DATUM["Japanese_Geodetic_Datum_2000",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","6612"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4612"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4613</td>
      <td><strong>名称</strong><br>&emsp;Segara<br><strong>WKT</strong><br>&emsp;GEOGCS["Segara",<br>&emsp;　DATUM["Gunung_Segara",<br>&emsp;　　SPHEROID["Bessel&emsp;1841",6377397.155,299.1528128,<br>&emsp;　　　AUTHORITY["EPSG","7004"]],<br>&emsp;　　AUTHORITY["EPSG","6613"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4613"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=bessel +towgs84=-403,684,41,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4614</td>
      <td><strong>名称</strong><br>&emsp;QND95<br><strong>WKT</strong><br>&emsp;GEOGCS["QND95",<br>&emsp;　DATUM["Qatar_National_Datum_1995",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6614"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4614"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=-119.4248,-303.65872,-11.00061,1.164298,0.174458,1.096259,3.657065 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4615</td>
      <td><strong>名称</strong><br>&emsp;Porto Santo<br><strong>WKT</strong><br>&emsp;GEOGCS["Porto&emsp;Santo",<br>&emsp;　DATUM["Porto_Santo_1936",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6615"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4615"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=-499,-249,314,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4616</td>
      <td><strong>名称</strong><br>&emsp;Selvagem Grande<br><strong>WKT</strong><br>&emsp;GEOGCS["Selvagem&emsp;Grande",<br>&emsp;　DATUM["Selvagem_Grande",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6616"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4616"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=-289,-124,60,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4617</td>
      <td><strong>名称</strong><br>&emsp;NAD83(CSRS)<br><strong>WKT</strong><br>&emsp;GEOGCS["NAD83(CSRS)",<br>&emsp;　DATUM["NAD83_Canadian_Spatial_Reference_System",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","6140"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4617"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4618</td>
      <td><strong>名称</strong><br>&emsp;SAD69<br><strong>WKT</strong><br>&emsp;GEOGCS["SAD69",<br>&emsp;　DATUM["South_American_Datum_1969",<br>&emsp;　　SPHEROID["GRS&emsp;1967&emsp;Modified",6378160,298.25,<br>&emsp;　　　AUTHORITY["EPSG","7050"]],<br>&emsp;　　AUTHORITY["EPSG","6618"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4618"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=aust_SA +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4619</td>
      <td><strong>名称</strong><br>&emsp;SWEREF99<br><strong>WKT</strong><br>&emsp;GEOGCS["SWEREF99",<br>&emsp;　DATUM["SWEREF99",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","6619"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4619"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4620</td>
      <td><strong>名称</strong><br>&emsp;Point 58<br><strong>WKT</strong><br>&emsp;GEOGCS["Point&emsp;58",<br>&emsp;　DATUM["Point_58",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(RGS)",6378249.145,293.465,<br>&emsp;　　　AUTHORITY["EPSG","7012"]],<br>&emsp;　　AUTHORITY["EPSG","6620"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4620"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378249.145 +rf=293.465 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4621</td>
      <td><strong>名称</strong><br>&emsp;Fort Marigot<br><strong>WKT</strong><br>&emsp;GEOGCS["Fort&emsp;Marigot",<br>&emsp;　DATUM["Fort_Marigot",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6621"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4621"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=137,248,-430,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4622</td>
      <td><strong>名称</strong><br>&emsp;Guadeloupe 1948<br><strong>WKT</strong><br>&emsp;GEOGCS["Guadeloupe&emsp;1948",<br>&emsp;　DATUM["Guadeloupe_1948",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6622"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4622"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4623</td>
      <td><strong>名称</strong><br>&emsp;CSG67<br><strong>WKT</strong><br>&emsp;GEOGCS["CSG67",<br>&emsp;　DATUM["Centre_Spatial_Guyanais_1967",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6623"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4623"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=-186,230,110,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4624</td>
      <td><strong>名称</strong><br>&emsp;RGFG95<br><strong>WKT</strong><br>&emsp;GEOGCS["RGFG95",<br>&emsp;　DATUM["Reseau_Geodesique_Francais_Guyane_1995",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","6624"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4624"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4625</td>
      <td><strong>名称</strong><br>&emsp;Martinique 1938<br><strong>WKT</strong><br>&emsp;GEOGCS["Martinique&emsp;1938",<br>&emsp;　DATUM["Martinique_1938",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6625"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4625"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4626</td>
      <td><strong>名称</strong><br>&emsp;Reunion 1947<br><strong>WKT</strong><br>&emsp;GEOGCS["Reunion&emsp;1947",<br>&emsp;　DATUM["Reunion_1947",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6626"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4626"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=94,-948,-1262,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4627</td>
      <td><strong>名称</strong><br>&emsp;RGR92<br><strong>WKT</strong><br>&emsp;GEOGCS["RGR92",<br>&emsp;　DATUM["Reseau_Geodesique_de_la_Reunion_1992",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","6627"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4627"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4628</td>
      <td><strong>名称</strong><br>&emsp;Tahiti 52<br><strong>WKT</strong><br>&emsp;GEOGCS["Tahiti&emsp;52",<br>&emsp;　DATUM["Tahiti_52",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6628"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4628"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=162,117,154,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4629</td>
      <td><strong>名称</strong><br>&emsp;Tahaa 54<br><strong>WKT</strong><br>&emsp;GEOGCS["Tahaa&emsp;54",<br>&emsp;　DATUM["Tahaa_54",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6629"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4629"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4630</td>
      <td><strong>名称</strong><br>&emsp;IGN72 Nuku Hiva<br><strong>WKT</strong><br>&emsp;GEOGCS["IGN72&emsp;Nuku&emsp;Hiva",<br>&emsp;　DATUM["IGN72_Nuku_Hiva",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6630"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4630"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=84,274,65,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4631</td>
      <td><strong>名称</strong><br>&emsp;IGN 1962 Kerguelen<br><strong>WKT</strong><br>&emsp;GEOGCS["IGN&emsp;1962&emsp;Kerguelen",<br>&emsp;　DATUM["IGN_1962_Kerguelen",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6698"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4698"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=145,-187,103,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4632</td>
      <td><strong>名称</strong><br>&emsp;Combani 1950<br><strong>WKT</strong><br>&emsp;GEOGCS["Combani&emsp;1950",<br>&emsp;　DATUM["Combani_1950",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6632"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4632"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=-382,-59,-262,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4633</td>
      <td><strong>名称</strong><br>&emsp;IGN56 Lifou<br><strong>WKT</strong><br>&emsp;GEOGCS["IGN56&emsp;Lifou",<br>&emsp;　DATUM["IGN56_Lifou",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6633"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4633"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=335.47,222.58,-230.94,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4634</td>
      <td><strong>名称</strong><br>&emsp;IGN72 Grande Terre<br><strong>WKT</strong><br>&emsp;GEOGCS["IGN72&emsp;Grande&emsp;Terre",<br>&emsp;　DATUM["IGN72_Grande_Terre",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6634"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4662"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=-11.64,-348.6,291.98,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4635</td>
      <td><strong>名称</strong><br>&emsp;ST87 Ouvea<br><strong>WKT</strong><br>&emsp;GEOGCS["ST87&emsp;Ouvea",<br>&emsp;　DATUM["ST87_Ouvea",<br>&emsp;　　SPHEROID["WGS&emsp;84",6378137,298.257223563,<br>&emsp;　　　AUTHORITY["EPSG","7030"]],<br>&emsp;　　AUTHORITY["EPSG","6750"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4750"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=WGS84 +towgs84=-56.263,16.136,-22.856,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4636</td>
      <td><strong>名称</strong><br>&emsp;Petrels 1972<br><strong>WKT</strong><br>&emsp;GEOGCS["Petrels&emsp;1972",<br>&emsp;　DATUM["Petrels_1972",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6636"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4636"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=365,194,166,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4637</td>
      <td><strong>名称</strong><br>&emsp;Perroud 1950<br><strong>WKT</strong><br>&emsp;GEOGCS["Perroud&emsp;1950",<br>&emsp;　DATUM["Pointe_Geologie_Perroud_1950",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6637"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4637"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=325,154,172,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4638</td>
      <td><strong>名称</strong><br>&emsp;Saint Pierre et Miquelon 1950<br><strong>WKT</strong><br>&emsp;GEOGCS["Saint&emsp;Pierre&emsp;et&emsp;Miquelon&emsp;1950",<br>&emsp;　DATUM["Saint_Pierre_et_Miquelon_1950",<br>&emsp;　　SPHEROID["Clarke&emsp;1866",6378206.4,294.978698213898,<br>&emsp;　　　AUTHORITY["EPSG","7008"]],<br>&emsp;　　AUTHORITY["EPSG","6638"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4638"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=clrk66 +towgs84=11.363,424.148,373.13,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4639</td>
      <td><strong>名称</strong><br>&emsp;MOP78<br><strong>WKT</strong><br>&emsp;GEOGCS["MOP78",<br>&emsp;　DATUM["MOP78",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6639"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4639"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=253,-132,-127,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4640</td>
      <td><strong>名称</strong><br>&emsp;RRAF 1991<br><strong>WKT</strong><br>&emsp;GEOGCS["RRAF&emsp;1991",<br>&emsp;　DATUM["Reseau_de_Reference_des_Antilles_Francaises_1991",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","1047"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4558"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4641</td>
      <td><strong>名称</strong><br>&emsp;IGN53 Mare<br><strong>WKT</strong><br>&emsp;GEOGCS["IGN53&emsp;Mare",<br>&emsp;　DATUM["IGN53_Mare",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6641"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4641"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=287.58,177.78,-135.41,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4642</td>
      <td><strong>名称</strong><br>&emsp;ST84 Ile des Pins<br><strong>WKT</strong><br>&emsp;GEOGCS["ST84&emsp;Ile&emsp;des&emsp;Pins",<br>&emsp;　DATUM["ST84_Ile_des_Pins",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6642"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4642"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=-13,-348,292,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4643</td>
      <td><strong>名称</strong><br>&emsp;ST71 Belep<br><strong>WKT</strong><br>&emsp;GEOGCS["ST71&emsp;Belep",<br>&emsp;　DATUM["ST71_Belep",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6643"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4643"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=-480.26,-438.32,-643.429,16.3119,20.1721,-4.0349,-111.7002 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4644</td>
      <td><strong>名称</strong><br>&emsp;NEA74 Noumea<br><strong>WKT</strong><br>&emsp;GEOGCS["NEA74&emsp;Noumea",<br>&emsp;　DATUM["NEA74_Noumea",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6644"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4644"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=-10.18,-350.43,291.37,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4645</td>
      <td><strong>名称</strong><br>&emsp;RGNC91-93<br><strong>WKT</strong><br>&emsp;GEOGCS["RGNC91-93",<br>&emsp;　DATUM["Reseau_Geodesique_de_Nouvelle_Caledonie_91-93",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","6749"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4749"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4646</td>
      <td><strong>名称</strong><br>&emsp;Grand Comoros<br><strong>WKT</strong><br>&emsp;GEOGCS["Grand&emsp;Comoros",<br>&emsp;　DATUM["Grand_Comoros",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6646"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4646"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=-963,510,-359,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4657</td>
      <td><strong>名称</strong><br>&emsp;Reykjavik 1900<br><strong>WKT</strong><br>&emsp;GEOGCS["Reykjavik&emsp;1900",<br>&emsp;　DATUM["Reykjavik_1900",<br>&emsp;　　SPHEROID["Danish&emsp;1876",6377019.27,300,<br>&emsp;　　　AUTHORITY["EPSG","7051"]],<br>&emsp;　　AUTHORITY["EPSG","6657"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4657"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6377019.27 +rf=300 +towgs84=-28,199,5,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4658</td>
      <td><strong>名称</strong><br>&emsp;Hjorsey 1955<br><strong>WKT</strong><br>&emsp;GEOGCS["Hjorsey&emsp;1955",<br>&emsp;　DATUM["Hjorsey_1955",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6658"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4658"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=-73,47,-83,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4659</td>
      <td><strong>名称</strong><br>&emsp;ISN93<br><strong>WKT</strong><br>&emsp;GEOGCS["ISN93",<br>&emsp;　DATUM["Islands_Net_1993",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","6659"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4659"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4660</td>
      <td><strong>名称</strong><br>&emsp;Helle 1954<br><strong>WKT</strong><br>&emsp;GEOGCS["Helle&emsp;1954",<br>&emsp;　DATUM["Helle_1954",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6660"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4660"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=982.6087,552.753,-540.873,6.68162662527694,-31.6114924086422,-19.8481610048168,16.805 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4661</td>
      <td><strong>名称</strong><br>&emsp;LKS92<br><strong>WKT</strong><br>&emsp;GEOGCS["LKS92",<br>&emsp;　DATUM["Latvia_1992",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","6661"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4661"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4662</td>
      <td><strong>名称</strong><br>&emsp;IGN72 Grande Terre<br><strong>WKT</strong><br>&emsp;GEOGCS["IGN72&emsp;Grande&emsp;Terre",<br>&emsp;　DATUM["IGN72_Grande_Terre",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6634"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4662"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=-11.64,-348.6,291.98,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4663</td>
      <td><strong>名称</strong><br>&emsp;Porto Santo 1995<br><strong>WKT</strong><br>&emsp;GEOGCS["Porto&emsp;Santo&emsp;1995",<br>&emsp;　DATUM["Porto_Santo_1995",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6663"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4663"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4664</td>
      <td><strong>名称</strong><br>&emsp;Azores Oriental 1995<br><strong>WKT</strong><br>&emsp;GEOGCS["Azores&emsp;Oriental&emsp;1995",<br>&emsp;　DATUM["Azores_Oriental_Islands_1995",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6664"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4664"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4665</td>
      <td><strong>名称</strong><br>&emsp;Azores Central 1995<br><strong>WKT</strong><br>&emsp;GEOGCS["Azores&emsp;Central&emsp;1995",<br>&emsp;　DATUM["Azores_Central_Islands_1995",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6665"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4665"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4666</td>
      <td><strong>名称</strong><br>&emsp;Lisbon 1890<br><strong>WKT</strong><br>&emsp;GEOGCS["Lisbon&emsp;1890",<br>&emsp;　DATUM["Lisbon_1890",<br>&emsp;　　SPHEROID["Bessel&emsp;1841",6377397.155,299.1528128,<br>&emsp;　　　AUTHORITY["EPSG","7004"]],<br>&emsp;　　AUTHORITY["EPSG","6666"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4666"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=bessel +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4667</td>
      <td><strong>名称</strong><br>&emsp;IKBD-92<br><strong>WKT</strong><br>&emsp;GEOGCS["IKBD-92",<br>&emsp;　DATUM["Iraq-Kuwait_Boundary_Datum_1992",<br>&emsp;　　SPHEROID["WGS&emsp;84",6378137,298.257223563,<br>&emsp;　　　AUTHORITY["EPSG","7030"]],<br>&emsp;　　AUTHORITY["EPSG","6667"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4667"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4668</td>
      <td><strong>名称</strong><br>&emsp;ED79<br><strong>WKT</strong><br>&emsp;GEOGCS["ED79",<br>&emsp;　DATUM["European_Datum_1979",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6668"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4668"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=-86,-98,-119,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4669</td>
      <td><strong>名称</strong><br>&emsp;LKS94<br><strong>WKT</strong><br>&emsp;GEOGCS["LKS94",<br>&emsp;　DATUM["Lithuania_1994_ETRS89",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","6126"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4669"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4670</td>
      <td><strong>名称</strong><br>&emsp;IGM95<br><strong>WKT</strong><br>&emsp;GEOGCS["IGM95",<br>&emsp;　DATUM["Istituto_Geografico_Militaire_1995",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","6670"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4670"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4671</td>
      <td><strong>名称</strong><br>&emsp;Voirol 1879<br><strong>WKT</strong><br>&emsp;GEOGCS["Voirol&emsp;1879",<br>&emsp;　DATUM["Voirol_1879",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(IGN)",6378249.2,293.466021293627,<br>&emsp;　　　AUTHORITY["EPSG","7011"]],<br>&emsp;　　AUTHORITY["EPSG","6671"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4671"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=clrk80ign +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4672</td>
      <td><strong>名称</strong><br>&emsp;Chatham Islands 1971<br><strong>WKT</strong><br>&emsp;GEOGCS["Chatham&emsp;Islands&emsp;1971",<br>&emsp;　DATUM["Chatham_Islands_Datum_1971",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6672"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4672"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=175,-38,113,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4673</td>
      <td><strong>名称</strong><br>&emsp;Chatham Islands 1979<br><strong>WKT</strong><br>&emsp;GEOGCS["Chatham&emsp;Islands&emsp;1979",<br>&emsp;　DATUM["Chatham_Islands_Datum_1979",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6673"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4673"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=174.05,-25.49,112.57,0,0,0.554,0.2263 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4674</td>
      <td><strong>名称</strong><br>&emsp;SIRGAS 2000<br><strong>WKT</strong><br>&emsp;GEOGCS["SIRGAS&emsp;2000",<br>&emsp;　DATUM["Sistema_de_Referencia_Geocentrico_para_las_AmericaS_2000",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","6674"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4674"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4675</td>
      <td><strong>名称</strong><br>&emsp;Guam 1963<br><strong>WKT</strong><br>&emsp;GEOGCS["Guam&emsp;1963",<br>&emsp;　DATUM["Guam_1963",<br>&emsp;　　SPHEROID["Clarke&emsp;1866",6378206.4,294.978698213898,<br>&emsp;　　　AUTHORITY["EPSG","7008"]],<br>&emsp;　　AUTHORITY["EPSG","6675"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4675"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=clrk66 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4676</td>
      <td><strong>名称</strong><br>&emsp;Vientiane 1982<br><strong>WKT</strong><br>&emsp;GEOGCS["Vientiane&emsp;1982",<br>&emsp;　DATUM["Vientiane_1982",<br>&emsp;　　SPHEROID["Krassowsky&emsp;1940",6378245,298.3,<br>&emsp;　　　AUTHORITY["EPSG","7024"]],<br>&emsp;　　AUTHORITY["EPSG","6676"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4676"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=krass +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4677</td>
      <td><strong>名称</strong><br>&emsp;Lao 1993<br><strong>WKT</strong><br>&emsp;GEOGCS["Lao&emsp;1993",<br>&emsp;　DATUM["Lao_1993",<br>&emsp;　　SPHEROID["Krassowsky&emsp;1940",6378245,298.3,<br>&emsp;　　　AUTHORITY["EPSG","7024"]],<br>&emsp;　　AUTHORITY["EPSG","6677"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4677"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=krass +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4678</td>
      <td><strong>名称</strong><br>&emsp;Lao 1997<br><strong>WKT</strong><br>&emsp;GEOGCS["Lao&emsp;1997",<br>&emsp;　DATUM["Lao_National_Datum_1997",<br>&emsp;　　SPHEROID["Krassowsky&emsp;1940",6378245,298.3,<br>&emsp;　　　AUTHORITY["EPSG","7024"]],<br>&emsp;　　AUTHORITY["EPSG","6678"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4678"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=krass +towgs84=44.585,-131.212,-39.544,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4679</td>
      <td><strong>名称</strong><br>&emsp;Jouik 1961<br><strong>WKT</strong><br>&emsp;GEOGCS["Jouik&emsp;1961",<br>&emsp;　DATUM["Jouik_1961",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(RGS)",6378249.145,293.465,<br>&emsp;　　　AUTHORITY["EPSG","7012"]],<br>&emsp;　　AUTHORITY["EPSG","6679"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4679"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378249.145 +rf=293.465 +towgs84=-80.01,253.26,291.19,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4680</td>
      <td><strong>名称</strong><br>&emsp;Nouakchott 1965<br><strong>WKT</strong><br>&emsp;GEOGCS["Nouakchott&emsp;1965",<br>&emsp;　DATUM["Nouakchott_1965",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(RGS)",6378249.145,293.465,<br>&emsp;　　　AUTHORITY["EPSG","7012"]],<br>&emsp;　　AUTHORITY["EPSG","6680"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4680"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378249.145 +rf=293.465 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4682</td>
      <td><strong>名称</strong><br>&emsp;Gulshan 303<br><strong>WKT</strong><br>&emsp;GEOGCS["Gulshan&emsp;303",<br>&emsp;　DATUM["Gulshan_303",<br>&emsp;　　SPHEROID["Everest&emsp;1830&emsp;(1937&emsp;Adjustment)",6377276.345,300.8017,<br>&emsp;　　　AUTHORITY["EPSG","7015"]],<br>&emsp;　　AUTHORITY["EPSG","6682"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4682"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=evrst30 +towgs84=283.729,735.942,261.143,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4683</td>
      <td><strong>名称</strong><br>&emsp;PRS92<br><strong>WKT</strong><br>&emsp;GEOGCS["PRS92",<br>&emsp;　DATUM["Philippine_Reference_System_1992",<br>&emsp;　　SPHEROID["Clarke&emsp;1866",6378206.4,294.978698213898,<br>&emsp;　　　AUTHORITY["EPSG","7008"]],<br>&emsp;　　AUTHORITY["EPSG","6683"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4683"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=clrk66 +towgs84=-127.62,-67.24,-47.04,-3.068,4.903,1.578,-1.06 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4684</td>
      <td><strong>名称</strong><br>&emsp;Gan 1970<br><strong>WKT</strong><br>&emsp;GEOGCS["Gan&emsp;1970",<br>&emsp;　DATUM["Gan_1970",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6684"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4684"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=-133,-321,50,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4685</td>
      <td><strong>名称</strong><br>&emsp;Kasai 1953<br><strong>WKT</strong><br>&emsp;GEOGCS["Kasai&emsp;1953",<br>&emsp;　DATUM["Kasai_1953",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(RGS)",6378249.145,293.465,<br>&emsp;　　　AUTHORITY["EPSG","7012"]],<br>&emsp;　　AUTHORITY["EPSG","6696"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4696"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378249.145 +rf=293.465 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4686</td>
      <td><strong>名称</strong><br>&emsp;MAGNA-SIRGAS<br><strong>WKT</strong><br>&emsp;GEOGCS["MAGNA-SIRGAS",<br>&emsp;　DATUM["Marco_Geocentrico_Nacional_de_Referencia",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","6686"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4686"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4687</td>
      <td><strong>名称</strong><br>&emsp;RGPF<br><strong>WKT</strong><br>&emsp;GEOGCS["RGPF",<br>&emsp;　DATUM["Reseau_Geodesique_de_la_Polynesie_Francaise",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","6687"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4687"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4688</td>
      <td><strong>名称</strong><br>&emsp;Fatu Iva 72<br><strong>WKT</strong><br>&emsp;GEOGCS["Fatu&emsp;Iva&emsp;72",<br>&emsp;　DATUM["Fatu_Iva_72",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6688"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4688"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=347.175,1077.618,2623.677,33.9058,-70.6776,9.4013,186.0647 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4689</td>
      <td><strong>名称</strong><br>&emsp;IGN63 Hiva Oa<br><strong>WKT</strong><br>&emsp;GEOGCS["IGN63&emsp;Hiva&emsp;Oa",<br>&emsp;　DATUM["IGN63_Hiva_Oa",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6689"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4689"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4690</td>
      <td><strong>名称</strong><br>&emsp;Tahiti 79<br><strong>WKT</strong><br>&emsp;GEOGCS["Tahiti&emsp;79",<br>&emsp;　DATUM["Tahiti_79",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6690"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4690"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=221.597,152.441,176.523,2.403,1.3893,0.884,11.4648 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4691</td>
      <td><strong>名称</strong><br>&emsp;Moorea 87<br><strong>WKT</strong><br>&emsp;GEOGCS["Moorea&emsp;87",<br>&emsp;　DATUM["Moorea_87",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6691"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4691"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=218.769,150.75,176.75,3.5231,2.0037,1.288,10.9817 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4692</td>
      <td><strong>名称</strong><br>&emsp;Maupiti 83<br><strong>WKT</strong><br>&emsp;GEOGCS["Maupiti&emsp;83",<br>&emsp;　DATUM["Maupiti_83",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6692"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4692"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=217.109,86.452,23.711,0.0183,-0.0003,0.007,-0.0093 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4693</td>
      <td><strong>名称</strong><br>&emsp;Nakhl-e Ghanem<br><strong>WKT</strong><br>&emsp;GEOGCS["Nakhl-e&emsp;Ghanem",<br>&emsp;　DATUM["Nakhl-e_Ghanem",<br>&emsp;　　SPHEROID["WGS&emsp;84",6378137,298.257223563,<br>&emsp;　　　AUTHORITY["EPSG","7030"]],<br>&emsp;　　AUTHORITY["EPSG","6693"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4693"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=WGS84 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4694</td>
      <td><strong>名称</strong><br>&emsp;POSGAR 94<br><strong>WKT</strong><br>&emsp;GEOGCS["POSGAR&emsp;94",<br>&emsp;　DATUM["Posiciones_Geodesicas_Argentinas_1994",<br>&emsp;　　SPHEROID["WGS&emsp;84",6378137,298.257223563,<br>&emsp;　　　AUTHORITY["EPSG","7030"]],<br>&emsp;　　AUTHORITY["EPSG","6694"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4694"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4695</td>
      <td><strong>名称</strong><br>&emsp;Katanga 1955<br><strong>WKT</strong><br>&emsp;GEOGCS["Katanga&emsp;1955",<br>&emsp;　DATUM["Katanga_1955",<br>&emsp;　　SPHEROID["Clarke&emsp;1866",6378206.4,294.978698213898,<br>&emsp;　　　AUTHORITY["EPSG","7008"]],<br>&emsp;　　AUTHORITY["EPSG","6695"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4695"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=clrk66 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4696</td>
      <td><strong>名称</strong><br>&emsp;Kasai 1953<br><strong>WKT</strong><br>&emsp;GEOGCS["Kasai&emsp;1953",<br>&emsp;　DATUM["Kasai_1953",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(RGS)",6378249.145,293.465,<br>&emsp;　　　AUTHORITY["EPSG","7012"]],<br>&emsp;　　AUTHORITY["EPSG","6696"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4696"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378249.145 +rf=293.465 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4697</td>
      <td><strong>名称</strong><br>&emsp;IGC 1962 6th Parallel South<br><strong>WKT</strong><br>&emsp;GEOGCS["IGC&emsp;1962&emsp;6th&emsp;Parallel&emsp;South",<br>&emsp;　DATUM["IGC_1962_Arc_of_the_6th_Parallel_South",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(RGS)",6378249.145,293.465,<br>&emsp;　　　AUTHORITY["EPSG","7012"]],<br>&emsp;　　AUTHORITY["EPSG","6697"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4697"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378249.145 +rf=293.465 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4698</td>
      <td><strong>名称</strong><br>&emsp;IGN 1962 Kerguelen<br><strong>WKT</strong><br>&emsp;GEOGCS["IGN&emsp;1962&emsp;Kerguelen",<br>&emsp;　DATUM["IGN_1962_Kerguelen",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6698"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4698"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=145,-187,103,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4699</td>
      <td><strong>名称</strong><br>&emsp;Le Pouce 1934<br><strong>WKT</strong><br>&emsp;GEOGCS["Le&emsp;Pouce&emsp;1934",<br>&emsp;　DATUM["Le_Pouce_1934",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(RGS)",6378249.145,293.465,<br>&emsp;　　　AUTHORITY["EPSG","7012"]],<br>&emsp;　　AUTHORITY["EPSG","6699"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4699"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378249.145 +rf=293.465 +towgs84=-770.1,158.4,-498.2,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4700</td>
      <td><strong>名称</strong><br>&emsp;IGN Astro 1960<br><strong>WKT</strong><br>&emsp;GEOGCS["IGN&emsp;Astro&emsp;1960",<br>&emsp;　DATUM["IGN_Astro_1960",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(RGS)",6378249.145,293.465,<br>&emsp;　　　AUTHORITY["EPSG","7012"]],<br>&emsp;　　AUTHORITY["EPSG","6700"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4700"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378249.145 +rf=293.465 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4701</td>
      <td><strong>名称</strong><br>&emsp;IGCB 1955<br><strong>WKT</strong><br>&emsp;GEOGCS["IGCB&emsp;1955",<br>&emsp;　DATUM["Institut_Geographique_du_Congo_Belge_1955",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(RGS)",6378249.145,293.465,<br>&emsp;　　　AUTHORITY["EPSG","7012"]],<br>&emsp;　　AUTHORITY["EPSG","6701"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4701"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378249.145 +rf=293.465 +towgs84=-79.9,-158,-168.9,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4702</td>
      <td><strong>名称</strong><br>&emsp;Mauritania 1999<br><strong>WKT</strong><br>&emsp;GEOGCS["Mauritania&emsp;1999",<br>&emsp;　DATUM["Mauritania_1999",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","6702"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4702"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4703</td>
      <td><strong>名称</strong><br>&emsp;Mhast 1951<br><strong>WKT</strong><br>&emsp;GEOGCS["Mhast&emsp;1951",<br>&emsp;　DATUM["Missao_Hidrografico_Angola_y_Sao_Tome_1951",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(RGS)",6378249.145,293.465,<br>&emsp;　　　AUTHORITY["EPSG","7012"]],<br>&emsp;　　AUTHORITY["EPSG","6703"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4703"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378249.145 +rf=293.465 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4704</td>
      <td><strong>名称</strong><br>&emsp;Mhast (onshore)<br><strong>WKT</strong><br>&emsp;GEOGCS["Mhast&emsp;(onshore)",<br>&emsp;　DATUM["Mhast_onshore",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6704"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4704"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4705</td>
      <td><strong>名称</strong><br>&emsp;Mhast (offshore)<br><strong>WKT</strong><br>&emsp;GEOGCS["Mhast&emsp;(offshore)",<br>&emsp;　DATUM["Mhast_offshore",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6705"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4705"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4706</td>
      <td><strong>名称</strong><br>&emsp;Egypt Gulf of Suez S-650 TL<br><strong>WKT</strong><br>&emsp;GEOGCS["Egypt&emsp;Gulf&emsp;of&emsp;Suez&emsp;S-650&emsp;TL",<br>&emsp;　DATUM["Egypt_Gulf_of_Suez_S-650_TL",<br>&emsp;　　SPHEROID["Helmert&emsp;1906",6378200,298.3,<br>&emsp;　　　AUTHORITY["EPSG","7020"]],<br>&emsp;　　AUTHORITY["EPSG","6706"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4706"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=helmert +towgs84=-146.21,112.63,4.05,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4707</td>
      <td><strong>名称</strong><br>&emsp;Tern Island 1961<br><strong>WKT</strong><br>&emsp;GEOGCS["Tern&emsp;Island&emsp;1961",<br>&emsp;　DATUM["Tern_Island_1961",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6707"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4707"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=114,-116,-333,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4708</td>
      <td><strong>名称</strong><br>&emsp;Cocos Islands 1965<br><strong>WKT</strong><br>&emsp;GEOGCS["Cocos&emsp;Islands&emsp;1965",<br>&emsp;　DATUM["Cocos_Islands_1965",<br>&emsp;　　SPHEROID["Australian&emsp;National&emsp;Spheroid",6378160,298.25,<br>&emsp;　　　AUTHORITY["EPSG","7003"]],<br>&emsp;　　AUTHORITY["EPSG","6708"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4708"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=aust_SA +towgs84=-491,-22,435,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4709</td>
      <td><strong>名称</strong><br>&emsp;Iwo Jima 1945<br><strong>WKT</strong><br>&emsp;GEOGCS["Iwo&emsp;Jima&emsp;1945",<br>&emsp;　DATUM["Iwo_Jima_1945",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6709"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4709"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=145,75,-272,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4710</td>
      <td><strong>名称</strong><br>&emsp;Astro DOS 71<br><strong>WKT</strong><br>&emsp;GEOGCS["Astro&emsp;DOS&emsp;71",<br>&emsp;　DATUM["Astro_DOS_71",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6710"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4710"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4711</td>
      <td><strong>名称</strong><br>&emsp;Marcus Island 1952<br><strong>WKT</strong><br>&emsp;GEOGCS["Marcus&emsp;Island&emsp;1952",<br>&emsp;　DATUM["Marcus_Island_1952",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6711"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4711"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=124,-234,-25,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4712</td>
      <td><strong>名称</strong><br>&emsp;Ascension Island 1958<br><strong>WKT</strong><br>&emsp;GEOGCS["Ascension&emsp;Island&emsp;1958",<br>&emsp;　DATUM["Ascension_Island_1958",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6712"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4712"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=-205,107,53,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4713</td>
      <td><strong>名称</strong><br>&emsp;Ayabelle Lighthouse<br><strong>WKT</strong><br>&emsp;GEOGCS["Ayabelle&emsp;Lighthouse",<br>&emsp;　DATUM["Ayabelle_Lighthouse",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(RGS)",6378249.145,293.465,<br>&emsp;　　　AUTHORITY["EPSG","7012"]],<br>&emsp;　　AUTHORITY["EPSG","6713"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4713"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378249.145 +rf=293.465 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4714</td>
      <td><strong>名称</strong><br>&emsp;Bellevue<br><strong>WKT</strong><br>&emsp;GEOGCS["Bellevue",<br>&emsp;　DATUM["Bellevue",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6714"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4714"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=-127,-769,472,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4715</td>
      <td><strong>名称</strong><br>&emsp;Camp Area Astro<br><strong>WKT</strong><br>&emsp;GEOGCS["Camp&emsp;Area&emsp;Astro",<br>&emsp;　DATUM["Camp_Area_Astro",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6715"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4715"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=-104,-129,239,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4716</td>
      <td><strong>名称</strong><br>&emsp;Phoenix Islands 1966<br><strong>WKT</strong><br>&emsp;GEOGCS["Phoenix&emsp;Islands&emsp;1966",<br>&emsp;　DATUM["Phoenix_Islands_1966",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6716"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4716"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=298,-304,-375,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4717</td>
      <td><strong>名称</strong><br>&emsp;Cape Canaveral<br><strong>WKT</strong><br>&emsp;GEOGCS["Cape&emsp;Canaveral",<br>&emsp;　DATUM["Cape_Canaveral",<br>&emsp;　　SPHEROID["Clarke&emsp;1866",6378206.4,294.978698213898,<br>&emsp;　　　AUTHORITY["EPSG","7008"]],<br>&emsp;　　AUTHORITY["EPSG","6717"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4717"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=clrk66 +towgs84=-2,151,181,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4718</td>
      <td><strong>名称</strong><br>&emsp;Solomon 1968<br><strong>WKT</strong><br>&emsp;GEOGCS["Solomon&emsp;1968",<br>&emsp;　DATUM["Solomon_1968",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6718"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4718"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4719</td>
      <td><strong>名称</strong><br>&emsp;Easter Island 1967<br><strong>WKT</strong><br>&emsp;GEOGCS["Easter&emsp;Island&emsp;1967",<br>&emsp;　DATUM["Easter_Island_1967",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6719"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4719"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=211,147,111,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4720</td>
      <td><strong>名称</strong><br>&emsp;Fiji 1986<br><strong>WKT</strong><br>&emsp;GEOGCS["Fiji&emsp;1986",<br>&emsp;　DATUM["Fiji_Geodetic_Datum_1986",<br>&emsp;　　SPHEROID["WGS&emsp;72",6378135,298.26,<br>&emsp;　　　AUTHORITY["EPSG","7043"]],<br>&emsp;　　AUTHORITY["EPSG","6720"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4720"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4721</td>
      <td><strong>名称</strong><br>&emsp;Fiji 1956<br><strong>WKT</strong><br>&emsp;GEOGCS["Fiji&emsp;1956",<br>&emsp;　DATUM["Fiji_1956",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6721"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4721"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=265.025,384.929,-194.046,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4722</td>
      <td><strong>名称</strong><br>&emsp;South Georgia 1968<br><strong>WKT</strong><br>&emsp;GEOGCS["South&emsp;Georgia&emsp;1968",<br>&emsp;　DATUM["South_Georgia_1968",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6722"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4722"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=-794,119,-298,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4723</td>
      <td><strong>名称</strong><br>&emsp;GCGD59<br><strong>WKT</strong><br>&emsp;GEOGCS["GCGD59",<br>&emsp;　DATUM["Grand_Cayman_Geodetic_Datum_1959",<br>&emsp;　　SPHEROID["Clarke&emsp;1866",6378206.4,294.978698213898,<br>&emsp;　　　AUTHORITY["EPSG","7008"]],<br>&emsp;　　AUTHORITY["EPSG","6723"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4723"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=clrk66 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4724</td>
      <td><strong>名称</strong><br>&emsp;Diego Garcia 1969<br><strong>WKT</strong><br>&emsp;GEOGCS["Diego&emsp;Garcia&emsp;1969",<br>&emsp;　DATUM["Diego_Garcia_1969",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6724"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4724"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=208,-435,-229,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4725</td>
      <td><strong>名称</strong><br>&emsp;Johnston Island 1961<br><strong>WKT</strong><br>&emsp;GEOGCS["Johnston&emsp;Island&emsp;1961",<br>&emsp;　DATUM["Johnston_Island_1961",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6725"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4725"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=189,-79,-202,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4726</td>
      <td><strong>名称</strong><br>&emsp;SIGD61<br><strong>WKT</strong><br>&emsp;GEOGCS["SIGD61",<br>&emsp;　DATUM["Sister_Islands_Geodetic_Datum_1961",<br>&emsp;　　SPHEROID["Clarke&emsp;1866",6378206.4,294.978698213898,<br>&emsp;　　　AUTHORITY["EPSG","7008"]],<br>&emsp;　　AUTHORITY["EPSG","6726"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4726"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=clrk66 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4727</td>
      <td><strong>名称</strong><br>&emsp;Midway 1961<br><strong>WKT</strong><br>&emsp;GEOGCS["Midway&emsp;1961",<br>&emsp;　DATUM["Midway_1961",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6727"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4727"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=403,-81,277,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4728</td>
      <td><strong>名称</strong><br>&emsp;PN84<br><strong>WKT</strong><br>&emsp;GEOGCS["PN84",<br>&emsp;　DATUM["Pico_de_las_Nieves_1984",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6728"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4728"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=-307,-92,127,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4729</td>
      <td><strong>名称</strong><br>&emsp;Pitcairn 1967<br><strong>WKT</strong><br>&emsp;GEOGCS["Pitcairn&emsp;1967",<br>&emsp;　DATUM["Pitcairn_1967",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6729"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4729"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=185,165,42,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4730</td>
      <td><strong>名称</strong><br>&emsp;Santo 1965<br><strong>WKT</strong><br>&emsp;GEOGCS["Santo&emsp;1965",<br>&emsp;　DATUM["Santo_1965",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6730"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4730"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=170,42,84,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4731</td>
      <td><strong>名称</strong><br>&emsp;Viti Levu 1912<br><strong>WKT</strong><br>&emsp;GEOGCS["Viti&emsp;Levu&emsp;1912",<br>&emsp;　DATUM["Viti_Levu_1912",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(international&emsp;foot)",6378306.3696,293.466307655635,<br>&emsp;　　　AUTHORITY["EPSG","7055"]],<br>&emsp;　　AUTHORITY["EPSG","6752"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4752"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378306.3696 +rf=293.466307655635 +towgs84=98,390,-22,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4732</td>
      <td><strong>名称</strong><br>&emsp;Marshall Islands 1960<br><strong>WKT</strong><br>&emsp;GEOGCS["Marshall&emsp;Islands&emsp;1960",<br>&emsp;　DATUM["Marshall_Islands_1960",<br>&emsp;　　SPHEROID["Hough&emsp;1960",6378270,297,<br>&emsp;　　　AUTHORITY["EPSG","7053"]],<br>&emsp;　　AUTHORITY["EPSG","6732"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4732"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=hough +towgs84=102,52,-38,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4733</td>
      <td><strong>名称</strong><br>&emsp;Wake Island 1952<br><strong>WKT</strong><br>&emsp;GEOGCS["Wake&emsp;Island&emsp;1952",<br>&emsp;　DATUM["Wake_Island_1952",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6733"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4733"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=276,-57,149,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4734</td>
      <td><strong>名称</strong><br>&emsp;Tristan 1968<br><strong>WKT</strong><br>&emsp;GEOGCS["Tristan&emsp;1968",<br>&emsp;　DATUM["Tristan_1968",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6734"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4734"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=-632,438,-609,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4735</td>
      <td><strong>名称</strong><br>&emsp;Kusaie 1951<br><strong>WKT</strong><br>&emsp;GEOGCS["Kusaie&emsp;1951",<br>&emsp;　DATUM["Kusaie_1951",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6735"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4735"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=647,1777,-1124,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4736</td>
      <td><strong>名称</strong><br>&emsp;Deception Island<br><strong>WKT</strong><br>&emsp;GEOGCS["Deception&emsp;Island",<br>&emsp;　DATUM["Deception_Island",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(RGS)",6378249.145,293.465,<br>&emsp;　　　AUTHORITY["EPSG","7012"]],<br>&emsp;　　AUTHORITY["EPSG","6736"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4736"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378249.145 +rf=293.465 +towgs84=260,12,-147,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4737</td>
      <td><strong>名称</strong><br>&emsp;Korea 2000<br><strong>WKT</strong><br>&emsp;GEOGCS["Korea&emsp;2000",<br>&emsp;　DATUM["Geocentric_datum_of_Korea",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","6737"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4737"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4738</td>
      <td><strong>名称</strong><br>&emsp;Hong Kong 1963<br><strong>WKT</strong><br>&emsp;GEOGCS["Hong&emsp;Kong&emsp;1963",<br>&emsp;　DATUM["Hong_Kong_1963",<br>&emsp;　　SPHEROID["Clarke&emsp;1858",6378293.64520876,294.260676369261,<br>&emsp;　　　AUTHORITY["EPSG","7007"]],<br>&emsp;　　AUTHORITY["EPSG","6738"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4738"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378293.64520876 +rf=294.260676369261 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4739</td>
      <td><strong>名称</strong><br>&emsp;Hong Kong 1963(67)<br><strong>WKT</strong><br>&emsp;GEOGCS["Hong&emsp;Kong&emsp;1963(67)",<br>&emsp;　DATUM["Hong_Kong_1963_67",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6739"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4739"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=-156,-271,-189,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4740</td>
      <td><strong>名称</strong><br>&emsp;PZ-90<br><strong>WKT</strong><br>&emsp;GEOGCS["PZ-90",<br>&emsp;　DATUM["Parametry_Zemli_1990",<br>&emsp;　　SPHEROID["PZ-90",6378136,298.257839303,<br>&emsp;　　　AUTHORITY["EPSG","7054"]],<br>&emsp;　　AUTHORITY["EPSG","6740"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4740"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378136 +rf=298.257839303 +towgs84=0,0,1.5,0,0,0.076,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4741</td>
      <td><strong>名称</strong><br>&emsp;FD54<br><strong>WKT</strong><br>&emsp;GEOGCS["FD54",<br>&emsp;　DATUM["Faroe_Datum_1954",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6741"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4741"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4742</td>
      <td><strong>名称</strong><br>&emsp;GDM2000<br><strong>WKT</strong><br>&emsp;GEOGCS["GDM2000",<br>&emsp;　DATUM["Geodetic_Datum_of_Malaysia_2000",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","6742"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4742"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4743</td>
      <td><strong>名称</strong><br>&emsp;Karbala 1979<br><strong>WKT</strong><br>&emsp;GEOGCS["Karbala&emsp;1979",<br>&emsp;　DATUM["Karbala_1979",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(RGS)",6378249.145,293.465,<br>&emsp;　　　AUTHORITY["EPSG","7012"]],<br>&emsp;　　AUTHORITY["EPSG","6743"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4743"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378249.145 +rf=293.465 +towgs84=70.995,-335.916,262.898,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4744</td>
      <td><strong>名称</strong><br>&emsp;Nahrwan 1934<br><strong>WKT</strong><br>&emsp;GEOGCS["Nahrwan&emsp;1934",<br>&emsp;　DATUM["Nahrwan_1934",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(RGS)",6378249.145,293.465,<br>&emsp;　　　AUTHORITY["EPSG","7012"]],<br>&emsp;　　AUTHORITY["EPSG","6744"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4744"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378249.145 +rf=293.465 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4745</td>
      <td><strong>名称</strong><br>&emsp;RD/83<br><strong>WKT</strong><br>&emsp;GEOGCS["RD/83",<br>&emsp;　DATUM["Rauenberg_Datum_83",<br>&emsp;　　SPHEROID["Bessel&emsp;1841",6377397.155,299.1528128,<br>&emsp;　　　AUTHORITY["EPSG","7004"]],<br>&emsp;　　AUTHORITY["EPSG","6745"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4745"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=bessel +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4746</td>
      <td><strong>名称</strong><br>&emsp;PD/83<br><strong>WKT</strong><br>&emsp;GEOGCS["PD/83",<br>&emsp;　DATUM["Potsdam_Datum_83",<br>&emsp;　　SPHEROID["Bessel&emsp;1841",6377397.155,299.1528128,<br>&emsp;　　　AUTHORITY["EPSG","7004"]],<br>&emsp;　　AUTHORITY["EPSG","6746"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4746"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=bessel +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4747</td>
      <td><strong>名称</strong><br>&emsp;GR96<br><strong>WKT</strong><br>&emsp;GEOGCS["GR96",<br>&emsp;　DATUM["Greenland_1996",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","6747"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4747"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4748</td>
      <td><strong>名称</strong><br>&emsp;Vanua Levu 1915<br><strong>WKT</strong><br>&emsp;GEOGCS["Vanua&emsp;Levu&emsp;1915",<br>&emsp;　DATUM["Vanua_Levu_1915",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(international&emsp;foot)",6378306.3696,293.466307655635,<br>&emsp;　　　AUTHORITY["EPSG","7055"]],<br>&emsp;　　AUTHORITY["EPSG","6748"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4748"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378306.3696 +rf=293.466307655635 +towgs84=51,391,-36,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4749</td>
      <td><strong>名称</strong><br>&emsp;RGNC91-93<br><strong>WKT</strong><br>&emsp;GEOGCS["RGNC91-93",<br>&emsp;　DATUM["Reseau_Geodesique_de_Nouvelle_Caledonie_91-93",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","6749"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4749"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4750</td>
      <td><strong>名称</strong><br>&emsp;ST87 Ouvea<br><strong>WKT</strong><br>&emsp;GEOGCS["ST87&emsp;Ouvea",<br>&emsp;　DATUM["ST87_Ouvea",<br>&emsp;　　SPHEROID["WGS&emsp;84",6378137,298.257223563,<br>&emsp;　　　AUTHORITY["EPSG","7030"]],<br>&emsp;　　AUTHORITY["EPSG","6750"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4750"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=WGS84 +towgs84=-56.263,16.136,-22.856,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4751</td>
      <td><strong>名称</strong><br>&emsp;Kertau (RSO)<br><strong>WKT</strong><br>&emsp;GEOGCS["Kertau&emsp;(RSO)",<br>&emsp;　DATUM["Kertau_RSO",<br>&emsp;　　SPHEROID["Everest&emsp;1830&emsp;(RSO&emsp;1969)",6377295.664,300.8017,<br>&emsp;　　　AUTHORITY["EPSG","7056"]],<br>&emsp;　　AUTHORITY["EPSG","6751"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4751"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=evrst69 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4752</td>
      <td><strong>名称</strong><br>&emsp;Viti Levu 1912<br><strong>WKT</strong><br>&emsp;GEOGCS["Viti&emsp;Levu&emsp;1912",<br>&emsp;　DATUM["Viti_Levu_1912",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(international&emsp;foot)",6378306.3696,293.466307655635,<br>&emsp;　　　AUTHORITY["EPSG","7055"]],<br>&emsp;　　AUTHORITY["EPSG","6752"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4752"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378306.3696 +rf=293.466307655635 +towgs84=98,390,-22,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4753</td>
      <td><strong>名称</strong><br>&emsp;fk89<br><strong>WKT</strong><br>&emsp;GEOGCS["fk89",<br>&emsp;　DATUM["fk89",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6753"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4753"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4754</td>
      <td><strong>名称</strong><br>&emsp;LGD2006<br><strong>WKT</strong><br>&emsp;GEOGCS["LGD2006",<br>&emsp;　DATUM["Libyan_Geodetic_Datum_2006",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6754"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4754"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=-208.4058,-109.8777,-2.5764,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4755</td>
      <td><strong>名称</strong><br>&emsp;DGN95<br><strong>WKT</strong><br>&emsp;GEOGCS["DGN95",<br>&emsp;　DATUM["Datum_Geodesi_Nasional_1995",<br>&emsp;　　SPHEROID["WGS&emsp;84",6378137,298.257223563,<br>&emsp;　　　AUTHORITY["EPSG","7030"]],<br>&emsp;　　AUTHORITY["EPSG","6755"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4755"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4756</td>
      <td><strong>名称</strong><br>&emsp;VN-2000<br><strong>WKT</strong><br>&emsp;GEOGCS["VN-2000",<br>&emsp;　DATUM["Vietnam_2000",<br>&emsp;　　SPHEROID["WGS&emsp;84",6378137,298.257223563,<br>&emsp;　　　AUTHORITY["EPSG","7030"]],<br>&emsp;　　AUTHORITY["EPSG","6756"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4756"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=WGS84 +towgs84=-191.90441429,-39.30318279,-111.45032835,0.00928836,-0.01975479,0.00427372,0.252906278 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4757</td>
      <td><strong>名称</strong><br>&emsp;SVY21<br><strong>WKT</strong><br>&emsp;GEOGCS["SVY21",<br>&emsp;　DATUM["SVY21",<br>&emsp;　　SPHEROID["WGS&emsp;84",6378137,298.257223563,<br>&emsp;　　　AUTHORITY["EPSG","7030"]],<br>&emsp;　　AUTHORITY["EPSG","6757"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4757"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4758</td>
      <td><strong>名称</strong><br>&emsp;JAD2001<br><strong>WKT</strong><br>&emsp;GEOGCS["JAD2001",<br>&emsp;　DATUM["Jamaica_2001",<br>&emsp;　　SPHEROID["WGS&emsp;84",6378137,298.257223563,<br>&emsp;　　　AUTHORITY["EPSG","7030"]],<br>&emsp;　　AUTHORITY["EPSG","6758"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4758"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4759</td>
      <td><strong>名称</strong><br>&emsp;NAD83(NSRS2007)<br><strong>WKT</strong><br>&emsp;GEOGCS["NAD83(NSRS2007)",<br>&emsp;　DATUM["NAD83_National_Spatial_Reference_System_2007",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","6759"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4759"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4760</td>
      <td><strong>名称</strong><br>&emsp;WGS 66<br><strong>WKT</strong><br>&emsp;GEOGCS["WGS&emsp;66",<br>&emsp;　DATUM["World_Geodetic_System_1966",<br>&emsp;　　SPHEROID["NWL&emsp;9D",6378145,298.25,<br>&emsp;　　　AUTHORITY["EPSG","7025"]],<br>&emsp;　　AUTHORITY["EPSG","6760"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4760"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=NWL9D +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4761</td>
      <td><strong>名称</strong><br>&emsp;HTRS96<br><strong>WKT</strong><br>&emsp;GEOGCS["HTRS96",<br>&emsp;　DATUM["Croatian_Terrestrial_Reference_System",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","6761"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4761"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4762</td>
      <td><strong>名称</strong><br>&emsp;BDA2000<br><strong>WKT</strong><br>&emsp;GEOGCS["BDA2000",<br>&emsp;　DATUM["Bermuda_2000",<br>&emsp;　　SPHEROID["WGS&emsp;84",6378137,298.257223563,<br>&emsp;　　　AUTHORITY["EPSG","7030"]],<br>&emsp;　　AUTHORITY["EPSG","6762"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4762"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4763</td>
      <td><strong>名称</strong><br>&emsp;Pitcairn 2006<br><strong>WKT</strong><br>&emsp;GEOGCS["Pitcairn&emsp;2006",<br>&emsp;　DATUM["Pitcairn_2006",<br>&emsp;　　SPHEROID["WGS&emsp;84",6378137,298.257223563,<br>&emsp;　　　AUTHORITY["EPSG","7030"]],<br>&emsp;　　AUTHORITY["EPSG","6763"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4763"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4764</td>
      <td><strong>名称</strong><br>&emsp;RSRGD2000<br><strong>WKT</strong><br>&emsp;GEOGCS["RSRGD2000",<br>&emsp;　DATUM["Ross_Sea_Region_Geodetic_Datum_2000",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","6764"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4764"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4765</td>
      <td><strong>名称</strong><br>&emsp;Slovenia 1996<br><strong>WKT</strong><br>&emsp;GEOGCS["Slovenia&emsp;1996",<br>&emsp;　DATUM["Slovenia_Geodetic_Datum_1996",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","6765"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4765"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4801</td>
      <td><strong>名称</strong><br>&emsp;Bern 1898 (Bern)<br><strong>WKT</strong><br>&emsp;GEOGCS["Bern&emsp;1898&emsp;(Bern)",<br>&emsp;　DATUM["CH1903_Bern",<br>&emsp;　　SPHEROID["Bessel&emsp;1841",6377397.155,299.1528128,<br>&emsp;　　　AUTHORITY["EPSG","7004"]],<br>&emsp;　　AUTHORITY["EPSG","6801"]],<br>&emsp;　PRIMEM["Bern",7.43958333333333,<br>&emsp;　　AUTHORITY["EPSG","8907"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4801"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=bessel +pm=bern +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4802</td>
      <td><strong>名称</strong><br>&emsp;Bogota 1975 (Bogota)<br><strong>WKT</strong><br>&emsp;GEOGCS["Bogota&emsp;1975&emsp;(Bogota)",<br>&emsp;　DATUM["Bogota_1975_Bogota",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6802"]],<br>&emsp;　PRIMEM["Bogota",-74.0809166666667,<br>&emsp;　　AUTHORITY["EPSG","8904"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4802"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +pm=bogota +towgs84=307,304,-318,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4803</td>
      <td><strong>名称</strong><br>&emsp;Lisbon (Lisbon)<br><strong>WKT</strong><br>&emsp;GEOGCS["Lisbon&emsp;(Lisbon)",<br>&emsp;　DATUM["Lisbon_1937_Lisbon",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6803"]],<br>&emsp;　PRIMEM["Lisbon",-9.13190611111111,<br>&emsp;　　AUTHORITY["EPSG","8902"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4803"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +pm=lisbon +towgs84=-288.885,-91.744,126.244,-1.691,0.41,-0.211,-4.598 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4804</td>
      <td><strong>名称</strong><br>&emsp;Makassar (Jakarta)<br><strong>WKT</strong><br>&emsp;GEOGCS["Makassar&emsp;(Jakarta)",<br>&emsp;　DATUM["Makassar_Jakarta",<br>&emsp;　　SPHEROID["Bessel&emsp;1841",6377397.155,299.1528128,<br>&emsp;　　　AUTHORITY["EPSG","7004"]],<br>&emsp;　　AUTHORITY["EPSG","6804"]],<br>&emsp;　PRIMEM["Jakarta",106.807719444444,<br>&emsp;　　AUTHORITY["EPSG","8908"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4804"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=bessel +pm=jakarta +towgs84=-587.8,519.75,145.76,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4805</td>
      <td><strong>名称</strong><br>&emsp;MGI (Ferro)<br><strong>WKT</strong><br>&emsp;GEOGCS["MGI&emsp;(Ferro)",<br>&emsp;　DATUM["Militar-Geographische_Institut_Ferro",<br>&emsp;　　SPHEROID["Bessel&emsp;1841",6377397.155,299.1528128,<br>&emsp;　　　AUTHORITY["EPSG","7004"]],<br>&emsp;　　AUTHORITY["EPSG","6805"]],<br>&emsp;　PRIMEM["Ferro",-17.6666666666667,<br>&emsp;　　AUTHORITY["EPSG","8909"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4805"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=bessel +pm=ferro +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4806</td>
      <td><strong>名称</strong><br>&emsp;Monte Mario (Rome)<br><strong>WKT</strong><br>&emsp;GEOGCS["Monte&emsp;Mario&emsp;(Rome)",<br>&emsp;　DATUM["Monte_Mario_Rome",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6806"]],<br>&emsp;　PRIMEM["Rome",12.4523333333333,<br>&emsp;　　AUTHORITY["EPSG","8906"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4806"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +pm=rome +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4807</td>
      <td><strong>名称</strong><br>&emsp;NTF (Paris)<br><strong>WKT</strong><br>&emsp;GEOGCS["NTF&emsp;(Paris)",<br>&emsp;　DATUM["Nouvelle_Triangulation_Francaise_Paris",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(IGN)",6378249.2,293.466021293627,<br>&emsp;　　　AUTHORITY["EPSG","7011"]],<br>&emsp;　　AUTHORITY["EPSG","6807"]],<br>&emsp;　PRIMEM["Paris",2.33722916999999,<br>&emsp;　　AUTHORITY["EPSG","8903"]],<br>&emsp;　UNIT["grad",0.0157079632679489,<br>&emsp;　　AUTHORITY["EPSG","9105"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4807"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=clrk80ign +pm=paris +towgs84=-168,-60,320,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4808</td>
      <td><strong>名称</strong><br>&emsp;Batavia (Jakarta)<br><strong>WKT</strong><br>&emsp;GEOGCS["Batavia&emsp;(Jakarta)",<br>&emsp;　DATUM["Batavia_Jakarta",<br>&emsp;　　SPHEROID["Bessel&emsp;1841",6377397.155,299.1528128,<br>&emsp;　　　AUTHORITY["EPSG","7004"]],<br>&emsp;　　AUTHORITY["EPSG","6813"]],<br>&emsp;　PRIMEM["Jakarta",106.807719444444,<br>&emsp;　　AUTHORITY["EPSG","8908"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4813"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=bessel +pm=jakarta +towgs84=-377,681,-50,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4809</td>
      <td><strong>名称</strong><br>&emsp;BD50 (Brussels)<br><strong>WKT</strong><br>&emsp;GEOGCS["BD50&emsp;(Brussels)",<br>&emsp;　DATUM["Reseau_National_Belge_1950_Brussels",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6809"]],<br>&emsp;　PRIMEM["Brussels",4.367975,<br>&emsp;　　AUTHORITY["EPSG","8910"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4809"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +pm=brussels +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4810</td>
      <td><strong>名称</strong><br>&emsp;Tananarive (Paris)<br><strong>WKT</strong><br>&emsp;GEOGCS["Tananarive&emsp;(Paris)",<br>&emsp;　DATUM["Tananarive_1925_Paris",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","6810"]],<br>&emsp;　PRIMEM["Paris",2.33722916999999,<br>&emsp;　　AUTHORITY["EPSG","8903"]],<br>&emsp;　UNIT["grad",0.0157079632679489,<br>&emsp;　　AUTHORITY["EPSG","9105"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4810"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +pm=paris +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4811</td>
      <td><strong>名称</strong><br>&emsp;Voirol 1875 (Paris)<br><strong>WKT</strong><br>&emsp;GEOGCS["Voirol&emsp;1875&emsp;(Paris)",<br>&emsp;　DATUM["Voirol_1875_Paris",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(IGN)",6378249.2,293.466021293627,<br>&emsp;　　　AUTHORITY["EPSG","7011"]],<br>&emsp;　　AUTHORITY["EPSG","6811"]],<br>&emsp;　PRIMEM["Paris",2.33722916999999,<br>&emsp;　　AUTHORITY["EPSG","8903"]],<br>&emsp;　UNIT["grad",0.0157079632679489,<br>&emsp;　　AUTHORITY["EPSG","9105"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4811"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=clrk80ign +pm=paris +towgs84=-73,-247,227,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4813</td>
      <td><strong>名称</strong><br>&emsp;Batavia (Jakarta)<br><strong>WKT</strong><br>&emsp;GEOGCS["Batavia&emsp;(Jakarta)",<br>&emsp;　DATUM["Batavia_Jakarta",<br>&emsp;　　SPHEROID["Bessel&emsp;1841",6377397.155,299.1528128,<br>&emsp;　　　AUTHORITY["EPSG","7004"]],<br>&emsp;　　AUTHORITY["EPSG","6813"]],<br>&emsp;　PRIMEM["Jakarta",106.807719444444,<br>&emsp;　　AUTHORITY["EPSG","8908"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4813"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=bessel +pm=jakarta +towgs84=-377,681,-50,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4814</td>
      <td><strong>名称</strong><br>&emsp;RT38 (Stockholm)<br><strong>WKT</strong><br>&emsp;GEOGCS["RT38&emsp;(Stockholm)",<br>&emsp;　DATUM["Stockholm_1938_Stockholm",<br>&emsp;　　SPHEROID["Bessel&emsp;1841",6377397.155,299.1528128,<br>&emsp;　　　AUTHORITY["EPSG","7004"]],<br>&emsp;　　AUTHORITY["EPSG","6814"]],<br>&emsp;　PRIMEM["Stockholm",18.0582777777778,<br>&emsp;　　AUTHORITY["EPSG","8911"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4814"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=bessel +pm=stockholm +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4815</td>
      <td><strong>名称</strong><br>&emsp;Greek (Athens)<br><strong>WKT</strong><br>&emsp;GEOGCS["Greek&emsp;(Athens)",<br>&emsp;　DATUM["Greek_Athens",<br>&emsp;　　SPHEROID["Bessel&emsp;1841",6377397.155,299.1528128,<br>&emsp;　　　AUTHORITY["EPSG","7004"]],<br>&emsp;　　AUTHORITY["EPSG","6815"]],<br>&emsp;　PRIMEM["Athens",23.7163375,<br>&emsp;　　AUTHORITY["EPSG","8912"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4815"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=bessel +pm=athens +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4816</td>
      <td><strong>名称</strong><br>&emsp;Carthage (Paris)<br><strong>WKT</strong><br>&emsp;GEOGCS["Carthage&emsp;(Paris)",<br>&emsp;　DATUM["Carthage_Paris",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(IGN)",6378249.2,293.466021293627,<br>&emsp;　　　AUTHORITY["EPSG","7011"]],<br>&emsp;　　AUTHORITY["EPSG","6816"]],<br>&emsp;　PRIMEM["Paris",2.33722916999999,<br>&emsp;　　AUTHORITY["EPSG","8903"]],<br>&emsp;　UNIT["grad",0.0157079632679489,<br>&emsp;　　AUTHORITY["EPSG","9105"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4816"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=clrk80ign +pm=paris +towgs84=-263,6,431,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4817</td>
      <td><strong>名称</strong><br>&emsp;NGO 1948 (Oslo)<br><strong>WKT</strong><br>&emsp;GEOGCS["NGO&emsp;1948&emsp;(Oslo)",<br>&emsp;　DATUM["NGO_1948_Oslo",<br>&emsp;　　SPHEROID["Bessel&emsp;Modified",6377492.018,299.1528128,<br>&emsp;　　　AUTHORITY["EPSG","7005"]],<br>&emsp;　　AUTHORITY["EPSG","6817"]],<br>&emsp;　PRIMEM["Oslo",10.7229166666667,<br>&emsp;　　AUTHORITY["EPSG","8913"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4817"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6377492.018 +rf=299.1528128 +pm=oslo +towgs84=278.3,93,474.5,7.889,0.05,-6.61,6.21 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4818</td>
      <td><strong>名称</strong><br>&emsp;S-JTSK (Ferro)<br><strong>WKT</strong><br>&emsp;GEOGCS["S-JTSK&emsp;(Ferro)",<br>&emsp;　DATUM["System_of_the_Unified_Trigonometrical_Cadastral_Network_Ferro",<br>&emsp;　　SPHEROID["Bessel&emsp;1841",6377397.155,299.1528128,<br>&emsp;　　　AUTHORITY["EPSG","7004"]],<br>&emsp;　　AUTHORITY["EPSG","6818"]],<br>&emsp;　PRIMEM["Ferro",-17.6666666666667,<br>&emsp;　　AUTHORITY["EPSG","8909"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4818"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=bessel +pm=ferro +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4819</td>
      <td><strong>名称</strong><br>&emsp;Nord Sahara 1959<br><strong>WKT</strong><br>&emsp;GEOGCS["Nord&emsp;Sahara&emsp;1959",<br>&emsp;　DATUM["Nord_Sahara_1959",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(RGS)",6378249.145,293.465,<br>&emsp;　　　AUTHORITY["EPSG","7012"]],<br>&emsp;　　AUTHORITY["EPSG","6307"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4307"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378249.145 +rf=293.465 +towgs84=-209.3622,-87.8162,404.6198,0.0046,3.4784,0.5805,-1.4547 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4820</td>
      <td><strong>名称</strong><br>&emsp;Segara (Jakarta)<br><strong>WKT</strong><br>&emsp;GEOGCS["Segara&emsp;(Jakarta)",<br>&emsp;　DATUM["Gunung_Segara_Jakarta",<br>&emsp;　　SPHEROID["Bessel&emsp;1841",6377397.155,299.1528128,<br>&emsp;　　　AUTHORITY["EPSG","7004"]],<br>&emsp;　　AUTHORITY["EPSG","6820"]],<br>&emsp;　PRIMEM["Jakarta",106.807719444444,<br>&emsp;　　AUTHORITY["EPSG","8908"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4820"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=bessel +pm=jakarta +towgs84=-403,684,41,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4821</td>
      <td><strong>名称</strong><br>&emsp;Voirol 1879 (Paris)<br><strong>WKT</strong><br>&emsp;GEOGCS["Voirol&emsp;1879&emsp;(Paris)",<br>&emsp;　DATUM["Voirol_1879_Paris",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(IGN)",6378249.2,293.466021293627,<br>&emsp;　　　AUTHORITY["EPSG","7011"]],<br>&emsp;　　AUTHORITY["EPSG","6821"]],<br>&emsp;　PRIMEM["Paris",2.33722916999999,<br>&emsp;　　AUTHORITY["EPSG","8903"]],<br>&emsp;　UNIT["grad",0.0157079632679489,<br>&emsp;　　AUTHORITY["EPSG","9105"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4821"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=clrk80ign +pm=paris +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4823</td>
      <td><strong>名称</strong><br>&emsp;Sao Tome<br><strong>WKT</strong><br>&emsp;GEOGCS["Sao&emsp;Tome",<br>&emsp;　DATUM["Sao_Tome",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","1044"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4823"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4824</td>
      <td><strong>名称</strong><br>&emsp;Principe<br><strong>WKT</strong><br>&emsp;GEOGCS["Principe",<br>&emsp;　DATUM["Principe",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","1046"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4824"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4901</td>
      <td><strong>名称</strong><br>&emsp;ATF (Paris)<br><strong>WKT</strong><br>&emsp;GEOGCS["ATF&emsp;(Paris)",<br>&emsp;　DATUM["Ancienne_Triangulation_Francaise_Paris",<br>&emsp;　　SPHEROID["Plessis&emsp;1817",6376523,308.64,<br>&emsp;　　　AUTHORITY["EPSG","7027"]],<br>&emsp;　　AUTHORITY["EPSG","6901"]],<br>&emsp;　PRIMEM["Paris&emsp;RGS",2.33720833333333,<br>&emsp;　　AUTHORITY["EPSG","8914"]],<br>&emsp;　UNIT["grad",0.0157079632679489,<br>&emsp;　　AUTHORITY["EPSG","9105"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4901"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6376523 +rf=308.64 +pm=2.33720833333333 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4902</td>
      <td><strong>名称</strong><br>&emsp;ATF (Paris)<br><strong>WKT</strong><br>&emsp;GEOGCS["ATF&emsp;(Paris)",<br>&emsp;　DATUM["Ancienne_Triangulation_Francaise_Paris",<br>&emsp;　　SPHEROID["Plessis&emsp;1817",6376523,308.64,<br>&emsp;　　　AUTHORITY["EPSG","7027"]],<br>&emsp;　　AUTHORITY["EPSG","6901"]],<br>&emsp;　PRIMEM["Paris&emsp;RGS",2.33720833333333,<br>&emsp;　　AUTHORITY["EPSG","8914"]],<br>&emsp;　UNIT["grad",0.0157079632679489,<br>&emsp;　　AUTHORITY["EPSG","9105"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4901"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6376523 +rf=308.64 +pm=2.33720833333333 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4903</td>
      <td><strong>名称</strong><br>&emsp;Madrid 1870 (Madrid)<br><strong>WKT</strong><br>&emsp;GEOGCS["Madrid&emsp;1870&emsp;(Madrid)",<br>&emsp;　DATUM["Madrid_1870_Madrid",<br>&emsp;　　SPHEROID["Struve&emsp;1860",6378298.3,294.73,<br>&emsp;　　　AUTHORITY["EPSG","7028"]],<br>&emsp;　　AUTHORITY["EPSG","6903"]],<br>&emsp;　PRIMEM["Madrid",-3.687375,<br>&emsp;　　AUTHORITY["EPSG","8905"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4903"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378298.3 +rf=294.73 +pm=-3.687375 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:4904</td>
      <td><strong>名称</strong><br>&emsp;Lisbon 1890 (Lisbon)<br><strong>WKT</strong><br>&emsp;GEOGCS["Lisbon&emsp;1890&emsp;(Lisbon)",<br>&emsp;　DATUM["Lisbon_1890_Lisbon",<br>&emsp;　　SPHEROID["Bessel&emsp;1841",6377397.155,299.1528128,<br>&emsp;　　　AUTHORITY["EPSG","7004"]],<br>&emsp;　　AUTHORITY["EPSG","6904"]],<br>&emsp;　PRIMEM["Lisbon",-9.13190611111111,<br>&emsp;　　AUTHORITY["EPSG","8902"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","4904"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=bessel +pm=lisbon +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:5013</td>
      <td><strong>名称</strong><br>&emsp;PTRA08<br><strong>WKT</strong><br>&emsp;GEOGCS["PTRA08",<br>&emsp;　DATUM["Autonomous_Regions_of_Portugal_2008",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","1041"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","5013"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:5132</td>
      <td><strong>名称</strong><br>&emsp;Tokyo 1892<br><strong>WKT</strong><br>&emsp;GEOGCS["Tokyo&emsp;1892",<br>&emsp;　DATUM["Tokyo_1892",<br>&emsp;　　SPHEROID["Bessel&emsp;1841",6377397.155,299.1528128,<br>&emsp;　　　AUTHORITY["EPSG","7004"]],<br>&emsp;　　AUTHORITY["EPSG","1048"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","5132"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=bessel +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:5228</td>
      <td><strong>名称</strong><br>&emsp;S-JTSK/05<br><strong>WKT</strong><br>&emsp;GEOGCS["S-JTSK/05",<br>&emsp;　DATUM["System_of_the_Unified_Trigonometrical_Cadastral_Network_05",<br>&emsp;　　SPHEROID["Bessel&emsp;1841",6377397.155,299.1528128,<br>&emsp;　　　AUTHORITY["EPSG","7004"]],<br>&emsp;　　AUTHORITY["EPSG","1052"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","5228"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=bessel +towgs84=572.213,85.334,461.94,4.9732,1.529,5.2484,3.5378 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:5229</td>
      <td><strong>名称</strong><br>&emsp;S-JTSK/05 (Ferro)<br><strong>WKT</strong><br>&emsp;GEOGCS["S-JTSK/05&emsp;(Ferro)",<br>&emsp;　DATUM["System_of_the_Unified_Trigonometrical_Cadastral_Network_05_Ferro",<br>&emsp;　　SPHEROID["Bessel&emsp;1841",6377397.155,299.1528128,<br>&emsp;　　　AUTHORITY["EPSG","7004"]],<br>&emsp;　　AUTHORITY["EPSG","1055"]],<br>&emsp;　PRIMEM["Ferro",-17.6666666666667,<br>&emsp;　　AUTHORITY["EPSG","8909"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","5229"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=bessel +pm=ferro +towgs84=572.213,85.334,461.94,4.9732,1.529,5.2484,3.5378 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:5233</td>
      <td><strong>名称</strong><br>&emsp;SLD99<br><strong>WKT</strong><br>&emsp;GEOGCS["SLD99",<br>&emsp;　DATUM["Sri_Lanka_Datum_1999",<br>&emsp;　　SPHEROID["Everest&emsp;1830&emsp;(1937&emsp;Adjustment)",6377276.345,300.8017,<br>&emsp;　　　AUTHORITY["EPSG","7015"]],<br>&emsp;　　AUTHORITY["EPSG","1053"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","5233"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=evrst30 +towgs84=-0.293,766.95,87.713,0.195704,1.695068,3.473016,-0.039338 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:5246</td>
      <td><strong>名称</strong><br>&emsp;GDBD2009<br><strong>WKT</strong><br>&emsp;GEOGCS["GDBD2009",<br>&emsp;　DATUM["Geocentric_Datum_Brunei_Darussalam_2009",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","1056"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","5246"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:5252</td>
      <td><strong>名称</strong><br>&emsp;TUREF<br><strong>WKT</strong><br>&emsp;GEOGCS["TUREF",<br>&emsp;　DATUM["Turkish_National_Reference_Frame",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","1057"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","5252"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:5264</td>
      <td><strong>名称</strong><br>&emsp;DRUKREF 03<br><strong>WKT</strong><br>&emsp;GEOGCS["DRUKREF&emsp;03",<br>&emsp;　DATUM["Bhutan_National_Geodetic_Datum",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","1058"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","5264"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:5324</td>
      <td><strong>名称</strong><br>&emsp;ISN2004<br><strong>WKT</strong><br>&emsp;GEOGCS["ISN2004",<br>&emsp;　DATUM["Islands_Net_2004",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","1060"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","5324"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:5340</td>
      <td><strong>名称</strong><br>&emsp;POSGAR 2007<br><strong>WKT</strong><br>&emsp;GEOGCS["POSGAR&emsp;2007",<br>&emsp;　DATUM["Posiciones_Geodesicas_Argentinas_2007",<br>&emsp;　　SPHEROID["WGS&emsp;84",6378137,298.257223563,<br>&emsp;　　　AUTHORITY["EPSG","7030"]],<br>&emsp;　　AUTHORITY["EPSG","1062"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","5340"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=WGS84 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:5354</td>
      <td><strong>名称</strong><br>&emsp;MARGEN<br><strong>WKT</strong><br>&emsp;GEOGCS["MARGEN",<br>&emsp;　DATUM["Marco_Geodesico_Nacional_de_Bolivia",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","1063"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","5354"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:5360</td>
      <td><strong>名称</strong><br>&emsp;SIRGAS-Chile 2002<br><strong>WKT</strong><br>&emsp;GEOGCS["SIRGAS-Chile&emsp;2002",<br>&emsp;　DATUM["SIRGAS-Chile_realization_1_epoch_2002",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","1064"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","5360"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:5365</td>
      <td><strong>名称</strong><br>&emsp;CR05<br><strong>WKT</strong><br>&emsp;GEOGCS["CR05",<br>&emsp;　DATUM["Costa_Rica_2005",<br>&emsp;　　SPHEROID["WGS&emsp;84",6378137,298.257223563,<br>&emsp;　　　AUTHORITY["EPSG","7030"]],<br>&emsp;　　AUTHORITY["EPSG","1065"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","5365"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=WGS84 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:5371</td>
      <td><strong>名称</strong><br>&emsp;MACARIO SOLIS<br><strong>WKT</strong><br>&emsp;GEOGCS["MACARIO&emsp;SOLIS",<br>&emsp;　DATUM["Sistema_Geodesico_Nacional_de_Panama_MACARIO_SOLIS",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","1066"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","5371"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:5373</td>
      <td><strong>名称</strong><br>&emsp;Peru96<br><strong>WKT</strong><br>&emsp;GEOGCS["Peru96",<br>&emsp;　DATUM["Peru96",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","1067"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","5373"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:5381</td>
      <td><strong>名称</strong><br>&emsp;SIRGAS-ROU98<br><strong>WKT</strong><br>&emsp;GEOGCS["SIRGAS-ROU98",<br>&emsp;　DATUM["SIRGAS-ROU98",<br>&emsp;　　SPHEROID["WGS&emsp;84",6378137,298.257223563,<br>&emsp;　　　AUTHORITY["EPSG","7030"]],<br>&emsp;　　AUTHORITY["EPSG","1068"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","5381"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:5393</td>
      <td><strong>名称</strong><br>&emsp;SIRGAS_ES2007.8<br><strong>WKT</strong><br>&emsp;GEOGCS["SIRGAS_ES2007.8",<br>&emsp;　DATUM["SIRGAS_ES2007_8",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","1069"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","5393"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:5451</td>
      <td><strong>名称</strong><br>&emsp;Ocotepeque 1935<br><strong>WKT</strong><br>&emsp;GEOGCS["Ocotepeque&emsp;1935",<br>&emsp;　DATUM["Ocotepeque_1935",<br>&emsp;　　SPHEROID["Clarke&emsp;1866",6378206.4,294.978698213898,<br>&emsp;　　　AUTHORITY["EPSG","7008"]],<br>&emsp;　　AUTHORITY["EPSG","1070"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","5451"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=clrk66 +towgs84=205,96,-98,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:5464</td>
      <td><strong>名称</strong><br>&emsp;Sibun Gorge 1922<br><strong>WKT</strong><br>&emsp;GEOGCS["Sibun&emsp;Gorge&emsp;1922",<br>&emsp;　DATUM["Sibun_Gorge_1922",<br>&emsp;　　SPHEROID["Clarke&emsp;1858",6378293.64520876,294.260676369261,<br>&emsp;　　　AUTHORITY["EPSG","7007"]],<br>&emsp;　　AUTHORITY["EPSG","1071"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","5464"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378293.64520876 +rf=294.260676369261 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:5467</td>
      <td><strong>名称</strong><br>&emsp;Panama-Colon 1911<br><strong>WKT</strong><br>&emsp;GEOGCS["Panama-Colon&emsp;1911",<br>&emsp;　DATUM["Panama-Colon_1911",<br>&emsp;　　SPHEROID["Clarke&emsp;1866",6378206.4,294.978698213898,<br>&emsp;　　　AUTHORITY["EPSG","7008"]],<br>&emsp;　　AUTHORITY["EPSG","1072"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","5467"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=clrk66 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:5489</td>
      <td><strong>名称</strong><br>&emsp;RGAF09<br><strong>WKT</strong><br>&emsp;GEOGCS["RGAF09",<br>&emsp;　DATUM["Reseau_Geodesique_des_Antilles_Francaises_2009",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","1073"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","5489"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:5524</td>
      <td><strong>名称</strong><br>&emsp;Corrego Alegre 1961<br><strong>WKT</strong><br>&emsp;GEOGCS["Corrego&emsp;Alegre&emsp;1961",<br>&emsp;　DATUM["Corrego_Alegre_1961",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","1074"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","5524"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:5527</td>
      <td><strong>名称</strong><br>&emsp;SAD69(96)<br><strong>WKT</strong><br>&emsp;GEOGCS["SAD69(96)",<br>&emsp;　DATUM["South_American_Datum_1969_96",<br>&emsp;　　SPHEROID["GRS&emsp;1967&emsp;Modified",6378160,298.25,<br>&emsp;　　　AUTHORITY["EPSG","7050"]],<br>&emsp;　　AUTHORITY["EPSG","1075"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","5527"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=aust_SA +towgs84=-67.35,3.88,-38.22,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:5546</td>
      <td><strong>名称</strong><br>&emsp;PNG94<br><strong>WKT</strong><br>&emsp;GEOGCS["PNG94",<br>&emsp;　DATUM["Papua_New_Guinea_Geodetic_Datum_1994",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","1076"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","5546"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:5561</td>
      <td><strong>名称</strong><br>&emsp;UCS-2000<br><strong>WKT</strong><br>&emsp;GEOGCS["UCS-2000",<br>&emsp;　DATUM["Ukraine_2000",<br>&emsp;　　SPHEROID["Krassowsky&emsp;1940",6378245,298.3,<br>&emsp;　　　AUTHORITY["EPSG","7024"]],<br>&emsp;　　AUTHORITY["EPSG","1077"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","5561"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=krass +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:5593</td>
      <td><strong>名称</strong><br>&emsp;FEH2010<br><strong>WKT</strong><br>&emsp;GEOGCS["FEH2010",<br>&emsp;　DATUM["Fehmarnbelt_Datum_2010",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","1078"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","5593"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:5681</td>
      <td><strong>名称</strong><br>&emsp;DB_REF<br><strong>WKT</strong><br>&emsp;GEOGCS["DB_REF",<br>&emsp;　DATUM["Deutsche_Bahn_Reference_System",<br>&emsp;　　SPHEROID["Bessel&emsp;1841",6377397.155,299.1528128,<br>&emsp;　　　AUTHORITY["EPSG","7004"]],<br>&emsp;　　AUTHORITY["EPSG","1081"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","5681"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=bessel +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:5886</td>
      <td><strong>名称</strong><br>&emsp;TGD2005<br><strong>WKT</strong><br>&emsp;GEOGCS["TGD2005",<br>&emsp;　DATUM["Tonga_Geodetic_Datum_2005",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","1095"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","5886"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:6135</td>
      <td><strong>名称</strong><br>&emsp;CIGD11<br><strong>WKT</strong><br>&emsp;GEOGCS["CIGD11",<br>&emsp;　DATUM["Cayman_Islands_Geodetic_Datum_2011",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","1100"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","6135"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:6207</td>
      <td><strong>名称</strong><br>&emsp;Nepal 1981<br><strong>WKT</strong><br>&emsp;GEOGCS["Nepal&emsp;1981",<br>&emsp;　DATUM["Nepal_1981",<br>&emsp;　　SPHEROID["Everest&emsp;1830&emsp;(1937&emsp;Adjustment)",6377276.345,300.8017,<br>&emsp;　　　AUTHORITY["EPSG","7015"]],<br>&emsp;　　AUTHORITY["EPSG","1111"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","6207"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=evrst30 +towgs84=293.17,726.18,245.36,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:6311</td>
      <td><strong>名称</strong><br>&emsp;CGRS93<br><strong>WKT</strong><br>&emsp;GEOGCS["CGRS93",<br>&emsp;　DATUM["Cyprus_Geodetic_Reference_System_1993",<br>&emsp;　　SPHEROID["WGS&emsp;84",6378137,298.257223563,<br>&emsp;　　　AUTHORITY["EPSG","7030"]],<br>&emsp;　　AUTHORITY["EPSG","1112"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","6311"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=WGS84 +towgs84=8.846,-4.394,-1.122,-0.00237,-0.146528,0.130428,0.783926 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:6318</td>
      <td><strong>名称</strong><br>&emsp;NAD83(2011)<br><strong>WKT</strong><br>&emsp;GEOGCS["NAD83(2011)",<br>&emsp;　DATUM["NAD83_National_Spatial_Reference_System_2011",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","1116"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","6318"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:6322</td>
      <td><strong>名称</strong><br>&emsp;NAD83(PA11)<br><strong>WKT</strong><br>&emsp;GEOGCS["NAD83(PA11)",<br>&emsp;　DATUM["NAD83_National_Spatial_Reference_System_PA11",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","1117"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","6322"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:6325</td>
      <td><strong>名称</strong><br>&emsp;NAD83(MA11)<br><strong>WKT</strong><br>&emsp;GEOGCS["NAD83(MA11)",<br>&emsp;　DATUM["NAD83_National_Spatial_Reference_System_MA11",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","1118"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","6325"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:6365</td>
      <td><strong>名称</strong><br>&emsp;Mexico ITRF2008<br><strong>WKT</strong><br>&emsp;GEOGCS["Mexico&emsp;ITRF2008",<br>&emsp;　DATUM["Mexico_ITRF2008",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","1120"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","6365"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:6668</td>
      <td><strong>名称</strong><br>&emsp;JGD2011<br><strong>WKT</strong><br>&emsp;GEOGCS["JGD2011",<br>&emsp;　DATUM["Japanese_Geodetic_Datum_2011",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","1128"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","6668"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:6706</td>
      <td><strong>名称</strong><br>&emsp;RDN2008<br><strong>WKT</strong><br>&emsp;GEOGCS["RDN2008",<br>&emsp;　DATUM["Rete_Dinamica_Nazionale_2008",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","1132"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","6706"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:6783</td>
      <td><strong>名称</strong><br>&emsp;NAD83(CORS96)<br><strong>WKT</strong><br>&emsp;GEOGCS["NAD83(CORS96)",<br>&emsp;　DATUM["NAD83_Continuously_Operating_Reference_Station_1996",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","1133"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","6783"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:6881</td>
      <td><strong>名称</strong><br>&emsp;Aden 1925<br><strong>WKT</strong><br>&emsp;GEOGCS["Aden&emsp;1925",<br>&emsp;　DATUM["Aden_1925",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(RGS)",6378249.145,293.465,<br>&emsp;　　　AUTHORITY["EPSG","7012"]],<br>&emsp;　　AUTHORITY["EPSG","1135"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","6881"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378249.145 +rf=293.465 +towgs84=-24,-203,268,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:6882</td>
      <td><strong>名称</strong><br>&emsp;Bekaa Valley 1920<br><strong>WKT</strong><br>&emsp;GEOGCS["Bekaa&emsp;Valley&emsp;1920",<br>&emsp;　DATUM["Bekaa_Valley_1920",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(RGS)",6378249.145,293.465,<br>&emsp;　　　AUTHORITY["EPSG","7012"]],<br>&emsp;　　AUTHORITY["EPSG","1137"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","6882"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378249.145 +rf=293.465 +towgs84=-183,-15,273,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:6883</td>
      <td><strong>名称</strong><br>&emsp;Bioko<br><strong>WKT</strong><br>&emsp;GEOGCS["Bioko",<br>&emsp;　DATUM["Bioko",<br>&emsp;　　SPHEROID["International&emsp;1924",6378388,297,<br>&emsp;　　　AUTHORITY["EPSG","7022"]],<br>&emsp;　　AUTHORITY["EPSG","1136"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","6883"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=intl +towgs84=-235,-110,393,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:6892</td>
      <td><strong>名称</strong><br>&emsp;South East Island 1943<br><strong>WKT</strong><br>&emsp;GEOGCS["South&emsp;East&emsp;Island&emsp;1943",<br>&emsp;　DATUM["South_East_Island_1943",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(RGS)",6378249.145,293.465,<br>&emsp;　　　AUTHORITY["EPSG","7012"]],<br>&emsp;　　AUTHORITY["EPSG","1138"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","6892"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378249.145 +rf=293.465 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:6894</td>
      <td><strong>名称</strong><br>&emsp;Gambia<br><strong>WKT</strong><br>&emsp;GEOGCS["Gambia",<br>&emsp;　DATUM["Gambia",<br>&emsp;　　SPHEROID["Clarke&emsp;1880&emsp;(RGS)",6378249.145,293.465,<br>&emsp;　　　AUTHORITY["EPSG","7012"]],<br>&emsp;　　AUTHORITY["EPSG","1139"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","6894"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +a=6378249.145 +rf=293.465 +towgs84=-63,176,185,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:6980</td>
      <td><strong>名称</strong><br>&emsp;IGD05<br><strong>WKT</strong><br>&emsp;GEOGCS["IGD05",<br>&emsp;　DATUM["Israeli_Geodetic_Datum_2005",<br>&emsp;　　SPHEROID["WGS&emsp;84",6378137,298.257223563,<br>&emsp;　　　AUTHORITY["EPSG","7030"]],<br>&emsp;　　AUTHORITY["EPSG","1114"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","7136"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=WGS84 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:6983</td>
      <td><strong>名称</strong><br>&emsp;IG05 Intermediate CRS<br><strong>WKT</strong><br>&emsp;GEOGCS["IG05&emsp;Intermediate&emsp;CRS",<br>&emsp;　DATUM["IG05_Intermediate_Datum",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","1142"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","6983"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:6987</td>
      <td><strong>名称</strong><br>&emsp;IGD05/12<br><strong>WKT</strong><br>&emsp;GEOGCS["IGD05/12",<br>&emsp;　DATUM["Israeli_Geodetic_Datum_2005_2012",<br>&emsp;　　SPHEROID["WGS&emsp;84",6378137,298.257223563,<br>&emsp;　　　AUTHORITY["EPSG","7030"]],<br>&emsp;　　AUTHORITY["EPSG","1115"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","7139"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=WGS84 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:6990</td>
      <td><strong>名称</strong><br>&emsp;IG05/12 Intermediate CRS<br><strong>WKT</strong><br>&emsp;GEOGCS["IG05/12&emsp;Intermediate&emsp;CRS",<br>&emsp;　DATUM["IG05_12_Intermediate_Datum",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","1144"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","6990"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=-23.772,-17.49,-17.859,0.3132,1.85274,-1.67299,5.4262 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:7035</td>
      <td><strong>名称</strong><br>&emsp;RGSPM06 (lon-lat)<br><strong>WKT</strong><br>&emsp;GEOGCS["RGSPM06&emsp;(lon-lat)",<br>&emsp;　DATUM["Reseau_Geodesique_de_Saint_Pierre_et_Miquelon_2006",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","1038"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AUTHORITY["EPSG","7035"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:7037</td>
      <td><strong>名称</strong><br>&emsp;RGR92 (lon-lat)<br><strong>WKT</strong><br>&emsp;GEOGCS["RGR92&emsp;(lon-lat)",<br>&emsp;　DATUM["Reseau_Geodesique_de_la_Reunion_1992",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","6627"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AUTHORITY["EPSG","7037"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:7039</td>
      <td><strong>名称</strong><br>&emsp;RGM04 (lon-lat)<br><strong>WKT</strong><br>&emsp;GEOGCS["RGM04&emsp;(lon-lat)",<br>&emsp;　DATUM["Reseau_Geodesique_de_Mayotte_2004",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","1036"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AUTHORITY["EPSG","7039"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:7041</td>
      <td><strong>名称</strong><br>&emsp;RGFG95 (lon-lat)<br><strong>WKT</strong><br>&emsp;GEOGCS["RGFG95&emsp;(lon-lat)",<br>&emsp;　DATUM["Reseau_Geodesique_Francais_Guyane_1995",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","6624"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AUTHORITY["EPSG","7041"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:7073</td>
      <td><strong>名称</strong><br>&emsp;RGTAAF07<br><strong>WKT</strong><br>&emsp;GEOGCS["RGTAAF07",<br>&emsp;　DATUM["Reseau_Geodesique_des_Terres_Australes_et_Antarctiques_Francaises_2007",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","1113"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","7073"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:7084</td>
      <td><strong>名称</strong><br>&emsp;RGF93 (lon-lat)<br><strong>WKT</strong><br>&emsp;GEOGCS["RGF93&emsp;(lon-lat)",<br>&emsp;　DATUM["Reseau_Geodesique_Francais_1993",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","6171"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AUTHORITY["EPSG","7084"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:7086</td>
      <td><strong>名称</strong><br>&emsp;RGAF09 (lon-lat)<br><strong>WKT</strong><br>&emsp;GEOGCS["RGAF09&emsp;(lon-lat)",<br>&emsp;　DATUM["Reseau_Geodesique_des_Antilles_Francaises_2009",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","1073"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AUTHORITY["EPSG","7086"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:7088</td>
      <td><strong>名称</strong><br>&emsp;RGTAAF07 (lon-lat)<br><strong>WKT</strong><br>&emsp;GEOGCS["RGTAAF07&emsp;(lon-lat)",<br>&emsp;　DATUM["Reseau_Geodesique_des_Terres_Australes_et_Antarctiques_Francaises_2007",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","1113"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AUTHORITY["EPSG","7133"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:7133</td>
      <td><strong>名称</strong><br>&emsp;RGTAAF07 (lon-lat)<br><strong>WKT</strong><br>&emsp;GEOGCS["RGTAAF07&emsp;(lon-lat)",<br>&emsp;　DATUM["Reseau_Geodesique_des_Terres_Australes_et_Antarctiques_Francaises_2007",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","1113"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AUTHORITY["EPSG","7133"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:7136</td>
      <td><strong>名称</strong><br>&emsp;IGD05<br><strong>WKT</strong><br>&emsp;GEOGCS["IGD05",<br>&emsp;　DATUM["Israeli_Geodetic_Datum_2005",<br>&emsp;　　SPHEROID["WGS&emsp;84",6378137,298.257223563,<br>&emsp;　　　AUTHORITY["EPSG","7030"]],<br>&emsp;　　AUTHORITY["EPSG","1114"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","7136"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=WGS84 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:7139</td>
      <td><strong>名称</strong><br>&emsp;IGD05/12<br><strong>WKT</strong><br>&emsp;GEOGCS["IGD05/12",<br>&emsp;　DATUM["Israeli_Geodetic_Datum_2005_2012",<br>&emsp;　　SPHEROID["WGS&emsp;84",6378137,298.257223563,<br>&emsp;　　　AUTHORITY["EPSG","7030"]],<br>&emsp;　　AUTHORITY["EPSG","1115"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","7139"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=WGS84 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:7373</td>
      <td><strong>名称</strong><br>&emsp;ONGD14<br><strong>WKT</strong><br>&emsp;GEOGCS["ONGD14",<br>&emsp;　DATUM["Oman_National_Geodetic_Datum_2014",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","1147"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","7373"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:7683</td>
      <td><strong>名称</strong><br>&emsp;GSK-2011<br><strong>WKT</strong><br>&emsp;GEOGCS["GSK-2011",<br>&emsp;　DATUM["Geodezicheskaya_Sistema_Koordinat_2011",<br>&emsp;　　SPHEROID["GSK-2011",6378136.5,298.2564151,<br>&emsp;　　　AUTHORITY["EPSG","1025"]],<br>&emsp;　　AUTHORITY["EPSG","1159"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","7683"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GSK2011 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:7686</td>
      <td><strong>名称</strong><br>&emsp;Kyrg-06<br><strong>WKT</strong><br>&emsp;GEOGCS["Kyrg-06",<br>&emsp;　DATUM["Kyrgyzstan_Geodetic_Datum_2006",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","1160"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","7686"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:7798</td>
      <td><strong>名称</strong><br>&emsp;BGS2005<br><strong>WKT</strong><br>&emsp;GEOGCS["BGS2005",<br>&emsp;　DATUM["Bulgaria_Geodetic_System_2005",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","1167"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","7798"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:7844</td>
      <td><strong>名称</strong><br>&emsp;GDA2020<br><strong>WKT</strong><br>&emsp;GEOGCS["GDA2020",<br>&emsp;　DATUM["Geocentric_Datum_of_Australia_2020",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","1168"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","7844"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:7881</td>
      <td><strong>名称</strong><br>&emsp;St. Helena Tritan<br><strong>WKT</strong><br>&emsp;GEOGCS["St.&emsp;Helena&emsp;Tritan",<br>&emsp;　DATUM["St_Helena_Tritan",<br>&emsp;　　SPHEROID["WGS&emsp;84",6378137,298.257223563,<br>&emsp;　　　AUTHORITY["EPSG","7030"]],<br>&emsp;　　AUTHORITY["EPSG","1173"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","7881"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=WGS84 +towgs84=-0.077,0.079,0.086,0,0,0,0 +no_defs</td>
    </tr>
    <tr>
      <td>EPSG:7886</td>
      <td><strong>名称</strong><br>&emsp;SHGD2015<br><strong>WKT</strong><br>&emsp;GEOGCS["SHGD2015",<br>&emsp;　DATUM["St_Helena_Geodetic_Datum_2015",<br>&emsp;　　SPHEROID["GRS&emsp;1980",6378137,298.257222101,<br>&emsp;　　　AUTHORITY["EPSG","7019"]],<br>&emsp;　　AUTHORITY["EPSG","1174"]],<br>&emsp;　PRIMEM["Greenwich",0,<br>&emsp;　　AUTHORITY["EPSG","8901"]],<br>&emsp;　UNIT["degree",0.0174532925199433,<br>&emsp;　　AUTHORITY["EPSG","9122"]],<br>&emsp;　AXIS["Latitude",NORTH],<br>&emsp;　AXIS["Longitude",EAST],<br>&emsp;　AUTHORITY["EPSG","7886"]]<br><strong>Proj4</strong><br>&emsp;+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs</td>
    </tr>
  </tbody>
</table>