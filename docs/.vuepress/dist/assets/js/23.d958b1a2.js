(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{187:function(t,s,n){"use strict";n.r(s);var a=n(0),r=Object(a.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"无代码-crud"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#无代码-crud"}},[t._v("#")]),t._v(" 无代码 CRUD")]),t._v(" "),n("p",[t._v("当前项目内置了单表的 CRUD 函数，可以零代码实现单表的增删改查；只用简单配置路由即可；")]),t._v(" "),n("p",[t._v("无代码 CRUD，需要有 路由、dto、model 三部分组成；以下是三块的示例代码；")]),t._v(" "),n("h2",{attrs:{id:"路由"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#路由"}},[t._v("#")]),t._v(" 路由")]),t._v(" "),n("p",[t._v("完整示例：")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerSysJobRouter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("gin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RouterGroup"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" authMiddleware "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("jwt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("GinJWTMiddleware"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n r "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" v1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Group")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/sysjob"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Use")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("authMiddleware"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("MiddlewareFunc")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Use")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("middleware"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("AuthCheckRole")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  sysJob "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("models"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SysJob"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  r"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("GET")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" actions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("PermissionAction")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" actions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("IndexAction")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sysJob"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dto"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SysJobSearch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   list "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("models"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SysJob"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("list\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  r"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("GET")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/:id"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" actions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("PermissionAction")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" actions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ViewAction")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dto"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SysJobById"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("dto"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SysJobItem"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  r"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("POST")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" actions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("CreateAction")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dto"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SysJobControl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  r"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("PUT")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" actions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("PermissionAction")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" actions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("UpdateAction")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dto"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SysJobControl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  r"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("DELETE")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" actions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("PermissionAction")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" actions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("DeleteAction")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dto"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SysJobById"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"dto"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dto"}},[t._v("#")]),t._v(" dto")]),t._v(" "),n("p",[t._v("dto 支持多种查询条件判断：")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * exact / iexact 等于\n * contains / icontains 包含\n * gt / gte 大于 / 大于等于\n * lt / lte 小于 / 小于等于\n * startswith / istartswith 以…起始\n * endswith / iendswith 以…结束\n * in\n * isnull\n * order 排序\n */")]),t._v("\n")])])]),n("p",[t._v("例如：")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[t._v("search"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type:exact;column:job_id;table:sys_job"')]),t._v("`\n")])])]),n("p",[t._v("完整示例：")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" dto\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/gin-gonic/gin"')]),t._v("\n\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"go-admin/app/admin/models"')]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"go-admin/common/dto"')]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"go-admin/common/log"')]),t._v("\n\tcommon "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"go-admin/common/models"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" SysJobSearch "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tdto"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Pagination "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`search:"-"`')]),t._v("\n\tJobId          "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`form:"jobId" search:"type:exact;column:job_id;table:sys_job"`')]),t._v("\n\tJobName        "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`form:"jobName" search:"type:icontains;column:job_name;table:sys_job"`')]),t._v("\n\tJobGroup       "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`form:"jobGroup" search:"type:exact;column:job_group;table:sys_job"`')]),t._v("\n\tCronExpression "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`form:"cronExpression" search:"type:exact;column:cron_expression;table:sys_job"`')]),t._v("\n\tInvokeTarget   "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`form:"invokeTarget" search:"type:exact;column:invoke_target;table:sys_job"`')]),t._v("\n\tStatus         "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`form:"status" search:"type:exact;column:status;table:sys_job"`')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("SysJobSearch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetNeedSearch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("m\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("SysJobSearch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Bind")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("gin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\terr "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ShouldBind")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tlog"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Errorf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MsgID[%s] Bind error: %s"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" err\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("SysJobSearch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Generate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" dto"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Index "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\to "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("m\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("o\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" SysJobControl "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tJobId          "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint")]),t._v("    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"jobId"`')]),t._v("\n\tJobName        "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"jobName" validate:"required"`')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 名称")]),t._v("\n\tJobGroup       "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"jobGroup"`')]),t._v("                    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 任务分组")]),t._v("\n\tJobType        "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"jobType"`')]),t._v("                     "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 任务类型")]),t._v("\n\tCronExpression "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"cronExpression"`')]),t._v("              "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// cron表达式")]),t._v("\n\tInvokeTarget   "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"invokeTarget"`')]),t._v("                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用目标")]),t._v("\n\tArgs           "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"args"`')]),t._v("                        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 目标参数")]),t._v("\n\tMisfirePolicy  "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"misfirePolicy"`')]),t._v("               "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行策略")]),t._v("\n\tConcurrent     "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"concurrent"`')]),t._v("                  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否并发")]),t._v("\n\tStatus         "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"status"`')]),t._v("                      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 状态")]),t._v("\n\tEntryId        "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"entryId"`')]),t._v("                     "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// job启动时返回的id")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("SysJobControl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Bind")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("gin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ShouldBind")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("SysJobControl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Generate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" dto"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Control "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tcp "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("s\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("cp\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("SysJobControl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("GenerateM")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("common"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ActiveRecord"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("models"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SysJob"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tJobId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("          s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("JobId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tJobName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("        s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("JobName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tJobGroup"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("       s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("JobGroup"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tJobType"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("        s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("JobType"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tCronExpression"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CronExpression"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tInvokeTarget"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("   s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("InvokeTarget"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tArgs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("           s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tMisfirePolicy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MisfirePolicy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tConcurrent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("     s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Concurrent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tStatus"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("         s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Status"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tEntryId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("        s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EntryId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("SysJobControl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("JobId\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" SysJobById "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tdto"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ObjectById\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("SysJobById"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Generate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" dto"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Control "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tcp "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("s\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("cp\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("SysJobById"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("GenerateM")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("common"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ActiveRecord"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("models"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SysJob"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"model"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#model"}},[t._v("#")]),t._v(" model")]),t._v(" "),n("p",[t._v("完整示例：")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" SysJob "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tJobId          "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"jobId" gorm:"primary_key;AUTO_INCREMENT"`')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 编码")]),t._v("\n\tJobName        "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"jobName" gorm:"size:255;"`')]),t._v("                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 名称")]),t._v("\n\tJobGroup       "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"jobGroup" gorm:"size:255;"`')]),t._v("               "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 任务分组")]),t._v("\n\tJobType        "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"jobType" gorm:"size:1;"`')]),t._v("                  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 任务类型")]),t._v("\n\tCronExpression "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"cronExpression" gorm:"size:255;"`')]),t._v("         "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// cron表达式")]),t._v("\n\tInvokeTarget   "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"invokeTarget" gorm:"size:255;"`')]),t._v("           "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用目标")]),t._v("\n\tArgs           "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"args" gorm:"size:255;"`')]),t._v("                   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 目标参数")]),t._v("\n\tMisfirePolicy  "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"misfirePolicy" gorm:"size:255;"`')]),t._v("          "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行策略")]),t._v("\n\tConcurrent     "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"concurrent" gorm:"size:1;"`')]),t._v("               "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否并发")]),t._v("\n\tStatus         "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"status" gorm:"size:1;"`')]),t._v("                   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 状态")]),t._v("\n\tEntryId        "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"entry_id" gorm:"size:11;"`')]),t._v("                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// job启动时返回的id")]),t._v("\n\tCreateBy       "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"createBy" gorm:"size:128;"`')]),t._v("               "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n\tUpdateBy       "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"updateBy" gorm:"size:128;"`')]),t._v("               "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n\tBaseModel\n\n\tDataScope      "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"dataScope" gorm:"-"`')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}],!1,null,null,null);s.default=r.exports}}]);