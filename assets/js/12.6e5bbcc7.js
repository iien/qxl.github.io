(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{241:function(t,e,a){"use strict";a.r(e);var n=a(2),s=Object(n.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"开发工具都有哪些"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发工具都有哪些","aria-hidden":"true"}},[t._v("#")]),t._v(" 开发工具都有哪些")]),t._v(" "),a("ul",[a("li",[t._v("Eclipse中安装STS插件，可点击"),a("a",{attrs:{href:"http://www.zhaoguojian.com/2018/06/15/SpringBoot%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7%E9%85%8D%E7%BD%AE%E5%92%8C%E5%85%A5%E9%97%A8%E5%9F%BA%E7%A1%80/",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1),t._v("查看步骤")]),t._v(" "),a("li",[t._v("下载开发工具Spring Tool Suite（基于Eclipse开发的），下载地址为http://spring.io/tools/sts/all/")]),t._v(" "),a("li",[t._v("使用收费的IntelliJIDEA")])]),t._v(" "),a("h2",{attrs:{id:"如何配置日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何配置日志","aria-hidden":"true"}},[t._v("#")]),t._v(" 如何配置日志")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("logging:\n  level:\n    root: INFO\n    org.hibernate: INFO\n    org.hibernate.type.descriptor.sql.BasicBinder: TRACE\n    org.hibernate.type.descriptor.sql.BasicExtractor: TRACE\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("h2",{attrs:{id:"快速新建一个项目的方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速新建一个项目的方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 快速新建一个项目的方法")]),t._v(" "),a("ul",[a("li",[t._v("使用IDEA直接new一个Spring Starter Project")]),t._v(" "),a("li",[t._v("网页https://start.spring.io/中下载项目导入")])]),t._v(" "),a("h2",{attrs:{id:"项目整合spring-boot-actuator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目整合spring-boot-actuator","aria-hidden":"true"}},[t._v("#")]),t._v(" 项目整合Spring Boot Actuator")]),t._v(" "),a("p",[t._v("只需要在pom.xml中添加")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\t\t<dependency>\n\t\t\t<groupId>org.springframework.boot</groupId>\n\t\t\t<artifactId>spring-boot-starter-actuator</artifactId>\n\t\t</dependency>\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("从2.0版本开始，默认情况下只能使用health（只显示运行状态，其他默认也不显示）和info。如果要继续显示全部，需要进行如下配置")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('management:\n  server:\n    port: 1111 \n  endpoints:\n    web:\n      base-path: /actuator\n      exposure:\n        include: "*"\n  endpoint: \n    health:\n      show-details: always\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("p",[t._v("等价于")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("#actuator端口 \nmanagement.server.port=1111\n#修改访问路径  2.0之前默认是/   2.0默认是 /actuator  可以通过这个属性值修改  \nmanagement.endpoints.web.base-path=/actuator\n#开放所有页面节点  默认只开启了health、info两个节点\nmanagement.endpoints.web.exposure.include=*\n#显示健康具体信息  默认不会显示详细信息  \nmanagement.endpoint.health.show-details=always\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v("在spring boot actuator 1.x版本中提供了13个接口")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("端点")]),t._v(" "),a("th",[t._v("描述")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("HTTP方法")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("autoconfig")]),t._v(" "),a("td",[t._v("显示自动配置的信息")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("GET")])]),t._v(" "),a("tr",[a("td",[t._v("beans")]),t._v(" "),a("td",[t._v("显示应用程序上下文所有的Spring bean")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("GET")])]),t._v(" "),a("tr",[a("td",[t._v("configprops")]),t._v(" "),a("td",[t._v("显示所有@ConfigurationProperties的配置属性列表")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("GET")])]),t._v(" "),a("tr",[a("td",[t._v("dump")]),t._v(" "),a("td",[t._v("显示线程活动的快照")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("GET")])]),t._v(" "),a("tr",[a("td",[t._v("env")]),t._v(" "),a("td",[t._v("显示应用的环境变量")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("GET")])]),t._v(" "),a("tr",[a("td",[t._v("env/{name}")]),t._v(" "),a("td",[t._v("根据名称获取特定的环境属性值")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("GET")])]),t._v(" "),a("tr",[a("td",[t._v("health")]),t._v(" "),a("td",[t._v("显示应用程序的健康指标，这些值由HealthIndicator的实现类提供")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("GET")])]),t._v(" "),a("tr",[a("td",[t._v("info")]),t._v(" "),a("td",[t._v("获取应用程序的定制信息，这些信息由info打头的属性提供")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("GET")])]),t._v(" "),a("tr",[a("td",[t._v("mappings")]),t._v(" "),a("td",[t._v("显示所有的URL路径")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("GET")])]),t._v(" "),a("tr",[a("td",[t._v("metrics")]),t._v(" "),a("td",[t._v("显示应用的度量标准信息，比如内容用量和HTTP请求计数")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("GET")])]),t._v(" "),a("tr",[a("td",[t._v("metrics/{name}")]),t._v(" "),a("td",[t._v("报告指定名称的应用程序度量值")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("GET")])]),t._v(" "),a("tr",[a("td",[t._v("shutdown")]),t._v(" "),a("td",[t._v("关闭应用（默认情况下不启用，如需启动，需设置endpoints.shutdown.enabled=true）")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("POST")])]),t._v(" "),a("tr",[a("td",[t._v("trace")]),t._v(" "),a("td",[t._v("显示跟踪信息（默认情况下为最近100个HTTP请求）")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("GET")])])])]),t._v(" "),a("p",[t._v("在 spring boot 2.x中对上述接口部分进行了更改")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("1.x端点")]),t._v(" "),a("th",[t._v("2.x端点（更改）")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("/actuator")]),t._v(" "),a("td",[t._v("不再可用。 但是，在 management.endpoints.web.base-path 的根目录中有一个映射，它提供了到所有暴露端点的链接。")])]),t._v(" "),a("tr",[a("td",[t._v("/auditevents")]),t._v(" "),a("td",[t._v("后续可能也不再用")])]),t._v(" "),a("tr",[a("td",[t._v("/autoconfig")]),t._v(" "),a("td",[t._v("重命名为 /conditions")])]),t._v(" "),a("tr",[a("td",[t._v("/docs")]),t._v(" "),a("td",[t._v("不再可用")])]),t._v(" "),a("tr",[a("td",[t._v("/health")]),t._v(" "),a("td",[t._v("现在有一个  management.endpoint.health.show-details 选项 never, always,  when-authenticated，而不是依靠 sensitive 标志来确定 health 端点是否必须显示全部细节。  默认情况下，/actuator/health公开并且不显示细节。")])]),t._v(" "),a("tr",[a("td",[t._v("/trace")]),t._v(" "),a("td",[t._v("重命名为 /httptrace")])])])]),t._v(" "),a("p",[t._v("在项目启动日志中也有所有可访问路径列表，提示类似于：Exposing 14 endpoint(s) beneath base path '/actuator'")])])},[],!1,null,null,null);e.default=s.exports}}]);