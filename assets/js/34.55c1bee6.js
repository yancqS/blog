(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{568:function(s,a,t){"use strict";t.r(a);var n=t(7),r=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"_349-两个数组的交集"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_349-两个数组的交集"}},[s._v("#")]),s._v(" 349.两个数组的交集")]),s._v(" "),t("h2",{attrs:{id:"描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#描述"}},[s._v("#")]),s._v(" 描述")]),s._v(" "),t("p",[s._v("给定两个数组，编写一个函数来计算它们的交集。")]),s._v(" "),t("h2",{attrs:{id:"示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[s._v("#")]),s._v(" 示例")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("示例1")]),s._v(" "),t("p",[s._v("输入：nums1 = [1,2,2,1], nums2 = [2,2]")]),s._v(" "),t("p",[s._v("输出：[2]")])]),s._v(" "),t("li",[t("p",[s._v("示例2")]),s._v(" "),t("p",[s._v("输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]")]),s._v(" "),t("p",[s._v("输出：[9,4]")])])]),s._v(" "),t("h2",{attrs:{id:"代码及思路"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代码及思路"}},[s._v("#")]),s._v(" 代码及思路")]),s._v(" "),t("h3",{attrs:{id:"思路"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[s._v("#")]),s._v(" 思路")]),s._v(" "),t("p",[s._v("对这两个数组中的任意一个数组进行遍历，然后判断另一个数组中是有这个值，如果有就把这个值添加到到结果集合中(主要考虑到集合的元素不重复)。遍历结束后，将集合转为数组返回即可。")]),s._v(" "),t("h3",{attrs:{id:"代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[s._v("#")]),s._v(" 代码")]),s._v(" "),t("div",{staticClass:"language-javascrit line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("/**\n * @param {number[]} nums1\n * @param {number[]} nums2\n * @return {number[]}\n */\nlet intersection = function(nums1, nums2) {\n  let res = new Set();\n  for(let item of nums1) {\n    if(nums2.includes(item)) {\n      res.add(item);\n    }\n  }\n  return Array.from(res);\n};\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("comment")],1)}),[],!1,null,null,null);a.default=r.exports}}]);