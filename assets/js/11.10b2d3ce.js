(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{240:function(t,_,v){"use strict";v.r(_);var r=v(2),o=Object(r.a)({},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"介绍"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#介绍","aria-hidden":"true"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),v("p",[t._v("Sping Cloud知识体系是平时是平时的学习笔记，主要是记录一些常用知识点方便日后方便查阅。感觉很合适新手使用所以就分享出来，让新手能够遇到更少的坑。")]),t._v(" "),v("p",[t._v("目前内容还比较少，人后不会断更新，希望大家多多关注。")]),t._v(" "),v("p",[t._v("如问题可以在本页留言或者前往"),v("a",{attrs:{href:"https://gitter.im/qingxueline/Lobby",target:"_blank",rel:"noopener noreferrer"}},[t._v("交流大厅"),v("OutboundLink")],1)]),t._v(" "),v("p",[t._v("在看文章的前面，请你务必先了解清楚Spring Cloud个别版本的演进关系。这样会为你日后接入第三方组件提供很好的支持，比如"),v("a",{attrs:{href:"https://nacos.io/zh-cn/docs/quick-start.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nacos"),v("OutboundLink")],1),t._v("。")]),t._v(" "),v("h2",{attrs:{id:"spring-cloud是什么？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#spring-cloud是什么？","aria-hidden":"true"}},[t._v("#")]),t._v(" Spring Cloud是什么？")]),t._v(" "),v("p",[t._v("“Spring Cloud provides tools for developers to quickly build some of the common patterns in distributed systems.”")]),t._v(" "),v("p",[t._v("Spring Cloud为开发者提供了一套可以用来快速搭建分布式系统中常见模式的工具。提取主干即是Spring Cloud提供了一套工具。这些工具为开发人员提供了分布式系统下常见问题的通用解决方案。这些方案涵盖了配置管理，服务发现，断路器，智能路由，微代理，控制总线，一次性TOKEN，全局锁，leader选举，分布式session等。")]),t._v(" "),v("h2",{attrs:{id:"spring-cloud的演进"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#spring-cloud的演进","aria-hidden":"true"}},[t._v("#")]),t._v(" Spring Cloud的演进")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("版本名称")]),t._v(" "),v("th",[t._v("版本")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Finchley")]),t._v(" "),v("td",[t._v("snapshot版")])]),t._v(" "),v("tr",[v("td",[t._v("Edgware")]),t._v(" "),v("td",[t._v("snapshot版")])]),t._v(" "),v("tr",[v("td",[t._v("Dalston SR1")]),t._v(" "),v("td",[t._v("当前最新稳定版本")])]),t._v(" "),v("tr",[v("td",[t._v("Camden SR7")]),t._v(" "),v("td",[t._v("稳定版本")])]),t._v(" "),v("tr",[v("td",[t._v("Brixton SR7")]),t._v(" "),v("td",[t._v("稳定版本")])]),t._v(" "),v("tr",[v("td",[t._v("Angel SR6")]),t._v(" "),v("td",[t._v("稳定版本")])])])]),t._v(" "),v("p",[t._v("Spring Cloud 的版本号很奇怪，不同意其他的软件，之前我也很蒙。从下低版本的Angel到上高版本Finchley可以看出，版本的第一个字母是按照A－Z顺序编排的。")]),t._v(" "),v("p",[t._v("这些单词是什么含义呢，大概的搜一下可以得出基本都是地名，官方说明是这些版本号的单词来自于英国伦敦的地铁站站名。")]),t._v(" "),v("p",[t._v("那么为什么要用单词而不是数字类型的版本号呢？\n因为Spring Cloud包含了一系列的子系统，Spring Cloud Config，Spring Cloud Netflix，Spring Cloud Bus等，为了防止与这些子系统的版本号混淆，Spring Cloud的版本号全部使用英文单词。")]),t._v(" "),v("p",[t._v("版本号后面的SRX，X代表一个数字，这个是小版本号，就是在特定的版本中，修复一些致命问题，做的升级版本号。")]),t._v(" "),v("h2",{attrs:{id:"spring-cloud与spring-boot版本匹配关系"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#spring-cloud与spring-boot版本匹配关系","aria-hidden":"true"}},[t._v("#")]),t._v(" Spring Cloud与Spring Boot版本匹配关系")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Spring Cloud")]),t._v(" "),v("th",[t._v("Spring Boot")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Finchley")]),t._v(" "),v("td",[t._v("兼容Spring Boot 2.0.x，不兼容Spring Boot 1.5.x")])]),t._v(" "),v("tr",[v("td",[t._v("Dalston和Edgware")]),t._v(" "),v("td",[t._v("兼容Spring Boot 1.5.x，不兼容Spring Boot 2.0.x")])]),t._v(" "),v("tr",[v("td",[t._v("Camden")]),t._v(" "),v("td",[t._v("兼容Spring Boot 1.4.x，也兼容Spring Boot 1.5.x")])]),t._v(" "),v("tr",[v("td",[t._v("Brixton")]),t._v(" "),v("td",[t._v("兼容Spring Boot 1.3.x，也兼容Spring Boot 1.4.x")])]),t._v(" "),v("tr",[v("td",[t._v("Angel")]),t._v(" "),v("td",[t._v("兼容Spring Boot 1.2.x")])])])]),t._v(" "),v("p",[t._v("上面的大概意思就是如果你使用的是Finchley版本的Spring Cloud，那么你的Spring Boot版本的时候只能选择 Spring Boot 2.0.x。")]),t._v(" "),v("p",[t._v("这个同时兼容到后面我们要学习的"),v("a",{attrs:{href:"https://nacos.io/zh-cn/docs/quick-start.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nacos"),v("OutboundLink")],1),t._v("。")]),t._v(" "),v("p",[t._v("在里面我也把Nacos的版本支持贴下处理，给大家做个准备，因为我之前在将"),v("code",[t._v("Eureka Client")]),t._v(" 改为Nacos的时候就遇到了这个坑，就是忽略了版本的关系。")]),t._v(" "),v("p",[t._v("版本依赖关系：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Spring Cloud Version")]),t._v(" "),v("th",[t._v("Spring Cloud Alibaba Version")]),t._v(" "),v("th",[t._v("Spring Boot Version")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Spring Cloud Greenwich")]),t._v(" "),v("td",[t._v("0.9.0.RELEASE")]),t._v(" "),v("td",[t._v("2.1.X.RELEASE")])]),t._v(" "),v("tr",[v("td",[t._v("Spring Cloud Finchley")]),t._v(" "),v("td",[t._v("0.2.X.RELEASE")]),t._v(" "),v("td",[t._v("2.0.X.RELEASE")])]),t._v(" "),v("tr",[v("td",[t._v("Spring Cloud Edgware")]),t._v(" "),v("td",[t._v("0.1.X.RELEASE")]),t._v(" "),v("td",[t._v("1.5.X.RELEASE")])])])]),t._v(" "),v("p",[t._v("组件依赖关系：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Spring Cloud Alibaba Version")]),t._v(" "),v("th",[t._v("Sentinel Version")]),t._v(" "),v("th",[t._v("Nacos Version")]),t._v(" "),v("th",[t._v("RocketMQ Version")]),t._v(" "),v("th",[t._v("Dubbo Version")]),t._v(" "),v("th",[t._v("Seata Version")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("0.9.0.RELEASE or 0.2.2.RELEASE or 0.1.2.RELEASE")]),t._v(" "),v("td",[t._v("1.5.2")]),t._v(" "),v("td",[t._v("1.0.0")]),t._v(" "),v("td",[t._v("4.4.0")]),t._v(" "),v("td",[t._v("2.7.1")]),t._v(" "),v("td",[t._v("0.4.2")])]),t._v(" "),v("tr",[v("td",[t._v("0.2.1.RELEASE or 0.1.1.RELEASE")]),t._v(" "),v("td",[t._v("1.4.0")]),t._v(" "),v("td",[t._v("0.6.2")]),t._v(" "),v("td",[t._v("4.3.1")]),t._v(" "),v("td",[t._v("❌")]),t._v(" "),v("td",[t._v("❌")])]),t._v(" "),v("tr",[v("td",[t._v("0.2.0.RELEASE or 0.1.0.RELEASE")]),t._v(" "),v("td",[t._v("1.3.0-GA")]),t._v(" "),v("td",[t._v("0.3.0")]),t._v(" "),v("td",[t._v("❌")]),t._v(" "),v("td",[t._v("❌")]),t._v(" "),v("td",[t._v("❌")])])])])])},[],!1,null,null,null);_.default=o.exports}}]);